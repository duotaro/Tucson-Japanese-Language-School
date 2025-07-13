#!/usr/bin/env node

/**
 * モックデータ作成スクリプト
 * API認証なしでキャッシュシステムの動作テスト用
 */

import { DATABASES, getAllDatabases } from './database-config.js';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CACHE_DIR = path.resolve(__dirname, '../../cache/notion-data');
const METADATA_FILE = path.resolve(__dirname, '../../cache/metadata.json');

/**
 * データタイプ別のモックデータを生成
 */
function generateMockData(dataType, recordCount = 5) {
  const baseData = {
    id: `mock-${dataType}-`,
    created_time: new Date().toISOString(),
    last_edited_time: new Date().toISOString(),
    cover: null,
    icon: null,
    parent: {
      type: "database_id",
      database_id: DATABASES[dataType] || "mock-database-id"
    },
    archived: false,
    properties: {}
  };

  const records = [];
  
  for (let i = 1; i <= recordCount; i++) {
    const record = {
      ...baseData,
      id: `${baseData.id}${i.toString().padStart(3, '0')}`,
      properties: generateProperties(dataType, i)
    };
    records.push(record);
  }
  
  return records;
}

/**
 * データタイプに応じたプロパティを生成
 */
function generateProperties(dataType, index) {
  const commonProps = {
    Name: {
      id: "title",
      type: "title",
      title: [
        {
          type: "text",
          text: {
            content: `${dataType.charAt(0).toUpperCase() + dataType.slice(1)} Item ${index}`,
            link: null
          }
        }
      ]
    }
  };

  // データタイプ別の特殊プロパティ
  const specificProps = {};
  
  switch (dataType) {
    case 'news':
      specificProps.Date = {
        type: "date",
        date: {
          start: new Date(Date.now() - index * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
        }
      };
      specificProps.Status = {
        type: "select",
        select: {
          name: index % 2 === 0 ? "Published" : "Draft"
        }
      };
      break;
      
    case 'staff':
      specificProps.Role = {
        type: "select",
        select: {
          name: ["Teacher", "Administrator", "Director"][index % 3]
        }
      };
      specificProps.Email = {
        type: "email",
        email: `staff${index}@example.com`
      };
      break;
      
    case 'slider':
      specificProps.Order = {
        type: "number",
        number: index
      };
      specificProps.Active = {
        type: "checkbox",
        checkbox: index <= 3
      };
      break;
      
    default:
      specificProps.Description = {
        type: "rich_text",
        rich_text: [
          {
            type: "text",
            text: {
              content: `This is a mock ${dataType} item for testing purposes.`
            }
          }
        ]
      };
  }

  return { ...commonProps, ...specificProps };
}

/**
 * モックデータを生成・保存
 */
async function createMockData() {
  console.log('🎭 モックデータ生成を開始...');
  
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
    totalCount: 0
  };
  
  // 全データベースのモックデータを生成
  const allDatabases = getAllDatabases();
  console.log(`🎯 生成対象: ${allDatabases.length}個のデータベース\n`);
  
  for (const [index, dataType] of allDatabases.entries()) {
    try {
      console.log(`🎭 [${index + 1}/${allDatabases.length}] ${dataType} モックデータ生成中...`);
      
      // データタイプに応じたレコード数を設定
      const recordCounts = {
        news: 10,
        staff: 8,
        slider: 5,
        sponsors: 6,
        classes: 12,
        default: 5
      };
      
      const recordCount = recordCounts[dataType] || recordCounts.default;
      const mockData = generateMockData(dataType, recordCount);
      
      // キャッシュファイルに保存
      const cacheFilePath = path.join(CACHE_DIR, `${dataType}.json`);
      await fs.writeFile(
        cacheFilePath,
        JSON.stringify(mockData, null, 2),
        'utf-8'
      );
      
      console.log(`✅ ${dataType} 完了 (${mockData.length}件) → ${path.basename(cacheFilePath)}`);
      
      results.success.push({
        dataType,
        recordCount: mockData.length,
        databaseId: DATABASES[dataType] || 'mock-id',
        filePath: cacheFilePath
      });
      results.totalCount += mockData.length;
      
    } catch (error) {
      console.error(`❌ ${dataType} 生成失敗:`, error.message);
    }
  }
  
  // メタデータ保存
  const metadata = {
    lastUpdate: new Date().toISOString(),
    totalDatabases: allDatabases.length,
    successCount: results.success.length,
    failedCount: 0,
    totalRecords: results.totalCount,
    executionTime: Date.now() - startTime,
    isMockData: true,
    databases: results.success.reduce((acc, item) => {
      acc[item.dataType] = {
        recordCount: item.recordCount,
        databaseId: item.databaseId,
        lastFetch: new Date().toISOString(),
        isMock: true
      };
      return acc;
    }, {}),
    failures: []
  };
  
  try {
    await fs.writeFile(METADATA_FILE, JSON.stringify(metadata, null, 2), 'utf-8');
    console.log(`📋 メタデータ保存完了: ${path.basename(METADATA_FILE)}`);
  } catch (error) {
    console.error('⚠️ メタデータ保存に失敗:', error.message);
  }
  
  // 結果サマリー
  console.log('\n🎉 モックデータ生成完了！');
  console.log('='.repeat(50));
  console.log(`✅ 成功: ${results.success.length}個`);
  console.log(`📊 総レコード数: ${results.totalCount.toLocaleString()}件`);
  console.log(`⏱️ 生成時間: ${(metadata.executionTime / 1000).toFixed(2)}秒`);
  
  console.log('\n📁 生成されたキャッシュファイル:');
  results.success.forEach(success => {
    console.log(`  - ${success.dataType}.json (${success.recordCount}件)`);
  });
  
  console.log('\n💡 次のステップ:');
  console.log('  yarn dev    # 開発サーバー起動（キャッシュ使用）');
  console.log('  yarn build  # 本番ビルド（キャッシュ使用）');
  console.log('  yarn cache:stats  # キャッシュ統計確認');
}

// 実行
createMockData().catch(error => {
  console.error('💥 実行エラー:', error);
  process.exit(1);
});