import { DOWNLOAD_IMAGE_EXTENSION, ACCESABLE_IMAGE_PATH, ACCESABLE_PDF_PATH } from "../const"
import path from 'path'

export default class PolicyEntity {
    constructor(item, isJpn){
        if(!item || !item.properties){
            console.warn("[PolicyEntity] Invalid item or item.properties provided.");
            this.title = '';
            this.image = null;
            this.pdf = null;
            return;
        }

        this.title = isJpn ? item.properties["title"]?.title?.[0]?.text?.content || '' : item.properties["en"]?.rich_text?.[0]?.text?.content || ''
        
        // ImageOptimizer対応の画像データ処理
        if (item.properties?.image?.optimizedImage) {
            this.image = item.properties.image.optimizedImage;
        } else if (item.properties?.image?.files?.[0]) {
            const tmpName = item.properties.image.files[0].name;
            const name = tmpName.replace(/ /g, '_');
            this.image = {
                baseName: path.parse(name).name,
                pagePath: 'policy',
                alt: item.properties.image.files[0].caption?.[0]?.plain_text || name,
                width: null,
                height: null,
            };
        } else {
            this.image = null;
        }

        // PDFファイルの処理
        if (item.properties?.pdf?.files?.[0]) {
            const tmpPdfName = item.properties.pdf.files[0].name;
            const pdfName = tmpPdfName.replace(/ /g, '_');
            this.pdf = `/${ACCESABLE_PDF_PATH}/policy/${pdfName}`;
        } else {
            this.pdf = null;
        }
    }
}
