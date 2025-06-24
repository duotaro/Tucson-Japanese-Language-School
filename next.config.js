const urlPrefix = process.env.URL_PREFIX ? '/' + process.env.URL_PREFIX : ''

module.exports = {
  assetPrefix: urlPrefix,
  basePath: urlPrefix,
  trailingSlash: true,
  staticPageGenerationTimeout: 300,
  
  // i18n設定
  i18n: {
    locales: ['ja', 'en'],
    defaultLocale: 'ja',
    localeDetection: false
  },
  
  // SEO設定
  generateEtags: false,
  poweredByHeader: false
};