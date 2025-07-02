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
import LocaleContext from '../components/context/localeContext.js';
import saveImageIfNeeded from '../components/download/index.js';
import savePdfIfNeeded from '../components/download/pdf.js';
import Mission from '../components/parts/about/mission/mission.js';
import Vision from '../components/parts/about/mission/vision.js';
import { convertAboutFromDatabase } from '../entity/aboutEntity.js';
import About from '../components/parts/about/index.js';
import Sponsor from '../components/parts/sponsor/index.js';
import Opportunity from '../components/parts/contact/opportunity/index.js';
import { getNewsList } from '../entity/newsEntity.js';
import path from 'path';

// Other page components
import WelcomePage from '../components/pages/about/welcome.js';
import MissionPage from '../components/pages/about/mission.js';
import GovernancePage from '../components/pages/about/governance.js';
import StaffPage from '../components/pages/about/staff.js';
import ReportPage from '../components/pages/about/report.js';
import ClassPage from '../components/pages/program/class.js';
import CalendarPage from '../components/pages/program/calendar.js';
import EventsPage from '../components/pages/program/events.js';
import KanjiKenteiPage from '../components/pages/program/kanji_kentei.js';
import FormsPage from '../components/pages/admissions/forms.js';
import NewsIndexPage from '../components/pages/news/index.js';
import NewsDetailPage from '../components/pages/news/detail.js';
import SupportPage from '../components/pages/support.js';
import ContactPage from '../components/pages/contact/index.js';
import OpportunityPage from '../components/pages/contact/opportunity.js';

