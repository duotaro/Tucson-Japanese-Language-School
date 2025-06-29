// components/download/ImageOptimizer.js

import Image from 'next/image'; // Next.jsのImageコンポーネントをインポート
import React, { useState } from 'react';

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
 * @param {string} [props.responsiveType='standard'] - レスポンシブタイプ: 'hero', 'card', 'thumbnail', 'standard'
 */
const ImageOptimizer = ({
  baseName,
  pagePath,
  alt,
  className = '',
  width,
  height,
  priority = false,
  objectFit = 'cover',
  fill = false,
  responsive = false,
  sizes,
  responsiveType = 'standard',
  ...rest
}) => {
  
  // レスポンシブタイプごとの最適化されたsizes設定
  const responsiveSizes = {
    hero: '100vw',
    card: '(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw',
    thumbnail: '(max-width: 640px) 50vw, (max-width: 768px) 33vw, 20vw',
    standard: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
    fullwidth: '100vw'
  };

  // レスポンシブ用のコンテナクラス
  const responsiveClasses = {
    hero: 'w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] relative',
    card: 'w-full h-full flex items-center justify-center relative',
    thumbnail: 'w-full h-full relative', 
    standard: 'w-full relative',
    fullwidth: 'w-full relative'
  };
  // src プロパティには、Publicディレクトリからの相対パスを渡します。
  // バックエンドで生成した複数サイズのうち、デフォルトとしてミディアムサイズ（md）の画像を使用します。
  // Next.jsのImageコンポーネントが、最適なサイズの画像を自動で選択してくれます。
  
  // 複数の画像パスを試行する順序を定義
  const imagePaths = [
    `/image/download/${pagePath}/${baseName}-md.webp`,
    `/image/download/${pagePath}/${baseName}.webp`,
    `/image/download/${pagePath}/${baseName}-sm.webp`,
    `/image/download/${pagePath}/${baseName}-lg.webp`,
    `/image/download/${pagePath}/${baseName}-xl.webp`,
    `/image/download/${pagePath}/${baseName}-md.jpg`,
    `/image/download/${pagePath}/${baseName}.jpg`,
    `/image/download/${pagePath}/${baseName}-md.jpeg`,
    `/image/download/${pagePath}/${baseName}.jpeg`,
    `/image/download/${pagePath}/${baseName}-md.png`,
    `/image/download/${pagePath}/${baseName}.png`,
    `/image/${pagePath}/${baseName}.jpg`,
    `/image/${pagePath}/${baseName}.jpeg`,
    `/image/${pagePath}/${baseName}.png`,
    `/image/${pagePath}/${baseName}.webp`,
    `/image/blog/image1.jpeg`, // 最終フォールバック
    `/image/logo.png` // 最終フォールバック
  ];
  
  // 画像のフォールバック処理のためのstate
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageSrc = imagePaths[currentImageIndex] || imagePaths[0];

  // 画像読み込みエラー時のフォールバック処理
  const handleImageError = () => {
    if (currentImageIndex < imagePaths.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  // responsive、fill、width/heightモードの条件分岐
  let imageProps;
  
  if (responsive) {
    // responsiveモード: 親要素の幅に合わせて拡縮
    const finalSizes = sizes || responsiveSizes[responsiveType] || responsiveSizes.standard;
    const containerClass = responsiveClasses[responsiveType] || responsiveClasses.standard;
    
    imageProps = {
      fill: true,
      sizes: finalSizes,
      style: { objectFit: objectFit },
      onError: handleImageError
    };

    // レスポンシブコンテナで包む
    return (
      <div className={`${containerClass} overflow-hidden ${className}`}>
        <Image
          src={imageSrc}
          alt={alt}
          priority={priority}
          className="w-full h-full"
          {...imageProps}
          {...rest}
        />
      </div>
    );
  } else if (fill) {
    // fillモード: 親要素いっぱいに画像を広げる
    imageProps = {
      fill: true,
      style: { objectFit: objectFit },
      onError: handleImageError
    };
  } else {
    // width/heightモード: 固定サイズ（モバイルで自動調整）
    const responsiveWidth = width || 800;
    const responsiveHeight = height || 600;
    
    imageProps = {
      width: responsiveWidth,
      height: responsiveHeight,
      style: { 
        objectFit: objectFit,
        width: '100%',
        height: 'auto',
        maxWidth: `${responsiveWidth}px`
      },
      onError: handleImageError
    };
  }

  // widthとheightが与えられていない場合、警告を出すか、デフォルト値を設定
  if (!responsive && !fill && (!width || !height)) {
    console.warn(`Warning: ImageOptimizer for "${baseName}" is missing width or height props.
    Consider adding them for better performance and CLS prevention, or use the 'fill' or 'responsive' prop.`);
    imageProps.width = imageProps.width || 800;
    imageProps.height = imageProps.height || 600;
  }

  return (
    <Image
      src={imageSrc}
      alt={alt}
      priority={priority}
      className={className}
      {...imageProps}
      {...rest}
    />
  );
};

export default ImageOptimizer;