import Head from "next/head";
import React from 'react';
import { useLocale } from "../../utils/locale";
import Title from "../parts/text/title";
import Sponsor from "../parts/sponsor/index.js";
import SponsorEntity from "../../entity/sponsorEntity.js";
import SponsorRequest from "../parts/sponsor/request";
import HowToDonate from "../parts/sponsor/howto";

export default function SupportPage({ sponsors, support, sponsor, donation, howto, locale }) {
  const { json, metaTitleExtension } = useLocale(locale)
  let lang = json.navigation

  let sponsorList = []

  if (sponsors && sponsors.length > 0) {
    for(let item of sponsors){
      let sponsorItem = new SponsorEntity(item, locale === "ja")
      sponsorList.push(sponsorItem)
    }
  }

  return (
    <>
      <Head>
        <title>{lang.support} - {metaTitleExtension} </title>
        <meta name="description" content={`${lang.support} - ${json?.navigation?.description || lang.support}`} />
        
        {/* Language alternatives for SEO */}
        <link rel="alternate" hrefLang="ja" href="https://tjschool.org/support/" />
        <link rel="alternate" hrefLang="en" href="https://tjschool.org/en/support/" />
        <link rel="alternate" hrefLang="x-default" href="https://tjschool.org/support/" />
      </Head>

      <div className="py-5 justify-center items-center">
        <div className="w-full px-4 pb-5">
          <Title title={lang.donation || "協賛・寄付について"} />
        </div>
        {sponsorList.length > 0 && (
          <Sponsor sponsor={sponsorList} bg="bg-white"/>
        )}
        <SponsorRequest support={support} sponsor={sponsor} donation={donation} locale={locale}/>
        <HowToDonate howto={howto} locale={locale} />
      </div>
    </>
  );
}