# ツーソン日本語学校 サイト設計書

## 概要

ツーソン日本語学校のウェブサイトは、Next.js 13を使用した多言語対応（日本語・英語）の静的サイトです。Notion APIをCMSとして活用し、Firebase Hostingでデプロイされています。

### 技術スタック
- **フレームワーク**: Next.js 13 (Static Site Generation)
- **ライブラリ**: React 18 (関数コンポーネント)
- **スタイリング**: Tailwind CSS (ダークモード対応)
- **CMS**: Notion API
- **ホスティング**: Firebase Hosting
- **画像最適化**: カスタム ImageOptimizer コンポーネント
- **国際化**: 独自実装（LocaleContext）

### プロジェクト構造

```
TucsonJapaneseLanguageSchool/
├── pages/
│   └── [[...slug]].js          # 動的ルーティング（全ページ統合）
├── components/
│   ├── pages/                  # ページ固有コンポーネント
│   ├── parts/                  # 再利用可能パーツ
│   ├── context/                # Reactコンテキスト
│   └── layout.js               # 共通レイアウト
├── const/
│   ├── locale/                 # 多言語翻訳ファイル
│   └── pageUrl.js              # URL設定・メニュー構造
├── entity/                     # データエンティティクラス
├── lib/                        # Notion API等ライブラリ
├── utils/                      # ユーティリティ関数
└── public/                     # 静的ファイル
```

## 多言語対応設計

### URL構造
- **日本語**: `https://tjschool.org/` （ルートパス）
- **英語**: `https://tjschool.org/en/` （/en/ プレフィックス）

### SEO対応
- hreflang属性による言語指定
- canonical URL設定
- 言語別メタタグ
- サイトマップでの言語別URL登録

---

## 画面設計詳細

### 1. ホームページ (`/`, `/en/`)

**概要**: サイトのトップページ。学校の概要、最新ニュース、ミッション・ビジョンを表示。

**URL**:
- 日本語: `https://tjschool.org/`
- 英語: `https://tjschool.org/en/`

**コンポーネント**: `pages/[[...slug]].js` (pageType: 'home')

**表示要素**:
- **スライダー**: トップ画像スライダー (SliderList)
- **お知らせ**: 最新ニュース3件 (News)
- **学校案内**: 学校紹介文 (About)
- **ミッション**: 教育理念 (Mission)
- **ビジョン**: 将来ビジョン (Vision)
- **スタッフ募集**: 求人情報 (Opportunity)
- **スポンサー**: 協賛企業ロゴ (Sponsor)

**データソース**:
- スライダー: Notion DB `f2bd94d61f7c45958755562d366af5ea`
- ニュース: `NEXT_PUBLIC_NOTION_NEWS_DATABASE_ID`
- 学校案内: `d4eb3828e74c469b9179ca7be9edb5cf`
- スケジュール: `8d87080f73f14e8a9e7ba934c1d928c6`
- スタッフ募集: `d9037016a0524f08adecdbab0c7302b7`
- スポンサー: `1e302ac5bce442b797e491aee309e7c4`

**メタタグ**:
```html
<title>ツーソン日本語学校 | アメリカ・アリゾナ州ツーソンの日本語教育</title>
<meta name="description" content="ツーソン日本語学校は、アリゾナ州ツーソンで日本語教育を提供する学校です。" />
```

---

### 2. 学校案内 (`/about/`)

#### 2.1 ようこそTJSへ (`/about/welcome/`)

**概要**: 学校への挨拶、学校の歴史、設立ストーリーを紹介。

**URL**:
- 日本語: `https://tjschool.org/about/welcome/`
- 英語: `https://tjschool.org/en/about/welcome/`

**コンポーネント**: `components/pages/about/welcome.js`

**表示要素**:
- **挨拶**: 校長・理事長からの挨拶文 (Greeting)
- **学校の歴史**: 設立からの歩み (History)
- **私たちのストーリー**: 学校設立の背景 (OurStory)

