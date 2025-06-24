import Head from "next/head";
import Layout from '@/components/layout'
import React, { useContext } from 'react';
import LocaleContext from "@/components/context/localeContext";
import { useLocale } from "@/utils/locale";
import { getDatabase } from "@/lib/notion";
import Greeting from "@/components/parts/about/welcome/greetings";
import OurStory from "@/components/parts/about/welcome/our_story";
import History from "@/components/parts/about/welcome/history";
import saveImageIfNeeded from "@/components/download";
import path from 'path';

export default function AboutPage({ welcome }) {
  const { locale } = useContext(LocaleContext);
  const { json, metaTitleExtension } = useLocale(locale)
  let lang = json.navigation

  let {greeting, story, history} = welcome


  let breadcrumb = {
    parents: [{link: '/about/', title: "about"}],
    current: lang.welcome
  }

  return (
    <Layout breadcrumb={breadcrumb}>
      <Head>
        <title>{lang.welcome} - {metaTitleExtension} </title>
        <meta name="description" content={`${lang.welcome} - ${lang.description}`} />
      </Head>

      <div className="">
        <div className="row">
          <Greeting greeting={greeting} />
          <OurStory story={story} />
          <History history={history} />
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps = async (context) => {

  // get about
  let welcome = await getWelcome()
  return {
    props: {
      welcome: welcome
    },
    revalidate: 1
  };
};

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

const getWelcome = async () => {
  const greeting = await fetchData("5ceb6b37e4584fa39fb78161869d885f", "greeting")
  const story = await getDatabase("02ed913f2ebe4151b0235d91a9306403")
  const history = await fetchData("15c93b4fe6154400902a623b20c6fe49", "history")

  return {
    "greeting": greeting[0],
    "story": story[0],
    "history": history[0],
  }
}
