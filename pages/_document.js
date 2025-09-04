import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        {/* 基本的なメタタグ */}
        <meta charSet="utf-8" />
        <meta name="robots" content="index, follow" />
        
        {/* favicon */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        
        {/* Open Graph メタタグ */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Tucson Japanese Language School" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        
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
              "logo": "https://tjschool.org/logo-ja.png",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US",
                "addressRegion": "AZ",
                "addressLocality": "Tucson"
              },
              "description": "Tucson Japanese Language School provides Japanese language education for children and adults in Tucson, Arizona.",
              "sameAs": [
                "https://www.facebook.com/tjschool"
              ]
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