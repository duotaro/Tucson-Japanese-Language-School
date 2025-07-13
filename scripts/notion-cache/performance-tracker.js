#!/usr/bin/env node

/**
 * Notion キャッシュ システム パフォーマンス計測
 * ビルド時間、API呼び出し数、キャッシュ効率などを継続的に計測・記録
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { getCacheStats, loadCacheMetadata } from '../../lib/cache-loader.js';
import { DATABASES } from './database-config.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PERFORMANCE_LOG_FILE = path.resolve(__dirname, '../../cache/performance.json');
const BENCHMARK_FILE = path.resolve(__dirname, '../../cache/benchmarks.json');

/**
 * パフォーマンス計測クラス
 */
class PerformanceTracker {
  constructor() {
    this.metrics = {};
    this.startTimes = {};
    this.baseline = null;
  }

  /**
   * 計測開始
   */
  start(metricName) {
    this.startTimes[metricName] = process.hrtime.bigint();
    console.log(`⏱️ 計測開始: ${metricName}`);
  }

  /**
   * 計測終了
   */
  end(metricName) {
    if (!this.startTimes[metricName]) {
      throw new Error(`Metric ${metricName} not started`);
    }
    
    const endTime = process.hrtime.bigint();
    const duration = Number(endTime - this.startTimes[metricName]) / 1000000; // ナノ秒 → ミリ秒
    
    this.metrics[metricName] = duration;
    delete this.startTimes[metricName];
    
    console.log(`✅ 計測完了: ${metricName} = ${duration.toFixed(2)}ms`);
    return duration;
  }

  /**
   * カウンター追加
   */
  increment(metricName, value = 1) {
    if (!this.metrics[metricName]) {
      this.metrics[metricName] = 0;
    }
    this.metrics[metricName] += value;
  }

  /**
   * 値設定
   */
  set(metricName, value) {
    this.metrics[metricName] = value;
  }

  /**
   * 計測結果取得
   */
  getMetrics() {
    return { ...this.metrics };
  }
}

/**
 * ベースラインパフォーマンス設定
 */
const BASELINE_METRICS = {
  // API方式（キャッシュなし）の想定値
  withoutCache: {
    totalApiCalls: Object.keys(DATABASES).length, // 30個
    avgApiCallTime: 1000, // 1秒/API呼び出し
    buildTime: 300000, // 5分
    networkTraffic: 1024 * 1024, // 1MB推定
    rateLimit: 334 // 334ms間隔必要
  },
  
  // キャッシュ使用時の目標値
  withCache: {
    totalApiCalls: 0,
    avgFileReadTime: 10, // 10ms/ファイル読み込み
    buildTime: 120000, // 2分
    networkTraffic: 0,
    cacheSize: 200 * 1024 // 200KB推定
  }
};

/**
 * 現在のキャッシュパフォーマンスを計測
 */
