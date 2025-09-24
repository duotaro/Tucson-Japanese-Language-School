import fs from 'fs'
import path from 'path'
import { DOWNLOAD_IMAGE_PATH } from '@/const'

export const downloadPath = `${DOWNLOAD_IMAGE_PATH}/event`

const saveEventImageIfNeeded = async (blocksWithChildren, pageId) => {
  const tmpPath = `${downloadPath}/${pageId}`

  if (!fs.existsSync(tmpPath)) {
    fs.mkdirSync(tmpPath, { recursive: true })
  }

  for (const block of blocksWithChildren) {
    if (block.type === 'image' && block.image) {
      await downloadImage(block.image, block.id, tmpPath)
    }

    if (block.children && block.children.length > 0) {
      for (const child of block.children) {
        if (child.type === 'image' && child.image) {
          await downloadImage(child.image, child.id, tmpPath)
        }
      }
    }
  }
}

const downloadImage = async (image, blockId, tmpPath) => {
  let url = null
  let fileName = null

  if (image.type === 'external') {
    url = image.external.url
    fileName = `${blockId}.png`
  } else if (image.type === 'file') {
    url = image.file.url
    fileName = `${blockId}.png`
  }

  if (!url) return

  const filePath = path.join(tmpPath, fileName)

  if (fs.existsSync(filePath)) {
    console.log(`Image already exists: ${filePath}`)
    return
  }

  try {
    const response = await fetch(url)
    if (!response.ok) {
      console.error(`Failed to fetch image: ${url}`)
      return
    }

    const blob = await response.blob()
    const arrayBuffer = await blob.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    await new Promise((resolve, reject) => {
      fs.writeFile(filePath, buffer, (err) => {
        if (err) {
          console.error(`Error saving image: ${err}`)
          reject(err)
        } else {
          console.log(`Image saved: ${filePath}`)
          resolve()
        }
      })
    })
  } catch (error) {
    console.error(`Error downloading image: ${error}`)
  }
}

export default saveEventImageIfNeeded