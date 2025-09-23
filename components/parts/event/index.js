
import React, { useContext, useState, useEffect, useCallback } from "react";
import EventDetail from "./detail";
import LocaleContext from "../../context/localeContext";
import { useLocale } from "@/utils/locale";
import Link from "next/link";
import Title from "../text/title";
import Section from "../section";
import { useRouter } from "next/router";

export default function Event({ list, isTop, locale="ja" }) {
  const router = useRouter();
  const { json } = useLocale(locale)

  // 年度抽出とフィルタリング用のstate
  const [selectedYear, setSelectedYear] = useState('all');
  const [filteredList, setFilteredList] = useState(list);
  const [availableYears, setAvailableYears] = useState([]);

  // イベントリストから年度を抽出する関数
  const extractYearsFromEvents = useCallback(() => {
    const years = new Set();
    list.forEach(item => {
      if (item.page && item.page.properties && item.page.properties.date && item.page.properties.date.date) {
        const eventDate = new Date(item.page.properties.date.date.start);
        const year = eventDate.getFullYear();
        years.add(year);
      }
    });
    return Array.from(years).sort((a, b) => b - a); // 降順でソート
  }, [list]);

  // 年度でイベントをフィルタリングする関数
  const filterEventsByYear = useCallback((year) => {
    if (year === 'all') {
      return list;
    }
    return list.filter(item => {
      if (item.page && item.page.properties && item.page.properties.date && item.page.properties.date.date) {
        const eventDate = new Date(item.page.properties.date.date.start);
        return eventDate.getFullYear() === parseInt(year);
      }
      return false;
    });
  }, [list]);

  // 年度選択時の処理
  const handleYearChange = (event) => {
    const year = event.target.value;
    setSelectedYear(year);
    const filtered = filterEventsByYear(year);
    setFilteredList(filtered);

    // URLクエリを更新
    const currentQuery = { ...router.query };
    if (year === 'all') {
      delete currentQuery.year;
    } else {
      currentQuery.year = year;
    }
    router.replace({
      pathname: router.pathname,
      query: currentQuery,
    }, undefined, { shallow: true });
  };

  // 初期化処理
  useEffect(() => {
    const years = extractYearsFromEvents();
    setAvailableYears(years);

    // URLクエリから年度を取得
    const { year } = router.query;
    if (year && years.includes(parseInt(year))) {
      setSelectedYear(year);
      const filtered = filterEventsByYear(year);
      setFilteredList(filtered);
    } else {
      setSelectedYear('all');
      setFilteredList(list);
    }
  }, [list, router.query, extractYearsFromEvents, filterEventsByYear]);


  let sectionPy = "md:py-2"
  let sectionPx = "px-4 sm:px-16 md:px-28 lg:px-32 xl:px-52"
  if(isTop){
    sectionPy = "py-4 md:py-6 lg:py-8"
  }

  // 縦長の列表示用のクラス
  var divClass = "space-y-6 pt-5 pb-5"
  if(isTop){
    divClass = "space-y-4 pt-5"
  }

  return (
    <Section py={sectionPy} px={sectionPx} >
      {isTop && (
      <div className="container px-6 mx-auto text-center" >
        <Title title={json.navigation.event || 'イベント'} link={`/news/event`}/>
      </div>
      )}
      <div className="container px-6 mx-auto">
        {/* 年度選択ドロップダウン（トップページ以外で表示） */}
        {!isTop && (
          <div className="mb-6 flex justify-center">
            <div className="inline-block">
              <label htmlFor="year-filter" className="block text-sm font-medium text-gray-700 mb-2">
                年度で絞り込み
              </label>
              <select
                id="year-filter"
                value={selectedYear}
                onChange={handleYearChange}
                className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 bg-white text-gray-900 min-w-[150px]"
              >
                <option value="all">すべての年度</option>
                {availableYears.map(year => (
                  <option key={year} value={year}>{year}年</option>
                ))}
              </select>
            </div>
          </div>
        )}

        <div className={divClass}>
          {!filteredList || filteredList.length == 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500">
                {selectedYear === 'all' ? 'イベントが見つかりません' : `${selectedYear}年のイベントが見つかりません`}
              </p>
            </div>
          )}
          {filteredList && filteredList.map((item, index) => {
              return (
                <EventDetail key={item.id || index} item={item} locale={locale}/>
              )
          })}
        </div>
      </div>
    </Section>
  );
}