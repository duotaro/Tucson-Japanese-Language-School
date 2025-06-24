import { DOWNLOAD_IMAGE_EXTENSION, ACCESABLE_IMAGE_PATH } from "../const"
import path from 'path'

export default class OpportunityDetailEntity {
    constructor(item, isJpn){
        if(!item || !item.properties){
            console.warn("[OpportunityDetailEntity] Invalid item or item.properties provided.");
            this.ordering = null;
            this.title = '';
            this.text = null;
            this.tag = null;
            this.image = null;
            return;
        }

        this.ordering = item.properties["ordering"]?.number || null
        this.title = isJpn ? item.properties["title"]?.title?.[0]?.text?.content || '' : item.properties["en"]?.rich_text?.[0]?.text?.content || ''
        
        this.text = null
        if(isJpn){
            if(item.properties["text"]?.rich_text?.[0]){
                this.text = item.properties["text"].rich_text
            }
        } else {
            if(item.properties["text_en"]?.rich_text?.[0]){
                this.text = item.properties["text_en"].rich_text
            }
        }

        this.tag = item.properties["tag"]?.multi_select?.[0]?.name || null

        // ImageOptimizer対応の画像データ処理（もし画像がある場合）
        if (item.properties?.image?.optimizedImage) {
            this.image = item.properties.image.optimizedImage;
        } else if (item.properties?.image?.files?.[0]) {
            const tmpName = item.properties.image.files[0].name;
            const fileName = tmpName.replace(/ /g, '_');
            this.image = {
                baseName: path.parse(fileName).name,
                pagePath: 'opportunity',
                alt: item.properties.image.files[0].caption?.[0]?.plain_text || fileName,
                width: null,
                height: null,
            };
        } else {
            this.image = null;
        }
    }
}
