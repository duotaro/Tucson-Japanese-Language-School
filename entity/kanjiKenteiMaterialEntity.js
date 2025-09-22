export class KanjiKenteiMaterialEntity {
    constructor(item, isJpn) {
        if (!item || !item.properties) {
            console.warn("[KanjiKenteiMaterialEntity] Invalid item or item.properties provided.");
            this.id = null;
            this.ordering = 0;
            this.title = '';
            this.features = [];
            this.imageUrl = null;
            this.linkUrl = '';
            this.isSoldout = false;
            return;
        }

        this.id = item.id;

        // 表示順序
        this.ordering = item.properties["ordering"]?.number || 0;

        // タイトル（多言語対応）
        if (isJpn) {
            this.title = item.properties["title"]?.title?.[0]?.text?.content || '';
        } else {
            const enTitle = item.properties["en"]?.rich_text?.[0]?.text?.content;
            const jpTitle = item.properties["title"]?.title?.[0]?.text?.content;
            this.title = enTitle || jpTitle || '';
        }

        // 特徴（多言語対応）- 改行で分割して配列に
        if (isJpn) {
            const featureText = item.properties["feature"]?.rich_text?.[0]?.text?.content || '';
            this.features = featureText ? featureText.split('\n').filter(f => f.trim()) : [];
        } else {
            const enFeatureText = item.properties["feature_en"]?.rich_text?.[0]?.text?.content;
            const jpFeatureText = item.properties["feature"]?.rich_text?.[0]?.text?.content;
            const featureText = enFeatureText || jpFeatureText || '';
            this.features = featureText ? featureText.split('\n').filter(f => f.trim()) : [];
        }

        // 教材リンクURL
        this.linkUrl = item.properties["link_url"]?.url || '';

        // 完売フラグ
        this.isSoldout = item.properties["is_soldout"]?.checkbox || false;

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