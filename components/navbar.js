import Link from "next/link";
import React, { useContext } from 'react';
import { useLocale } from "../utils/locale";
import SwitchLang from "./parts/menu/switchLang";
import LocaleContext from "./context/localeContext";
import { ArrowTopRightOnSquareIcon  } from "@heroicons/react/24/outline";

export default function Navigation({  }) {
  const { locale, setLocale } = useContext(LocaleContext);
  const { json } = useLocale(locale)

  const logoSrc = `/image/logo-${locale}.png`

  let textClass = "text-secondary me-auto mb-2 mb-lg-0 ms-lg-4"
  return (
    <nav className="static top-0 z-50 flex-shrink-0 py-4 bg-white ">
        <div className="container flex flex-col items-start justify-between px-6 mx-auto md:flex-row md:items-center">
            <Link href={`/`} className="text-lg font-bold">{json.navigation.title}</Link>
            <div className="absolute flex items-center justify-end md:static top-2 right-4">
              <a target="_blank" href="https://tucsonhosyuko.square.site/" className="hidden lg:block">
                <div className="text-sm rounded-lg px-2 py-2 text-white border bg-blue-500 flex justify-center items-center shadow">
                  <ArrowTopRightOnSquareIcon aria-hidden="true" className="h-4 w-4 mr-1" />
                  <span>{json.navigation.payment}</span>
                </div>
              </a>
              <SwitchLang currentLocale={locale} />
           </div>
        </div>
    </nav>
  );
}