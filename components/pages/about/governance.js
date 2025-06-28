import Head from "next/head";
import React from 'react';
import { useLocale } from "../../../utils/locale";

export default function GovernancePage({ governance, locale }) {
  const { json, metaTitleExtension } = useLocale(locale)
  let lang = json.navigation

  let breadcrumb = {
    parents: [{link: '/about/', title: "about"}],
    current: lang.governance
  }

  return (
    <>
      <Head>
        <title>{lang.governance} - {metaTitleExtension} </title>
        <meta name="description" content={`${lang.governance} - ${lang.description}`} />
        
        {/* Language alternatives for SEO */}
        <link rel="alternate" hrefLang="ja" href="https://tjschool.org/about/governance/" />
        <link rel="alternate" hrefLang="en" href="https://tjschool.org/en/about/governance/" />
        <link rel="alternate" hrefLang="x-default" href="https://tjschool.org/about/governance/" />
      </Head>

      <div className="">
        <div className="row">
          {/* Governance content would go here */}
          <div className="col-md-12">
            <h1>{lang.governance}</h1>
            <p>Governance content...</p>
          </div>
        </div>
      </div>
    </>
  );
}