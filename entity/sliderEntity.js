// entity/sliderEntity.js

// pathモジュールはSliderEntity内では通常不要ですが、
// もし元のファイル名を解析するフォールバックロジックが必要ならインポート
// import path from 'path'; 

// DOWNLOAD_IMAGE_EXTENSION, ACCESABLE_IMAGE_PATH は optimizedImage を使うなら不要
// import { DOWNLOAD_IMAGE_EXTENSION, ACCESABLE_IMAGE_PATH } from "../const" 


export default class SliderEntity {
    // constructor の引数に isJapanese を追加（Notionのラベル言語判断用）
    constructor(item, isJapanese = false){ // isJapanese にデフォルト値を追加
        if(!item || !item.properties){
            // itemまたはそのpropertiesが存在しない場合は処理を中断
            console.warn("[SliderEntity] Invalid item or item.properties provided.");
            // toJSON がエラーにならないよう最低限のプロパティを初期化
            this.id = null;
            this.active = false;
            this.image = null;
            this.label = '';
            this.label_en = '';
            this.ordering = null;
            return;
        }

        this.id = item.id; // NotionアイテムのIDを直接取得

        // activeプロパティを安全に取得
        this.active = item.properties?.["active"]?.checkbox || false;

        if(this.active){ // activeなスライダーのみ処理

            // 画像データの処理
            if (item.properties?.image?.files?.[0]) {
                const imageFile = item.properties.image.files[0];
                // ファイル名からベース名を作成（拡張子を除去し、スペースをアンダースコアに変換）
                const originalName = imageFile.name;
                const baseName = originalName.replace(/\.[^/.]+$/, '').replace(/ /g, '_');

                // ImageOptimizerで使用するための画像データ構造を作成
                this.image = {
                    baseName: baseName,
                    pagePath: 'slider',
                    alt: this.label || 'スライダー画像'
                };
            } else {
                console.warn(`[SliderEntity] No image data found for Slider ID: ${item.id}`);
                this.image = null;
            }

            // orderingプロパティを安全に取得
            this.ordering = item.properties?.["ordering"]?.number || null;

            // ラベルの処理（Notionの構造に合わせて安全にアクセス）
            this.label = item.properties?.["title"]?.title?.[0]?.plain_text || '';
            this.label_en = item.properties?.["en"]?.rich_text?.[0]?.plain_text || '';
            
            // Note: 以前のコードでは `title` と `en` を使っていましたが、
            // `label` と `label_en` というプロパティ名に合わせました。
            // Notionの実際のプロパティ名に合わせて調整してください。
            // 例えば、日本語が `label` で英語が `label_en` のように。

            // もし言語によって表示ラベルを切り替えるなら、SliderDetail側で isJapanese を使う
            // this.displayLabel = isJapanese ? this.label : this.label_en;
        } else { // active でない場合は画像を null に
            this.image = null;
            this.label = '';
            this.label_en = '';
            this.ordering = null;
        }
    }

}