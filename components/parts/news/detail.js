


import React, { useContext } from "react";
import LocaleContext from "../../context/localeContext";
import Link from "next/link";
import { useLocale } from "@/utils/locale";
import NewsEntity from "@/entity/newsEntity";
import { getRandomInt } from "@/utils/numberUtils";
import { ACCESABLE_IMAGE_PATH } from "@/const";
import Image from "next/image";
import LocaleLink from "../menu/LocaleLink";

export default function NewsDetail({ item, locale="ja" }) {
  const { json } = useLocale(locale)

  let {id, page} = item
  let entity = new NewsEntity(page, locale == "ja")

  if(!entity.title.length){
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
    <div key={entity.id} className="max-w-xd lg:max-w-sm shadow-md rounded-xl bg-slate-100">
        
        <div className="mt-3p-5 bg-gray-100border-2 border-t-0 rounded-b-lg">
        <div className="relative h-48">
          <Image loading="lazy" src={entity.image} width={200} height={100} style={{ objectFit: 'cover' }} className="object-cover object-center rounded-t-lg w-full h-full absolute inset-0" />
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
