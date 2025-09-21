// entity/nihongoCafeEntity.js
import { ACCESABLE_PDF_PATH } from "../const"

export class NihongoCafeOverviewEntity {
    constructor(item, isJpn) {
        if(!item || !item.properties){
            console.warn("[NihongoCafeOverviewEntity] Invalid item or item.properties provided.");
            this.title = '';
            this.description = '';
            this.target = '';
            return;
        }

        // タイトルの処理
        this.title = isJpn
            ? item.properties?.["title"]?.title?.[0]?.plain_text 
            : item.properties?.["en"]?.rich_text?.[0]?.plain_text;

        // 説明文の処理
        this.description = isJpn
            ? item.properties?.["content"]?.rich_text?.[0]?.plain_text 
            : item.properties?.["content_en"]?.rich_text?.[0]?.plain_text;


        // JSON シリアライズ可能にするための toJSON メソッドを追加
        this.toJSON = () => {
            return {
                title: this.title,
                description: this.description,
                features: this.features,
                target: this.target
            };
        };
    }
}

export class NihongoCafePriceEntity {
    constructor(item, isJpn) {
        if(!item || !item.properties){
            console.warn("[NihongoCafePriceEntity] Invalid item or item.properties provided.");
            this.planName = '';
            this.price = '';
            this.pricePerSession = '';
            this.isSpecial = false;
            this.order = 0;
            return;
        }

        // プラン名の処理
        this.planName = isJpn
            ? item.properties?.["title"]?.title?.[0]?.plain_text 
            : item.properties?.["en"]?.rich_text?.[0]?.plain_text ;

        // 価格の処理
        this.price = isJpn ? item.properties?.["price"]?.rich_text?.[0]?.plain_text : item.properties?.["price_en"]?.rich_text?.[0]?.plain_text

        // 表示順
        this.order = item.properties?.["order"]?.number || 0;

        // JSON シリアライズ可能にするための toJSON メソッドを追加
        this.toJSON = () => {
            return {
                planName: this.planName,
                price: this.price,
                pricePerSession: this.pricePerSession,
                isSpecial: this.isSpecial,
                order: this.order
            };
        };
    }
}

export class NihongoCafeDetailsEntity {
    constructor(item, isJpn) {
        if(!item || !item.properties){
            console.warn("[NihongoCafeDetailsEntity] Invalid item or item.properties provided.");
            this.email = '';
            this.location = '';
            this.schedule = '';
            this.duration = '';
            this.registrationUrl = '';
            this.termsUrl = '';
            this.note = '';
            return;
        }

        // メールアドレスの処理
        let email = item.properties?.["contact_coordinator"]?.rich_text?.[0]?.plain_text;
        this.email = email

        // 場所の処理
        this.location = isJpn
            ? item.properties?.["location"]?.rich_text?.[0]?.plain_text
            : item.properties?.["location_en"]?.rich_text?.[0]?.plain_text

        // スケジュールの処理
        this.schedule = isJpn
            ? item.properties?.["day_time"]?.rich_text?.[0]?.plain_text || ''
            : item.properties?.["day_time_en"]?.rich_text?.[0]?.plain_text || item.properties?.["schedule_en"]?.rich_text?.[0]?.plain_text || '';

        // 時間の処理
        this.duration = isJpn
            ? item.properties?.["duration"]?.rich_text?.[0]?.plain_text || ''
            : item.properties?.["en"]?.rich_text?.[0]?.plain_text || item.properties?.["duration_en"]?.rich_text?.[0]?.plain_text || '';

        // 登録URLの処理
        this.registrationUrl = item.properties?.["form_url"]?.url || '';

        // 利用規約PDFの処理
        const policyPdfProperty = isJpn ? "policy_pdf" : "policy_pdf_en";
        if (item.properties?.[policyPdfProperty]?.files?.[0]) {
            const tmpPdfName = item.properties[policyPdfProperty].files[0].name;
            const pdfName = tmpPdfName.replace(/ /g, '_');
            this.termsUrl = `/${ACCESABLE_PDF_PATH}/nihongo_cafe/${pdfName}`;
        } else {
            this.termsUrl = null;
        }

        // カレンダーPDFの処理（nullable）
        const calendarPdfProperty = isJpn ? "calender_pdf" : "calender_pdf_en";
        if (item.properties?.[calendarPdfProperty]?.files?.[0]) {
            const tmpPdfName = item.properties[calendarPdfProperty].files[0].name;
            const pdfName = tmpPdfName.replace(/ /g, '_');
            this.calendarPdf = `/${ACCESABLE_PDF_PATH}/nihongo_cafe/${pdfName}`;
        } else {
            this.calendarPdf = null;
        }

        // 備考の処理
        this.note = isJpn
            ? item.properties?.["note"]?.rich_text?.[0]?.plain_text || ''
            : item.properties?.["en"]?.rich_text?.[0]?.plain_text || item.properties?.["note_en"]?.rich_text?.[0]?.plain_text || '';

        // JSON シリアライズ可能にするための toJSON メソッドを追加
        this.toJSON = () => {
            return {
                email: this.email,
                location: this.location,
                schedule: this.schedule,
                duration: this.duration,
                registrationUrl: this.registrationUrl,
                termsUrl: this.termsUrl,
                calendarPdf: this.calendarPdf,
                note: this.note
            };
        };
    }
}

// データ変換関数
export const convertNihongoCafeOverviewFromDatabase = (database, isJpn) => {
    if (!database || !Array.isArray(database)) {
        console.warn("[convertNihongoCafeOverviewFromDatabase] Invalid database provided.");
        return null;
    }

    // 最初のアイテムを取得（概要は1つのレコード）
    if (database.length > 0) {
        return new NihongoCafeOverviewEntity(database[0], isJpn);
    }

    return null;
}

export const convertNihongoCafePriceFromDatabase = (database, isJpn) => {
    if (!database || !Array.isArray(database)) {
        console.warn("[convertNihongoCafePriceFromDatabase] Invalid database provided.");
        return [];
    }

    // 価格情報を配列で返す（複数プラン対応）
    return database
        .map(item => new NihongoCafePriceEntity(item, isJpn))
        .sort((a, b) => a.order - b.order); // 表示順でソート
}

export const convertNihongoCafeDetailsFromDatabase = (database, isJpn) => {
    if (!database || !Array.isArray(database)) {
        console.warn("[convertNihongoCafeDetailsFromDatabase] Invalid database provided.");
        return null;
    }

    // 最初のアイテムを取得（詳細は1つのレコード）
    if (database.length > 0) {
        return new NihongoCafeDetailsEntity(database[0], isJpn);
    }

    return null;
}