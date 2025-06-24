import { ACCESABLE_IMAGE_PATH, DOWNLOAD_IMAGE_EXTENSION } from "../const"
import path from 'path'

export class DirectorsEntity {
    constructor(item, isJpn){
        if(!item || !item.properties){
            console.warn("[DirectorsEntity] Invalid item or item.properties provided.");
            this.name = '';
            this.positions = null;
            this.image = null;
            return;
        }

        this.name = isJpn ? item.properties["name"]?.title?.[0]?.text?.content || '' : item.properties["en"]?.rich_text?.[0]?.text?.content || ''
        this.positions = null
        if(isJpn){
            if(item.properties["position"]?.multi_select?.[0]){
                this.positions = item.properties["position"].multi_select
            }
        } else {
            if(item.properties["position_en"]?.multi_select?.[0]){
                this.positions = item.properties["position_en"].multi_select
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
                pagePath: 'director',
                alt: item.properties.image.files[0].caption?.[0]?.plain_text || fileName,
                width: null,
                height: null,
            };
        } else {
            this.image = null;
        }
    }
}
