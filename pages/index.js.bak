import React, { useContext } from 'react';
import Head from "next/head.js";
import { useLocale } from "../utils/locale";
import { getDatabase } from "../lib/notion.js";
import Layout from '../components/layout.js'
export const databaseId = process.env.NEXT_PUBLIC_NOTION_DATABASE_ID;
export const newsId = process.env.NEXT_PUBLIC_NOTION_NEWS_DATABASE_ID;
import SliderList from '../components/parts/slider/index.js';
import News from '../components/parts/news/index.js';
import SponsorEntity from '../entity/sponsorEntity.js';
import { fetchGss } from '../lib/appscript.js';
import LocaleContext from '../components/context/localeContext.js';
import saveImageIfNeeded from '../components/download/index.js'; // ★ `saveImageIfNeeded` をインポート
import Calender from '../components/parts/calender/index.js';
import Mission from '../components/parts/about/mission/mission.js';
import Vision from '../components/parts/about/mission/vision.js';
import Faq from '../components/parts/faq/index.js';
import { convertAboutFromDatabase } from '../entity/aboutEntity.js';
import About from '../components/parts/about/index.js';
import Sponsor from '../components/parts/sponsor/index.js';
import Opportunity from '../components/parts/contact/opportunity/index.js';
import { getNewsList } from '../entity/newsEntity.js';
import path from 'path'; // ★ path モジュールをインポート

export default function Home({ sliderList, sponsors, newsList, scheduleList, about, opportunity }) {
  const { locale } = useContext(LocaleContext);
  const { json, metaTitleExtension } = useLocale(locale)
  let lang = json.navigation
  let sponsorList = []

  // ★ sponsors データは `getStaticProps` で既に加工されていることを想定
  for(let item of sponsors){
    let sponsor = new SponsorEntity(item, locale === "ja") // === で厳密比較を推奨
    sponsorList.push(sponsor)
  }

  // ★ about データも `getStaticProps` で既に加工されていることを想定
  let {aboutSchool, mission, vision} = convertAboutFromDatabase(about, locale === "ja") // === で厳密比較を推奨

  return (
    <Layout>
      <Head>
        <title>{metaTitleExtension}</title>
        <meta name="description" content={locale === 'ja' ? 'ツーソン日本語学校は、アリゾナ州ツーソンで日本語教育を提供する学校です。子どもから大人まで、日本語と日本文化を学ぶ機会を提供しています。' : 'Tucson Japanese Language School provides Japanese language education and cultural programs for children and adults in Tucson, Arizona.'} />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Language alternatives for SEO */}
        <link rel="alternate" hrefLang="ja" href="https://tjschool.org/" />
        <link rel="alternate" hrefLang="en" href="https://tjschool.org/en/" />
        <link rel="alternate" hrefLang="x-default" href="https://tjschool.org/" />
        
        {/* Open Graph */}
        <meta property="og:title" content={metaTitleExtension} />
        <meta property="og:description" content={locale === 'ja' ? 'ツーソン日本語学校は、アリゾナ州ツーソンで日本語教育を提供する学校です。子どもから大人まで、日本語と日本文化を学ぶ機会を提供しています。' : 'Tucson Japanese Language School provides Japanese language education and cultural programs for children and adults in Tucson, Arizona.'} />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:title" content={metaTitleExtension} />
        <meta name="twitter:description" content={locale === 'ja' ? 'ツーソン日本語学校は、アリゾナ州ツーソンで日本語教育を提供する学校です。子どもから大人まで、日本語と日本文化を学ぶ機会を提供しています。' : 'Tucson Japanese Language School provides Japanese language education and cultural programs for children and adults in Tucson, Arizona.'} />
        
        {/* 追加のメタタグ */}
        <meta name="keywords" content={locale === 'ja' ? '日本語学校,ツーソン,アリゾナ,日本語教育,日本文化,子ども,大人,クラス' : 'Japanese school,Tucson,Arizona,Japanese education,Japanese culture,children,adults,classes'} />
        <meta name="author" content="Tucson Japanese Language School" />
      </Head>
      <div className="">
        <div className="row">
          <SliderList sliderList={sliderList} />
          <News list={newsList} isTop={true} />
          <About about={aboutSchool} isTop={true}/>
          <Mission mission={mission} />
          <Vision vision={vision}/>
          <Opportunity opportunity={opportunity} />
          {/* <Faq /> */}
          <Sponsor sponsor={sponsorList} />
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
  const newsDatabase = await fetchData(newsId, "news"); // newsListはgetNewsListでさらに加工されるため、ここで加工済みNotionブロックを渡す
  const newsList = await getNewsList(newsDatabase, 3); // getNewsListはNotionの生のブロックを受け取ると仮定

  const scheduleList = await getDatabase("8d87080f73f14e8a9e7ba934c1d928c6"); // カレンダーは画像がないと仮定
  const about = await fetchData("d4eb3828e74c469b9179ca7be9edb5cf", "about");
  const opportunity = await fetchData("d9037016a0524f08adecdbab0c7302b7", "opportunity");

  return {
    props: {
      sliderList: sliderList,
      sponsors: sponsors,
      newsList: newsList, // getNewsListの返り値をそのまま渡す
      scheduleList: scheduleList,
      about: about,
      opportunity: opportunity
    }
  };
};

// ★ 以下の getSlider, getNews, getSponsors, getAbout, getOpportunity 関数は不要になります。
// ★ 上記の fetchData 関数と getStaticProps 内での直接呼び出しに置き換わるため、削除してください。
/*
const getSlider = async () => {
  const topBannerId = "f2bd94d61f7c45958755562d366af5ea"
  const database = await getDatabase(topBannerId)
  let props = []
  for(let item of database){
    props.push(item.properties)
  }
  await saveImageIfNeeded(props, "slider")
  return database;
}

const getNews = async (limit = null) => {
  const database = await getDatabase(newsId)
  let props = []
  for(let item of database){
      props.push(item.properties)
  }
  await saveImageIfNeeded(props, "news")

  let params = await getNewsList(database, limit)
  return params
}

const getSponsors = async () => {
  const database = await getDatabase("1e302ac5bce442b797e491aee309e7c4")
  let props = []
  for(let item of database){
    props.push(item.properties)
  }

  await saveImageIfNeeded(props, "sponsor")
  return database
}

const getCalender = async () => {
  const database = await getDatabase("8d87080f73f14e8a9e7ba934c1d928c6")
  return database
}

const getAbout = async () => {
  const database = await getDatabase("d4eb3828e74c469b9179ca7be9edb5cf")
  let props = []
  for(let item of database){
    props.push(item.properties)
  }

  await saveImageIfNeeded(props, "about")
  return database
}

const getOpportunity = async () => {
  const database = await getDatabase("d9037016a0524f08adecdbab0c7302b7")
  let props = []
  for(let item of database){
    props.push(item.properties)
  }

  await saveImageIfNeeded(props, "opportunity")
  return database
}
*/
let getNewsFromGSS = async () => {
  let news = await fetchGss("news")
  let sponsors = await fetchGss("sponsors")

  return {
    news,
    sponsors
  }
}