import Head from "next/head";
import Layout from '@/components/layout'
import React, { useContext } from 'react';
import LocaleContext from "@/components/context/localeContext";
import { useLocale } from "@/utils/locale";
import { getDatabase } from "@/lib/notion";
import { fetchDataWithOptimizedImages, generateAlternateLinks } from "@/utils/imageUtils";
import Directors from "@/components/parts/about/governance/directors.js";
import OrganisationFlowChart from "@/components/parts/about/governance/chart.js";
import GovernancePolicy from "@/components/parts/about/governance/governancePolicy.js";
import savePdfIfNeeded from "@/components/download/pdf.js";

export default function GovernancePage({ directors, orgChart, org_policys }) {
  const locale = "en"
  const { json, metaTitleExtension } = useLocale(locale)
  let lang = json.navigation

  const alternateLinks = generateAlternateLinks("/about/governance");

  let breadcrumb = {
    parents: [{link: '/about/', title: "about"}],
    current: lang.governance
  }

  return (
    <Layout breadcrumb={breadcrumb}>
      <Head>
        <title>{lang.governance} - {metaTitleExtension} </title>
        <meta name="description" content={`${lang.governance} - ${lang.description}`} />
        <link rel="alternate" hrefLang="ja" href={alternateLinks.ja} />
        <link rel="alternate" hrefLang="en" href={alternateLinks.en} />
        <link rel="alternate" hrefLang="x-default" href={alternateLinks.default} />
      </Head>

      <div className="">
        <div className="row">
          <Directors directors={directors} locale={locale}/>
          <OrganisationFlowChart orgChart={orgChart} locale={locale}/>
          <GovernancePolicy orgPolicys={org_policys} locale={locale}/>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps = async (context) => {

  // get about
  let directors = await getDirector()
  let orgChart = await getOrgChart()
  let org_policys = await getOrgPolicy()
  return {
    props: {
      directors: directors,
      orgChart: orgChart[0],
      org_policys: org_policys
    }
  };
};

const getDirector = async () => {
  const database = await fetchDataWithOptimizedImages("10ba8c0ecf8c807ba7c6c7c9128d9770", "director")
  return database
}

const getOrgChart = async () => {
  const database = await fetchDataWithOptimizedImages("10ca8c0ecf8c80629eb3ee7c40cf9005", "org_chart")
  return database
}

const getOrgPolicy = async () => {
  const database = await getDatabase("10ca8c0ecf8c80998e3bfb0372ccc293")
  let props = []
  for(let item of database){
    props.push(item.properties)
  }

  await savePdfIfNeeded(props, "org_policy")
  return database
}