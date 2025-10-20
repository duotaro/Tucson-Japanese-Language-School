import Head from "next/head";
import React, { useEffect } from 'react';
import { useLocale } from "../../../utils/locale";
import Section from "../../parts/section";
import Title from "../../parts/text/title";
import Image from "next/image";
import {
  convertNihongoCafeOverviewFromDatabase,
  convertNihongoCafePriceFromDatabase,
  convertNihongoCafeDetailsFromDatabase
} from "../../../entity/nihongoCafeEntity";
import {
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  GlobeAltIcon,
  CalendarIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';

export default function NihongocafePage({ nihongoCafeData, locale }) {
  const { json, titleSuffix } = useLocale(locale)
  let lang = json.navigation
  const isJpn = locale === 'ja';

  // データをentityクラスに変換
  const overview = convertNihongoCafeOverviewFromDatabase(nihongoCafeData?.overview, isJpn);
  const inPersonOverview = convertNihongoCafeOverviewFromDatabase(nihongoCafeData?.inPerson?.overview, isJpn);
  const inPersonPrice = convertNihongoCafePriceFromDatabase(nihongoCafeData?.inPerson?.price, isJpn);
  const onlineOverview = convertNihongoCafeOverviewFromDatabase(nihongoCafeData?.online?.overview, isJpn);
  const onlinePrice = convertNihongoCafePriceFromDatabase(nihongoCafeData?.online?.price, isJpn);

  // 詳細情報用（対面とオンラインで同じデータを使用していると仮定）
  const inPersonDetails = convertNihongoCafeDetailsFromDatabase(nihongoCafeData?.inPerson?.overview, isJpn);
  const onlineDetails = convertNihongoCafeDetailsFromDatabase(nihongoCafeData?.online?.overview, isJpn);

  // デバッグ用: console.logで出力
  useEffect(() => {
    console.log('=== にほんごかふぇデータ ===');
    console.log('locale:', locale, 'isJpn:', isJpn);
    console.log('概要:', overview);
    console.log('対面概要:', inPersonOverview);
    console.log('対面価格:', inPersonPrice);
    console.log('オンライン概要:', onlineOverview);
    console.log('オンライン価格:', onlinePrice);
    console.log('対面詳細:', inPersonDetails);
    console.log('オンライン詳細:', onlineDetails);
    console.log('=== Raw データ ===');
    console.log('nihongoCafeData:', nihongoCafeData);
  }, [overview, inPersonOverview, inPersonPrice, onlineOverview, onlinePrice, inPersonDetails, onlineDetails, nihongoCafeData, locale, isJpn])

  return (
    <>
      <Head>
        <title>{lang.nihongocafe || 'にほんご café'} - {titleSuffix} </title>
        <meta name="description" content={`${lang.nihongocafe || 'にほんご café'} - ${json?.navigation?.description || lang.nihongocafe || 'にほんご café'}`} />

        {/* Language alternatives for SEO */}
        <link rel="alternate" hrefLang="ja" href="https://tjschool.org/program/nihongocafe/" />
        <link rel="alternate" hrefLang="en" href="https://tjschool.org/en/program/nihongocafe/" />
        <link rel="alternate" hrefLang="x-default" href="https://tjschool.org/program/nihongocafe/" />
      </Head>

      {/* メインタイトル */}
      <Section py="py-6 md:py-8">
        <Title title={overview?.title || "ようこそ！「にほんごかふぇ」のページへ"} level="h1" size="h1" className="mb-8 " />
        <div className="text-center text-gray-600 mb-12">
          {/* <CustomImage
            src="/images/placeholder-nihongo-cafe-logo.jpg"
            alt="にほんごかふぇ ロゴ"
            hClass="h-64 md:h-80"
            addClass="mb-12"
          /> */}
          <Image
            src="https://static.wixstatic.com/media/f474ab_53f44824c4e048688fcff23e9ff80107~mv2.png/v1/fill/w_700,h_672,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/f474ab_53f44824c4e048688fcff23e9ff80107~mv2.png"
            alt="にほんごかふぇ"
            width={512}
            height={384}
            className="h-64 md:h-80 mb-12 text-center mx-auto justify-center"
          />
          <p className="text-lg font-semibold ">
            {overview?.description || "2020年からオンラインに移行していた「にほんごかふぇ」の対面式かふぇを再開します！"}
          </p>
        </div>
      </Section>

      {/* 対面とオンラインのセクションを横並びに */}
      <Section bg="bg-gray-50" maxWidth="max-w-7xl">
        <div className="lg:flex lg:gap-16 xl:gap-20">
          {/* 対面にほんごかふぇ */}
          <div className="lg:flex-1 lg:mr-5">
          <Title title={inPersonOverview?.title || "1. 対面にほんごかふぇ"} level="h2" size="h2" className="mb-12 text-orange-700" />

          <div className="mb-12">
            <p className="text-gray-700 mb-4 whitespace-pre-wrap">
              {inPersonOverview?.description || "新年度より日本語で会話練習をしたいという多くの方々を全力で応援すべく、対面式にほんごかふぇを土曜日の朝9時～11時に開催します。1回のセッションは2時間で$7.5～"}
            </p>
            {inPersonOverview?.features && inPersonOverview.features.length > 0 && (
              <div className="mt-12 border-l-4 border-orange-500 pl-4">
                <h4 className="text-lg font-bold text-orange-700 mb-3">
                  {isJpn ? "🎉 こんな方におススメ！" : "🎉 Recommended for..."}
                </h4>
                <ul className="space-y-2">
                  {inPersonOverview.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-orange-500 mr-2 mt-1">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* 料金 */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-orange-700 mb-4">{isJpn ? "料金" : "Cost"}</h3>
            <div className="space-y-3">
              {inPersonPrice && inPersonPrice.length > 0 && (
                inPersonPrice.map((price, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between p-3 rounded ${
                      price.isSpecial
                        ? 'bg-green-100'
                        : index === 0
                        ? 'bg-orange-100'
                        : 'bg-gray-100'
                    }`}
                  >
                    <span>{price.planName}</span>
                    <span className={`font-semibold ${
                      price.isSpecial
                        ? 'text-green-800'
                        : index === 0
                        ? 'text-orange-800'
                        : ''
                    }`}>
                      {price.price}
                    </span>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* 対面式の詳細情報 */}
          <div>
            <h3 className="text-xl font-semibold text-orange-700 mb-4">{isJpn ? "開催詳細" : "Details"}</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <EnvelopeIcon className="h-5 w-5 text-gray-600" />
                  {isJpn ? "お問い合わせ" : "Contact"}
                </h4>
                <a
                  href={`mailto:${inPersonDetails?.email || "tucson.nihongo.hosyuko@gmail.com"}?subject=Inquiry%20Re%3B%20In-person%20Nihongo%20Cafe`}
                  target="_self"
                  className="text-sm text-blue-600 underline hover:text-blue-800"
                >
                  {isJpn ? "コーディネーターに連絡" : "Contact coordinator"}
                </a>
                {inPersonDetails?.email && 
                  <span className="text-sm"> : {inPersonDetails?.email}</span>
                }
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <MapPinIcon className="h-5 w-5 text-gray-600" />
                  {isJpn ? "場所" : "Location"}
                </h4>
                <p className="text-sm">{inPersonDetails?.location || "1701 E Seneca St"}</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <ClockIcon className="h-5 w-5 text-gray-600" />
                  {isJpn ? "開催時間" : "Day & Time"}
                </h4>
                <p className="text-sm">{inPersonDetails?.schedule || "土曜日 9時から11時（2時間セッション）"}</p>
              </div>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <a
                href={inPersonDetails?.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors text-center font-semibold"
              >
                {isJpn ? "登録はこちらから" : "Register here"}
              </a>
              <a
                href={inPersonDetails?.termsUrl}
                target="_blank"
                className="border border-orange-600 text-orange-600 px-6 py-3 rounded-lg hover:bg-orange-50 transition-colors text-center font-semibold flex items-center justify-center gap-2"
              >
                <DocumentTextIcon className="h-5 w-5" />
                {isJpn ? "対面にほんごかふぇ利用規約" : "In-Person Policy"}
              </a>
              {inPersonDetails?.calendarPdf && (
                <a
                  href={inPersonDetails.calendarPdf}
                  target="_blank"
                  className="border border-orange-600 text-orange-600 px-6 py-3 rounded-lg hover:bg-orange-50 transition-colors text-center font-semibold flex items-center justify-center gap-2"
                >
                  <CalendarIcon className="h-5 w-5" />
                  {isJpn ? "対面カレンダー（PDF）" : "In-Person Calendar (PDF)"}
                </a>
              )}
            </div>
          </div>
        </div>

        {/* オンラインにほんごかふぇ */}
        <div className="lg:flex-1 lg:ml-5">
          <Title title={onlineOverview?.title || "2. オンラインにほんごかふぇ"} level="h2" size="h2" className="mb-12 text-blue-700" />

          <div className="mb-12">
            <p className="text-gray-700 mb-4 whitespace-pre-wrap">
              {onlineOverview?.description || "オンラインにほんごかふぇはツーソンに在住の日本語学習者のために、国際交流の盛んな愛知県安城市の市民ボランティアとコラボし、2020年9月より日本語/英語のランゲージエクスチェンジを行っています。"}
            </p>
           
            {onlineOverview?.features && onlineOverview.features.length > 0 && (
              <div className="mt-12 border-l-4 border-blue-500 pl-4">
                <h4 className="text-lg font-bold text-blue-700 mb-3">
                  {isJpn ? "🎉 こんな方におススメ！" : "🎉 Recommended for..."}
                </h4>
                <ul className="space-y-2">
                  {onlineOverview.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* 料金 */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-orange-700 mb-4">{isJpn ? "料金" : "Cost"}</h3>
            <div className="space-y-3">
              {onlinePrice && onlinePrice.length > 0 && (
                onlinePrice.map((price, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between p-3 rounded ${
                      price.isSpecial
                        ? 'bg-green-100'
                        : index === 0
                        ? 'bg-orange-100'
                        : 'bg-gray-100'
                    }`}
                  >
                    {/* <span>{price.planName}</span> */}
                    <span className={`font-semibold ${
                      price.isSpecial
                        ? 'text-green-800'
                        : index === 0
                        ? 'text-orange-800'
                        : ''
                    }`}>
                      {price.price}
                    </span>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* オンライン式の詳細情報 */}
          <div>
            <h3 className="text-xl font-semibold text-blue-700 mb-4">{isJpn ? "開催詳細" : "Details"}</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <EnvelopeIcon className="h-5 w-5 text-gray-600" />
                  {isJpn ? "お問い合わせ" : "Contact"}
                </h4>
                <a
                  href={`mailto:${onlineDetails?.email || "tucson.nihongo.cafe@gmail.com"}?subject=Inquiry%20Re%3B%20Online%20Nihongo%20Cafe`}
                  target="_self"
                  className="text-sm text-blue-600 underline hover:text-blue-800"
                >
                  {isJpn ? "コーディネーターに連絡" : "Contact coordinator"}
                </a>
                {onlineDetails?.email &&
                  <span className="text-sm"> : {onlineDetails?.email}</span>
                }
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <GlobeAltIcon className="h-5 w-5 text-gray-600" />
                  {isJpn ? "場所" : "Location"}
                </h4>
                <p className="text-sm">{onlineDetails?.location || (isJpn ? "オンライン（Zoom）" : "Online (Zoom)")}</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <ClockIcon className="h-5 w-5 text-gray-600" />
                  {isJpn ? "開催時間" : "Day & Time"}
                </h4>
                <p className="text-sm">{onlineDetails?.schedule || (isJpn ? "月2回、水曜日 6時から7時" : "Twice a month, Wednesday 6-7 PM")}</p>
              </div>
              {/* <div>
                <h4 className="font-semibold text-gray-900 mb-2">💰 {isJpn ? "料金" : "Cost"}</h4>
                <p className="text-sm font-semibold text-green-600">{onlineDetails?.duration || (isJpn ? "無料‼" : "FREE!!")}</p>
              </div> */}
            </div>

            {/* {onlineDetails?.note || !onlinePrice?.length ? (
              <div className="mt-12 bg-yellow-100 p-4 rounded-lg">
                <p className="text-sm text-yellow-800">
                  {onlineDetails?.note || (
                    <>
                      <strong>📝 事前登録が必要です。</strong><br />
                      始めてのセッションに参加する前には事前登録が必要です。詳しくは各コーディネーターへご連絡下さい。
                    </>
                  )}
                </p>
              </div>
            ) : null} */}

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <a
                href={onlineDetails?.registrationUrl || "https://forms.gle/FpUcYwPSr1mapsV66"}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors text-center font-semibold"
              >
                {isJpn ? "登録はこちらから" : "Register here"}
              </a>
              <a
                href={onlineDetails?.termsUrl || "https://91f19e40-70e5-4284-a7f6-b0ca72bb99ec.filesusr.com/ugd/f474ab_6029bc12bc5e43269f6a3fdba5f68c8b.pdf"}
                target="_blank"
                className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors text-center font-semibold flex items-center justify-center gap-2"
              >
                <DocumentTextIcon className="h-5 w-5" />
                {isJpn ? "オンラインにほんごかふぇ利用規約" : "Online Policy"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
    </>
  );
}