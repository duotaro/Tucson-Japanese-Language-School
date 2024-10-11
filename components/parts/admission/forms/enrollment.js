


import React, { useContext } from "react";
import Image from "next/image"
import Link from "next/link"
import LocaleContext from "../../../context/localeContext";
import { useLocale } from "../../../../utils/locale";
import Title from "../../text/title";
import Paragraphs from "../../text/paragraphs";
import CustomImage from "../../image/CustomImage";
import Section from "../../section";
import Caution from "../../caution";

export default function Enrollment({ enrollment }) {
  const { locale } = useContext(LocaleContext);
  const { json } = useLocale(locale)

  const list = []
  for(const e of enrollment){
    const entity = new EnrollmentEntity(e, locale == "ja")
    list.push(entity)
  }


  return (
    <Section bg="bg-gray-50">
      <div className="container px-6 mx-auto">
        <div className="mb-5"><Title title={json.navigation.enrollment} fontSize = "text-2xl sm:text-3xl lg:text-4xl"/></div>
        <div className="grid gap-8 lg:grid-flow-col-dense lg:grid-cols-2 md:gap-12">
            {list.map((item) => {
                const bg = "bg-gradient-to-br from-orange-200 to-orange-300"
                return (
                    <div className="flex flex-col items-center  border shadow-lg rounded-lg p-10  ">
                      <Title title={item.title} />
                      <Paragraphs text={item.text} addClass=""/>
                    </div>
                )
            })}
        </div>
        <div className="mt-10">
        <Paragraphs text={`継続者: 既に在籍している学生 \r\n
            住所、緊急連絡先、医療コンディションなどに変更があった場合のみ、上記の書類を再提出してください。(翻訳)`} />
        </div>
      </div>
    </Section>
  );
}


class EnrollmentEntity {
    constructor(item, isJpn){

        this.title = isJpn ? item.properties["title"].title[0].text.content : item.properties["en"].rich_text[0].text.content
        this.text = null
        if(isJpn){
            if(item.properties["text"].rich_text[0]){
                this.text = item.properties["text"].rich_text
            }
        } else {
            if(item.properties["text_en"].rich_text[0]){
                this.text = item.properties["text_en"].rich_text
            }
        }

    }
}
