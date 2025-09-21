#!/usr/bin/env node

/**
 * Google Calendar API カレンダー同期スクリプト
 * Google Calendar APIとNotionデータを統合
 * 
 * 使用方法:
 *   yarn calendar:sync
 */

import { google } from 'googleapis';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 環境変数を読み込む
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

// パス設定
const NOTION_CACHE_FILE = path.resolve(__dirname, '../cache/notion-data/schedule.json');
const GOOGLE_CACHE_DIR = path.resolve(__dirname, '../cache/google-calendar');
const GOOGLE_CACHE_FILE = path.join(GOOGLE_CACHE_DIR, 'events.json');

// 安全設定
const SAFETY_CONFIG = {
  MAX_DAILY_REQUESTS: 100, // 1日の最大リクエスト数
  CACHE_EXPIRY_HOURS: 6,   // キャッシュ有効期限（時間）
};

/**
 * Google Calendar APIクライアントを初期化
 */
function initializeGoogleCalendar() {
  if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || !process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY) {
    throw new Error('❌ Google API認証情報が設定されていません。GOOGLE_CALENDAR_SETUP.mdを参照してください。');
  }
  
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/calendar.readonly'],
  });

  return google.calendar({ version: 'v3', auth });
}

/**
 * Googleカレンダーからイベントを取得
 */
async function fetchGoogleCalendarEvents(calendarId) {
  const calendar = initializeGoogleCalendar();
  
  // 現在から3ヶ月先までのイベントを取得
  const timeMin = new Date().toISOString();
  const timeMax = new Date();
  timeMax.setMonth(timeMax.getMonth() + 3);
  
  try {
    console.log('🔍 Google Calendar APIでイベントを取得中...');
    const response = await calendar.events.list({
      calendarId: calendarId || 'primary',
      timeMin: timeMin,
      timeMax: timeMax.toISOString(),
      singleEvents: true,
      orderBy: 'startTime',
      maxResults: 100,
    });
    
    return response.data.items || [];
  } catch (error) {
    console.error('❌ Google Calendar API エラー:', error.message);
    
    // エラータイプに応じた対処法を提示
    if (error.message?.includes('quota') || error.message?.includes('limit')) {
      console.log('💡 解決方法: Google Cloud ConsoleでAPIクォータを確認してください');
    } else if (error.message?.includes('credentials') || error.message?.includes('authentication')) {
      console.log('💡 解決方法: サービスアカウントの認証情報を確認してください');
    } else if (error.message?.includes('not found') || error.message?.includes('404')) {
      console.log('💡 解決方法: カレンダーIDとサービスアカウントの権限を確認してください');
    }
    
    throw error;
  }
}

/**
 * GoogleカレンダーイベントをNotion形式に変換
 */
function convertToNotionFormat(googleEvent) {
  // 日時の処理
  let startDate, endDate;
  const isAllDay = !googleEvent.start.dateTime;
  
  if (isAllDay) {
    // 終日イベント
    startDate = googleEvent.start.date;
    endDate = googleEvent.end.date;
  } else {
    // 時間指定イベント
    startDate = googleEvent.start.dateTime;
    endDate = googleEvent.end.dateTime;
  }
  
  // Notion形式のオブジェクトを作成
  return {
    object: 'page',
    id: `google-${googleEvent.id}`, // GoogleイベントIDにプレフィックスを付与
    created_time: googleEvent.created || new Date().toISOString(),
    last_edited_time: googleEvent.updated || new Date().toISOString(),
    properties: {
      title: {
        type: 'rich_text',
        rich_text: [{
          type: 'text',
          text: {
            content: googleEvent.summary || 'No Title',
            link: null
          }
        }]
      },
      en: {
        type: 'rich_text',
        rich_text: [{
          type: 'text',
          text: {
            content: googleEvent.summary || 'No Title',
            link: null
          }
        }]
      },
      date: {
        type: 'date',
        date: {
          start: startDate,
          end: endDate,
          time_zone: null
        }
      },
      text: {
        type: 'rich_text',
        rich_text: googleEvent.description ? [{
          type: 'text',
          text: {
            content: googleEvent.description,
            link: null
          }
        }] : []
      },
      text_en: {
        type: 'rich_text',
        rich_text: googleEvent.description ? [{
          type: 'text',
          text: {
            content: googleEvent.description,
            link: null
          }
        }] : []
      },
      location: {
        type: 'rich_text',
        rich_text: googleEvent.location ? [{
          type: 'text',
          text: {
            content: googleEvent.location,
            link: null
          }
        }] : []
      },
      link: {
        type: 'url',
        url: googleEvent.htmlLink || null
      },
      isEvent: {
        type: 'checkbox',
        checkbox: true
      },
      backgroundColor: {
        type: 'rich_text',
        rich_text: [{
          type: 'text',
          text: {
            content: getColorFromGoogle(googleEvent.colorId),
            link: null
          }
        }]
      },
      source: {
        type: 'rich_text',
        rich_text: [{
          type: 'text',
          text: {
            content: 'Google Calendar',
            link: null
          }
        }]
      }
    }
  };
}

/**
 * GoogleカレンダーのカラーIDをCSSカラーに変換
 */
function getColorFromGoogle(colorId) {
  const colorMap = {
    '1': '#7986cb',  // Lavender
    '2': '#33b679',  // Sage
    '3': '#8e24aa',  // Grape
    '4': '#e67c73',  // Flamingo
    '5': '#f6c026',  // Banana
    '6': '#f5511d',  // Tangerine
    '7': '#039be5',  // Peacock
    '8': '#616161',  // Graphite
    '9': '#3f51b5',  // Blueberry
    '10': '#0b8043', // Basil
    '11': '#d60000', // Tomato
  };
  
  return colorMap[colorId] || '#4285f4'; // デフォルトはGoogleブルー
}

