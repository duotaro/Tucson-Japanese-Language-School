export class KanjiKenteiOverviewEntity {
    constructor(item, isJpn) {
        if (!item || !item.properties) {
            console.warn("[KanjiKenteiOverviewEntity] Invalid item or item.properties provided.");
            this.id = null;
            this.title = '';
            this.content = '';
            this.imageUrl = null;
            this.linkLabel = '';
            this.linkUrl = '';
            this.officialLink = '';
            this.pdfUrl = null;
            this.pdfEnUrl = null;
            this._originalNotionPdfUrl = null;
            this._originalNotionPdfEnUrl = null;
            return;
        }

        this.id = item.id;

        // タイトル（多言語対応）
        if (isJpn) {
            this.title = item.properties["title"]?.title?.[0]?.text?.content || '';
        } else {
            const enTitle = item.properties["en"]?.rich_text?.[0]?.text?.content;
            const jpTitle = item.properties["title"]?.title?.[0]?.text?.content;
            this.title = enTitle || jpTitle || '';
        }

        // 説明文（多言語対応）
        if (isJpn) {
            this.content = item.properties["content"]?.rich_text?.[0]?.text?.content || '';
        } else {
            const enContent = item.properties["content_en"]?.rich_text?.[0]?.text?.content;
            const jpContent = item.properties["content"]?.rich_text?.[0]?.text?.content;
            this.content = enContent || jpContent || '';
        }

        // 申し込みリンクラベル（多言語対応）
        if (isJpn) {
            this.linkLabel = item.properties["link_label"]?.rich_text?.[0]?.text?.content || '';
        } else {
            const enLinkLabel = item.properties["link_label_en"]?.rich_text?.[0]?.text?.content;
            const jpLinkLabel = item.properties["link_label"]?.rich_text?.[0]?.text?.content;
            this.linkLabel = enLinkLabel || jpLinkLabel || '';
        }

        // 申し込みリンクURL
        this.linkUrl = item.properties["link_url"]?.url || '';

        // 漢検公式サイトURL
        this.officialLink = item.properties["official_link"]?.url || '';

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

        // PDF URLの処理（日本語版）
        if (item.properties["pdf"]?.files?.[0]) {
            const notionPdfUrl = item.properties["pdf"].files[0].file?.url || item.properties["pdf"].files[0].external?.url;
            this.pdfUrl = notionPdfUrl; // 一時的にNotionのURLを保持
            this._originalNotionPdfUrl = notionPdfUrl;
        } else {
            this.pdfUrl = null;
            this._originalNotionPdfUrl = null;
        }

        // PDF URLの処理（英語版）
        if (item.properties["pdf_en"]?.files?.[0]) {
            const notionPdfEnUrl = item.properties["pdf_en"].files[0].file?.url || item.properties["pdf_en"].files[0].external?.url;
            this.pdfEnUrl = notionPdfEnUrl; // 一時的にNotionのURLを保持
            this._originalNotionPdfEnUrl = notionPdfEnUrl;
        } else {
            this.pdfEnUrl = null;
            this._originalNotionPdfEnUrl = null;
        }
    }
}