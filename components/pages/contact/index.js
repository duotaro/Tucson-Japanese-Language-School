import Head from "next/head";
import React from 'react';
import { useLocale } from "../../../utils/locale";
import ContactComponent from "../../parts/contact/index.js";

export default function ContactPage({ contact, locale }) {
  const { json, metaTitleExtension } = useLocale(locale)
  let lang = json.navigation

  return (
    <>
      <Head>
        <title>{lang.contact} - {metaTitleExtension} </title>
        <meta name="description" content={`${lang.contact} - ${lang.description}`} />
        
        {/* Language alternatives for SEO */}
        <link rel="alternate" hrefLang="ja" href="https://tjschool.org/contact/" />
        <link rel="alternate" hrefLang="en" href="https://tjschool.org/en/contact/" />
        <link rel="alternate" hrefLang="x-default" href="https://tjschool.org/contact/" />
      </Head>

      <div className="">
        <div className="row">
          <ContactComponent locale={locale} />
        </div>
      </div>
    </>
  );
}