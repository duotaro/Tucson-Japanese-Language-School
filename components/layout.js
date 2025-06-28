import Head from "next/head";
import { useRouter } from 'next/router';
import { useContext } from 'react';
import LocaleContext from './context/localeContext';
import Navbar from './navbar'
import Footer from './footer'
import Breadcrumb from "./parts/nav/breadcrumb";
import Sponsor from "./parts/sponsor";

export default function Layout({ children, breadcrumb, locale: propLocale }) {
  const router = useRouter();
  const { locale: contextLocale } = useContext(LocaleContext);
  const locale = propLocale || contextLocale;
  
  // 現在のページのURLを生成
  const baseUrl = 'https://tjschool.org';
  const currentPath = router.asPath;
  const canonicalUrl = `${baseUrl}${currentPath}`;
  
  // hreflang用のURL生成
  const jaUrl = locale === 'ja' ? canonicalUrl : `${baseUrl}${currentPath}`;
  const enUrl = locale === 'en' ? canonicalUrl : `${baseUrl}/en${currentPath}`;
  let sponsorList = []

  // for(let item of sponsors){
  //   let sponsor = new SponsorEntity(item)
  //   sponsorList.push(sponsor)
  // }

  return (
    <>
      <Head>
        {/* Canonical URL */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* hreflang tags */}
        <link rel="alternate" hrefLang="ja" href={jaUrl} />
        <link rel="alternate" hrefLang="en" href={enUrl} />
        <link rel="alternate" hrefLang="x-default" href={jaUrl} />
        
        {/* 基本メタタグ */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="Japan, Japanese, School, Tucson, children, class, culture, kids, language, クラス, ツーソン, 子ども, 学校, 日本, 日本語" />
        
        {/* Open Graph */}
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="https://tjschool.org/logo-ja.png" />
        
        {/* Twitter Card */}
        <meta name="twitter:url" content={canonicalUrl} />
        <meta name="twitter:image" content="https://tjschool.org/logo-ja.png" />
      </Head>
        <Navbar locale={locale} />
        {breadcrumb && ( <Breadcrumb parents={breadcrumb.parents} current={breadcrumb.current} locale={locale} /> )}
        <main className="">{children}</main>

        {/* <Sponsor sponsor={commonData} /> */}
        <Footer locale={locale} />
    </>
  )
}
