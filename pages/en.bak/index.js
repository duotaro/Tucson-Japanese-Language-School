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
import saveImageIfNeeded from '@/components/download/index.js';
import Mission from '@/components/parts/about/mission/mission.js';
import Vision from '@/components/parts/about/mission/vision.js';
import { convertAboutFromDatabase } from '@/entity/aboutEntity.js';
import About from '@/components/parts/about/index.js';
import Sponsor from '@/components/parts/sponsor/index.js';
import Opportunity from '@/components/parts/contact/opportunity/index.js';
import { getNewsList } from '@/entity/newsEntity.js';
import path from 'path';


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

  // Notionのデータ取得関数（メモリ最適化版）
  const fetchData = async (databaseId, pagePath) => {
    const database = await getDatabase(databaseId);
    let props = [];
    for(let item of database){
      props.push(item.properties);
    }
    // 画像のダウンロードと最適化を実行
    await saveImageIfNeeded(props, pagePath);

    // 必要最小限のデータのみを抽出して返す
    const processedDatabase = await Promise.all(database.map(async (item) => {
      // 必要なプロパティのみを抽出
      const essentialProps = {};
      const imageKeys = ['image', 'image1', 'image2', 'image3', 'image_en'];

      // 必要なプロパティをコピー
      Object.keys(item.properties).forEach(key => {
        const prop = item.properties[key];
        if (imageKeys.includes(key) || prop.type === 'title' || prop.type === 'rich_text' || 
            prop.type === 'date' || prop.type === 'select' || prop.type === 'multi_select' ||
            prop.type === 'checkbox' || prop.type === 'url') {
          essentialProps[key] = prop;
        }
      });

      await Promise.all(imageKeys.map(async (key) => {
        if (essentialProps[key] && essentialProps[key].type === 'files' && essentialProps[key].files[0]) {
          const originalFileName = essentialProps[key].files[0].name;
          const baseName = path.parse(originalFileName.replace(/ /g, '_')).name;
          const altText = essentialProps[key].files[0].caption ? essentialProps[key].files[0].caption[0]?.plain_text : originalFileName;

          essentialProps[key] = {
            ...essentialProps[key],
            optimizedImage: {
              baseName: baseName,
              pagePath: pagePath,
              alt: altText,
              width: 1920,
              height: 1080,
            }
          };
        }
      }));
  
      return {
        id: item.id,
        properties: essentialProps
      };
    }));
    return processedDatabase;
  };

  // 各データの取得と加工
  const sliderList = await fetchData("f2bd94d61f7c45958755562d366af5ea", "slider");
  const sponsors = await fetchData("1e302ac5bce442b797e491aee309e7c4", "sponsor");
  const newsDatabase = await fetchData(newsId, "news");
  const newsList = await getNewsList(newsDatabase, 3);

  const scheduleList = await getDatabase("8d87080f73f14e8a9e7ba934c1d928c6");
  const about = await fetchData("d4eb3828e74c469b9179ca7be9edb5cf", "about");
  const opportunity = await fetchData("d9037016a0524f08adecdbab0c7302b7", "opportunity");

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

