#!/usr/bin/env node

/**
 * Notion キャッシュ監視・アラートシステム
 * キャッシュの健全性を監視し、問題があればアラートを発行
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { 
  validateCacheHealth,
  getCacheStats,
  loadCacheMetadata 
} from '../../lib/cache-loader.js';
import { DATABASES, validateDatabaseConfig } from './database-config.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CACHE_DIR = path.resolve(__dirname, '../../cache/notion-data');
const METADATA_FILE = path.resolve(__dirname, '../../cache/metadata.json');
const MONITOR_LOG_FILE = path.resolve(__dirname, '../../cache/monitor.log');

/**
 * 監視設定
 */
const MONITOR_CONFIG = {
  // アラート閾値
  thresholds: {
    maxCacheAge: 24 * 60 * 60 * 1000, // 24時間
    criticalCacheAge: 7 * 24 * 60 * 60 * 1000, // 7日
    minExpectedFiles: 25, // 最小期待ファイル数
    maxFailureRate: 0.1, // 最大失敗率（10%）
    minDataRecords: 1 // データベースあたりの最小レコード数
  },
  
  // 重要データベース（必須）
  criticalDatabases: [
    'slider', 'sponsors', 'about', 'mission', 'vision',
    'staff', 'classes', 'schedule'
  ],
  
  // 監視レベル
  alertLevels: {
    INFO: 'info',
    WARNING: 'warning', 
    ERROR: 'error',
    CRITICAL: 'critical'
  }
};

/**
 * アラートログを記録
 */
async function logAlert(level, message, details = {}) {
  const timestamp = new Date().toISOString();
  const logEntry = {
    timestamp,
    level,
    message,
    details,
    hostname: process.env.HOSTNAME || 'unknown',
    branch: process.env.GITHUB_REF_NAME || 'local'
  };
  
  try {
    // コンソール出力
    const levelIcon = {
      info: '📋',
      warning: '⚠️',
      error: '❌', 
      critical: '🚨'
    };
    
    console.log(`${levelIcon[level]} [${level.toUpperCase()}] ${message}`);
    if (Object.keys(details).length > 0) {
      console.log('  詳細:', JSON.stringify(details, null, 2));
    }
    
    // ログファイルに追記
    const logLine = JSON.stringify(logEntry) + '\n';
    await fs.appendFile(MONITOR_LOG_FILE, logLine);
    
  } catch (error) {
    console.error('⚠️ ログ記録に失敗:', error.message);
  }
}

/**
 * キャッシュファイルの詳細分析
 */
async function analyzeCacheFiles() {
  const analysis = {
    totalFiles: 0,
    validFiles: 0,
    corruptedFiles: [],
    emptyFiles: [],
    missingCritical: [],
    outdatedFiles: [],
    fileSizes: {},
    recordCounts: {}
  };
  
  try {
    const files = await fs.readdir(CACHE_DIR);
    const jsonFiles = files.filter(file => file.endsWith('.json'));
    analysis.totalFiles = jsonFiles.length;
    
    for (const file of jsonFiles) {
      const filePath = path.join(CACHE_DIR, file);
      const dataType = path.basename(file, '.json');
      
      try {
        // ファイル統計
        const stats = await fs.stat(filePath);
        analysis.fileSizes[dataType] = stats.size;
        
        // ファイル内容確認
        const content = await fs.readFile(filePath, 'utf-8');
        const data = JSON.parse(content);
        
        if (!Array.isArray(data)) {
          analysis.corruptedFiles.push({ file: dataType, reason: 'Not an array' });
          continue;
        }
        
        if (data.length === 0) {
          analysis.emptyFiles.push(dataType);
        } else if (data.length < MONITOR_CONFIG.thresholds.minDataRecords) {
          analysis.emptyFiles.push(dataType);
        }
        
        analysis.recordCounts[dataType] = data.length;
        
        // 古いファイルチェック
        const age = Date.now() - stats.mtime.getTime();
        if (age > MONITOR_CONFIG.thresholds.criticalCacheAge) {
          analysis.outdatedFiles.push({
            file: dataType,
            age: Math.round(age / 1000 / 60 / 60 / 24) + '日'
          });
        }
        
        analysis.validFiles++;
        
      } catch (error) {
        analysis.corruptedFiles.push({ 
          file: dataType, 
          reason: error.message 
        });
      }
    }
    
    // 重要ファイルの欠損チェック
    for (const critical of MONITOR_CONFIG.criticalDatabases) {
      if (!jsonFiles.includes(`${critical}.json`)) {
        analysis.missingCritical.push(critical);
      }
    }
    
  } catch (error) {
    await logAlert('error', 'キャッシュファイル分析に失敗', { error: error.message });
  }
  
  return analysis;
}

