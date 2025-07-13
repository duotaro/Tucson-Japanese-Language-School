#!/usr/bin/env node

/**
 * Notion API 段階的更新スクリプト
 * 更新頻度に応じてデータベースを選択的に更新
 */

import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 環境変数を読み込む
dotenv.config({ path: path.resolve(__dirname, '../../.env.local') });
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

import { getDatabase } from '../../lib/notion.js';
import { 
  DATABASES, 
  UPDATE_STRATEGIES, 
  validateDatabaseConfig, 
  getDatabasesByFrequency 
} from './database-config.js';
import fs from 'fs/promises';

// アラート機能をインポート
async function logAlert(level, message, details = {}) {
  const timestamp = new Date().toISOString();
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
  
  // GitHub Actions環境での出力
  if (process.env.GITHUB_ACTIONS) {
    console.log(`::${level === 'error' || level === 'critical' ? 'error' : 'warning'}::${message}`);
  }
}

// キャッシュディレクトリ
const CACHE_DIR = path.resolve(__dirname, '../../cache/notion-data');
const METADATA_FILE = path.resolve(__dirname, '../../cache/metadata.json');

/**
 * APIレートリミット制御（fetch-all.jsと共通）
 */
const RATE_LIMIT_DELAY = 400;
const RATE_LIMIT_RETRY_DELAY = 2000;
const MAX_RETRIES = 3;

let dynamicDelay = RATE_LIMIT_DELAY;
let consecutiveErrors = 0;

/**
 * 動的待機時間を調整
 */
function adjustDynamicDelay(isError = false) {
  if (isError) {
    consecutiveErrors++;
    dynamicDelay = Math.min(dynamicDelay * 1.5, 2000);
    console.log(`⚠️ API呼び出しエラー増加。待機時間を${dynamicDelay}msに調整`);
  } else {
    consecutiveErrors = 0;
    if (dynamicDelay > RATE_LIMIT_DELAY) {
      dynamicDelay = Math.max(dynamicDelay * 0.9, RATE_LIMIT_DELAY);
    }
  }
}

/**
 * レートリミット対応のAPI呼び出し
 */
async function callNotionAPIWithRateLimit(databaseId, dataType, retryCount = 0) {
  try {
    const data = await getDatabase(databaseId);
    adjustDynamicDelay(false);
    return { success: true, data };
  } catch (error) {
    adjustDynamicDelay(true);
    
    if (error.code === 'rate_limited' && retryCount < MAX_RETRIES) {
      const waitTime = RATE_LIMIT_RETRY_DELAY * (retryCount + 1);
      console.warn(`⏳ ${dataType} レートリミット検出。${waitTime}ms待機後リトライ (${retryCount + 1}/${MAX_RETRIES})`);
      await new Promise(resolve => setTimeout(resolve, waitTime));
      return await callNotionAPIWithRateLimit(databaseId, dataType, retryCount + 1);
    }
    
    if (error.status >= 500 && retryCount < MAX_RETRIES) {
      const waitTime = 1000 * (retryCount + 1);
      console.warn(`⏳ ${dataType} サーバーエラー検出。${waitTime}ms待機後リトライ (${retryCount + 1}/${MAX_RETRIES})`);
      await new Promise(resolve => setTimeout(resolve, waitTime));
      return await callNotionAPIWithRateLimit(databaseId, dataType, retryCount + 1);
    }
    
    return { success: false, error };
  }
}

/**
 * 既存キャッシュメタデータを読み込み
 */