async function measureCachePerformance() {
  const tracker = new PerformanceTracker();
  
  console.log('📊 キャッシュパフォーマンス計測開始...');
  
  try {
    // 1. キャッシュ統計取得時間
    tracker.start('cache_stats_time');
    const cacheStats = await getCacheStats();
    tracker.end('cache_stats_time');
    
    // 2. メタデータ読み込み時間
    tracker.start('metadata_read_time');
    const metadata = await loadCacheMetadata();
    tracker.end('metadata_read_time');
    
    // 3. 個別ファイル読み込み時間テスト
    tracker.start('file_read_test');
    const testFiles = ['slider', 'sponsors', 'about', 'staff', 'classes'];
    let totalReadTime = 0;
    
    for (const dataType of testFiles) {
      const startTime = process.hrtime.bigint();
      try {
        const filePath = path.resolve(__dirname, `../../cache/notion-data/${dataType}.json`);
        await fs.readFile(filePath, 'utf-8');
        const readTime = Number(process.hrtime.bigint() - startTime) / 1000000;
        totalReadTime += readTime;
      } catch (error) {
        console.warn(`⚠️ ${dataType}.json の読み込みに失敗: ${error.message}`);
      }
    }
    tracker.end('file_read_test');
    
    // 4. パフォーマンス指標算出
    const avgFileReadTime = totalReadTime / testFiles.length;
    const estimatedTotalReadTime = avgFileReadTime * cacheStats.totalFiles;
    const cacheEfficiency = cacheStats.totalFiles / BASELINE_METRICS.withoutCache.totalApiCalls;
    const timeSaved = BASELINE_METRICS.withoutCache.buildTime - estimatedTotalReadTime;
    const improvementRatio = (timeSaved / BASELINE_METRICS.withoutCache.buildTime) * 100;
    
    // メトリクス設定
    tracker.set('total_cache_files', cacheStats.totalFiles);
    tracker.set('total_cache_size', cacheStats.totalSize);
    tracker.set('avg_file_read_time', avgFileReadTime);
    tracker.set('estimated_total_read_time', estimatedTotalReadTime);
    tracker.set('cache_efficiency', cacheEfficiency);
    tracker.set('time_saved_ms', timeSaved);
    tracker.set('improvement_ratio', improvementRatio);
    tracker.set('network_calls_avoided', BASELINE_METRICS.withoutCache.totalApiCalls);
    
    // レポート生成
    const report = {
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV || 'development',
      metrics: tracker.getMetrics(),
      cacheStats,
      metadata,
      analysis: {
        status: cacheEfficiency > 0.8 ? 'excellent' : cacheEfficiency > 0.5 ? 'good' : 'poor',
        recommendations: []
      }
    };
    
    // 推奨事項生成
    if (cacheEfficiency < 0.8) {
      report.analysis.recommendations.push('キャッシュファイル数が不足しています。全データベースの更新を検討してください。');
    }
    
    if (avgFileReadTime > 50) {
      report.analysis.recommendations.push('ファイル読み込み時間が長いです。ストレージ性能を確認してください。');
    }
    
    if (cacheStats.totalSize > 1024 * 1024) {
      report.analysis.recommendations.push('キャッシュサイズが大きいです。不要なデータの削除を検討してください。');
    }
    
    console.log('\n📊 パフォーマンス計測結果:');
    console.log('='.repeat(60));
    console.log(`📁 キャッシュファイル数: ${cacheStats.totalFiles}`);
    console.log(`💾 総キャッシュサイズ: ${Math.round(cacheStats.totalSize / 1024)}KB`);
    console.log(`⚡ 平均ファイル読み込み時間: ${avgFileReadTime.toFixed(2)}ms`);
    console.log(`🎯 キャッシュ効率: ${(cacheEfficiency * 100).toFixed(1)}%`);
    console.log(`💰 推定時間節約: ${(timeSaved / 1000).toFixed(1)}秒`);
    console.log(`📈 パフォーマンス改善率: ${improvementRatio.toFixed(1)}%`);
    console.log(`🌐 回避したAPI呼び出し: ${BASELINE_METRICS.withoutCache.totalApiCalls}回`);
    console.log(`📊 分析ステータス: ${report.analysis.status}`);
    
    if (report.analysis.recommendations.length > 0) {
      console.log('\n💡 推奨事項:');
      report.analysis.recommendations.forEach((rec, i) => {
        console.log(`  ${i + 1}. ${rec}`);
      });
    }
    
    return report;
    
  } catch (error) {
    console.error('❌ パフォーマンス計測エラー:', error.message);
    throw error;
  }
}

/**
 * ビルド時間計測
 */
async function measureBuildTime(command = 'yarn build') {
  const tracker = new PerformanceTracker();
  
  console.log(`🏗️ ビルド時間計測開始: ${command}`);
  
  tracker.start('build_time');
  
  try {
    const { spawn } = await import('child_process');
    
    return new Promise((resolve, reject) => {
      const [cmd, ...args] = command.split(' ');
      const buildProcess = spawn(cmd, args, {
        stdio: 'pipe',
        cwd: process.cwd()
      });
      
      let stdout = '';
      let stderr = '';
      
      buildProcess.stdout.on('data', (data) => {
        stdout += data.toString();
      });
      
      buildProcess.stderr.on('data', (data) => {
        stderr += data.toString();
      });
      
      buildProcess.on('close', (code) => {
        const buildTime = tracker.end('build_time');
        
        const result = {
          command,
          exitCode: code,
          buildTime,
          success: code === 0,
          timestamp: new Date().toISOString(),
          stdout: stdout.slice(-1000), // 最後の1000文字のみ
          stderr: stderr.slice(-1000)
        };
        
        if (code === 0) {
          console.log(`✅ ビルド成功: ${(buildTime / 1000).toFixed(1)}秒`);
          resolve(result);
        } else {
          console.log(`❌ ビルド失敗: ${(buildTime / 1000).toFixed(1)}秒`);
          reject(new Error(`Build failed with code ${code}`));
        }
      });
      
      buildProcess.on('error', (error) => {
        console.error('❌ ビルドプロセスエラー:', error.message);
        reject(error);
      });
    });
    
  } catch (error) {
    console.error('❌ ビルド計測エラー:', error.message);
    throw error;
  }
}

