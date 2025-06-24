import Head from "next/head";
import Layout from '@/components/layout'
import React, { useContext } from 'react';
import LocaleContext from "@/components/context/localeContext";
import { useLocale } from "@/utils/locale";
import Calender from "@/components/parts/program/calender";
import { getDatabase } from "@/lib/notion";
import saveImageIfNeeded from "@/components/download/index"
import savePdfIfNeeded from "@/components/download/pdf"

export default function CalendarPage({ files, list }) {
  const { locale } = useContext(LocaleContext);
  const { json, metaTitleExtension } = useLocale(locale)
  let lang = json.navigation
  let breadcrumb = {
    parents: [{link: '/program/', title: "program"}],
    current: lang.calendar
  }

  return (
    <Layout breadcrumb={breadcrumb}>
      <Head>
        <title>{lang.calendar} - {metaTitleExtension} </title>
        <meta name="description" content={`${lang.calendar} - ${lang.description}`} />
      </Head>

      <div className="w-full mx-auto">
        {/* <Section py="py-2 md:py-4 lg:py-8"> */}
          <Calender files={files} list={list}/>
        {/* </Section> */}
      </div>
    </Layout>
  );
}

export const getStaticProps = async (context) => {
  const files = await getDatabase("11aa8c0ecf8c803e8289cb5bd9a5f80a")
  const list = await getDatabase("8d87080f73f14e8a9e7ba934c1d928c6")
  
  console.log(files)
  let props = []
  for(let item of files){
    props.push(item.properties)
  }

  await saveImageIfNeeded(props, "calendar")
  await savePdfIfNeeded(props, "calendar")
  // if(props && props.length){
  //   //await saveImageIfNeeded(props, "calendar")
  //   await savePdfIfNeeded(props, "calendar")
  // }
  console.log(props)
  

  return {
    props: {
      files: files[0],
      list: list
    }
  };
};
