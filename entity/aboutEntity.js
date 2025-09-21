import { ACCESABLE_IMAGE_PATH, DOWNLOAD_IMAGE_EXTENSION } from "../const"

// entity/aboutEntity.js

// DOWNLOAD_IMAGE_EXTENSION, ACCESABLE_IMAGE_PATH は optimizedImage を使うなら不要
// import { DOWNLOAD_IMAGE_EXTENSION, ACCESABLE_IMAGE_PATH } from "../const" 


export class AboutEntity {
    constructor(item, isJpn){
        if(!item || !item.properties){ // ★ item または properties がない場合をチェック
            console.warn("[AboutEntity] Invalid item or item.properties provided.");
            this.title = '';
            this.text = null;
            this.image = null;
            this.tag = null;
            return;
        }

        // 画像データの処理
        if (item.properties?.image?.files?.[0]) {
            const imageFile = item.properties.image.files[0];
            // ファイル名からベース名を作成（拡張子を除去し、スペースをアンダースコアに変換）
            const originalName = imageFile.name;
            const baseName = originalName.replace(/\.[^/.]+$/, '').replace(/ /g, '_');

            // ImageOptimizerで使用するための画像データ構造を作成
            this.image = {
                baseName: baseName,
                pagePath: 'about',
                alt: this.title || 'About画像',
                url: imageFile.file?.url || imageFile.external?.url
            };
        } else {
            console.warn(`[AboutEntity] No image data found for About ID: ${item.id}`);
            this.image = null;
        }

        // titleの処理を安全に
        this.title = isJpn 
            ? item.properties?.["title"]?.title?.[0]?.plain_text || '' // ★ オプショナルチェーニング
            : item.properties?.["en"]?.rich_text?.[0]?.plain_text || ''; // ★ オプショナルチェーニング
        
        // textの処理を安全に
        this.text = null;
        if(isJpn){
            this.text = item.properties?.["text"]?.rich_text?.[0]?.plain_text || null; // ★ オプショナルチェーニング
        } else {
            this.text = item.properties?.["text_en"]?.rich_text?.[0]?.plain_text || null; // ★ オプショナルチェーニング
        }

        // tagの処理を安全に
        this.tag = item.properties?.["tag"]?.select?.name || null; // ★ オプショナルチェーニング

        // JSON シリアライズ可能にするための toJSON メソッドを追加
        this.toJSON = () => {
            return {
                title: this.title,
                text: this.text,
                image: this.image,
                tag: this.tag
                // 必要に応じて、AboutEntityが持つ他のプロパティもここに追加
            };
        };
    }
}

export const AboutEnum = {
    ABOUT : "about",
    MISSION : "mission",
    VISION : "vision"
}

export const convertAboutFromDatabase = (database, isJpn) => {
    let aboutSchool = null
    let mission = null
    let vision = null

    // databaseが存在しない場合の処理
    if (!database || !Array.isArray(database)) {
        console.warn("[convertAboutFromDatabase] Invalid database provided.");
        return { aboutSchool, mission, vision };
    }

    for(let item of database){
        let entity = new AboutEntity(item, isJpn)
        
        // デバッグ用ログ
        console.log(`[convertAboutFromDatabase] Processing item with tag: ${entity.tag}, title: ${entity.title}`);
    
        switch (entity.tag) {
            case AboutEnum.ABOUT:
                aboutSchool = entity
                console.log('[convertAboutFromDatabase] Set aboutSchool');
                break;
            case AboutEnum.MISSION:
                mission = entity
                console.log('[convertAboutFromDatabase] Set mission');
                break;
            case AboutEnum.VISION:
                vision = entity
                console.log('[convertAboutFromDatabase] Set vision');
                break;
            default:
                console.log(`[convertAboutFromDatabase] Unknown tag: ${entity.tag}`);
        } 
    }
    
    console.log(`[convertAboutFromDatabase] Final result - aboutSchool: ${aboutSchool ? 'found' : 'null'}, mission: ${mission ? 'found' : 'null'}, vision: ${vision ? 'found' : 'null'}`);

    return {
        aboutSchool, mission, vision
    }
}