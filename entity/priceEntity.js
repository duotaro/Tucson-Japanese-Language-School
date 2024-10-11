import { ACCESABLE_IMAGE_PATH, DOWNLOAD_IMAGE_EXTENSION } from "../const"

export class PriceEntity {
    constructor(item, isJpn){

        this.title = isJpn ? item.properties["title"].title[0].text.content : item.properties["en"].rich_text[0].text.content
        this.per = null
        if(isJpn){
            if(item.properties["per"].rich_text[0]){
                this.per = item.properties["per"].rich_text[0].text.content
            }
        } else {
            if(item.properties["per_en"].rich_text[0]){
                this.per = item.properties["per_en"].rich_text[0].text.content
            }
        }

        this.frequency = null
        if(item.properties["frequency"].number){
            this.frequency = item.properties["frequency"].number
        }

        this.price = null
        if(item.properties["price"].number){
            this.price = item.properties["price"].number
        }

        this.ordering = item.properties["ordering"].number

        this.total = 0
        if(this.frequency && this.price){
            this.total = this.frequency*this.price
        }

        this.payment = item.properties["payment"].select.name
    }
}
