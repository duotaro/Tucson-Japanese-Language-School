import Head from "next/head";
import React from 'react';
import { useLocale } from "../../../utils/locale";
import Enrollment from "../../parts/admission/forms/enrollment.js";
import Forms from "../../parts/admission/forms/forms.js";
import Price from "../../parts/admission/forms/price.js";
import Qualification from "../../parts/admission/forms/qualification.js";

export default function FormsPage({ qualification, price, discountFamily, discountStaff, enrollment, locale }) {
  const { json, metaTitleExtension } = useLocale(locale)
  let lang = json.navigation

  return (
    <>
      <Head>
        <title>{lang.forms} - {metaTitleExtension} </title>
        <meta name="description" content={`${lang.forms} - ${lang.description}`} />
        
        {/* Language alternatives for SEO */}
        <link rel="alternate" hrefLang="ja" href="https://tjschool.org/admissions/forms/" />
        <link rel="alternate" hrefLang="en" href="https://tjschool.org/en/admissions/forms/" />
        <link rel="alternate" hrefLang="x-default" href="https://tjschool.org/admissions/forms/" />
      </Head>

      <div className="">
        <div className="row">
          <Qualification qualification={qualification || []} locale={locale} />
          <Price price={price || []} discountFamily={discountFamily || []} discountStaff={discountStaff || []} locale={locale} />
          <Enrollment enrollment={enrollment || []} locale={locale} />
          <Forms locale={locale} />
        </div>
      </div>
    </>
  );
}