# Notion API プリフェッチ・キャッシュシステム設計

## 🎯 概要

ビルド時間短縮のため、Notion APIデータを事前取得・ローカルキャッシュし、段階的更新を可能にするシステムを設計する。

---

## 📋 現状の問題点

### ビルド時のAPIコール状況
```javascript
// 現在：ビルド時に毎回API呼び出し
export async function getStaticProps() {
  const sliderList = await fetchData("f2bd94d61f7c45958755562d366af5ea", "slider");
  const sponsors = await fetchData("1e302ac5bce442b797e491aee309e7c4", "sponsor"); 
  const newsDatabase = await fetchData(newsId, "news");
  // ... 全81箇所でAPI呼び出し
}
```

### 問題
- **ビルド時間**: 毎回全データ取得で数分
- **無駄な通信**: 変更されていないデータも再取得
- **API制限**: 大量リクエストでレート制限の可能性

---

## 🏗️ 提案システム設計

### 1. プリフェッチスクリプト構成

```
scripts/
├── notion-cache/
│   ├── fetch-all.js           # 全データ取得
│   ├── fetch-by-page.js       # ページ別取得
│   ├── fetch-incremental.js   # 差分更新
│   └── cache-manager.js       # キャッシュ管理
```

### 2. キャッシュデータ構造

```
cache/
├── notion-data/
│   ├── slider.json            # スライダーデータ
│   ├── sponsors.json          # スポンサーデータ  
│   ├── news.json              # ニュースデータ
│   ├── about.json             # About情報
│   ├── staff.json             # スタッフ情報
│   └── ...
├── metadata.json              # 最終更新時刻等
└── page-mapping.json          # ページ→データ依存関係
```

---

## 🔧 実装例

### 1. データ取得スクリプト (`scripts/notion-cache/fetch-all.js`)

```javascript
import { getDatabase } from '../lib/notion.js';
import fs from 'fs/promises';
import path from 'path';

const CACHE_DIR = './cache/notion-data';
const DATABASES = {
  slider: "f2bd94d61f7c45958755562d366af5ea",
  sponsors: "1e302ac5bce442b797e491aee309e7c4", 
  news: process.env.NEXT_PUBLIC_NOTION_NEWS_DATABASE_ID,
  about: "d4eb3828e74c469b9179ca7be9edb5cf",
  // ... 他のデータベース
};

async function fetchAllData() {
  console.log('🔄 Notion データを取得中...');
  
  await fs.mkdir(CACHE_DIR, { recursive: true });
  
  for (const [key, databaseId] of Object.entries(DATABASES)) {
    try {
      console.log(`📥 ${key} データ取得中...`);
      const data = await getDatabase(databaseId);
      
      await fs.writeFile(
        path.join(CACHE_DIR, `${key}.json`),
        JSON.stringify(data, null, 2)
      );
      
      console.log(`✅ ${key} データ保存完了 (${data.length}件)`);
    } catch (error) {
      console.error(`❌ ${key} データ取得失敗:`, error);
    }
  }
  
  // メタデータ更新
  const metadata = {
    lastUpdate: new Date().toISOString(),
    databases: Object.keys(DATABASES)
  };
  
  await fs.writeFile('./cache/metadata.json', JSON.stringify(metadata, null, 2));
  console.log('🎉 全データ取得完了！');
}

fetchAllData();
```

### 2. キャッシュ読み込み関数 (`lib/cache-loader.js`)

```javascript
import fs from 'fs/promises';
import path from 'path';

const CACHE_DIR = './cache/notion-data';

export async function loadCachedData(dataType) {
  try {
    const filePath = path.join(CACHE_DIR, `${dataType}.json`);
    const data = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.warn(`⚠️ キャッシュデータ ${dataType} が見つかりません。APIから取得します。`);
    // フォールバック: API から取得
    const { getDatabase } = await import('./notion.js');
    return await getDatabase(getDatabaseId(dataType));
  }
}

function getDatabaseId(dataType) {
  const mapping = {
    slider: "f2bd94d61f7c45958755562d366af5ea",
    sponsors: "1e302ac5bce442b797e491aee309e7c4",
    // ... 他のマッピング
  };
  return mapping[dataType];
}
```

### 3. 修正されたgetStaticProps

