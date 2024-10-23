
import React, { useContext } from "react";
import Link from "next/link"
import LocaleContext from "../../context/localeContext";
import { useLocale } from "@/utils/locale";
import SponsorDetail from "./detail";
import Section from "../section";
import Title from "../text/title";
import LocaleLink from "../menu/LocaleLink";

export default function Sponsor({ sponsor, bg = "bg-gray-50" }) {

    const { locale } = useContext(LocaleContext);
    const { json } = useLocale(locale)
    return (
      <Section py="py-2 md:py-4 lg:py-8" bg={bg}>
        <div className="container px-6 mx-auto text-center" >
          <LocaleLink href={`/support/`}>
            <Title title={json.navigation.sponsors} fontSize="text-xl sm:text-2xl xl:text-3xl"/>
          </LocaleLink>
          {/* {links?.length ? <Links links={links} /> : null} */}
        </div>
        <div className="container mx-auto">
          <div className="grid items-center justify-center gap-8 py-2 grid-cols-3 px-5 lg:px-16 xl:px-20">
            {sponsor.map((item) => {
                return (
                  <SponsorDetail item={item} />
                )
            })}
            </div>
        </div>
      </Section>
    )
};