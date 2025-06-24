


import React, { useContext } from "react";
import LocaleContext from "../../context/localeContext";
import { useLocale } from "@/utils/locale";
import NewsEntity from "@/entity/newsEntity";
import { getRandomInt } from "@/utils/numberUtils";
import ImageOptimizer from '@/components/download/ImageOptimizer'; // ImageOptimizerのパスを適切に修正
import LocaleLink from "../menu/LocaleLink";

export default function NewsDetail({ item, locale="ja" }) {
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
  // console.log(entity.image)
  return (
    <div key={entity.id} className="max-w-xd lg:max-w-sm bg-white border border-gray-200 shadow-md rounded-lg card-hover">
        
        <div className="p-6">
        <div className="mb-4 image-hover">
          {entity.image && typeof entity.image === 'object' && entity.image.baseName ? (
            <ImageOptimizer
              baseName={entity.image.baseName}
              pagePath={entity.image.pagePath}
              alt={entity.image.alt}
              responsive={true}
              responsiveType="card"
              objectFit="cover"
              className="rounded-lg"
            />
          ) : (
            // フォールバック画像の場合
            <div className="w-full aspect-video relative">
              <img
                src={entity.image}
                alt="News"
                className="object-cover object-center rounded-lg w-full h-full absolute inset-0"
              />
            </div>
          )}
        </div>
        <h2 className="text-h4 xs:text-base sm:text-lg lg:text-xl font-semibold mt-4 " style={{
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
            <div className="line-clamp-2 min-h-10 max-w-md my-3 text-body-sm leading-relaxed text-gray-500 ">
            {entity.text.map((text) => {
                return text.href ? (
                    <a href={text.href} target="_blank" className="link-secondary" key={text.text.content}>{text.text.content}</a>
                ) : (
                    <span key={text.text.content}>{text.text.content}</span>
                )
            })}
            </div>
        )}
        <div className="mt-4 text-center">
          <LocaleLink href={`/news/${id}`} className="px-3 py-2 text-body-sm rounded-md bg-blue-600 text-white hover:bg-blue-700 btn-animate focus-ring">
            {json.common.show_more}
          </LocaleLink>
        </div>
        </div>
    </div>
  );
}
