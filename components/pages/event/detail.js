import { Fragment } from "react";
import React from 'react';
import Head from "next/head";
import { useLocale } from "../../../utils/locale";
import EventEntity from "../../../entity/eventEntity";
import { ACCESABLE_BLOG_IMAGE_PATH, DOWNLOAD_IMAGE_EXTENSION } from "../../../const";
import LocaleLink from "../../parts/menu/LocaleLink";
import { TwitterTweetEmbed } from 'react-twitter-embed';
import ImageOptimizer from "../../download/ImageOptimizer";
import { getLocalImagePath, getLocalPdfPath } from "../../download/clientPathHelper";


export const Text = ({ text }) => {
  if (!text) {
    return null;
  }
  return text.map((value) => {
    const {
      annotations: { bold, code, color, italic, strikethrough, underline },
      text,
    } = value;
    return (
      <span
        className={[
          bold ? "font-bold" : "",
          code ? "font-mono bg-gray-200 p-1 rounded" : "",
          italic ? "italic" : "",
          strikethrough ? "line-through" : "",
          underline ? "underline" : "",
        ].join(" ")}
        style={color !== "default" ? { color } : {}}
        key={text.content}
      >
        {text.link ? <a className="text-black hover:text-blue-500 underline hover:no-underline transition duration-300" href={text.link.url} target="_blank">{text.content}</a> : text.content}
      </span>
    );
  });
};

const renderNestedList = (block, eventId) => {
  const { type } = block;
  const value = block[type];
  if (!value) return null;

  const isNumberedList = value.children[0].type === "numbered_list_item";

  if (isNumberedList) {
    return <ol>{value.children.map((block) => renderBlock(block, eventId))}</ol>;
  }
  return <ul>{value.children.map((block) => renderBlock(block, eventId))}</ul>;
};

