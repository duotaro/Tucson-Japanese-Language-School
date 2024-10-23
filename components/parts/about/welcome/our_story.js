


import React, { useContext } from "react";
import { Text } from "../../../../pages/news/[id]"
import LocaleContext from "../../../context/localeContext";
import { useLocale } from "@/utils/locale";
import { StoryEntity } from "@/entity/storyEntity";
import Title from "../../text/title";
import Paragraphs from "../../text/paragraphs";
import Section from "../../section";

export default function OurStory({ story }) {
  const { locale } = useContext(LocaleContext);
  const { json } = useLocale(locale)

  let entity = new StoryEntity(story, locale == "ja")

  return (
    <Section>
      <div className="container mx-auto items-center ">
        <div className="flex flex-col ">
          <Title title={entity.title} />
          <Paragraphs text={entity.text} />
        </div>
      </div>
    </Section>
  );
}