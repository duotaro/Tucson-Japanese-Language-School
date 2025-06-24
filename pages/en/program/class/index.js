import Head from "next/head";
import Layout from '@/components/layout'
import React, { useContext } from 'react';
import LocaleContext from "@/components/context/localeContext";
import { useLocale } from "@/utils/locale";

import { getDatabase } from "@/lib/notion";
import saveImageIfNeeded from "@/components/download/index"
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

  return (
    <Layout breadcrumb={breadcrumb}>
      <Head>
        <title>{lang.class} - {metaTitleExtension} </title>
        <meta name="description" content={`${lang.class} - ${lang.description}`} />
      </Head>
      <div className="">
        <div className="row">
          <ClassComponent category={category} classes={classes} />
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps = async (context) => {
  
  const category = await getDatabase("11aa8c0ecf8c80ed885ff949e5ee51bb")
  const classes = await getDatabase("11aa8c0ecf8c80a7ab2cf31cd0b0a881")
  
  let props = []
  for(let item of classes){
    props.push(item.properties)
  }
  await saveImageIfNeeded(props, "class")
  

  return {
    props: {
      category: category,
      classes: classes
    }
  };
};