const renderBlock = (block, eventId) => {
  const { type, id } = block;
  const value = block[type];

  switch (type) {
    case "paragraph":
      const txtArray = value.rich_text
      if(!txtArray || txtArray.length == 0){
        return null;
      }

      if(txtArray.length > 1){
        const mention = txtArray[0].mention
        if(!mention) {
          return (
            <p>
              <Text text={value.rich_text} />
            </p>
          );
        }
        const pageId = mention.page.id
        const mentinTitle = txtArray[0].plain_text
        return (
          <p>
            <LocaleLink href={`/news/event/${pageId}`}>
              {mentinTitle}
            </LocaleLink>
          </p>
        );
      }
      return (
        <p>
          <Text text={value.rich_text} />
        </p>
      );
    case "heading_1":
      return (
        <h1 className="text-h1 xs:text-2xl sm:text-3xl lg:text-4xl text-gray-700 mb-4 mt-10">
          <Text text={value.rich_text} />
        </h1>
      );
    case "heading_2":
      return (
        <h2 className="text-h2 xs:text-xl sm:text-2xl lg:text-3xl text-gray-700 mb-3 mt-8">
          <Text text={value.rich_text} />
        </h2>
      );
    case "heading_3":
      return (
        <h3 className="text-h3 xs:text-lg sm:text-xl lg:text-2xl text-gray-700 mb-2 mt-6">
          <Text text={value.rich_text} />
        </h3>
      );
    case "bulleted_list": {
      return (
        <ul className="space-y-2 text-left text-gray-500 dark:text-gray-400 p-5 mt-5 mb-5 rounded-lg bg-gray-100">
          {value.children.map((child) => renderBlock(child, eventId))}
        </ul>
      );
    }
    case "numbered_list": {
      return (
        <ol className="space-y-2 text-left text-gray-500 dark:text-gray-400 p-5 mt-5 mb-5 rounded-lg bg-gray-100">
          {value.children.map((child) => renderBlock(child, eventId))}
        </ol>
      );
    }
    case "bulleted_list_item":
    case "numbered_list_item":
      return (
        <li key={block.id} className="flex items-center space-x-3 rtl:space-x-reverse">
          <Text text={value.rich_text} />
          {!!value.children && renderNestedList(block, eventId)}
        </li>
      );
    case "to_do":
      return (
        <div>
          <label htmlFor={id}>
            <input type="checkbox" id={id} defaultChecked={value.checked} />{" "}
            <Text text={value.rich_text} />
          </label>
        </div>
      );
    case "toggle":
      return (
        <details className="hover:bg-gray-50  transition duration-200 rounded-md hover:shadow-lg">
          <summary className="py-6 px-4 text-2xl  font-semibold w-full cursor-pointer marker:text-blue-500 list-none">
            <Text text={value.rich_text} />
          </summary>
          {block.children?.map((child) => (
            <Fragment key={child.id}>{renderBlock(child, eventId)}</Fragment>
          ))}
        </details>
      );
    case "child_page":
      return (
        <div className="">
          <strong>{value.title}</strong>
          {block.children.map((child) => renderBlock(child, eventId))}
        </div>
      );
    case "image":
      const localImagePath = getLocalImagePath('event', eventId, block.id);
      const src = localImagePath
        ? localImagePath
        : value.type === "external"
        ? value.external.url
        : value.file?.url || `/${ACCESABLE_BLOG_IMAGE_PATH}/${block.parent.page_id}/${block.id}${DOWNLOAD_IMAGE_EXTENSION}`;
      const caption = value.caption ? value.caption[0]?.plain_text : "";
      return (
        <figure>
          <img src={src} alt={caption} className="h-auto max-w-full rounded-lg" style={{width : '100%'}}/>
          {caption && <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">{caption}</figcaption>}
        </figure>
      );
    case "divider":
      return <hr key={id} />;
    case "quote":
      let val = ''
      value.rich_text.map(t => {
        val += t.plain_text
      })
      return <blockquote key={id}>{val}</blockquote>;
    case "code":
      return (
        <pre className="font-mono">
          <code className="font-mono bg-gray-200 p-1 rounded" key={id}>
            {value.rich_text[0].plain_text}
          </code>
        </pre>
      );
    case "file":
      const src_file =
        value.type === "external" ? value.external.url : value.file.url;
      const splitSourceArray = src_file.split("/");
      const lastElementInArray = splitSourceArray[splitSourceArray.length - 1];
      const fileName = lastElementInArray.split("?")[0];
      const localPdfPath = getLocalPdfPath('event', eventId, fileName);
      const finalSrc = localPdfPath || src_file;
      const caption_file = value.caption ? value.caption[0]?.plain_text : "";
      return (
        <figure>
          <div className="max-w-md mx-auto">
            📎{" "}
            <a href={finalSrc} passHref target="_blank">
              {fileName}
            </a>
          </div>
          {caption_file && <figcaption>{caption_file}</figcaption>}
        </figure>
      );
    case "bookmark":
      const href = value.url;
      return (
        <a href={href} target="_brank" className="">
          {href}
        </a>
      );
    case "table": {
      return (
        <table className="w-full border-collapse">
          <tbody>
            {block.children?.map((child, i) => {
              const RowElement =
                value.has_column_header && i == 0 ? "th" : "td";
              return (
                <tr key={child.id}>
                  {child.table_row?.cells?.map((cell, i) => {
                    return (
                      <RowElement key={`${cell.plain_text}-${i}`}>
                        <Text text={cell} />
                      </RowElement>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      );
    }
    case "column_list": {
      return (
        <div className="">
          {block.children.map((block) => renderBlock(block, eventId))}
        </div>
      );
    }
    case "column": {
      return <div>{block.children.map((child) => renderBlock(child, eventId))}</div>;
    }
    case "embed": {
      const url = value.url;
      // twitter埋め込み
      if(url.indexOf("https://twitter.com") > -1){
        const pos = url.indexOf('?')
        let tweetId = url.substring(0, pos).split('/')[5]
        if (!tweetId) {
          tweetId = url.split('/')[5]
        }
        return (<TwitterTweetEmbed key={id} tweetId={tweetId} options={{ margin: '0 auto;' }} />)
      }
      return (
        <a href={url} target="_brank" className="">
          {url}
        </a>
      );
    }
    default:
      return `❌ Unsupported block (${
        type === "unsupported" ? "unsupported by Notion API" : type
      })`;
  }
};

export default function EventDetailPage({ eventItem, locale, eventId, pageMap, blockMap, detailPage }) {
  const { json, metaTitleExtension } = useLocale(locale)

  if (!eventItem) {
    return (
      <>
        <Head>
          <title>Event Not Found - {metaTitleExtension}</title>
        </Head>
        <div className="container px-6 mx-auto py-12">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">イベントが見つかりません</h1>
            <p>指定されたイベントは存在しないか、削除された可能性があります。</p>
          </div>
        </div>
      </>
    );
  }

  const page = locale === "ja" ? pageMap?.ja : pageMap?.en;
  const blocks = locale === "ja" ? blockMap?.ja : blockMap?.en;
  let entity = new EventEntity(detailPage || eventItem, locale === "ja");

  if (!page || !blocks) {
    // フォールバック：子データベースがない場合は元の実装を使用
    const title = entity.title?.map(t => t.text.content).join('') || 'Event Detail';
    const date = entity.rawDate ? new Date(entity.rawDate).toLocaleString(locale === 'ja' ? 'ja' : 'en', {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }) : '';

    return (
      <>
        <Head>
          <title>{title} - {metaTitleExtension}</title>
          <meta name="description" content={`${title} - ${json?.navigation?.description || title}`} />

          {/* Language alternatives for SEO */}
          <link rel="alternate" hrefLang="ja" href={`https://tjschool.org/news/event/${eventId}/`} />
          <link rel="alternate" hrefLang="en" href={`https://tjschool.org/en/news/event/${eventId}/`} />
          <link rel="alternate" hrefLang="x-default" href={`https://tjschool.org/news/event/${eventId}/`} />
        </Head>

        <div className="container px-6 mx-auto py-12">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-4">{title}</h1>
              {date && (
                <p className="text-gray-600 mb-4">{date}</p>
              )}
              {entity.tag && (
                <span className="inline-block px-3 py-1 text-sm font-medium bg-green-100 text-green-800 rounded-full">
                  {entity.tag.name}
                </span>
              )}
            </div>

            {entity.text && entity.text.length > 0 && (
              <div className="prose prose-lg max-w-none">
                {entity.text.map((textItem, index) => (
                  <p key={index} className="mb-4 leading-relaxed">
                    {textItem.href ? (
                      <a href={textItem.href} className="text-blue-600 hover:text-blue-800 underline">
                        {textItem.text.content}
                      </a>
                    ) : (
                      textItem.text.content
                    )}
                  </p>
                ))}
              </div>
            )}

            <div className="mt-12 pt-8 border-t">
              <a
                href={locale === 'ja' ? '/news/event' : '/en/news/event'}
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-green-600 bg-green-50 rounded-lg hover:bg-green-100 transition-colors duration-200"
              >
                ← イベント一覧に戻る
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }

  // Master版の実装を使用
  let pageTitle = "";
  if(entity && entity.title[0]){
    pageTitle = entity.title[0].plain_text
  }

  // 画像は元のeventItemから取得
  const originalEntity = new EventEntity(eventItem, locale === "ja");
  let imageInfo = null;
  if(originalEntity && originalEntity.image){
    if (typeof originalEntity.image === 'object' && originalEntity.image.baseName) {
      imageInfo = originalEntity.image;
    }
  }

  const createtDate = new Date(page.created_time).toLocaleString(
    locale === 'ja' ? 'ja' : 'en',
    {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }
  );
  const lastEditDate = new Date(page.last_edited_time).toLocaleString(
    locale === 'ja' ? 'ja' : 'en',
    {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }
  );

  // 有効なブロック（空でないブロック）のみをフィルタリング
  const validBlocks = blocks.filter(block => {
    if (block.type === 'paragraph') {
      const richText = block.paragraph?.rich_text;
      return richText && richText.length > 0 && richText.some(text => text.plain_text?.trim());
    }
    return true; // paragraph以外のブロックは有効とみなす
  });

  return (
    <>
      <Head>
        <title>{pageTitle} - {metaTitleExtension}</title>
        <meta name="description" content={`${pageTitle} - ${json?.navigation?.description || pageTitle}`} />

        {/* Language alternatives for SEO */}
        <link rel="alternate" hrefLang="ja" href={`https://tjschool.org/news/event/${eventId}/`} />
        <link rel="alternate" hrefLang="en" href={`https://tjschool.org/en/news/event/${eventId}/`} />
        <link rel="alternate" hrefLang="x-default" href={`https://tjschool.org/news/event/${eventId}/`} />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
        {/* Hero Section */}
        <div className="bg-white shadow-sm border-b">
          <div className="container mx-auto px-6 py-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <a href={locale === 'ja' ? '/news/event' : '/en/news/event'}
                   className="hover:text-green-600 transition-colors">
                  {locale === 'ja' ? 'イベント' : 'Events'}
                </a>
                <span className="mx-2">／</span>
                <span className="text-gray-700">{pageTitle}</span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {pageTitle}
              </h1>

              <div className="flex items-center space-x-6 text-sm text-gray-600 ">
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  <span>{locale === 'ja' ? '作成日' : 'Created'}: {createtDate}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                  </svg>
                  <span>{locale === 'ja' ? '更新日' : 'Updated'}: {lastEditDate}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <article className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Featured Image */}
              {imageInfo && (
                <div className="relative h-64 md:h-80 lg:h-96 bg-gray-100">
                  <ImageOptimizer
                    baseName={imageInfo.baseName}
                    pagePath={imageInfo.pagePath}
                    alt={imageInfo.alt || pageTitle}
                    fill={true}
                    objectFit="cover"
                    className="transition-transform duration-700 ease-out hover:scale-105"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              )}

              {/* Article Content */}
              <div className="p-8 md:p-12">
                <div className="prose prose-lg max-w-none">
                  {validBlocks.map((block) => (
                    <div key={block.id} className="mb-6">
                      {renderBlock(block, eventId)}
                    </div>
                  ))}
                </div>
              </div>
            </article>

            {/* Navigation */}
            <div className="mt-12 bg-white rounded-xl shadow-sm p-6">
              <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
                <a
                  href={locale === 'ja' ? '/news/event' : '/en/news/event'}
                  className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  {locale === 'ja' ? 'イベント一覧に戻る' : 'Back to Events'}
                </a>

                <div className="flex items-center space-x-4">
                  <button className="p-2 text-gray-400 hover:text-green-600 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}