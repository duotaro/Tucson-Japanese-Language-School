import Head from "next/head";
import Layout from '@/components/layout'
import React, { useContext } from 'react';
import LocaleContext from "@/components/context/localeContext";
import { useLocale } from "@/utils/locale";
import Contact from "@/components/parts/contact";
import Section from "@/components/parts/section";


export default function ContactPage({ isTop }) {
  const locale = "en"
  const { json, metaTitleExtension } = useLocale(locale)
  let lang = json.navigation

  let breadcrumb = {
    parents: [],
    current: lang.contact
  }


  return (
    <Layout breadcrumb={breadcrumb}>
      <Head>
        <title>{lang.contact} - {metaTitleExtension} </title>
        <meta name="description" content={`${lang.contact} - ${lang.description}`} />
      </Head>

      <div className="container mt-5">
        <Section py="py-2 md:py-4 lg:py-6">
            <div className="container px-6 mx-auto">
              <Contact />
            </div>
        </Section>
      </div>
      
    </Layout>
  );
}