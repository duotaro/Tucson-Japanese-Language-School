


import React, { useContext } from "react";
import Image from "next/image"
import Link from "next/link"
import LocaleContext from "../../../context/localeContext";
import { useLocale } from "@/utils/locale";
import Title from "../../text/title";
import Paragraphs from "../../text/paragraphs";
import CustomImage from "../../image/CustomImage";
import Section from "../../section";

export default function Qualification({ qualification, locale="ja" }) {
  const { json } = useLocale(locale)

  const list = []
  for(const q of qualification){
    const entity = new QualificationEntity(q, locale == "ja")
    list.push(entity)
  }


  return (
    <Section >
      <div className="container px-6 mx-auto">
        <div className="flex flex-col items-center text-center mb-10">
          <Title title={json.navigation.qualification} fontSize="text-2xl sm:text-3xl lg:text-4xl"/>
        </div>
        <div className="grid gap-8 lg:grid-cols-2 md:gap-12">
            {list.map((item, index) => {
                return (
                    <div key={index} className="bg-white border border-gray-200 shadow-md rounded-lg p-6 card-hover">
                      <div className="flex flex-col items-center text-center">
                        <Title title={item.title} fontSize="text-xl font-semibold mb-4"/>
                        <Paragraphs text={item.text} maxWidth="full"/>
                      </div>
                    </div>
                )
            })}
        </div>
      </div>
    </Section>
  );
}


class QualificationEntity {
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
