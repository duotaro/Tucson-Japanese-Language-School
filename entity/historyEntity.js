import { ACCESABLE_IMAGE_PATH, DOWNLOAD_IMAGE_EXTENSION } from "../const"
import path from 'path'

export class HistoryEntity {
    constructor(item, isJpn){
        if(!item || !item.properties){
            console.warn("[HistoryEntity] Invalid item or item.properties provided.");
            this.title = '';
            this.text = null;
            this.image1 = null;
            this.image2 = null;
            this.image3 = null;
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

        // ImageOptimizer対応の画像データ処理 - image1
        if (item.properties?.image1?.optimizedImage) {
            this.image1 = item.properties.image1.optimizedImage;
        } else if (item.properties?.image1?.files?.[0]) {
            const tmpName1 = item.properties.image1.files[0].name;
            const fileName1 = tmpName1.replace(/ /g, '_');
            this.image1 = {
                baseName: path.parse(fileName1).name,
                pagePath: 'history',
                alt: item.properties.image1.files[0].caption?.[0]?.plain_text || fileName1,
                width: null,
                height: null,
            };
        } else {
            this.image1 = null;
        }

        // ImageOptimizer対応の画像データ処理 - image2
        if (item.properties?.image2?.optimizedImage) {
            this.image2 = item.properties.image2.optimizedImage;
        } else if (item.properties?.image2?.files?.[0]) {
            const tmpName2 = item.properties.image2.files[0].name;
            const fileName2 = tmpName2.replace(/ /g, '_');
            this.image2 = {
                baseName: path.parse(fileName2).name,
                pagePath: 'history',
                alt: item.properties.image2.files[0].caption?.[0]?.plain_text || fileName2,
                width: null,
                height: null,
            };
        } else {
            this.image2 = null;
        }

        // ImageOptimizer対応の画像データ処理 - image3
        if (item.properties?.image3?.optimizedImage) {
            this.image3 = item.properties.image3.optimizedImage;
        } else if (item.properties?.image3?.files?.[0]) {
            const tmpName3 = item.properties.image3.files[0].name;
            const fileName3 = tmpName3.replace(/ /g, '_');
            this.image3 = {
                baseName: path.parse(fileName3).name,
                pagePath: 'history',
                alt: item.properties.image3.files[0].caption?.[0]?.plain_text || fileName3,
                width: null,
                height: null,
            };
        } else {
            this.image3 = null;
        }
    }
}
