const urlPrefix = process.env.URL_PREFIX ? '/' + process.env.URL_PREFIX : ''
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  assetPrefix: urlPrefix,
  basePath: urlPrefix,
  trailingSlash: true,
  staticPageGenerationTimeout: 600,
  
  // SEO設定
  generateEtags: false,
  poweredByHeader: false,
  output: 'export',
  
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
  
  // サーバーサイド専用モジュールの除外とバンドル最適化
  webpack: (config, { isServer, dev }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        child_process: false,
        sharp: false,
      };
    }

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
});