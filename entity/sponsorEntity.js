// entity/sponsorEntity.js

export default class SponsorEntity {
    constructor(item, isJpn){
        if(!item || !item.properties){
            console.warn("[SponsorEntity] Invalid item or item.properties provided.");
            this.ordering = null;
            this.title = '';
            this.image = null;
            this.tag = null;
            this.active = false;
            this.link = '';
            return;
        }

        this.ordering = item.properties["ordering"]?.number || null
        this.title = isJpn ? item.properties["title"]?.title?.[0]?.text?.content || '' : item.properties["en"]?.rich_text?.[0]?.text?.content || ''

        // 画像データの処理
        if (item.properties?.image?.files?.[0]) {
            const imageFile = item.properties.image.files[0];
            // ファイル名からベース名を作成（拡張子を除去し、スペースをアンダースコアに変換）
            const originalName = imageFile.name;
            const baseName = originalName.replace(/\.[^/.]+$/, '').replace(/ /g, '_');

            // ImageOptimizerで使用するための画像データ構造を作成
            this.image = {
                baseName: baseName,
                pagePath: 'sponsor',
                alt: this.title || 'スポンサー画像',
                url: imageFile.file?.url || imageFile.external?.url
            };
        } else {
            console.warn(`[SponsorEntity] No image data found for Sponsor ID: ${item.id}`);
            this.image = null;
        }

        this.tag = item.properties["タグ"]?.multi_select?.name || null
        this.active = item.properties["active"]?.checkbox || false
        this.link = item.properties["link"]?.rich_text?.[0]?.text?.content || ''
        
    }
}