/**
 * メタデータ分析
 */
async function analyzeMetadata() {
  const analysis = {
    exists: false,
    valid: false,
    lastUpdate: null,
    databaseCount: 0,
    inconsistencies: [],
    age: null
  };
  
  try {
    const metadata = await loadCacheMetadata();
    
    if (!metadata) {
      analysis.exists = false;
      return analysis;
    }
    
    analysis.exists = true;
    analysis.lastUpdate = metadata.lastUpdate;
    analysis.databaseCount = metadata.databases ? Object.keys(metadata.databases).length : 0;
    
    if (metadata.lastUpdate) {
      analysis.age = Date.now() - new Date(metadata.lastUpdate).getTime();
    }
    
    // データベース数の整合性チェック
    const expectedDatabases = Object.keys(DATABASES).length;
    if (analysis.databaseCount !== expectedDatabases) {
      analysis.inconsistencies.push(
        `データベース数不一致: 期待 ${expectedDatabases}, 実際 ${analysis.databaseCount}`
      );
    }
    
    analysis.valid = analysis.inconsistencies.length === 0;
    
  } catch (error) {
    await logAlert('error', 'メタデータ分析に失敗', { error: error.message });
  }
  
  return analysis;
}

/**
 * パフォーマンス分析
 */
async function analyzePerformance() {
  const analysis = {
    buildTimeEstimate: null,
    cacheEfficiency: null,
    totalCacheSize: 0,
    averageFileSize: 0,
    potentialApiCalls: 0,
    timeSaved: null
  };
  
  try {
    const stats = await getCacheStats();
    analysis.totalCacheSize = stats.totalSize;
    analysis.averageFileSize = stats.totalFiles > 0 ? stats.totalSize / stats.totalFiles : 0;
    
    // API呼び出し数の推定
    analysis.potentialApiCalls = Object.keys(DATABASES).length;
    
    // 時間節約の推定（API呼び出し1回 = 平均1秒と仮定）
    const avgApiCallTime = 1000; // ms
    const avgFileReadTime = 10; // ms
    analysis.timeSaved = (analysis.potentialApiCalls * avgApiCallTime) - (stats.totalFiles * avgFileReadTime);
    
    // キャッシュ効率性（API呼び出しを避けた割合）
    analysis.cacheEfficiency = stats.totalFiles / analysis.potentialApiCalls;
    
    // ビルド時間推定
    if (analysis.cacheEfficiency > 0.8) {
      analysis.buildTimeEstimate = '1-2分（高速）';
    } else if (analysis.cacheEfficiency > 0.5) {
      analysis.buildTimeEstimate = '2-4分（中速）';
    } else {
      analysis.buildTimeEstimate = '5-10分（低速）';
    }
    
  } catch (error) {
    await logAlert('error', 'パフォーマンス分析に失敗', { error: error.message });
  }
  
  return analysis;
}

/**
 * 総合監視実行
 */
