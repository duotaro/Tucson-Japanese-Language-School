import Head from "next/head";
import React, { useState, useEffect } from 'react';
import { useLocale } from "../../../utils/locale";
import Section from "../../parts/section";
import Title from "../../parts/text/title";
import Image from "next/image";
import { KanjiKenteiOverviewEntity } from '../../../entity/kanjiKenteiOverviewEntity';
import { KanjiKenteiMaterialEntity } from '../../../entity/kanjiKenteiMaterialEntity';
import { KanjiKenteiScheduleEntity } from '../../../entity/kanjiKenteiScheduleEntity';
import { KanjiKenteiVenueEntity } from '../../../entity/kanjiKenteiVenueEntity';
import { KanjiKenteiDeadlineEntity } from '../../../entity/kanjiKenteiDeadlineEntity';

export default function KanjiKenteiPage({ kanjiKenteiData, locale }) {
  console.log('KanjiKenteiPage props:', { kanjiKenteiData: !!kanjiKenteiData, locale });

  const { json, metaTitleExtension } = useLocale(locale || 'ja')
  let lang = json.navigation
  const isJpn = locale === 'ja';
  const [overviewData, setOverviewData] = useState([]);
  const [materialsData, setMaterialsData] = useState([]);
  const [scheduleData, setScheduleData] = useState([]);
  const [venueData, setVenueData] = useState([]);
  const [deadlineData, setDeadlineData] = useState([]);

  const processKanjiKenteiData = () => {
    try {
      if (!kanjiKenteiData) return;

      // エンティティクラスに変換
      const overviewEntities = kanjiKenteiData.overview.map(item =>
        new KanjiKenteiOverviewEntity(item, isJpn)
      );

      const materialEntities = kanjiKenteiData.materials
        .sort((a, b) => (a.properties?.ordering?.number || 0) - (b.properties?.ordering?.number || 0))
        .map(item => new KanjiKenteiMaterialEntity(item, isJpn));

      const scheduleEntities = kanjiKenteiData.schedule.map(item =>
        new KanjiKenteiScheduleEntity(item, isJpn)
      );

      const venueEntities = kanjiKenteiData.venue.map(item =>
        new KanjiKenteiVenueEntity(item, isJpn)
      );

      const deadlineEntities = kanjiKenteiData.deadline.map(item =>
        new KanjiKenteiDeadlineEntity(item, isJpn)
      );

      // コンソールに出力して確認
      console.log('=== 漢検概要データ ===');
      console.log('Raw Data:', kanjiKenteiData.overview);
      console.log('Entities:', overviewEntities);

      console.log('=== 漢検教材データ ===');
      console.log('Raw Data:', kanjiKenteiData.materials);
      console.log('Entities:', materialEntities);

      console.log('=== 漢検日程データ ===');
      console.log('Raw Data:', kanjiKenteiData.schedule);
      console.log('Entities:', scheduleEntities);

      console.log('=== 漢検会場データ ===');
      console.log('Raw Data:', kanjiKenteiData.venue);
      console.log('Entities:', venueEntities);

      console.log('=== 漢検申し込み期限データ ===');
      console.log('Raw Data:', kanjiKenteiData.deadline);
      console.log('Entities:', deadlineEntities);

      // ステートに保存
      setOverviewData(overviewEntities);
      setMaterialsData(materialEntities);
      setScheduleData(scheduleEntities);
      setVenueData(venueEntities);
      setDeadlineData(deadlineEntities);

    } catch (error) {
      console.error('Error processing kanji kentei data:', error);
    }
  };

  useEffect(() => {
    if (kanjiKenteiData) {
      processKanjiKenteiData();
    }
  }, [kanjiKenteiData, isJpn]);

  if (!locale) {
    console.error('Locale is undefined');
    return <div>Error: Locale not provided</div>;
  }

  // 申し込み期限をチェックして受付状況を判定
  const getApplicationStatus = () => {
    if (deadlineData.length === 0) return { isOpen: false, message: isJpn ? '情報を読み込み中...' : 'Loading...' };

    const now = new Date();
    const deadline = deadlineData[0];

    if (!deadline.date) return { isOpen: false, message: isJpn ? '期限情報が設定されていません' : 'Deadline not set' };

    const deadlineDate = new Date(deadline.date);
    const isOpen = now <= deadlineDate;

    return {
      isOpen,
      message: isOpen
        ? (isJpn ? '申し込み受付中！' : 'Applications Open!')
        : (isJpn ? '申し込み期限を過ぎました' : 'Application Deadline Passed')
    };
  };

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
        {/* <Title title={lang.kanjikentei} level="h1" size="h1" className="mb-8" /> */}

        {/* Notionから取得した概要情報 */}
        {overviewData.length > 0 && (
          <div className="space-y-6">
            {overviewData.map((overview, index) => (
              <div key={overview.id || index} className="text-center">
                {overview.title && (
                  <Title title={overview.title ? overview.title : lang.kanjikentei} level="h1" size="h1" className="mb-8" />
                )}
                {overview.content && (
                  <div className="text-gray-600 whitespace-pre-wrap">{overview.content}</div>
                )}
                {/* {overview.imageUrl && (
                  <div className="mt-6">
                    <Image
                      src={overview.imageUrl}
                      alt={overview.title || (isJpn ? '漢字検定' : 'Kanji Test')}
                      width={800}
                      height={400}
                      className="mx-auto rounded-lg"
                    />
                  </div>
                )} */}
              </div>
            ))}
          </div>
        )}
      </Section>

      {/* 実施日・会場情報・申し込み締め切り */}
      <Section bg="bg-gray-50">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* 実施日 */}
          {scheduleData.length > 0 && (
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Title
                title={scheduleData[0].title || (isJpn ? '実施日' : 'Test Date')}
                level="h3"
                size="h4"
                className="mb-4 text-blue-600"
              />
              <div className="text-gray-700">
                {scheduleData[0].schoolYear && (
                  <p className="mb-2">
                    <strong>
                      {isJpn ? `${scheduleData[0].schoolYear}年度実施日` : `${scheduleData[0].schoolYear} Test Date`}
                    </strong>
                  </p>
                )}
                {scheduleData[0].formattedExamDate && (
                  <p className="text-lg font-semibold text-gray-900">
                    {scheduleData[0].formattedExamDate.year}/{scheduleData[0].formattedExamDate.month}/{scheduleData[0].formattedExamDate.day}
                    ({scheduleData[0].formattedExamDate.dayName})
                  </p>
                )}
                <p className="text-sm text-gray-600 mt-1">
                  {isJpn ? '午後12時開始' : '12:00 PM Start'}
                </p>
              </div>
            </div>
          )}

          {/* 会場 */}
          {venueData.length > 0 && (
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Title
                title={venueData[0].title || (isJpn ? '会場' : 'Venue')}
                level="h3"
                size="h4"
                className="mb-4 text-green-600"
              />
              <div className="text-gray-700">
                {venueData[0].content && (
                  <div className="whitespace-pre-wrap text-sm">
                    {venueData[0].content}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* 申し込み締切 */}
          {deadlineData.length > 0 && (
            <div className="bg-white p-6 rounded-lg shadow-sm md:col-span-2 lg:col-span-1">
              <Title
                title={deadlineData[0].title || (isJpn ? '申し込み締切' : 'Application Deadline')}
                level="h3"
                size="h4"
                className="mb-4 text-red-600"
              />
              <div className="text-gray-700">
                {deadlineData[0].formattedExamDate && (
                  <p className="text-lg font-semibold text-gray-900 mb-2">
                    {deadlineData[0].formattedExamDate.year}/{deadlineData[0].formattedExamDate.month}/{deadlineData[0].formattedExamDate.day}
                    ({deadlineData[0].formattedExamDate.dayName})
                  </p>
                )}
                <p className={`text-sm ${getApplicationStatus().isOpen ? 'text-green-600' : 'text-red-600'}`}>
                  {getApplicationStatus().message}
                </p>
              </div>
            </div>
          )}

          {/* フォールバック - Notionデータがない場合 */}
          {scheduleData.length === 0 && venueData.length === 0 && deadlineData.length === 0 && (
            <>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Title title={isJpn ? '実施日' : 'Test Date'} level="h3" size="h4" className="mb-4 text-blue-600" />
                <div className="text-gray-700">
                  <p className="mb-2">
                    <strong>{isJpn ? '情報を読み込み中...' : 'Loading information...'}</strong>
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Title title={isJpn ? '会場' : 'Venue'} level="h3" size="h4" className="mb-4 text-green-600" />
                <div className="text-gray-700">
                  <p className="mb-2">
                    <strong>{isJpn ? 'ツーソン日本語学校' : 'Tucson Japanese School'}</strong>
                  </p>
                  <p className="text-sm">{isJpn ? '借用校' : 'Rental School'}</p>
                  <p className="text-sm">
                    {isJpn
                      ? '詳細な住所は申し込み後にお知らせいたします'
                      : 'Detailed address will be provided after registration'
                    }
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm md:col-span-2 lg:col-span-1">
                <Title title={isJpn ? '申し込み締切' : 'Application Deadline'} level="h3" size="h4" className="mb-4 text-red-600" />
                <div className="text-gray-700">
                  <p className="text-sm text-gray-600">
                    {isJpn ? '情報を読み込み中...' : 'Loading information...'}
                  </p>
                </div>
              </div>
            </>
          )}
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

      {/* お申し込み・お問い合わせ */}
      {overviewData.length > 0 && overviewData[0].linkUrl && (
        <Section>
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg text-center">
            <Title
              title={isJpn ? '申し込み方法' : 'How to Apply'}
              level="h2"
              size="h3"
              className="mb-6 text-white"
            />
            <p className="mb-6">{getApplicationStatus().message}</p>
            <div className="space-y-4">
              {deadlineData.length > 0 && deadlineData[0].formattedExamDate && (
                <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                  <p className="text-lg font-semibold">
                    {isJpn ? '締め切り日' : 'Deadline'}
                  </p>
                  <p className="text-xl font-bold">
                    {deadlineData[0].formattedExamDate.year}/{deadlineData[0].formattedExamDate.month}/{deadlineData[0].formattedExamDate.day}
                    ({deadlineData[0].formattedExamDate.dayName})
                  </p>
                </div>
              )}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={overviewData[0].linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
                >
                  {overviewData[0].linkLabel || (isJpn ? '申し込みはこちらから' : 'Apply Here')} →
                </a>
                {overviewData[0].officialLink && (
                  <a
                    href={overviewData[0].officialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition-colors font-semibold"
                  >
                    {isJpn ? '公式サイト' : 'Official Site'} →
                  </a>
                )}
              </div>
            </div>
          </div>
        </Section>
      )}

      {/* 教材情報 */}
      <Section bg="bg-blue-50">
        <Title
          title={isJpn ? '教材情報' : 'Study Materials'}
          level="h2"
          size="h3"
          className="mb-8"
        />

        {/* Notionから取得した教材情報 */}
        {materialsData.length > 0 ? (
          <div className="space-y-8">
            {materialsData.map((material, index) => (
              <div key={material.id || index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="grid md:grid-cols-2 gap-6">
                  {material.imageUrl && (
                    <div className="flex justify-center">
                      <Image
                        src={material.imageUrl}
                        alt={material.title}
                        width={280}
                        height={400}
                        className="h-64 md:h-72 object-cover rounded-lg"
                      />
                    </div>
                  )}
                  <div className="text-center md:text-left">
                    <Title
                      title={material.title}
                      level="h3"
                      size="h4"
                      className={`mb-4 ${material.isSoldout ? 'text-gray-500' : 'text-blue-600'}`}
                    />

                    {material.features.length > 0 && (
                      <div className="mb-4">
                        {material.features.map((feature, featureIndex) => (
                          <p key={featureIndex} className="text-sm text-gray-600 mb-2">
                            * {feature}
                          </p>
                        ))}
                      </div>
                    )}

                    {material.isSoldout ? (
                      <div className="bg-red-100 p-4 rounded-lg">
                        <p className="text-red-700 font-semibold">
                          {isJpn ? '今年度注文は締め切りました。' : 'This year\'s orders are closed.'}
                        </p>
                        <p className="text-red-600 text-sm mt-1">SOLD OUT</p>
                      </div>
                    ) : (
                      material.linkUrl && (
                        <a
                          href={material.linkUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold inline-block"
                        >
                          {isJpn ? '購入する' : 'Purchase'} →
                        </a>
                      )
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* フォールバック - Notionデータがない場合 */
          (
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex justify-center">
                    <div className="h-64 md:h-72 w-48 bg-gray-200 rounded-lg flex items-center justify-center">
                      <p className="text-gray-500">{isJpn ? '画像読み込み中...' : 'Loading image...'}</p>
                    </div>
                  </div>
                  <div className="text-center md:text-left">
                    <Title
                      title={isJpn ? '教材情報読み込み中...' : 'Loading materials...'}
                      level="h3"
                      size="h4"
                      className="mb-4 text-gray-500"
                    />
                    <p className="text-sm text-gray-600">
                      {isJpn ? 'Notionから教材情報を取得しています...' : 'Fetching material information from Notion...'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </Section>

      {/* 日本漢字検定協会リンク */}
      <Section bg="bg-gray-50">
        <div className="text-center">
          <div className="mb-6">
            <Title
              title={isJpn ? '漢字検定について詳しく' : 'Learn More About Kanji Test'}
              level="h3"
              size="h4"
              className="mb-4"
            />
            <p className="text-gray-600 mb-4">
              {isJpn
                ? '日本漢字検定協会のホームページはこちらから'
                : 'Visit the Japan Kanji Aptitude Testing Foundation website'
              }
            </p>
            <a
              href={
                overviewData.length > 0 && overviewData[0].officialLink
                  ? overviewData[0].officialLink
                  : 'https://www.kanken.or.jp/kanken/'
              }
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold inline-block"
            >
              {isJpn ? '日本漢字能力検定協会' : 'Japan Kanji Aptitude Testing Foundation'} →
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}