import { DOWNLOAD_IMAGE_EXTENSION, ACCESABLE_IMAGE_PATH } from "../const"
import path from 'path'

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

        // ImageOptimizer対応の画像データ処理
        if (item.properties?.image?.optimizedImage) {
            this.image = item.properties.image.optimizedImage;
        } else if (item.properties?.image?.files?.[0]) {
            const tmpName = item.properties.image.files[0].name;
            const name = tmpName.replace(/ /g, '_');
            this.image = {
                baseName: path.parse(name).name,
                pagePath: 'sponsor',
                alt: item.properties.image.files[0].caption?.[0]?.plain_text || name,
                width: null,
                height: null,
            };
        } else {
            this.image = null;
        }

        this.tag = item.properties["タグ"]?.multi_select?.name || null
        this.active = item.properties["active"]?.checkbox || false
        this.link = item.properties["link"]?.rich_text?.[0]?.text?.content || ''
        
    }
}
