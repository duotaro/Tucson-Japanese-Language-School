


import React, { useContext } from "react";
import ImageOptimizer from "@/components/download/ImageOptimizer"
import LocaleContext from "../../../context/localeContext";
import { useLocale } from "@/utils/locale";
import Title from "../../text/title";
import Paragraphs from "../../text/paragraphs";
import Section from "../../section";

export default function Mission({ mission, locale="ja" }) {
  return (
    <Section >
      <div className="container px-6 mx-auto">
        <div className="grid gap-8 md:grid-flow-col-dense md:grid-cols-2 md:gap-12">
            {mission.image && (
              <ImageOptimizer
                baseName={mission.image?.baseName || 'mission'}
                pagePath={mission.image?.pagePath || 'about'}
                alt={mission.image?.alt || 'Mission'}
                objectFit="cover"
                className="md:col-start-1"
              />
            )}
            <div className="flex flex-col items-center">
                <Title title={mission.title} />
                <Paragraphs text={mission.text} />
            </div>
        </div>
      </div>
    </Section>
  );
}