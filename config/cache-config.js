/**
 * キャッシュシステム設定ファイル
 * 本番環境でも動的に制御可能
 */

const cacheConfig = {
  // グローバルキャッシュ有効/無効
  // false にすると全てのキャッシュが無効になり、直接Notion APIから取得
  enabled: false,

  // データタイプ別の個別制御
  // false にすると該当データタイプのみAPIから直接取得
  dataTypes: {
    news: true,        // ニュース
    slider: true,      // スライダー画像
    sponsors: true,    // スポンサー
    schedule: true,    // スケジュール
    about: true,       // About情報
    general: true,     // 一般情報
    greeting: true,    // 挨拶文
    story: true,       // ストーリー
    history: true,     // 歴史
    mission: true,     // ミッション
    vision: true,      // ビジョン
    orgChart: true,    // 組織図
    directors: true,   // 役員
    staff: true,       // スタッフ
    reports: true,     // レポート
    policies: true,    // ポリシー
    classes: true,     // クラス情報
    files: true,       // ファイル
    howto: true,       // 使い方
  },

  // デバッグモード（キャッシュの使用状況をログ出力）
  debug: true,

  // キャッシュの最大有効期間（ミリ秒）
  // 0 = 無期限
  maxAge: 24 * 60 * 60 * 1000, // 24時間

  // APIフォールバック設定
  // キャッシュが見つからない/エラーの場合にAPIから取得するか
  fallbackToAPI: true,
};

/**
 * 設定を動的に変更する関数
 * @param {Object} newConfig - 新しい設定（部分的な更新も可能）
 */
export function updateCacheConfig(newConfig) {
  if (newConfig.enabled !== undefined) {
    cacheConfig.enabled = newConfig.enabled;
  }

  if (newConfig.dataTypes) {
    Object.assign(cacheConfig.dataTypes, newConfig.dataTypes);
  }

  if (newConfig.debug !== undefined) {
    cacheConfig.debug = newConfig.debug;
  }

  if (newConfig.maxAge !== undefined) {
    cacheConfig.maxAge = newConfig.maxAge;
  }

  if (newConfig.fallbackToAPI !== undefined) {
    cacheConfig.fallbackToAPI = newConfig.fallbackToAPI;
  }
}

/**
 * 特定のデータタイプのキャッシュ設定を取得
 * @param {string} dataType - データタイプ
 * @returns {boolean} キャッシュが有効かどうか
 */
export function isCacheEnabledForType(dataType) {
  return cacheConfig.enabled && cacheConfig.dataTypes[dataType] !== false;
}

/**
 * 全てのキャッシュを一時的に無効化
 */
export function disableAllCache() {
  cacheConfig.enabled = false;
  if (cacheConfig.debug) {
    console.log('🚫 全てのキャッシュを無効化しました');
  }
}

/**
 * 全てのキャッシュを有効化
 */
export function enableAllCache() {
  cacheConfig.enabled = true;
  if (cacheConfig.debug) {
    console.log('✅ 全てのキャッシュを有効化しました');
  }
}

/**
 * 現在の設定を取得
 * @returns {Object} 現在のキャッシュ設定
 */
export function getCacheConfig() {
  return { ...cacheConfig };
}

export default cacheConfig;