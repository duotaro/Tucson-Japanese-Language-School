import Head from "next/head";
import Layout from '@/components/layout'
import React, { useContext, useState } from 'react';
import LocaleContext from "@/components/context/localeContext";
import { useLocale } from "@/utils/locale";
import { getDatabase } from "@/lib/notion";
import PricingSection from "@/components/parts/admission/forms/ price";
import FormSection from "@/components/parts/admission/forms/forms";
import Qualification from "@/components/parts/admission/forms/qualification";
import Enrollment from "@/components/parts/admission/forms/enrollment";


export default function AdmissionFormsPage({ qualification, price, discountFamily, discountStaff, enrollment }) {
  const { locale } = useContext(LocaleContext);
  const { json, metaTitleExtension } = useLocale(locale)
  let lang = json.navigation

  let breadcrumb = {
    parents: [{link: '/admissions/', title: "admissions"}],
    current: lang.forms
  }


  return (
    <Layout breadcrumb={breadcrumb}>
      <Head>
        <title>{lang.forms} - {metaTitleExtension} </title>
        <meta name="description" content={`${lang.forms} - ${lang.description}`} />
      </Head>

      <div className="">
        <div className="row">
          <Qualification qualification={qualification} locale={locale}/>
          <PricingSection price={price} discountFamily={discountFamily} discountStaff={discountStaff} locale={locale}/>
          <Enrollment enrollment={enrollment} locale={locale}/>
          <FormSection  locale={locale}/>
        </div>
      </div>
    </Layout>
  );
}


export const getStaticProps = async (context) => {
  const qualification = await getDatabase("11ba8c0ecf8c80e4a3d6cb2cae30ac08")
  const price = await getDatabase("11ba8c0ecf8c8068afc9c4ba38330221")
  const discountFamily = await getDatabase("11ba8c0ecf8c80daa4a0e58b368b1dc3")
  const discountStaff = await getDatabase("11ca8c0ecf8c80658187d57a17357400")
  const enrollment = await getDatabase("11ba8c0ecf8c8059bbddf42453136463")
  return {
    props: {
      qualification: qualification,
      price: price,
      discountFamily: discountFamily,
      discountStaff: discountStaff,
      enrollment: enrollment
    }
  };
};

