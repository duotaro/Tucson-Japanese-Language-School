

import React, { useContext, useState, useEffect } from "react";
import NewsDetail from "./detail";
import LocaleContext from "../../context/localeContext";
import { useLocale } from "../../../utils/locale";
import Link from "next/link";
import Title from "../text/title";
import Section from "../section";
import Pagination from "../nav/pagination";
import { useRouter } from "next/router";

const itemsPerPage = 12

export default function News({ list, isTop }) {
  const router = useRouter();


  const updateQuery = (p) => {
    const currentQuery = { ...router.query };
    const newQuery = {
      ...currentQuery,
      p: p, // 値を1に設定
    };

    // クエリを更新
    router.replace({
      pathname: router.pathname,
      query: newQuery,
    }, undefined, { shallow: true });
  };

  const { locale } = useContext(LocaleContext);
  const { json } = useLocale(locale)

  const { p } = router.query;
  const [currentPage, setCurrentPage] = useState(p ? p : 1)
  const totalPages = Math.ceil(list.length / itemsPerPage);
  const [pList, setPList] = useState(list.slice(0, itemsPerPage))

  const paginateArray = (page) => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return list.slice(startIndex, endIndex);
  };

  const nextPage = () => {
    const cp = Number(currentPage) + 1
    if(cp > totalPages){
      return
    }
    setCurrentPage(cp)
    const detail = paginateArray(cp)
    setPList(detail)
    updateQuery(cp)
  }
  const prevPage = () => {
    const cp = Number(currentPage) - 1
    if(cp < 0){
      return
    }
    setCurrentPage(cp)
    const detail = paginateArray(cp)
    setPList(detail)
    updateQuery(cp)
  }

  const goPage = (page) => {
    const cp = page
    if(cp < 0){
      return
    }
    setCurrentPage(cp)
    const detail = paginateArray(cp)
    setPList(detail)
    updateQuery(cp)
  }

  useEffect(() => {
    if (router.query.p) {
      const p = router.query.p

      setCurrentPage(p);
      const detail = paginateArray(p)
      setPList(detail)
    }
  }, [router.query.p]); // pが変更されたときに実行


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
          {!pList || pList.length == 0 && (
            <p>not found</p>
          )} 
          {pList && pList.map((item) => {
              return (
                // <Link href={`/testnews/${id}`}>{id}</Link>
                <NewsDetail item={item}/>
              )
          })}
          </div>
      </div>
      {!isTop && (
        <div className="container px-6 mx-auto text-center" >
          <Pagination currentPage={currentPage} totalPages={totalPages} onTouchedPage={goPage} onTouchedPrev={prevPage} onTouchedNext={nextPage}/>
        </div>
      )}
      </Section>
  );
}