import Head from "next/head";
import React from 'react';
import { useLocale } from "../../../utils/locale";

export default function FormsPage({ forms, locale }) {
  const { json, metaTitleExtension } = useLocale(locale)
  let lang = json.navigation

  return (
    <>
      <Head>
        <title>{lang.forms} - {metaTitleExtension} </title>
        <meta name="description" content={`${lang.forms} - ${lang.description}`} />
        
        {/* Language alternatives for SEO */}
        <link rel="alternate" hrefLang="ja" href="https://tjschool.org/admissions/forms/" />
        <link rel="alternate" hrefLang="en" href="https://tjschool.org/en/admissions/forms/" />
        <link rel="alternate" hrefLang="x-default" href="https://tjschool.org/admissions/forms/" />
      </Head>

      <div className="">
        <div className="row">
          <div className="col-md-12">
            <h1>{lang.forms}</h1>
            <p>Forms content...</p>
          </div>
        </div>
      </div>
    </>
  );
}