/**
 * パフォーマンスログの保存
 */
async function savePerformanceLog(data) {
  try {
    let logs = [];
    
    // 既存ログの読み込み
    try {
      const existing = await fs.readFile(PERFORMANCE_LOG_FILE, 'utf-8');
      logs = JSON.parse(existing);
      if (!Array.isArray(logs)) logs = [];
    } catch {
      // ファイルが存在しないか無効な場合は新規作成
    }
    
    // 新しいデータを追加
    logs.push(data);
    
    // 最新100件のみ保持
    if (logs.length > 100) {
      logs = logs.slice(-100);
    }
    
    // ファイル保存
    await fs.writeFile(PERFORMANCE_LOG_FILE, JSON.stringify(logs, null, 2));
    console.log('💾 パフォーマンスログを保存しました');
    
  } catch (error) {
    console.error('⚠️ パフォーマンスログ保存エラー:', error.message);
  }
}

/**
 * パフォーマンス履歴の表示
 */
async function showPerformanceHistory(limit = 10) {
  try {
    const logs = JSON.parse(await fs.readFile(PERFORMANCE_LOG_FILE, 'utf-8'));
    const recent = logs.slice(-limit);
    
    console.log(`📈 パフォーマンス履歴 (最新${recent.length}件):`);
    console.log('='.repeat(80));
    
    recent.forEach((log, i) => {
      const date = new Date(log.timestamp).toLocaleString();
      const efficiency = log.metrics?.cache_efficiency 
        ? (log.metrics.cache_efficiency * 100).toFixed(1) + '%' 
        : 'N/A';
      const timeSaved = log.metrics?.time_saved_ms 
        ? (log.metrics.time_saved_ms / 1000).toFixed(1) + 's' 
        : 'N/A';
      
      console.log(`${i + 1}. ${date} - 効率: ${efficiency}, 節約: ${timeSaved}`);
    });
    
  } catch (error) {
    console.log('📈 パフォーマンス履歴ファイルが見つかりません（初回実行）');
  }
}

// コマンドライン引数処理
const args = process.argv.slice(2);

async function main() {
  if (args.length === 0) {
    // デフォルト: キャッシュパフォーマンス計測
    const report = await measureCachePerformance();
    await savePerformanceLog(report);
    return;
  }
  
  const command = args[0];
  
  switch (command) {
    case 'build':
      const buildCommand = args[1] || 'yarn build';
      const buildResult = await measureBuildTime(buildCommand);
      await savePerformanceLog(buildResult);
      break;
      
    case 'history':
      const limit = args[1] ? parseInt(args[1]) : 10;
      await showPerformanceHistory(limit);
      break;
      
    case 'benchmark':
      console.log('📊 ベンチマーク計測開始...');
      
      // キャッシュパフォーマンス
      const cacheReport = await measureCachePerformance();
      console.log('\n🔄 ビルド時間計測中...');
      
      // ビルド時間（モック使用）
      const buildReport = await measureBuildTime('yarn cache:mock && yarn build');
      
      const benchmark = {
        timestamp: new Date().toISOString(),
        cache: cacheReport,
        build: buildReport
      };
      
      await fs.writeFile(BENCHMARK_FILE, JSON.stringify(benchmark, null, 2));
      console.log('✅ ベンチマーク結果を保存しました');
      break;
      
    default:
      console.log('使用方法:');
      console.log('  yarn cache:perf              # キャッシュパフォーマンス計測');
      console.log('  yarn cache:perf build        # ビルド時間計測');
      console.log('  yarn cache:perf history      # 履歴表示');
      console.log('  yarn cache:perf benchmark    # 総合ベンチマーク');
      break;
  }
}

main().catch(error => {
  console.error('💥 パフォーマンス計測エラー:', error);
  process.exit(1);
});