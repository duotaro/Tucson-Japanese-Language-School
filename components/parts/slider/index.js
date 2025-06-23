// components/parts/slider/index.js

import React, { useContext, useEffect } from 'react';
import SliderDetail from '../slider/detail'

import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/css';
import SliderEntity from '@/entity/sliderEntity'; // SliderEntity をインポート
import LocaleContext from '../../context/localeContext';
import { useLocale } from '@/utils/locale';


export default function SliderList({ sliderList }) { // sliderList は `pages/index.js` からの加工済みNotionデータ
  const { locale } = useContext(LocaleContext);
  const { json, metaTitleExtension } = useLocale(locale)

  let list = []
  for(const slider of sliderList) { // slider は `pages/index.js` の fetchData が返したNotionのitemオブジェクト
    // ★ `SliderEntity` のコンストラクタに、加工済みのNotionアイテムとロケール情報を渡す
    const entity = new SliderEntity(slider, locale === "ja")
    if(entity.active){
      list.push(entity)
    }
  }

  // ★ スライダーのオプションから幅、ギャップ、パディングを削除（画像表示が壊れた原因の一つ）
  const splideOptions = {
    type   : 'loop',
    rewind : true,
    autoplay: true,
    interval: 3000,
    perPage: 1,
    perMove: 1, // 1枚ずつ移動するように明示
    lazyLoad: true ,
    // width, gap, padding は削除またはコメントアウト
    // breakpoints も削除したオプションに関連するものは不要に
    // breakpoints: {
    //   768: {
    //     gap: 0,
    //     padding : 0,
    //   },
    // }
  };

    return (
        <div className="mx-auto max-w-3xl">
          <section className='flex flex-col basis-4/5 justify-center '>
            <Splide
              aria-label="日々の光景"
              options={splideOptions} // 修正したオプションを使用
            >
              {list.map((post) => {
                // post は SliderEntity のインスタンス
                // key プロパティは React のリストレンダリングで必須
                return <SliderDetail post={post} key={post.id}></SliderDetail>
              })}
            </Splide>
          </section>
        </div>
    )
};