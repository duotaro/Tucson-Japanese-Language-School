


import React, { useContext } from "react";
import LocaleContext from "../../context/localeContext";
import Link from "next/link";
import { useLocale } from "@/utils/locale";
import ImageOptimizer from '@/components/download/ImageOptimizer';

export default function SponsorDetail({ item }) {
  const { locale } = useContext(LocaleContext);
  const { json } = useLocale(locale)

  //const hClass = "h-32 md:h-24 lg:h-28 xl:h-36 "
  const hClass = " "

  return (
    <div key={item.ordering} className={` text-center w-full `}>
        <a href={item.link} target="_blank" rel="noopener noreferrer">
          <div className={`relative w-full ${hClass} bg-white border border-gray-200 rounded-lg shadow-md p-4`}>
            <ImageOptimizer
              baseName={item.image?.baseName || 'sponsor'}
              pagePath={item.image?.pagePath || 'sponsor'}
              alt={item.image?.alt || item.title}
              width={200}
              height={150}
              objectFit="contain"
              className="rounded-lg w-full h-auto"
            />
          </div>
        </a>
    </div>
  );
}
