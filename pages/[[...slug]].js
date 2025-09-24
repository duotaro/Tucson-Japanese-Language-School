import React, { useContext } from 'react';
import Head from "next/head.js";
import { useLocale } from "../utils/locale";
import { getDatabase } from "../lib/notion.js";
import { loadCachedData, loadMultipleCachedData } from "../lib/cache-loader.js";
import Layout from '../components/layout.js'
export const databaseId = process.env.NEXT_PUBLIC_NOTION_DATABASE_ID;
export const newsId = process.env.NEXT_PUBLIC_NOTION_NEWS_DATABASE_ID;
import News from '../components/parts/news/index.js';
import SponsorEntity from '../entity/sponsorEntity.js';
import LocaleContext from '../components/context/localeContext.js';
import saveImageIfNeeded from '../components/download/index.js';
import savePdfIfNeeded from '../components/download/pdf.js';
import saveEventContentIfNeeded from '../components/download/event.js';
import saveNewsContentIfNeeded from '../components/download/news.js';
import Mission from '../components/parts/about/mission/mission.js';
import Vision from '../components/parts/about/mission/vision.js';
import { convertAboutFromDatabase } from '../entity/aboutEntity.js';
import About from '../components/parts/about/index.js';
import Sponsor from '../components/parts/sponsor/index.js';
import Opportunity from '../components/parts/contact/opportunity/index.js';
import { getNewsList } from '../entity/newsEntity.js';
import path from 'path';

// Dynamic imports for page components
import dynamic from 'next/dynamic';

// Dynamic import for heavy components
const SliderList = dynamic(() => import('../components/parts/slider/index.js'), {
  loading: () => (
    <div className="h-96 bg-gray-200 animate-pulse"></div>
  ),
  ssr: true
});

// Loading component
const PageLoading = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-pulse text-xl text-gray-600">Loading...</div>
  </div>
);

// Dynamic page components with loading state
const WelcomePage = dynamic(() => import('../components/pages/about/welcome.js'), {
  loading: () => <PageLoading />,
  ssr: true
});
const MissionPage = dynamic(() => import('../components/pages/about/mission.js'), {
  loading: () => <PageLoading />,
  ssr: true
});
const GovernancePage = dynamic(() => import('../components/pages/about/governance.js'), {
  loading: () => <PageLoading />,
  ssr: true
});
const StaffPage = dynamic(() => import('../components/pages/about/staff.js'), {
  loading: () => <PageLoading />,
  ssr: true
});
const ReportPage = dynamic(() => import('../components/pages/about/report.js'), {
  loading: () => <PageLoading />,
  ssr: true
});
const ClassPage = dynamic(() => import('../components/pages/program/class.js'), {
  loading: () => <PageLoading />,
  ssr: true
});
// CalendarPage - Heavy component with FullCalendar
const CalendarPage = dynamic(() => import('../components/pages/program/calendar.js'), {
  loading: () => <PageLoading />,
  ssr: true
});
const EventsPage = dynamic(() => import('../components/pages/program/events.js'), {
  loading: () => <PageLoading />,
  ssr: true
});
const KanjiKenteiPage = dynamic(() => import('../components/pages/program/kanji_kentei.js'), {
  loading: () => <PageLoading />,
  ssr: true
});
const NihongocafePage = dynamic(() => import('../components/pages/program/nihongocafe.js'), {
  loading: () => <PageLoading />,
  ssr: true
});
const FormsPage = dynamic(() => import('../components/pages/admissions/forms.js'), {
  loading: () => <PageLoading />,
  ssr: true
});
const NewsIndexPage = dynamic(() => import('../components/pages/news/index.js'), {
  loading: () => <PageLoading />,
  ssr: true
});
const NewsDetailPage = dynamic(() => import('../components/pages/news/detail.js'), {
  loading: () => <PageLoading />,
  ssr: true
});
const EventIndexPage = dynamic(() => import('../components/pages/event/index.js'), {
  loading: () => <PageLoading />,
  ssr: true
});
const EventDetailPage = dynamic(() => import('../components/pages/event/detail.js'), {
  loading: () => <PageLoading />,
  ssr: true
});
const SupportPage = dynamic(() => import('../components/pages/support.js'), {
  loading: () => <PageLoading />,
  ssr: true
});
const ContactPage = dynamic(() => import('../components/pages/contact/index.js'), {
  loading: () => <PageLoading />,
  ssr: true
});
const OpportunityPage = dynamic(() => import('../components/pages/contact/opportunity.js'), {
  loading: () => <PageLoading />,
  ssr: true
});

