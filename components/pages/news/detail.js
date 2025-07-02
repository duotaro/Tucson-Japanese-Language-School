import Head from "next/head";
import React from 'react';
import { useLocale } from "../../../utils/locale";

export default function NewsDetailPage({ newsItem, locale, newsId }) {
  const { json, metaTitleExtension } = useLocale(locale)
  let lang = json.navigation

  return (
    <>
      <Head>
        <title>{newsItem?.title || 'News'} - {metaTitleExtension} </title>
        <meta name="description" content={`${newsItem?.title || 'News'} - ${json?.navigation?.description || (newsItem?.title || 'News')}`} />
        
        {/* Language alternatives for SEO */}
        <link rel="alternate" hrefLang="ja" href={`https://tjschool.org/news/${newsId}/`} />
        <link rel="alternate" hrefLang="en" href={`https://tjschool.org/en/news/${newsId}/`} />
        <link rel="alternate" hrefLang="x-default" href={`https://tjschool.org/news/${newsId}/`} />
      </Head>

      <div className="">
        <div className="row">
          <div className="col-md-12">
            <h1>{newsItem?.properties?.title?.title?.[0]?.plain_text || 'News Detail'}</h1>
            <p>News ID: {newsId}</p>
            <p>News detail content...</p>
          </div>
        </div>
      </div>
    </>
  );
}