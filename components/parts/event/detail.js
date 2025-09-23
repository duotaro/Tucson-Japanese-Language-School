
import React, { useContext } from "react";
import LocaleContext from "../../context/localeContext";
import { useLocale } from "@/utils/locale";
import EventEntity from "@/entity/eventEntity";
import { getRandomInt } from "@/utils/numberUtils";
import ImageOptimizer from '@/components/download/ImageOptimizer'; // ImageOptimizerのパスを適切に修正
import LocaleLink from "../menu/LocaleLink";

export default function EventDetail({ item, locale="ja" }) {
  const { json } = useLocale(locale)

  let {id, page} = item
  let entity = new EventEntity(page, locale == "ja")
  if(!entity.title || !entity.title.length){
    return <></>
  }


  if(!entity.image){
    if(entity.tag && entity.tag.name == `event`){
      let random = getRandomInt(1,2)
      entity.image = `/image/blog/news${random}.jpeg`
    } else if(entity.tag && entity.tag.name == `announcement`){
      let random = getRandomInt(1,1)
      entity.image = `/image/blog/announcement${random}.jpeg`
    } else {
      let random = getRandomInt(1,5)
      entity.image = `/image/blog/image${random}.jpeg`
    }
  }
  return (
    <LocaleLink href={`/news/event/${id}`} className="block group">
      <div key={entity.id} className="w-full bg-white border border-gray-200 shadow-md rounded-lg card-hover cursor-pointer transition-all duration-200 hover:shadow-lg focus-within:ring-2 focus-within:ring-green-500 focus-within:ring-offset-2">
        <div className="p-6 flex flex-col md:flex-row gap-6">
          {/* Image Section */}
          <div className="image-hover w-full md:w-64 h-48 md:h-32 relative overflow-hidden rounded-lg flex-shrink-0">
            {entity.image && typeof entity.image === 'object' && entity.image.baseName ? (
              <ImageOptimizer
                baseName={entity.image.baseName}
                pagePath={entity.image.pagePath}
                alt={entity.image.alt}
                fill={true}
                objectFit="cover"
                className="rounded-lg"
                responsive={true}
                responsiveType="card"
                priority={false}
                sizes="(max-width: 768px) 100vw, 256px"
              />
            ) : (
              <img
                className="rounded-lg w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                src={entity.image}
                alt={entity.title && entity.title.length > 0 ? entity.title.map(t => t.text.content).join('') : 'Event Image'}
                loading="lazy"
                decoding="async"
              />
            )}
          </div>

          {/* Content Section */}
          <div className="flex-grow flex flex-col justify-between">
            <div>
              {/* Tag and Date */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full hover:bg-green-200 transition-colors duration-200 w-fit">
                  {entity.tag && entity.tag.name ? entity.tag.name : 'イベント'}
                </span>
                <div className="flex items-center text-sm text-gray-500">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  {entity.date}
                </div>
              </div>

              {/* Title */}
              <h3 className="mb-3 text-lg font-bold text-gray-900 line-clamp-2 leading-tight group-hover:text-green-600 transition-colors duration-200">
                {entity.title && entity.title.length > 0 ? entity.title.map(t => t.text.content).join('') : 'タイトルなし'}
              </h3>

              {/* Description */}
              {entity.text && entity.text.length > 0 && (
                <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed mb-3">
                  {entity.text.map(t => t.text.content).join(' ')}
                </p>
              )}
            </div>

            {/* Read More */}
            <div className="flex justify-end">
              <span className="text-green-600 text-sm font-medium group-hover:text-green-700 transition-colors duration-200 inline-flex items-center">
                詳細を見る
                <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </LocaleLink>
  );
}