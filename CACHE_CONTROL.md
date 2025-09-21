# キャッシュ制御システム使用方法

## 概要
本プロジェクトでは、Notionからのデータ取得をキャッシュする仕組みがあります。
`config/cache-config.js`で設定を管理し、本番環境でも動的に制御可能です。

## 基本的な使い方

### 1. グローバルにキャッシュを無効化
```javascript
// ページコンポーネント内で
import { disableAllCache, enableAllCache } from '../config/cache-config.js';

// 全キャッシュを無効化（直接APIから取得）
disableAllCache();

// 全キャッシュを有効化
enableAllCache();
```

### 2. 特定のデータタイプのみキャッシュを無効化
```javascript
import { updateCacheConfig } from '../config/cache-config.js';

// ニュースだけAPIから最新データを取得
updateCacheConfig({
  dataTypes: {
    news: false  // newsのみ無効化
  }
});
```

### 3. 一時的にキャッシュを無視
```javascript
import { loadCachedData } from '../lib/cache-loader.js';

// このリクエストのみキャッシュを無視
const data = await loadCachedData('news', {
  ignoreCache: true  // 直接APIから取得
});
```

### 4. デバッグモードを有効化
```javascript
import { updateCacheConfig } from '../config/cache-config.js';

// キャッシュの使用状況をログ出力
updateCacheConfig({
  debug: true
});
```

## 設定ファイルの直接編集

`config/cache-config.js`を直接編集することで、デフォルト設定を変更できます：

```javascript
const cacheConfig = {
  enabled: false,  // 全体のキャッシュを無効化
  dataTypes: {
    news: false,   // 特定のデータタイプを無効化
    slider: true,
    // ...
  },
  debug: true,     // デバッグ出力を有効化
  maxAge: 0,       // キャッシュ期限を無期限に
};
```

## 本番環境での使用例

### ケース1: 重要な更新をすぐに反映させたい
```javascript
// pages/[[...slug]].js内で条件分岐
import { updateCacheConfig } from '../config/cache-config.js';

// 特定の条件下でキャッシュを無効化
if (process.env.NODE_ENV === 'production' && needFreshData) {
  updateCacheConfig({ enabled: false });
}
```

### ケース2: 管理者向けページで最新データを表示
```javascript
// 管理者ページコンポーネント
export async function getServerSideProps(context) {
  // 管理者の場合は常に最新データ
  const isAdmin = checkIfAdmin(context);

  const data = await loadCachedData('news', {
    ignoreCache: isAdmin
  });

  return { props: { data } };
}
```

### ケース3: 特定の時間帯だけキャッシュを無効化
```javascript
import { updateCacheConfig, getCacheConfig } from '../config/cache-config.js';

// 営業時間中は最新データを表示
const hour = new Date().getHours();
if (hour >= 9 && hour <= 17) {
  updateCacheConfig({ enabled: false });
} else {
  updateCacheConfig({ enabled: true });
}
```

## APIフォールバック設定

キャッシュファイルが見つからない場合の動作を制御：

```javascript
// キャッシュがなくてもエラーにしない（デフォルト）
updateCacheConfig({
  fallbackToAPI: true
});

// キャッシュがない場合はエラーにする
updateCacheConfig({
  fallbackToAPI: false
});
```

## 現在の設定を確認

```javascript
import { getCacheConfig } from '../config/cache-config.js';

const currentConfig = getCacheConfig();
console.log('現在のキャッシュ設定:', currentConfig);
```

## データタイプ一覧

以下のデータタイプが個別に制御可能です：

- `news` - ニュース
- `slider` - スライダー画像
- `sponsors` - スポンサー
- `schedule` - スケジュール
- `about` - About情報
- `general` - 一般情報
- `greeting` - 挨拶文
- `story` - ストーリー
- `history` - 歴史
- `mission` - ミッション
- `vision` - ビジョン
- `orgChart` - 組織図
- `directors` - 役員
- `staff` - スタッフ
- `reports` - レポート
- `policies` - ポリシー
- `classes` - クラス情報
- `files` - ファイル
- `howto` - 使い方

## 注意事項

1. キャッシュを無効にすると、Notion APIへの直接アクセスが増えるため、レスポンスが遅くなる可能性があります
2. Notion APIのレート制限に注意してください
3. デバッグモードは本番環境では無効にすることを推奨します