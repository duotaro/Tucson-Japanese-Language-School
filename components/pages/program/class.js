import Head from "next/head";
import React from 'react';
import { useLocale } from "../../../utils/locale";

export default function ClassPage({ classes, locale }) {
  const { json, metaTitleExtension } = useLocale(locale)
  let lang = json.navigation

  return (
    <>
      <Head>
        <title>{lang.class} - {metaTitleExtension} </title>
        <meta name="description" content={`${lang.class} - ${lang.description}`} />
        
        {/* Language alternatives for SEO */}
        <link rel="alternate" hrefLang="ja" href="https://tjschool.org/program/class/" />
        <link rel="alternate" hrefLang="en" href="https://tjschool.org/en/program/class/" />
        <link rel="alternate" hrefLang="x-default" href="https://tjschool.org/program/class/" />
      </Head>

      <div className="">
        <div className="row">
          <div className="col-md-12">
            <h1>{lang.class}</h1>
            <p>Class content...</p>
          </div>
        </div>
      </div>
    </>
  );
}