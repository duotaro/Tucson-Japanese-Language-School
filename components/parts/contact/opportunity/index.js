import React, { useContext } from "react";
import Image from "next/image"
import Link from "next/link"
import LocaleContext from "../../../context/localeContext";
import { useLocale } from "@/utils/locale";
import OpportunityEntity from "@/entity/opportunityEntity";
import Title from "../../text/title";
import Paragraphs from "../../text/paragraphs";
import ImageOptimizer from "@/components/download/ImageOptimizer"
import Section from "../../section";
import LocaleLink from "../../menu/LocaleLink";

export default function Opportunity({ opportunity }) {
  const { locale } = useContext(LocaleContext);
  const { json } = useLocale(locale)

  const entity = new OpportunityEntity(opportunity[0], locale == "ja")

  return (
    <Section >
      <div className="container px-6 mx-auto">
        <div className="grid items-center gap-8 md:grid-flow-col-dense md:grid-cols-2 md:gap-12">
            {entity.image && (
              <ImageOptimizer
                baseName={entity.image?.baseName || 'opportunity'}
                pagePath={entity.image?.pagePath || 'opportunity'}
                alt={entity.image?.alt || 'Opportunity'}
                width={entity.image?.width || 400}
                height={entity.image?.height || 200}
                objectFit="cover"
                className="md:col-start-1 rounded-lg shadow-md"
              />
            )}
            <div className="flex flex-col items-center">
                <Title title={entity.title} fontSize="text-xl  sm:text-2xl lg:text-3xl"/>
                <Paragraphs text={entity.text}/>
                <LocaleLink href={`/contact/opportunity/`} className="px-6 py-3 mt-3 text-md transition-colors rounded-md bg-blue-600 text-white hover:bg-blue-700">
                    {json.common.show_more}
                </LocaleLink>
            </div>
        </div>
      </div>
    </Section>
  );
}