'use client'; // クライアントサイドコンポーネントとして設定する場合

import Image from 'next/image';

const CustomImage = ({src, alt, addClass = "md:col-start-1", hClass = "h-80 md:h-52 lg:h-72 xl:h-96" }) => {

  return (
    <div className={`relative w-full ${hClass} ${addClass} `}>
      <Image
        src={src}
        alt={alt}
        layout="fill" // 親要素に合わせてリサイズ
        objectFit="cover" // または 'contain' など
        className="rounded-lg"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
};

export default CustomImage