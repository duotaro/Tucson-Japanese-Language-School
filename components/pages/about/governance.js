import Head from "next/head";
import React from 'react';
import { useLocale } from "../../../utils/locale";
import Directors from "../../parts/about/governance/directors.js";
import OrganisationFlowChart from "../../parts/about/governance/chart.js";
import GovernancePolicy from "../../parts/about/governance/governancePolicy.js";

export default function GovernancePage({ directors, orgChart, org_policys, locale }) {
  const { json, metaTitleExtension } = useLocale(locale)
  let lang = json.navigation

  return (
    <>
      <Head>
        <title>{lang.governance} - {metaTitleExtension} </title>
        <meta name="description" content={`${lang.governance} - ${json?.navigation?.description || lang.governance}`} />
        
        {/* Language alternatives for SEO */}
        <link rel="alternate" hrefLang="ja" href="https://tjschool.org/about/governance/" />
        <link rel="alternate" hrefLang="en" href="https://tjschool.org/en/about/governance/" />
        <link rel="alternate" hrefLang="x-default" href="https://tjschool.org/about/governance/" />
      </Head>

      <div className="">
        <div className="row">
          <Directors directors={directors || []} locale={locale}/>
          <OrganisationFlowChart orgChart={orgChart} locale={locale}/>
          <GovernancePolicy orgPolicys={org_policys || []} locale={locale}/>
        </div>
      </div>
    </>
  );
}