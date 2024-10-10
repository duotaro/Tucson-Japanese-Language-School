import { DOWNLOAD_IMAGE_EXTENSION, ACCESABLE_IMAGE_PATH } from "../const"


export default class SliderEntity {
    constructor(item){

        this.active = item.properties["active"].checkbox
        if(this.active){
            //const name = item.properties["image"].files[0].name

            const tmpName = item.properties["image"].files[0].name
            const name = tmpName.replace(/ /g, '_')

            this.ordering =  item.properties["ordering"].number
            this.label = item.properties["title"].title[0].text.content
            this.label_en = item.properties["en"].rich_text[0].text.content
            this.image = `/${ACCESABLE_IMAGE_PATH}/slider/${name}${DOWNLOAD_IMAGE_EXTENSION}`
        }
    }
}
