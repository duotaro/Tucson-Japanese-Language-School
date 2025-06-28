import { ACCESABLE_IMAGE_PATH, DOWNLOAD_IMAGE_EXTENSION } from "../const"
import path from 'path'

export class PhilosophyEntity {
    constructor(item, isJpn){
        // itemがpropertiesオブジェクト自体か、item.propertiesを持つオブジェクトかを判定
        const properties = item?.properties ? item.properties : item;
        
        if(!properties){
            console.warn("[PhilosophyEntity] Invalid properties provided.");
            this.title = '';
            this.text = null;
            this.image = null;
            return;
        }
        
        this.title = isJpn ? properties["title"]?.title?.[0]?.text?.content || '' : properties["en"]?.rich_text?.[0]?.text?.content || ''
        this.text = null
        if(isJpn){
            if(properties["text"]?.rich_text?.[0]){
                this.text = properties["text"].rich_text
            }
        } else {
            if(properties["text_en"]?.rich_text?.[0]){
                this.text = properties["text_en"].rich_text
            }
        }

        // ImageOptimizer対応の画像データ処理
        if (properties?.image?.optimizedImage) {
            this.image = properties.image.optimizedImage;
        } else if (properties?.image?.files?.[0]) {
            const tmpName = properties.image.files[0].name;
            const fileName = tmpName.replace(/ /g, '_');
            this.image = {
                baseName: path.parse(fileName).name,
                pagePath: 'policy',
                alt: properties.image.files[0].caption?.[0]?.plain_text || fileName,
                width: null,
                height: null,
            };
        } else {
            this.image = null;
        }
    }
}
