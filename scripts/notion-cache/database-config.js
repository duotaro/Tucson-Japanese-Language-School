/**
 * Notion データベース設定
 * 全てのNotion データベースIDと更新頻度を管理
 */

// データベースID設定
export const DATABASES = {
  // 基本コンテンツ（低頻度更新）
  slider: "f2bd94d61f7c45958755562d366af5ea",     // トップスライダー
  sponsors: "1e302ac5bce442b797e491aee309e7c4",    // スポンサー
  about: "d4eb3828e74c469b9179ca7be9edb5cf",       // About情報
  mission: "f40ad3a82b894969a6a1b0ee0bfcb0cf",     // ミッション（学校のビジョン）
  vision: "105a8c0ecf8c8082a456dd95fd87d0c2",      // ビジョン（理念）
  story: "02ed913f2ebe4151b0235d91a9306403",       // 学校の歴史
  greeting: "5ceb6b37e4584fa39fb78161869d885f",    // ウェルカムメッセージ
  history: "15c93b4fe6154400902a623b20c6fe49",     // 学校の歴史詳細
  
  // 組織情報（中頻度更新）
  directors: "10ba8c0ecf8c807ba7c6c7c9128d9770",   // 理事会
  orgChart: "10ca8c0ecf8c80629eb3ee7c40cf9005",    // 組織図
  policies: "10ca8c0ecf8c80998e3bfb0372ccc293",    // 方針・規定
  roleList: "122a8c0ecf8c80059934c64693cc39ca",    // 役職リスト
  staff: "9b85f554b3fc42dcb9d38f1ec87b168c",       // スタッフ情報
  
  // プログラム情報（中頻度更新）
  category: "11aa8c0ecf8c80ed885ff949e5ee51bb",     // クラスカテゴリ
  classes: "11aa8c0ecf8c80a7ab2cf31cd0b0a881",     // クラス情報
  schedule: "8d87080f73f14e8a9e7ba934c1d928c6",    // スケジュール
  files: "11aa8c0ecf8c803e8289cb5bd9a5f80a",       // ファイル管理
  
  // 入学関連（中頻度更新）
  qualification: "11ba8c0ecf8c80e4a3d6cb2cae30ac08", // 入学資格
  price: "11ba8c0ecf8c8068afc9c4ba38330221",         // 料金
  discountFamily: "11ba8c0ecf8c80daa4a0e58b368b1dc3", // 家族割引
  discountStaff: "11ca8c0ecf8c80658187d57a17357400",  // スタッフ割引
  enrollment: "11ba8c0ecf8c8059bbddf42453136463",      // 入学手続き
  
  // サポート関連（中頻度更新）
  support: "10ca8c0ecf8c8039a51bdd38f640a34e",      // サポート情報
  sponsor: "10ea8c0ecf8c80eeae62cc2050b7e7f7",     // スポンサー詳細
  donation: "10ea8c0ecf8c801b802bc2b43a3ecf91",    // 寄付情報
  howto: "10ca8c0ecf8c8081a8a0e9a9a6166cc1",       // ハウツー
  
  // お問い合わせ（中頻度更新）
  opportunity: "102a8c0ecf8c80089b21d14aec9edd22", // 機会・ボランティア
  general: "d9037016a0524f08adecdbab0c7302b7",     // 一般お問い合わせ
  
  // レポート関連（低頻度更新）
  reports: "10da8c0ecf8c80029cf8f3860f21e33f",     // 年次レポート
  
  // 動的コンテンツ（高頻度更新）
  news: "cc0b1eb3570842ba926cc71ecaf5df4d", // ニュースデータベース
  event: "277a8c0ecf8c81ca99a5fb387ce465d8", // イベントデータベース
  
  // レイアウト設定（低頻度更新）
  layout: "5bf76e8fcd304274b21ad0f5f8d42e8a",      // レイアウト設定
};

// 更新頻度別分類
export const UPDATE_STRATEGIES = {
  // 高頻度更新（毎日） - ニュースやイベント
  frequent: ['news', 'event', 'slider', 'sponsors'], // ニュース、イベント、スライダー、スポンサー
  
  // 中頻度更新（週1回） - スタッフ、クラス、スケジュール
  moderate: [
    'staff', 'roleList', 'classes', 'schedule', 'category', 'files',
    'qualification', 'price', 'discountFamily', 'discountStaff', 'enrollment',
    'support', 'sponsor', 'donation', 'howto', 'opportunity', 'general',
    'directors', 'orgChart', 'policies'
  ],
  
  // 低頻度更新（月1回） - 基本情報、ミッション、方針
  rare: [
    'slider', 'sponsors', 'about', 'mission', 'vision', 'story', 
    'greeting', 'history', 'reports', 'layout'
  ]
};

// データベース名とIDのマッピング
export function getDatabaseId(dataType) {
  const id = DATABASES[dataType];
  if (!id) {
    throw new Error(`Unknown data type: ${dataType}`);
  }
  if (id === "NEWS_DB_ID_NOT_SET") {
    throw new Error("NEXT_PUBLIC_NOTION_NEWS_DATABASE_ID environment variable is not set");
  }
  return id;
}

// 全データベースリストを取得
export function getAllDatabases() {
  return Object.keys(DATABASES);
}

// 更新頻度別データベースリストを取得
export function getDatabasesByFrequency(frequency) {
  return UPDATE_STRATEGIES[frequency] || [];
}

// データベース設定の検証
export function validateDatabaseConfig() {
  const issues = [];
  
  // 環境変数チェック（一時的にコメントアウト）
  // if (!process.env.NEXT_PUBLIC_NOTION_NEWS_DATABASE_ID) {
  //   issues.push('NEXT_PUBLIC_NOTION_NEWS_DATABASE_ID environment variable is missing');
  // }
  
  // 重複IDチェック
  const ids = Object.values(DATABASES).filter(id => id !== "NEWS_DB_ID_NOT_SET");
  const uniqueIds = new Set(ids);
  if (ids.length !== uniqueIds.size) {
    issues.push('Duplicate database IDs found');
  }
  
  // 更新戦略の整合性チェック
  const allStrategies = Object.values(UPDATE_STRATEGIES).flat();
  const allDatabases = Object.keys(DATABASES);
  
  const missingInStrategy = allDatabases.filter(db => !allStrategies.includes(db));
  const extraInStrategy = allStrategies.filter(db => !allDatabases.includes(db));
  
  if (missingInStrategy.length > 0) {
    issues.push(`Databases missing from update strategies: ${missingInStrategy.join(', ')}`);
  }
  
  if (extraInStrategy.length > 0) {
    issues.push(`Unknown databases in update strategies: ${extraInStrategy.join(', ')}`);
  }
  
  return {
    valid: issues.length === 0,
    issues
  };
}