import Head from "next/head";
import React from 'react';
import { useLocale } from "../../../utils/locale";

export default function StaffPage({ staff, locale }) {
  const { json, metaTitleExtension } = useLocale(locale)
  let lang = json.navigation

  return (
    <>
      <Head>
        <title>{lang.staff} - {metaTitleExtension} </title>
        <meta name="description" content={`${lang.staff} - ${lang.description}`} />
        
        {/* Language alternatives for SEO */}
        <link rel="alternate" hrefLang="ja" href="https://tjschool.org/about/staff/" />
        <link rel="alternate" hrefLang="en" href="https://tjschool.org/en/about/staff/" />
        <link rel="alternate" hrefLang="x-default" href="https://tjschool.org/about/staff/" />
      </Head>

      <div className="">
        <div className="row">
          <div className="col-md-12">
            <h1>{lang.staff}</h1>
            <p>Staff content...</p>
          </div>
        </div>
      </div>
    </>
  );
}