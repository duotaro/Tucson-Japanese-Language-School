import Head from "next/head";
import React from 'react';
import { useLocale } from "../../../utils/locale";

export default function CalendarPage({ calendar, locale }) {
  const { json, metaTitleExtension } = useLocale(locale)
  let lang = json.navigation

  return (
    <>
      <Head>
        <title>{lang.calendar} - {metaTitleExtension} </title>
        <meta name="description" content={`${lang.calendar} - ${lang.description}`} />
        
        {/* Language alternatives for SEO */}
        <link rel="alternate" hrefLang="ja" href="https://tjschool.org/program/calendar/" />
        <link rel="alternate" hrefLang="en" href="https://tjschool.org/en/program/calendar/" />
        <link rel="alternate" hrefLang="x-default" href="https://tjschool.org/program/calendar/" />
      </Head>

      <div className="">
        <div className="row">
          <div className="col-md-12">
            <h1>{lang.calendar}</h1>
            <p>Calendar content...</p>
          </div>
        </div>
      </div>
    </>
  );
}