import Head from "next/head";
import React from 'react';
import { useLocale } from "../../../utils/locale";

export default function OpportunityPage({ opportunity, locale }) {
  const { json, metaTitleExtension } = useLocale(locale)
  let lang = json.navigation

  return (
    <>
      <Head>
        <title>{lang.opportunity} - {metaTitleExtension} </title>
        <meta name="description" content={`${lang.opportunity} - ${lang.description}`} />
        
        {/* Language alternatives for SEO */}
        <link rel="alternate" hrefLang="ja" href="https://tjschool.org/contact/opportunity/" />
        <link rel="alternate" hrefLang="en" href="https://tjschool.org/en/contact/opportunity/" />
        <link rel="alternate" hrefLang="x-default" href="https://tjschool.org/contact/opportunity/" />
      </Head>

      <div className="">
        <div className="row">
          <div className="col-md-12">
            <h1>{lang.opportunity}</h1>
            <p>Opportunity content...</p>
          </div>
        </div>
      </div>
    </>
  );
}