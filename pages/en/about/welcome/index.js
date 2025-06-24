import Head from "next/head";
import Layout from '@/components/layout'
import React, { useContext } from 'react';
import LocaleContext from "@/components/context/localeContext";
import { useLocale } from "@/utils/locale";
import { getDatabase } from "@/lib/notion";
import Greeting from "@/components/parts/about/welcome/greetings";
import OurStory from "@/components/parts/about/welcome/our_story";
import History from "@/components/parts/about/welcome/history";
import { fetchDataWithOptimizedImages, generateAlternateLinks } from "@/utils/imageUtils";

export default function AboutPage({ welcome }) {
  const locale = "en"
  const { json, metaTitleExtension } = useLocale(locale)
  let lang = json.navigation

  let {greeting, story, history} = welcome

  const alternateLinks = generateAlternateLinks("/about/welcome");

  let breadcrumb = {
    parents: [{link: '/about/', title: "about"}],
    current: lang.welcome
  }

  return (
    <Layout breadcrumb={breadcrumb}>
      <Head>
        <title>{lang.welcome} - {metaTitleExtension} </title>
        <meta name="description" content={`${lang.welcome} - ${lang.description}`} />
        <link rel="alternate" hrefLang="ja" href={alternateLinks.ja} />
        <link rel="alternate" hrefLang="en" href={alternateLinks.en} />
        <link rel="alternate" hrefLang="x-default" href={alternateLinks.default} />
      </Head>

      <div className="">
        <div className="row">
          <Greeting greeting={greeting} locale={locale}/>
          <OurStory story={story} locale={locale}/>
          <History history={history} locale={locale}/>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps = async (context) => {

  // get about
  let welcome = await getWelcome()
  return {
    props: {
      welcome: welcome
    }
  };
};

const getWelcome = async () => {
  const greeting = await fetchDataWithOptimizedImages("5ceb6b37e4584fa39fb78161869d885f", "greeting")
  const story = await getDatabase("02ed913f2ebe4151b0235d91a9306403")
  const history = await fetchDataWithOptimizedImages("15c93b4fe6154400902a623b20c6fe49", "history")

  return {
    "greeting": greeting[0],
    "story": story[0],
    "history": history[0],
  }
}
