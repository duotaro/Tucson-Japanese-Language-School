#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const cacheDir = path.join(process.cwd(), 'cache', 'notion-data');

// コマンドライン引数から更新したいキャッシュ名を取得
const cacheToRefresh = process.argv[2];

if (!cacheToRefresh) {
  console.log('使用方法: node scripts/refresh-cache.js <cache-name>');
  console.log('例: node scripts/refresh-cache.js reports');
  console.log('例: node scripts/refresh-cache.js vision');
  process.exit(1);
}

const cacheFile = path.join(cacheDir, `${cacheToRefresh}.json`);

if (fs.existsSync(cacheFile)) {
  fs.unlinkSync(cacheFile);
  console.log(`✅ ${cacheToRefresh}.jsonキャッシュを削除しました`);
  console.log('次回のビルド時にNotionから最新データを取得します');
} else {
  console.log(`❌ ${cacheFile} が見つかりません`);
}