export default function DynamicPage({ pageType, slug, locale: pageLocale, ...pageProps }) {
  // 静的生成時に確定した言語を使用（クライアントサイドの判定に依存しない）
  const currentLocale = pageLocale;
  const actualSlug = slug || [];
  const { json, metaTitleExtension } = useLocale(currentLocale);

  // Home page
  if (pageType === 'home') {
    const { sliderList, sponsors, newsList, scheduleList, about, opportunity } = pageProps;
    let sponsorList = [];

    for(let item of sponsors){
      let sponsor = new SponsorEntity(item, currentLocale === "ja");
      sponsorList.push(sponsor);
    }

    let {aboutSchool, mission, vision} = convertAboutFromDatabase(about, currentLocale === "ja");

    return (
      <Layout locale={currentLocale}>
        <Head>
          <title>{metaTitleExtension}</title>
          <meta name="description" content={currentLocale === 'ja' ? 'ツーソン日本語学校は、アリゾナ州ツーソンで日本語教育を提供する学校です。子どもから大人まで、日本語と日本文化を学ぶ機会を提供しています。' : 'Tucson Japanese Language School provides Japanese language education and cultural programs for children and adults in Tucson, Arizona.'} />
          <meta name="language" content={currentLocale} />
          <meta httpEquiv="content-language" content={currentLocale} />
          <link rel="icon" href="/favicon.ico" />
          
          {/* Language alternatives for SEO */}
          <link rel="alternate" hrefLang="ja" href="https://tjschool.org/" />
          <link rel="alternate" hrefLang="en" href="https://tjschool.org/en/" />
          <link rel="alternate" hrefLang="x-default" href="https://tjschool.org/" />
          
          {/* Open Graph with language specification */}
          <meta property="og:title" content={metaTitleExtension} />
          <meta property="og:description" content={currentLocale === 'ja' ? 'ツーソン日本語学校は、アリゾナ州ツーソンで日本語教育を提供する学校です。子どもから大人まで、日本語と日本文化を学ぶ機会を提供しています。' : 'Tucson Japanese Language School provides Japanese language education and cultural programs for children and adults in Tucson, Arizona.'} />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content={currentLocale === 'ja' ? 'ja_JP' : 'en_US'} />
          <meta property="og:url" content={currentLocale === 'ja' ? 'https://tjschool.org/' : 'https://tjschool.org/en/'} />
          
          {/* Twitter Card */}
          <meta name="twitter:title" content={metaTitleExtension} />
          <meta name="twitter:description" content={currentLocale === 'ja' ? 'ツーソン日本語学校は、アリゾナ州ツーソンで日本語教育を提供する学校です。子どもから大人まで、日本語と日本文化を学ぶ機会を提供しています。' : 'Tucson Japanese Language School provides Japanese language education and cultural programs for children and adults in Tucson, Arizona.'} />
          
          {/* 追加のメタタグ */}
          <meta name="keywords" content={currentLocale === 'ja' ? '日本語学校,ツーソン,アリゾナ,日本語教育,日本文化,子ども,大人,クラス' : 'Japanese school,Tucson,Arizona,Japanese education,Japanese culture,children,adults,classes'} />
          <meta name="author" content="Tucson Japanese Language School" />
        </Head>
        <div className="">
          <div className="row">
            <SliderList sliderList={sliderList} locale={currentLocale} />
            <News list={newsList} isTop={true} locale={currentLocale} />
            <About about={aboutSchool} isTop={true} locale={currentLocale} />
            <Mission mission={mission} locale={currentLocale} />
            <Vision vision={vision} locale={currentLocale} />
            <Opportunity opportunity={opportunity} locale={currentLocale} />
            <Sponsor sponsor={sponsorList} locale={currentLocale} />
          </div>
        </div>
      </Layout>
    );
  }

  // Route to appropriate page component
  const renderPageComponent = () => {
    // Handle news detail pages
    if (pageType.startsWith('news/') && actualSlug.length === 2) {
      const newsId = actualSlug[1];
      return <NewsDetailPage {...pageProps} locale={currentLocale} newsId={newsId} />;
    }
    
    switch (pageType) {
      case 'about':
        return <WelcomePage {...pageProps} locale={currentLocale} />;
      case 'about/welcome':
        return <WelcomePage {...pageProps} locale={currentLocale} />;
      case 'about/mission':
        return <MissionPage {...pageProps} locale={currentLocale} />;
      case 'about/governance':
        return <GovernancePage {...pageProps} locale={currentLocale} />;
      case 'about/staff':
        return <StaffPage {...pageProps} locale={currentLocale} />;
      case 'about/report':
        return <ReportPage {...pageProps} locale={currentLocale} />;
      case 'program':
        return <ClassPage {...pageProps} locale={currentLocale} />;
      case 'program/class':
        return <ClassPage {...pageProps} locale={currentLocale} />;
      case 'program/calendar':
        return <CalendarPage {...pageProps} locale={currentLocale} />;
      case 'program/events':
        return <EventsPage {...pageProps} locale={currentLocale} />;
      case 'program/kanji_kentei':
        return <KanjiKenteiPage {...pageProps} locale={currentLocale} />;
      case 'admissions':
        return <FormsPage {...pageProps} locale={currentLocale} />;
      case 'admissions/forms':
        return <FormsPage {...pageProps} locale={currentLocale} />;
      case 'news':
        return <NewsIndexPage {...pageProps} locale={currentLocale} />;
      case 'support':
        return <SupportPage {...pageProps} locale={currentLocale} />;
      case 'contact':
        return <ContactPage {...pageProps} locale={currentLocale} />;
      case 'contact/opportunity':
        return <OpportunityPage {...pageProps} locale={currentLocale} />;
      default:
        return <div>Page not found</div>;
    }
  };

  return (
    <Layout locale={currentLocale}>
      {renderPageComponent()}
    </Layout>
  );
}

