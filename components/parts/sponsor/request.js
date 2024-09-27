


import React, { useContext } from "react";
import LocaleContext from "../../context/localeContext";
import { useLocale } from "../../../utils/locale";
import Section from "../section";
import Title from "../text/title";
import Paragraphs from "../text/paragraphs";

export default function SponsorRequest({ support, sponsor, donation }) {
  const { locale } = useContext(LocaleContext);
  const { json } = useLocale(locale)

  const title = locale == "ja" ? support.properties["title"].title[0].text.content : support.properties["en"].rich_text[0].text.content
  const text = locale == "ja" ? support.properties["text"].rich_text[0].text.content : support.properties["text_en"].rich_text[0].text.content

  const sponsortitle = locale == "ja" ? sponsor.properties["title"].title[0].text.content : sponsor.properties["en"].rich_text[0].text.content
  const sponsortext = locale == "ja" ? sponsor.properties["text"].rich_text[0].text.content : sponsor.properties["text_en"].rich_text[0].text.content


  const donationtitle = locale == "ja" ? donation.properties["title"].title[0].text.content : donation.properties["en"].rich_text[0].text.content
  const donationtext = locale == "ja" ? donation.properties["text"].rich_text[0].text.content : donation.properties["text_en"].rich_text[0].text.content

  return (
    <>
      <Section py="py-8 md:py-12 lg:py-20" bg="bg-slate-50">
          <div className="container px-6 mx-auto">
            <div className="flex flex-col items-center mb-5 ">
              <Title title={title} />
            </div>
            <div className="grid items-center gap-8">
              <div className="flex flex-col items-center ">
                <Paragraphs text={text} maxWidth="full"/>
              </div>
            </div>
          </div>
      </Section>
      <Section py="py-8 md:py-12 lg:py-20" bg="bg-slate-100">
          <div className="container px-6 mx-auto">
            <div className="flex flex-col items-center mb-5 ">
              <Title title={sponsortitle} />
            </div>
            <div className="grid items-center gap-8">
              <div className="flex flex-col items-center ">
                <Paragraphs text={sponsortext} maxWidth="full"/>
              </div>
            </div>
          </div>
      </Section>
      <Section py="py-8 md:py-12 lg:py-20" >
          <div className="container px-6 mx-auto">
            <div className="flex flex-col items-center mb-5 ">
              <Title title={donationtitle} />
            </div>
            <div className="grid items-center gap-8">
              <div className="flex flex-col items-center ">
                <Paragraphs text={donationtext} maxWidth="full"/>
              </div>
            </div>
          </div>
      </Section>
    </>
  );
}
