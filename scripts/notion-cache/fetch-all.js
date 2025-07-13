#!/usr/bin/env node

/**
 * Notion API データ全取得スクリプト
 * 全てのデータベースからデータを取得してローカルキャッシュに保存
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
import { DATABASES, validateDatabaseConfig, getAllDatabases } from './database-config.js';
import fs from 'fs/promises';
import fetch from 'node-fetch';
import crypto from 'crypto';

// キャッシュディレクトリ
const CACHE_DIR = path.resolve(__dirname, '../../cache/notion-data');
const METADATA_FILE = path.resolve(__dirname, '../../cache/metadata.json');
const IMAGE_DOWNLOAD_DIR = path.resolve(__dirname, '../../public/image/download');

/**
 * APIレートリミット制御
 * Notion公式レートリミット: 平均3リクエスト/秒
 * 安全な間隔: 334ms以上推奨
 */
const RATE_LIMIT_DELAY = 400; // 400ms間隔 (2.5リクエスト/秒)
const RATE_LIMIT_RETRY_DELAY = 2000; // レートリミットエラー時の待機時間
const MAX_RETRIES = 3; // 最大リトライ回数

// 動的レートリミット調整
let dynamicDelay = RATE_LIMIT_DELAY;
let consecutiveErrors = 0;

/**
 * 画像をダウンロードして保存
 * @param {string} url - 画像のURL
 * @param {string} dataType - データタイプ（保存先ディレクトリ名）
 * @param {string} pageId - NotionページID
 * @param {string} originalFileName - オリジナルファイル名
 * @returns {Promise<string>} - 保存したファイルのローカルパス
 */
