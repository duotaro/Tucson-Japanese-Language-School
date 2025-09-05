


import React, { useContext } from "react";
import LocaleContext from "../../../context/localeContext";
import Title from "../../text/title";
import Paragraphs from "../../text/paragraphs";
import PolicyEntity from "@/entity/policyEntity";
import PdfDownloads from "../../files/downloadsPdf";
import Section from "../../section";
import ImageOptimizer from '@/components/download/ImageOptimizer';

export default function Policy({ policy }) {
  const { locale } = useContext(LocaleContext);

  console.log("[Policy Component] Received policy:", policy);
  let entity = new PolicyEntity(policy, locale == "ja")
  console.log("[Policy Component] Entity created:", entity);
  console.log("[Policy Component] Entity image:", entity.image);

  return (
    <Section>
      <div className="container px-6 mx-auto">
        <div className="grid items-center gap-8 md:grid-flow-col-dense md:grid-cols-2 md:gap-12">
            {entity.image && (
              <ImageOptimizer
                baseName={entity.image?.baseName || 'policy'}
                pagePath={entity.image?.pagePath || 'policy'}
                alt={entity.image?.alt || 'Policy'}
                
                objectFit="cover"
                className="md:col-start-1 rounded-lg shadow-md"
              />
            )}
            <div className="flex flex-col items-center">
                <Title title={entity.title} />
                <div className="mt-6 max-w-xs">
                  <PdfDownloads filePath={entity.pdf} title={entity.title} />
                </div>
            </div>
        </div>
      </div>
    </Section>
  );
}