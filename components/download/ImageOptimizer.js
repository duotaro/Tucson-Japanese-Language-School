// components/download/ImageOptimizer.js

import Image from 'next/image'; // Next.jsのImageコンポーネントをインポート
import React from 'react';

/**
 * 最適化された画像をレンダリングするコンポーネント
 *
 * @param {object} props - コンポーネントのプロパティ
 * @param {string} props.baseName - 画像の元ファイル名（拡張子、サフィックスなし）
 * @param {string} props.pagePath - 画像が保存されているサブディレクトリのパス（例: "slider", "news"）
 * @param {string} props.alt - 画像の代替テキスト
 * @param {string} [props.className] - Imageコンポーネントに適用するCSSクラス名
 * @param {number} [props.width] - 画像の表示幅（Next.jsのImageコンポーネントで必須）
 * @param {number} [props.height] - 画像の表示高さ（Next.jsのImageコンポーネントで必須）
 * @param {boolean} [props.priority=false] - LCPなど、優先的に読み込む画像に設定 (trueの場合、遅延読み込みが無効になる)
 * @param {string} [props.objectFit='cover'] - CSSのobject-fitプロパティの値（例: 'cover', 'contain', 'fill'）
 * @param {boolean} [props.fill=false] - 親要素いっぱいに画像を広げるかどうか (trueの場合、width/heightは不要になる)
 * @param {boolean} [props.responsive=false] - レスポンシブ画像として表示するかどうか（親要素の幅に合わせて拡縮）
 * @param {string} [props.sizes] - responsive=trueの場合のsizes属性
 */
const ImageOptimizer = ({
  baseName,
  pagePath,
  alt,
  className,
  width,
  height,
  priority = false,
  objectFit = 'cover', // デフォルト値を'cover'に設定
  fill = false,
  responsive = false,
  sizes,
  ...rest // その他の任意のpropsを受け取る
}) => {
  // src プロパティには、Publicディレクトリからの相対パスを渡します。
  // バックエンドで生成した複数サイズのうち、デフォルトとしてミディアムサイズ（md）の画像を使用します。
  // Next.jsのImageコンポーネントが、最適なサイズの画像を自動で選択してくれます。
  const imageSrc = `/image/download/${pagePath}/${baseName}-md.webp`;

  // responsive、fill、width/heightモードの条件分岐
  let imageProps;
  
  if (responsive) {
    // responsiveモード: 親要素の幅に合わせて拡縮
    imageProps = {
      fill: true,
      sizes: sizes || '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
      style: { objectFit: objectFit }
    };
  } else if (fill) {
    // fillモード: 親要素いっぱいに画像を広げる
    imageProps = {
      fill: true,
      style: { objectFit: objectFit }
    };
  } else {
    // width/heightモード: 固定サイズ
    imageProps = {
      width: width || 800,
      height: height || 600,
      style: { objectFit: objectFit }
    };
  }

  // widthとheightが与えられていない場合、警告を出すか、デフォルト値を設定
  if (!responsive && !fill && (!width || !height)) {
    console.warn(`Warning: ImageOptimizer for "${baseName}" is missing width or height props.
    Consider adding them for better performance and CLS prevention, or use the 'fill' or 'responsive' prop.`);
    // ここで適切なデフォルト値を設定
    imageProps.width = imageProps.width || 800;
    imageProps.height = imageProps.height || 600;
  }

  return (
    <Image
      src={imageSrc}
      alt={alt}
      priority={priority} // LCP要素などで優先的に読み込む場合
      className={className}
      {...imageProps} // width, height, style, fillなどを展開
      {...rest} // その他のprops（例: sizesなど）
    />
  );
};

export default ImageOptimizer;