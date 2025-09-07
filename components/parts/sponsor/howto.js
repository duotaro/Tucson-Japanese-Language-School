import React, { useState } from "react";
import Link from "next/link";
import { useLocale } from "@/utils/locale";
import Section from "../section";
import Title from "../text/title";
import Paragraphs from "../text/paragraphs";
import { GlobeAsiaAustraliaIcon } from "@heroicons/react/24/outline";
import ContributionAccordion from "../menu/accordion";
import { ACCESABLE_IMAGE_PATH, DOWNLOAD_IMAGE_EXTENSION } from "@/const";

export default function HowToDonate({ howto, locale = "ja" }) {
  const { json } = useLocale(locale)
  const isJpn = locale === "ja"

  let resList = []
  
  // Default contribution methods if no data is provided
  const defaultMethods = [
    {
      id: 1,
      ordering: 1,
      title: "Jim Click ラッフル",
      text: [{
        type: 'text',
        text: { content: "Jim Clickで車を購入する際に、本校の名前をお伝えください。本校に寄付金が入ります。" },
        annotations: {},
        plain_text: "Jim Clickで車を購入する際に、本校の名前をお伝えください。本校に寄付金が入ります。",
        href: null
      }],
      btnLabel: "詳細を見る",
      btnLink: "#",
      tag: "other"
    },
    {
      id: 2,
      ordering: 2,
      title: "Fry's Community Rewards",
      text: [{
        type: 'text',
        text: { content: "Fry's Community Rewardsプログラムに登録し、Organization #KO463を選択してください。お買い物の度に本校に寄付されます。" },
        annotations: {},
        plain_text: "Fry's Community Rewardsプログラムに登録し、Organization #KO463を選択してください。お買い物の度に本校に寄付されます。",
        href: null
      }],
      btnLabel: "登録する",
      btnLink: "https://www.frysfood.com/topic/community-rewards-2",
      tag: "other"
    },
    {
      id: 3,
      ordering: 3,
      title: "航空券の購入",
      text: [{
        type: 'text',
        text: { content: "旅行会社アムネットを通して日本への航空券を購入すると、学校に寄付が入ります。もちろん格安航空券でも！ご購入の際に、ツーソン日本語補習校の関係者ですと言ってください。" },
        annotations: {},
        plain_text: "旅行会社アムネットを通して日本への航空券を購入すると、学校に寄付が入ります。もちろん格安航空券でも！ご購入の際に、ツーソン日本語補習校の関係者ですと言ってください。",
        href: null
      }],
      btnLabel: "アムネットで予約",
      btnLink: "https://www.amnet-usa.com",
      tag: "other"
    }
  ];

  if (howto && howto.length > 0) {
    for(let item of howto){
      let res = {
          id: item.id,
          ordering: null,
          title: "",
          text: "",
          btnLabel: null,
          btnLink: null,
          tag: null
      }
      res.ordering = item.properties?.["ordering"]?.number || 0
      res.title = isJpn ? (item.properties?.["title"]?.title?.[0]?.text?.content || "") : (item.properties?.["en"]?.rich_text?.[0]?.text?.content || "")
      res.text = isJpn ? (item.properties?.["text"]?.rich_text || []) : (item.properties?.["text_en"]?.rich_text || [])

      res.tag = item.properties?.["tag"]?.select?.name || "other"
      if(item.properties?.["image"]?.files?.[0]){
        // Use the URL directly from the cached data if it's already a local path
        const fileData = item.properties["image"].files[0];
        if (fileData.file?.url?.startsWith('/')) {
          res.image = fileData.file.url;
        } else {
          // Fallback to constructing the path (though this shouldn't happen with cached data)
          const tmpName = fileData.name
          const name = tmpName.replace(/ /g, '_')
          res.image = `/${ACCESABLE_IMAGE_PATH}/howto/${item.id}-${name}`
        }
      }
      if(isJpn){
          if(item.properties?.["btn_label"]?.rich_text?.[0]){
              res.btnLabel = item.properties["btn_label"].rich_text[0].text.content
              res.btnLink = item.properties?.["btn_link"]?.url
          }
      } else {
          if(item.properties?.["btn_label_en"]?.rich_text?.[0]){
              res.btnLabel = item.properties["btn_label_en"].rich_text[0].text.content
              res.btnLink = item.properties?.["btn_link"]?.url
          } 
      }
      resList.push(res)
    }    
    resList.sort((a, b) => a.ordering - b.ordering);
  } else {
    resList = defaultMethods;
  }

  const title = json.howto?.title?.replace('{*}', resList.length) || `${resList.length}つの方法で貢献する`;

  return (
    <Section py="py-8 md:py-12 lg:py-20" >
    <div className="container px-6 mx-auto text-center" >
      <Title title={title} />
    </div>
    <div className="mb-4 ">
      <div className="w-full">
        <ContributionAccordion list={resList} />
      </div>
    </div>
  </Section>
  );
}