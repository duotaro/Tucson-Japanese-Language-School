


import React, { useContext } from "react";
import ImageOptimizer from "@/components/download/ImageOptimizer"
import LocaleContext from "../../../context/localeContext";
import { useLocale } from "@/utils/locale";
import Title from "../../text/title";
import Paragraphs from "../../text/paragraphs";
import Section from "../../section";

export default function Mission({ mission }) {
  const { locale } = useContext(LocaleContext);
  const { json } = useLocale(locale)

  return (
    <Section bg="bg-gray-50">
      <div className="container px-6 mx-auto">
        <div className="grid gap-8 md:grid-flow-col-dense md:grid-cols-2 md:gap-12">
            <ImageOptimizer
              baseName={mission.image.baseName}
              pagePath={mission.image.pagePath}
              alt={mission.image.alt}
              width={mission.image.width || 200}
              height={mission.image.height || 100}
              objectFit="cover"
              className="md:col-start-1"
            />
            <div className="flex flex-col items-center t ">
                <Title title={mission.title} />
                <Paragraphs text={mission.text} />
            </div>
        </div>
      </div>
    </Section>
  );
}