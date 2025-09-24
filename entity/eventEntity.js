import { ACCESABLE_IMAGE_PATH, DOWNLOAD_IMAGE_EXTENSION } from "../const"
import { getDatabase, getBlocks } from "../lib/notion"
import { formatDate } from "../utils/dateUtils"
import path from 'path'

export default class EventEntity {
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
        this.rawDate = item.properties["date"].date ? item.properties["date"].date.start : null
        this.date = item.properties["date"].date && item.properties["date"].date.start ?
            new Date(item.properties["date"].date.start).toLocaleString(
                isJapanease ? "ja" : "en",
                {
                  month: "short",
                  day: "2-digit",
                  year: "numeric",
                }
            ) : '';
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
                 pagePath: 'event',
                 alt: item.properties["image"].files[0].caption ? item.properties["image"].files[0].caption[0]?.plain_text : name,
                 width: null,
                 height: null,
             };
        } else {
            this.image = null;
        }

        this.tags = item.properties["tags"].multi_select || []
        this.tag = item.properties["tags"].multi_select && item.properties["tags"].multi_select[0] ?
            item.properties["tags"].multi_select[0] : { name: 'event' }

        // 申し込みリンク関連のプロパティ
        this.application_link_label = item.properties["application_link_label"] &&
            item.properties["application_link_label"].rich_text &&
            item.properties["application_link_label"].rich_text[0] ?
            item.properties["application_link_label"].rich_text[0].plain_text : ''
        this.application_link_label_en = item.properties["application_link_label_en"] &&
            item.properties["application_link_label_en"].rich_text &&
            item.properties["application_link_label_en"].rich_text[0] ?
            item.properties["application_link_label_en"].rich_text[0].plain_text : ''
        // URLプロパティの場合は.urlで直接取得
        this.application_link = item.properties["application_link"] &&
            item.properties["application_link"].url ?
            item.properties["application_link"].url : ''
        this.application_link_en = item.properties["application_link_en"] &&
            item.properties["application_link_en"].url ?
            item.properties["application_link_en"].url : ''

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
            console.warn(`[EventEntity] Failed to load full content for ${this.id}:`, error);
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

// イベントリスト取得関数（newsEntityのgetNewsListに対応）
export const getEventList = async (database, developmentMode = false) => {
  const eventDatabase = database
  let events = [];

  try {
    for(let event of eventDatabase){
      events.push({
        id: event.id,
        page: event
      });
    }

    return events;
  } catch (error) {
    console.error('[EventEntity] Error in getEventList:', error);
    return [];
  }
}