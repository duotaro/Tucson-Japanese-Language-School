# バグ
以下の問題点があります。

・ニュース詳細の「ニュース一覧に戻る」が翻訳されない。
・cloudflareにdeployしたもので「沿革」セクションの画像が１つしか表示できてない。本来は３つ（検証環境の定義は何？）
・講師一覧の画像が表示されるまで時間がかかる時がある。（しょうがない？いい対策がある？）
・ローカルでは「年間予定」の画像が表示されているが、deployしたものでは表示されてない
・クラス紹介の画像の位置を、横に並んでいるテキスト情報の上下中央に配置したい
・ローカルでは「3つの方法で貢献する」の画像が表示されているが、deployしたものでは表示されてない
・寄付ページの「https://tucsonhosyuko.square.site/」へのリンクを別ウィンドウで開きたい（外部リンクであることを知らせる必要あるならやりたい）
・クラス紹介ページの以下の要素が、英語だとデザイン崩れすることがあるので、どうにかしたい。
<button class="rounded text-sm text-white text-semiboldborder px-2 py-1 shadow transition mt-4 bg-blue-400 hover:bg-blue-600">Inherited Japanese classes</button>

・一旦入学申込フォームなどを非表示にする


仕様忘れ
・組織規約のリンク先は日本語と英語で分かれている？Notionを確認する（年間報告とかは別れてる）
- その他も確認
学校要覧





# ツーソン日本語学校サイト改善提案書

**作成日**: 2025年6月28日  
**対象**: ツーソン日本語学校ウェブサイト  
**現在のバージョン**: Next.js 13 + Notion CMS

---

## 📊 現状分析結果

### **技術的現状**
- **ビルドサイズ**: 201MB（改善要）
- **アーキテクチャ**: Next.js SSG + Firebase Hosting（良好）
- **多言語対応**: 日本語/英語対応済み（良好）
- **構造化データ**: 基本実装済み（拡張要）
- **画像最適化**: 部分的実装（改善要）

### **主要課題**
1. **大容量ビルドサイズ** - 初期読み込み遅延
2. **画像最適化無効** - `images.unoptimized = true`
3. **CSS最適化不足** - 全要素transition適用
4. **構造化データ限定** - 基本組織情報のみ
5. **アクセシビリティ不足** - フォーカス管理、ARIAラベル

---

## 🚀 改善施策詳細

## **1. 軽量化・高速化施策**

### **🔥 Phase 1: 緊急対応（1-2週間）**

#### **A. 画像最適化の抜本的改善**

**現在の問題**:
```javascript
// next.config.js - 現在の設定
images: {
  unoptimized: true  // Next.js最適化が無効
}
```

**改善提案**:
```javascript
// next.config.js - 推奨設定
images: {
  unoptimized: false, // Next.js最適化を有効化
  domains: [
    'files.notion.so',
    'prod-files-secure.s3.us-west-2.amazonaws.com'
  ], // Notion画像ドメイン追加
  formats: ['image/webp', 'image/avif'], // 最新フォーマット対応
  minimumCacheTTL: 31536000, // 1年キャッシュ
  deviceSizes: [640, 768, 1024, 1280, 1920], // レスポンシブ対応
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
}
```

**期待効果**: ビルドサイズ40-50%削減

#### **B. Critical CSS分離**

**現在の問題**:
```css
/* globals.css - パフォーマンス負荷 */
* {
  transition-property: color, background-color, border-color, 
                      text-decoration-color, fill, stroke, opacity, 
                      box-shadow, transform, filter, backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
}
```

**改善提案**:
```css
/* critical.css - Above-the-fold専用 */
.hero-section {
  /* ヒーローセクション用スタイル */
}

/* non-critical.css - 遅延読み込み */
.interactive-element {
  transition: transform 0.2s ease;
}

.card-hover:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 25px -3px rgba(0, 0, 0, 0.1);
}
```

**実装方法**:
```javascript
// _document.js
<Head>
  <style dangerouslySetInnerHTML={{
    __html: criticalCSS // Above-the-foldのCSS
  }} />
  <link rel="preload" href="/styles/non-critical.css" as="style" 
        onLoad="this.onload=null;this.rel='stylesheet'" />
</Head>
```

