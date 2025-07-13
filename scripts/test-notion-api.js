#!/usr/bin/env node

/**
 * Notion API接続テストスクリプト
 * 環境変数とAPIトークンの有効性を確認
 */

import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';
import { Client } from "@notionhq/client";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// .env.localファイルを読み込む
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });
dotenv.config({ path: path.resolve(__dirname, '../.env') });

console.log('🔍 環境変数チェック:');
console.log('NOTION_API_KEY:', process.env.NOTION_API_KEY ? '設定済み' : '未設定');
console.log('NEXT_PUBLIC_NOTION_TOKEN:', process.env.NEXT_PUBLIC_NOTION_TOKEN ? '設定済み' : '未設定');
console.log('');

// 使用するトークンを決定
const token = process.env.NOTION_API_KEY || process.env.NEXT_PUBLIC_NOTION_TOKEN;

if (!token) {
  console.error('❌ Notion APIトークンが設定されていません');
  process.exit(1);
}

console.log('🔑 使用するトークン:', token.substring(0, 20) + '...');

// Notionクライアントを初期化
const notion = new Client({
  auth: token,
});

// テスト用のデータベースID
const testDatabaseId = 'f2bd94d61f7c45958755562d366af5ea'; // sliderデータベース

async function testNotionConnection() {
  console.log('\n🧪 Notion API接続テスト開始...\n');

  try {
    // 1. データベース取得テスト
    console.log('📊 データベース取得テスト...');
    const response = await notion.databases.query({
      database_id: testDatabaseId,
      page_size: 1
    });
    
    console.log('✅ データベース接続成功！');
    console.log(`  - レコード数: ${response.results.length}`);
    console.log(`  - has_more: ${response.has_more}`);
    
    // 2. ユーザー情報取得テスト
    console.log('\n👤 ユーザー情報取得テスト...');
    const users = await notion.users.list({});
    console.log('✅ ユーザー情報取得成功！');
    console.log(`  - ユーザー数: ${users.results.length}`);
    
    console.log('\n🎉 すべてのテストが成功しました！');
    console.log('APIトークンは有効です。');
    
  } catch (error) {
    console.error('\n❌ エラーが発生しました:');
    console.error('エラーコード:', error.code);
    console.error('ステータス:', error.status);
    console.error('メッセージ:', error.message);
    
    if (error.code === 'unauthorized') {
      console.error('\n⚠️  APIトークンが無効です。以下を確認してください:');
      console.error('1. トークンが正しいか確認');
      console.error('2. Notionでインテグレーションが有効か確認');
      console.error('3. データベースにインテグレーションのアクセス権限があるか確認');
    } else if (error.code === 'object_not_found') {
      console.error('\n⚠️  データベースが見つかりません。以下を確認してください:');
      console.error('1. データベースIDが正しいか確認');
      console.error('2. データベースにインテグレーションのアクセス権限があるか確認');
    }
  }
}

// テスト実行
testNotionConnection();