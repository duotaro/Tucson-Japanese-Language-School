#!/usr/bin/env node

import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 環境変数を読み込む
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });
dotenv.config({ path: path.resolve(__dirname, '../.env') });

console.log('環境変数デバッグ:');
console.log('NOTION_API_KEY:', process.env.NOTION_API_KEY);
console.log('NEXT_PUBLIC_NOTION_TOKEN:', process.env.NEXT_PUBLIC_NOTION_TOKEN);
console.log('');

// lib/notion.jsを動的にインポートしてテスト
console.log('lib/notion.jsをインポートしてテスト...');
import('../lib/notion.js').then(async (module) => {
  const { getDatabase } = module;
  
  try {
    console.log('データベース取得テスト...');
    const result = await getDatabase('f2bd94d61f7c45958755562d366af5ea');
    console.log('成功！取得したレコード数:', result ? result.length : 0);
  } catch (error) {
    console.error('エラー:', error.message);
    console.error('詳細:', error);
  }
});