#### **C. webpack Bundle最適化**

**改善提案**:
```javascript
// next.config.js
webpack: (config, { isServer, dev }) => {
  // プロダクションビルドの最適化
  if (!dev && !isServer) {
    config.optimization.splitChunks = {
      chunks: 'all',
      cacheGroups: {
        default: false,
        vendors: false,
        // React関連を別chunk化
        react: {
          name: 'react',
          chunks: 'all',
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          priority: 40,
        },
        // Notion API関連を別chunk化
        notion: {
          name: 'notion',
          chunks: 'all',
          test: /[\\/]lib[\\/]notion/,
          priority: 30,
        },
        // 共通コンポーネント
        common: {
          name: 'common',
          chunks: 'all',
          minChunks: 2,
          priority: 20,
        },
      },
    };
  }
  return config;
}
```

### **🟡 Phase 2: 中期改善（3-4週間）**

#### **D. Dynamic Imports導入**

**実装例**:
```javascript
// pages/[[...slug]].js
import dynamic from 'next/dynamic';

// 大きなコンポーネントを動的読み込み
const NewsDetailPage = dynamic(
  () => import('../components/pages/news/detail'),
  {
    loading: () => <div className="animate-pulse">Loading...</div>,
    ssr: true // SEOのためSSRは維持
  }
);

const SliderList = dynamic(
  () => import('../components/parts/slider/index'),
  {
    loading: () => <div className="h-96 bg-gray-200 animate-pulse"></div>
  }
);

// 使用法
switch (pageType) {
  case 'news/detail':
    return <NewsDetailPage {...pageProps} locale={currentLocale} />;
  default:
    return <HomePage {...pageProps} locale={currentLocale} />;
}
```

#### **E. API呼び出し最適化**

**現在の課題**: データ取得が非効率

**改善提案**:
```javascript
// lib/notion.js - 最適化版
export const getOptimizedDatabase = async (
  databaseId, 
  options = {}
) => {
  const {
    pageSize = 50,
    filterProperties = [],
    sorts = [{ timestamp: 'last_edited_time', direction: 'descending' }]
  } = options;

  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      page_size: pageSize,
      filter: options.filter,
      sorts,
      // 必要なプロパティのみ選択
      ...(filterProperties.length > 0 && {
        select: filterProperties
      })
    });

    return response.results;
  } catch (error) {
    console.error(`Notion API Error for ${databaseId}:`, error);
    return [];
  }
};

// 使用例
const newsData = await getOptimizedDatabase(newsId, {
  pageSize: 10,
  filterProperties: ['title', 'date', 'text', 'image'],
  filter: {
    property: 'published',
    checkbox: { equals: true }
  }
});
```

---

## **2. SEO最適化強化**

### **🎯 Phase 1: 緊急対応**

#### **A. 構造化データ大幅拡張**

**現在**: 基本的な組織情報のみ

**改善提案**:

