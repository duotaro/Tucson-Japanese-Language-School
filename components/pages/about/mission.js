import Head from "next/head";
import React from 'react';
import { useLocale } from "../../../utils/locale";
import { convertAboutFromDatabase } from "../../../entity/aboutEntity";
import Mission from "../../parts/about/mission/mission.js";
import Philosophy from "../../parts/about/mission/philosophy.js";
import Policy from "../../parts/about/mission/policy.js";
import Vision from "../../parts/about/mission/vision.js";

export default function MissionPage({ about, philosophy, policy, locale }) {
  const { json, metaTitleExtension } = useLocale(locale)
  let lang = json.navigation

  let {mission, vision} = convertAboutFromDatabase(about, locale == "ja")
  let breadcrumb = {
    parents: [{link: locale === 'en' ? '/en/about/' : '/about/', title: "about"}],
    current: lang.mission
  }

  return (
    <>
      <Head>
        <title>{lang.mission} - {metaTitleExtension} </title>
        <meta name="description" content={`${lang.mission} - ${lang.description}`} />
        
        {/* Language alternatives for SEO */}
        <link rel="alternate" hrefLang="ja" href="https://tjschool.org/about/mission/" />
        <link rel="alternate" hrefLang="en" href="https://tjschool.org/en/about/mission/" />
        <link rel="alternate" hrefLang="x-default" href="https://tjschool.org/about/mission/" />
      </Head>

      <div className="">
        <div className="row">
          <Mission mission={mission} />
          <Vision vision={vision} />
          <Philosophy philosophy={philosophy?.[0]} locale={locale}/>
          <Policy policy={policy?.[0]} locale={locale}/>
        </div>
      </div>
    </>
  );
}