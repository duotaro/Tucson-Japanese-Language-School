


import React, { useContext } from "react";
import LocaleContext from "../../context/localeContext";
import Link from "next/link";
import { useLocale } from "../../../utils/locale";
import CustomImage from "../image/CustomImage";
import Image from "next/image";

export default function SponsorDetail({ item }) {
  const { locale } = useContext(LocaleContext);
  const { json } = useLocale(locale)

  //const hClass = "h-32 md:h-24 lg:h-28 xl:h-36 "
  const hClass = " "

  return (
    <div key={item.ordering} className={` text-center w-full `}>
        <a href={item.link} target="_blank" rel="noopener noreferrer">
          {/* <CustomImage src={item.image} alt={item.title} addClass="" hClass={hClass}/> */}
          <div className={`relative w-full ${hClass} rounded-lg shadow-md`}>
            <Image
              src={item.image}
              alt={item.title}
              width={400}
              height={400}
              layout="responsive" // 親要素に合わせてリサイズ
              objectFit="contain" // または 'contain' など
              className="rounded-lg"
              loading="lazy"
              decoding="async"
            />
          </div>
        </a>
    </div>
  );
}
