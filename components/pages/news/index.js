import Head from "next/head";
import React from 'react';
import { useLocale } from "../../../utils/locale";
import News from "../../parts/news/index.js";

export default function NewsIndexPage({ newsList, locale }) {
  const { json, metaTitleExtension } = useLocale(locale)
  let lang = json.navigation

  return (
    <>
      <Head>
        <title>{lang.news} - {metaTitleExtension} </title>
        <meta name="description" content={`${lang.news} - ${json?.navigation?.description || lang.news}`} />
        
        {/* Language alternatives for SEO */}
        <link rel="alternate" hrefLang="ja" href="https://tjschool.org/news/" />
        <link rel="alternate" hrefLang="en" href="https://tjschool.org/en/news/" />
        <link rel="alternate" hrefLang="x-default" href="https://tjschool.org/news/" />
      </Head>

      <div className="">
        <div className="row">
          <News list={newsList || []} isTop={false} locale={locale} />
        </div>
      </div>
    </>
  );
}