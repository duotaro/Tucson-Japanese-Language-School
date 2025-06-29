import Head from "next/head";
import Layout from '@/components/layout'
import React, { useContext } from 'react';
import LocaleContext from "@/components/context/localeContext";
import { useLocale } from "@/utils/locale";
import Title from "@/components/parts/text/title";
import Paragraphs from "@/components/parts/text/paragraphs";
import Sponsor from "@/components/parts/sponsor";
import SponsorEntity from "@/entity/sponsorEntity";
import { getDatabase } from "@/lib/notion";
import SponsorRequest from "@/components/parts/sponsor/request";
import HowToDonate from "@/components/parts/sponsor/howto";
// import { fetchDataWithOptimizedImages } from "@/lib/imageUtils";
import { generateAlternateLinks } from '@/utils/seoUtils.js';


export default function SupportPageEn({ sponsors, support, sponsor, donation, howto }) {
  const locale = "en"
  const { json, metaTitleExtension } = useLocale(locale)
  let lang = json.navigation

  let sponsorList = []

  for(let item of sponsors){
    let sponsor = new SponsorEntity(item)
    sponsorList.push(sponsor)
  }

  const alternateLinks = generateAlternateLinks("/support");

  let breadcrumb = {
    parents: [],
    current: lang.support
  }



  return (
    <Layout breadcrumb={breadcrumb}>
      <Head>
        <title>{lang.support} - {metaTitleExtension} </title>
        <meta name="description" content={`${lang.support} - ${lang.description}`} />
        <link rel="alternate" hrefLang="ja" href={alternateLinks.ja} />
        <link rel="alternate" hrefLang="en" href={alternateLinks.en} />
        <link rel="alternate" hrefLang="x-default" href={alternateLinks.default} />
      </Head>

      <div className="py-5 justify-center items-center">
        <div className="w-full px-4 pb-5">
          <Title title={lang.donation} />
        </div>
        <Sponsor sponsor={sponsorList} bg="bg-white" locale={locale}/>
        <SponsorRequest support={support} sponsor={sponsor} donation={donation} locale={locale}/>
        <HowToDonate howto={howto} locale={locale}/>
      </div>
    </Layout>
  );
}


export const getStaticProps = async (context) => {
  const { fetchDataWithOptimizedImages } = await import('@/lib/imageUtils.js');
  const database = await getDatabase("1e302ac5bce442b797e491aee309e7c4")
  const support = await getDatabase("10ca8c0ecf8c8039a51bdd38f640a34e")
  const sponsor = await getDatabase("10ea8c0ecf8c80eeae62cc2050b7e7f7")
  const donation = await getDatabase("10ea8c0ecf8c801b802bc2b43a3ecf91")
  const howto = await fetchDataWithOptimizedImages("10ca8c0ecf8c8081a8a0e9a9a6166cc1", "howto")

  return {
    props: {
      sponsors: database,
      support: support[0],
      sponsor: sponsor[0],
      donation: donation[0],
      howto: howto
    }
  };
};
