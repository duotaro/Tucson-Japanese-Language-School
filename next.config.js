const urlPrefix = process.env.URL_PREFIX ? '/' + process.env.URL_PREFIX : ''

module.exports = {
  assetPrefix: urlPrefix,
  basePath: urlPrefix,
  trailingSlash: true,
  staticPageGenerationTimeout: 600,
  
  // SEO設定
  generateEtags: false,
  poweredByHeader: false,
  output: 'export',
  
  // エラー処理の改善
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
  
  // 静的生成の最適化
  experimental: {
    workerThreads: false,
    cpus: 1
  }
};