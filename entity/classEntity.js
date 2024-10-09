import { ACCESABLE_IMAGE_PATH, DOWNLOAD_IMAGE_EXTENSION } from "../const"

export default class ClassEntity {
    constructor(item, category, isJapanease){
        if(!item){
            return
        }
        this.id = item.id
        this.ordering = item.properties["ordering"].number
        this.title = ""
        if(isJapanease && item.properties["title"].title[0]){
            this.title = item.properties["title"].title[0].text.content
        }
        if(!isJapanease && item.properties["en"].rich_text[0]){
            this.title = item.properties["en"].rich_text[0].text.content
        }
        this.text = []
        if(isJapanease && item.properties["text"].rich_text[0]){
            this.text = item.properties["text"].rich_text
        }
        if(!isJapanease && item.properties["text_en"].rich_text[0]){
            this.text = item.properties["text_en"].rich_text
        }

        this.target = []
        if(isJapanease && item.properties["target"].rich_text[0]){
            this.target = item.properties["target"].rich_text
        }
        if(!isJapanease && item.properties["target_en"].rich_text[0]){
            this.target = item.properties["target_en"].rich_text
        }
        // 今はなし　やるならダウンロード処理入れないと
        if(item.properties["image"].files[0]){
            //const name = item.properties["image"].files[0].name

            const tmpName = item.properties["image"].files[0].name
            const name = tmpName.replace(/ /g, '_')
            this.image = `/${ACCESABLE_IMAGE_PATH}/class/${name}${DOWNLOAD_IMAGE_EXTENSION}`
        }
        this.categoryTitle = ""
        this.categoryText = ""
        if(category.properties){
            if(isJapanease && category.properties["title"].title[0]){
                this.categoryTitle = category.properties["title"].title[0].text.content
            }
            if(!isJapanease && category.properties["en"].rich_text[0]){
                this.categoryTitle = category.properties["en"].rich_text[0].text.content
            }
            
            if(isJapanease && category.properties["text"].rich_text[0]){
                this.categoryText = category.properties["text"].rich_text
            }
            if(!isJapanease && category.properties["text_en"].rich_text[0]){
                this.categoryText = category.properties["text_en"].rich_text
            }        
        }
    }
}
