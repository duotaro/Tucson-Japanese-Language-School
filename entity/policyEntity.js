import { DOWNLOAD_IMAGE_EXTENSION, ACCESABLE_IMAGE_PATH, ACCESABLE_PDF_PATH } from "../const"
import path from 'path'

export default class PolicyEntity {
    constructor(item, isJpn){
        // itemがpropertiesオブジェクト自体か、item.propertiesを持つオブジェクトかを判定
        const properties = item?.properties ? item.properties : item;
        
        if(!properties){
            console.warn("[PolicyEntity] Invalid properties provided.");
            this.title = '';
            this.image = null;
            this.pdf = null;
            return;
        }

        this.title = isJpn ? properties["title"]?.title?.[0]?.text?.content || '' : properties["en"]?.rich_text?.[0]?.text?.content || ''
        
        // ImageOptimizer対応の画像データ処理
        if (properties?.image?.optimizedImage) {
            this.image = properties.image.optimizedImage;
        } else if (properties?.image?.files?.[0]) {
            const tmpName = properties.image.files[0].name;
            const name = tmpName.replace(/ /g, '_');
            this.image = {
                baseName: path.parse(name).name,
                pagePath: 'policy',
                alt: properties.image.files[0].caption?.[0]?.plain_text || name,
                width: null,
                height: null,
            };
        } else {
            this.image = null;
        }

        console.log("============")
        console.log(properties)
        console.log("============")

        // PDFファイルの処理
        if (properties?.pdf?.files?.[0]) {
            const tmpPdfName = properties.pdf.files[0].name;
            const pdfName = tmpPdfName.replace(/ /g, '_');
            // 実際のディレクトリ名はorg_policyなので修正
            this.pdf = `/${ACCESABLE_PDF_PATH}/org_policy/${pdfName}`;
        } else {
            this.pdf = null;
        }
    }
}
