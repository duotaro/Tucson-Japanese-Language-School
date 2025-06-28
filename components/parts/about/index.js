


import React, { useContext } from "react";
import LocaleContext from "../../context/localeContext";
import { useLocale } from "@/utils/locale";
import Title from "../text/title";
import Paragraphs from "../text/paragraphs";
import CustomImage from "../image/CustomImage";
import Section from "../section";
import LocaleLink from "../menu/LocaleLink";
import ImageOptimizer from '@/components/download/ImageOptimizer';
export default function About({ about, isTop, locale="ja" }) {
  const { json } = useLocale(locale)

  // console.log(about)

  return (
    <Section  >
      <div className="container px-6 mx-auto">
        <div className="grid items-center gap-8 md:grid-flow-col-dense md:grid-cols-2 md:gap-12">
            {about.image && (
              <ImageOptimizer
                baseName={about.image?.baseName || 'about'}
                pagePath={about.image?.pagePath || 'about'}
                alt={about.image?.alt || 'About'}
                responsive={true}
                responsiveType="standard"
                loading="lazy"
                placeholder="blur"
                objectFit="cover"
                className="md:col-start-2 rounded-lg shadow-md"
              />
            )}
            <div className="flex flex-col items-center">
                <Title title={about.title} />
                <Paragraphs text={about.text} />
                { isTop && (
                  <LocaleLink href={`/about/welcome/`} className="p-6 py-3 mt-3 rounded-md bg-blue-600 hover:bg-blue-700 mt-4 text-md transition-colors text-white max-w-sm">
                      {json.common.show_more}
                  </LocaleLink>
                )}
            </div>
        </div>
      </div>
    </Section>
  );
}