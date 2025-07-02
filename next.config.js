const urlPrefix = process.env.URL_PREFIX ? '/' + process.env.URL_PREFIX : ''

module.exports = {
  assetPrefix: urlPrefix,
  basePath: urlPrefix,
  trailingSlash: true,
  staticPageGenerationTimeout: 600,
  
  // SEO設定
  generateEtags: false,
  poweredByHeader: false,
  //output: 'export',
  
  // 静的エクスポート用の画像設定
  images: {
    unoptimized: true
  },
  
  // エラー処理の改善
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
  
  // 静的生成の最適化
  experimental: {
    workerThreads: false,
    cpus: 1
  },
  
  // サーバーサイド専用モジュールの除外
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        child_process: false,
        sharp: false,
      };
    }
    return config;
  }
};