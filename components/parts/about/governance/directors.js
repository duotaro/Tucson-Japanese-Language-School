


import React from "react";
import Link from "next/link"
import { useLocale } from "@/utils/locale";
import Title from "../../text/title";
import Paragraphs from "../../text/paragraphs";
import { DirectorsEntity } from "@/entity/directorsEntity";
import Section from "../../section";
import ImageOptimizer from '@/components/download/ImageOptimizer';

export default function Directors({ directors, locale="ja" }) {
  const { json } = useLocale(locale)
  const lang = json.director

  const list = directors.sort((a, b) => a.properties["ordering"].number - b.properties["ordering"].number);
        

  return (
    <Section py="py-8 md:py-6 lg:py-10" >
      <div className="container px-6 mx-auto">
        <div className="flex flex-wrap mb-5">
          <div className="w-full max-w-full  mx-auto">
            <div className="relative flex-[1_auto] flex flex-col break-words min-w-0 m-5">
              <div className="flex-auto block py-8 px-3">
                <div>
                  <div className="flex flex-col items-center text-center mb-10">
                    {/* <h1 className="mb-2 text-[1.75rem] font-semibold text-dark">{lang.title}</h1> */}
                    <Title title={lang.title} />
                    {/* <span className="text-[1.15rem] font-medium text-muted">{lang.description}</span> */}
                    {/* <Paragraphs text={lang.description} /> */}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full">
                    {directors.map((director, index) => {
                      let entity = new DirectorsEntity(director, locale == "ja")
                      return (
                        <div key={director.id || index} className="flex flex-col text-center">
                          <div className="inline-block mb-4 relative shrink-0 rounded-[.90rem]">
                            <ImageOptimizer
                              baseName={entity.image?.baseName || 'profile'}
                              pagePath={entity.image?.pagePath || 'director'}
                              alt={entity.image?.alt || entity.name}
                              width={130}
                              height={130}
                              objectFit="cover"
                              className="inline-block shrink-0 rounded-lg w-[130px] h-[130px] shadow-md"
                            />
                          </div>
                          <div className="text-center">
                            <a href="javascript:void(0)" className="text-dark font-semibold hover:text-primary text-sm transition-colors duration-200 ease-in-out">{entity.name}</a>
                            {entity.positions.map((position, index) => {
                              return (
                                <React.Fragment key={index}>
                                {index == 0 && (
                                  <br />
                                )}
                                {index != 0 && (
                                  <> / </>
                                )}
                                <span className={`text-muted text-sm text-gray-600`}>{position.name}</span>
                                </React.Fragment>
                              )
                            })}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}