export default function DynamicPage({ pageType, slug, locale: pageLocale, ...pageProps }) {
  // 静的生成時に確定した言語を使用（クライアントサイドの判定に依存しない）
  const currentLocale = pageLocale;
  const actualSlug = slug || [];
  const { json, metaTitleExtension } = useLocale(currentLocale);

  // Home page
  if (pageType === 'home') {
    const { sliderList, sponsors, newsList, scheduleList, about, general } = pageProps;
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
            <Opportunity opportunity={general} locale={currentLocale} />
            <Sponsor sponsor={sponsorList} locale={currentLocale} />
          </div>
        </div>
      </Layout>
    );
  }

  // Route to appropriate page component
  const renderPageComponent = () => {
    // Handle event detail pages
    if (pageType.startsWith('news/event/') && actualSlug.length === 3) {
      const eventId = actualSlug[2];
      return <EventDetailPage {...pageProps} locale={currentLocale} eventId={eventId} />;
    }

    // Handle news detail pages (but exclude news/event path)
    if (pageType.startsWith('news/') && actualSlug.length === 2 && actualSlug[1] !== 'event') {
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
      case 'program/kanjikentei':
        return <KanjiKenteiPage {...pageProps} locale={currentLocale} />;
      case 'program/nihongocafe':
        return <NihongocafePage {...pageProps} locale={currentLocale} />;
      case 'admissions':
        return <FormsPage {...pageProps} locale={currentLocale} />;
      case 'admissions/forms':
        return <FormsPage {...pageProps} locale={currentLocale} />;
      case 'news':
        return <NewsIndexPage {...pageProps} locale={currentLocale} />;
      case 'news/event':
        return <EventIndexPage {...pageProps} locale={currentLocale} />;
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
  
  // Initialize global cache for build performance
  if (!global.buildTimeCache) {
    global.buildTimeCache = {};
  }
  
  // Get news items for dynamic paths using cache system
  let newsPaths = [];
  try {
    const newsDatabase = await loadCachedData('news', { fallbackToAPI: false });
    // Store in global cache for later use
    global.buildTimeCache['news'] = newsDatabase;
    newsPaths = newsDatabase.map(item => ({ params: { slug: ['news', item.id] } }));
  } catch (error) {
    console.log('Error fetching news for paths:', error);
  }

  // Get event items for dynamic paths using cache system
  let eventPaths = [];
  try {
    const eventDatabase = await loadCachedData('event', { fallbackToAPI: false });
    // Store in global cache for later use
    global.buildTimeCache['event'] = eventDatabase;
    eventPaths = eventDatabase.map(item => ({ params: { slug: ['news', 'event', item.id] } }));
  } catch (error) {
    console.log('Error fetching events for paths:', error);
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
    { params: { slug: ['program', 'kanjikentei'] } },
    { params: { slug: ['program', 'nihongocafe'] } },
    { params: { slug: ['admissions'] } },
    { params: { slug: ['admissions', 'forms'] } },
    { params: { slug: ['news'] } },
    { params: { slug: ['news', 'event'] } },
    { params: { slug: ['support'] } },
    { params: { slug: ['contact'] } },
    { params: { slug: ['contact', 'opportunity'] } },
    ...newsPaths,
    ...eventPaths
  ];

  // English paths (/en prefix)
  const englishPages = japanesePages.map(page => ({
    params: { slug: ['en', ...page.params.slug] }
  }));

  paths.push(...japanesePages, ...englishPages);

  // Filter out PDF paths - these should be served as static files
  const filteredPaths = paths.filter(path => {
    const slug = path.params.slug || [];
    // Exclude any path that starts with 'pdf' - these are static files
    return slug.length === 0 || slug[0] !== 'pdf';
  });

  return {
    paths: filteredPaths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const slug = params?.slug || [];
  let locale = 'ja';
  let actualSlug = slug;

  // Handle PDF paths - these should be 404 as they are static files
  if (slug.length > 0 && slug[0] === 'pdf') {
    return {
      notFound: true
    };
  }

  // Check if this is an English route
  if (slug[0] === 'en') {
    locale = 'en';
    actualSlug = slug.slice(1);
    
    // Also check for PDF paths in English routes
    if (actualSlug.length > 0 && actualSlug[0] === 'pdf') {
      return {
        notFound: true
      };
    }
  }

  const pageType = actualSlug.length === 0 ? 'home' : actualSlug.join('/');

  // Global cache to prevent duplicate loading
  if (!global.buildTimeCache) {
    global.buildTimeCache = {};
  }

  // Cache-based data fetching with global caching for build performance
  const fetchCachedData = async (dataType, limit = null) => {
    try {
      // Check global cache first
      if (global.buildTimeCache[dataType]) {
        console.log(`🚀 グローバルキャッシュから取得: ${dataType}`);
        const cached = global.buildTimeCache[dataType];
        return limit ? cached.slice(0, limit) : cached;
      }

      const database = await loadCachedData(dataType, { fallbackToAPI: false });
      if (!database || !Array.isArray(database)) {
        console.warn(`No data found for cache: ${dataType}`);
        return [];
      }
      
      // Store in global cache
      global.buildTimeCache[dataType] = database;
      
      return limit ? database.slice(0, limit) : database;
    } catch (error) {
      console.error(`Error fetching cached data for ${dataType}:`, error);
      return [];
    }
  };

  let props = { pageType, slug: actualSlug, locale };

  // Home page data - using cache loader for performance
  const isDev = process.env.NODE_ENV === 'development';
  if (pageType === 'home') {
    // キャッシュから一括でデータを読み込み
    const cacheData = await loadMultipleCachedData([
      'slider', 'sponsors', 'schedule', 'about', 'general'
    ]);
    
    const sliderList = isDev ? cacheData.slider.slice(0, 3) : cacheData.slider;
    const sponsors = isDev ? cacheData.sponsors.slice(0, 6) : cacheData.sponsors;
    const scheduleList = isDev ? cacheData.schedule.slice(0, 5) : cacheData.schedule;
    const about = isDev ? cacheData.about.slice(0, 3) : cacheData.about;
    const general = isDev ? cacheData.general.slice(0, 1) : cacheData.general;

    // スライダー画像の保存処理
    if (sliderList && sliderList.length > 0) {
      let sliderProps = [];
      for(let item of sliderList){
        sliderProps.push(item.properties);
      }
      await saveImageIfNeeded(sliderProps, "slider");
    }
    
    // ニュースは環境変数未設定のため一時的にモックデータを使用
    let newsList = [];
    try {
      const newsDatabase = await loadCachedData('news');
      newsList = await getNewsList(newsDatabase, 3);
    } catch (error) {
      console.warn('ニュースデータが利用できません:', error.message);
      // フォールバック用のダミーニュース
      newsList = [
        { id: 'news-1', properties: { Name: { title: [{ text: { content: 'Sample News 1' } }] } } },
        { id: 'news-2', properties: { Name: { title: [{ text: { content: 'Sample News 2' } }] } } },
        { id: 'news-3', properties: { Name: { title: [{ text: { content: 'Sample News 3' } }] } } }
      ];
    }

    props = {
      ...props,
      sliderList,
      sponsors,
      newsList,
      scheduleList,
      about,
      general
    };
  }

  // Add specific page data fetching logic for different page types
  
  // Handle news detail pages (but exclude news/event path)
  if (pageType.startsWith('news/') && actualSlug.length === 2 && actualSlug[1] !== 'event') {
    const newsItemId = actualSlug[1];
    try {
      const newsDatabase = await fetchCachedData('news', null);
      const foundItem = newsDatabase.find(item => item.id === newsItemId);
      
      if (foundItem) {
        // ニュース画像の保存処理
        let newsProps = [foundItem.properties];
        await saveImageIfNeeded(newsProps, "news");
        
        // Master版の実装と同じように子データベースから詳細コンテンツを取得
        const { getPage, getBlocks, getDatabase } = await import('../lib/notion.js');
        
        let pageMap = {"ja": null, "en": null};
        let blockMap = {"ja": null, "en": null};
        
        // 詳細ページとブロックを取得
        const detailPage = await getPage(newsItemId);
        const detailBlock = await getBlocks(newsItemId);
        
        // 子データベースが存在する場合
        if (detailBlock && detailBlock.length > 0 && detailBlock[0].type === 'child_database') {
          const localeList = await getDatabase(detailBlock[0].id);
          
          // 各言語の詳細コンテンツを取得
          const paramsPromises = localeList.map(async (localeItem) => {
            const locale = localeItem.properties["locale"].title[0].plain_text;
            const page = await getPage(localeItem.id);
            const blocks = await getBlocks(localeItem.id);
            
            if (locale === "ja") {
              pageMap[locale] = page;
              blockMap[locale] = blocks;
              // ニュースコンテンツ（画像・PDF）のダウンロード
              await saveNewsContentIfNeeded(blocks, newsItemId);
            } else {
              pageMap[locale] = page;
              blockMap[locale] = blocks;
              // ニュースコンテンツ（画像・PDF）のダウンロード
              await saveNewsContentIfNeeded(blocks, newsItemId);
            }
          });
          
          await Promise.all(paramsPromises);
        }
        
        props.newsItem = foundItem;
        props.detailPage = detailPage;
        props.pageMap = pageMap;
        props.blockMap = blockMap;
      } else {
        props.newsItem = null;
      }
    } catch (error) {
      console.log('Error fetching news item:', error);
      props.newsItem = null;
    }
  }

  // Handle event detail pages
  if (pageType.startsWith('news/event/') && actualSlug.length === 3) {
    const eventItemId = actualSlug[2];
    try {
      const eventDatabase = await fetchCachedData('event', null);
      const foundItem = eventDatabase.find(item => item.id === eventItemId);

      if (foundItem) {
        // イベント画像の保存処理
        let eventProps = [foundItem.properties];
        await saveImageIfNeeded(eventProps, "event");

        // Master版の実装と同じように子データベースから詳細コンテンツを取得
        const { getPage, getBlocks, getDatabase } = await import('../lib/notion.js');

        let pageMap = {"ja": null, "en": null};
        let blockMap = {"ja": null, "en": null};

        // 詳細ページとブロックを取得
        const detailPage = await getPage(eventItemId);
        const detailBlock = await getBlocks(eventItemId);

        // 子データベースが存在する場合
        if (detailBlock && detailBlock.length > 0 && detailBlock[0].type === 'child_database') {
          const localeList = await getDatabase(detailBlock[0].id);

          // 各言語の詳細コンテンツを取得
          const paramsPromises = localeList.map(async (localeItem) => {
            const locale = localeItem.properties["locale"].title[0].plain_text;
            const page = await getPage(localeItem.id);
            const blocks = await getBlocks(localeItem.id);

            if (locale === "ja") {
              pageMap[locale] = page;
              blockMap[locale] = blocks;
              // イベントコンテンツ（画像・PDF）のダウンロード
              await saveEventContentIfNeeded(blocks, eventItemId);
            } else {
              pageMap[locale] = page;
              blockMap[locale] = blocks;
              // イベントコンテンツ（画像・PDF）のダウンロード
              await saveEventContentIfNeeded(blocks, eventItemId);
            }
          });

          await Promise.all(paramsPromises);
        }

        props.eventItem = foundItem;
        props.detailPage = detailPage;
        props.pageMap = pageMap;
        props.blockMap = blockMap;
      } else {
        props.eventItem = null;
      }
    } catch (error) {
      console.log('Error fetching event item:', error);
      props.eventItem = null;
    }
  }

  // Add specific page data for different page types
  if (pageType === 'about' || pageType === 'about/welcome') {
    try {
      // キャッシュからデータを読み込み
      const cacheData = await loadMultipleCachedData(['greeting', 'story', 'history']);
      
      props.welcome = {
        "greeting": cacheData.greeting && cacheData.greeting[0],
        "story": cacheData.story && cacheData.story[0],
        "history": cacheData.history && cacheData.history[0],
      };
    } catch (error) {
      console.log('Error fetching welcome data:', error);
    }
  } else if (pageType === 'about/mission') {
    try {
      // キャッシュからデータを読み込み
      const cacheData = await loadMultipleCachedData(['about', 'mission', 'vision']);
      
      const about = isDev ? cacheData.about.slice(0, 3) : cacheData.about;
      const philosophy = isDev ? cacheData.mission.slice(0, 1) : cacheData.mission;
      const policy = cacheData.vision;
      
      // Policyデータに画像ファイルがある場合、saveImageIfNeededを実行
      if (policy && policy.length > 0) {
        let policyProps = [];
        for(let item of policy){
          policyProps.push(item.properties);
        }
        await saveImageIfNeeded(policyProps, "policy");
      }
      
      // PolicyデータにPDFファイルがある場合、savePdfIfNeededを実行
      if (policy && policy.length > 0) {
        let policyProps = [];
        for(let item of policy){
          policyProps.push(item.properties);
        }
        await savePdfIfNeeded(policyProps, "policy");
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
      // キャッシュからデータを読み込み
      const cacheData = await loadMultipleCachedData(['directors', 'orgChart', 'policies']);
      
      // Directors
      let directorProps = [];
      for(let item of cacheData.directors || []){
        directorProps.push(item.properties);
      }
      await saveImageIfNeeded(directorProps, "director");
      
      // Organization Chart
      let chartProps = [];
      for(let item of cacheData.orgChart || []){
        chartProps.push(item.properties);
      }
      await saveImageIfNeeded(chartProps, "org_chart");
      
      // Organization Policies
      let policyProps = [];
      for(let item of cacheData.policies || []){
        policyProps.push(item.properties);
      }
      await savePdfIfNeeded(policyProps, "org_policy");
      
      props.directors = cacheData.directors || [];
      props.orgChart = cacheData.orgChart && cacheData.orgChart.length > 0 ? cacheData.orgChart[0] : null;
      props.org_policys = cacheData.policies || [];
    } catch (error) {
      console.log('Error fetching governance data:', error);
      props.directors = [];
      props.orgChart = null;
      props.org_policys = [];
    }
  } else if (pageType === 'about/staff') {
    try {
      // キャッシュからデータを読み込み
      const cacheData = await loadMultipleCachedData(['roleList', 'staff']);
      
      // スタッフ画像の保存処理
      let staffProps = [];
      for(let staff of cacheData.staff || []){
        staffProps.push(staff.properties);
      }
      await saveImageIfNeeded(staffProps, "staff");
      
      props.staffList = cacheData.staff || [];
      props.roleList = cacheData.roleList || [];
    } catch (error) {
      console.log('Error fetching staff data:', error);
      props.staffList = [];
      props.roleList = [];
    }
  } else if (pageType === 'about/report') {
    try {
      const reportList = await loadCachedData('reports');
      
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
      // キャッシュからデータを読み込み
      const cacheData = await loadMultipleCachedData(['category', 'classes']);
      
      // クラス画像の保存処理
      let classProps = [];
      for(let item of cacheData.classes || []){
        classProps.push(item.properties);
      }
      await saveImageIfNeeded(classProps, "class");
      
      props.category = cacheData.category || [];
      props.classes = cacheData.classes || [];
    } catch (error) {
      console.log('Error fetching class data:', error);
      props.category = [];
      props.classes = [];
    }
  } else if (pageType === 'news') {
    try {
      const newsDatabase = await fetchCachedData('news', null);
      const newsList = await getNewsList(newsDatabase, null);

      props.newsList = newsList || [];
    } catch (error) {
      console.log('Error fetching news data:', error);
      props.newsList = [];
    }
  } else if (pageType === 'news/event') {
    try {
      const eventDatabase = await fetchCachedData('event', null);
      const { getEventList } = await import('../entity/eventEntity.js');
      const eventList = await getEventList(eventDatabase, null);

      props.eventList = eventList || [];
    } catch (error) {
      console.log('Error fetching event data:', error);
      props.eventList = [];
    }
  } else if (pageType === 'admissions' || pageType === 'admissions/forms') {
    try {
      // キャッシュからデータを読み込み
      const cacheData = await loadMultipleCachedData([
        'qualification', 'price', 'discountFamily', 'discountStaff', 'enrollment'
      ]);
      
      props.qualification = cacheData.qualification || [];
      props.price = cacheData.price || [];
      props.discountFamily = cacheData.discountFamily || [];
      props.discountStaff = cacheData.discountStaff || [];
      props.enrollment = cacheData.enrollment || [];
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
      // キャッシュからデータを読み込み
      const cacheData = await loadMultipleCachedData(['schedule', 'files']);

      // カレンダーファイル用の画像保存処理
      let calendarProps = [];
      for(let item of cacheData.schedule || []){
        calendarProps.push(item.properties);
      }
      await saveImageIfNeeded(calendarProps, "calendar");

      // PDFファイル用の保存処理を追加
      if (cacheData.files && cacheData.files.length > 0) {
        let fileProps = [];
        for(let item of cacheData.files){
          fileProps.push(item.properties);
        }
        await savePdfIfNeeded(fileProps, "calendar");
      }

      // filesデータベースからPDFファイル情報を取得
      props.files = cacheData.files && cacheData.files.length > 0 ? cacheData.files[0] : {};
      props.scheduleList = cacheData.schedule || [];
    } catch (error) {
      console.log('Error fetching calendar data:', error);
      props.files = {};
      props.scheduleList = [];
    }
  } else if (pageType === 'support') {
    try {
      // キャッシュからデータを読み込み
      const cacheData = await loadMultipleCachedData([
        'sponsors', 'support', 'sponsor', 'donation', 'howto'
      ]);
      
      // Howto用の画像保存処理
      if (cacheData.howto && cacheData.howto.length > 0) {
        let howtoProps = [];
        for(let item of cacheData.howto){
          howtoProps.push(item.properties);
        }
        await saveImageIfNeeded(howtoProps, "howto");
      }
      
      props.sponsors = cacheData.sponsors || [];
      props.support = cacheData.support && cacheData.support.length > 0 ? cacheData.support[0] : null;
      props.sponsor = cacheData.sponsor && cacheData.sponsor.length > 0 ? cacheData.sponsor[0] : null;
      props.donation = cacheData.donation && cacheData.donation.length > 0 ? cacheData.donation[0] : null;
      props.howto = cacheData.howto || [];
    } catch (error) {
      console.log('Error fetching support data:', error);
      props.sponsors = [];
      props.support = null;
      props.sponsor = null;
      props.donation = null;
      props.howto = [];
    }
  } else if (pageType === 'contact') {
    // Contact page用のデータフェッチ
    try {
      const opportunity = await loadCachedData('general');
      props.opportunity = opportunity || [];
    } catch (error) {
      console.log('Error fetching contact data:', error);
      props.opportunity = [];
    }
  } else if (pageType === 'contact/opportunity') {
    // Contact Opportunity page用のデータフェッチ
    try {
      const cacheData = await loadMultipleCachedData(['opportunity', 'general']);

      props.opportunities = cacheData.opportunity || [];
      props.general = cacheData.general && cacheData.general.length > 0 ? cacheData.general[0] : null;
    } catch (error) {
      console.log('Error fetching opportunity data:', error);
      props.opportunities = [];
      props.general = null;
    }
  } else if (pageType === 'program/nihongocafe') {
    // にほんごかふぇページ用のデータフェッチ
    try {
      // Notion DBからデータを取得
      const nihongoCafeOverview = await getDatabase('274a8c0ecf8c814a98b8e817ef55df69'); // にほんごかふぇ概要
      const inPersonOverview = await getDatabase('274a8c0ecf8c80e1841ce20b2ffd582f'); // 対面にほんごかふぇ概要
      const inPersonPrice = await getDatabase('274a8c0ecf8c806bb30ccf9629c77830'); // 対面にほんごかふぇ価格情報
      const onlineOverview = await getDatabase('274a8c0ecf8c8064878de70e4f5c8826'); // オンラインにほんごかふぇ概要
      const onlinePrice = await getDatabase('274a8c0ecf8c808aa55cfb90733e2119'); // オンラインにほんごかふぇ価格情報

      props.nihongoCafeData = {
        overview: nihongoCafeOverview || [],
        inPerson: {
          overview: inPersonOverview || [],
          price: inPersonPrice || []
        },
        online: {
          overview: onlineOverview || [],
          price: onlinePrice || []
        }
      };
    } catch (error) {
      console.log('Error fetching nihongocafe data:', error);
      props.nihongoCafeData = {
        overview: [],
        inPerson: { overview: [], price: [] },
        online: { overview: [], price: [] }
      };
    }
  } else if (pageType === 'program/kanji_kentei' || pageType === 'program/kanjikentei') {
    // 漢字検定ページ用のデータフェッチ
    try {
      // Notion DBからデータを取得
      const kanjiKenteiOverview = await getDatabase('276a8c0ecf8c814f950beee0a0ffe973'); // 漢検概要情報
      const kanjiKenteiMaterials = await getDatabase('276a8c0ecf8c8176b701dd1e670dfa12'); // 漢検教材情報
      const kanjiKenteiSchedule = await getDatabase('276a8c0ecf8c80f883d2e9a738a63b90'); // 漢検日程情報
      const kanjiKenteiVenue = await getDatabase('276a8c0ecf8c80e089a0e4e1ce8dbdad'); // 漢検会場情報
      const kanjiKenteiDeadline = await getDatabase('276a8c0ecf8c80d7bda5c94af8d4c3cc'); // 漢検申し込み期限情報
      const kanjiKenteiVenueImages = await getDatabase('276a8c0ecf8c8027be3aed9903ef0202'); // 漢検会場の様子画像情報

      // 画像ダウンロード処理
      if (kanjiKenteiOverview && kanjiKenteiOverview.length > 0) {
        let overviewProps = [];
        for(let item of kanjiKenteiOverview){
          overviewProps.push(item.properties);
        }
        await saveImageIfNeeded(overviewProps, "kanji_kentei_overview");
      }

      // 教材画像ダウンロード処理
      if (kanjiKenteiMaterials && kanjiKenteiMaterials.length > 0) {
        let materialProps = [];
        for(let item of kanjiKenteiMaterials){
          materialProps.push(item.properties);
        }
        await saveImageIfNeeded(materialProps, "kanji_kentei_materials");
      }

      // 会場画像ダウンロード処理
      if (kanjiKenteiVenueImages && kanjiKenteiVenueImages.length > 0) {
        let venueImageProps = [];
        for(let item of kanjiKenteiVenueImages){
          venueImageProps.push(item.properties);
        }
        await saveImageIfNeeded(venueImageProps, "kanji_kentei_venue_images");
      }

      // PDFダウンロード処理
      if (kanjiKenteiOverview && kanjiKenteiOverview.length > 0) {
        let pdfProps = [];
        for(let item of kanjiKenteiOverview){
          pdfProps.push(item.properties);
        }
        await savePdfIfNeeded(pdfProps, "kanji_kentei_pdf");
      }

      props.kanjiKenteiData = {
        overview: kanjiKenteiOverview || [],
        materials: kanjiKenteiMaterials || [],
        schedule: kanjiKenteiSchedule || [],
        venue: kanjiKenteiVenue || [],
        deadline: kanjiKenteiDeadline || [],
        venueImages: kanjiKenteiVenueImages || []
      };
    } catch (error) {
      console.log('Error fetching kanji kentei data:', error);
      props.kanjiKenteiData = {
        overview: [],
        materials: [],
        schedule: [],
        venue: [],
        deadline: [],
        venueImages: []
      };
    }
  }
  // Add more specific page data fetching as needed

  return {
    props
  };
}