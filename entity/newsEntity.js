import { ACCESABLE_IMAGE_PATH, DOWNLOAD_IMAGE_EXTENSION } from "../const"
import { getDatabase, getBlocks } from "../lib/notion"
import { formatDate } from "../utils/dateUtils"
import path from 'path'

export default class NewsEntity {
    constructor(item, isJapanease){
        if(!item){
            return
        }
        this.title = []
        this.id = item.id
        if(isJapanease && item.properties["title"].title[0]){
            this.title = item.properties["title"].title
        }
        if(!isJapanease && item.properties["en"].rich_text[0]){
            this.title = item.properties["en"].rich_text
        }
        this.rawDate = item.properties["date"].date.start
        this.date = new Date(item.properties["date"].date.start).toLocaleString(
            isJapanease ? "ja" : "en",
            {
              month: "short",
              day: "2-digit",
              year: "numeric",
            }
          );
        this.text = []
        if(isJapanease && item.properties["text"].rich_text[0]){
            this.text = item.properties["text"].rich_text
        }
        if(!isJapanease && item.properties["text_en"].rich_text[0]){
            this.text = item.properties["text_en"].rich_text
        }

        if(item.properties["image"] && item.properties["image"].optimizedImage){
            const optimizedImageData = item.properties["image"].optimizedImage;
            this.image = {
                baseName: optimizedImageData.baseName,
                pagePath: optimizedImageData.pagePath,
                alt: optimizedImageData.alt,
                width: optimizedImageData.width,
                height: optimizedImageData.height,
            };
        } else if (item.properties["image"] && item.properties["image"].files && item.properties["image"].files[0]) {
             const tmpName = item.properties["image"].files[0].name;
             const name = tmpName.replace(/ /g, '_');
             this.image = {
                 baseName: path.parse(name).name,
                 pagePath: 'news',
                 alt: item.properties["image"].files[0].caption ? item.properties["image"].files[0].caption[0]?.plain_text : name,
                 width: null,
                 height: null,
             };
        } else {
            this.image = null;
        }

        this.tags = item.properties["tags"].multi_select
        this.tag = item.properties["tags"].multi_select[0]
        
        // フルコンテンツロード用のフラグ
        this.fullContentLoaded = false;
    }

    // ページブロックから完全なテキストコンテンツを取得
    async loadFullContent() {
        if (this.fullContentLoaded) return;
        
        try {
            const blocks = await getBlocks(this.id);
            const fullText = this.extractTextFromBlocks(blocks);
            
            if (fullText && fullText.length > 0) {
                // プロパティのテキストが短く、ブロックテキストがある場合は置換
                if (this.text.length === 1 && fullText.length > this.text.length) {
                    this.text = fullText;
                    this.fullContentLoaded = true;
                }
            }
        } catch (error) {
            console.warn(`[NewsEntity] Failed to load full content for ${this.id}:`, error);
        }
    }

    // ブロックからテキストを抽出
    extractTextFromBlocks(blocks) {
        const textContent = [];
        
        for (const block of blocks) {
            if (block.type === 'paragraph' && block.paragraph?.rich_text) {
                textContent.push(...block.paragraph.rich_text);
            } else if (block.type === 'heading_1' && block.heading_1?.rich_text) {
                textContent.push(...block.heading_1.rich_text);
            } else if (block.type === 'heading_2' && block.heading_2?.rich_text) {
                textContent.push(...block.heading_2.rich_text);
            } else if (block.type === 'heading_3' && block.heading_3?.rich_text) {
                textContent.push(...block.heading_3.rich_text);
            } else if (block.type === 'bulleted_list_item' && block.bulleted_list_item?.rich_text) {
                textContent.push(...block.bulleted_list_item.rich_text);
            } else if (block.type === 'numbered_list_item' && block.numbered_list_item?.rich_text) {
                textContent.push(...block.numbered_list_item.rich_text);
            }
        }
        
        return textContent;
    }

}

export const getNewsList = async (database, limit = null) => {
    let params = []
    if(database){
        const sortedDatabase = database.sort((a, b) => new Date(b.properties["date"].date.start) - new Date(a.properties["date"].date.start));
        
        let limitedDatabase = sortedDatabase
        if(limit){
            limitedDatabase = sortedDatabase.slice(0, limit);    
        }
        
        limitedDatabase.map((page) => {
            params.push({
                id: page.id,
                page:page
            })
        })
    }

    return params;
}

export const getNewsFromNotion = async () => {
    let id = process.env.NEXT_PUBLIC_NOTION_NEWS_DATABASE_ID
    const database = await getDatabase(id)
    return database
}