


import React, { useContext } from "react";
import Image from "next/image"
import Link from "next/link"
import LocaleContext from "../../context/localeContext";
import { useLocale } from "../../../utils/locale";

export default function About({ about, isTop }) {
  const { locale } = useContext(LocaleContext);
  const { json } = useLocale(locale)

  return (
    <section className="py-8 md:py-12 lg:py-20 bg-slate-300">
      <div className="container px-6 mx-auto">
        <div className="grid items-center gap-8 md:grid-flow-col-dense md:grid-cols-2 md:gap-12">
            <div className="md:col-start-2">
              <Image
                src={about.image}
                alt="Mission"
                width={500}
                height={300}
                layout="responsive"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="flex flex-col items-center text-center ">
                <h2 className="text-2xl font-black sm:text-3xl lg:text-4xl">
                {about.title}
                </h2>
                <div className="max-w-md mt-4 text-md font-light leading-relaxed text-gray-500 sm:text-lg lg:text-xl">
                    {about.text}
                </div>
                { isTop && (
                  <Link href={`/about/welcome/`} className="p-6 py-3 mt-3 rounded-md bg-blue-600 hover:bg-blue-700 mt-4 text-lg transition-colors text-white max-w-sm">
                      {json.common.show_more}
                  </Link>
                )}
            </div>
        </div>
      </div>
    </section>
  );
}