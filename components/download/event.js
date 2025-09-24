import fs from 'fs'
import { DOWNLOAD_IMAGE_PATH, DOWNLOAD_PDF_PATH } from '@/const'
import { processBlocks, getLocalImagePath as getImagePath, getLocalPdfPath as getPdfPath } from './contentDownloader'

const eventImagePath = `${DOWNLOAD_IMAGE_PATH}/event`
const eventPdfPath = `${DOWNLOAD_PDF_PATH}/event`

const saveEventContentIfNeeded = async (blocksWithChildren, pageId) => {
  const imagePath = `${eventImagePath}/${pageId}`
  const pdfPath = `${eventPdfPath}/${pageId}`

  if (!fs.existsSync(imagePath)) {
    fs.mkdirSync(imagePath, { recursive: true })
  }
  if (!fs.existsSync(pdfPath)) {
    fs.mkdirSync(pdfPath, { recursive: true })
  }

  await processBlocks(blocksWithChildren, pageId, imagePath, pdfPath)
}

export const getLocalImagePath = (pageId, blockId) => {
  return getImagePath('event', pageId, blockId)
}

export const getLocalPdfPath = (pageId, fileName) => {
  return getPdfPath('event', pageId, fileName)
}

export default saveEventContentIfNeeded