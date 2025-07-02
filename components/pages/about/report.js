import Head from "next/head";
import React from 'react';
import { useLocale } from "../../../utils/locale";
import AnualReportEntity, { createPastReports } from "../../../entity/anualReportEntity.js";
import Section from "../../parts/section/index.js";
import Title from "../../parts/text/title.js";
import PdfDownloads from "../../parts/files/downloadsPdf.js";

export default function ReportPage({ reportList, locale }) {
  const { json, metaTitleExtension } = useLocale(locale)
  let lang = json.navigation

  let resList = []
  try {
    for(const report of reportList || []){
      const entity = new AnualReportEntity(report, locale == "ja", null)
      resList.push(entity)
    }
  } catch (error) {
    console.log('Error processing report list:', error);
  }
  
  let pastList = []
  try {
    pastList = createPastReports(locale == "ja")
  } catch (error) {
    console.log('Error creating past reports:', error);
  }
  
  const all = resList.concat(pastList);
  all.sort((a, b) => Number(b.year) - Number(a.year));

  const latest = all.length > 0 ? all[0] : null
  const past = all.length > 1 ? all.slice(1) : []

  return (
    <>
      <Head>
        <title>{lang.report} - {metaTitleExtension} </title>
        <meta name="description" content={`${lang.report} - ${json?.navigation?.description || lang.report}`} />
        
        {/* Language alternatives for SEO */}
        <link rel="alternate" hrefLang="ja" href="https://tjschool.org/about/report/" />
        <link rel="alternate" hrefLang="en" href="https://tjschool.org/en/about/report/" />
        <link rel="alternate" hrefLang="x-default" href="https://tjschool.org/about/report/" />
      </Head>

      <div className="">
        <div className="row">
          <Section py="py-8 md:py-6 lg:py-10" >
            <div className="container px-6 mx-auto">
              <div className="flex flex-wrap -mx-3 mb-5">
                <div className="w-full max-w-full px-3 mx-auto">
                  <div className="flex flex-col items-center text-center mb-10">
                    <Title title={lang.report} />
                  </div>
                  {latest ? (
                    <div className="items-center text-center sm:mx-10 md:mx-32 lg:mx-60 my-10">
                      <PdfDownloads filePath={latest.pdf} title={latest.title} isNew="true"/>  
                    </div>
                  ) : (
                    <div className="text-center text-gray-500 my-10">
                      <p>年間報告書を読み込み中...</p>
                    </div>
                  )}
                  <hr className="border my-10 "/>
                  {/* PDFリンクセクション */}
                  <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
                    {past && past.length > 0 ? (
                      past.map((item, index) => {
                        return (
                          <PdfDownloads key={item.id || item.title || index} filePath={item.pdf} title={item.title} />  
                        )
                      })
                    ) : (
                      <div className="col-span-full text-center text-gray-500">
                        <p>過去の報告書はありません</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Section>
        </div>
      </div>
    </>
  );
}