**1. ニュース記事用構造化データ**:
```javascript
// components/pages/news/detail.js
const generateArticleStructuredData = (article, locale) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": article.title,
  "datePublished": article.date,
  "dateModified": article.lastModified || article.date,
  "author": {
    "@type": "Organization",
    "name": locale === 'ja' ? "ツーソン日本語学校" : "Tucson Japanese School",
    "url": "https://tjschool.org"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Tucson Japanese School",
    "logo": {
      "@type": "ImageObject",
      "url": "https://tjschool.org/logo.png"
    }
  },
  "description": article.description,
  "image": article.image ? `https://tjschool.org${article.image}` : null,
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": `https://tjschool.org/${locale === 'en' ? 'en/' : ''}news/${article.id}/`
  }
});
```

**2. 教育コース用構造化データ**:
```javascript
// components/pages/program/class.js
const generateCourseStructuredData = (course, locale) => ({
  "@context": "https://schema.org",
  "@type": "Course",
  "name": course.name,
  "description": course.description,
  "provider": {
    "@type": "EducationalOrganization",
    "name": locale === 'ja' ? "ツーソン日本語学校" : "Tucson Japanese School",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US",
      "addressRegion": "AZ",
      "addressLocality": "Tucson"
    }
  },
  "courseCode": course.code,
  "educationalLevel": course.level,
  "teaches": course.curriculum,
  "timeRequired": course.duration,
  "availableLanguage": ["ja", "en"]
});
```

**3. イベント用構造化データ**:
```javascript
// components/pages/program/events.js
const generateEventStructuredData = (event, locale) => ({
  "@context": "https://schema.org",
  "@type": "Event",
  "name": event.name,
  "description": event.description,
  "startDate": event.startDate,
  "endDate": event.endDate,
  "eventStatus": "https://schema.org/EventScheduled",
  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
  "location": {
    "@type": "Place",
    "name": "Tucson Japanese School",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US",
      "addressRegion": "AZ", 
      "addressLocality": "Tucson"
    }
  },
  "organizer": {
    "@type": "Organization",
    "name": "Tucson Japanese School",
    "url": "https://tjschool.org"
  }
});
```

#### **B. メタタグ完全最適化**

**_document.js改善**:
```javascript
// pages/_document.js
export default function Document() {
  return (
    <Html>
      <Head>
        {/* 基本メタタグ */}
        <meta charSet="utf-8" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="googlebot" content="index, follow" />
        
        {/* PWA対応 */}
        <meta name="theme-color" content="#1E40AF" />
        <meta name="msapplication-TileColor" content="#1E40AF" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* アイコン類 */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="//files.notion.so" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        
        {/* Preconnect */}
        <link rel="preconnect" href="https://files.notion.so" crossOrigin="" />
        
        {/* 構造化データ - 組織 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "Tucson Japanese Language School",
              "alternateName": "ツーソン日本語学校",
              "url": "https://tjschool.org",
              "logo": {
                "@type": "ImageObject",
                "url": "https://tjschool.org/logo.png",
                "width": 300,
                "height": 60
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US",
                "addressRegion": "AZ",
                "addressLocality": "Tucson",
                "postalCode": "85701"
              },
              "description": "Tucson Japanese Language School provides Japanese language education for children and adults in Tucson, Arizona.",
              "foundingDate": "2010",
              "email": "info@tjschool.org",
              "sameAs": [
                "https://www.facebook.com/tjschool"
              ],
              "hasCredential": {
                "@type": "EducationalOccupationalCredential",
                "credentialCategory": "Language Education"
              }
            })
          }}
        />
        
        {/* WebSite構造化データ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Tucson Japanese School",
              "url": "https://tjschool.org",
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://tjschool.org/search?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
```

#### **C. ページ別OGP最適化**

**各ページコンポーネントでの実装**:
```javascript
// components/pages/news/detail.js
export default function NewsDetailPage({ newsItem, locale }) {
  const { json, metaTitleExtension } = useLocale(locale);
  
  const ogpImage = newsItem.image 
    ? `https://tjschool.org${newsItem.image}`
    : `https://tjschool.org/og-image-${locale}.png`;

  return (
    <>
      <Head>
        <title>{newsItem.title} - {metaTitleExtension}</title>
        <meta name="description" content={newsItem.description || newsItem.text?.substring(0, 160)} />
        
        {/* Open Graph */}
        <meta property="og:title" content={`${newsItem.title} - ${metaTitleExtension}`} />
        <meta property="og:description" content={newsItem.description} />
        <meta property="og:image" content={ogpImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://tjschool.org/${locale === 'en' ? 'en/' : ''}news/${newsItem.id}/`} />
        <meta property="og:locale" content={locale === 'ja' ? 'ja_JP' : 'en_US'} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={newsItem.title} />
        <meta name="twitter:description" content={newsItem.description} />
        <meta name="twitter:image" content={ogpImage} />
        
        {/* Article specific */}
        <meta property="article:published_time" content={newsItem.date} />
        <meta property="article:author" content="Tucson Japanese School" />
        <meta property="article:section" content="News" />
        {newsItem.tags?.map(tag => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}
        
        {/* Language alternatives */}
        <link rel="alternate" hrefLang="ja" href={`https://tjschool.org/news/${newsItem.id}/`} />
        <link rel="alternate" hrefLang="en" href={`https://tjschool.org/en/news/${newsItem.id}/`} />
        <link rel="alternate" hrefLang="x-default" href={`https://tjschool.org/news/${newsItem.id}/`} />
        
        {/* 構造化データ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateArticleStructuredData(newsItem, locale))
          }}
        />
      </Head>
      {/* コンテンツ */}
    </>
  );
}
```

### **📈 Phase 2: 中期改善**

#### **D. サイトマップ機能強化**

**next-sitemap.js設定拡張**:
```javascript
// next-sitemap.config.js
const siteUrl = 'https://tjschool.org';

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  exclude: ['/admin/*', '/api/*'],
  alternateRefs: [
    {
      href: siteUrl,
      hreflang: 'ja',
    },
    {
      href: `${siteUrl}/en`,
      hreflang: 'en',
    },
    {
      href: siteUrl,
      hreflang: 'x-default',
    },
  ],
  transform: async (config, path) => {
    // ニュース記事の場合
    if (path.includes('/news/') && path !== '/news/') {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
        alternateRefs: [
          {
            href: `${siteUrl}${path}`,
            hreflang: 'ja',
          },
          {
            href: `${siteUrl}/en${path}`,
            hreflang: 'en',
          },
        ],
      };
    }
    
    // 一般ページ
    return {
      loc: path,
      changefreq: 'monthly',
      priority: path === '/' ? 1.0 : 0.7,
      lastmod: new Date().toISOString(),
    };
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
    ],
    additionalSitemaps: [
      `${siteUrl}/sitemap-news.xml`,
      `${siteUrl}/sitemap-images.xml`,
    ],
  },
};
```

#### **E. Core Web Vitals最適化**

**1. LCP (Largest Contentful Paint) 改善**:
```javascript
// components/parts/slider/index.js
export default function SliderList({ sliderList, locale }) {
  return (
    <section className="hero-section">
      {sliderList.map((slide, index) => (
        <ImageOptimizer
          key={slide.id}
          baseName={slide.image.baseName}
          pagePath={slide.image.pagePath}
          alt={slide.alt}
          priority={index === 0} // 最初の画像のみ優先読み込み
          sizes="100vw"
          responsive={true}
          responsiveType="hero"
          className="w-full h-96 object-cover"
        />
      ))}
    </section>
  );
}
```

**2. CLS (Cumulative Layout Shift) 改善**:
```css
/* globals.css追加 */
/* 画像コンテナのアスペクト比固定 */
.aspect-ratio-16-9 {
  aspect-ratio: 16/9;
}

