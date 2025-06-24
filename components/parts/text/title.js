import Link from "next/link";

export default function Title({ 
  title, 
  link = null, 
  level = "h2",      // h1, h2, h3, h4, h5, h6
  size = "h2",       // display, h1, h2, h3, h4, h5, h6, body-lg, body, body-sm, caption
  responsive = true, // レスポンシブ適用するか
  className = ""     // 追加のクラス
}) {
  
  // レスポンシブサイズマッピング
  const responsiveSizes = {
    display: "text-display xs:text-5xl sm:text-6xl lg:text-7xl",
    h1: "text-h1 xs:text-2xl sm:text-3xl lg:text-4xl",
    h2: "text-h2 xs:text-xl sm:text-2xl lg:text-3xl", 
    h3: "text-h3 xs:text-lg sm:text-xl lg:text-2xl",
    h4: "text-h4 xs:text-base sm:text-lg lg:text-xl",
    h5: "text-h5 xs:text-sm sm:text-base lg:text-lg",
    h6: "text-h6 xs:text-xs sm:text-sm lg:text-base"
  };

  // サイズクラスを決定
  const sizeClass = responsive && responsiveSizes[size] 
    ? responsiveSizes[size] 
    : `text-${size}`;

  // HTMLタグを決定
  const Tag = level;
  
  // 基本クラス
  const baseClasses = "font-semibold text-center text-gray-900";
  const combinedClasses = `${baseClasses} ${sizeClass} ${className}`.trim();
    
  return (
    <Tag className={combinedClasses}>
      {link ? (
        <a href={link} target="_blank" className="hover:text-blue-600 link-underline">
          {title}
        </a>
      ) : (
        title
      )}
    </Tag>
  );
}
