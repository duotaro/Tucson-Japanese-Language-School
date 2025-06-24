


import React, { useContext } from "react";
import LocaleContext from "../../context/localeContext";
import { useLocale } from "@/utils/locale";
import Section from "../section";
import Title from "../text/title";
import Paragraphs from "../text/paragraphs";
import { GlobeAsiaAustraliaIcon } from "@heroicons/react/24/outline";

const createEntity = (item, isJpn) => {

  let res = {
    title: "",
    text: "",
    btnLabel: null,
    btnLink: null,
    tag: null
  }
  res.title = isJpn ? item.properties["title"].title[0].text.content : item.properties["en"].rich_text[0].text.content
  res.text = isJpn ? item.properties["text"].rich_text[0].text.content : item.properties["text_en"].rich_text[0].text.content

  if(item.properties["btn_label"]){
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
  }
  return res
}

export default function SponsorRequest({ support, sponsor, donation }) {
  const { locale } = useContext(LocaleContext);
  const { json } = useLocale(locale)

  const supportEntity = createEntity(support, locale == "ja")
  const sponsorEntity = createEntity(sponsor, locale == "ja")
  const donationEntity = createEntity(donation, locale == "ja")

  return (
    <>
      <Section py="py-8 md:py-12 lg:py-20" >
          <div className="container px-6 mx-auto">
            <div className="flex flex-col items-center mb-5 ">
              <Title title={supportEntity.title} />
            </div>
            <div className="grid items-center gap-8">
              <div className="flex flex-col items-center ">
                <Paragraphs text={supportEntity.text} maxWidth="full"/>
                {supportEntity.btnLabel && (
                  <div className="mt-6 sm:-mx-2">
                      <a href="#" className="inline-flex items-center justify-center w-full px-4 text-sm py-2.5 overflow-hidden text-white transition-colors duration-300 bg-gray-900 rounded-lg shadow sm:w-auto sm:mx-2 hover:bg-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                          <GlobeAsiaAustraliaIcon  className="w-5 h-5 mx-2 fill-current" />
                          <span className="mx-2">
                              {supportEntity.btnLabel}
                          </span>
                      </a>
                  </div>
                  )}
              </div>
            </div>
          </div>
      </Section>
      <Section py="py-8 md:py-12 lg:py-20" bg="bg-gray-200">
        <div className="container px-6 mx-auto">
          <div className="flex flex-col items-center mb-5 ">
            <Title title={sponsorEntity.title} />
          </div>
          <div className="grid items-center gap-8">
            <div className="flex flex-col items-center ">
              <Paragraphs text={sponsorEntity.text} maxWidth="full"/>

              {sponsorEntity.btnLabel && (
                  <div className="mt-6 sm:-mx-2">
                      <a href="#" className="inline-flex items-center justify-center w-full px-4 text-sm py-2.5 overflow-hidden text-white transition-colors duration-300 bg-gray-900 rounded-lg shadow sm:w-auto sm:mx-2 hover:bg-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                          <GlobeAsiaAustraliaIcon className="w-5 h-5 mx-2 fill-current" />
                          <span className="mx-2">
                              {sponsorEntity.btnLabel}
                          </span>
                      </a>
                  </div>
                )}
            </div>
          </div>
        </div>
      </Section>
      <Section py="py-8 md:py-12 lg:py-20" >
          <div className="container px-6 mx-auto">
            <div className="flex flex-col items-center mb-5 ">
              <Title title={donationEntity.title} />
            </div>
            <div className="grid items-center gap-8">
              <div className="flex flex-col items-center ">
                <Paragraphs text={donationEntity.text} maxWidth="full"/>
                  {donationEntity.btnLabel && (
                  <div className="mt-6 sm:-mx-2">
                      <a href="#" className="inline-flex items-center justify-center w-full px-4 text-sm py-2.5 overflow-hidden text-white transition-colors duration-300 bg-gray-900 rounded-lg shadow sm:w-auto sm:mx-2 hover:bg-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                          <GlobeAsiaAustraliaIcon  className="w-5 h-5 mx-2 fill-current" />
                          <span className="mx-2">
                              {donationEntity.btnLabel}
                          </span>
                      </a>
                  </div>
                  )}
              </div>
            </div>
          </div>
      </Section>
    </>
  );
}
