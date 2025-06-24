


import React, { useContext } from "react";
import ImageOptimizer from "@/components/download/ImageOptimizer"
import LocaleContext from "../../../context/localeContext";
import { useLocale } from "@/utils/locale";
import Title from "../../text/title";
import Paragraphs from "../../text/paragraphs";
import Section from "../../section";

export default function Vision({ vision, locale="ja" }) {

  return (
    <Section >
      <div className="container px-6 mx-auto">
        <div className="grid items-center gap-8 md:grid-flow-col-dense md:grid-cols-2 md:gap-12">
            {vision.image && (
              <ImageOptimizer
                baseName={vision.image?.baseName || 'vision'}
                pagePath={vision.image?.pagePath || 'about'}
                alt={vision.image?.alt || 'Vision'}
                objectFit="cover"
                className="md:col-start-2"
              />
            )}
            <div className="flex flex-col items-center">
                <Title title={vision.title} />
                <Paragraphs text={vision.text} />
            </div>
        </div>
      </div>
    </Section>
  );
}