import Head from "next/head";
import Layout from '@/components/layout'
import React, { useContext } from 'react';
import LocaleContext from "@/components/context/localeContext";
import { useLocale } from "@/utils/locale";
import ProfileCardList from "@/components/parts/about/staff";
// import { fetchDataWithOptimizedImages } from '@/lib/imageUtils.js';
import { generateAlternateLinks } from '@/utils/seoUtils.js';


export default function StaffPage({ staffList, roleList }) {
  const locale = "en"
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
        
        {/* Language alternatives for SEO */}
        <link rel="alternate" hrefLang="ja" href="https://tjschool.org/about/staff/" />
        <link rel="alternate" hrefLang="en" href="https://tjschool.org/en/about/staff/" />
        <link rel="alternate" hrefLang="x-default" href="https://tjschool.org/about/staff/" />
      </Head>

      <div className="">
        <div className="row">
          <ProfileCardList staffList={staffList} roleList={roleList} locale={locale}/>
        </div>
      </div>
    </Layout>
  );
}


export const getStaticProps = async (context) => {
  try {
    const { getDatabase } = await import("@/lib/notion");
    const { fetchDataWithOptimizedImages } = await import('@/lib/imageUtils.js');
    let roleList = await getDatabase("122a8c0ecf8c80059934c64693cc39ca")
    let staffList = await fetchDataWithOptimizedImages("9b85f554b3fc42dcb9d38f1ec87b168c", "staff");

    return {
      props: {
        staffList: staffList || [],
        roleList: roleList || []
      }
    };
  } catch (error) {
    return {
      props: {
        staffList: [],
        roleList: []
      }
    };
  }
};

