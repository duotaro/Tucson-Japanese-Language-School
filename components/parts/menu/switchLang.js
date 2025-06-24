import Link from "next/link";
import { useContext } from "react";
import LocaleContext from "../../context/localeContext";
import { useRouter } from 'next/router';
import {
  GlobeAltIcon
} from '@heroicons/react/24/outline'

export default function SwitchLang({}) {
    const { locale } = useContext(LocaleContext);
    const router = useRouter();

    // 現在のパスから対応する言語のパスを生成
    const getAlternateUrl = (targetLocale) => {
        if (targetLocale === 'ja' && router.asPath.includes('/en/')) {
            return router.asPath.replace('/en/', '/');
        }
        if (targetLocale === 'en' && !router.asPath.includes('/en/')) {
            return `/en${router.asPath}`;
        }
        return router.asPath;
    };

    let linkClass = "flex items-center justify-center p-2 uppercase text-white hover:text-gray-200 transition duration-300 ease-in-out"
    
    return (
        <>
          {locale == "ja" && (
            <Link href={getAlternateUrl("en")} className={linkClass} hrefLang="en">
                <GlobeAltIcon aria-hidden="true" className="h-6 w-6 mr-1"/>
                <span>EN</span>
            </Link>
          )}
          {locale == "en" && (
            <Link href={getAlternateUrl("ja")} className={linkClass} hrefLang="ja">
                <GlobeAltIcon aria-hidden="true" className="h-6 w-6 mr-1"/>
                <span>JA</span>
            </Link>
          )}
        </>
    );
}