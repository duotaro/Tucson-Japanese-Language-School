export class KanjiKenteiVenueImagesEntity {
    constructor(item, isJpn) {
        if (!item || !item.properties) {
            console.warn("[KanjiKenteiVenueImagesEntity] Invalid item or item.properties provided.");
            this.id = null;
            this.ordering = null;
            this.title = '';
            this.imageUrl = null;
            this._originalNotionImageUrl = null;
            return;
        }

        this.id = item.id;

        // 表示順序
        this.ordering = item.properties["ordering"]?.number || 0;

        // タイトル（多言語対応）
        if (isJpn) {
            this.title = item.properties["title"]?.rich_text?.[0]?.text?.content || '';
        } else {
            const enTitle = item.properties["en"]?.rich_text?.[0]?.text?.content;
            const jpTitle = item.properties["title"]?.rich_text?.[0]?.text?.content;
            this.title = enTitle || jpTitle || '';
        }

        // 画像URLの処理（ダウンロード済みの画像パスを格納）
        // 注意：実際のダウンロード処理は別途実装が必要
        if (item.properties["image"]?.files?.[0]) {
            // Notionの画像URLを取得（後でダウンロード処理を行う）
            const notionImageUrl = item.properties["image"].files[0].file?.url || item.properties["image"].files[0].external?.url;
            // ダウンロード後のローカルパスを設定する（実装時に調整）
            this.imageUrl = notionImageUrl; // 一時的にNotionのURLを保持
            this._originalNotionImageUrl = notionImageUrl; // 元のNotionURLも保持
        } else {
            this.imageUrl = null;
            this._originalNotionImageUrl = null;
        }
    }
}