**使用パーツ**:
- `components/parts/about/welcome/greetings.js`
- `components/parts/about/welcome/history.js`
- `components/parts/about/welcome/our_story.js`

**データソース**:
- 挨拶: `5ceb6b37e4584fa39fb78161869d885f`
- ストーリー: `02ed913f2ebe4151b0235d91a9306403`
- 歴史: `15c93b4fe6154400902a623b20c6fe49`

**エンティティ**:
- GreetingEntity
- StoryEntity
- HistoryEntity

#### 2.2 理念・目標 (`/about/mission/`)

**概要**: 学校の教育理念、ミッション、ビジョン、教育方針を掲載。

**URL**:
- 日本語: `https://tjschool.org/about/mission/`
- 英語: `https://tjschool.org/en/about/mission/`

**コンポーネント**: `components/pages/about/mission.js`

**表示要素**:
- **ミッション**: 教育使命 (Mission)
- **ビジョン**: 将来展望 (Vision)
- **教育方針**: 教育理念 (Philosophy)
- **ポリシー**: 学校方針 (Policy)

**使用パーツ**:
- `components/parts/about/mission/mission.js`
- `components/parts/about/mission/vision.js`
- `components/parts/about/mission/philosophy.js`
- `components/parts/about/mission/policy.js`

**データソース**:
- ミッション・ビジョン: `d4eb3828e74c469b9179ca7be9edb5cf`
- 教育方針: `4138b4ce0ba6471a8cfe91bec34068ad`
- ポリシー: `ba18afdf-a39a-49bd-a90e-459f9f12cf40`

**エンティティ**:
- AboutEntity (mission, vision タグで分類)
- PhilosophyEntity
- PolicyEntity

#### 2.3 学校運営 (`/about/governance/`)

**概要**: 組織図、理事会メンバー、学校運営体制を紹介。

**URL**:
- 日本語: `https://tjschool.org/about/governance/`
- 英語: `https://tjschool.org/en/about/governance/`

**コンポーネント**: `components/pages/about/governance.js`

**エンティティ**:
- DirectorsEntity
- OrgChartEntity

#### 2.4 講師紹介 (`/about/staff/`)

**概要**: 講師・スタッフのプロフィール、経歴、写真を掲載。

**URL**:
- 日本語: `https://tjschool.org/about/staff/`
- 英語: `https://tjschool.org/en/about/staff/`

**コンポーネント**: `components/pages/about/staff.js`

#### 2.5 年間報告書 (`/about/report/`)

**概要**: 年次報告書のダウンロードページ。

**URL**:
- 日本語: `https://tjschool.org/about/report/`
- 英語: `https://tjschool.org/en/about/report/`

**コンポーネント**: `components/pages/about/report.js`

**エンティティ**:
- AnualReportEntity

---

### 3. プログラム (`/program/`)

#### 3.1 クラス紹介 (`/program/class/`)

**概要**: 開設クラス、対象年齢、カリキュラム詳細を掲載。

**URL**:
- 日本語: `https://tjschool.org/program/class/`
- 英語: `https://tjschool.org/en/program/class/`

**コンポーネント**: `components/pages/program/class.js`

**エンティティ**:
- ClassEntity

#### 3.2 年間予定 (`/program/calendar/`)

**概要**: 年間スケジュール、学期日程、休校日を表示。

**URL**:
- 日本語: `https://tjschool.org/program/calendar/`
- 英語: `https://tjschool.org/en/program/calendar/`

**コンポーネント**: `components/pages/program/calendar.js`

**エンティティ**:
- ScheduleEntity

#### 3.3 イベント (`/program/events/`)

**概要**: 学校行事、文化イベント、特別活動を紹介。

**URL**:
- 日本語: `https://tjschool.org/program/events/`
- 英語: `https://tjschool.org/en/program/events/`

**コンポーネント**: `components/pages/program/events.js`

#### 3.4 漢字検定 (`/program/kanji_kentei/`)

