/**
 * Notionキャッシュデータ読み込み関数
 * ローカルキャッシュからデータを読み込み、フォールバックでAPIから取得
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { getDatabaseId } from '../scripts/notion-cache/database-config.js';

/**
 * 画像最適化処理を追加
 * @param {Object} item - Notionアイテム
 * @param {string} dataType - データタイプ
 * @returns {Object} - 最適化済みアイテム
 */
function addOptimizedImage(item, dataType) {
  if (!item.properties) return item;
  
  const processedItem = { ...item };
  
  // 画像プロパティの処理
  const imageKeys = ['image', 'image1'];
  imageKeys.forEach(key => {
    if (processedItem.properties[key] && 
        processedItem.properties[key].type === 'files' && 
        processedItem.properties[key].files[0]) {
      
      const file = processedItem.properties[key].files[0];
      const fileUrl = file.file?.url || file.external?.url;
      
      // ローカルパスの場合（/image/download/で始まる）
      if (fileUrl && fileUrl.startsWith('/image/download/')) {
        // ローカルパスからbaseName抽出
        const fileName = path.basename(fileUrl);
        // 完全なファイル名（ページIDプレフィックス込み）をbaseNameとして使用
        const baseName = path.parse(fileName).name;
        
        processedItem.properties[key] = {
          ...processedItem.properties[key],
          optimizedImage: {
            baseName: baseName,
            pagePath: dataType,
            alt: file.name || fileName,
            width: 800,
            height: 600,
          }
        };
      } else {
        // 従来の処理（一時URLの場合）
        const originalFileName = file.name;
        const baseName = path.parse(originalFileName.replace(/ /g, '_')).name;
        
        processedItem.properties[key] = {
          ...processedItem.properties[key],
          optimizedImage: {
            baseName: baseName,
            pagePath: dataType,
            alt: originalFileName,
            width: 800,
            height: 600,
          }
        };
      }
    }
  });
  
  return processedItem;
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CACHE_DIR = path.resolve(__dirname, '../cache/notion-data');
const METADATA_FILE = path.resolve(__dirname, '../cache/metadata.json');

/**
 * キャッシュされたデータを読み込む
 * @param {string} dataType - データタイプ（例: 'news', 'staff', 'slider'）
 * @param {Object} options - オプション設定
 * @param {boolean} options.fallbackToAPI - APIフォールバックを使用するか
 * @param {number} options.maxAge - キャッシュの最大有効期間（ミリ秒）
 * @returns {Promise<Array>} データ配列
 */
export async function loadCachedData(dataType, options = {}) {
  const {
    fallbackToAPI = true,
    maxAge = 24 * 60 * 60 * 1000 // デフォルト24時間
  } = options;
  
  try {
    // キャッシュファイルパス
    const cacheFilePath = path.join(CACHE_DIR, `${dataType}.json`);
    
    // ファイル存在チェック
    try {
      await fs.access(cacheFilePath);
    } catch {
      if (fallbackToAPI) {
        console.warn(`⚠️ キャッシュファイル ${dataType}.json が見つかりません。APIから取得します。`);
        return await fallbackToNotionAPI(dataType);
      } else {
        throw new Error(`Cache file not found: ${dataType}.json`);
      }
    }
    
    // キャッシュファイルの更新時刻チェック
    if (maxAge > 0) {
      const stats = await fs.stat(cacheFilePath);
      const age = Date.now() - stats.mtime.getTime();
      
      if (age > maxAge) {
        if (fallbackToAPI) {
          console.warn(`⚠️ キャッシュファイル ${dataType}.json が古すぎます（${Math.round(age / 1000 / 60)}分前）。APIから取得します。`);
          return await fallbackToNotionAPI(dataType);
        } else {
          console.warn(`⚠️ キャッシュファイル ${dataType}.json が古い可能性があります（${Math.round(age / 1000 / 60)}分前）`);
        }
      }
    }
    
    // キャッシュファイル読み込み
    const data = await fs.readFile(cacheFilePath, 'utf-8');
    const parsedData = JSON.parse(data);
    
    if (!Array.isArray(parsedData)) {
      throw new Error(`Invalid cache data format for ${dataType}`);
    }
    
    console.log(`📁 キャッシュから読み込み: ${dataType} (${parsedData.length}件)`);
    
    // 画像最適化処理を追加
    const processedData = parsedData.map(item => addOptimizedImage(item, dataType));
    return processedData;
    
  } catch (error) {
    if (fallbackToAPI) {
      console.warn(`⚠️ キャッシュ読み込みエラー (${dataType}): ${error.message}。APIから取得します。`);
      return await fallbackToNotionAPI(dataType);
    } else {
      throw error;
    }
  }
}

/**
 * APIフォールバック：Notion APIから直接データを取得
 * @param {string} dataType - データタイプ
 * @returns {Promise<Array>} データ配列
 */
async function fallbackToNotionAPI(dataType) {
  try {
    const { getDatabase } = await import('./notion.js');
    const databaseId = getDatabaseId(dataType);
    
    console.log(`🌐 Notion APIから取得中: ${dataType}`);
    const data = await getDatabase(databaseId);
    
    if (!Array.isArray(data)) {
      throw new Error('Invalid data received from Notion API');
    }
    
    console.log(`✅ API取得完了: ${dataType} (${data.length}件)`);
    return data;
    
  } catch (error) {
    console.error(`❌ API取得失敗 (${dataType}):`, error.message);
    throw error;
  }
}

/**
 * 複数のデータタイプを一括で読み込み
 * @param {string[]} dataTypes - データタイプの配列
 * @param {Object} options - オプション設定
 * @returns {Promise<Object>} データタイプをキーとするオブジェクト
 */
export async function loadMultipleCachedData(dataTypes, options = {}) {
  const results = {};
  const errors = {};
  
  await Promise.allSettled(
    dataTypes.map(async (dataType) => {
      try {
        results[dataType] = await loadCachedData(dataType, options);
      } catch (error) {
        errors[dataType] = error.message;
        results[dataType] = [];
      }
    })
  );
  
  if (Object.keys(errors).length > 0) {
    console.warn('⚠️ 一部のデータ読み込みに失敗:', errors);
  }
  
  return results;
}

/**
 * キャッシュメタデータを読み込み
 * @returns {Promise<Object|null>} メタデータオブジェクト
 */
export async function loadCacheMetadata() {
  try {
    const data = await fs.readFile(METADATA_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.warn('⚠️ キャッシュメタデータの読み込みに失敗:', error.message);
    return null;
  }
}

/**
 * 特定データタイプのキャッシュ有効性をチェック
 * @param {string} dataType - データタイプ
 * @param {number} maxAge - 最大有効期間（ミリ秒）
 * @returns {Promise<boolean>} 有効かどうか
 */
export async function isCacheValid(dataType, maxAge = 24 * 60 * 60 * 1000) {
  try {
    const cacheFilePath = path.join(CACHE_DIR, `${dataType}.json`);
    const stats = await fs.stat(cacheFilePath);
    const age = Date.now() - stats.mtime.getTime();
    return age <= maxAge;
  } catch {
    return false;
  }
}

/**
 * キャッシュ統計情報を取得
 * @returns {Promise<Object>} 統計情報
 */
export async function getCacheStats() {
  try {
    const files = await fs.readdir(CACHE_DIR);
    const jsonFiles = files.filter(file => file.endsWith('.json'));
    
    const stats = {
      totalFiles: jsonFiles.length,
      files: {},
      totalSize: 0
    };
    
    for (const file of jsonFiles) {
      const filePath = path.join(CACHE_DIR, file);
      const fileStat = await fs.stat(filePath);
      const dataType = path.basename(file, '.json');
      
      stats.files[dataType] = {
        size: fileStat.size,
        lastModified: fileStat.mtime.toISOString(),
        age: Date.now() - fileStat.mtime.getTime()
      };
      stats.totalSize += fileStat.size;
    }
    
    const metadata = await loadCacheMetadata();
    if (metadata) {
      stats.metadata = metadata;
    }
    
    return stats;
    
  } catch (error) {
    console.error('❌ キャッシュ統計取得エラー:', error.message);
    return { totalFiles: 0, files: {}, totalSize: 0 };
  }
}

/**
 * 開発用：キャッシュファイルの一覧表示
 */
export async function listCacheFiles() {
  try {
    const stats = await getCacheStats();
    
    console.log('\n📁 キャッシュファイル一覧:');
    console.log('='.repeat(60));
    
    Object.entries(stats.files).forEach(([dataType, info]) => {
      const ageMinutes = Math.round(info.age / 1000 / 60);
      const sizeKB = Math.round(info.size / 1024);
      console.log(`${dataType.padEnd(20)} | ${sizeKB.toString().padStart(6)}KB | ${ageMinutes.toString().padStart(4)}分前`);
    });
    
    console.log('='.repeat(60));
    console.log(`合計: ${stats.totalFiles}ファイル, ${Math.round(stats.totalSize / 1024)}KB`);
    
    if (stats.metadata) {
      console.log(`\n📋 最終更新: ${new Date(stats.metadata.lastUpdate).toLocaleString()}`);
      console.log(`総レコード数: ${stats.metadata.totalRecords?.toLocaleString() || 'N/A'}件`);
    }
    
  } catch (error) {
    console.error('❌ キャッシュファイル一覧取得エラー:', error.message);
  }
}

/**
 * キャッシュシステムのヘルスチェック
 * CI/CD環境での健全性確認用
 * @returns {Promise<Object>} ヘルスチェック結果
 */
export async function validateCacheHealth() {
  const health = {
    status: 'healthy',
    issues: [],
    warnings: [],
    stats: {}
  };
  
  try {
    console.log('🏥 キャッシュシステム ヘルスチェック開始...');
    
    // 1. キャッシュディレクトリの存在確認
    try {
      await fs.access(CACHE_DIR);
      console.log('✅ キャッシュディレクトリ存在確認');
    } catch {
      health.issues.push('キャッシュディレクトリが存在しません');
      health.status = 'unhealthy';
    }
    
    // 2. メタデータファイルの確認
    const metadata = await loadCacheMetadata();
    if (!metadata) {
      health.warnings.push('メタデータファイルが見つかりません');
    } else {
      console.log('✅ メタデータファイル確認');
      health.stats.lastUpdate = metadata.lastUpdate;
    }
    
    // 3. キャッシュファイルの確認
    const stats = await getCacheStats();
    health.stats = { ...health.stats, ...stats };
    
    if (stats.totalFiles === 0) {
      health.issues.push('キャッシュファイルが存在しません');
      health.status = 'unhealthy';
    } else {
      console.log(`✅ キャッシュファイル確認: ${stats.totalFiles}ファイル`);
    }
    
    // 4. 重要キャッシュファイルの確認
    const criticalDataTypes = ['slider', 'sponsors', 'about'];
    const missingCritical = [];
    
    for (const dataType of criticalDataTypes) {
      if (!stats.files[dataType]) {
        missingCritical.push(dataType);
      }
    }
    
    if (missingCritical.length > 0) {
      health.warnings.push(`重要キャッシュファイルが不足: ${missingCritical.join(', ')}`);
    } else {
      console.log('✅ 重要キャッシュファイル確認');
    }
    
    // 5. キャッシュファイルの古さチェック
    const maxAge = 7 * 24 * 60 * 60 * 1000; // 7日
    const oldFiles = [];
    
    Object.entries(stats.files).forEach(([dataType, info]) => {
      if (info.age > maxAge) {
        oldFiles.push(dataType);
      }
    });
    
    if (oldFiles.length > 0) {
      health.warnings.push(`古いキャッシュファイル (7日以上): ${oldFiles.join(', ')}`);
    } else {
      console.log('✅ キャッシュファイル鮮度確認');
    }
    
    // 6. データ整合性チェック（サンプル）
    try {
      const sampleData = await loadCachedData('slider', { fallbackToAPI: false });
      if (!Array.isArray(sampleData) || sampleData.length === 0) {
        health.warnings.push('sliderキャッシュデータが空または不正です');
      } else {
        console.log('✅ データ整合性確認（サンプル）');
      }
    } catch (error) {
      health.warnings.push(`データ読み込みテスト失敗: ${error.message}`);
    }
    
    // 結果出力
    console.log('\n🏥 ヘルスチェック結果:');
    console.log('='.repeat(50));
    console.log(`📊 ステータス: ${health.status}`);
    console.log(`📁 キャッシュファイル数: ${health.stats.totalFiles || 0}`);
    console.log(`💾 総サイズ: ${Math.round((health.stats.totalSize || 0) / 1024)}KB`);
    
    if (health.issues.length > 0) {
      console.log(`\n❌ 問題 (${health.issues.length}件):`);
      health.issues.forEach(issue => console.log(`  - ${issue}`));
    }
    
    if (health.warnings.length > 0) {
      console.log(`\n⚠️ 警告 (${health.warnings.length}件):`);
      health.warnings.forEach(warning => console.log(`  - ${warning}`));
    }
    
    if (health.issues.length === 0 && health.warnings.length === 0) {
      console.log('\n✅ 全ての項目が正常です');
    }
    
    console.log('='.repeat(50));
    
    return health;
    
  } catch (error) {
    console.error('❌ ヘルスチェック実行エラー:', error.message);
    health.status = 'error';
    health.issues.push(`ヘルスチェック実行エラー: ${error.message}`);
    return health;
  }
}