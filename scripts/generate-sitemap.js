const fs = require('fs');
const path = require('path');

// サイトの基本URL
const baseUrl = 'https://tjschool.org';

// 静的ページ一覧
const staticPages = [
  '/',
  '/about/welcome/',
  '/about/mission/',
  '/about/governance/',
  '/about/staff/',
  '/admissions/forms/',
  '/program/class/',
  '/program/calendar/',
  '/news/',
  '/support/',
  '/opportunities/',
  '/annual-report/'
];

// 優先度とchangefreqを設定
const pageConfig = {
  '/': { priority: '1.0', changefreq: 'daily' },
  '/about/welcome/': { priority: '0.8', changefreq: 'monthly' },
  '/about/mission/': { priority: '0.8', changefreq: 'monthly' },
  '/about/governance/': { priority: '0.7', changefreq: 'monthly' },
  '/about/staff/': { priority: '0.7', changefreq: 'monthly' },
  '/admissions/forms/': { priority: '0.9', changefreq: 'monthly' },
  '/program/class/': { priority: '0.9', changefreq: 'weekly' },
  '/program/calendar/': { priority: '0.9', changefreq: 'daily' },
  '/news/': { priority: '0.8', changefreq: 'daily' },
  '/support/': { priority: '0.7', changefreq: 'monthly' },
  '/opportunities/': { priority: '0.6', changefreq: 'monthly' },
  '/annual-report/': { priority: '0.6', changefreq: 'yearly' }
};

// 現在の日時を取得
const now = new Date().toISOString();

// sitemap.xmlの内容を生成
function generateSitemap() {
  let sitemap = `<?xml version=\"1.0\" encoding=\"UTF-8\"?>
<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\" 
        xmlns:xhtml=\"http://www.w3.org/1999/xhtml\">`;

  staticPages.forEach(page => {
    const config = pageConfig[page] || { priority: '0.5', changefreq: 'monthly' };
    
    // 日本語版（デフォルト）
    sitemap += `
  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${config.changefreq}</changefreq>
    <priority>${config.priority}</priority>
    <xhtml:link rel=\"alternate\" hreflang=\"ja\" href=\"${baseUrl}${page}\" />
    <xhtml:link rel=\"alternate\" hreflang=\"en\" href=\"${baseUrl}/en${page}\" />
    <xhtml:link rel=\"alternate\" hreflang=\"x-default\" href=\"${baseUrl}${page}\" />
  </url>`;

    // 英語版
    sitemap += `
  <url>
    <loc>${baseUrl}/en${page}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${config.changefreq}</changefreq>
    <priority>${config.priority}</priority>
    <xhtml:link rel=\"alternate\" hreflang=\"ja\" href=\"${baseUrl}${page}\" />
    <xhtml:link rel=\"alternate\" hreflang=\"en\" href=\"${baseUrl}/en${page}\" />
    <xhtml:link rel=\"alternate\" hreflang=\"x-default\" href=\"${baseUrl}${page}\" />
  </url>`;
  });

  sitemap += `
</urlset>`;

  return sitemap;
}

// sitemap-index.xmlの内容を生成
function generateSitemapIndex() {
  return `<?xml version=\"1.0\" encoding=\"UTF-8\"?>
<sitemapindex xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">
  <sitemap>
    <loc>${baseUrl}/sitemap-0.xml</loc>
    <lastmod>${now}</lastmod>
  </sitemap>
</sitemapindex>`;
}

// ファイルを生成
const publicDir = path.join(__dirname, '../public');

// sitemap-0.xmlを生成
fs.writeFileSync(
  path.join(publicDir, 'sitemap-0.xml'),
  generateSitemap(),
  'utf8'
);

// sitemap.xmlを生成
fs.writeFileSync(
  path.join(publicDir, 'sitemap.xml'),
  generateSitemapIndex(),
  'utf8'
);

console.log('✅ sitemap.xml と sitemap-0.xml を生成しました');