async function runMonitoring() {
  console.log('🔍 Notion キャッシュ監視開始...');
  console.log('='.repeat(60));
  
  const report = {
    timestamp: new Date().toISOString(),
    overall_status: 'healthy',
    alerts: [],
    analysis: {}
  };
  
  try {
    // 1. 基本ヘルスチェック
    const health = await validateCacheHealth();
    report.analysis.health = health;
    
    if (health.status !== 'healthy') {
      report.overall_status = health.status;
      await logAlert('warning', 'ヘルスチェックで問題検出', health);
    }
    
    // 2. キャッシュファイル詳細分析
    const fileAnalysis = await analyzeCacheFiles();
    report.analysis.files = fileAnalysis;
    
    // ファイル関連アラート
    if (fileAnalysis.missingCritical.length > 0) {
      report.overall_status = 'critical';
      await logAlert('critical', '重要キャッシュファイルが不足', {
        missing: fileAnalysis.missingCritical
      });
    }
    
    if (fileAnalysis.corruptedFiles.length > 0) {
      report.overall_status = 'error';
      await logAlert('error', '破損したキャッシュファイル検出', {
        corrupted: fileAnalysis.corruptedFiles
      });
    }
    
    if (fileAnalysis.emptyFiles.length > 0) {
      await logAlert('warning', '空のキャッシュファイル検出', {
        empty: fileAnalysis.emptyFiles
      });
    }
    
    if (fileAnalysis.outdatedFiles.length > 0) {
      await logAlert('warning', '古いキャッシュファイル検出', {
        outdated: fileAnalysis.outdatedFiles
      });
    }
    
    // 3. メタデータ分析
    const metadataAnalysis = await analyzeMetadata();
    report.analysis.metadata = metadataAnalysis;
    
    if (!metadataAnalysis.exists) {
      await logAlert('error', 'メタデータファイルが存在しません');
      report.overall_status = 'error';
    } else if (!metadataAnalysis.valid) {
      await logAlert('warning', 'メタデータに不整合があります', {
        inconsistencies: metadataAnalysis.inconsistencies
      });
    }
    
    // 4. パフォーマンス分析
    const performanceAnalysis = await analyzePerformance();
    report.analysis.performance = performanceAnalysis;
    
    if (performanceAnalysis.cacheEfficiency < 0.5) {
      await logAlert('warning', 'キャッシュ効率が低下しています', {
        efficiency: Math.round(performanceAnalysis.cacheEfficiency * 100) + '%'
      });
    }
    
    // 5. 全体サマリー出力
    console.log('\n📊 監視結果サマリー:');
    console.log('='.repeat(60));
    console.log(`🎯 全体ステータス: ${report.overall_status}`);
    console.log(`📁 キャッシュファイル: ${fileAnalysis.validFiles}/${fileAnalysis.totalFiles} 有効`);
    console.log(`📋 メタデータ: ${metadataAnalysis.exists ? '✅' : '❌'}`);
    console.log(`⚡ キャッシュ効率: ${Math.round(performanceAnalysis.cacheEfficiency * 100)}%`);
    console.log(`💾 総キャッシュサイズ: ${Math.round(performanceAnalysis.totalCacheSize / 1024)}KB`);
    console.log(`⏱️ 推定ビルド時間: ${performanceAnalysis.buildTimeEstimate}`);
    console.log(`💰 推定時間節約: ${Math.round(performanceAnalysis.timeSaved / 1000)}秒`);
    
    if (metadataAnalysis.lastUpdate) {
      const lastUpdateDate = new Date(metadataAnalysis.lastUpdate);
      console.log(`🕐 最終更新: ${lastUpdateDate.toLocaleString()}`);
    }
    
    console.log('='.repeat(60));
    
    // GitHub Actions 環境での出力
    if (process.env.GITHUB_ACTIONS) {
      console.log('\n## 📊 キャッシュ監視レポート');
      console.log(`| 項目 | 状況 |`);
      console.log(`|------|------|`);
      console.log(`| 全体ステータス | ${report.overall_status} |`);
      console.log(`| 有効ファイル数 | ${fileAnalysis.validFiles}/${fileAnalysis.totalFiles} |`);
      console.log(`| キャッシュ効率 | ${Math.round(performanceAnalysis.cacheEfficiency * 100)}% |`);
      console.log(`| 推定ビルド時間 | ${performanceAnalysis.buildTimeEstimate} |`);
    }
    
  } catch (error) {
    await logAlert('critical', '監視実行中に重大なエラーが発生', {
      error: error.message,
      stack: error.stack
    });
    report.overall_status = 'critical';
  }
  
  return report;
}

/**
 * アラート設定テスト
 */
async function testAlerts() {
  console.log('🧪 アラート機能テスト開始...');
  
  await logAlert('info', 'テスト用INFO アラート', { test: true });
  await logAlert('warning', 'テスト用WARNING アラート', { test: true });
  await logAlert('error', 'テスト用ERROR アラート', { test: true });
  
  console.log('✅ アラート機能テスト完了');
}

/**
 * ログファイルの表示
 */
async function showLogs(lines = 20) {
  try {
    const logContent = await fs.readFile(MONITOR_LOG_FILE, 'utf-8');
    const logLines = logContent.split('\n').filter(line => line.trim());
    const recentLogs = logLines.slice(-lines);
    
    console.log(`📜 最新の監視ログ (${recentLogs.length}件):`);
    console.log('='.repeat(60));
    
    recentLogs.forEach(line => {
      try {
        const log = JSON.parse(line);
        const time = new Date(log.timestamp).toLocaleString();
        console.log(`[${time}] ${log.level.toUpperCase()}: ${log.message}`);
      } catch {
        console.log(line);
      }
    });
    
  } catch (error) {
    console.log('📜 監視ログファイルが見つかりません（初回実行）');
  }
}

// コマンドライン引数処理
const args = process.argv.slice(2);

async function main() {
  if (args.length === 0) {
    // デフォルトで監視実行
    await runMonitoring();
    return;
  }
  
  const command = args[0];
  
  switch (command) {
    case 'test':
      await testAlerts();
      break;
    case 'logs':
      const lineCount = args[1] ? parseInt(args[1]) : 20;
      await showLogs(lineCount);
      break;
    default:
      await runMonitoring();
      break;
  }
}

main().catch(error => {
  console.error('💥 監視実行エラー:', error);
  process.exit(1);
});