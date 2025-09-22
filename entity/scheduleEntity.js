import { formatDateForCalander, formatDateForHHmm } from "../utils/dateUtils"

export class SchaduleEntity {
    constructor(item, isJpn){
        if(!item || !item.properties){
            console.warn("[SchaduleEntity] Invalid item or item.properties provided.");
            this.id = null;
            this.dateTime = null;
            this.allDay = true;
            this.start = null;
            this.end = null;
            this.startStr = null;
            this.endStr = null;
            this.startTime = null;
            this.endTime = null;
            this.date = null;
            this.year = null;
            this.month = null;
            this.day = null;
            this.dayName = null;
            this.title = '';
            this.extendedProps = { description: null };
            this.text = null;
            this.link = null;
            this.location = null;
            this.isEvent = false;
            this.backgroundColor = null;
            this.borderColor = null;
            this.editable = false;
            return;
        }

        this.id = item.id
        this.dateTime = item.properties["date"]?.date?.start || null
        this.allDay = true
        const rawStart = item.properties["date"]?.date?.start || null
        const rawEnd = item.properties["date"]?.date?.end || null
        
        this.start = rawStart
        this.end = (rawStart === rawEnd) ? null : rawEnd // 同じ日付の場合はendをnullに
        this.startStr = rawStart
        this.endStr = rawEnd
        
        // 時間表示用のプロパティを追加
        this.startTime = null
        this.endTime = null
        
        // 時間が含まれているかどうかを確認
        if(this.startStr && this.startStr.includes('T')){
            this.allDay = false
            // 時間があるイベントの場合、アリゾナ時間でフォーマット
            this.startTime = formatDateForHHmm(this.startStr, isJpn)
            if(this.endStr){
                this.endTime = formatDateForHHmm(this.endStr, isJpn)
            }
        }
        // 日付はstart基準
        if(this.start){
            this.date = formatDateForCalander(this.start, isJpn)
            this.year = this.date.year
            this.month = this.date.month
            this.day = this.date.day
            this.dayName = this.date.dayName
        } else {
            this.date = null
            this.year = null
            this.month = null
            this.day = null
            this.dayName = null
        }

        // 多言語対応のタイトル処理（英語時は日本語にフォールバック）
        if (isJpn) {
            this.title = item.properties["title"]?.rich_text?.[0]?.text?.content || ''
        } else {
            // 英語表示時：英語タイトルがあればそれを使用、なければ日本語にフォールバック
            const enTitle = item.properties["en"]?.rich_text?.[0]?.text?.content
            const jpTitle = item.properties["title"]?.rich_text?.[0]?.text?.content
            this.title = enTitle || jpTitle || ''
        }
        this.extendedProps = {
            description : ''
        }
        this.extendedProps.description = null
        this.text = null

        // 多言語対応の説明文処理（英語時は日本語にフォールバック）
        if(isJpn){
            if(item.properties["text"]?.rich_text?.[0]){
                this.extendedProps.description = item.properties["text"].rich_text[0].text.content
                this.text = item.properties["text"].rich_text[0].text.content
            }
        } else {
            // 英語表示時：英語説明文があればそれを使用、なければ日本語にフォールバック
            const enText = item.properties["text_en"]?.rich_text?.[0]?.text?.content
            const jpText = item.properties["text"]?.rich_text?.[0]?.text?.content
            const finalText = enText || jpText || null

            if(finalText) {
                this.extendedProps.description = finalText
                this.text = finalText
            }
        }
        if(item.properties["link"] && item.properties["link"].url){
            this.link = item.properties["link"].url
        }
        
        if(item.properties["location"]?.rich_text?.[0]){
          this.location = item.properties["location"].rich_text[0].text.content
        }
        if(item.properties["isEvent"]?.checkbox){
            this.isEvent = item.properties["isEvent"].checkbox
        }
        if(item.properties["backgroundColor"] && item.properties["backgroundColor"]?.rich_text?.[0]){
            this.backgroundColor = item.properties["backgroundColor"].rich_text[0].text.content
            this.borderColor = item.properties["backgroundColor"].rich_text[0].text.content
        }


        this.editable = false
    }
}
