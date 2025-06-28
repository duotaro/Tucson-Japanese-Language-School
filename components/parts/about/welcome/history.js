


import React, { useContext } from "react";
import LocaleContext from "../../../context/localeContext";
import { useLocale } from "@/utils/locale";
import { HistoryEntity } from "@/entity/historyEntity";
import { Text } from "../../text/Text"
import Title from "../../text/title";
import Paragraphs from "../../text/paragraphs";
import Section from "../../section";
import ImageOptimizer from '@/components/download/ImageOptimizer';

export default function History({ history, locale="ja"  }) {
  let entity = new HistoryEntity(history, locale == "ja")
  
  return (
    <>
    <Section >
      <div className="container mx-auto items-center">
        <div className="flex flex-col items-center  ">
            <Title title={entity.title} />
            <Paragraphs text={entity.text} />
        </div>
      </div>
    </Section>
    <Section py="py-2 md:py-4 lg:py-6" >
      <div className="container px-6 mx-auto">
        <div className="grid items-center gap-8 md:grid-flow-col-dense md:grid-cols-3 md:gap-12">
            <div className="md:col-start-1">
              {entity.image1 && (
                <ImageOptimizer
                  baseName={entity.image1?.baseName || 'historty1'}
                  pagePath={entity.image1?.pagePath || 'history'}
                  alt={entity.image1?.alt || 'history1'}
                  responsive={true}
                  responsiveType="card"
                  loading="lazy"
                  placeholder="blur"
                  objectFit="cover"
                  className="rounded-lg w-full h-auto"
                />
              )}
            </div>
            <div className="md:col-start-2">
              {entity.image2 && (
                <ImageOptimizer
                  baseName={entity.image2?.baseName || 'historty2'}
                  pagePath={entity.image2?.pagePath || 'history'}
                  alt={entity.image2?.alt || 'history2'}
                  responsive={true}
                  responsiveType="card"
                  loading="lazy"
                  placeholder="blur"
                  objectFit="cover"
                  className="rounded-lg w-full h-auto"
                />
              )}
            </div>
            <div className="md:col-start-3">
              {entity.image3 && (
                <ImageOptimizer
                  baseName={entity.image3?.baseName || 'historty3'}
                  pagePath={entity.image3?.pagePath || 'history'}
                  alt={entity.image3?.alt || 'history3'}
                  responsive={true}
                  responsiveType="card"
                  loading="lazy"
                  placeholder="blur"
                  objectFit="cover"
                  className="rounded-lg w-full h-auto"
                />
              )}
            </div>
        </div>
      </div>
    </Section>
    </>
  );
}