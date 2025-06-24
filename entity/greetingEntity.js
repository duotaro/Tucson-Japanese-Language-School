import { ACCESABLE_IMAGE_PATH, DOWNLOAD_IMAGE_EXTENSION } from "../const"
import path from 'path'

export class GreetingEntity {
    constructor(item, isJpn){
        if(!item || !item.properties){
            console.warn("[GreetingEntity] Invalid item or item.properties provided.");
            this.title = '';
            this.text = null;
            this.image = null;
            return;
        }

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

        // ImageOptimizer対応の画像データ処理
        if (item.properties?.image?.optimizedImage) {
            this.image = item.properties.image.optimizedImage;
        } else if (item.properties?.image?.files?.[0]) {
            const tmpName = item.properties.image.files[0].name;
            const fileName = tmpName.replace(/ /g, '_');
            this.image = {
                baseName: path.parse(fileName).name,
                pagePath: 'greeting',
                alt: item.properties.image.files[0].caption?.[0]?.plain_text || fileName,
                width: null,
                height: null,
            };
        } else {
            this.image = null;
        }
    }
}
