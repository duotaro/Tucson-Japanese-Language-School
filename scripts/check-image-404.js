#!/usr/bin/env node

/**
 * 画像404エラーチェックスクリプト
 * キャッシュデータとファイルシステムの整合性をチェック
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CACHE_DIR = path.resolve(__dirname, '../cache/notion-data');
const IMAGE_DIR = path.resolve(__dirname, '../public/image/download');

// 対象データベース
const TARGET_DATABASES = [
  'about', 'staff', 'sponsors', 'general', 'news', 'slider',
  'orgChart', 'greeting', 'history', 'mission', 'vision'
];

// 画像プロパティの検索
const IMAGE_PROPERTIES = ['image', 'image1', 'image2', 'image3', 'image_en', 'image_ja'];

/**
 * キャッシュデータから画像情報を抽出
 */
async function extractImageInfo(dataType) {
  try {
    const cacheFile = path.join(CACHE_DIR, `${dataType}.json`);
    const data = JSON.parse(await fs.readFile(cacheFile, 'utf-8'));
    const imageInfos = [];

    for (const item of data) {
      if (!item.properties) continue;

      for (const prop of IMAGE_PROPERTIES) {
        const imageProperty = item.properties[prop];
        
        if (imageProperty && imageProperty.type === 'files' && imageProperty.files?.[0]) {
          const file = imageProperty.files[0];
          const fileUrl = file.file?.url || file.external?.url;

          if (fileUrl) {
            // ローカルパスかどうかをチェック
            if (fileUrl.startsWith('/image/download/')) {
              const fileName = path.basename(fileUrl);
              const fullBaseName = path.parse(fileName).name;
              
              // ページIDプレフィックスを除去してオリジナルファイル名部分を取得
              // 例: "caedb020-e7de-46db-ad8f-6221961d3dab-vision" → "vision"
              const pageIdPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}-(.+)$/;
              const match = fullBaseName.match(pageIdPattern);
              const baseName = match ? match[1] : file.name ? path.parse(file.name).name : fullBaseName;
              
              imageInfos.push({
                id: item.id,
                property: prop,
                originalFileName: file.name,
                localPath: fileUrl,
                expectedBaseName: baseName,
                fullBaseName: fullBaseName,
                dataType: dataType
              });
            }
          }
        }
      }
    }

    return imageInfos;
  } catch (error) {
    console.warn(`⚠️ ${dataType}.json の読み込みに失敗:`, error.message);
    return [];
  }
}

/**
 * 最適化画像ファイルの存在確認
 */
async function checkOptimizedImageExists(baseName, dataType) {
  const sizes = ['sm', 'md', 'lg', 'xl'];
  
  // ディレクトリ名のマッピング（データベース名 → 実際のディレクトリ名）
  const dirMapping = {
    'orgChart': 'org_chart',
    'vision': 'policy'  // visionデータはpolicyディレクトリに存在
  };
  
  const actualDir = dirMapping[dataType] || dataType;
  const dir = path.join(IMAGE_DIR, actualDir);
  const results = {
    webp: {},
    original: false
  };

  // WebP最適化画像の確認
  for (const size of sizes) {
    const webpPath = path.join(dir, `${baseName}-${size}.webp`);
    try {
      await fs.access(webpPath);
      results.webp[size] = true;
    } catch {
      results.webp[size] = false;
    }
  }

  // オリジナル画像（.png.png形式）の確認
  const originalPath = path.join(dir, `${baseName}.png.png`);
  try {
    await fs.access(originalPath);
    results.original = true;
  } catch {
    // .jpg.png形式も試行
    const jpgPath = path.join(dir, `${baseName}.jpg.png`);
    try {
      await fs.access(jpgPath);
      results.original = true;
    } catch {
      // .jpeg.png形式も試行
      const jpegPath = path.join(dir, `${baseName}.jpeg.png`);
      try {
        await fs.access(jpegPath);
        results.original = true;
      } catch {
        // .webp.png形式も試行
        const webpPngPath = path.join(dir, `${baseName}.webp.png`);
        try {
          await fs.access(webpPngPath);
          results.original = true;
        } catch {
          results.original = false;
        }
      }
    }
  }

  return results;
}

/**
 * メイン処理
 */