**概要**: 漢字検定試験の実施要項、申込方法。

**URL**:
- 日本語: `https://tjschool.org/program/kanji_kentei/`
- 英語: `https://tjschool.org/en/program/kanji_kentei/`

**コンポーネント**: `components/pages/program/kanji_kentei.js`

---

### 4. 入学案内 (`/admissions/forms/`)

**概要**: 入学手続き、見学申込、入学資格、授業料を案内。

**URL**:
- 日本語: `https://tjschool.org/admissions/forms/`
- 英語: `https://tjschool.org/en/admissions/forms/`

**コンポーネント**: `components/pages/admissions/forms.js`

**表示要素**:
- 入学資格
- 入学手続き
- 授業料
- 見学申込フォーム

**エンティティ**:
- PriceEntity

---

### 5. お知らせ (`/news/`)

#### 5.1 ニュース一覧 (`/news/`)

**概要**: 学校からのお知らせ、イベント情報の一覧表示。

**URL**:
- 日本語: `https://tjschool.org/news/`
- 英語: `https://tjschool.org/en/news/`

**コンポーネント**: `components/pages/news/index.js`

**データソース**: `NEXT_PUBLIC_NOTION_NEWS_DATABASE_ID`

**エンティティ**: NewsEntity

#### 5.2 ニュース詳細 (`/news/[id]`)

**概要**: 個別ニュース記事の詳細表示。

**URL**:
- 日本語: `https://tjschool.org/news/[id]/`
- 英語: `https://tjschool.org/en/news/[id]/`

**コンポーネント**: `components/pages/news/detail.js`

**表示要素**:
- タイトル
- 投稿日
- 記事本文
- 添付画像
- タグ

**動的ルーティング**: ニュースIDに基づく動的パス生成

---

### 6. 支援・寄付 (`/support/`)

**概要**: 学校への寄付、支援方法を案内。

**URL**:
- 日本語: `https://tjschool.org/support/`
- 英語: `https://tjschool.org/en/support/`

**コンポーネント**: `components/pages/support.js`

---

### 7. お問い合わせ (`/contact/`)

#### 7.1 お問い合わせ (`/contact/`)

**概要**: 一般的な問い合わせフォーム、連絡先情報。

**URL**:
- 日本語: `https://tjschool.org/contact/`
- 英語: `https://tjschool.org/en/contact/`

**コンポーネント**: `components/pages/contact/index.js`

#### 7.2 スタッフ募集 (`/contact/opportunity/`)

**概要**: 講師・スタッフ求人情報、応募方法。

**URL**:
- 日本語: `https://tjschool.org/contact/opportunity/`
- 英語: `https://tjschool.org/en/contact/opportunity/`

**コンポーネント**: `components/pages/contact/opportunity.js`

**データソース**: `d9037016a0524f08adecdbab0c7302b7`

**エンティティ**:
- OpportunityEntity
- OpportunityDetailEntity

---

## 共通コンポーネント設計

### レイアウトコンポーネント

#### Layout (`components/layout.js`)
- ページ全体の共通レイアウト
- Header, Footer, Breadcrumb を含む
- locale prop による言語切り替え対応

#### Navbar (`components/navbar.js`)
- サイト上部ナビゲーション
- 多言語メニュー
- モバイル対応ハンバーガーメニュー

#### Footer (`components/footer.js`)
- サイト下部フッター
- 連絡先情報
- ソーシャルメディアリンク

### ナビゲーションコンポーネント

#### LocaleLink (`components/parts/menu/LocaleLink.jsx`)
- 多言語対応リンクコンポーネント
- locale context による自動URL調整
- null安全性チェック実装

#### DisclosureDetail (`components/parts/nav/disclosureDetail.js`)
- モバイル用ドロップダウンメニュー
- Headless UI使用

### 画像最適化

#### ImageOptimizer (`components/download/ImageOptimizer.js`)
- WebP形式対応
- レスポンシブサイズ生成
- 遅延読み込み
- alt属性自動設定

