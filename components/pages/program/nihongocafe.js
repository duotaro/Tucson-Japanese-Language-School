import Head from "next/head";
import React from 'react';
import { useLocale } from "../../../utils/locale";

export default function NihongocafePage({ nihongocafe, locale }) {
  const { json, metaTitleExtension } = useLocale(locale)
  let lang = json.navigation

  return (
    <>
      <Head>
        <title>{lang.nihongocafe || 'にほんご café'} - {metaTitleExtension} </title>
        <meta name="description" content={`${lang.nihongocafe || 'にほんご café'} - ${json?.navigation?.description || lang.nihongocafe || 'にほんご café'}`} />
        
        {/* Language alternatives for SEO */}
        <link rel="alternate" hrefLang="ja" href="https://tjschool.org/program/nihongocafe/" />
        <link rel="alternate" hrefLang="en" href="https://tjschool.org/en/program/nihongocafe/" />
        <link rel="alternate" hrefLang="x-default" href="https://tjschool.org/program/nihongocafe/" />
      </Head>

      <div className="">
        <div className="row">
          <div className="col-md-12">
            <h1>{lang.nihongocafe || 'にほんご café'}</h1>
            <p>Nihongo Cafe content...</p>
          </div>
        </div>
      </div>
    </>
  );
}