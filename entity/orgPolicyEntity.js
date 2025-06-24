import { DOWNLOAD_IMAGE_EXTENSION, ACCESABLE_IMAGE_PATH, ACCESABLE_PDF_PATH } from "../const"
import path from 'path'

export default class OrgPolicyEntity {
    constructor(item, isJpn){
        if(!item || !item.properties){
            console.warn("[OrgPolicyEntity] Invalid item or item.properties provided.");
            this.title = '';
            this.pdf = null;
            this.image = null;
            return;
        }

        this.title = isJpn ? item.properties["title"]?.title?.[0]?.text?.content || '' : item.properties["en"]?.rich_text?.[0]?.text?.content || ''
        
        // PDFファイルの処理
        if (item.properties?.pdf?.files?.[0]) {
            const tmpPdfName = item.properties.pdf.files[0].name;
            const pdfName = tmpPdfName.replace(/ /g, '_');
            this.pdf = `/${ACCESABLE_PDF_PATH}/org_policy/${pdfName}`;
        } else {
            this.pdf = null;
        }

        // ImageOptimizer対応の画像データ処理（もし画像がある場合）
        if (item.properties?.image?.optimizedImage) {
            this.image = item.properties.image.optimizedImage;
        } else if (item.properties?.image?.files?.[0]) {
            const tmpName = item.properties.image.files[0].name;
            const fileName = tmpName.replace(/ /g, '_');
            this.image = {
                baseName: path.parse(fileName).name,
                pagePath: 'org_policy',
                alt: item.properties.image.files[0].caption?.[0]?.plain_text || fileName,
                width: null,
                height: null,
            };
        } else {
            this.image = null;
        }
    }
}
