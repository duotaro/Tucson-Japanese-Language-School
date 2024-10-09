import { formatDateForCalander, formatDateForHHmm } from "../utils/dateUtils"

export class SchaduleEntity {
    constructor(item, isJpn){
        this.id = item.id
        this.dateTime = item.properties["date"].date.start
        this.allDay = true
        this.start = item.properties["date"].date.start
        this.end = item.properties["date"].date.end
        this.startStr = item.properties["date"].date.start
        this.endStr = item.properties["date"].date.end
        if(this.startStr && this.endStr){
            this.allDay = false
        }
        // 日付はstart基準
        this.date = formatDateForCalander(item.properties["date"].date.start, isJpn)
        this.year = this.date.year
        this.month = this.date.month
        this.day = this.date.day
        this.dayName = this.date.dayName

        this.title = isJpn ? item.properties["title"].rich_text[0].text.content : item.properties["en"].rich_text[0].text.content
        this.extendedProps = {
            description : ''
        }
        this.extendedProps.description = null
        if(isJpn){
            if(item.properties["text"].rich_text[0]){
                this.extendedProps.description = item.properties["text"].rich_text[0].text.content
            }
        } else {
            if(item.properties["text_en"].rich_text[0]){
                this.extendedProps.description = item.properties["text_en"].rich_text[0].text.content
            }
        }
        if(item.properties["link"] && item.properties["link"].url){
            this.link = item.properties["link"].url
        }
        
        if(item.properties["location"].rich_text[0]){
          this.location = item.properties["location"].rich_text[0].text.content
        }
        if(item.properties["isEvent"].checkbox){
            this.isEvent = item.properties["isEvent"].checkbox
        }
        if(item.properties["backgroundColor"] && item.properties["backgroundColor"].rich_text[0]){
            this.backgroundColor = item.properties["backgroundColor"].rich_text[0].text.content
            this.borderColor = item.properties["backgroundColor"].rich_text[0].text.content
        }
        
        this.editable = false
    }
}
