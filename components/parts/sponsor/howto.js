


import React, { useContext, useState } from "react";
import LocaleContext from "../../context/localeContext";
import Link from "next/link";
import { useLocale } from "../../../utils/locale";
import Section from "../section";
import Title from "../text/title";
import Paragraphs from "../text/paragraphs";
import { GlobeAsiaAustraliaIcon } from "@heroicons/react/24/outline";
import ContributionAccordion from "../menu/accordion";

export default function HowToDonate({ howto }) {
  const { locale } = useContext(LocaleContext);
  const { json } = useLocale(locale)
  const isJpn = locale == "ja"


  let resList = []
  for(let item of howto){
    let res = {
        ordering: null,
        title: "",
        text: "",
        btnLabel: null,
        btnLink: null,
        tag: null
    }
    res.ordering = item.properties["ordering"].number
    res.title = isJpn ? item.properties["title"].title[0].text.content : item.properties["en"].rich_text[0].text.content
    res.text = isJpn ? item.properties["text"].rich_text : item.properties["text_en"].rich_text

    res.tag =  item.properties["tag"].select.name
    res.image = `/image/components/donation/${res.tag}.jpeg`
    if(isJpn){
        if(item.properties["btn_label"].rich_text[0]){
            res.btnLabel = item.properties["btn_label"].rich_text[0].text.content
            res.btnLink = item.properties["btn_link"].url
        }
    } else {
        if(item.properties["btn_label_en"].rich_text[0]){
            res.btnLabel = item.properties["btn_label_en"].rich_text[0].text.content
            res.btnLink = item.properties["btn_link"].url
        } 
    }
    resList.push(res)
  }    

  resList.sort((a, b) => a.ordering - b.ordering);

  return (
    
    <Section py="py-8 md:py-12 lg:py-20" bg="bg-gray-100">
    <div className="container px-6 mx-auto text-center" >
      <Title title={`${resList.length}つの方法で貢献する（翻訳）`} />
    </div>
    <div className="mb-4 ">
      <div className="w-full">
        <ContributionAccordion list={resList} />
        {/* {resList.map((item) => {
          return (
            <div className="flex flex-col p-5 lg:flex-row">
                <div className="text-center hidden lg:block">
                    <img className="h-80 w-80 sm:w-[14rem] sm:h-[14rem] flex-shrink-0 object-cover rounded-full" src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" alt="" />
                </div>

                <div className="flex flex-col mt-6 ">
                    <div className="flex flex-row p-5 items-center justify-center gap-4">
                      <img className="h-80 w-80 sm:w-[5rem] sm:h-[5rem] flex-shrink-0 object-cover rounded-full" src={item.image} alt="" />
                      <Title title={item.title} fontSize="text-lg  sm:text-xl "/>
                    </div>
                    <Paragraphs text={item.text} />
                    {item.btnLabel && (
                    <div className="mt-6 sm:-mx-2">
                        <a href="#" className="inline-flex items-center justify-center w-full px-4 text-sm py-2.5 overflow-hidden text-white transition-colors duration-300 bg-gray-900 rounded-lg shadow sm:w-auto sm:mx-2 hover:bg-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                            <GlobeAsiaAustraliaIcon  className="w-5 h-5 mx-2 fill-current" />
                            <span className="mx-2">
                                {item.btnLabel}
                            </span>
                        </a>
                    </div>
                    )}
                </div>
            </div>
          )
        })} */}
      </div>
    </div>

  </Section>
  );
}
