// クライアントサイド用のパス取得ヘルパー
// fs や path モジュールを使用せず、単純にパスを生成

export const getLocalImagePath = (contentType, pageId, blockId) => {
  return `/image/download/${contentType}/${pageId}/${blockId}.png`
}

export const getLocalPdfPath = (contentType, pageId, fileName) => {
  return `/pdf/download/${contentType}/${pageId}/${fileName.replace(/ /g, '_')}`
}