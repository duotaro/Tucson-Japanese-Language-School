import { formatDateForCalander } from "../utils/dateUtils"

export class KanjiKenteiDeadlineEntity {
    constructor(item, isJpn) {
        if (!item || !item.properties) {
            console.warn("[KanjiKenteiDeadlineEntity] Invalid item or item.properties provided.");
            this.id = null;
            this.title = '';
            this.date = null;
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

        // 締切日（アリゾナ・フェニックスのタイムゾーンで表示）
        this.date = item.properties["date"]?.date?.start || null;

        // 日付をフォーマット（アリゾナ時間で表示）
        if (this.date) {
            this.formattedExamDate = formatDateForCalander(this.date, isJpn);
        } else {
            this.formattedExamDate = null;
        }
    }
}