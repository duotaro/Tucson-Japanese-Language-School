import Head from "next/head";
import React from 'react';
import { useLocale } from "../../../utils/locale";
import Calender from "../../parts/program/calender/index.js";

export default function CalendarPage({ files, scheduleList, locale }) {
  const { json, metaTitleExtension } = useLocale(locale)
  let lang = json.navigation

  return (
    <>
      <Head>
        <title>{lang.calendar} - {metaTitleExtension} </title>
        <meta name="description" content={`${lang.calendar} - ${json.navigation.description || lang.calendar}`} />
        
        {/* Language alternatives for SEO */}
        <link rel="alternate" hrefLang="ja" href="https://tjschool.org/program/calendar/" />
        <link rel="alternate" hrefLang="en" href="https://tjschool.org/en/program/calendar/" />
        <link rel="alternate" hrefLang="x-default" href="https://tjschool.org/program/calendar/" />
      </Head>

      <div className="">
        <div className="row">
          <Calender files={files || {}} list={scheduleList || []} locale={locale} />
        </div>
      </div>
    </>
  );
}