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

        // ★★★ 画像データの処理を修正 ★★★
        // pages/index.js の fetchData で item.properties.image に optimizedImage が追加されていることを期待
        if (item.properties?.image?.optimizedImage) { // ★ オプショナルチェーニングで安全にアクセス
            this.image = item.properties.image.optimizedImage;
            // this.image は { baseName, pagePath, alt, width, height } のオブジェクトになる
        } else {
            // optimizedImage が見つからない場合のフォールバック（デバッグ用メッセージ）
            console.warn(`[OpportunityEntity] Optimized image data not found for item.id: ${item.id}.
                          Ensure 'pages/index.js/fetchData' correctly adds 'optimizedImage'.`);
            // 必要であれば、元のNotion画像URLなどをフォールバックとして設定
            // const tmpName = item.properties.image?.files?.[0]?.name?.replace(/ /g, '_');
            // this.image = tmpName ? `/${ACCESABLE_IMAGE_PATH}/opportunity/${tmpName}${DOWNLOAD_IMAGE_EXTENSION}` : null;
            this.image = null; // 画像がない場合はnull
        }
        // ★★★ 修正ここまで ★★★

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