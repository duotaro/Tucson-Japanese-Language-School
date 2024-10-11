import Head from "next/head";
import Layout from '../../../components/layout'
import React, { useContext } from 'react';
import LocaleContext from "../../../components/context/localeContext";
import { useLocale } from "../../../utils/locale";
import ProfileCardList from "../../../components/parts/about/staff";


export default function StaffPage({  }) {
  const { locale } = useContext(LocaleContext);
  const { json, metaTitleExtension } = useLocale(locale)
  let lang = json.navigation

  let breadcrumb = {
    parents: [{link: '/about/', title: "about"}],
    current: lang.staff
  }

  return (
    <Layout breadcrumb={breadcrumb}>
      <Head>
        <title>{lang.staff} - {metaTitleExtension} </title>
        <meta name="description" content={`${lang.staff} - ${lang.description}`} />
      </Head>

      <div className="">
        <div className="row">
          <ProfileCardList />
        </div>
      </div>
    </Layout>
  );
}