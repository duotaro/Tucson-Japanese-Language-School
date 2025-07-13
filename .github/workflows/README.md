# 🚀 GitHub Actions CI/CD システム

このディレクトリには、Notion キャッシュシステムと統合されたCI/CDワークフローが含まれています。

## 📁 ワークフローファイル

### 1. `deploy.yml` - メインデプロイワークフロー
- **トリガー**: `main`, `develop` ブランチへのpush、PRマージ、手動実行
- **機能**:
  - Notion APIキャッシュの自動更新
  - Next.jsビルドの実行  
  - 静的サイト生成（Static Export）
  - Firebase Hostingへのデプロイ（設定後）

### 2. `cache-scheduler.yml` - 定期キャッシュ更新
- **トリガー**: 定期実行スケジュール、手動実行
- **機能**:
  - 頻度別自動キャッシュ更新（frequent/moderate/rare）
  - 更新結果の自動コミット・プッシュ
  - 実行結果のサマリーレポート

## ⚙️ 必要な環境変数設定

GitHub リポジトリの Settings > Secrets and variables > Actions で以下のシークレットを設定してください：

### 🔐 必須シークレット

```bash
# Notion API関連
NOTION_TOKEN=secret_XXXXXXXXXXXXXXXXX
NEXT_PUBLIC_NOTION_DATABASE_ID=your_database_id
NEXT_PUBLIC_NOTION_NEWS_DATABASE_ID=your_news_database_id

# Firebase関連（デプロイに必要）
FIREBASE_TOKEN=your_firebase_token
```

### 📋 シークレット設定手順

1. GitHub リポジトリページに移動
2. **Settings** タブをクリック
3. サイドバーの **Secrets and variables** > **Actions** をクリック
4. **New repository secret** をクリック
5. シークレット名と値を入力して保存

## 🕒 定期実行スケジュール

| 頻度 | 実行時刻 (JST) | 対象データベース | 説明 |
|------|----------------|------------------|------|
| **Frequent** | 毎日 9:00 | news, events, announcements | 高頻度更新データ |
| **Moderate** | 毎週月曜 10:00 | staff, classes, schedule など | 中頻度更新データ |
| **Rare** | 毎月1日 11:00 | about, mission, governance など | 低頻度更新データ |

## 🎯 手動実行

### デプロイワークフロー
1. GitHub リポジトリの **Actions** タブに移動
2. **Deploy with Cache System** をクリック
3. **Run workflow** > キャッシュ戦略を選択 > **Run workflow**

### キャッシュ更新ワークフロー
1. GitHub リポジトリの **Actions** タブに移動
2. **Scheduled Cache Updates** をクリック
3. **Run workflow** > 更新頻度を選択 > **Run workflow**

## 🏗️ ビルド戦略

### ブランチ別動作
- **main**: 本番デプロイ（full cache update）
- **develop**: 開発デプロイ（moderate cache update）
- **feature/***: ビルドテスト（frequent cache update）

### キャッシュ戦略
- **full**: 全30データベースを更新（初回・本番デプロイ時）
- **moderate**: 中頻度データベースを更新（開発時）
- **frequent**: 高頻度データベースのみ更新（日常更新）

## 📊 モニタリング

### 実行結果の確認
1. **Actions** タブで実行状況を確認
2. 各ワークフロー実行の **Summary** で詳細レポートを確認
3. キャッシュ更新の場合、自動コミットログでファイル変更を確認

### ログの見方
- ✅ 成功: 緑色チェックマーク
- ❌ 失敗: 赤色X マーク  
- ⏳ 実行中: 黄色円マーク

## 🚨 トラブルシューティング

### よくある問題

#### 1. Notion API認証エラー
```
Error: API token is invalid
```
**解決方法**: `NOTION_TOKEN` シークレットが正しく設定されているか確認

#### 2. データベースID未設定
```
Error: Database ID not found
```
**解決方法**: `NEXT_PUBLIC_NOTION_DATABASE_ID` などのDBIDシークレットを確認

#### 3. ビルドメモリエラー
```
Error: JavaScript heap out of memory
```
**解決方法**: キャッシュが正常に動作していることを確認（APIコール数削減効果）

#### 4. Firebase デプロイエラー
```
Error: Firebase deployment failed
```
**解決方法**: 
- `FIREBASE_TOKEN` の設定確認
- `firebase.json` の設定確認
- Firebaseプロジェクト権限の確認

### デバッグ方法

1. **ローカルでのテスト**:
   ```bash
   # キャッシュ生成
   yarn cache:mock
   
   # ビルドテスト
   yarn build
   
   # デプロイテスト
   yarn deploy
   ```

2. **GitHub Actions でのデバッグ**:
   - ワークフロー実行ログを詳細確認
   - `ACTIONS_STEP_DEBUG=true` シークレット設定でデバッグモード有効化

## 🔄 アップデート手順

### ワークフローファイルの更新
1. `.github/workflows/` 内のYAMLファイルを編集
2. 変更をコミット・プッシュ
3. Actions タブで新しいワークフローを確認

### 依存関係の更新
```bash
# パッケージ更新
yarn upgrade

# セキュリティアップデート
yarn audit --fix
```

## 📈 パフォーマンス効果

### 期待される改善
- **ビルド時間**: 5-10分 → 1-2分（70-80%短縮）
- **API呼び出し**: 81回 → 0-30回（頻度による）
- **デプロイ頻度**: キャッシュにより高頻度デプロイ可能

### 監視指標
- ワークフロー実行時間
- キャッシュヒット率
- ビルド成功率
- デプロイ頻度

## 🔮 将来の改善案

- [ ] キャッシュ監視アラート追加
- [ ] パフォーマンス統計の可視化
- [ ] 自動ロールバック機能
- [ ] ブランチ保護ルールとの統合
- [ ] Slack通知の追加

---

💡 **ヒント**: CI/CDシステムの効果を最大化するため、定期的にワークフロー実行ログを確認し、必要に応じて設定を調整してください。