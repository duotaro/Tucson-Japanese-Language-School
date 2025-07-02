import Head from "next/head";
import React from 'react';
import { useLocale } from "../../../utils/locale";
import OpportunityComponent from "../../parts/contact/opportunity/index.js";

export default function OpportunityPage({ opportunity, locale }) {
  const { json, metaTitleExtension } = useLocale(locale)
  let lang = json.navigation

  return (
    <>
      <Head>
        <title>{lang.opportunity} - {metaTitleExtension} </title>
        <meta name="description" content={`${lang.opportunity} - ${json?.navigation?.description || lang.opportunity}`} />
        
        {/* Language alternatives for SEO */}
        <link rel="alternate" hrefLang="ja" href="https://tjschool.org/contact/opportunity/" />
        <link rel="alternate" hrefLang="en" href="https://tjschool.org/en/contact/opportunity/" />
        <link rel="alternate" hrefLang="x-default" href="https://tjschool.org/contact/opportunity/" />
      </Head>

      <div className="">
        <div className="row">
          <OpportunityComponent opportunity={opportunity || []} locale={locale} />
        </div>
      </div>
    </>
  );
}