async function loadCacheMetadata() {
  try {
    const data = await fs.readFile(METADATA_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.warn('⚠️ 既存メタデータが見つかりません。新規作成します。');
    return {
      lastUpdate: new Date(0).toISOString(),
      databases: {}
    };
  }
}

/**
 * データの変更を検知
 */
function detectChanges(oldData, newData) {
  if (!oldData || !newData) return true;
  
  // 簡易的な変更検知：レコード数とlast_edited_timeを比較
  if (oldData.length !== newData.length) {
    return true;
  }
  
  // 最後に編集された時刻の比較
  const getLatestEditTime = (data) => {
    return data.reduce((latest, item) => {
      const editTime = new Date(item.last_edited_time).getTime();
      return editTime > latest ? editTime : latest;
    }, 0);
  };
  
  const oldLatest = getLatestEditTime(oldData);
  const newLatest = getLatestEditTime(newData);
  
  return newLatest > oldLatest;
}

/**
 * 特定頻度のデータベースを更新
 */
async function updateByFrequency(frequency = 'frequent') {
  console.log(`🔄 ${frequency}頻度のデータベース更新を開始...`);
  
  const targetDatabases = getDatabasesByFrequency(frequency);
  if (targetDatabases.length === 0) {
    console.log(`⚠️ ${frequency}頻度のデータベースが設定されていません`);
    return;
  }
  
  console.log(`📊 更新対象: ${targetDatabases.length}個のデータベース`);
  console.log(`📝 対象データベース: ${targetDatabases.join(', ')}\n`);
  
  // キャッシュディレクトリ確保
  await fs.mkdir(CACHE_DIR, { recursive: true });
  
  // 既存メタデータ読み込み
  const existingMetadata = await loadCacheMetadata();
  
  const startTime = Date.now();
  const results = {
    updated: [],
    unchanged: [],
    failed: [],
    totalChanges: 0
  };
  
  // 対象データベースを順次更新
  for (const [index, dataType] of targetDatabases.entries()) {
    try {
      console.log(`📥 [${index + 1}/${targetDatabases.length}] ${dataType} 更新確認中...`);
      
      const databaseId = DATABASES[dataType];
      
      // 環境変数未設定の場合はスキップ
      if (databaseId === "NEWS_DB_ID_NOT_SET") {
        console.log(`⚠️  ${dataType} スキップ: 環境変数未設定`);
        results.failed.push({
          dataType,
          error: 'Environment variable not set',
          databaseId: 'N/A'
        });
        continue;
      }
      
      // 既存データ読み込み
      let existingData = null;
      try {
        const cacheFilePath = path.join(CACHE_DIR, `${dataType}.json`);
        const cacheContent = await fs.readFile(cacheFilePath, 'utf-8');
        existingData = JSON.parse(cacheContent);
      } catch {
        console.log(`📝 ${dataType} 新規データベース（キャッシュなし）`);
      }
      
      // 新しいデータを取得
      const result = await callNotionAPIWithRateLimit(databaseId, dataType);
      
      if (!result.success) {
        throw result.error;
      }
      
      const newData = result.data;
      if (!newData || !Array.isArray(newData)) {
        throw new Error('Invalid data received from Notion API');
      }
      
      // 変更検知
      const hasChanges = detectChanges(existingData, newData);
      
      if (hasChanges) {
        // 変更があった場合のみ保存
        const cacheFilePath = path.join(CACHE_DIR, `${dataType}.json`);
        await fs.writeFile(
          cacheFilePath,
          JSON.stringify(newData, null, 2),
          'utf-8'
        );
        
        console.log(`✅ ${dataType} 更新完了 (${newData.length}件) 🔄 変更検出`);
        
        results.updated.push({
          dataType,
          recordCount: newData.length,
          previousCount: existingData ? existingData.length : 0,
          databaseId
        });
        results.totalChanges += Math.abs(newData.length - (existingData?.length || 0));
      } else {
        console.log(`⏭️  ${dataType} 変更なし (${newData.length}件)`);
        results.unchanged.push({
          dataType,
          recordCount: newData.length,
          databaseId
        });
      }
      
    } catch (error) {
      console.error(`❌ ${dataType} 更新失敗:`, error.message);
      
      // アラート送信
      await logAlert('error', `データベース更新失敗: ${dataType}`, {
        dataType,
        error: error.message,
        databaseId: DATABASES[dataType],
        frequency,
        index: index + 1,
        total: targetDatabases.length
      });
      
      results.failed.push({
        dataType,
        error: error.message,
        databaseId: DATABASES[dataType]
      });
    }
    
    // APIレート制限を避けるため適切な間隔で待機
    if (index < targetDatabases.length - 1) {
      const currentDelay = Math.round(dynamicDelay);
      if (currentDelay !== RATE_LIMIT_DELAY) {
        console.log(`⏳ 動的調整済み待機時間: ${currentDelay}ms`);
      }
      await new Promise(resolve => setTimeout(resolve, currentDelay));
    }
  }
  
  // メタデータ更新
  const updatedMetadata = {
    ...existingMetadata,
    lastUpdate: new Date().toISOString(),
    lastIncrementalUpdate: {
      frequency,
      timestamp: new Date().toISOString(),
      executionTime: Date.now() - startTime,
      updatedCount: results.updated.length,
      unchangedCount: results.unchanged.length,
      failedCount: results.failed.length
    },
    databases: {
      ...existingMetadata.databases,
      ...results.updated.reduce((acc, item) => {
        acc[item.dataType] = {
          recordCount: item.recordCount,
          databaseId: item.databaseId,
          lastFetch: new Date().toISOString(),
          lastIncremental: frequency
        };
        return acc;
      }, {})
    }
  };
  
  try {
    await fs.writeFile(METADATA_FILE, JSON.stringify(updatedMetadata, null, 2), 'utf-8');
    console.log(`📋 メタデータ更新完了`);
  } catch (error) {
    console.error('⚠️ メタデータ保存に失敗:', error.message);
  }
  
  // 結果サマリー
  console.log(`\n🎉 ${frequency}頻度更新完了！`);
  
  // 更新完了アラート
  const alertLevel = results.failed.length > 0 ? 'warning' : 'info';
  await logAlert(alertLevel, `${frequency}頻度更新完了`, {
    frequency,
    updated: results.updated.length,
    unchanged: results.unchanged.length,
    failed: results.failed.length,
    totalChanges: results.totalChanges,
    executionTime: ((Date.now() - startTime) / 1000).toFixed(2) + '秒'
  });
  
  console.log('='.repeat(50));
  console.log(`🔄 更新: ${results.updated.length}個`);
  console.log(`⏭️  変更なし: ${results.unchanged.length}個`);
  console.log(`❌ 失敗: ${results.failed.length}個`);
  console.log(`📊 総変更レコード数: ${results.totalChanges}件`);
  console.log(`⏱️ 実行時間: ${((Date.now() - startTime) / 1000).toFixed(2)}秒`);
  console.log(`🎯 最終待機時間: ${Math.round(dynamicDelay)}ms (基準: ${RATE_LIMIT_DELAY}ms)`);
  
  if (results.updated.length > 0) {
    console.log('\n🔄 更新されたデータベース:');
    results.updated.forEach(item => {
      const change = item.recordCount - item.previousCount;
      const changeStr = change > 0 ? `+${change}` : change.toString();
      console.log(`  - ${item.dataType}: ${item.recordCount}件 (${changeStr})`);
    });
  }
  
  if (results.failed.length > 0) {
    console.log('\n⚠️ 失敗したデータベース:');
    results.failed.forEach(failure => {
      console.log(`  - ${failure.dataType}: ${failure.error}`);
    });
  }
  
  console.log('\n💡 次のステップ:');
  console.log('  yarn dev    # 開発サーバー起動（更新データ使用）');
  console.log('  yarn build  # 本番ビルド（更新データ使用）');
}

/**
 * 古いキャッシュファイルのクリーンアップ
 */
async function cleanupOldCache(maxAge = 7 * 24 * 60 * 60 * 1000) { // 7日
  try {
    const files = await fs.readdir(CACHE_DIR);
    const jsonFiles = files.filter(file => file.endsWith('.json'));
    
    let cleanupCount = 0;
    for (const file of jsonFiles) {
      const filePath = path.join(CACHE_DIR, file);
      const stats = await fs.stat(filePath);
      const age = Date.now() - stats.mtime.getTime();
      
      if (age > maxAge) {
        console.log(`🗑️ 古いキャッシュファイルを削除: ${file} (${Math.round(age / 1000 / 60 / 60 / 24)}日前)`);
        await fs.unlink(filePath);
        cleanupCount++;
      }
    }
    
    if (cleanupCount > 0) {
      console.log(`✅ ${cleanupCount}個の古いキャッシュファイルを削除しました`);
    } else {
      console.log(`✅ クリーンアップ対象のファイルはありません`);
    }
  } catch (error) {
    console.warn('⚠️ キャッシュクリーンアップ中にエラー:', error.message);
  }
}

// コマンドライン引数処理
const args = process.argv.slice(2);

async function main() {
  // 設定検証
  const validation = validateDatabaseConfig();
  if (!validation.valid) {
    console.error('❌ データベース設定にエラーがあります:');
    validation.issues.forEach(issue => console.error(`  - ${issue}`));
    process.exit(1);
  }
  
  if (args.length === 0) {
    console.log('使用方法:');
    console.log('  yarn cache:update:frequent   # 高頻度データを更新');
    console.log('  yarn cache:update:moderate   # 中頻度データを更新');
    console.log('  yarn cache:update:rare       # 低頻度データを更新');
    console.log('  yarn cache:cleanup           # 古いキャッシュを削除');
    console.log('');
    console.log('更新頻度別データベース:');
    Object.entries(UPDATE_STRATEGIES).forEach(([freq, databases]) => {
      console.log(`  ${freq}: ${databases.length}個 (${databases.slice(0, 3).join(', ')}${databases.length > 3 ? '...' : ''})`);
    });
    process.exit(1);
  }
  
  const command = args[0];
  
  if (command === 'cleanup') {
    await cleanupOldCache();
  } else if (['frequent', 'moderate', 'rare'].includes(command)) {
    await updateByFrequency(command);
  } else {
    console.error(`❌ 不明なコマンド: ${command}`);
    process.exit(1);
  }
}

main().catch(error => {
  console.error('💥 実行エラー:', error);
  process.exit(1);
});