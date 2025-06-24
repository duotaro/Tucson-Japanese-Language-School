/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // 統一されたタイポグラフィスケール
      fontSize: {
        'display': ['3rem', { lineHeight: '1.2', fontWeight: '700' }],       // 48px - 特別な表示用
        'h1': ['2rem', { lineHeight: '1.3', fontWeight: '600' }],           // 32px - メインタイトル
        'h2': ['1.75rem', { lineHeight: '1.35', fontWeight: '600' }],       // 28px - サブタイトル
        'h3': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],         // 24px - セクションタイトル
        'h4': ['1.25rem', { lineHeight: '1.4', fontWeight: '600' }],        // 20px - 小見出し
        'h5': ['1.125rem', { lineHeight: '1.5', fontWeight: '600' }],       // 18px - 詳細見出し
        'h6': ['1rem', { lineHeight: '1.5', fontWeight: '600' }],           // 16px - 最小見出し
        'body-lg': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }],  // 18px - 大きい本文
        'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],         // 16px - 標準本文
        'body-sm': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],  // 14px - 小さい本文
        'caption': ['0.75rem', { lineHeight: '1.4', fontWeight: '400' }],   // 12px - キャプション
      },
      
      // レスポンシブタイポグラフィパターン
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [
    // @tailwindcss/line-clamp is included by default in Tailwind CSS v3.3+
  ]
}