### ファイルダウンロード

#### PDFファイル管理
- 年間報告書PDFダウンロード
- 多言語ファイル対応
- Notion API連携

---

## データ管理設計

### エンティティクラス

#### NewsEntity (`entity/newsEntity.js`)
```javascript
class NewsEntity {
  constructor(item, isJapanese)
  // プロパティ: title, date, text, image, tags, id
}
```

#### AboutEntity (`entity/aboutEntity.js`)
```javascript
class AboutEntity {
  constructor(item, isJpn)
  // プロパティ: title, text, image, tag
  // tag値による分類: "about", "mission", "vision"
}
```

#### SponsorEntity (`entity/sponsorEntity.js`)
- スポンサー企業情報管理

#### その他エンティティ
- GreetingEntity: 挨拶文
- HistoryEntity: 学校歴史
- StoryEntity: 設立ストーリー  
- PhilosophyEntity: 教育方針
- PolicyEntity: 学校方針
- ClassEntity: クラス情報
- ScheduleEntity: スケジュール
- PriceEntity: 授業料
- OpportunityEntity: 求人情報

### Notion API連携

#### データ取得関数 (`lib/notion.js`)
```javascript
export const getDatabase = async (databaseId)
// Notion データベースからページ一覧取得
```

#### fetchData関数 (`pages/[[...slug]].js`)
```javascript
const fetchData = async (databaseId, pagePath, limit = null)
// 画像最適化、パフォーマンス調整付きデータ取得
// 開発環境: limit制限有り, 本番環境: 制限無し
```

---

## パフォーマンス最適化

### 静的サイト生成 (SSG)
- `getStaticPaths`: 全ページパス事前生成
- `getStaticProps`: ビルド時データ取得
- fallback: false（404対応）

### 画像最適化
- WebP形式自動変換
- レスポンシブサイズ生成
- 遅延読み込み実装

### データ最適化
- 開発環境でのデータ取得制限
- 必須プロパティのみ抽出
- 画像メタデータ事前処理

### メモリ使用量制御
- NODE_OPTIONS=--max_old_space_size=8192
- データ取得量の環境別制御

---

## SEO・多言語対応

### メタタグ設定
```html
<!-- 言語別 -->
<html lang="ja" />
<meta name="language" content="ja" />
<meta httpEquiv="content-language" content="ja" />

<!-- hreflang設定 -->
<link rel="alternate" hreflang="ja" href="https://tjschool.org/" />
<link rel="alternate" hreflang="en" href="https://tjschool.org/en/" />
<link rel="alternate" hrefLang="x-default" href="https://tjschool.org/" />

<!-- Open Graph -->
<meta property="og:locale" content="ja_JP" />
<meta property="og:type" content="website" />
```

### サイトマップ生成
- `next-sitemap`による自動生成
- 多言語URL対応
- 最終更新日自動設定

---

## デプロイメント設計

### ビルドプロセス
```bash
npm run build
# 1. next build: 最適化ビルド
# 2. next export: 静的ファイル生成
# 3. next-sitemap: サイトマップ生成
```

### 環境別設定
- **開発**: localhost:3000, データ取得制限有り
- **本番**: Firebase Hosting, 全データ取得

### Git workflow
- **develop**: 開発用ブランチ
- **main**: 本番リリースブランチ
- 自動デプロイスクリプト対応

---

## まとめ

このサイトは、Notion CMSを活用した多言語対応の静的サイトとして設計されており、以下の特徴があります：

1. **高いパフォーマンス**: SSG + 静的ホスティング
2. **SEO最適化**: 多言語hreflang、structured data
3. **管理性**: Notion APIによる簡単コンテンツ管理
4. **拡張性**: エンティティベースの設計
5. **保守性**: コンポーネント分割とTypeScript対応準備

各画面は独立したコンポーネントとして設計されており、共通パーツの再利用とメンテナンス性を重視した構造となっています。