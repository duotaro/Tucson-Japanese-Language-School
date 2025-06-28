# CLAUDE.md
必ず日本語で回答してください。
This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Build and Deployment
- `npm run dev` - Start development server
- `npm run build` - Build production app with static export and sitemap generation (includes memory optimization)
- `npm run start` - Start production server
- `npm run lint` - Run Next.js linting
- `npm run sitemap` - Generate sitemap
- `npm run deploy` - Deploy to develop branch (builds sitemap, commits, and pushes)
- `npm run release` - Release to main branch (builds sitemap, commits, and pushes)

### Package Management
- Uses Yarn 4.2.2 as package manager
- Run `yarn install` to install dependencies

## Architecture Overview

### Framework and Stack
- **Next.js 13** with static export functionality
- **React 18** with functional components
- **Tailwind CSS** for styling with dark mode support
- **Firebase Hosting** for deployment (exports to `out/` directory)
- **Notion API** integration for content management
- **Bilingual support** (Japanese/English) with locale context

### Project Structure
- `pages/` - Next.js pages with nested routing structure
- `components/` - Reusable React components organized by feature
  - `parts/` - Feature-specific components (about, admission, news, etc.)
  - `context/` - React context providers (locale)
  - `layout.js` - Main layout component
- `const/` - Configuration and constants
  - `locale/` - Translation files (en.json, ja.json)
  - `pageUrl.js` - URL configurations
- `entity/` - Data entity definitions
- `lib/` - Utility libraries (Notion API, Google Analytics)
- `utils/` - Helper functions (date, locale, number utilities)
- `public/` - Static assets with organized image/PDF structure

### Key Features
- **Bilingual Website**: Japanese and English versions with locale-based routing (`/en/` prefix)
- **Static Site Generation**: Exports to static files for Firebase hosting
- **Notion CMS Integration**: Dynamic content fetched from Notion databases
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **SEO Optimization**: Sitemap generation and meta tag management
- **Image Optimization**: Custom image optimization with WebP support and responsive sizing

### Content Management
- News and events managed through Notion API
- Staff profiles and organizational data stored in entity files
- Bilingual content support with locale-specific JSON files
- PDF downloads for reports and forms

### Deployment Configuration
- Static export configured in `next.config.js`
- Firebase hosting setup in `firebase.json`
- Custom build process includes sitemap generation
- Git-based deployment workflow with develop/main branches

### Development Notes
- Uses custom image optimization component for responsive images
- Locale context provides language switching functionality
- Entity files contain structured data for various content types
- Menu system dynamically generated from URL configurations
- Google Analytics integration for tracking

### Development Guidelines
- 必ず修正後に、以下の確認をしてくださいね。
- 1. yarn dev を実行してエラーがないこと。
- 2. yarn build　を実行してエラーがないこと。
- 修正後に原因となっていた部分と、解消方法を簡単に明記してください。
