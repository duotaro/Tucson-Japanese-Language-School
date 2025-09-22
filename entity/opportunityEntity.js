// entity/opportunityEntity.js

export default class OpportunityEntity { // export default class に変更
    constructor(item, isJpn){
        if(!item || !item.properties){ // ★ item または properties がない場合をチェック
            console.warn("[OpportunityEntity] Invalid item or item.properties provided.");
            this.title = '';
            this.text = null;
            this.image = null;
            return;
        }

        // 画像データの処理
        if (item.properties?.image?.files?.[0]) {
            const imageFile = item.properties.image.files[0];
            // ファイル名からベース名を作成（拡張子を除去し、スペースをアンダースコアに変換）
            const originalName = imageFile.name;
            const baseName = originalName.replace(/\.[^/.]+$/, '').replace(/ /g, '_');

            // ImageOptimizerで使用するための画像データ構造を作成
            this.image = {
                baseName: baseName,
                pagePath: 'opportunity',
                alt: this.title || 'Opportunity画像',
                url: imageFile.file?.url || imageFile.external?.url
            };

            console.log('[OpportunityEntity] 画像データ:', {
                originalName: originalName,
                baseName: baseName,
                expectedPath: `/image/download/opportunity/${baseName}.png`
            });
        } else {
            console.warn(`[OpportunityEntity] No image data found for Opportunity ID: ${item.id}`);
            this.image = null;
        }

        // titleの処理を安全に
        this.title = isJpn 
            ? item.properties?.["title"]?.title?.[0]?.plain_text || '' // ★ オプショナルチェーニング
            : item.properties?.["en"]?.rich_text?.[0]?.plain_text || ''; // ★ オプショナルチェーニング
        
        // textの処理を安全に
        this.text = null;
        if(isJpn){
            this.text = item.properties?.["text"]?.rich_text?.[0]?.plain_text || null; // ★ オプショナルチェーニング
        } else {
            this.text = item.properties?.["text_en"]?.rich_text?.[0]?.plain_text || null; // ★ オプショナルチェーニング
        }

        // JSON シリアライズ可能にするための toJSON メソッドを追加
        this.toJSON = () => {
            return {
                title: this.title,
                text: this.text,
                image: this.image,
                // 必要に応じて、OpportunityEntityが持つ他のプロパティもここに追加
            };
        };
    }
}