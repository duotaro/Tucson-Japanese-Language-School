import Head from "next/head";
import React from 'react';
import { useLocale } from "../../../utils/locale";
import Section from "../../parts/section";
import Title from "../../parts/text/title";
import CustomImage from "../../parts/image/CustomImage";
import Image from "next/image";

export default function NihongocafePage({ nihongocafe, locale }) {
  const { json, metaTitleExtension } = useLocale(locale)
  let lang = json.navigation

  return (
    <>
      <Head>
        <title>{lang.nihongocafe || 'にほんご café'} - {metaTitleExtension} </title>
        <meta name="description" content={`${lang.nihongocafe || 'にほんご café'} - ${json?.navigation?.description || lang.nihongocafe || 'にほんご café'}`} />
        
        {/* Language alternatives for SEO */}
        <link rel="alternate" hrefLang="ja" href="https://tjschool.org/program/nihongocafe/" />
        <link rel="alternate" hrefLang="en" href="https://tjschool.org/en/program/nihongocafe/" />
        <link rel="alternate" hrefLang="x-default" href="https://tjschool.org/program/nihongocafe/" />
      </Head>

      {/* メインタイトル */}
      <Section py="py-6 md:py-8">
        <Title title="ようこそ！「にほんごかふぇ」のページへ" level="h1" size="h1" className="mb-8 " />
        <div className="text-center text-gray-600 mb-6">
          {/* <CustomImage 
            src="/images/placeholder-nihongo-cafe-logo.jpg" 
            alt="にほんごかふぇ ロゴ" 
            hClass="h-64 md:h-80"
            addClass="mb-6"
          /> */}
          <Image
            src="https://static.wixstatic.com/media/f474ab_53f44824c4e048688fcff23e9ff80107~mv2.png/v1/fill/w_700,h_672,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/f474ab_53f44824c4e048688fcff23e9ff80107~mv2.png"
            alt="にほんごかふぇ"
            width={512}
            height={384}
            className="h-64 md:h-80 mb-6 text-center mx-auto justify-center"
          />
          <p className="text-lg font-semibold ">
            2020年からオンラインに移行していた「にほんごかふぇ」の対面式かふぇを再開します！
          </p>
        </div>
      </Section>

      {/* 対面にほんごかふぇ */}
      <Section bg="bg-orange-50">
        <div className="mb-8">
          <Title title="1. 対面にほんごかふぇ" level="h2" size="h2" className="mb-6 text-orange-700" />
          
          <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
            <p className="text-gray-700 mb-4">
              新年度より日本語で会話練習をしたいという多くの方々を全力で応援すべく、対面式にほんごかふぇを土曜日の朝9時～11時に開催します。
              1回のセッションは2時間で$7.5～
            </p>
            <p className="text-gray-700">
              こちらはボランティアの日本人ネイティブが毎回トピックを選び、参加者と日本語で会話をするという形態をもちますので、日本語教室やレッスンではありません。
              すでにある程度の日本語を理解できて、「日本語力を維持されたい方」「日本語会話力を伸ばしたい方」に適切なグループです。
            </p>
          </div>

          {/* 参加費 */}
          <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
            <h3 className="text-xl font-semibold text-orange-700 mb-4">参加費</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-orange-100 rounded">
                <span>初回トライアル</span>
                <span className="font-semibold text-orange-800">$10</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-100 rounded">
                <span>10回チケット</span>
                <span className="font-semibold">$100</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-green-100 rounded">
                <span>20回チケット（お得！）</span>
                <span className="font-semibold text-green-800">$150 (1回あたり$7.5)</span>
              </div>
            </div>
          </div>

          {/* 対面式の詳細情報 */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-orange-700 mb-4">開催詳細</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">📧 お問い合わせ</h4>
                <p className="text-sm text-blue-600">tucson.nihongo.hosyuko@gmail.com</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">📍 場所</h4>
                <p className="text-sm">1701 E Seneca St</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">🕘 開催時間</h4>
                <p className="text-sm">土曜日 9時から11時（2時間セッション）</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">💰 料金</h4>
                <p className="text-sm">$7.5～</p>
              </div>
            </div>
            
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSco7a05vI2cHgOh4ANzKBEzLeeiqJW33XBdByc-H9jwQmHMHA/viewform?usp=dialog" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors text-center font-semibold"
              >
                対面式 登録
              </a>
              <a 
                href="https://91f19e40-70e5-4284-a7f6-b0ca72bb99ec.filesusr.com/ugd/f474ab_753a3385c3524de3a01243755bb8abd0.pdf" 
                target="_blank" 
                className="border border-orange-600 text-orange-600 px-6 py-3 rounded-lg hover:bg-orange-50 transition-colors text-center font-semibold flex items-center justify-center gap-2"
              >
                <span>📄</span>
                対面にほんごかふぇ利用規約
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* オンラインにほんごかふぇ */}
      <Section bg="bg-blue-50">
        <div className="mb-8">
          <Title title="2. オンラインにほんごかふぇ" level="h2" size="h2" className="mb-6 text-blue-700" />
          
          <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
            <p className="text-gray-700 mb-4">
              オンラインにほんごかふぇはツーソンに在住の日本語学習者のために、国際交流の盛んな愛知県安城市の市民ボランティアとコラボし、
              2020年9月より日本語/英語のランゲージエクスチェンジを行っています。
            </p>
            <p className="text-gray-700">
              すべてのセッションはオンラインで行われるため、ご自宅からお気軽に日本語ネイティブスピーカーと会話をすることができます。
              気軽な会話の中で日本語に触れることができ、耳を慣らしたい方にもぴったりです。
              会話がはずみやすく、一人でも訪れやすいですし、もちろん家族や友人同士でもOK！
            </p>
          </div>

          {/* オンライン式の詳細情報 */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">開催詳細</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">📧 お問い合わせ</h4>
                <p className="text-sm text-blue-600">tucson.nihongo.cafe@gmail.com</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">🌐 場所</h4>
                <p className="text-sm">オンライン（Zoom）</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">🕘 開催時間</h4>
                <p className="text-sm">月2回、水曜日 6時から7時</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">💰 料金</h4>
                <p className="text-sm font-semibold text-green-600">無料‼</p>
              </div>
            </div>
            
            <div className="mt-6 bg-yellow-100 p-4 rounded-lg">
              <p className="text-sm text-yellow-800">
                <strong>📝 事前登録が必要です。</strong><br />
                始めてのセッションに参加する前には事前登録が必要です。詳しくは各コーディネーターへご連絡下さい。
              </p>
            </div>
            
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <a 
                href="https://forms.gle/FpUcYwPSr1mapsV66" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors text-center font-semibold"
              >
                オンライングループ 登録
              </a>
              <a 
                href="https://91f19e40-70e5-4284-a7f6-b0ca72bb99ec.filesusr.com/ugd/f474ab_6029bc12bc5e43269f6a3fdba5f68c8b.pdf" 
                target="_blank" 
                className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors text-center font-semibold flex items-center justify-center gap-2"
              >
                <span>📄</span>
                オンラインにほんごかふぇ利用規約
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Googleカレンダー */}
      <Section>
        <Title title="開催スケジュール" level="h2" size="h2" className="mb-6 text-gray-800" />
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <div className="flex justify-center mb-4">
            <a 
              href="https://drive.google.com/file/d/1zxi7E-GP1nt4-6n-7RoLML81EDIY5LHt/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold flex items-center gap-2"
            >
              <span>📅</span>
              PDFカレンダー
            </a>
          </div>
          
          {/* カレンダープレースホルダー */}
          {/* <div className="bg-gray-100 h-96 rounded-lg flex items-center justify-center">
            <div className="text-center text-gray-600">
              <p className="text-lg mb-2">📅 Googleカレンダー</p>
              <p className="text-sm">にほんごかふぇの開催スケジュール</p>
              <p className="text-xs mt-2">（実際のページではGoogleカレンダーが表示されます）</p>
            </div>
          </div> */}
        </div>
      </Section>

      {/* よくある質問・その他リンク */}
      {/* <Section bg="bg-gray-50">
        <div className="text-center">
          <a 
            href="/faq" 
            className="bg-gray-800 text-white px-8 py-4 rounded-lg hover:bg-gray-900 transition-colors font-semibold inline-block"
          >
            Q&A よくある質問
          </a>
        </div>
      </Section> */}
    </>
  );
}