export async function getStaticPaths() {
  // Generate paths for both languages
  const paths = [];
  
  // Get news items for dynamic paths
  let newsPaths = [];
  try {
    const newsDatabase = await getDatabase(newsId);
    newsPaths = newsDatabase.map(item => ({ params: { slug: ['news', item.id] } }));
  } catch (error) {
    console.log('Error fetching news for paths:', error);
  }
  
  // Japanese paths (root)
  const japanesePages = [
    { params: { slug: [] } }, // Home page
    { params: { slug: ['about'] } },
    { params: { slug: ['about', 'welcome'] } },
    { params: { slug: ['about', 'mission'] } },
    { params: { slug: ['about', 'governance'] } },
    { params: { slug: ['about', 'staff'] } },
    { params: { slug: ['about', 'report'] } },
    { params: { slug: ['program'] } },
    { params: { slug: ['program', 'class'] } },
    { params: { slug: ['program', 'calendar'] } },
    { params: { slug: ['program', 'events'] } },
    { params: { slug: ['program', 'kanji_kentei'] } },
    { params: { slug: ['admissions'] } },
    { params: { slug: ['admissions', 'forms'] } },
    { params: { slug: ['news'] } },
    { params: { slug: ['support'] } },
    { params: { slug: ['contact'] } },
    { params: { slug: ['contact', 'opportunity'] } },
    ...newsPaths
  ];

  // English paths (/en prefix)
  const englishPages = japanesePages.map(page => ({
    params: { slug: ['en', ...page.params.slug] }
  }));

  paths.push(...japanesePages, ...englishPages);

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const slug = params?.slug || [];
  let locale = 'ja';
  let actualSlug = slug;

  // Check if this is an English route
  if (slug[0] === 'en') {
    locale = 'en';
    actualSlug = slug.slice(1);
  }

  const pageType = actualSlug.length === 0 ? 'home' : actualSlug.join('/');

  // Lightweight fetch data for better performance
  const fetchData = async (databaseId, pagePath, limit = null) => {
    try {
      const database = await getDatabase(databaseId);
      if (!database || !Array.isArray(database)) {
        console.warn(`No data found for database ID: ${databaseId}`);
        return [];
      }
      
      const limitedDatabase = limit ? database.slice(0, limit) : database;
      
      let props = [];
      for(let item of limitedDatabase){
        props.push(item.properties);
      }
      await saveImageIfNeeded(props, pagePath);

      const processedDatabase = await Promise.all(limitedDatabase.map(async (item) => {
        const essentialProps = {};
        // Reduce image processing for better performance
        const imageKeys = ['image', 'image1'];
        const fileKeys = ['pdf']; // PDFファイルプロパティを追加

        Object.keys(item.properties).forEach(key => {
          const prop = item.properties[key];
          // Include essential property types
          if (imageKeys.includes(key) || fileKeys.includes(key) || prop.type === 'title' || prop.type === 'rich_text' || 
              prop.type === 'date' || prop.type === 'select' || prop.type === 'multi_select' ||
              prop.type === 'checkbox' || prop.type === 'url') {
            essentialProps[key] = prop;
          }
          // Include specific essential properties by name
          if (['tags', 'en', 'text', 'text_en', 'title', 'date'].includes(key)) {
            essentialProps[key] = prop;
          }
        });

        // Simplified image processing
        if (essentialProps.image && essentialProps.image.type === 'files' && essentialProps.image.files[0]) {
          const originalFileName = essentialProps.image.files[0].name;
          const baseName = path.parse(originalFileName.replace(/ /g, '_')).name;
          
          essentialProps.image = {
            ...essentialProps.image,
            optimizedImage: {
              baseName: baseName,
              pagePath: pagePath,
              alt: originalFileName,
              width: 800,
              height: 600,
            }
          };
        }
    
        return {
          id: item.id,
          properties: essentialProps
        };
      }));
      return processedDatabase;
    } catch (error) {
      console.error(`Error fetching data for database ${databaseId}:`, error);
      return [];
    }
  };

  let props = { pageType, slug: actualSlug, locale };

  // Home page data - optimized for performance
  const isDev = process.env.NODE_ENV === 'development';
  if (pageType === 'home') {
    const sliderList = await fetchData("f2bd94d61f7c45958755562d366af5ea", "slider", isDev ? 3 : null);
    const sponsors = await fetchData("1e302ac5bce442b797e491aee309e7c4", "sponsor", isDev ? 6 : null);
    const newsDatabase = await fetchData(newsId, "news", isDev ? 10 : null);
    const newsList = await getNewsList(newsDatabase, isDev ? 3 : null);
    // Minimal scheduleList data
    const scheduleDatabase = await getDatabase("8d87080f73f14e8a9e7ba934c1d928c6");
    const scheduleList = isDev ? scheduleDatabase.slice(0, 5) : scheduleDatabase;
    const about = await fetchData("d4eb3828e74c469b9179ca7be9edb5cf", "about", isDev ? 3 : null);
    const opportunity = await fetchData("d9037016a0524f08adecdbab0c7302b7", "opportunity", isDev ? 1 : null);

    props = {
      ...props,
      sliderList,
      sponsors,
      newsList,
      scheduleList,
      about,
      opportunity
    };
  }

  // Add specific page data fetching logic for different page types
  
  // Handle news detail pages
  if (pageType.startsWith('news/') && actualSlug.length === 2) {
    const newsItemId = actualSlug[1];
    try {
      const newsItem = await getDatabase(newsId);
      const foundItem = newsItem.find(item => item.id === newsItemId);
      if (foundItem) {
        props.newsItem = foundItem;
      }
    } catch (error) {
      console.log('Error fetching news item:', error);
    }
  }
  
  // Add specific page data for different page types
  if (pageType === 'about' || pageType === 'about/welcome') {
    try {
      const greeting = await fetchData("5ceb6b37e4584fa39fb78161869d885f", "greeting", isDev ? 1 : null);
      const story = await getDatabase("02ed913f2ebe4151b0235d91a9306403");
      const history = await fetchData("15c93b4fe6154400902a623b20c6fe49", "history", isDev ? 1 : null);
      
      props.welcome = {
        "greeting": greeting[0],
        "story": story[0],
        "history": history[0],
      };
    } catch (error) {
      console.log('Error fetching welcome data:', error);
    }
  } else if (pageType === 'about/mission') {
    try {
      const about = await fetchData("d4eb3828e74c469b9179ca7be9edb5cf", "about", isDev ? 3 : null);
      
      // Philosophy DBの正しいIDを使用
      let philosophy = [];
      try {
        philosophy = await fetchData("f40ad3a82b894969a6a1b0ee0bfcb0cf", "philosophy", isDev ? 1 : null);
      } catch (philosophyError) {
        console.warn('Philosophy database error:', philosophyError);
        philosophy = [];
      }
      
      // Policy DBの正しいIDを使用
      let policy = [];
      try {
        // 開発環境でもPolicyは制限なしで取得（PDFプロパティを確実に取得するため）
        policy = await fetchData("105a8c0ecf8c8082a456dd95fd87d0c2", "policy", null);
        
        // PolicyデータにPDFファイルがある場合、savePdfIfNeededを実行
        if (policy && policy.length > 0) {
          let policyProps = [];
          for(let item of policy){
            policyProps.push(item.properties);
          }
          await savePdfIfNeeded(policyProps, "policy");
        }
      } catch (policyError) {
        console.warn('Policy database error:', policyError);
        policy = [];
      }
      
      props.about = about || [];
      props.philosophy = philosophy || [];
      props.policy = policy || [];
    } catch (error) {
      console.log('Error fetching mission data:', error);
      props.about = [];
      props.philosophy = [];
      props.policy = [];
    }
  } else if (pageType === 'about/governance') {
    try {
      // Directors
      const directorsDatabase = await getDatabase("10ba8c0ecf8c807ba7c6c7c9128d9770");
      let directorProps = [];
      for(let item of directorsDatabase || []){
        directorProps.push(item.properties);
      }
      await saveImageIfNeeded(directorProps, "director");
      
      // Organization Chart
      const orgChartDatabase = await getDatabase("10ca8c0ecf8c80629eb3ee7c40cf9005");
      let chartProps = [];
      for(let item of orgChartDatabase || []){
        chartProps.push(item.properties);
      }
      await saveImageIfNeeded(chartProps, "org_chart");
      
      // Organization Policies
      const org_policysDatabase = await getDatabase("10ca8c0ecf8c80998e3bfb0372ccc293");
      let policyProps = [];
      for(let item of org_policysDatabase || []){
        policyProps.push(item.properties);
      }
      await savePdfIfNeeded(policyProps, "org_policy");
      
      props.directors = directorsDatabase || [];
      props.orgChart = orgChartDatabase && orgChartDatabase.length > 0 ? orgChartDatabase[0] : null;
      props.org_policys = org_policysDatabase || [];
    } catch (error) {
      console.log('Error fetching governance data:', error);
      props.directors = [];
      props.orgChart = null;
      props.org_policys = [];
    }
  } else if (pageType === 'about/staff') {
    try {
      const roleList = await getDatabase("122a8c0ecf8c80059934c64693cc39ca");
      const staffDatabase = await getDatabase("9b85f554b3fc42dcb9d38f1ec87b168c");
      
      // スタッフ画像の保存処理
      let staffProps = [];
      for(let staff of staffDatabase || []){
        staffProps.push(staff.properties);
      }
      await saveImageIfNeeded(staffProps, "staff");
      
      props.staffList = staffDatabase || [];
      props.roleList = roleList || [];
    } catch (error) {
      console.log('Error fetching staff data:', error);
      props.staffList = [];
      props.roleList = [];
    }
  } else if (pageType === 'about/report') {
    try {
      const reportList = await fetchData("11aa8c0ecf8c803e8289cb5bd9a5f80a", "report", null);
      
      // レポートにPDFファイルがある場合、savePdfIfNeededを実行
      if (reportList && reportList.length > 0) {
        let reportProps = [];
        for(let item of reportList){
          reportProps.push(item.properties);
        }
        await savePdfIfNeeded(reportProps, "report");
      }
      
      props.reportList = reportList || [];
    } catch (error) {
      console.log('Error fetching report data:', error);
      props.reportList = [];
    }
  } else if (pageType === 'program' || pageType === 'program/class') {
    try {
      const category = await getDatabase("11aa8c0ecf8c80ed885ff949e5ee51bb");
      const classes = await getDatabase("11aa8c0ecf8c80a7ab2cf31cd0b0a881");
      
      // クラス画像の保存処理
      let classProps = [];
      for(let item of classes || []){
        classProps.push(item.properties);
      }
      await saveImageIfNeeded(classProps, "class");
      
      props.category = category || [];
      props.classes = classes || [];
    } catch (error) {
      console.log('Error fetching class data:', error);
      props.category = [];
      props.classes = [];
    }
  } else if (pageType === 'news') {
    try {
      const newsDatabase = await fetchData(newsId, "news", null);
      const newsList = await getNewsList(newsDatabase, null);
      
      props.newsList = newsList || [];
    } catch (error) {
      console.log('Error fetching news data:', error);
      props.newsList = [];
    }
  } else if (pageType === 'admissions' || pageType === 'admissions/forms') {
    try {
      const qualification = await getDatabase("11ba8c0ecf8c80e4a3d6cb2cae30ac08");
      const price = await getDatabase("11ba8c0ecf8c8068afc9c4ba38330221");
      const discountFamily = await getDatabase("11ba8c0ecf8c80daa4a0e58b368b1dc3");
      const discountStaff = await getDatabase("11ca8c0ecf8c80658187d57a17357400");
      const enrollment = await getDatabase("11ba8c0ecf8c8059bbddf42453136463");
      
      props.qualification = qualification || [];
      props.price = price || [];
      props.discountFamily = discountFamily || [];
      props.discountStaff = discountStaff || [];
      props.enrollment = enrollment || [];
    } catch (error) {
      console.log('Error fetching admissions data:', error);
      props.qualification = [];
      props.price = [];
      props.discountFamily = [];
      props.discountStaff = [];
      props.enrollment = [];
    }
  } else if (pageType === 'program/calendar') {
    try {
      const database = await getDatabase("8d87080f73f14e8a9e7ba934c1d928c6");
      
      // カレンダーファイル用の画像保存処理
      let calendarProps = [];
      for(let item of database){
        calendarProps.push(item.properties);
      }
      await saveImageIfNeeded(calendarProps, "calendar");
      
      props.files = database && database.length > 0 ? database[0] : {};
      props.scheduleList = database || [];
    } catch (error) {
      console.log('Error fetching calendar data:', error);
      props.files = {};
      props.scheduleList = [];
    }
  }
  // Add more specific page data fetching as needed

  return {
    props
  };
}