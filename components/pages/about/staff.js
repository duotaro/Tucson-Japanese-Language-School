import Head from "next/head";
import React from 'react';
import { useLocale } from "../../../utils/locale";
import ProfileCardList from "../../parts/about/staff/index.js";

export default function StaffPage({ staffList, roleList, locale }) {
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
          <ProfileCardList staffList={staffList || []} roleList={roleList || []} locale={locale} />
        </div>
      </div>
    </>
  );
}