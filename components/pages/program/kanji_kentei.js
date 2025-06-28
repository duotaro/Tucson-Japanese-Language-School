import Head from "next/head";
import React from 'react';
import { useLocale } from "../../../utils/locale";

export default function KanjiKenteiPage({ kanjiKentei, locale }) {
  const { json, metaTitleExtension } = useLocale(locale)
  let lang = json.navigation

  return (
    <>
      <Head>
        <title>{lang.kanjikentei} - {metaTitleExtension} </title>
        <meta name="description" content={`${lang.kanjikentei} - ${lang.description}`} />
        
        {/* Language alternatives for SEO */}
        <link rel="alternate" hrefLang="ja" href="https://tjschool.org/program/kanji_kentei/" />
        <link rel="alternate" hrefLang="en" href="https://tjschool.org/en/program/kanji_kentei/" />
        <link rel="alternate" hrefLang="x-default" href="https://tjschool.org/program/kanji_kentei/" />
      </Head>

      <div className="">
        <div className="row">
          <div className="col-md-12">
            <h1>{lang.kanjikentei}</h1>
            <p>Kanji Kentei content...</p>
          </div>
        </div>
      </div>
    </>
  );
}