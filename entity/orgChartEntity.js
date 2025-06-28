import { DOWNLOAD_IMAGE_EXTENSION, ACCESABLE_IMAGE_PATH } from "../const"
import path from 'path'

export default class OrganisationFlowChartEntity {
    constructor(item, isJpn){
        if(!item || !item.properties){
            console.warn("[OrganisationFlowChartEntity] Invalid item or item.properties provided.");
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

        // 従来の画像データ処理（言語別画像対応）
        const imageProperty = isJpn ? 'image' : 'image_en'
        const fallbackProperty = 'image' // 英語画像がない場合のフォールバック
        
        if (item.properties?.[imageProperty]?.files?.[0]) {
            const tmpName = item.properties[imageProperty].files[0].name;
            const fileName = tmpName.replace(/ /g, '_');
            this.image = {
                baseName: path.parse(fileName).name,
                pagePath: 'org_chart',
                alt: item.properties[imageProperty].files[0].caption?.[0]?.plain_text || fileName,
                width: null,
                height: null,
            };
        } else if (!isJpn && item.properties?.[fallbackProperty]?.files?.[0]) {
            // 英語画像がない場合、日本語画像をフォールバックとして使用
            const tmpName = item.properties[fallbackProperty].files[0].name;
            const fileName = tmpName.replace(/ /g, '_');
            this.image = {
                baseName: path.parse(fileName).name,
                pagePath: 'org_chart',
                alt: item.properties[fallbackProperty].files[0].caption?.[0]?.plain_text || fileName,
                width: null,
                height: null,
            };
        } else {
            this.image = null;
        }
    }
}