.aspect-ratio-4-3 {
  aspect-ratio: 4/3;
}

.aspect-ratio-1-1 {
  aspect-ratio: 1/1;
}

/* 読み込み中のスケルトンスクリーン */
.skeleton {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
}

@keyframes loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

**3. FID (First Input Delay) 改善**:
```javascript
// components/parts/nav/nav.js
import { useCallback } from 'react';

export default function Navigation({ menuItems, locale }) {
  // イベントハンドラーのメモ化
  const handleMenuClick = useCallback((href) => {
    // ナビゲーション処理
    router.push(href);
  }, [router]);

  return (
    <nav role="navigation" aria-label="Main navigation">
      {menuItems.map((item) => (
        <button
          key={item.id}
          onClick={() => handleMenuClick(item.href)}
          className="focus:ring-2 focus:ring-blue-500 focus:outline-none
                     hover:bg-blue-50 transition-colors duration-150
                     px-4 py-2 rounded-md"
          aria-current={item.isActive ? 'page' : undefined}
        >
          {item.title}
        </button>
      ))}
    </nav>
  );
}
```

---

## **3. ユーザビリティ改善**

### **👥 Phase 1: アクセシビリティ強化**

#### **A. キーボードナビゲーション完全対応**

**1. フォーカス管理**:
```javascript
// components/parts/menu/LocaleLink.jsx
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useContext, useRef } from 'react';

export default function LocaleLink({ href, className, children, ...props }) {
  const { locale } = useContext(LocaleContext);
  const router = useRouter();
  const linkRef = useRef(null);
  
  let safeHref = href || "/";
  if (typeof safeHref !== "string") {
    safeHref = "/";
  }
  
  if (locale === "en") {
    safeHref = `/en${safeHref}`;
  }
  
  const isActive = router.asPath === safeHref;
  
  return (
    <Link 
      href={safeHref} 
      className={`
        ${className}
        focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none
        hover:text-blue-600 transition-colors duration-150
        ${isActive ? 'text-blue-600 font-semibold' : ''}
      `}
      aria-current={isActive ? 'page' : undefined}
      ref={linkRef}
      {...props}
    >
      {children}
    </Link>
  );
}
```

