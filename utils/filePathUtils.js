/**
 * ダウンロード済みの画像パスを取得（クライアントサイド用）
 * @param {string} originalUrl - NotionのオリジナルURL
 * @param {string} folderPath - ダウンロード先フォルダ（例: "kanji_kentei_overview"）
 * @returns {string} - 最適化された画像パス
 */
export const getDownloadedImagePath = (originalUrl, folderPath) => {
  if (!originalUrl) return null;

  // URLからファイル名を抽出
  try {
    const url = new URL(originalUrl);
    const pathParts = url.pathname.split('/');
    const fileName = pathParts[pathParts.length - 1];
    const baseName = fileName.split('.')[0].replace(/ /g, '_');

    // デフォルトで中サイズのWebP画像を返す
    // （実際のファイル存在確認はサーバーサイドでのみ可能）
    return `/image/download/${folderPath}/${baseName}-md.webp`;
  } catch (error) {
    console.warn('Failed to parse image URL:', error);
  }

  // パース失敗時は元のURLを返す
  return originalUrl;
};

/**
 * ダウンロード済みのPDFパスを取得（クライアントサイド用）
 * @param {string} originalUrl - NotionのオリジナルURL
 * @param {string} folderPath - ダウンロード先フォルダ（例: "kanji_kentei_pdf"）
 * @returns {string} - PDFのパス
 */
export const getDownloadedPdfPath = (originalUrl, folderPath) => {
  if (!originalUrl) return null;

  try {
    const url = new URL(originalUrl);
    const pathParts = url.pathname.split('/');
    const fileName = pathParts[pathParts.length - 1];
    const cleanFileName = fileName.replace(/ /g, '_');

    return `/pdf/download/${folderPath}/${cleanFileName}`;
  } catch (error) {
    console.warn('Failed to parse PDF URL:', error);
  }

  // パース失敗時は元のURLを返す
  return originalUrl;
};

/**
 * Entityのファイルパスを更新
 * @param {Object} entity - エンティティオブジェクト
 * @param {string} imageFolder - 画像フォルダ名
 * @param {string} pdfFolder - PDFフォルダ名
 * @returns {Object} - 更新されたエンティティ
 */
export const updateEntityPaths = (entity, imageFolder, pdfFolder) => {
  if (!entity) return entity;

  // 画像URLを更新
  if (entity._originalNotionImageUrl) {
    entity.imageUrl = getDownloadedImagePath(entity._originalNotionImageUrl, imageFolder);
  }

  // PDF URLを更新（日本語版）
  if (entity._originalNotionPdfUrl) {
    entity.pdfUrl = getDownloadedPdfPath(entity._originalNotionPdfUrl, pdfFolder);
  }

  // PDF URLを更新（英語版）
  if (entity._originalNotionPdfEnUrl) {
    entity.pdfEnUrl = getDownloadedPdfPath(entity._originalNotionPdfEnUrl, pdfFolder);
  }

  return entity;
};