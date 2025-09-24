import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const downloadImage = async (image, blockId, tmpPath, retryCount = 0) => {
  const MAX_RETRIES = 3
  let url = null
  let baseName = blockId

  if (image.type === 'external') {
    url = image.external.url
  } else if (image.type === 'file') {
    url = image.file.url
  }

  if (!url) {
    console.warn(`No URL found for image block: ${blockId}`)
    return
  }

  // 最適化された画像がすでに存在するかチェック
  if (isOptimizedImageExist(tmpPath, baseName)) {
    console.log(`Optimized images already exist for: ${baseName}`)
    return
  }

  try {
    console.log(`[${retryCount + 1}/${MAX_RETRIES + 1}] Downloading and optimizing image: ${url}`)
    const response = await fetch(url, {
      timeout: 30000, // 30秒タイムアウト
    })

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status} - ${response.statusText}`)
    }

    const contentLength = response.headers.get('content-length')
    if (contentLength) {
      console.log(`Image size: ${(parseInt(contentLength) / 1024 / 1024).toFixed(2)} MB`)
    }

    const blob = await response.blob()
    const arrayBuffer = await blob.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    // 画像最適化処理を実行
    await processAndSaveOptimizedImage(buffer, tmpPath, baseName)
    console.log(`✅ Successfully optimized and saved image: ${baseName}`)

  } catch (error) {
    const errorDetails = {
      blockId,
      url,
      attempt: retryCount + 1,
      maxAttempts: MAX_RETRIES + 1,
      errorType: error.name,
      errorMessage: error.message,
      timestamp: new Date().toISOString()
    }

    console.error(`❌ Error downloading image:`, errorDetails)

    // リトライ処理
    if (retryCount < MAX_RETRIES) {
      const delayMs = 1000 * Math.pow(2, retryCount) // 指数バックオフ (1s, 2s, 4s)
      console.log(`🔄 Retrying download for image: ${blockId} in ${delayMs}ms (${retryCount + 1}/${MAX_RETRIES})`)
      await new Promise(resolve => setTimeout(resolve, delayMs))
      return downloadImage(image, blockId, tmpPath, retryCount + 1)
    } else {
      console.error(`💥 FINAL FAILURE: Failed to download image after ${MAX_RETRIES + 1} attempts:`, errorDetails)
      // エラーを上位に通知（必要に応じて）
      throw new Error(`Failed to download image ${blockId} after ${MAX_RETRIES + 1} attempts: ${error.message}`)
    }
  }
}

const downloadFile = async (file, blockId, tmpPath, retryCount = 0) => {
  const MAX_RETRIES = 3
  let url = null
  let fileName = null

  if (file.type === 'external') {
    url = file.external.url
    const urlParts = url.split('/')
    fileName = urlParts[urlParts.length - 1] || `${blockId}.pdf`
  } else if (file.type === 'file') {
    url = file.file.url
    fileName = file.name || `${blockId}.pdf`
  }

  if (!url) {
    console.warn(`No URL found for file block: ${blockId}`)
    return
  }

  const extension = path.extname(fileName).toLowerCase()
  if (extension !== '.pdf') {
    console.log(`Skipping non-PDF file: ${fileName} (${extension})`)
    return
  }

  const filePath = path.join(tmpPath, fileName.replace(/ /g, '_'))

  if (fs.existsSync(filePath)) {
    console.log(`PDF already exists: ${fileName}`)
    return
  }

  try {
    console.log(`[${retryCount + 1}/${MAX_RETRIES + 1}] Downloading PDF: ${url}`)
    const response = await fetch(url, {
      timeout: 60000, // 60秒タイムアウト（PDFは画像より大きい可能性）
    })

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status} - ${response.statusText}`)
    }

    const contentLength = response.headers.get('content-length')
    if (contentLength) {
      console.log(`PDF size: ${(parseInt(contentLength) / 1024 / 1024).toFixed(2)} MB`)
    }

    const blob = await response.blob()
    const arrayBuffer = await blob.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    await saveFile(buffer, filePath)
    console.log(`✅ Successfully downloaded PDF: ${fileName}`)

  } catch (error) {
    const errorDetails = {
      blockId,
      fileName,
      url,
      attempt: retryCount + 1,
      maxAttempts: MAX_RETRIES + 1,
      errorType: error.name,
      errorMessage: error.message,
      timestamp: new Date().toISOString()
    }

    console.error(`❌ Error downloading PDF:`, errorDetails)

    // リトライ処理
    if (retryCount < MAX_RETRIES) {
      const delayMs = 1000 * Math.pow(2, retryCount) // 指数バックオフ (1s, 2s, 4s)
      console.log(`🔄 Retrying download for PDF: ${fileName} in ${delayMs}ms (${retryCount + 1}/${MAX_RETRIES})`)
      await new Promise(resolve => setTimeout(resolve, delayMs))
      return downloadFile(file, blockId, tmpPath, retryCount + 1)
    } else {
      console.error(`💥 FINAL FAILURE: Failed to download PDF after ${MAX_RETRIES + 1} attempts:`, errorDetails)
      throw new Error(`Failed to download PDF ${fileName} after ${MAX_RETRIES + 1} attempts: ${error.message}`)
    }
  }
}

