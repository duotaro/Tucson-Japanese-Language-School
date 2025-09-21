# Google Calendar API セットアップガイド

## 概要
このガイドでは、Google Calendar APIを使用してGoogleカレンダーのイベントを**安全に**Webサイトに表示するための設定方法を説明します。

## セットアップ手順

### 1. Google Cloud Consoleでプロジェクトを作成

1. [Google Cloud Console](https://console.cloud.google.com/)にアクセス
2. 新しいプロジェクトを作成または既存のプロジェクトを選択

### 2. Google Calendar APIを有効化

1. ナビゲーションメニューから「APIとサービス」→「ライブラリ」を選択
2. 「Google Calendar API」を検索
3. 「有効にする」をクリック

### 3. サービスアカウントの作成

1. 「APIとサービス」→「認証情報」を選択
2. 「認証情報を作成」→「サービスアカウント」を選択
3. サービスアカウント名を入力（例：`calendar-reader`）
4. 「作成して続行」をクリック
5. ロールは不要なので「続行」をクリック
6. 「完了」をクリック

### 4. サービスアカウントキーの作成

1. 作成したサービスアカウントをクリック
2. 「キー」タブを選択
3. 「鍵を追加」→「新しい鍵を作成」を選択
4. 「JSON」を選択して「作成」をクリック
5. JSONファイルがダウンロードされます（重要：このファイルは安全に保管してください）

### 5. Googleカレンダーへのアクセス権限を付与

1. Googleカレンダーを開く
2. 対象のカレンダーの設定を開く
3. 「特定のユーザーとの共有」セクションで「ユーザーを追加」をクリック
4. サービスアカウントのメールアドレスを入力（例：`calendar-reader@your-project.iam.gserviceaccount.com`）
5. 権限を「予定の表示（すべての予定の詳細）」に設定
6. 「送信」をクリック

### 6. カレンダーIDの取得

1. Googleカレンダーの設定画面で
2. 「カレンダーの統合」セクションを開く
3. 「カレンダーID」をコピー（例：`your-calendar-id@group.calendar.google.com`）

### 7. 環境変数の設定

`.env.local`ファイルに以下を追加：

```env
# GoogleカレンダーID
GOOGLE_CALENDAR_ID=your-calendar-id@group.calendar.google.com

# サービスアカウントのメールアドレス
GOOGLE_SERVICE_ACCOUNT_EMAIL=calendar-reader@your-project.iam.gserviceaccount.com

# サービスアカウントの秘密鍵（JSONファイルから"private_key"フィールドをコピー）
GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
```

### 8. カレンダー同期を実行

```bash
# カレンダーデータを同期
yarn calendar:sync
```

以上で完了です！ 🎉

## 使用方法

### 基本コマンド

```bash
# カレンダーデータを同期（推奨）
yarn calendar:sync

# ビルド時に自動同期
yarn calendar:sync && yarn build
```

## 🛡️ 課金防止設定

Google Calendar APIを使用する場合、以下の設定で課金を完全に防げます：

### Google Cloud Consoleでのクォータ制限

1. [Google Cloud Console](https://console.cloud.google.com/)にログイン
2. 「APIとサービス」→「有効なAPI」→「Google Calendar API」
3. 「割り当て」タブで以下を設定：
   - **1日あたりのリクエスト数**: 10,000（無料枠の1%）
   - **1秒あたりのリクエスト数**: 5

### 予算アラートの設定

1. 「お支払い」→「予算とアラート」
2. 予算を1円に設定
3. 50%、90%、100%でアラート通知

### 実際のAPI使用量

- SSGビルド時のみ使用：1日数回程度
- 無料枠（100万回/日）の0.001%以下
- **課金リスク：実質ゼロ**

## 定期実行の設定（オプション）

GitHubActionsやcronを使用して定期的に同期することができます。

### GitHub Actions例

`.github/workflows/sync-calendar.yml`:

```yaml
name: Sync Calendar

on:
  schedule:
    - cron: '0 */6 * * *' # 6時間ごと
  workflow_dispatch: # 手動実行も可能

jobs:
  sync:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: yarn install
      - run: yarn calendar:sync
      - uses: stefanzweifel/git-auto-commit-action@v4
        with:
          commit_message: 'Auto sync calendar data'
```

## トラブルシューティング

### エラー：「認証に失敗しました」

- サービスアカウントの秘密鍵が正しく設定されているか確認
- 改行文字（`\n`）が正しく含まれているか確認

### エラー：「カレンダーが見つかりません」

- カレンダーIDが正しいか確認
- サービスアカウントにカレンダーへのアクセス権限が付与されているか確認

### イベントが表示されない

1. `yarn calendar:sync`を実行
2. `cache/notion-data/schedule.json`が更新されているか確認
3. `yarn dev`で開発サーバーを再起動

### 同期されたイベントが重複する

- Notionデータベースに同じイベントが既に存在する可能性
- スクリプトは自動的に重複を検出してスキップします

## API使用量について

- **無料枠**: 1日あたり1,000,000リクエスト
- **実際の使用量**: SSGビルド時のみ、1日数回程度
- **使用率**: 無料枠の0.001%以下
- **課金リスク**: 実質ゼロ（上記の防止設定で完全保護）

## セキュリティに関する注意

- サービスアカウントの秘密鍵は絶対にGitにコミットしないでください
- `.env.local`ファイルは`.gitignore`に含まれていることを確認してください
- 本番環境では環境変数を安全に管理してください