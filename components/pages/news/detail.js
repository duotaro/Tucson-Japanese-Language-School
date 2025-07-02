import Head from "next/head";
import React from 'react';
import { useLocale } from "../../../utils/locale";
import NewsEntity from "../../../entity/newsEntity";
import ImageOptimizer from "../../download/ImageOptimizer";
import { formatDate } from "../../../utils/dateUtils";

export default function NewsDetailPage({ newsItem, locale, newsId }) {
  const { json, metaTitleExtension } = useLocale(locale)
  let lang = json.navigation

  if (!newsItem) {
    return (
      <>
        <Head>
          <title>News Not Found - {metaTitleExtension}</title>
        </Head>
        <div className="container px-6 mx-auto py-12">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">ニュースが見つかりません</h1>
            <p>指定されたニュースは存在しないか、削除された可能性があります。</p>
          </div>
        </div>
      </>
    );
  }

  const entity = new NewsEntity(newsItem, locale === "ja");
  const title = entity.title?.map(t => t.text.content).join('') || 'News Detail';
  const date = entity.date ? formatDate(entity.date, locale) : '';

  return (
    <>
      <Head>
        <title>{title} - {metaTitleExtension}</title>
        <meta name="description" content={`${title} - ${json?.navigation?.description || title}`} />
        
        {/* Language alternatives for SEO */}
        <link rel="alternate" hrefLang="ja" href={`https://tjschool.org/news/${newsId}/`} />
        <link rel="alternate" hrefLang="en" href={`https://tjschool.org/en/news/${newsId}/`} />
        <link rel="alternate" hrefLang="x-default" href={`https://tjschool.org/news/${newsId}/`} />
      </Head>

      <div className="container px-6 mx-auto py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4">{title}</h1>
            {date && (
              <p className="text-gray-600 mb-4">{date}</p>
            )}
            {entity.tag && (
              <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 rounded-full">
                {entity.tag.name}
              </span>
            )}
          </div>

          {entity.image && (
            <div className="mb-8">
              {typeof entity.image === 'object' && entity.image.baseName ? (
                <ImageOptimizer
                  baseName={entity.image.baseName}
                  pagePath={entity.image.pagePath}
                  alt={entity.image.alt || title}
                  className="w-full rounded-lg shadow-lg"
                  loading="eager"
                />
              ) : (
                <img
                  src={entity.image}
                  alt={title}
                  className="w-full rounded-lg shadow-lg"
                />
              )}
            </div>
          )}

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
              href={locale === 'ja' ? '/news' : '/en/news'}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200"
            >
              ← ニュース一覧に戻る
            </a>
          </div>
        </div>
      </div>
    </>
  );
}