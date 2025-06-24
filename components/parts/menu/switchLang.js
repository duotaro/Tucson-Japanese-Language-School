import Link from "next/link";
import { useState, useContext } from "react";
import LocaleContext from "../../context/localeContext";
import { useRouter } from 'next/router';
import {
  GlobeAltIcon
} from '@heroicons/react/24/outline'
export default function SwitchLang({}) {
    const { locale, setLocale } = useContext(LocaleContext);
    const router = useRouter();


    const handleClick = (locale) => {
        setLocale(locale)
        if (locale === 'ja' && router.asPath.includes('/en/')) {
          // console.log("-----------------")
          // console.log(router.pathname)
          // console.log("-----------------")
          const newPath = router.asPath.replace('/en/', '/'); // /en/を除いたパス
          router.push(newPath, undefined, { shallow: true }); // shallowオプションでクエリのみ更新
        } 
        if (locale === 'en' && !router.asPath.includes('/en/')) {
          // console.log("-----------------")
          // console.log(router.pathname)
          // console.log("-----------------")
          const newPath = `/en${router.asPath}`; // /en/を追加したパス
          router.push(newPath, undefined, { shallow: true });
        } 
    };

    let buttonClass = "flex items-center justify-center p-2 uppercase text-black hover:text-gray-600 transition duration-300 ease-in-out"
    return (
        <>
          {locale == "ja" && (
            <button className={buttonClass} onClick={() => handleClick("en")}>
                <GlobeAltIcon aria-hidden="true" className="h-6 w-6 mr-1"/>
                <span>EN</span>
            </button>
          )}
          {locale == "en" && (
            <button className={buttonClass} onClick={() => handleClick("ja")}>
                <GlobeAltIcon aria-hidden="true" className="h-6 w-6 mr-1"/>
                <span>JA</span>
            </button>
          )}
        </>
    );
}