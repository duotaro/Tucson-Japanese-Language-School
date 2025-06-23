import fs from 'fs'
import path from 'path' // ❶ pathモジュールをインポート
import sharp from 'sharp' // ❷ sharpライブラリをインポート
import { DOWNLOAD_IMAGE_EXTENSION, DOWNLOAD_IMAGE_PATH } from '@/const'

export const downloadImagePath = DOWNLOAD_IMAGE_PATH
export const downloadImageExtention = DOWNLOAD_IMAGE_EXTENSION

const saveImageIfNeeded = async (blocksWithChildren, pagePath) => {
  const tmpPath = `${downloadImagePath}/${pagePath}`
  const tmpBlock = blocksWithChildren
  
  // try { fs.rmSync(tmpPath, { recursive: true, force: true }); }
  // catch(err) { console.error(err)}
  
  if (!fs.existsSync(tmpPath)) {
    fs.mkdirSync(tmpPath, { recursive: true }) // ❻ recursive: true を追加してネストされたディレクトリも作成
  }

  // ❼ Promise.all で並列処理にすることで、すべての画像ダウンロード・保存を待機し、高速化する
  await Promise.all(blocksWithChildren.map(async (block) => {
    // 複数の画像プロパティをループ処理するための配列
    const imageKeys = ['image', 'image1', 'image2', 'image3', 'image_en'];
    await Promise.all(imageKeys.map(async (key) => {
      const image = block[key];
      if (image) {
        await save(tmpPath, image);
      } else {
        console.log(`not found image for key: ${key}`);
      }
    }));
  }));
}

const save = async (tmpPath, image) => {
  if(!image){
    console.log("not found image")
      return
  }
  
  await checkBlock(tmpPath, image)
  // if (block.has_children) {
  //   block.children?.forEach(async (block) => await checkBlock(block, tmpPath))
  // }
}

const checkBlock = async (path, image) => {

  if (image.type == 'files' && image.files[0]) {

    const tmpName = image.files[0].name
    const parsedName = path.parse(tmpName.replace(/ /g, '_'))
    const baseName = parsedName.name // 拡張子なしのファイル名

    const url = image.files[0].file.url
    const blob = await getTemporaryImage(url)

    if (!blob) {
      console.log("not found blob")
      return ''
    }


    // ⓫ isImageExist 関数を修正 (WebPファイルで存在チェック)
    if (!isImageExist(outputPath, baseName, 'webp')) {
      const binary = (await blob.arrayBuffer())
      const buffer = Buffer.from(binary)
      // ⓬ 画像の処理と保存を行う新しい関数を呼び出す
      await processAndSaveImage(buffer, outputPath, baseName)
    } else {
      console.log("already exist image.")
    }
  }
}

/// 一時ファイルの画像をバイナリとして取得する。ここで画像のフォーマットがわかる
const getTemporaryImage = async (url) => {
  try {
    const blob = await fetch(url).then((r) => r.blob())
    return blob
  } catch (error) {
    console.log(`Error fetching image from URL: ${url}`, error) // ⓭ エラーメッセージを修正
    return null
  }
}

const isImageExist = (outputPath, keyName, extension) => {
  return fs.existsSync(path.join(outputPath, `${keyName}.${extension}`))
}


// saveImage 関数のリトライロジックが必要な場合は、processAndSaveImage 内に組み込む
const processAndSaveImage = async (imageBuffer, outputPath, baseName) => {
  // 生成する画像のサイズと品質の定義
  const qualities = [
    { width: 480, quality: 80, suffix: 'sm' },  // スマートフォン向け
    { width: 800, quality: 80, suffix: 'md' },  // タブレット・中型PC向け
    { width: 1200, quality: 80, suffix: 'lg' }, // デスクトップ向け
    { width: 1600, quality: 75, suffix: 'xl' }, // 高解像度ディスプレイ向け
  ];

  // 各サイズ・品質の画像を並列で生成・保存
  await Promise.all(qualities.map(async ({ width, quality, suffix }) => {
    const outputFileName = `${baseName}-${suffix}.webp`; // 出力ファイル名 (例: my_image-sm.webp)
    const fullOutputPath = path.join(outputPath, outputFileName); // 完全な出力パス

    try {
      await sharp(imageBuffer)
        .resize(width) // 指定された幅にリサイズ
        .webp({ quality: quality }) // WebP形式に変換し、品質を設定
        .toFile(fullOutputPath); // ファイルに保存
      console.log(`Image saved: ${fullOutputPath}`);
    } catch (error) {
      console.error(`Error processing image ${baseName}-${suffix}:`, error);
    }
  }));
}

export default saveImageIfNeeded