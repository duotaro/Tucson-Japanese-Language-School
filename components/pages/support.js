import Head from "next/head";
import React from 'react';
import { useLocale } from "../../utils/locale";

export default function SupportPage({ support, locale }) {
  const { json, metaTitleExtension } = useLocale(locale)
  let lang = json.navigation

  return (
    <>
      <Head>
        <title>{lang.support} - {metaTitleExtension} </title>
        <meta name="description" content={`${lang.support} - ${lang.description}`} />
        
        {/* Language alternatives for SEO */}
        <link rel="alternate" hrefLang="ja" href="https://tjschool.org/support/" />
        <link rel="alternate" hrefLang="en" href="https://tjschool.org/en/support/" />
        <link rel="alternate" hrefLang="x-default" href="https://tjschool.org/support/" />
      </Head>

      <div className="">
        <div className="row">
          <div className="col-md-12">
            <h1>{lang.support}</h1>
            <p>Support content...</p>
          </div>
        </div>
      </div>
    </>
  );
}