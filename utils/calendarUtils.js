/**
 * カレンダー追加機能のユーティリティ関数
 */

/**
 * Googleカレンダーに追加するURLを生成
 * @param {Object} event - イベント情報
 * @returns {string} GoogleカレンダーURL
 */
export function generateGoogleCalendarUrl(event) {
  const baseUrl = 'https://calendar.google.com/calendar/render?action=TEMPLATE';
  
  // 日付フォーマット (YYYYMMDDTHHmmSS または YYYYMMDD)
  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    
    // 時間があるかチェック
    const hasTime = dateStr.includes('T') && !dateStr.endsWith('T00:00:00.000Z');
    
    if (hasTime) {
      // アリゾナ時間として扱う (UTC-7)
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      const seconds = String(date.getSeconds()).padStart(2, '0');
      return `${year}${month}${day}T${hours}${minutes}${seconds}`;
    } else {
      // 終日イベント
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}${month}${day}`;
    }
  };

  const params = new URLSearchParams();
  
  // タイトル
  if (event.title) {
    params.append('text', event.title);
  }
  
  // 日時
  const startDate = formatDate(event.start || event.dateTime);
  const endDate = formatDate(event.end || event.start || event.dateTime);
  
  if (startDate) {
    // 終日イベントかどうかを判定
    const isAllDay = event.allDay || (!event.startTime && !event.endTime);
    
    if (isAllDay) {
      // 終日イベントの場合、終了日を1日後に設定
      const start = new Date(event.start || event.dateTime);
      const end = new Date(event.end || event.start || event.dateTime);
      
      // 同じ日付の場合は、終了日を1日後に
      if (startDate === endDate) {
        end.setDate(end.getDate() + 1);
      }
      
      const endDateFormatted = `${end.getFullYear()}${String(end.getMonth() + 1).padStart(2, '0')}${String(end.getDate()).padStart(2, '0')}`;
      params.append('dates', `${startDate}/${endDateFormatted}`);
    } else {
      params.append('dates', `${startDate}/${endDate}`);
      // タイムゾーンを明示的に指定
      params.append('ctz', 'America/Phoenix');
    }
  }
  
  // 詳細
  if (event.text || event.description) {
    params.append('details', event.text || event.description);
  }
  
  // 場所
  if (event.location) {
    params.append('location', event.location);
  }
  
  return `${baseUrl}&${params.toString()}`;
}

/**
 * iCalendarファイル用のコンテンツを生成
 * @param {Object} event - イベント情報
 * @returns {string} iCalendarフォーマットの文字列
 */
export function generateICalContent(event) {
  const formatICalDate = (dateStr, isAllDay = false) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    
    if (isAllDay) {
      return `${year}${month}${day}`;
    } else {
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      const seconds = String(date.getSeconds()).padStart(2, '0');
      return `${year}${month}${day}T${hours}${minutes}${seconds}`;
    }
  };
  
  const isAllDay = event.allDay || (!event.startTime && !event.endTime);
  const startDate = formatICalDate(event.start || event.dateTime, isAllDay);
  
  let endDate;
  if (isAllDay) {
    // 終日イベントの場合、終了日を1日後に設定
    const end = new Date(event.end || event.start || event.dateTime);
    if (!event.end || event.end === event.start) {
      end.setDate(end.getDate() + 1);
    }
    endDate = formatICalDate(end, isAllDay);
  } else {
    endDate = formatICalDate(event.end || event.start || event.dateTime, isAllDay);
  }
  
  // UIDを生成（一意性を保つため）
  const uid = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}@tjschool.org`;
  
  // 現在時刻（DTSTAMP用）
  const now = new Date();
  const dtstamp = formatICalDate(now.toISOString());
  
  // iCalendarフォーマット
  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Tucson Japanese Language School//NONSGML v1.0//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:${uid}`,
    `DTSTAMP:${dtstamp}`
  ];
  
  // 日時の追加
  if (isAllDay) {
    lines.push(`DTSTART;VALUE=DATE:${startDate}`);
    lines.push(`DTEND;VALUE=DATE:${endDate}`);
  } else {
    lines.push(`DTSTART;TZID=America/Phoenix:${startDate}`);
    lines.push(`DTEND;TZID=America/Phoenix:${endDate}`);
  }
  
  // タイトル
  if (event.title) {
    lines.push(`SUMMARY:${escapeICalText(event.title)}`);
  }
  
  // 説明
  if (event.text || event.description) {
    lines.push(`DESCRIPTION:${escapeICalText(event.text || event.description)}`);
  }
  
  // 場所
  if (event.location) {
    lines.push(`LOCATION:${escapeICalText(event.location)}`);
  }
  
  // URL
  if (event.link) {
    lines.push(`URL:${event.link}`);
  }
  
  lines.push('END:VEVENT');
  lines.push('END:VCALENDAR');
  
  return lines.join('\r\n');
}

/**
 * iCalendarのテキストをエスケープ
 * @param {string} text - エスケープするテキスト
 * @returns {string} エスケープ済みテキスト
 */
function escapeICalText(text) {
  if (!text) return '';
  return text
    .replace(/\\/g, '\\\\')
    .replace(/;/g, '\\;')
    .replace(/,/g, '\\,')
    .replace(/\n/g, '\\n')
    .replace(/\r/g, '');
}

/**
 * iCalendarファイルをダウンロード
 * @param {Object} event - イベント情報
 */
export function downloadICalFile(event) {
  const content = generateICalContent(event);
  const blob = new Blob([content], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.href = url;
  link.download = `${event.title || 'event'}.ics`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}