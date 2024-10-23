import React, { useContext, useEffect } from 'react';
import SliderDetail from '../slider/detail'

import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/css'; // デフォルトのテーマを読み込んでいます（コアスタイルのみ読み込む設定も可能）
import SliderEntity from '@/entity/sliderEntity';
import LocaleContext from '../../context/localeContext';
import { useLocale } from '@/utils/locale';


export default function SliderList({ sliderList }) {
  const { locale } = useContext(LocaleContext);
  const { json, metaTitleExtension } = useLocale(locale)

  let list = []
  for(const slider of sliderList) {
    const entity = new SliderEntity(slider, locale=="ja")
    if(entity.active){
      list.push(entity)
    }
  }
    return (
        <div className="mx-auto max-w-3xl">
          <section className='flex flex-col basis-4/5 justify-center '>
            <Splide
              aria-label="日々の光景"
              options={{
                type   : 'loop',
                rewind : true,
                autoplay: true, // 自動再生を有効
                interval: 3000, // 自動再生の間隔を3秒に設定
                perPage: 1,
                width: 768,
                lazyLoad: true ,
                gap: 50,
                padding: 50,
                breakpoints: {
                  768: {
                    gap: 0,
                    padding : 0,
                  },
                }
              }}
            >
              {list.map((post) => {
                return <SliderDetail post={post}></SliderDetail>
              })}
            </Splide>
          </section>
        </div>
    )
};