async function main() {
  console.log('🔍 画像404エラーチェック開始...');
  console.log('='.repeat(80));

  const allIssues = [];
  const summary = {
    totalImages: 0,
    missingWebP: 0,
    missingOriginal: 0,
    fullyMissing: 0
  };

  for (const dataType of TARGET_DATABASES) {
    console.log(`\n📁 ${dataType} データベースをチェック中...`);
    
    const imageInfos = await extractImageInfo(dataType);
    
    if (imageInfos.length === 0) {
      console.log(`  ℹ️ ${dataType}: 画像なし`);
      continue;
    }

    console.log(`  📷 ${imageInfos.length}個の画像を発見`);
    summary.totalImages += imageInfos.length;

    for (const imageInfo of imageInfos) {
      const exists = await checkOptimizedImageExists(imageInfo.expectedBaseName, dataType);
      
      const missingWebP = Object.values(exists.webp).some(exists => !exists);
      const hasAnyWebP = Object.values(exists.webp).some(exists => exists);
      
      if (!exists.original && !hasAnyWebP) {
        // 完全に見つからない
        allIssues.push({
          type: 'FULLY_MISSING',
          dataType,
          id: imageInfo.id,
          baseName: imageInfo.expectedBaseName,
          originalFileName: imageInfo.originalFileName,
          localPath: imageInfo.localPath,
          property: imageInfo.property
        });
        summary.fullyMissing++;
        console.log(`    ❌ 完全欠如: ${imageInfo.expectedBaseName}`);
      } else {
        if (!exists.original) {
          allIssues.push({
            type: 'MISSING_ORIGINAL',
            dataType,
            id: imageInfo.id,
            baseName: imageInfo.expectedBaseName,
            originalFileName: imageInfo.originalFileName,
            localPath: imageInfo.localPath,
            property: imageInfo.property
          });
          summary.missingOriginal++;
          console.log(`    ⚠️ オリジナル欠如: ${imageInfo.expectedBaseName}`);
        }
        
        if (missingWebP) {
          const missingResolutions = Object.entries(exists.webp)
            .filter(([size, exists]) => !exists)
            .map(([size]) => size);
          
          allIssues.push({
            type: 'MISSING_WEBP',
            dataType,
            id: imageInfo.id,
            baseName: imageInfo.expectedBaseName,
            originalFileName: imageInfo.originalFileName,
            localPath: imageInfo.localPath,
            property: imageInfo.property,
            missingResolutions
          });
          summary.missingWebP++;
          console.log(`    ⚠️ WebP欠如: ${imageInfo.expectedBaseName} (${missingResolutions.join(', ')})`);
        }
        
        if (exists.original && !missingWebP) {
          console.log(`    ✅ 正常: ${imageInfo.expectedBaseName}`);
        }
      }
    }
  }

  // サマリー表示
  console.log('\n📊 チェック結果サマリー');
  console.log('='.repeat(80));
  console.log(`📷 総画像数: ${summary.totalImages}`);
  console.log(`❌ 完全欠如: ${summary.fullyMissing}`);
  console.log(`⚠️ オリジナル欠如: ${summary.missingOriginal}`);
  console.log(`⚠️ WebP欠如: ${summary.missingWebP}`);
  console.log(`✅ 正常: ${summary.totalImages - summary.fullyMissing - summary.missingOriginal - summary.missingWebP}`);

  // 詳細な問題リスト
  if (allIssues.length > 0) {
    console.log('\n🚨 404エラーになる可能性のある画像');
    console.log('='.repeat(80));
    
    const fullyMissing = allIssues.filter(issue => issue.type === 'FULLY_MISSING');
    if (fullyMissing.length > 0) {
      console.log('\n❌ 完全に見つからない画像（最優先で修正が必要）:');
      fullyMissing.forEach(issue => {
        console.log(`  - ${issue.dataType}/${issue.baseName}`);
        console.log(`    📝 元ファイル名: ${issue.originalFileName}`);
        console.log(`    🔗 ローカルパス: ${issue.localPath}`);
        console.log(`    🆔 ページID: ${issue.id}`);
        console.log(`    🏷️ プロパティ: ${issue.property}`);
        console.log('');
      });
    }

    const missingOriginal = allIssues.filter(issue => issue.type === 'MISSING_ORIGINAL');
    if (missingOriginal.length > 0) {
      console.log('\n⚠️ オリジナル画像が見つからない（WebP版は存在）:');
      missingOriginal.forEach(issue => {
        console.log(`  - ${issue.dataType}/${issue.baseName}`);
        console.log(`    📝 元ファイル名: ${issue.originalFileName}`);
        console.log('');
      });
    }

    const missingWebP = allIssues.filter(issue => issue.type === 'MISSING_WEBP');
    if (missingWebP.length > 0) {
      console.log('\n⚠️ 一部のWebP解像度が見つからない:');
      missingWebP.forEach(issue => {
        console.log(`  - ${issue.dataType}/${issue.baseName}`);
        console.log(`    📝 欠如解像度: ${issue.missingResolutions.join(', ')}`);
        console.log('');
      });
    }
  } else {
    console.log('\n✅ 404エラーになる可能性のある画像は見つかりませんでした');
  }

  // 推奨アクション
  if (allIssues.length > 0) {
    console.log('\n💡 推奨アクション');
    console.log('='.repeat(80));
    console.log('1. scripts/notion-cache/cache-images.js を実行して画像を再キャッシュ');
    console.log('2. 完全に見つからない画像はNotionの元データを確認');
    console.log('3. 必要に応じて手動で画像ファイルを修復');
  }

  console.log('\n🔍 チェック完了');
  
  // 終了コード設定（CI/CD用）
  process.exit(allIssues.length > 0 ? 1 : 0);
}

main().catch(error => {
  console.error('❌ スクリプト実行エラー:', error);
  process.exit(1);
});