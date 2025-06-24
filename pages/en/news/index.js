import Head from "next/head";
import Layout from '@/components/layout'
import { useLocale } from "@/utils/locale";
import LocaleContext from "@/components/context/localeContext";
import React, { useContext } from 'react';
import News from "@/components/parts/news";
import { getNewsFromNotion, getNewsList } from "@/entity/newsEntity";
import { generateAlternateLinks } from "@/utils/imageUtils";



export const databaseId = process.env.NEXT_PUBLIC_NOTION_DATABASE_ID;

export default function NewsPage({ list }) {
  const locale = "en"
  const { json, metaTitleExtension } = useLocale(locale)
  let lang = json.navigation

  let breadcrumb = {
    parents: [],
    current: lang.news
  }

  const alternateLinks = generateAlternateLinks("/news");
  
  return (
    <Layout breadcrumb={breadcrumb}>
      <Head>
        <title>{lang.news} - {metaTitleExtension} </title>
        <meta name="description" content={`${lang.about} - ${lang.description}`} />
        <link rel="alternate" hrefLang="ja" href={alternateLinks.ja} />
        <link rel="alternate" hrefLang="en" href={alternateLinks.en} />
        <link rel="alternate" hrefLang="x-default" href={alternateLinks.default} />
      </Head>
      <News list={list} isTop={false} locale={locale}/>
    </Layout>
  );
}

export const getStaticProps = async (context) => {
  // get news
  let database = await getNewsFromNotion()
  let list = await getNewsList(database, null)
  
  return {
    props: {
      list: list
    }
  };
};