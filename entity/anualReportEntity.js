import { DOWNLOAD_IMAGE_EXTENSION, ACCESABLE_IMAGE_PATH, ACCESABLE_PDF_PATH } from "../const"


export default class AnualReportEntity {
    constructor(item, isJpn, localYear){
        if(localYear){
            this.year = localYear            
            this.pdf = isJpn ? `/pdf/anual_report/${localYear}.pdf` : `/pdf/anual_report/${localYear}_en.pdf`
        } else {
            // null安全性チェック
            if (!item?.properties) {
                console.warn("[AnualReportEntity] Invalid item or properties:", item);
                this.year = "Unknown";
                this.pdf = null;
                return;
            }

            // 年度の取得
            this.year = item.properties["year"]?.title?.[0]?.text?.content || "Unknown";
            
            // PDFファイルの取得（null安全性付き）
            const pdfFiles = item.properties["pdf"]?.files;
            const pdfEnFiles = item.properties["pdf_en"]?.files;
            
            if (pdfFiles?.[0]?.name && pdfEnFiles?.[0]?.name) {
                const tmpPdfName = pdfFiles[0].name;
                const pdfName = tmpPdfName.replace(/ /g, '_');
                const tmpPdfEnName = pdfEnFiles[0].name;
                const pdfEnName = tmpPdfEnName.replace(/ /g, '_');
                this.pdf = isJpn ? `/${ACCESABLE_PDF_PATH}/reports/${pdfName}` : `/${ACCESABLE_PDF_PATH}/reports/${pdfEnName}`;
            } else {
                console.warn("[AnualReportEntity] Missing PDF files for year:", this.year);
                this.pdf = null;
            }
        }
        this.title = isJpn ? `${this.year}年度年間報告` : `${this.year} Anual Report`
    }
}

export const createPastReports = (isJpn) => {
    let list = []
    const year2016 = new AnualReportEntity(null, isJpn, 2016)
    const year2017 = new AnualReportEntity(null, isJpn, 2017)
    const year2018 = new AnualReportEntity(null, isJpn, 2018)
    const year2019 = new AnualReportEntity(null, isJpn, 2019)
    const year2020 = new AnualReportEntity(null, isJpn, 2020)
    const year2021 = new AnualReportEntity(null, isJpn, 2021)
    const year2022 = new AnualReportEntity(null, isJpn, 2022)
    list.push(year2016)
    list.push(year2017)
    list.push(year2018)
    list.push(year2019)
    list.push(year2020)
    list.push(year2021)
    list.push(year2022)

    return list
}