```javascript
import { loadCachedData } from '../lib/cache-loader.js';

export async function getStaticProps({ params }) {
  // キャッシュからデータ読み込み（超高速）
  const sliderList = await loadCachedData('slider');
  const sponsors = await loadCachedData('sponsors');
  const newsDatabase = await loadCachedData('news');
  
  // データ処理（変更なし）
  const newsList = await getNewsList(newsDatabase, 3);
  
  return {
    props: {
      sliderList,
      sponsors, 
      newsList,
      // ...
    }
  };
}
```

---

## 📅 段階的更新戦略

### 1. 更新頻度別分類

```javascript
// scripts/notion-cache/update-strategies.js
const UPDATE_STRATEGIES = {
  // 高頻度更新（毎日）
  frequent: ['news', 'events', 'announcements'],
  
  // 中頻度更新（週1回）
  moderate: ['staff', 'classes', 'schedule'],
  
  // 低頻度更新（月1回）
  rare: ['about', 'mission', 'governance', 'policies']
};
```

### 2. 差分更新スクリプト

```javascript
// scripts/notion-cache/fetch-incremental.js
async function updateByFrequency(frequency = 'frequent') {
  const targets = UPDATE_STRATEGIES[frequency];
  
  for (const dataType of targets) {
    console.log(`🔄 ${dataType} を更新中...`);
    await updateCacheData(dataType);
  }
}

// 使用例
// yarn update-cache:frequent  # ニュース等を更新
// yarn update-cache:moderate  # スタッフ等を更新  
// yarn update-cache:rare      # 基本情報を更新
```

---

## 📦 package.json スクリプト

```json
{
  "scripts": {
    "cache:fetch-all": "node scripts/notion-cache/fetch-all.js",
    "cache:update:frequent": "node scripts/notion-cache/fetch-incremental.js frequent",
    "cache:update:moderate": "node scripts/notion-cache/fetch-incremental.js moderate", 
    "cache:update:rare": "node scripts/notion-cache/fetch-incremental.js rare",
    "build:fast": "yarn cache:update:frequent && yarn build",
    "build:full": "yarn cache:fetch-all && yarn build"
  }
}
```

---

## 🚀 運用フロー

### 日常開発
```bash
# 1. 初回：全データ取得
yarn cache:fetch-all

# 2. 通常ビルド（キャッシュ使用、超高速）
yarn build

# 3. ニュース更新時のみ
yarn cache:update:frequent
yarn build
```

### 本番デプロイ
```bash
# CI/CD で自動実行
yarn cache:fetch-all    # 最新データ取得
yarn build             # ビルド実行
```

---

## 📈 期待効果

### ビルド時間
- **現在**: 5-10分（API待機時間含む）
- **キャッシュ使用後**: 1-2分（ファイル読み込みのみ）
- **改善率**: 70-80%短縮

### 運用メリット
1. **選択的更新**: 変更があった部分のみ更新
2. **高速開発**: ローカル開発でAPI制限を気にしない
3. **障害耐性**: APIダウン時もキャッシュで動作継続
4. **バージョン管理**: データの履歴管理が可能

---

## ⚠️ 注意点

### データ整合性
- キャッシュとNotion の同期タイミング
- 古いキャッシュデータでの表示リスク

### 実装工数
- 初期実装: 2-3日
- 既存コード修正: 1-2日
- テスト・調整: 1-2日

---

## 🎯 推奨実装順序

1. **Phase 1**: 基本キャッシュシステム構築
2. **Phase 2**: 段階的更新機能追加  
3. **Phase 3**: CI/CD統合
4. **Phase 4**: モニタリング・アラート追加

---

## ✅ 実装進捗チェックリスト

### Phase 1: 基本キャッシュシステム構築

#### Phase 1.1: ディレクトリ構成作成 ✅ 完了
- [x] `scripts/notion-cache/` ディレクトリ作成
- [x] `cache/notion-data/` ディレクトリ作成  
- [x] `.gitkeep` ファイル配置

#### Phase 1.2: 基本スクリプト作成 ✅ 完了
- [x] `scripts/notion-cache/database-config.js` - データベース設定管理
- [x] `scripts/notion-cache/fetch-all.js` - 全データ取得スクリプト
- [x] `lib/cache-loader.js` - キャッシュ読み込み関数

