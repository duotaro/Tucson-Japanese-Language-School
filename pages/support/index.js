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
import saveImageIfNeeded from "@/components/download";


export default function SupportPage({ sponsors, support, sponsor, donation, howto }) {
  const locale = "ja"
  const { json, metaTitleExtension } = useLocale(locale)
  let lang = json.navigation

  let sponsorList = []

  for(let item of sponsors){
    let sponsor = new SponsorEntity(item)
    sponsorList.push(sponsor)
  }

  let breadcrumb = {
    parents: [],
    current: lang.support
  }

  return (
    <Layout breadcrumb={breadcrumb}>
      <Head>
        <title>{lang.support} - {metaTitleExtension} </title>
        <meta name="description" content={`${lang.support} - ${lang.description}`} />
      </Head>

      <div className="py-5 justify-center items-center">
        <div className="w-full px-4 pb-5">
          <Title title={lang.donation} />
        </div>
        <Sponsor sponsor={sponsorList} bg="bg-white"/>
        <SponsorRequest support={support} sponsor={sponsor} donation={donation}/>
        <HowToDonate howto={howto} />
      </div>
    </Layout>
  );
}


export const getStaticProps = async (context) => {
  const database = await getDatabase("1e302ac5bce442b797e491aee309e7c4")
  const support = await getDatabase("10ca8c0ecf8c8039a51bdd38f640a34e")
  const sponsor = await getDatabase("10ea8c0ecf8c80eeae62cc2050b7e7f7")
  const donation = await getDatabase("10ea8c0ecf8c801b802bc2b43a3ecf91")
  const howto = await getDatabase("10ca8c0ecf8c8081a8a0e9a9a6166cc1")
  
  let props = []
  for(let item of howto){
    props.push(item.properties)
  }

  await saveImageIfNeeded(props, "howto")

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
