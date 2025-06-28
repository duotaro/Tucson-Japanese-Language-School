import Head from "next/head";
import React from 'react';
import { useLocale } from "../../../utils/locale";

export default function ReportPage({ report, locale }) {
  const { json, metaTitleExtension } = useLocale(locale)
  let lang = json.navigation

  return (
    <>
      <Head>
        <title>{lang.report} - {metaTitleExtension} </title>
        <meta name="description" content={`${lang.report} - ${lang.description}`} />
        
        {/* Language alternatives for SEO */}
        <link rel="alternate" hrefLang="ja" href="https://tjschool.org/about/report/" />
        <link rel="alternate" hrefLang="en" href="https://tjschool.org/en/about/report/" />
        <link rel="alternate" hrefLang="x-default" href="https://tjschool.org/about/report/" />
      </Head>

      <div className="">
        <div className="row">
          <div className="col-md-12">
            <h1>{lang.report}</h1>
            <p>Report content...</p>
          </div>
        </div>
      </div>
    </>
  );
}