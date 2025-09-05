import fs from 'fs'
import path from 'path' // ① pathモジュールをインポート
import sharp from 'sharp' // ② sharpライブラリをインポート
import { DOWNLOAD_IMAGE_PATH } from '@/const' // DOWNLOAD_IMAGE_EXTENSION は不要になるため削除

export const downloadImagePath = DOWNLOAD_IMAGE_PATH
// export const downloadImageExtention = DOWNLOAD_IMAGE_EXTENSION // 削除またはコメントアウト

const saveImageIfNeeded = async (blocksWithChildren, pagePath) => { // ③ 変数名を`path`から`pagePath`に変更
  const tmpPath = `${downloadImagePath}/${pagePath}`

  // ④ fs.mkdirSyncのオプションに{ recursive: true }を追加
  if (!fs.existsSync(tmpPath)) {
    fs.mkdirSync(tmpPath, { recursive: true })
  }

  // ⑤ Promise.allを使って並列処理にすることで高速化
  await Promise.all(blocksWithChildren.map(async (block) => {
    // 複数の画像プロパティをループ処理
    const imageKeys = ['image', 'image1', 'image2', 'image3', 'image_en'];
    await Promise.all(imageKeys.map(async (key) => {
      const image = block[key];
      if (image) {
        await save(tmpPath, image);
      } else {
        // console.log(`not found image for key: ${key}`); // デバッグ用に残しても良いが、本番ではコメントアウトを推奨
      }
    }));
  }));

  // Notionのデータベースから取得した`block`オブジェクトそのものには変更を加えないで、
  // `getStaticProps`側で最適化された画像パスを組み込む形を推奨します。
  // そのため、この関数はvoid型（何も返さない）で良いでしょう。
}

const save = async (tmpPath, image) => {
  if(!image){
    // console.log("not found image") // デバッグ用に残しても良いが、本番ではコメントアウトを推奨
      return
  }

  await checkBlock(tmpPath, image)
}

const checkBlock = async (outputPath, image) => { // ⑥ 変数名を`path`から`outputPath`に変更

  if (image.type === 'files' && image.files[0]) { // ⑦ === で厳密比較

    const tmpName = image.files[0].name
    // ⑧ path.parseを使用して拡張子を除いたファイル名を取得
    const parsedName = path.parse(tmpName.replace(/ /g, '_'))
    const baseName = parsedName.name // 拡張子なしのファイル名

    const url = image.files[0].file.url
    const blob = await getTemporaryImage(url)

    if (!blob) {
      // console.log("not found blob") // デバッグ用に残しても良いが、本番ではコメントアウトを推奨
      return ''
    }

    // ⑨ 元の拡張子を取得する処理は不要になるため削除（WebPで統一するため）
    // const extension = blob.type.replace('image/', '')

    // ⑩ 画像が存在するかどうかのチェックをWebPファイルで確認するように変更
    if (!isImageExist(outputPath, baseName, 'webp')) { // 新しいisImageExist関数に拡張子を渡す
      const binary = (await blob.arrayBuffer())
      const buffer = Buffer.from(binary)
      // ⑪ ここで画像を処理する新しい関数を呼び出す
      await processAndSaveImage(buffer, outputPath, baseName)
    } else {
      // console.log("already exist image.") // デバッグ用に残しても良いが、本番ではコメントアウトを推奨
    }
  }
}

/// 一時ファイルの画像をバイナリとして取得する。ここで画像のフォーマットがわかる
const getTemporaryImage = async (url) => {
  try {
    const blob = await fetch(url).then((r) => r.blob())
    return blob
  } catch (error) {
    // console.log(`Error fetching image from URL: ${url}`, error) // ⑫ エラーログを修正
    return null
  }
}

// ⑬ isImageExist 関数を修正 (拡張子も考慮)
const isImageExist = (outputPath, keyName, extension) => {
  return fs.existsSync(path.join(outputPath, `${keyName}.${extension}`))
}

// ⑭ saveImage 関数を削除し、代わりに processAndSaveImage 関数を追加する
// saveImage 関数内にあったリトライロジックが必要な場合は、processAndSaveImage 内に組み込むことを検討
const processAndSaveImage = async (imageBuffer, outputPath, baseName) => {
  // 生成する画像のサイズと品質の定義
  // widthsは表示する場所に合わせて調整してください。
  // qualityは0-100で、値を小さくするとファイルサイズは減りますが画質が劣化します。
  const qualities = [
    { width: 480, quality: 80, suffix: 'sm' },  // スマートフォン向け
    { width: 800, quality: 80, suffix: 'md' },  // タブレット・中型PC向け
    { width: 1200, quality: 80, suffix: 'lg' }, // デスクトップ向け
    { width: 1600, quality: 75, suffix: 'xl' }, // 高解像度ディスプレイ向け
  ];

  // 各サイズ・品質の画像を並列で生成・保存
  await Promise.all(qualities.map(async ({ width, quality, suffix }) => {
    const outputFileName = `${baseName}-${suffix}.webp`; // 例: my_image-sm.webp
    const fullOutputPath = path.join(outputPath, outputFileName); // 完全な出力パス

    try {
      await sharp(imageBuffer)
        .resize(width, null, { fit: sharp.fit.inside, withoutEnlargement: true }) // 指定された幅にリサイズ（アスペクト比を維持し、拡大はしない）
        .webp({ quality: quality }) // WebP形式に変換し、品質を設定
        .toFile(fullOutputPath); // ファイルに保存
      // console.log(`Image saved: ${fullOutputPath}`); // デバッグ用に残しても良いが、本番ではコメントアウトを推奨
    } catch (error) {
      console.error(`Error processing image ${baseName}-${suffix}:`, error);
      console.error('This might be due to unsupported image format (e.g., HEIC). Please convert the image to JPEG/PNG format in Notion.');
      
      // エラー時は空のWebPファイルを削除（存在する場合）
      if (fs.existsSync(fullOutputPath)) {
        fs.unlinkSync(fullOutputPath);
      }
    }
  }));
}

export default saveImageIfNeeded