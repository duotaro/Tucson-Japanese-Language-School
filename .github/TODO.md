# 非開発者によるワンボタンデプロイの実現

## 目的

非開発者のサイト運用者が、管理画面からボタンひとつで **検証環境・本番環境** にデプロイできるようにする。

## 背景

以前は Cloudflare Pages の **Deploy Hooks**（Webhook URL に POST するだけ）を Google スプレッドシートのボタンから叩いてデプロイしていた。以下の理由で動かなくなった：

- Wrangler CLI 直接アップロード方式に切り替えたことで、Cloudflare Pages の Git 接続が切れた
- Deploy Hooks は Git 接続型プロジェクトでのみ機能する
- キャッシュシステム導入後、ビルドに `NOTION_TOKEN` 等の環境変数が必要

## 現状

- デプロイ先: **Cloudflare Pages**（プロジェクト名: `tucson-japanese-language-school`）
- ローカルから `yarn deploy:cloudflare` / `yarn deploy:cloudflare:full` で Wrangler CLI 経由デプロイ
- Google スプレッドシートのデプロイボタンは **動作していない**

---

## 案の比較

### 案1: Cloudflare Pages の Git 接続を復活 + Deploy Hooks（推奨）

以前動いていた仕組みをそのまま復活させる。

```
運用者: スプレッドシートのボタン
           ↓
  Google Apps Script
  (Deploy Hook URL に POST)
           ↓
  Cloudflare Pages
  ├── GitHub からソース取得
  ├── yarn install && yarn build
  └── デプロイ完了
```

**メリット**:
- 最もシンプル。GAS のコードは `UrlFetchApp.fetch(hookUrl, {method:'post'})` の1行
- GitHub PAT 不要（トークン管理の手間なし）
- 以前動いていた仕組みの復活なので、運用者も慣れている

**デメリット**:
- Cloudflare のビルド環境で `yarn build` が通るか検証が必要
- Cloudflare Pages のビルド時間制限あり（無料プランで20分）

**所要時間**: 約30分〜1時間（ビルド検証含む）

#### 手順

1. Cloudflare Dashboard → Pages → プロジェクト → Settings → Git 接続を設定
2. ビルド設定:
   - Build command: `yarn install && yarn build`
   - Build output directory: `out`
   - Node.js version: 18（環境変数 `NODE_VERSION=18` で指定）
3. 環境変数を Cloudflare Dashboard に設定:
   - `NOTION_TOKEN`（= `.env` の `NOTION_API_KEY` と同じ値）
   - `NEXT_PUBLIC_NOTION_NEWS_DATABASE_ID`
   - `NEXT_PUBLIC_NOTION_DATABASE_ID`
   - その他 `.env` の `NEXT_PUBLIC_*` 変数
4. テストビルドを実行して成功を確認
5. Deploy Hooks を作成（Settings > Builds & deployments > Deploy hooks）
   - 検証用: `preview-deploy`（ブランチ: `develop`）
   - 本番用: `production-deploy`（ブランチ: `main`）
6. Google Apps Script を更新（Hook URL に POST するだけ）

---

### 案2: GitHub Actions `workflow_dispatch` + Google Apps Script

GitHub Actions でビルド＆デプロイし、GAS から GitHub API で起動する。

```
運用者: スプレッドシートのボタン
           ↓
  Google Apps Script
  (GitHub REST API を POST)
           ↓
  GitHub Actions (workflow_dispatch)
  ├── Notion キャッシュ取得
  ├── yarn build
  └── Wrangler で Cloudflare Pages にデプロイ
```

**メリット**:
- ビルド環境の自由度が高い（GitHub Actions の Ubuntu ランナー）
- ログも GitHub Actions で確認可能

**デメリット**:
- GitHub PAT の管理が必要（有効期限あり、定期更新が必要）
- 設定箇所が多い（GitHub Secrets、PAT、GAS、スクリプトプロパティ）

**所要時間**: 約1.5〜2時間

**案1が失敗した場合のフォールバックとして採用する。**

---

### 案3: Cloudflare Workers ミニダッシュボード + GitHub Actions

GAS/スプレッドシートの代わりに、専用の簡易 Web ページを Cloudflare Workers に置く。

```
運用者: ブラウザでダッシュボードURL にアクセス
           ↓
  ┌──────────────────────────┐
  │  [検証環境に反映]  [本番環境に反映]  │
  └──────────────────────────┘
           ↓
  Cloudflare Worker → GitHub Actions API → ビルド＆デプロイ
```

**メリット**:
- Google Sheets に依存しない
- URL を共有するだけで誰でも使える、パスワード保護も可能

**デメリット**:
- Workers のコードを書く必要がある
- PAT は同様に必要

**所要時間**: 約2〜3時間

---

## 方針

**案1（Cloudflare Git 接続復活 + Deploy Hooks）をまず試す。**

理由:
1. 最もシンプルで壊れにくい
2. PAT の有効期限管理が不要
3. GAS が最小限のコードで済む
4. 以前動いていた仕組みの復活なので運用者も慣れている

案1がダメになるケース = 「Cloudflare のビルド環境で `yarn build` が通らない」場合のみ。
その場合は案2にフォールバックする。

---

## 進め方

- [ ] **Step 1**: Cloudflare Dashboard で Git リポ再接続 + 環境変数設定
- [ ] **Step 2**: テストビルド実行（ここで案1の成否が判明）
- [ ] **Step 3**: 成功 → Deploy Hooks 作成（preview / production）
- [ ] **Step 4**: Google Apps Script を更新（Hook URL に POST）
- [ ] **Step 5**: スプレッドシートからボタンで動作確認

失敗した場合:
- [ ] **Step 2 で失敗** → 案2 に切り替え（GitHub Actions workflow_dispatch 方式）

---

## 補足: 不要なワークフローの整理

現在 `.github/workflows/` に以下の未使用ファイルがある。案の実施と合わせて整理する:

- [ ] `deploy.yml` — Firebase 用。削除する
- [ ] `nextjs.yml` — GitHub Pages 用。削除する
- [ ] `cache-scheduler.yml` の環境変数バグ修正（`NOTION_API_KEY` と `NOTION_TOKEN` の不一致）
