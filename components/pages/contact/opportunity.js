import Head from "next/head";
import React from 'react';
import { useLocale } from "../../../utils/locale";
import OpportunityDetail from "../../parts/contact/opportunity/detail.js";
import Title from "../../parts/text/title";
import Paragraphs from "../../parts/text/paragraphs";
import Section from "../../parts/section";

export default function OpportunityPage({ opportunities, general, locale }) {
  const { json, metaTitleExtension } = useLocale(locale)
  let lang = json.navigation

  const title = locale == "ja" ? general?.properties["title"]?.title[0]?.text?.content : general?.properties["en"]?.rich_text[0]?.text?.content
  let text = ""
  if(locale == "ja"){
    if(general?.properties["text"]?.rich_text[0]){
        text = general.properties["text"].rich_text[0].text.content
    }
  } else {
    if(general?.properties["text_en"]?.rich_text[0]){
        text = general.properties["text_en"].rich_text[0].text.content
    }
  }

  let breadcrumb = {
    parents: [{link: "/contact", title: "contact"}],
    current: lang.opportunity
  }

  return (
    <>
      <Head>
        <title>{lang.opportunity} - {metaTitleExtension} </title>
        <meta name="description" content={`${lang.opportunity} - ${json?.navigation?.description || lang.opportunity}`} />
        
        {/* Language alternatives for SEO */}
        <link rel="alternate" hrefLang="ja" href="https://tjschool.org/contact/opportunity/" />
        <link rel="alternate" hrefLang="en" href="https://tjschool.org/en/contact/opportunity/" />
        <link rel="alternate" hrefLang="x-default" href="https://tjschool.org/contact/opportunity/" />
      </Head>

      <div className="">
        <Section px="px-0 md:px-20 lg:px-28 xl:px-40">
          <div className="container px-2 mx-auto justify-center m-4">
            <div className="flex flex-col w-full px-4 justify-center items-center mb-5">
              <Title title={title} />
              <Paragraphs text={text} maxWidth="full"/>
            </div>
            <OpportunityDetail opportunities={opportunities || []} locale={locale}/>
          </div>
        </Section>
      </div>
    </>
  );
}