/**
 * Notionキャッシュファイルを読み込む
 */
async function loadNotionCache() {
  try {
    const data = await fs.readFile(NOTION_CACHE_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.warn('⚠️ Notionキャッシュファイルが見つかりません');
    return [];
  }
}

/**
 * キャッシュの有効性をチェック
 */
async function checkCache() {
  try {
    const stats = await fs.stat(GOOGLE_CACHE_FILE);
    const now = new Date();
    const fileAge = (now - stats.mtime) / (1000 * 60 * 60); // 時間単位
    
    if (fileAge < SAFETY_CONFIG.CACHE_EXPIRY_HOURS) {
      console.log(`📦 キャッシュは有効です（${fileAge.toFixed(1)}時間前に更新）`);
      const data = await fs.readFile(GOOGLE_CACHE_FILE, 'utf-8');
      return JSON.parse(data);
    }
  } catch {
    // キャッシュファイルが存在しない
  }
  
  return null;
}

/**
 * イベントの重複をチェック
 */
function isDuplicate(event1, event2) {
  const title1 = event1.properties?.title?.rich_text?.[0]?.text?.content || '';
  const title2 = event2.properties?.title?.rich_text?.[0]?.text?.content || '';
  const date1 = event1.properties?.date?.date?.start;
  const date2 = event2.properties?.date?.date?.start;
  
  return title1 === title2 && date1 === date2;
}

/**
 * カレンダーデータを統合
 */
function mergeCalendarData(notionEvents, googleEvents) {
  const merged = [...notionEvents];
  
  // Googleカレンダーのイベントを追加（重複を除く）
  let addedCount = 0;
  let skippedCount = 0;
  
  for (const googleEvent of googleEvents) {
    const isDupe = notionEvents.some(notionEvent => isDuplicate(notionEvent, googleEvent));
    if (!isDupe) {
      merged.push(googleEvent);
      addedCount++;
    } else {
      skippedCount++;
    }
  }
  
  console.log(`  → ${addedCount}件を追加、${skippedCount}件の重複をスキップ`);
  
  // 日付でソート
  merged.sort((a, b) => {
    const dateA = new Date(a.properties?.date?.date?.start || 0);
    const dateB = new Date(b.properties?.date?.date?.start || 0);
    return dateA - dateB;
  });
  
  return merged;
}

/**
 * メイン処理
 */
async function main() {
  try {
    // 必須環境変数のチェック
    const calendarId = process.env.GOOGLE_CALENDAR_ID;
    
    if (!calendarId) {
      console.error('❌ 環境変数 GOOGLE_CALENDAR_ID が設定されていません');
      console.log('\n📝 .env.localファイルに以下を追加してください:');
      console.log('GOOGLE_CALENDAR_ID=your-calendar-id@group.calendar.google.com');
      console.log('\n📖 詳細はGOOGLE_CALENDAR_SETUP.mdを参照してください');
      process.exit(1);
    }
    
    console.log('🔄 Google Calendar API同期を開始します\n');
    
    // 1. Notionデータを読み込み
    console.log('📚 Notionデータを読み込み中...');
    const notionEvents = await loadNotionCache();
    console.log(`  → ${notionEvents.length}件のNotionイベント`);
    
    // 2. キャッシュチェック
    console.log('\n📦 キャッシュをチェック中...');
    let googleEvents = await checkCache();
    
    if (!googleEvents) {
      // 3. Googleカレンダーデータを取得
      console.log('\n🌐 Google Calendar APIからデータを取得中...');
      
      try {
        const rawGoogleEvents = await fetchGoogleCalendarEvents(calendarId);
        googleEvents = rawGoogleEvents.map(convertToNotionFormat);
        console.log(`  → ${googleEvents.length}件のGoogleカレンダーイベント`);
        
        // Googleカレンダーデータをキャッシュに保存
        await fs.mkdir(GOOGLE_CACHE_DIR, { recursive: true });
        await fs.writeFile(GOOGLE_CACHE_FILE, JSON.stringify(googleEvents, null, 2));
        console.log('  → キャッシュを更新しました');
      } catch (error) {
        console.error('⚠️ Googleカレンダーの取得に失敗しました:', error.message);
        
        // フォールバック: 空の配列を使用
        googleEvents = [];
        console.log('  → Googleカレンダーデータなし（Notionデータのみ使用）');
      }
    }
    
    // 4. データを統合
    console.log('\n🔀 データを統合中...');
    const mergedEvents = mergeCalendarData(notionEvents, googleEvents);
    console.log(`  → 合計${mergedEvents.length}件のイベント`);
    
    // 5. 統合データを保存
    console.log('\n💾 データを保存中...');
    await fs.writeFile(NOTION_CACHE_FILE, JSON.stringify(mergedEvents, null, 2));
    console.log('✅ schedule.jsonを更新しました');
    
    console.log('\n🎉 Google Calendar API同期が完了しました！');
    console.log('\n💡 ヒント:');
    console.log('- デバッグ: cache/google-calendar/events.json でデータを確認');
    console.log('- ビルド: yarn calendar:sync && yarn build で本番用ビルド');
    
    return mergedEvents;
  } catch (error) {
    console.error('\n❌ エラーが発生しました:', error.message);
    console.log('\n🔧 トラブルシューティング:');
    console.log('1. GOOGLE_CALENDAR_SETUP.md の設定を再確認');
    console.log('2. Google Cloud Console の認証情報とAPIの有効化を確認');
    console.log('3. カレンダーの共有設定を確認');
    process.exit(1);
  }
}

// スクリプトとして実行された場合
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main();
}