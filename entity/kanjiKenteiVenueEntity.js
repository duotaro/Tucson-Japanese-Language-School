export class KanjiKenteiVenueEntity {
    constructor(item, isJpn) {
        if (!item || !item.properties) {
            console.warn("[KanjiKenteiVenueEntity] Invalid item or item.properties provided.");
            this.id = null;
            this.title = '';
            this.content = '';
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

        // 会場情報（多言語対応）- 改行あり、リンクあり
        if (isJpn) {
            const richTextArray = item.properties["content"]?.rich_text || [];
            this.content = richTextArray.map(block => block.text?.content || '').join('');
        } else {
            const enRichTextArray = item.properties["content_en"]?.rich_text || [];
            const jpRichTextArray = item.properties["content"]?.rich_text || [];
            const enContent = enRichTextArray.map(block => block.text?.content || '').join('');
            const jpContent = jpRichTextArray.map(block => block.text?.content || '').join('');
            this.content = enContent || jpContent || '';
        }
    }
}