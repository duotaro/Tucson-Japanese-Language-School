import Head from "next/head";
import React from 'react';
import { useLocale } from "../../../utils/locale";

export default function EventsPage({ events, locale }) {
  const { json, metaTitleExtension } = useLocale(locale)
  let lang = json.navigation

  return (
    <>
      <Head>
        <title>{lang.event} - {metaTitleExtension} </title>
        <meta name="description" content={`${lang.event} - ${json?.navigation?.description || lang.event}`} />
        
        {/* Language alternatives for SEO */}
        <link rel="alternate" hrefLang="ja" href="https://tjschool.org/program/events/" />
        <link rel="alternate" hrefLang="en" href="https://tjschool.org/en/program/events/" />
        <link rel="alternate" hrefLang="x-default" href="https://tjschool.org/program/events/" />
      </Head>

      <div className="">
        <div className="row">
          <div className="col-md-12">
            <h1>{lang.event}</h1>
            <p>Events content...</p>
          </div>
        </div>
      </div>
    </>
  );
}