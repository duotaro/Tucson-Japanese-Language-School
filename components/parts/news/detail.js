


import React, { useContext } from "react";
import LocaleContext from "../../context/localeContext";
import { useLocale } from "@/utils/locale";
import NewsEntity from "@/entity/newsEntity";
import { getRandomInt } from "@/utils/numberUtils";
import ImageOptimizer from '@/components/download/ImageOptimizer'; // ImageOptimizerのパスを適切に修正
import LocaleLink from "../menu/LocaleLink";

export default function NewsDetail({ item }) {
  const { locale } = useContext(LocaleContext);
  const { json } = useLocale(locale)

  let {id, page} = item
  let entity = new NewsEntity(page, locale == "ja")
  if(!entity.title && !entity.title.length){
    return <></>
  }


  if(!entity.image){
    if(entity.tag.name == `news`){
      let random = getRandomInt(1,2)
      entity.image = `/image/blog/news${random}.jpeg`
    } else if(entity.tag.name == `announcement`){
      let random = getRandomInt(1,1)
      entity.image = `/image/blog/announcement${random}.jpeg`
    } else {
      let random = getRandomInt(1,5)
      entity.image = `/image/blog/image${random}.jpeg`
    }
  }
  console.log(entity.image)
  return (
    <div key={entity.id} className="max-w-xd lg:max-w-sm shadow-md rounded-xl bg-slate-100">
        
        <div className="mt-3p-5 bg-gray-100border-2 border-t-0 rounded-b-lg">
        <div className="relative h-48">
          <ImageOptimizer
            baseName={entity.image.baseName}
            pagePath={entity.image.pagePath}
            alt={entity.image.alt}
            // widthとheightは `next/image` で必須です。
            // Notionから取得できるなら `entity.image.optimizedImage.width` を使うのが理想です。
            // なければ、この画像が実際に表示される最大幅と、そのアスペクト比に合う高さを設定します。
            width={entity.image.width || 200}
            height={entity.image.height || 100}
            objectFit="cover" // ★ CSSの object-fit: cover; と同じ効果
            className="object-cover object-center rounded-t-lg w-full h-full absolute inset-0"
            // loading="lazy" は ImageOptimizer のデフォルトで有効なので、propsとして渡す必要はありません。
          />
        </div>
        <h2 className="text-lg font-black mt-2 px-3 " style={{
            minHeight: "3em",
            lineHeight: "1.5em",
            overflow: "hidden"
            }}>
            {entity.title.map((title) => {
                return title.href ? (
                    <a href={title.href} target="_blank" className="link-secondary " key={title.text.content}>{title.text.content}</a>
                ) : (
                    <p key={title.text.content} className="link-secondary ">{title.text.content}</p>
                )
            })}
        </h2>
        {entity.text && (
            <div className="line-clamp-2 px-3 min-h-10 max-w-md my-3 text-md font-light leading-relaxed text-gray-500 ">
            {entity.text.map((text) => {
                return text.href ? (
                    <a href={text.href} target="_blank" className="link-secondary" key={text.text.content}>{text.text.content}</a>
                ) : (
                    <span key={text.text.content}>{text.text.content}</span>
                )
            })}
            </div>
        )}
        <div className="mb-5 text-center">
          <LocaleLink href={`/news/${id}`} className="px-3 py-2 text-md transition-colors rounded-md bg-blue-600 text-white hover:bg-blue-700">
            {json.common.show_more}
          </LocaleLink>
        </div>
        </div>
    </div>
  );
}
