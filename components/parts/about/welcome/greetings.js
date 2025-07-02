


import React from "react";
import { GreetingEntity } from "@/entity/greetingEntity";
import Title from "../../text/title";
import Paragraphs from "../../text/paragraphs";
import Section from "../../section";
import ImageOptimizer from '@/components/download/ImageOptimizer';

export default function Greeting({ greeting, locale="ja" }) {

  let entity = new GreetingEntity(greeting, locale == "ja")
  
  // textが存在しない場合の処理
  if (!entity.text || !entity.text[0]) {
    return null; // コンポーネントを表示しない
  }
  
  let text = entity.text[0].text.content.split("\n")
  let text1 = {
    type: 'text',
    text: {content:"", link: null},
    annotations: {
      bold: false,
      italic: false,
      strikethrough: false,
      underline: false,
      code: false,
      color: 'default'
    },
    plain_text:"",
    href: null
  }
  let text2 = {
    type: 'text',
    text: {content:"", link: null},
    annotations: {
      bold: false,
      italic: false,
      strikethrough: false,
      underline: false,
      code: false,
      color: 'default'
    },
    plain_text:"",
    href: null
  }

  let cutIndex = locale == "ja" ? 4 : 2;
  
  let text1content = text.slice(0,cutIndex).map(item => item === ' ' ? '\n' : item).join('\n');
  let text2content = text.slice(cutIndex+1).map(item => item === ' ' ? '\n' : item).join('\n');

  text1.text.content = text1content
  text1.plain_text = text1content
  text2.text.content = text2content
  text2.plain_text = text2content

  return (
    <Section bg="bg-gray-50">
      <div className="container mx-auto">
        <div className="flex flex-col items-center  ">
          <Title title={entity.title} />
        </div>
        <div className="grid items-center gap-8 md:grid-flow-col-dense md:grid-cols-2 md:gap-12">
            <div className="flex flex-col items-center  ">
                <Paragraphs text={[text1]} />
            </div>
            <div className="flex flex-col items-center py-5 px-10 sm:px-20 md:px-0 lg:px-5 image-hover h-80 sm:h-96 md:h-80 ">
              {entity.image && typeof entity.image === 'object' && entity.image.baseName ? (
                <ImageOptimizer
                  baseName={entity.image.baseName}
                  pagePath={entity.image.pagePath}
                  alt={entity.image.alt || "Greetings"}
                  
                  
                  
                  
                  objectFit="cover"
                  className="rounded-lg shadow-md"
                />
              ) : (
                <ImageOptimizer
                  baseName="greeting"
                  pagePath="about"
                  alt="Greetings"
                  
                  
                  
                  
                  objectFit="cover"
                  className="rounded-lg shadow-md"
                />
              )}
            </div>
        </div>
        <div className="grid items-center ">
            <div className="flex flex-col items-center  ">
                <Paragraphs text={[text2]} />
            </div>
        </div>
      </div>
    </Section>
  );
}