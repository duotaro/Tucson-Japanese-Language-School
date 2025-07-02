import Head from "next/head";
import React from 'react';
import { useLocale } from "../../../utils/locale";
import Greeting from "../../parts/about/welcome/greetings";
import OurStory from "../../parts/about/welcome/our_story";
import History from "../../parts/about/welcome/history";

export default function WelcomePage({ welcome, locale }) {
  const { json, metaTitleExtension } = useLocale(locale)
  let lang = json.navigation

  let {greeting, story, history} = welcome || {}

  let breadcrumb = {
    parents: [{link: locale === 'en' ? '/en/about/' : '/about/', title: "about"}],
    current: lang.welcome
  }

  return (
    <>
      <Head>
        <title>{lang.welcome} - {metaTitleExtension} </title>
        <meta name="description" content={`${lang.welcome} - ${json?.navigation?.description || lang.welcome}`} />
        
        {/* Language alternatives for SEO */}
        <link rel="alternate" hrefLang="ja" href="https://tjschool.org/about/welcome/" />
        <link rel="alternate" hrefLang="en" href="https://tjschool.org/en/about/welcome/" />
        <link rel="alternate" hrefLang="x-default" href="https://tjschool.org/about/welcome/" />
      </Head>

      <div className="">
        <div className="row">
          <Greeting greeting={greeting} locale={locale}/>
          <OurStory story={story} locale={locale}/>
          <History history={history} locale={locale}/>
        </div>
      </div>
    </>
  );
}