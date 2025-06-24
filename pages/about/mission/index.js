import Head from "next/head";
import Layout from '@/components/layout'
import React, { useContext } from 'react';
import LocaleContext from "@/components/context/localeContext";
import { useLocale } from "@/utils/locale";
import { getDatabase } from "@/lib/notion";
import saveImageIfNeeded from "@/components/download/index.js";
import { convertAboutFromDatabase } from "@/entity/aboutEntity";
import Mission from "@/components/parts/about/mission/mission.js";
import Philosophy from "@/components/parts/about/mission/philosophy.js";
import Policy from "@/components/parts/about/mission/policy.js";
import Vision from "@/components/parts/about/mission/vision.js";
import savePdfIfNeeded from "@/components/download/pdf.js";
import path from 'path';

export default function MissionPage({ about, philosophy, policy }) {
  const { locale } = useContext(LocaleContext);
  const { json, metaTitleExtension } = useLocale(locale)
  let lang = json.navigation

  let {mission, vision} = convertAboutFromDatabase(about, locale == "ja")
  let breadcrumb = {
    parents: [{link: '/about/', title: "about"}],
    current: lang.mission
  }

  console.log(mission)

  return (
    <Layout breadcrumb={breadcrumb}>
      <Head>
        <title>{lang.mission} - {metaTitleExtension} </title>
        <meta name="description" content={`${lang.mission} - ${lang.description}`} />
      </Head>

      <div className="">
        <div className="row">
          <Mission mission={mission} />
          <Vision vision={vision} />
          <Philosophy philosophy={philosophy[0]}/>
          <Policy policy={policy[0]} />
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps = async (context) => {

  // Notionのデータ取得関数（pages/index.jsと同じfetchData関数）
  const fetchData = async (databaseId, pagePath) => {
    const database = await getDatabase(databaseId);
    let props = [];
    for(let item of database){
      props.push(item.properties);
    }
    // 画像のダウンロードと最適化を実行
    await saveImageIfNeeded(props, pagePath);

    // Notionから取得したデータベースアイテムをループし、画像情報を加工する
    const processedDatabase = await Promise.all(database.map(async (item) => {
      const newItem = { ...item }; // 元のアイテムをコピー
      const imageKeys = ['image', 'image1', 'image2', 'image3', 'image_en'];

      await Promise.all(imageKeys.map(async (key) => {
        // 画像プロパティが存在し、かつファイルタイプである場合
        if (newItem.properties[key] && newItem.properties[key].type === 'files' && newItem.properties[key].files[0]) {
          const originalFileName = newItem.properties[key].files[0].name;
          const baseName = path.parse(originalFileName.replace(/ /g, '_')).name;
          const altText = newItem.properties[key].files[0].caption ? newItem.properties[key].files[0].caption[0]?.plain_text : originalFileName;

          // 最適化された画像情報をoptimizedImageプロパティとして追加
          newItem.properties[key] = {
            ...newItem.properties[key], // 元のNotionの画像プロパティ情報を保持
            optimizedImage: {
              baseName: baseName,
              pagePath: pagePath,
              alt: altText,
              width: 1920,
              height: 1080,
            }
          };
        }
      }));
  
      return newItem;
    }));
    return processedDatabase;
  };

  // get about
  let about = await fetchData("d4eb3828e74c469b9179ca7be9edb5cf", "about")
  let philosophy = await getPhilosophy()
  let policy = await getPolicy()
  return {
    props: {
      about: about,
      philosophy: philosophy,
      policy: policy
    },
    revalidate: 1
  };
};

const getPhilosophy = async () => {
  const database = await getDatabase("f40ad3a82b894969a6a1b0ee0bfcb0cf")
  return database
}

const getPolicy = async () => {
  const database = await getDatabase("105a8c0ecf8c8082a456dd95fd87d0c2")
  let props = []
  for(let item of database){
    props.push(item.properties)
  }
  await saveImageIfNeeded(props, "policy")
  await savePdfIfNeeded(props, "policy")
  // pdf download
  return database
}
