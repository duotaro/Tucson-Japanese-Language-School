


import React from "react";
import ImageOptimizer from "@/components/download/ImageOptimizer"
import Title from "../../text/title";
import Paragraphs from "../../text/paragraphs";
import Section from "../../section";

export default function Mission({ mission, locale="ja" }) {
  if (!mission) {
    return null;
  }

  return (
    <Section >
      <div className="container px-6 mx-auto">
        <div className="grid gap-8 md:grid-flow-col-dense md:grid-cols-2 md:gap-12">
            {mission.image && (
              <ImageOptimizer
                baseName={mission.image?.baseName || 'mission'}
                pagePath={mission.image?.pagePath || 'about'}
                alt={mission.image?.alt || 'Mission'}
                width={mission.image?.width || 400}
                height={mission.image?.height || 200}
                objectFit="cover"
                className="md:col-start-1 rounded-lg shadow-md"
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