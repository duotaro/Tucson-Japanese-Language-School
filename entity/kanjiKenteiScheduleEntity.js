import { formatDateForCalander } from "../utils/dateUtils"

export class KanjiKenteiScheduleEntity {
    constructor(item, isJpn) {
        if (!item || !item.properties) {
            console.warn("[KanjiKenteiScheduleEntity] Invalid item or item.properties provided.");
            this.id = null;
            this.title = '';
            this.schoolYear = null;
            this.examDate = null;
            this.formattedExamDate = null;
            return;
        }

        this.id = item.id;

        // タイトル（多言語対応）
        if (isJpn) {
            this.title = item.properties["title"]?.title?.[0]?.text?.content || '';
        } else {
            const enTitle = item.properties["en"]?.rich_text?.[0]?.text?.content;
            const jpTitle = item.properties["title"]?.title?.[0]?.text?.content;
            this.title = enTitle || jpTitle || '';
        }

        // 実施年度
        this.schoolYear = item.properties["school_year"]?.number || null;

        // 実施日（アリゾナ・フェニックスのタイムゾーンで表示）
        this.examDate = item.properties["exam_date"]?.date?.start || null;

        // 日付をフォーマット（アリゾナ時間で表示）
        if (this.examDate) {
            this.formattedExamDate = formatDateForCalander(this.examDate, isJpn);
        } else {
            this.formattedExamDate = null;
        }
    }
}