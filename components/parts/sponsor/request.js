import React from "react";
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
  
  if (item?.properties?.["title"]?.title?.[0]?.text?.content) {
    res.title = isJpn ? item.properties["title"].title[0].text.content : item.properties["en"]?.rich_text?.[0]?.text?.content || "";
  }
  
  if (item?.properties?.["text"]?.rich_text?.[0]?.text?.content) {
    res.text = isJpn ? item.properties["text"].rich_text[0].text.content : item.properties["text_en"]?.rich_text?.[0]?.text?.content || "";
  }

  if(item?.properties?.["btn_label"]){
    if(isJpn){
      if(item.properties["btn_label"].rich_text?.[0]){
            res.btnLabel = item.properties["btn_label"].rich_text[0].text.content
            res.btnLink = item.properties["btn_link"]?.url
        }
    } else {
        if(item.properties["btn_label_en"]?.rich_text?.[0]){
            res.btnLabel = item.properties["btn_label_en"].rich_text[0].text.content
            res.btnLink = item.properties["btn_link"]?.url
        } 
    }
  }
  return res
}

export default function SponsorRequest({ support, sponsor, donation, locale = "ja" }) {
  // Default values for when data is not available
  const defaultSupport = {
    title: "支援・寄付のお願い",
    text: "ツーソン日本語補習授業校では、できるだけ授業料を抑え、多くの方に本校のプログラムを利用していただけるよう、また財政安定化のサポートとして下記の学校支援プログラムがあります。皆様のご協力をよろしくお願いいたします。",
    btnLabel: null,
    btnLink: null
  };

  const defaultSponsor = {
    title: "企業・団体協賛",
    text: "ツーソン補習校で一生懸命日本語を学ぶ子供たちのためのよりよい環境作りのために、本校のもたらす教育的、文化的価値を理解いただいた上で、ご協賛いただけるツーソン地域の企業、団体を募集しています。協賛していただいた方々には御礼広告をさせていただきます。一口20ドルと、お手軽にご協賛していただけます。協賛方法等、詳しくはこちらから。",
    btnLabel: "今すぐ協賛金を送る",
    btnLink: "https://tucsonhosyuko.square.site/"
  };

  const defaultDonation = {
    title: "寄付のお願い",
    text: "本校は手作りの小さな学校ですので、地域の皆様の助けが大きな力となります。個人様よりギフト、寄付金、または特に現地では入手しにくい日本語の本や辞書、日本文化伝承に役立つもの（折り紙、カルタ、鯉のぼり等）、また学校用品等の寄付も随時受け付けています。Non-profit organization 501(c)(3)としてご協力していただいた寄付金はCharitable contributionとして税金控除の対象になります。",
    btnLabel: "寄付する",
    btnLink: "https://tucsonhosyuko.square.site/"
  };

  const supportEntity = support ? createEntity(support, locale === "ja") : defaultSupport;
  const sponsorEntity = sponsor ? createEntity(sponsor, locale === "ja") : defaultSponsor;
  const donationEntity = donation ? createEntity(donation, locale === "ja") : defaultDonation;

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
                      <a href={supportEntity.btnLink} className="inline-flex items-center justify-center w-full px-4 text-sm py-2.5 overflow-hidden text-white transition-colors duration-300 bg-gray-900 rounded-lg shadow sm:w-auto sm:mx-2 hover:bg-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                          <GlobeAsiaAustraliaIcon className="w-5 h-5 mx-2 fill-current" />
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
                      <a href={sponsorEntity.btnLink} className="inline-flex items-center justify-center w-full px-4 text-sm py-2.5 overflow-hidden text-white transition-colors duration-300 bg-gray-900 rounded-lg shadow sm:w-auto sm:mx-2 hover:bg-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
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
                      <a href={donationEntity.btnLink} className="inline-flex items-center justify-center w-full px-4 text-sm py-2.5 overflow-hidden text-white transition-colors duration-300 bg-gray-900 rounded-lg shadow sm:w-auto sm:mx-2 hover:bg-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                          <GlobeAsiaAustraliaIcon className="w-5 h-5 mx-2 fill-current" />
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