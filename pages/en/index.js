import React, { useContext } from 'react';
import Head from "next/head.js";
import { useLocale } from "@/utils/locale";
import { getDatabase } from "@/lib/notion.js";
import Layout from '@/components/layout.js'
export const databaseId = process.env.NEXT_PUBLIC_NOTION_DATABASE_ID;
export const newsId = process.env.NEXT_PUBLIC_NOTION_NEWS_DATABASE_ID;
import SliderList from '@/components/parts/slider/index.js';
import News from '@/components/parts/news/index.js';
import SponsorEntity from '@/entity/sponsorEntity.js';
import LocaleContext from '@/components/context/localeContext.js';
import { fetchDataWithOptimizedImages } from '@/utils/imageUtils.js';
import Mission from '@/components/parts/about/mission/mission.js';
import Vision from '@/components/parts/about/mission/vision.js';
import { convertAboutFromDatabase } from '@/entity/aboutEntity.js';
import About from '@/components/parts/about/index.js';
import Sponsor from '@/components/parts/sponsor/index.js';
import Opportunity from '@/components/parts/contact/opportunity/index.js';
import { getNewsList } from '@/entity/newsEntity.js';


export default function Home({ sliderList, sponsors, newsList, scheduleList, about, opportunity }) {
  const locale = "en"
  const { json, metaTitleExtension } = useLocale(locale)
  let lang = json.navigation
  let sponsorList = []

  for(let item of sponsors){
    let sponsor = new SponsorEntity(item, locale == "ja")
    sponsorList.push(sponsor)
  }

  let {aboutSchool, mission, vision} = convertAboutFromDatabase(about, locale == "ja")

  return (
    <Layout>
      <Head>
        <title>{metaTitleExtension}</title>
        <meta name="description" content={`${lang.title} - ${lang.description}`} />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Language alternatives for SEO */}
        <link rel="alternate" hrefLang="ja" href="https://tjschool.org/" />
        <link rel="alternate" hrefLang="en" href="https://tjschool.org/en/" />
        <link rel="alternate" hrefLang="x-default" href="https://tjschool.org/" />
      </Head>
      <div className="">
        <div className="row">
          <SliderList sliderList={sliderList} locale={locale}/>  
          <News list={newsList} isTop={true} locale={locale}/>  
          <About about={aboutSchool} isTop={true} locale={locale}/>  
          <Mission mission={mission} locale={locale}/>  
          <Vision vision={vision} locale={locale}/>  
          <Opportunity opportunity={opportunity} locale={locale}/>  
          <Sponsor sponsor={sponsorList} locale={locale}/>  
        </div>{/* .row */}
      </div>{/* .container */}
    </Layout>
  );
}

export const getStaticProps = async (context) => {

  // get slider
  let sliderList = await getSlider()

  // get sponsor
  let sponsors = await getSponsors()

  // get news
  let newsList = await getNews(3)
  // 件数フィルター

  // get calender
  let scheduleList = await getCalender()

  // get about
  let about = await getAbout()


  let opportunity = await getOpportunity()
  return {
    props: {
      sliderList: sliderList,
      sponsors: sponsors,
      newsList: newsList,
      scheduleList: scheduleList,
      about: about,
      opportunity: opportunity
    }
  };
};

/**
 * get slider info
 * @returns list [SliderEntity]
 */
const getSlider = async () => {
  const topBannerId = "f2bd94d61f7c45958755562d366af5ea"
  return await fetchDataWithOptimizedImages(topBannerId, "slider");
}


const getNews = async (limit = null) => {
  const database = await fetchDataWithOptimizedImages(newsId, "news");
  let params = await getNewsList(database, limit)
  return params
}

const getSponsors = async () => {
  return await fetchDataWithOptimizedImages("1e302ac5bce442b797e491aee309e7c4", "sponsor");
}

const getCalender = async () => {
  const database = await getDatabase("8d87080f73f14e8a9e7ba934c1d928c6")
  return database
}

const getAbout = async () => {
  return await fetchDataWithOptimizedImages("d4eb3828e74c469b9179ca7be9edb5cf", "about");
}

const getOpportunity = async () => {
  return await fetchDataWithOptimizedImages("d9037016a0524f08adecdbab0c7302b7", "opportunity");
}
