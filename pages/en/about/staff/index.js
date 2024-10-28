import Head from "next/head";
import Layout from '@/components/layout'
import React, { useContext } from 'react';
import LocaleContext from "@/components/context/localeContext";
import { useLocale } from "@/utils/locale";
import ProfileCardList from "@/components/parts/about/staff";
import { getDatabase } from "@/lib/notion";
import saveImageIfNeeded from "@/components/download";


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
      </Head>

      <div className="">
        <div className="row">
          <ProfileCardList staffList={staffList} roleList={roleList}/>
        </div>
      </div>
    </Layout>
  );
}


export const getStaticProps = async (context) => {

  let roleList = await getDatabase("122a8c0ecf8c80059934c64693cc39ca")
  // get about
  let staffList = await getDatabase("9b85f554b3fc42dcb9d38f1ec87b168c")
  let props = []
  for(let staff of staffList){
    props.push(staff.properties)
  }

  await saveImageIfNeeded(props, "staff")


  return {
    props: {
      staffList: staffList,
      roleList: roleList
    },
    revalidate: 1
  };
};

