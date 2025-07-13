 # 目的


  現在のNotionキャッシュシステムを改修し、Notion上の一時的な画像URLを永続的
  なローカルファイルとしてプロジェクト内に保存する。これにより、キャッシュ
  の有効期限に関わらず、Webサイト上で画像が常に表示されるようにする。

  # 背景と問題点


   - 現状: キャッシュ生成スクリプト (scripts/notion-cache/fetch-all.js)
     は、Notion APIから取得したデータ（画像URLを含む）をそのままJSONファイル
     に保存している。
   - 問題点: Notionが提供する画像URLは、一時的な署名付きURL（expiring S3
     URLs）であるため、一定時間後にリンク切れとなる。結果として、ビルド後に画
     像が表示されなくなる問題が発生している。

  # タスクの概要

  キャッシュ生成プロセス (scripts/notion-cache/fetch-all.js)
  を変更し、以下の機能を追加する。


   1. Notionデータに含まれる一時的な画像URLを特定する。
   2. そのURLから画像データをダウンロードする。
   3. ダウンロードした画像をプロジェクトの public/image/download/
      ディレクトリ配下に永続的に保存する。
   4. キャッシュとして保存するJSONデータ内の画像URLを、新しく保存した画像のロ
      ーカルパスに書き換える。


  # 実装手順

  Step 1: 画像ダウンロード処理の実装


   - 対象ファイル: scripts/notion-cache/fetch-all.js
   - 対応内容:
       1. 画像ダウンロード関数の作成:
           - Node.jsの標準 fetch APIまたは node-fetch ライブラリを使用して、
             指定されたURLから画像データを取得する非同期関数を実装する。
           - この関数は、取得した画像データをBufferとして返す。
           - ネットワークエラーやHTTPエラーを処理するエラーハンドリングを組み
             込むこと。


       2. メイン処理への組み込み:
           - fetchAllData 関数内で、Notionからデータベースの全アイテムを取得
             した後のループ処理に以下のロジックを追加する。
           - 各アイテムのプロパティを走査し、type: 'files' であり、かつ files
             配列にデータが存在するプロパティを見つける。
           - files 配列内の各ファイルオブジェクト（file.url または
             external.url）から画像の一時URLを取得する。
           - 画像の保存:
               - 保存先ディレクトリ: public/image/download/{dataType}/
                 とする（例: public/image/download/news/）。このディレクトリ
                 が存在しない場合は fs.mkdir で再帰的に作成する。
               - ファイル名: 元のファイル名を基本とするが、URLのパス部分など
                 から一意性を保てる部分を抽出し、サニタイズして使用する。重複
                 を避けるため、NotionのページIDやブロックIDをファイル名のプレ
                 フィックスにすることも検討する
                 ({pageId}-{original_filename}.webp)。
               - 作成したダウンロード関数で画像データを取得し、fs.writeFile
                 または fs.writeFileSync で指定のパスに保存する。
           - キャッシュデータの書き換え:
               - 元のアイテムオブジェクト（キャッシュとして保存されるJSONデー
                 タ）の files
                 配列内にある一時URLの値を、新しいローカルパスに書き換える。
               - ローカルパスは、Webサイトのルートからの絶対パスとする (例:
                 /image/download/news/{pageId}-{original_filename}.webp)。


       3. 非同期処理の管理:
           - 多数の画像を効率的にダウンロードするため、Promise.all または
             Promise.allSettled を使用して、非同期ダウンロード処理を並列で実
             行し、すべて完了するのを待つ。

  Step 2: 既存コンポーネントとの連携確認


   - 対象ファイル: lib/cache-loader.js, components/download/ImageOptimizer.js
   - 対応内容:
       1. `lib/cache-loader.js`:
           - addOptimizedImage 関数が、Step
             1で書き換えた新しいローカルパスを正しく解釈できるか確認する。
           - ImageOptimizer コンポーネントが必要とする baseName や pagePath
             などのプロパティを、ローカルパスから適切に生成できるようにロジッ
             クを調整する。
       2. `components/download/ImageOptimizer.js`:
           - 現在の実装は、複数の拡張子やパスを試すフォールバック機構を持って
             いる。Step 1の対応により、画像パスが確定的に定まるため、このフォ
             ールバックロジックを簡素化できるか検討する。必須の修正ではないが
             、コードの可読性と効率性の観点から推奨される。

  # 期待される成果


   1. yarn cache:fetch-all
      コマンドを実行すると、public/image/download/{dataType}/
      ディレクトリ内にNotion上の画像がダウンロード・保存される。
   2. cache/notion-data/*.json ファイル内の画像URLが、一時的なS3のURLから
      /image/download/... で始まる永続的なローカルパスに置き換えられている。
   3. アプリケーションをビルド・実行した際に、キャッシュの鮮度に関わらず、全て
      の画像がWebサイト上で正しく表示される。


  # 注意事項


   - エラーハンドリング: 特定の画像のダウンロードに失敗しても、全体のキャッシ
     ュ生成プロセスは停止させず、エラーをログに出力して処理を継続すること。
   - 効率性: 大量の画像をダウンロードする際のパフォーマンスに配慮し、非同期処
     理を適切に管理すること。