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
        console.log(properties);

        this.title = isJpn ? properties["title"]?.title?.[0]?.text?.content || '' : properties["en"]?.rich_text?.[0]?.text?.content || ''
        
        // ImageOptimizer対応の画像データ処理
        console.log("[PolicyEntity] properties.image:", properties?.image);
        if (properties?.image?.optimizedImage) {
            console.log("[PolicyEntity] Using optimizedImage:", properties.image.optimizedImage);
            this.image = properties.image.optimizedImage;
        } else if (properties?.image?.files?.[0]) {
            console.log("[PolicyEntity] Using files[0]:", properties.image.files[0]);
            const tmpName = properties.image.files[0].name;
            const name = tmpName.replace(/ /g, '_');
            this.image = {
                baseName: path.parse(name).name,
                pagePath: 'policy',
                alt: properties.image.files[0].caption?.[0]?.plain_text || name,
                width: null,
                height: null,
            };
            console.log("[PolicyEntity] Created image object:", this.image);
        } else {
            console.log("[PolicyEntity] No image found in properties");
            this.image = null;
        }
        console.log("[PolicyEntity] Final image:", this.image);

        console.log("============")
        console.log(properties)
        console.log("============")

        // PDFファイルの処理
        console.log("[PolicyEntity] properties.pdf:", properties?.pdf);
        if (isJpn && properties?.pdf?.files?.[0]) {
            const tmpPdfName = properties.pdf.files[0].name;
            const pdfName = tmpPdfName.replace(/ /g, '_');
            console.log("[PolicyEntity] tmpPdfName:", tmpPdfName);
            console.log("[PolicyEntity] pdfName:", pdfName);
            this.pdf = `/${ACCESABLE_PDF_PATH}/policy/${pdfName}`;
            console.log("[PolicyEntity] Final PDF path:", this.pdf);
        } else if (!isJpn && properties?.['pdf-en']?.files?.[0]) {
            const tmpPdfName = properties?.['pdf-en']?.files?.[0].name;
            const pdfName = tmpPdfName.replace(/ /g, '_');
            console.log("[PolicyEntity] tmpPdfName:", tmpPdfName);
            console.log("[PolicyEntity] pdfName:", pdfName);
            this.pdf = `/${ACCESABLE_PDF_PATH}/policy/${pdfName}`;
            console.log("[PolicyEntity] Final PDF path:", this.pdf);
        } else {
            console.log("[PolicyEntity] No PDF found in properties");
            this.pdf = null;
        }
    }
}