async function downloadImage(url, dataType, pageId, originalFileName) {
  try {
    // URLが既にローカルパスの場合はスキップ
    if (url.startsWith('/image/')) {
      return url;
    }
    
    // 保存先ディレクトリを作成
    const saveDir = path.join(IMAGE_DOWNLOAD_DIR, dataType);
    await fs.mkdir(saveDir, { recursive: true });
    
    // ファイル名を生成（ページIDとオリジナル名を組み合わせ）
    const sanitizedFileName = originalFileName.replace(/[^a-zA-Z0-9._-]/g, '_');
    const fileExtension = path.extname(sanitizedFileName) || '.webp';
    const baseName = path.basename(sanitizedFileName, fileExtension);
    const localFileName = `${pageId}-${baseName}${fileExtension}`;
    const localPath = path.join(saveDir, localFileName);
    
    // 既にファイルが存在する場合はスキップ
    try {
      await fs.access(localPath);
      console.log(`  📷 画像スキップ（既存）: ${localFileName}`);
      return `/image/download/${dataType}/${localFileName}`;
    } catch {
      // ファイルが存在しない場合は続行
    }
    
    // 画像をダウンロード
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTPエラー: ${response.status}`);
    }
    
    const buffer = await response.buffer();
    await fs.writeFile(localPath, buffer);
    
    console.log(`  ✅ 画像保存: ${localFileName}`);
    return `/image/download/${dataType}/${localFileName}`;
    
  } catch (error) {
    console.error(`  ❌ 画像ダウンロード失敗: ${error.message}`);
    return null;
  }
}

/**
 * データ内の画像URLを処理してローカルパスに置換
 * @param {Array} data - Notionデータの配列
 * @param {string} dataType - データタイプ
 * @returns {Promise<Array>} - 処理済みデータ
 */
async function processImagesInData(data, dataType) {
  const processedData = [];
  
  for (const item of data) {
    const processedItem = { ...item };
    
    // プロパティを走査して画像を処理
    if (processedItem.properties) {
      for (const [propName, propValue] of Object.entries(processedItem.properties)) {
        if (propValue.type === 'files' && propValue.files && propValue.files.length > 0) {
          const processedFiles = [];
          
          for (const file of propValue.files) {
            const fileUrl = file.file?.url || file.external?.url;
            if (fileUrl) {
              const localPath = await downloadImage(
                fileUrl,
                dataType,
                processedItem.id,
                file.name || 'image'
              );
              
              if (localPath) {
                // URLをローカルパスに置換
                const processedFile = { ...file };
                if (processedFile.file) {
                  processedFile.file.url = localPath;
                } else if (processedFile.external) {
                  processedFile.external.url = localPath;
                }
                processedFiles.push(processedFile);
              } else {
                // ダウンロード失敗時は元のファイルをそのまま保持
                processedFiles.push(file);
              }
            } else {
              processedFiles.push(file);
            }
          }
          
          processedItem.properties[propName].files = processedFiles;
        }
      }
    }
    
    processedData.push(processedItem);
  }
  
  return processedData;
}

/**
 * 動的待機時間を調整
 */
function adjustDynamicDelay(isError = false) {
  if (isError) {
    consecutiveErrors++;
    // エラーが続く場合は待機時間を増加（最大2秒）
    dynamicDelay = Math.min(dynamicDelay * 1.5, 2000);
    console.log(`⚠️ API呼び出しエラー増加。待機時間を${dynamicDelay}msに調整`);
  } else {
    consecutiveErrors = 0;
    // 成功が続く場合は徐々に待機時間を最適化
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
    adjustDynamicDelay(false); // 成功時
    return { success: true, data };
  } catch (error) {
    adjustDynamicDelay(true); // エラー時
    
    // レートリミットエラーの場合
    if (error.code === 'rate_limited' && retryCount < MAX_RETRIES) {
      const waitTime = RATE_LIMIT_RETRY_DELAY * (retryCount + 1);
      console.warn(`⏳ ${dataType} レートリミット検出。${waitTime}ms待機後リトライ (${retryCount + 1}/${MAX_RETRIES})`);
      await new Promise(resolve => setTimeout(resolve, waitTime));
      return await callNotionAPIWithRateLimit(databaseId, dataType, retryCount + 1);
    }
    
    // その他のAPI関連エラーの場合も少し待機
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
 * 全データ取得のメイン処理
 */
async function fetchAllData() {
  console.log('🔄 Notion データベース全取得を開始...');
  
  // 設定検証
  const validation = validateDatabaseConfig();
  if (!validation.valid) {
    console.error('❌ データベース設定にエラーがあります:');
    validation.issues.forEach(issue => console.error(`  - ${issue}`));
    process.exit(1);
  }
  
  // キャッシュディレクトリ確保
  try {
    await fs.mkdir(CACHE_DIR, { recursive: true });
    console.log(`📁 キャッシュディレクトリ準備完了: ${CACHE_DIR}`);
  } catch (error) {
    console.error('❌ キャッシュディレクトリ作成に失敗:', error);
    process.exit(1);
  }
  
  const startTime = Date.now();
  const results = {
    success: [],
    failed: [],
    totalCount: 0
  };
  
  // 全データベースを順次取得
  const allDatabases = getAllDatabases();
  console.log(`📊 取得対象: ${allDatabases.length}個のデータベース\n`);
  
  for (const [index, dataType] of allDatabases.entries()) {
    try {
      console.log(`📥 [${index + 1}/${allDatabases.length}] ${dataType} データ取得中...`);
      
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
      
      // レートリミット対応のデータ取得
      const result = await callNotionAPIWithRateLimit(databaseId, dataType);
      
      if (!result.success) {
        throw result.error;
      }
      
      const data = result.data;
      if (!data || !Array.isArray(data)) {
        console.error(`❌ ${dataType} のデータ形式が不正:`, {
          dataType,
          databaseId,
          dataReceived: data,
          dataType: typeof data,
          isArray: Array.isArray(data)
        });
        throw new Error('Invalid data received from Notion API');
      }
      
      // 画像URLをローカルパスに置換
      console.log(`📷 ${dataType} の画像を処理中...`);
      const processedData = await processImagesInData(data, dataType);
      
      // キャッシュファイルに保存
      const cacheFilePath = path.join(CACHE_DIR, `${dataType}.json`);
      await fs.writeFile(
        cacheFilePath,
        JSON.stringify(processedData, null, 2),
        'utf-8'
      );
      
      console.log(`✅ ${dataType} 完了 (${data.length}件) → ${path.basename(cacheFilePath)}`);
      
      results.success.push({
        dataType,
        recordCount: data.length,
        databaseId,
        filePath: cacheFilePath
      });
      results.totalCount += data.length;
      
    } catch (error) {
      console.error(`❌ ${dataType} 取得失敗:`, error.message);
      results.failed.push({
        dataType,
        error: error.message,
        databaseId: DATABASES[dataType]
      });
    }
    
    // APIレート制限を避けるため適切な間隔で待機
    // 動的調整: エラー状況に応じて待機時間を調整
    if (index < allDatabases.length - 1) {
      const currentDelay = Math.round(dynamicDelay);
      if (currentDelay !== RATE_LIMIT_DELAY) {
        console.log(`⏳ 動的調整済み待機時間: ${currentDelay}ms`);
      }
      await new Promise(resolve => setTimeout(resolve, currentDelay));
    }
  }
  
  // メタデータ保存
  const metadata = {
    lastUpdate: new Date().toISOString(),
    totalDatabases: allDatabases.length,
    successCount: results.success.length,
    failedCount: results.failed.length,
    totalRecords: results.totalCount,
    executionTime: Date.now() - startTime,
    databases: results.success.reduce((acc, item) => {
      acc[item.dataType] = {
        recordCount: item.recordCount,
        databaseId: item.databaseId,
        lastFetch: new Date().toISOString()
      };
      return acc;
    }, {}),
    failures: results.failed
  };
  
  try {
    await fs.writeFile(METADATA_FILE, JSON.stringify(metadata, null, 2), 'utf-8');
    console.log(`📋 メタデータ保存完了: ${path.basename(METADATA_FILE)}`);
  } catch (error) {
    console.error('⚠️ メタデータ保存に失敗:', error.message);
  }
  
  // 結果サマリー
  console.log('\n🎉 データ取得完了！');
  console.log('='.repeat(50));
  console.log(`✅ 成功: ${results.success.length}個`);
  console.log(`❌ 失敗: ${results.failed.length}個`);
  console.log(`📊 総レコード数: ${results.totalCount.toLocaleString()}件`);
  console.log(`⏱️ 実行時間: ${(metadata.executionTime / 1000).toFixed(2)}秒`);
  console.log(`🎯 最終待機時間: ${Math.round(dynamicDelay)}ms (基準: ${RATE_LIMIT_DELAY}ms)`);
  if (consecutiveErrors > 0) {
    console.log(`⚠️ 連続エラー回数: ${consecutiveErrors}回`);
  }
  
  if (results.failed.length > 0) {
    console.log('\n⚠️ 失敗したデータベース:');
    results.failed.forEach(failure => {
      console.log(`  - ${failure.dataType}: ${failure.error}`);
    });
  }
  
  if (results.success.length > 0) {
    console.log('\n📁 キャッシュファイル:');
    results.success.forEach(success => {
      console.log(`  - ${success.dataType}.json (${success.recordCount}件)`);
    });
  }
  
  console.log('\n💡 次のステップ:');
  console.log('  yarn dev    # 開発サーバー起動（キャッシュ使用）');
  console.log('  yarn build  # 本番ビルド（キャッシュ使用）');
}

/**
 * 特定のデータベースのみ取得
 */
async function fetchSpecificDatabase(dataType) {
  console.log(`🔄 ${dataType} データベースを個別取得...`);
  
  if (!DATABASES[dataType]) {
    console.error(`❌ 不明なデータタイプ: ${dataType}`);
    console.log('利用可能なデータタイプ:', getAllDatabases().join(', '));
    process.exit(1);
  }
  
  try {
    await fs.mkdir(CACHE_DIR, { recursive: true });
    
    const databaseId = DATABASES[dataType];
    
    // 環境変数未設定の場合はスキップ
    if (databaseId === "NEWS_DB_ID_NOT_SET") {
      console.log(`⚠️  ${dataType} スキップ: 環境変数未設定`);
      process.exit(1);
    }
    
    // レートリミット対応のデータ取得
    const result = await callNotionAPIWithRateLimit(databaseId, dataType);
    
    if (!result.success) {
      throw result.error;
    }
    
    const data = result.data;
    if (!data || !Array.isArray(data)) {
      throw new Error('Invalid data received from Notion API');
    }
    
    // 画像URLをローカルパスに置換
    console.log(`📷 ${dataType} の画像を処理中...`);
    const processedData = await processImagesInData(data, dataType);
    
    const cacheFilePath = path.join(CACHE_DIR, `${dataType}.json`);
    await fs.writeFile(
      cacheFilePath,
      JSON.stringify(processedData, null, 2),
      'utf-8'
    );
    
    console.log(`✅ ${dataType} 取得完了 (${data.length}件)`);
    
  } catch (error) {
    console.error(`❌ ${dataType} 取得失敗:`, error.message);
    if (error.code === 'rate_limited') {
      console.log('💡 ヒント: レートリミットに達しました。しばらく待ってから再試行してください。');
    }
    process.exit(1);
  }
}

// コマンドライン引数処理
const args = process.argv.slice(2);

if (args.length === 0) {
  // 引数なし：全データ取得
  fetchAllData().catch(error => {
    console.error('💥 実行エラー:', error);
    process.exit(1);
  });
} else if (args.length === 1) {
  // 引数1つ：特定データベース取得
  const dataType = args[0];
  fetchSpecificDatabase(dataType).catch(error => {
    console.error('💥 実行エラー:', error);
    process.exit(1);
  });
} else {
  console.log('使用方法:');
  console.log('  node fetch-all.js           # 全データ取得');
  console.log('  node fetch-all.js news      # newsデータのみ取得');
  console.log('  node fetch-all.js staff     # staffデータのみ取得');
  process.exit(1);
}