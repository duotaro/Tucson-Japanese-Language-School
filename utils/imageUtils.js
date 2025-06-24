import saveImageIfNeeded from '@/components/download/index.js';
import { getDatabase } from "@/lib/notion.js";

/**
 * 英語ページ用の画像最適化付きデータ取得関数
 * @param {string} databaseId - NotionデータベースID
 * @param {string} pagePath - 画像保存パス
 * @returns {Promise<Array>} 最適化された画像プロパティ付きのデータベース
 */
export const fetchDataWithOptimizedImages = async (databaseId, pagePath) => {
  const database = await getDatabase(databaseId);
  
  // プロパティを抽出してsaveImageIfNeededに渡す
  let props = [];
  for(let item of database) {
    props.push(item.properties);
  }
  
  // 画像をダウンロードして最適化
  await saveImageIfNeeded(props, pagePath);
  
  // optimizedImageプロパティを追加
  for(let item of database) {
    const imageKeys = ['image', 'image1', 'image2', 'image3', 'image_en'];
    
    for(const key of imageKeys) {
      if (item.properties?.[key]?.files?.[0]) {
        const tmpName = item.properties[key].files[0].name;
        const fileName = tmpName.replace(/ /g, '_');
        const baseName = fileName.replace(/\.[^/.]+$/, ""); // 拡張子を削除
        
        item.properties[key].optimizedImage = {
          baseName: baseName,
          pagePath: pagePath,
          alt: item.properties[key].files[0].caption?.[0]?.plain_text || fileName,
          width: null,
          height: null,
        };
      }
    }
  }
  
  return database;
};

/**
 * SEO用のalternate linkタグを生成
 * @param {string} currentPath - 現在のパス（例: "/about/staff"）
 * @param {string} baseUrl - ベースURL（例: "https://tjschool.org"）
 * @returns {Object} hrefLang用のリンク情報
 */
export const generateAlternateLinks = (currentPath, baseUrl = "https://tjschool.org") => {
  const jaUrl = `${baseUrl}${currentPath}`;
  const enUrl = `${baseUrl}/en${currentPath}`;
  
  return {
    ja: jaUrl,
    en: enUrl,
    default: jaUrl
  };
};