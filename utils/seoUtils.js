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