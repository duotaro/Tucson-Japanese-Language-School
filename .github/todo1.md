# 案1: Cloudflare Pages Git 接続復活 + Deploy Hooks — 実施手順

## 前提知識

### ビルドの仕組み

```
fetch-all.js (Notion API からデータ取得)
       ↓
cache/notion-data/*.json に保存
       ↓
next build (キャッシュ JSON → 静的 HTML 生成)
       ↓
out/ ディレクトリに出力
```

### Cloudflare に設定する環境変数の一覧

`.env` と `lib/notion.js` から特定:

| 変数名 | 値 | 用途 |
|--------|-----|------|
| `NOTION_API_KEY` | `.env` の `secret_g4mt...` と同じ値 | Notion API 認証（キャッシュ取得時） |
| `NEXT_PUBLIC_NOTION_TOKEN` | 同上 | Notion API 認証（ビルド時フォールバック） |
| `NEXT_PUBLIC_NOTION_NEWS_DATABASE_ID` | `.env` の `cc0b1eb3...` と同じ値 | ニュース DB の ID |
| `NODE_VERSION` | `18` | Cloudflare Pages の Node.js バージョン指定 |

### 注意点

- `package.json` の `build` スクリプトに `NODE_OPTIONS=--max_old_space_size=8192`（8GB メモリ）が指定されている
- Cloudflare Pages の無料プランはメモリに制限があるため、**ここが案1の成否のポイント**
- 失敗した場合は案2（GitHub Actions workflow_dispatch 方式）にフォールバック

---

## Step 1: Cloudflare Dashboard で Git 接続

1. https://dash.cloudflare.com にログイン
2. 左メニュー **Workers & Pages** をクリック
3. プロジェクト **`tucson-japanese-language-school`** をクリック
4. 上部タブの **Settings** をクリック
5. 左メニュー **Builds & Deployments** をクリック
6. **Source** セクションで **Connect to Git** をクリック
7. GitHub アカウントを認証 → リポジトリを選択
8. 以下を設定:

| 項目 | 値 |
|------|-----|
| Production branch | `main` |
| Preview branches | `develop` |
| Build command | `yarn cache:fetch-all && yarn build` |
| Build output directory | `out` |
| Root directory | （空のまま） |

---

## Step 2: 環境変数を設定

同じ **Settings** 画面内:

1. **Environment variables** セクションへ
2. **Add variable** で以下を1つずつ追加:

| 変数名 | 値 |
|--------|-----|
| `NOTION_API_KEY` | `.env` の `secret_g4mt...` の値をコピー |
| `NEXT_PUBLIC_NOTION_TOKEN` | 同上 |
| `NEXT_PUBLIC_NOTION_NEWS_DATABASE_ID` | `.env` の `cc0b1eb3...` の値をコピー |
| `NODE_VERSION` | `18` |

> Production と Preview で同じ値でOK。

---

## Step 3: テストビルドを実行 ← ここが成否の分岐点

1. **Deployments** タブへ移動
2. 右上の **Create deployment** または最新コミットの **Retry deployment** をクリック
3. ビルドログを観察

### 確認ポイント

- [ ] `yarn cache:fetch-all` が Notion API からデータを取得できているか
- [ ] `next build` がメモリ不足にならないか
- [ ] `out/` ディレクトリが正しく生成されているか
- [ ] 最終的に **Success** と表示されるか

### 失敗した場合

→ **案2（GitHub Actions workflow_dispatch 方式）に切り替え**。TODO.md の案2を参照。

---

## Step 4: Deploy Hooks を作成

ビルドが成功したら:

1. **Settings** > **Builds & Deployments** へ
2. **Deploy hooks** セクションへスクロール
3. **Add deploy hook** をクリック
4. 以下の2つを作成:

| Hook 名 | ブランチ |
|----------|---------|
| `preview-deploy` | `develop` |
| `production-deploy` | `main` |

5. 各 Hook の **URL をコピーして控える**
   - 形式: `https://api.cloudflare.com/client/v4/pages/webhooks/deploy_hooks/xxxx`
   - 2つ分（preview / production）を控えておく

---

## Step 5: Google Apps Script を更新

1. デプロイ管理用の Google スプレッドシートを開く
2. メニュー **拡張機能** > **Apps Script** をクリック
3. 既存のコードを以下に差し替える:

```javascript
// ========================================
// Deploy Hook URLs（Step 4 でコピーした値を貼り付け）
// ========================================
var DEPLOY_HOOK_PREVIEW = 'https://api.cloudflare.com/client/v4/pages/webhooks/deploy_hooks/ここにpreview用のIDを貼る';
var DEPLOY_HOOK_PRODUCTION = 'https://api.cloudflare.com/client/v4/pages/webhooks/deploy_hooks/ここにproduction用のIDを貼る';

/**
 * 検証環境デプロイ
 */
function deployPreview() {
  var response = Browser.msgBox(
    'Deploy',
    '検証環境を更新しますか？\n（Notion → ビルド → 検証環境に反映）',
    Browser.Buttons.YES_NO
  );
  if (response != 'yes') return;

  triggerDeploy(DEPLOY_HOOK_PREVIEW);
  Browser.msgBox('検証環境のデプロイを開始しました。\n反映まで数分かかります。');
}

/**
 * 本番環境デプロイ
 */
function deployProduction() {
  var response = Browser.msgBox(
    'Deploy',
    '⚠️ 本番環境を更新しますか？\n（Notion → ビルド → 本番に反映）',
    Browser.Buttons.YES_NO
  );
  if (response != 'yes') return;

  triggerDeploy(DEPLOY_HOOK_PRODUCTION);
  Browser.msgBox('本番環境のデプロイを開始しました。\n反映まで数分かかります。');
}

/**
 * Cloudflare Pages Deploy Hook を呼び出す
 */
function triggerDeploy(hookUrl) {
  var options = {
    method: 'post',
    muteHttpExceptions: true
  };

  var response = UrlFetchApp.fetch(hookUrl, options);
  var code = response.getResponseCode();

  if (code === 200) {
    Logger.log('デプロイ起動成功');
  } else {
    Logger.log('エラー: ' + code + ' - ' + response.getContentText());
    throw new Error('デプロイ起動に失敗しました (HTTP ' + code + ')');
  }
}
```

4. **保存**（Ctrl+S）
5. スプレッドシート上のボタンに `deployPreview` / `deployProduction` を割り当て

> PAT 不要、スクリプトプロパティの設定も不要。URL に POST するだけのシンプルな構成。

---

## Step 6: 動作確認

- [ ] スプレッドシートの **検証環境デプロイ** ボタンをクリック
- [ ] Cloudflare Dashboard の **Deployments** タブでビルドが開始されたことを確認
- [ ] ビルド成功 → preview URL でサイト表示を確認
- [ ] スプレッドシートの **本番環境デプロイ** ボタンをクリック
- [ ] 本番 URL でサイト表示を確認

---

## 所要時間の目安

| ステップ | 時間 |
|---------|------|
| Step 1: Git 接続 | 5分 |
| Step 2: 環境変数設定 | 5分 |
| Step 3: テストビルド | 10〜15分（ビルド待ち） |
| Step 4: Deploy Hooks 作成 | 5分 |
| Step 5: GAS 更新 | 10分 |
| Step 6: 動作確認 | 10〜15分 |
| **合計** | **約45分〜1時間** |
