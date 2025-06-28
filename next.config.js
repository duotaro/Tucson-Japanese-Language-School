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
  
  // 画像最適化設定の改善
  images: {
    unoptimized: true, // 静的エクスポートでは必須
    formats: ['image/webp', 'image/avif'], // 最新フォーマット対応
    deviceSizes: [640, 768, 1024, 1280, 1920], // レスポンシブ対応
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512],
    minimumCacheTTL: 31536000, // 1年キャッシュ
    domains: [
      'files.notion.so',
      'prod-files-secure.s3.us-west-2.amazonaws.com',
      's3.us-west-2.amazonaws.com'
    ], // Notion画像ドメイン追加
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