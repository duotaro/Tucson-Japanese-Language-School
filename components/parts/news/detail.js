


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
  return (
    <LocaleLink href={`/news/${id}`} className="block group h-full">
      <div key={entity.id} className="max-w-xd lg:max-w-sm bg-white border border-gray-200 shadow-md rounded-lg card-hover cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 h-full flex flex-col">
          
          <div className="p-6 flex flex-col flex-grow">
          <div className="mb-4 image-hover w-full aspect-video relative">
            {entity.image && typeof entity.image === 'object' && entity.image.baseName ? (
              <ImageOptimizer
                baseName={entity.image.baseName}
                pagePath={entity.image.pagePath}
                alt={entity.image.alt}
                responsive={true}
                responsiveType="card"
                objectFit="cover"
                className="rounded-lg"
                loading="lazy"
                placeholder="blur"
              />
            ) : (
              // フォールバック画像の場合
              <img
                src={entity.image}
                alt="News"
                className="object-cover object-center rounded-lg w-full h-full absolute inset-0"
              />
            )}
          </div>
          <h2 className="text-h4 xs:text-base sm:text-lg lg:text-xl font-semibold mt-4 min-h-[3rem] overflow-hidden" style={{ 
              display: '-webkit-box', 
              WebkitLineClamp: 2, 
              WebkitBoxOrient: 'vertical',
              lineHeight: '1.5em',
              maxHeight: '3em'
            }}>
              {entity.title.map((title) => {
                  return title.href ? (
                      <span className="link-secondary " key={title.text.content}>{title.text.content}</span>
                  ) : (
                      <span key={title.text.content} className="link-secondary ">{title.text.content}</span>
                  )
              })}
          </h2>
          {entity.text && (
              <div className="min-h-[2.5rem] my-3 text-body-sm leading-relaxed text-gray-500 flex-grow overflow-hidden" style={{
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                lineHeight: '1.25rem',
                maxHeight: '2.5rem'
              }}>
              {entity.text.map((text) => {
                  return text.href ? (
                      <span className="link-secondary" key={text.text.content}>{text.text.content}</span>
                  ) : (
                      <span key={text.text.content}>{text.text.content}</span>
                  )
              })}
              </div>
          )}
          <div className="mt-auto pt-4 text-center">
            <span className="px-3 py-2 text-body-sm rounded-md bg-blue-600 text-white btn-animate focus-ring inline-block group-hover:bg-blue-700 transition-colors duration-200">
              {json.common.show_more}
            </span>
          </div>
          </div>
      </div>
    </LocaleLink>
  );
}