const downloadPdf = async (pdf, blockId, tmpPath, retryCount = 0) => {
  const MAX_RETRIES = 3
  let url = null
  let fileName = null

  if (pdf.type === 'external') {
    url = pdf.external.url
    const urlParts = url.split('/')
    fileName = urlParts[urlParts.length - 1] || `${blockId}.pdf`
  } else if (pdf.type === 'file') {
    url = pdf.file.url
    fileName = pdf.name || `${blockId}.pdf`
  }

  if (!url) {
    console.warn(`No URL found for PDF block: ${blockId}`)
    return
  }

  const filePath = path.join(tmpPath, fileName.replace(/ /g, '_'))

  if (fs.existsSync(filePath)) {
    console.log(`PDF already exists: ${fileName}`)
    return
  }

  try {
    console.log(`[${retryCount + 1}/${MAX_RETRIES + 1}] Downloading PDF: ${url}`)
    const response = await fetch(url, {
      timeout: 60000, // 60秒タイムアウト
    })

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status} - ${response.statusText}`)
    }

    const contentLength = response.headers.get('content-length')
    if (contentLength) {
      console.log(`PDF size: ${(parseInt(contentLength) / 1024 / 1024).toFixed(2)} MB`)
    }

    const blob = await response.blob()
    const arrayBuffer = await blob.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    await saveFile(buffer, filePath)
    console.log(`✅ Successfully downloaded PDF: ${fileName}`)

  } catch (error) {
    const errorDetails = {
      blockId,
      fileName,
      url,
      attempt: retryCount + 1,
      maxAttempts: MAX_RETRIES + 1,
      errorType: error.name,
      errorMessage: error.message,
      timestamp: new Date().toISOString()
    }

    console.error(`❌ Error downloading PDF:`, errorDetails)

    // リトライ処理
    if (retryCount < MAX_RETRIES) {
      const delayMs = 1000 * Math.pow(2, retryCount) // 指数バックオフ (1s, 2s, 4s)
      console.log(`🔄 Retrying download for PDF: ${fileName} in ${delayMs}ms (${retryCount + 1}/${MAX_RETRIES})`)
      await new Promise(resolve => setTimeout(resolve, delayMs))
      return downloadPdf(pdf, blockId, tmpPath, retryCount + 1)
    } else {
      console.error(`💥 FINAL FAILURE: Failed to download PDF after ${MAX_RETRIES + 1} attempts:`, errorDetails)
      throw new Error(`Failed to download PDF ${fileName} after ${MAX_RETRIES + 1} attempts: ${error.message}`)
    }
  }
}

const saveFile = (buffer, filePath) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, buffer, (err) => {
      if (err) {
        console.error(`Error saving file: ${err}`)
        reject(err)
      } else {
        resolve()
      }
    })
  })
}

// 最適化された画像が存在するかチェック
const isOptimizedImageExist = (outputPath, baseName) => {
  const sizes = ['sm', 'md', 'lg', 'xl']
  return sizes.every(size => {
    const filePath = path.join(outputPath, `${baseName}-${size}.webp`)
    return fs.existsSync(filePath)
  })
}

// 画像最適化処理（components/download/index.jsのprocessAndSaveImageをベースに）
const processAndSaveOptimizedImage = async (imageBuffer, outputPath, baseName) => {
  // 生成する画像のサイズと品質の定義
  const qualities = [
    { width: 480, quality: 80, suffix: 'sm' },  // スマートフォン向け
    { width: 800, quality: 80, suffix: 'md' },  // タブレット・中型PC向け
    { width: 1200, quality: 80, suffix: 'lg' }, // デスクトップ向け
    { width: 1600, quality: 75, suffix: 'xl' }, // 高解像度ディスプレイ向け
  ]

  console.log(`🔄 Processing image optimization for: ${baseName}`)

  // 各サイズ・品質の画像を並列で生成・保存
  const results = await Promise.allSettled(qualities.map(async ({ width, quality, suffix }) => {
    const outputFileName = `${baseName}-${suffix}.webp`
    const fullOutputPath = path.join(outputPath, outputFileName)

    try {
      const metadata = await sharp(imageBuffer).metadata()
      console.log(`Processing ${suffix} (${width}px) from original ${metadata.width}x${metadata.height} ${metadata.format}`)

      await sharp(imageBuffer)
        .resize(width, null, { fit: sharp.fit.inside, withoutEnlargement: true })
        .webp({ quality: quality })
        .toFile(fullOutputPath)

      console.log(`✅ Optimized image saved: ${outputFileName}`)
      return { success: true, file: outputFileName }
    } catch (error) {
      console.error(`❌ Error processing image ${baseName}-${suffix}:`, {
        errorType: error.name,
        errorMessage: error.message,
        suffix,
        width,
        quality
      })

      // 特定のエラータイプの場合の詳細メッセージ
      if (error.message.includes('unsupported')) {
        console.error('💡 Hint: This might be due to unsupported image format (e.g., HEIC). Please convert the image to JPEG/PNG format in Notion.')
      }

      // エラー時は空のWebPファイルを削除（存在する場合）
      if (fs.existsSync(fullOutputPath)) {
        try {
          fs.unlinkSync(fullOutputPath)
          console.log(`🗑️  Cleaned up failed file: ${outputFileName}`)
        } catch (cleanupError) {
          console.warn(`⚠️  Could not clean up file ${outputFileName}: ${cleanupError.message}`)
        }
      }
      return { success: false, file: outputFileName, error: error.message }
    }
  }))

  // 結果の集計
  const successful = results.filter(r => r.status === 'fulfilled' && r.value.success).length
  const failed = results.filter(r => r.status === 'rejected' || (r.status === 'fulfilled' && !r.value.success)).length

  console.log(`📊 Optimization results for ${baseName}: ${successful} successful, ${failed} failed`)

  // すべて失敗した場合はエラーをスロー
  if (successful === 0) {
    throw new Error(`All image optimization attempts failed for ${baseName}`)
  }

  try {
    // オリジナルファイルも保存（フォールバック用）
    const originalPath = path.join(outputPath, `${baseName}.png`)
    await saveFile(imageBuffer, originalPath)
    console.log(`💾 Original image saved as fallback: ${baseName}.png`)
  } catch (error) {
    console.error(`❌ Failed to save original image: ${error.message}`)
    // オリジナル保存の失敗は致命的ではないため、継続
  }
}

const processBlocks = async (blocks, pageId, imagePath, pdfPath) => {
  for (const block of blocks) {
    if (block.type === 'image' && block.image) {
      await downloadImage(block.image, block.id, imagePath)
    }

    if (block.type === 'file' && block.file) {
      await downloadFile(block.file, block.id, pdfPath)
    }

    if (block.type === 'pdf' && block.pdf) {
      await downloadPdf(block.pdf, block.id, pdfPath)
    }

    if (block.children && block.children.length > 0) {
      await processBlocks(block.children, pageId, imagePath, pdfPath)
    }
  }
}

// サーバーサイド専用のパス取得関数（ファイル存在確認付き）
export const getLocalImagePath = (contentType, pageId, blockId) => {
  const imagePath = `/image/download/${contentType}/${pageId}/${blockId}.png`
  const fullPath = path.join(process.cwd(), 'public', imagePath)

  if (fs.existsSync(fullPath)) {
    return imagePath
  }
  return null
}

export const getLocalPdfPath = (contentType, pageId, fileName) => {
  const pdfPath = `/pdf/download/${contentType}/${pageId}/${fileName.replace(/ /g, '_')}`
  const fullPath = path.join(process.cwd(), 'public', pdfPath)

  if (fs.existsSync(fullPath)) {
    return pdfPath
  }
  return null
}

export { processBlocks, downloadImage, downloadFile, downloadPdf, saveFile, processAndSaveOptimizedImage, isOptimizedImageExist }