# デプロイ TODO

## 現状

### デプロイ先
- **Cloudflare Pages** （プロジェクト名: `tucson-japanese-language-school`）
- ローカルでは `yarn deploy:cloudflare` / `yarn deploy:cloudflare:full` で Wrangler CLI 経由でデプロイ

### 既存の GitHub Actions ワークフロー

| ファイル | 状態 | 説明 |
|---------|------|------|
| `deploy-cloudflare.yml` | **使用可能（要設定）** | Cloudflare Pages へのデプロイ。`cloudflare/wrangler-action@v3` を使用 |
| `deploy.yml` | **未使用（Firebase用）** | Firebase Hosting 用だが、デプロイステップは placeholder のまま |
| `nextjs.yml` | **未使用（GitHub Pages用）** | GitHub Pages 用テンプレート。Node 16、古い Actions バージョン |
| `cache-scheduler.yml` | **使用可能（要設定）** | 定期 Notion キャッシュ更新 + 自動コミット |

---

## やること

### 1. GitHub Secrets の設定（必須）

リポジトリの **Settings > Secrets and variables > Actions** で以下を設定:

| シークレット名 | 説明 | 取得方法 |
|---------------|------|---------|
| `CLOUDFLARE_API_TOKEN` | Cloudflare API トークン | [Cloudflare Dashboard](https://dash.cloudflare.com/profile/api-tokens) > API Tokens > Create Token > "Edit Cloudflare Workers" テンプレート使用 |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare アカウント ID | Cloudflare Dashboard > 右サイドバーに表示 |
| `NOTION_TOKEN` | Notion API キー | `.env` の `NOTION_API_KEY` と同じ値 |
| `NEXT_PUBLIC_NOTION_NEWS_DATABASE_ID` | ニュース DB ID | `.env` の同名変数と同じ値 |
| `NEXT_PUBLIC_NOTION_DATABASE_ID` | Notion DB ID | 該当するデータベース ID |

> **注意**: `.env` ファイルの値をそのままコピーすること。Notion のトークンは `secret_` で始まる文字列。

### 2. `deploy-cloudflare.yml` の調整

現在 `develop` ブランチのみトリガー（`main` はコメントアウト）:
```yaml
on:
  push:
    branches: [develop] #[main, develop]  # ← main を有効化する
```

**対応案**:
- `main` ブランチも有効化: `branches: [main, develop]`
- `main` → 本番デプロイ、`develop` → preview デプロイ にする場合は、ブランチによって Wrangler の `--branch` オプションを切り替える

```yaml
# ブランチ別デプロイの例
- name: 🚀 Deploy to Cloudflare Pages
  uses: cloudflare/wrangler-action@v3
  with:
    apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
    accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
    command: >-
      pages deploy out
      --project-name=tucson-japanese-language-school
      --branch=${{ github.ref_name == 'main' && 'main' || 'preview' }}
      --commit-dirty=true
```

### 3. 不要なワークフローの整理

- [ ] `deploy.yml` — 削除 or Cloudflare 用に統合（Firebase は使わない）
- [ ] `nextjs.yml` — 削除（GitHub Pages は使わない）
- [ ] `README.md` — Firebase の記述を Cloudflare Pages に修正

### 4. `cache-scheduler.yml` の環境変数修正

`cache-scheduler.yml` では `NOTION_API_KEY` を使っているが、`deploy-cloudflare.yml` では `NOTION_TOKEN` を使っている。**統一が必要**:

```yaml
# cache-scheduler.yml 109行目
NOTION_API_KEY: ${{ secrets.NOTION_API_KEY }}  # ← 使い方がズレている

# deploy-cloudflare.yml 62行目
NOTION_TOKEN: ${{ secrets.NOTION_TOKEN }}
```

さらに `cache-scheduler.yml` 116行目で `$NOTION_TOKEN` を参照しているが、env では `NOTION_API_KEY` で設定しているためバグ:
```yaml
if [ -z "$NOTION_TOKEN" ]; then  # ← NOTION_API_KEY にすべき、またはenvを統一
```

**対応**: すべて `NOTION_TOKEN` に統一し、GitHub Secrets も `NOTION_TOKEN` のみ設定する。

### 5. 動作確認手順

1. GitHub Secrets をすべて設定
2. `deploy-cloudflare.yml` の `branches` を `[main, develop]` に修正
3. develop ブランチに push して Actions タブで確認
4. ビルド成功・Cloudflare Pages にデプロイされることを確認
5. main ブランチへの PR/マージで本番デプロイを確認

---

## 参考: 現在のローカルデプロイコマンド

```bash
# 通常デプロイ（キャッシュ更新なし）
yarn deploy:cloudflare

# フルデプロイ（全 Notion データ取得 → ビルド → デプロイ）
yarn deploy:cloudflare:full

# プレビューデプロイ（preview ブランチ）
yarn preview:cloudflare:full
```

## 参考: Cloudflare API トークンの権限

「Edit Cloudflare Workers」テンプレートを使うか、カスタムトークンで以下の権限を付与:
- **Account** > Cloudflare Pages > Edit
- **Account** > Account Settings > Read
- **Zone** は不要（Pages は Account レベル）