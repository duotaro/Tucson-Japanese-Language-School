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
            this.date = null;
            this.year = null;
            this.month = null;
            this.day = null;
            this.dayName = null;
            this.title = '';
            this.extendedProps = { description: null };
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
        this.start = item.properties["date"]?.date?.start || null
        this.end = item.properties["date"]?.date?.end || null
        this.startStr = item.properties["date"]?.date?.start || null
        this.endStr = item.properties["date"]?.date?.end || null
        if(this.startStr && this.endStr){
            this.allDay = false
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

        this.title = isJpn ? item.properties["title"]?.rich_text?.[0]?.text?.content || '' : item.properties["en"]?.rich_text?.[0]?.text?.content || ''
        this.extendedProps = {
            description : ''
        }
        this.extendedProps.description = null
        if(isJpn){
            if(item.properties["text"]?.rich_text?.[0]){
                this.extendedProps.description = item.properties["text"].rich_text[0].text.content
            }
        } else {
            if(item.properties["text_en"]?.rich_text?.[0]){
                this.extendedProps.description = item.properties["text_en"].rich_text[0].text.content
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
