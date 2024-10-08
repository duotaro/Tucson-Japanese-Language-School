import Head from "next/head";
import Layout from '../../../components/layout'
import React, { useContext } from 'react';
import LocaleContext from "../../../components/context/localeContext";
import { useLocale } from "../../../utils/locale";
import Prepare from "../../../components/parts/prepare";
import Calender from "../../../components/parts/program/calender";
import Section from "../../../components/parts/section";
import { getDatabase } from "../../../lib/notion";


export default function CalendarPage({ list }) {
  const { locale } = useContext(LocaleContext);
  const { json, metaTitleExtension } = useLocale(locale)
  let lang = json.navigation

  return (
    <Layout>
      <Head>
        <title>{lang.calendar} - {metaTitleExtension} </title>
        <meta name="description" content={`${lang.calendar} - ${lang.description}`} />
      </Head>

      <div className="container mt-5 w-full mx-auto">
        {/* <Section py="py-2 md:py-4 lg:py-8"> */}
          <Calender list={list}/>
        {/* </Section> */}
      </div>
    </Layout>
  );
}

// https://www.notion.so/8d87080f73f14e8a9e7ba934c1d928c6?v=24a41206b21d4c62bc6e0c5e05bace7e&pvs=4
export const getStaticProps = async (context) => {
  const database = await getDatabase("8d87080f73f14e8a9e7ba934c1d928c6")
  
  // let props = []
  // for(let item of howto){
  //   props.push(item.properties)
  // }

  // await saveImageIfNeeded(props, "calendar")

  return {
    props: {
      list: database
    },
    revalidate: 1
  };
};
