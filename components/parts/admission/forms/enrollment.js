


import React, { useContext } from "react";
import LocaleContext from "../../../context/localeContext";
import { useLocale } from "@/utils/locale";
import Title from "../../text/title";
import Paragraphs from "../../text/paragraphs";
import Section from "../../section";

export default function Enrollment({ enrollment, locale="ja" }) {
  const { json } = useLocale(locale)

  const list = []
  for(const e of enrollment){
    const entity = new EnrollmentEntity(e, locale == "ja")
    list.push(entity)
  }


  return (
    <Section >
      <div className="container px-6 mx-auto">
        <div className="mb-5"><Title title={json.navigation.enrollment} fontSize = "text-2xl sm:text-3xl lg:text-4xl"/></div>
        <div className="grid gap-8 lg:grid-flow-col-dense lg:grid-cols-2 xl:grid-cols-3 lg:gap-12">
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
        <Paragraphs text={json.enrollment.attention} />
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