#### Phase 1.3: 統合とテスト ✅ 完了
- [x] `package.json` にキャッシュ関連スクリプト追加
- [x] 初回データ取得テスト実行（モックデータで動作確認済み）
- [x] `pages/[[...slug]].js` でキャッシュローダー使用に切り替え
- [x] ビルド時間測定・比較（キャッシュシステム動作確認済み）

#### Phase 1.4: 既存コード移行 ✅ 完了
- [x] 主要ページ（Home, Staff, Governance）でキャッシュローダー使用
- [x] フォールバック機能テスト（API未設定時の動作確認済み）
- [x] エラーハンドリング確認（モックデータでの動作確認済み）
- [x] 全ページコンポーネントでキャッシュローダー使用
  - [x] Program/Class, Admissions, Support, Contact, Calendar, Report, Mission, Welcome
- [x] fetchData関数からキャッシュローダーへの完全移行
- [x] 30データベース対応（greeting, history追加）
- [x] モックデータでの統合テスト完了

### Phase 2: 段階的更新機能追加 ✅ 完了
- [x] `scripts/notion-cache/fetch-incremental.js` 作成
- [x] 更新頻度別更新スクリプト（frequent/moderate/rare）
- [x] 差分検知機能（レコード数・last_edited_time比較）
- [x] 動的レートリミット調整機能
- [x] メタデータ管理とクリーンアップ機能

### Phase 3: CI/CD統合 ✅ 完了
- [x] GitHub Actions ワークフロー設定
  - [x] `deploy.yml` - メインデプロイワークフロー
  - [x] `cache-scheduler.yml` - 定期キャッシュ更新
- [x] 自動キャッシュ更新（頻度別・ブランチ別戦略）
- [x] デプロイフロー統合（develop/main分岐対応）
- [x] 環境変数・シークレット設定ドキュメント
- [x] CI/CD用package.jsonスクリプト追加
- [x] キャッシュヘルスチェック機能

### Phase 4: モニタリング・アラート ✅ 完了
- [x] キャッシュ監視機能
  - [x] `cache-monitor.js` - 総合監視システム
  - [x] ファイル分析・メタデータ検証
  - [x] 健全性チェック・問題検出
- [x] 更新失敗アラート機能
  - [x] `fetch-incremental.js` にアラート統合
  - [x] GitHub Actions出力対応
  - [x] レベル別アラート（info/warning/error/critical）
- [x] パフォーマンス計測機能
  - [x] `performance-tracker.js` - 詳細計測
  - [x] ビルド時間・キャッシュ効率測定
  - [x] 履歴管理・ベンチマーク機能
- [x] アラート通知システム
  - [x] `alert-notifier.js` - Slack/Email/GitHub対応
  - [x] レート制限・通知レベル管理
  - [x] 環境変数ベース設定
- [x] ダッシュボード・レポート機能
  - [x] `dashboard.js` - 総合ダッシュボード
  - [x] HTML/JSONレポート生成
  - [x] 推奨事項自動生成

---

## 🚀 将来的な改善案

### Phase 5: パフォーマンス最適化 ⏳ 将来検討
#### 並列処理による高速化
現在の実装では28データベースを順次取得（400ms間隔）するため、最低11.2秒の実行時間が必要。

**改善案**: 制限付き並列処理
```javascript
// 例: 3つずつ並列実行
const chunks = chunk(allDatabases, 3); // データベースリストを3つずつの配列に分割
for (const chunk of chunks) {
  await Promise.allSettled(chunk.map(db => fetchDatabase(db)));
  await new Promise(resolve => setTimeout(resolve, 1000)); // 1秒待機
}
```

**効果**: 理論上1/3程度の時間短縮（11.2秒 → 約4秒）

**トレードオフ**:
- ✅ 大幅な時間短縮
- ⚠️ 実装複雑化
- ⚠️ レートリミットリスク増加

**実装考慮点**:
- Notion「平均3リクエスト/秒」の解釈
- エラー時の適切な並列度調整
- 動的並列度制御（エラー増加時は直列に変更）

---

このシステムにより、Notion APIの柔軟性を保ちながら、ビルド時間を大幅に短縮できます。