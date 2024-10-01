

import React, { useContext } from "react";
import NewsDetail from "./detail";
import LocaleContext from "../../context/localeContext";
import { useLocale } from "../../../utils/locale";
import Link from "next/link";
import Title from "../text/title";
import Section from "../section";

export default function News({ list, isTop }) {
  const { locale } = useContext(LocaleContext);
  const { json } = useLocale(locale)

  let sectionPy = "md:py-2"
  let sectionPx = "px-4 sm:px-16 md:px-28 lg:px-32 xl:px-52"
  if(isTop){
    sectionPy = "py-4 md:py-6 lg:py-8"
    //sectionPx = "px-40"
  }

  var divClass = "grid justify-center gap-10 pt-5 pb-5 md:grid-cols-2 lg:grid-cols-3"
  if(isTop){
    divClass = "grid justify-center gap-10 pt-5 md:grid-cols-2 lg:grid-cols-3"
  }

  return (
    <Section py={sectionPy} bg="bg-white" px={sectionPx}>
      {isTop && (
      <div className="container px-6 mx-auto text-center" >
        <Title title={json.navigation.news} link={`/news`}/>
      </div>
      )}
      <div className="container px-6 mx-auto">
        <div className={divClass}>
          {list.map((item) => {
              return (
                // <Link href={`/testnews/${id}`}>{id}</Link>
                <NewsDetail item={item}/>
              )
          })}
          </div>
      </div>
      </Section>
  );
}