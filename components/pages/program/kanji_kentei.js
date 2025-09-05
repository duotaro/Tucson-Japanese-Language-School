import Head from "next/head";
import React from 'react';
import { useLocale } from "../../../utils/locale";
import Section from "../../parts/section";
import Title from "../../parts/text/title";
import CustomImage from "../../parts/image/CustomImage";
import Image from "next/image";

export default function KanjiKenteiPage({ kanjiKentei, locale }) {
  const { json, metaTitleExtension } = useLocale(locale)
  let lang = json.navigation

  return (
    <>
      <Head>
        <title>{lang.kanjikentei} - {metaTitleExtension} </title>
        <meta name="description" content={`${lang.kanjikentei} - ${json?.navigation?.description || lang.kanjikentei}`} />
        
        {/* Language alternatives for SEO */}
        <link rel="alternate" hrefLang="ja" href="https://tjschool.org/program/kanji_kentei/" />
        <link rel="alternate" hrefLang="en" href="https://tjschool.org/en/program/kanji_kentei/" />
        <link rel="alternate" hrefLang="x-default" href="https://tjschool.org/program/kanji_kentei/" />
      </Head>

      {/* メインタイトル */}
      <Section py="py-6 md:py-8">
        <Title title={lang.kanjikentei} level="h1" size="h1" className="mb-8" />
        <div className="text-center text-gray-600 mb-4">
          <p className="text-lg">日本漢字能力検定（漢検）の実施について</p>
        </div>
      </Section>

      {/* 実施日・会場情報・申し込み締め切り */}
      <Section bg="bg-gray-50">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <Title title="実施日" level="h3" size="h4" className="mb-4 text-blue-600" />
            <div className="text-gray-700">
              <p className="mb-2"><strong>2024年度実施日</strong></p>
              <p className="text-lg font-semibold text-gray-900">2025年1月31日（土）</p>
              <p className="text-sm text-gray-600 mt-1">午後12時開始</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <Title title="会場" level="h3" size="h4" className="mb-4 text-green-600" />
            <div className="text-gray-700">
              <p className="mb-2"><strong>ツーソン日本語学校</strong></p>
              <p className="text-sm">借用校</p>
              <p className="text-sm">詳細な住所は申し込み後にお知らせいたします</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm md:col-span-2 lg:col-span-1">
            <Title title="申し込み締切" level="h3" size="h4" className="mb-4 text-red-600" />
            <div className="text-gray-700">
              <p className="text-lg font-semibold text-gray-900 mb-2">2024年12月14日（土）</p>
              <p className="text-sm text-gray-600">申し込み受付中！</p>
            </div>
          </div>
        </div>
      </Section>


      {/* 画像セクション */}
      <Section py="py-8">
        <Title title="漢字検定の様子" level="h2" size="h3" className="mb-8" />
        <div className="grid md:grid-cols-2 gap-6">
          <Image 
            src="https://static.wixstatic.com/media/f474ab_9b96b0f3bb284fb8879f2d38ec43d026~mv2.jpg/v1/fill/w_972,h_786,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_0630_JPG.jpg" 
            alt="漢字検定実施の様子1"
            width={972}
            height={786}
            className="h-64 md:h-72"
            objectFit="cover"
          />
          {/* <CustomImage 
            src="/images/placeholder-kanji-test-2.jpg" 
            alt="漢字検定実施の様子2" 
            hClass="h-64 md:h-72"
          /> */}
        </div>
        <p className="text-center text-gray-600 mt-4">
          集中して問題に取り組む受検者の皆さん
        </p>
      </Section>

      {/* 教材情報 */}
      <Section bg="bg-blue-50">
        <Title title="教材情報" level="h2" size="h3" className="mb-8" />
        {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <Title title="公式問題集" level="h4" size="h5" className="mb-4" />
            <CustomImage 
              src="/images/placeholder-textbook-1.jpg" 
              alt="漢検公式問題集" 
              hClass="h-40"
              addClass="mb-4"
            />
            <p className="text-sm text-gray-600 mb-2">日本漢字能力検定協会</p>
            <p className="text-sm">各級に対応した公式問題集で効率的に学習できます。</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <Title title="漢検漢字学習ステップ" level="h4" size="h5" className="mb-4" />
            <CustomImage 
              src="/images/placeholder-textbook-2.jpg" 
              alt="漢検漢字学習ステップ" 
              hClass="h-40"
              addClass="mb-4"
            />
            <p className="text-sm text-gray-600 mb-2">日本漢字能力検定協会</p>
            <p className="text-sm">段階的に学習を進められる基本教材です。</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm md:col-span-2 lg:col-span-1">
            <Title title="過去問題集" level="h4" size="h5" className="mb-4" />
            <CustomImage 
              src="/images/placeholder-textbook-3.jpg" 
              alt="漢検過去問題集" 
              hClass="h-40"
              addClass="mb-4"
            />
            <p className="text-sm text-gray-600 mb-2">日本漢字能力検定協会</p>
            <p className="text-sm">実際の検定問題で実力を確認できます。</p>
          </div>
        </div> */}

        <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
          
          <div className="grid md:grid-cols-2 gap-6">
          <Image 
            src="https://static.wixstatic.com/media/f474ab_fc76e6a4709c43f2bd7c077237e2f5fb~mv2.jpg/v1/fill/w_512,h_744,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/capture1_JPG.jpg" 
            alt="漢字検定実施の様子1"
            width={280}
            height={744}
            className="h-64 md:h-72"
            objectFit="cover"
          />
          <div className="text-center mb-6">
            <Title title="過去問題集" level="h3" size="h4" className="mb-4 text-blue-600" />
            <p className="text-sm text-gray-600 mb-2">* 漢字検定出題パターンをそのまま体験！</p>
            <p className="text-sm text-gray-600 mb-2">* 検定対策におすすめ！</p>
            <p className="text-sm text-gray-600 mb-4">* 紀伊国屋USAオンラインストアで購入可！</p>
            <a 
              href="https://united-states.kinokuniya.com/products?utf8=%E2%9C%93&is_searching=true&restrictBy%5Bavailable_only%5D=1&keywords=%E6%BC%A2%E5%AD%97%E6%A4%9C%E5%AE%9A%E3%80%80%E9%81%8E%E5%8E%BB%E5%95%8F%E9%A1%8C&taxon=&x=42&y=17" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold inline-block"
            >
              購入する →
            </a>
          </div>
          </div>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
          <Title title="くりかえしドリルD+ノートセット" level="h3" size="h4" className="mb-4 text-purple-600" />
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-2">* 漢字学習に最適！</p>
            <p className="text-sm text-gray-600 mb-2">* 個人購入できない学校向け教材！</p>
            <p className="text-sm text-gray-600 mb-4">* 教材納入時期は7月下旬を予定</p>
            <div className="bg-red-100 p-4 rounded-lg">
              <p className="text-red-700 font-semibold">今年度注文は締め切りました。</p>
              <p className="text-red-600 text-sm mt-1">SOLD OUT</p>
            </div>
          </div>
        </div>
      </Section>

      {/* お申し込み・お問い合わせ */}
      <Section>
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg text-center">
          <Title title="申し込み方法" level="h2" size="h3" className="mb-6 text-white" />
          <p className="mb-6">申し込み受付中！</p>
          <div className="space-y-4">
            <div className="bg-white bg-opacity-20 p-4 rounded-lg">
              <p className="text-lg font-semibold">締め切り日</p>
              <p className="text-xl font-bold">2024年12月14日（土）</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://forms.gle/RZUPorc2DhQjhCS98" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
              >
                申し込みフォーム →
              </a>
              <a 
                href="https://tucsonhosyuko.square.site/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition-colors font-semibold"
              >
                オンライン決済 →
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* 日本漢字検定協会リンク */}
      <Section bg="bg-gray-50">
        <div className="text-center">
          <div className="mb-6">
            <Title title="漢字検定について詳しく" level="h3" size="h4" className="mb-4" />
            <p className="text-gray-600 mb-4">日本漢字検定協会のホームページはこちらから</p>
            <a 
              href="https://www.kanken.or.jp/kanken/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold inline-block"
            >
              日本漢字能力検定協会 →
            </a>
          </div>
          <div className="text-sm text-gray-600 mt-8">
            <p className="mb-2">ツーソン日本語補習校は日本漢字検定海外準会場に指定され、年に１度漢字検定を実施しています。</p>
            <p className="mb-2">アメリカ合衆国西岸では本校を含め３校のみ受験が可能です。</p>
            <p>日本では毎年およそ220万人が受験しています。受験入試、就職にも有利になり、</p>
            <p>漢字だけではなく、日本語の基礎学力として役立つ「漢検」にぜひチャレンジしてください！</p>
          </div>
        </div>
      </Section>
    </>
  );
}