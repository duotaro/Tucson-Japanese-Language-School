import Head from "next/head";
import Layout from '@/components/layout'
import React, { useContext } from 'react';
import LocaleContext from "@/components/context/localeContext";
import { useLocale } from "@/utils/locale";

import { getDatabase } from "@/lib/notion";
// import { fetchDataWithOptimizedImages } from "@/lib/imageUtils";
import { generateAlternateLinks } from '@/utils/seoUtils.js';
import ClassComponent from "@/components/parts/program/class";
import Title from "@/components/parts/text/title";


export default function ClassPage({ category, classes }) {
  const locale = "en"
  const { json, metaTitleExtension } = useLocale(locale)
  let lang = json.navigation

  let breadcrumb = {
    parents: [{link: '/program/', title: "program"}],
    current: lang.class
  }

  const alternateLinks = generateAlternateLinks("/program/class");

  return (
    <Layout breadcrumb={breadcrumb}>
      <Head>
        <title>{lang.class} - {metaTitleExtension} </title>
        <meta name="description" content={`${lang.class} - ${lang.description}`} />
        <link rel="alternate" hrefLang="ja" href={alternateLinks.ja} />
        <link rel="alternate" hrefLang="en" href={alternateLinks.en} />
        <link rel="alternate" hrefLang="x-default" href={alternateLinks.default} />
      </Head>
      <div className="">
        <div className="row">
          <ClassComponent category={category} classes={classes} locale={locale} />
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps = async (context) => {
  const { fetchDataWithOptimizedImages } = await import('@/lib/imageUtils.js');
  
  const category = await getDatabase("11aa8c0ecf8c80ed885ff949e5ee51bb")
  const classes = await fetchDataWithOptimizedImages("11aa8c0ecf8c80a7ab2cf31cd0b0a881", "class")
  

  return {
    props: {
      category: category,
      classes: classes
    }
  };
};
