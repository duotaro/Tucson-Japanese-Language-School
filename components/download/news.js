import fs from 'fs'
import { DOWNLOAD_IMAGE_PATH, DOWNLOAD_PDF_PATH } from '@/const'
import { processBlocks, getLocalImagePath as getImagePath, getLocalPdfPath as getPdfPath } from './contentDownloader'

const newsImagePath = `${DOWNLOAD_IMAGE_PATH}/news`
const newsPdfPath = `${DOWNLOAD_PDF_PATH}/news`

const saveNewsContentIfNeeded = async (blocksWithChildren, pageId) => {
  const imagePath = `${newsImagePath}/${pageId}`
  const pdfPath = `${newsPdfPath}/${pageId}`

  if (!fs.existsSync(imagePath)) {
    fs.mkdirSync(imagePath, { recursive: true })
  }
  if (!fs.existsSync(pdfPath)) {
    fs.mkdirSync(pdfPath, { recursive: true })
  }

  await processBlocks(blocksWithChildren, pageId, imagePath, pdfPath)
}

export const getLocalImagePath = (pageId, blockId) => {
  return getImagePath('news', pageId, blockId)
}

export const getLocalPdfPath = (pageId, fileName) => {
  return getPdfPath('news', pageId, fileName)
}

export default saveNewsContentIfNeeded