**2. ARIAラベル実装**:
```javascript
// components/parts/slider/index.js
export default function SliderList({ sliderList, locale }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  return (
    <section 
      className="slider-container"
      role="region"
      aria-label={locale === 'ja' ? 'メインスライダー' : 'Main slider'}
    >
      <div 
        className="slider-wrapper"
        role="group"
        aria-labelledby="slider-heading"
        aria-live="polite"
      >
        <h2 id="slider-heading" className="sr-only">
          {locale === 'ja' ? 'お知らせスライダー' : 'News Slider'}
        </h2>
        
        {sliderList.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${index === currentSlide ? 'active' : 'hidden'}`}
            role="tabpanel"
            aria-labelledby={`slide-tab-${index}`}
            aria-hidden={index !== currentSlide}
          >
            <ImageOptimizer
              baseName={slide.image.baseName}
              pagePath={slide.image.pagePath}
              alt={`${slide.title} - ${slide.description || ''}`}
              priority={index === 0}
            />
          </div>
        ))}
      </div>
      
      {/* スライダーコントロール */}
      <div className="slider-controls" role="tablist" aria-label="Slide selection">
        {sliderList.map((_, index) => (
          <button
            key={index}
            id={`slide-tab-${index}`}
            role="tab"
            aria-controls={`slide-panel-${index}`}
            aria-selected={index === currentSlide}
            onClick={() => setCurrentSlide(index)}
            className={`
              w-3 h-3 rounded-full mx-1 transition-colors duration-150
              focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none
              ${index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'}
            `}
          >
            <span className="sr-only">
              {locale === 'ja' ? `スライド ${index + 1}` : `Slide ${index + 1}`}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
```

#### **B. スクリーンリーダー対応**

**1. セマンティックHTML使用**:
```javascript
// components/pages/news/index.js
export default function NewsIndexPage({ newsList, locale }) {
  const { json } = useLocale(locale);
  
  return (
    <main role="main">
      <header className="page-header">
        <h1 className="text-3xl font-bold">
          {json.navigation.news}
        </h1>
        <p className="text-gray-600 mt-2">
          {locale === 'ja' 
            ? '学校からの最新のお知らせをご覧ください'
            : 'View the latest news from our school'
          }
        </p>
      </header>
      
      <section className="news-list" role="region" aria-labelledby="news-heading">
        <h2 id="news-heading" className="sr-only">ニュース一覧</h2>
        
        {newsList.length === 0 ? (
          <p role="status" aria-live="polite">
            {locale === 'ja' ? 'お知らせはありません' : 'No news available'}
          </p>
        ) : (
          <ul className="space-y-6" role="list">
            {newsList.map((news, index) => (
              <li key={news.id} className="news-item">
                <article className="bg-white p-6 rounded-lg shadow-sm">
                  <header>
                    <h3 className="text-xl font-semibold mb-2">
                      <LocaleLink 
                        href={`/news/${news.id}/`}
                        className="hover:text-blue-600 focus:text-blue-600"
                        aria-describedby={`news-date-${index} news-excerpt-${index}`}
                      >
                        {news.title}
                      </LocaleLink>
                    </h3>
                    <time 
                      id={`news-date-${index}`}
                      dateTime={news.rawDate}
                      className="text-gray-500 text-sm"
                    >
                      {news.date}
                    </time>
                  </header>
                  
                  {news.image && (
                    <figure className="mt-4">
                      <ImageOptimizer
                        baseName={news.image.baseName}
                        pagePath={news.image.pagePath}
                        alt={`${news.title}の画像`}
                        responsive={true}
                        responsiveType="card"
                        className="rounded-md"
                      />
                    </figure>
                  )}
                  
                  <p id={`news-excerpt-${index}`} className="mt-4 text-gray-700">
                    {news.excerpt || news.text?.substring(0, 150) + '...'}
                  </p>
                  
                  <footer className="mt-4">
                    <LocaleLink 
                      href={`/news/${news.id}/`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-800"
                      aria-label={`${news.title}の詳細を読む`}
                    >
                      {locale === 'ja' ? '詳細を見る' : 'Read more'}
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </LocaleLink>
                  </footer>
                </article>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
```

### **🎨 Phase 2: モバイルUX改善**

#### **A. タッチフレンドリーインターフェース**

**1. タッチターゲットサイズ最適化**:
```css
/* globals.css追加 */
/* モバイル用タッチターゲット */
.touch-target {
  min-height: 44px;
  min-width: 44px;
  touch-action: manipulation;
}

/* モバイルメニューアイテム */
.mobile-menu-item {
  min-height: 48px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  touch-action: manipulation;
}

/* ボタン類 */
.btn-mobile {
  min-height: 44px;
  padding: 12px 24px;
  font-size: 16px; /* iOS zoom防止 */
}

/* フォーム入力 */
.input-mobile {
  min-height: 44px;
  font-size: 16px; /* iOS zoom防止 */
  padding: 12px 16px;
}
```

**2. スワイプジェスチャー対応**:
```javascript
// components/parts/slider/index.js
import { useSwipeable } from 'react-swipeable';

export default function SliderList({ sliderList, locale }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => 
      prev === sliderList.length - 1 ? 0 : prev + 1
    );
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? sliderList.length - 1 : prev - 1
    );
  };
  
  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    trackMouse: true,
    trackTouch: true,
    delta: 10,
    preventScrollOnSwipe: true,
  });
  
  return (
    <div {...handlers} className="slider-container">
      {/* スライダーコンテンツ */}
    </div>
  );
}
```

#### **B. プログレッシブウェブアプリ(PWA)対応**

**1. Web App Manifest作成**:
```json
// public/site.webmanifest
{
  "name": "Tucson Japanese Language School",
  "short_name": "TJS",
  "description": "Learn Japanese in Tucson, Arizona",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#1E40AF",
  "orientation": "portrait-primary",
  "icons": [
    {
      "src": "/icons/icon-72x72.png",
      "sizes": "72x72",
      "type": "image/png",
      "purpose": "maskable any"
    },
    {
      "src": "/icons/icon-96x96.png",
      "sizes": "96x96",
      "type": "image/png",
      "purpose": "maskable any"
    },
    {
      "src": "/icons/icon-128x128.png",
      "sizes": "128x128",
      "type": "image/png",
      "purpose": "maskable any"
    },
    {
      "src": "/icons/icon-144x144.png",
      "sizes": "144x144",
      "type": "image/png",
      "purpose": "maskable any"
    },
    {
      "src": "/icons/icon-152x152.png",
      "sizes": "152x152",
      "type": "image/png",
      "purpose": "maskable any"
    },
    {
      "src": "/icons/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "maskable any"
    },
    {
      "src": "/icons/icon-384x384.png",
      "sizes": "384x384",
      "type": "image/png",
      "purpose": "maskable any"
    },
    {
      "src": "/icons/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "maskable any"
    }
  ],
  "shortcuts": [
    {
      "name": "News",
      "short_name": "News",
      "description": "Latest school news",
      "url": "/news/",
      "icons": [{ "src": "/icons/news-96x96.png", "sizes": "96x96" }]
    },
    {
      "name": "Classes",
      "short_name": "Classes",
      "description": "Japanese classes",
      "url": "/program/class/",
      "icons": [{ "src": "/icons/classes-96x96.png", "sizes": "96x96" }]
    }
  ],
  "categories": ["education", "language"],
  "lang": "ja",
  "dir": "ltr"
}
```

**2. Service Worker実装**:
```javascript
// public/sw.js
const CACHE_NAME = 'tjs-v1';
const urlsToCache = [
  '/',
  '/en/',
  '/styles/globals.css',
  '/icons/icon-192x192.png',
  '/favicon.ico'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // キャッシュがある場合は返す、なければネットワークから取得
        return response || fetch(event.request);
      })
  );
});
```

### **🔍 Phase 3: 検索機能実装**

#### **A. サイト内検索機能**

**1. 検索インデックス生成**:
```javascript
// lib/search.js
import Fuse from 'fuse.js';

export const createSearchIndex = (pages, news, locale) => {
  const searchData = [
    // ページコンテンツ
    ...pages.map(page => ({
      id: page.id,
      type: 'page',
      title: page.title,
      content: page.content,
      url: page.url,
      locale
    })),
    // ニュース記事
    ...news.map(article => ({
      id: article.id,
      type: 'news',
      title: article.title,
      content: article.text,
      url: `/news/${article.id}/`,
      date: article.date,
      locale
    }))
  ];

  const options = {
    keys: [
      { name: 'title', weight: 0.7 },
      { name: 'content', weight: 0.3 }
    ],
    threshold: 0.3,
    includeScore: true,
    includeMatches: true
  };

  return new Fuse(searchData, options);
};
```

**2. 検索コンポーネント**:
```javascript
// components/parts/search/SearchBox.js
import { useState, useEffect, useRef } from 'react';
import { useDebounce } from '../../../hooks/useDebounce';

export default function SearchBox({ searchIndex, locale, onResults }) {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState([]);
  const inputRef = useRef(null);
  const resultsRef = useRef(null);
  
  const debouncedQuery = useDebounce(query, 300);
  
  useEffect(() => {
    if (debouncedQuery && searchIndex) {
      const searchResults = searchIndex.search(debouncedQuery);
      setResults(searchResults.slice(0, 10)); // 上位10件
      setIsOpen(true);
      onResults?.(searchResults);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, [debouncedQuery, searchIndex, onResults]);
  
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
      inputRef.current?.blur();
    }
  };
  
  return (
    <div className="relative">
      <div className="relative">
        <input
          ref={inputRef}
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={locale === 'ja' ? 'サイト内検索...' : 'Search site...'}
          className="
            w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg
            focus:ring-2 focus:ring-blue-500 focus:border-blue-500
            text-gray-900 placeholder-gray-500
          "
          aria-label={locale === 'ja' ? 'サイト内検索' : 'Search site'}
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          role="combobox"
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>
      
      {isOpen && results.length > 0 && (
        <div 
          ref={resultsRef}
          className="
            absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg
            max-h-96 overflow-y-auto
          "
          role="listbox"
        >
          {results.map((result, index) => (
            <div
              key={result.item.id}
              className="
                px-4 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0
                focus:bg-gray-50 focus:outline-none
              "
              role="option"
              tabIndex={0}
              onClick={() => {
                window.location.href = result.item.url;
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-gray-900">
                    {result.item.title}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">
                    {result.item.type === 'news' ? 
                      (locale === 'ja' ? 'ニュース' : 'News') : 
                      (locale === 'ja' ? 'ページ' : 'Page')
                    }
                    {result.item.date && ` • ${result.item.date}`}
                  </p>
                </div>
                <div className="text-xs text-gray-400">
                  {Math.round((1 - result.score) * 100)}% match
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
```

---

## **4. パフォーマンス監視・分析**

### **📊 Phase 3: 分析・改善サイクル構築**

#### **A. Web Vitals監視**

**1. Real User Monitoring (RUM)実装**:
```javascript
// lib/analytics.js
export const reportWebVitals = (metric) => {
  const { name, value, id } = metric;
  
  // Google Analytics 4への送信
  if (typeof gtag !== 'undefined') {
    gtag('event', name, {
      custom_parameter_1: id,
      custom_parameter_2: Math.round(name === 'CLS' ? value * 1000 : value),
    });
  }
  
  // 独自分析への送信
  fetch('/api/analytics', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ metric })
  });
};
```

**2. _app.js統合**:
```javascript
// pages/_app.js
import { reportWebVitals } from '../lib/analytics';

function MyApp({ Component, pageProps }) {
  return (
    <LocaleProvider>
      <Component {...pageProps} />
    </LocaleProvider>
  );
}

export { reportWebVitals };
export default MyApp;
```

#### **B. バンドルアナライザー導入**

**package.json追加**:
```json
{
  "scripts": {
    "analyze": "cross-env ANALYZE=true next build",
    "analyze:server": "cross-env BUNDLE_ANALYZE=server next build",
    "analyze:browser": "cross-env BUNDLE_ANALYZE=browser next build"
  },
  "devDependencies": {
    "@next/bundle-analyzer": "^13.5.11"
  }
}
```

**next.config.js設定**:
```javascript
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  // 既存の設定...
});
```

---

## **5. 実装ロードマップ**

### **🔴 Phase 1: 緊急対応（1-2週間）**

**優先度: 最高**
- [ ] 画像最適化設定変更 (`next.config.js`)
- [ ] Critical CSS分離実装
- [ ] 構造化データ拡張（組織、WebSite）
- [ ] 基本的なメタタグ完全実装

**期待効果**:
- ビルドサイズ: 201MB → 120MB (-40%)
- 初期表示速度: 30%向上
- SEOスコア: 15-20点向上

### **🟡 Phase 2: 中期改善（3-4週間）**

**優先度: 高**
- [ ] Dynamic imports導入
- [ ] ページ別構造化データ実装
- [ ] アクセシビリティ改善（ARIA、フォーカス管理）
- [ ] Web Vitals最適化

**期待効果**:
- JavaScript初期ロード: 50%削減
- Lighthouse Accessibility: 95点以上
- Core Web Vitals: 全指標Good

### **🟢 Phase 3: 長期最適化（1-2ヶ月）**

**優先度: 中**
- [ ] 検索機能実装
- [ ] PWA対応
- [ ] パフォーマンス監視システム
- [ ] A/Bテスト環境構築

**期待効果**:
- ユーザーエンゲージメント: 25%向上
- モバイル利用体験: 大幅改善
- 運用効率: データドリブン改善サイクル確立

---

## **6. 期待される改善効果**

### **📈 パフォーマンス指標**

| 項目 | 現在 | Phase 1後 | Phase 3後 |
|------|------|-----------|-----------|
| ビルドサイズ | 201MB | 120MB | 80MB |
| 初期表示速度 | 3.5s | 2.4s | 1.8s |
| First Contentful Paint | 2.8s | 1.9s | 1.2s |
| Largest Contentful Paint | 4.2s | 2.8s | 2.0s |
| Cumulative Layout Shift | 0.15 | 0.08 | 0.05 |
| Lighthouse Score | 75 | 88 | 95 |

### **🎯 SEO指標**

| 項目 | 現在 | 改善後 |
|------|------|--------|
| Core Web Vitals | 部分的Good | 全指標Good |
| 構造化データ | 基本のみ | 全ページ対応 |
| アクセシビリティ | 80点 | 95点以上 |
| モバイル最適化 | 85点 | 95点以上 |

### **👥 ユーザビリティ指標**

| 項目 | 期待改善 |
|------|----------|
| 直帰率 | 20%削減 |
| 滞在時間 | 30%延長 |
| ページビュー/セッション | 25%向上 |
| モバイル利用満足度 | 大幅改善 |

---

## **7. 技術的負債・注意事項**

### **⚠️ 実装時の注意点**

**1. 画像最適化有効化時の注意**:
- Notionから取得する画像URLの処理が変わる可能性
- 開発環境でのテストを十分に実施
- Firebase Hostingの静的配信設定確認

**2. Dynamic imports導入時**:
- SEOに影響しないよう、重要コンテンツは同期読み込み維持
- ロードイングステートの適切な実装
- エラーバウンダリの設定

**3. 構造化データ実装時**:
- データの整合性確認
- Google Search Console での検証
- 段階的な実装とテスト

### **🔄 継続的改善のための仕組み**

**1. 監視体制**:
- Web Vitals継続監視
- エラー追跡システム
- ユーザーフィードバック収集

**2. 定期レビュー**:
- 月次パフォーマンスレポート
- 四半期SEO状況確認
- 年次技術スタック見直し

**3. 改善サイクル**:
- データに基づく問題特定
- 仮説立案と検証実装
- 効果測定と次期改善計画

---

**このドキュメントは、ツーソン日本語学校サイトの継続的な改善を目的として作成されました。各フェーズの実装完了後は、効果測定を行い、次の改善計画に反映させることをお勧めします。**