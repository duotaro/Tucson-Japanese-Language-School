import Head from "next/head";
import React from 'react';
import { useLocale } from "../../../utils/locale";
import Event from "../../parts/event/index.js";

export default function EventIndexPage({ eventList, locale }) {
  const { json, metaTitleExtension } = useLocale(locale)
  let lang = json.navigation

  return (
    <>
      <Head>
        <title>{lang.event || 'イベント'} - {metaTitleExtension} </title>
        <meta name="description" content={`${lang.event || 'イベント'} - ${json?.navigation?.description || lang.event || 'イベント'}`} />

        {/* Language alternatives for SEO */}
        <link rel="alternate" hrefLang="ja" href="https://tjschool.org/news/event/" />
        <link rel="alternate" hrefLang="en" href="https://tjschool.org/en/news/event/" />
        <link rel="alternate" hrefLang="x-default" href="https://tjschool.org/news/event/" />
      </Head>

      <div className="">
        <div className="row">
          <Event list={eventList || []} isTop={false} locale={locale} />
        </div>
      </div>
    </>
  );
}