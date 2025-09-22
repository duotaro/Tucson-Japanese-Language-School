export const formatDate = (dateString, locale) => {
    // ISO 8601形式の文字列をDateオブジェクトに変換
    const date = new Date(dateString);

    const formats = {
        'ja': { year: 'numeric', month: 'numeric', day: 'numeric', era: 'long' },
        'en': { year: 'numeric', month: 'long', day: 'numeric' }
    };

    // 日を取得
    const day = date.getDate();
    var month = date.getMonth() + 1;
    const year = date.getFullYear();


    if(locale == "ja"){

        return `${year}年${month}月${day}日`;
    }


    // 月の略称を取得するためのオプション
    const monthFormatter = new Intl.DateTimeFormat(locale, formats[locale]);
    month = monthFormatter.format(date);
        
    // 日に序数接尾辞を追加
    const suffix = day => {
        if (day > 3 && day < 21) return 'th'; // 11-13は例外
        switch (day % 10) {
            case 1: return 'st';
            case 2: return 'nd';
            case 3: return 'rd';
            default: return 'th';
        }
    };
    
    return `${month}`;
}

export const formatDateForCalander = (dateString, isJpn) => {
    // 日付文字列をパースして、タイムゾーンに関係なく同じ日付を表示
    let year, month, day;

    if (dateString.includes('T')) {
        // ISO 8601形式の場合（例: "2025-02-15T00:00:00.000Z"）
        const datePart = dateString.split('T')[0];
        [year, month, day] = datePart.split('-').map(Number);
    } else {
        // 日付のみの場合（例: "2025-02-15"）
        [year, month, day] = dateString.split('-').map(Number);
    }

    // 曜日を取得（ローカル日付で計算）
    const localDate = new Date(year, month - 1, day);
    const dayNumber = localDate.getDay();
    const daysOfWeek = ["日", "月", "火", "水", "木", "金", "土"];
    var dayName = daysOfWeek[dayNumber];

    if(isJpn){
        return {
            "year" : year,
            "month" : month,
            "day" : day,
            "dayName" : dayName
        }
    }

    // 英語の月名を取得（フルネーム）
    const monthFormatter = new Intl.DateTimeFormat("en", {
        month: 'long'
    });
    const monthFormatted = monthFormatter.format(localDate);

    // 英語の曜日を取得（フルネーム）
    const formatterWeekday = new Intl.DateTimeFormat("en", {
        weekday: 'long'
    });
    const dayNameFormatted = formatterWeekday.format(localDate);

    // 日に序数接尾辞を追加（1st, 2nd, 3rd, 4th, etc.）
    const getOrdinalSuffix = (day) => {
        if (day > 3 && day < 21) return 'th'; // 11-13は例外
        switch (day % 10) {
            case 1: return 'st';
            case 2: return 'nd';
            case 3: return 'rd';
            default: return 'th';
        }
    };

    const dayWithSuffix = `${day}${getOrdinalSuffix(day)}`;

    return {
        "year" : year,
        "month" : monthFormatted,
        "day" : dayWithSuffix,
        "dayName" : dayNameFormatted
    }
}

export const formatDateForHHmm = (dateString, isJpn) => {
    const date = new Date(dateString);
    
    // アリゾナ州のタイムゾーン（America/Phoenix）を指定
    const arizonaTimeZone = 'America/Phoenix';
    
    // アリゾナ時間で時刻を取得
    const arizonaTime = new Intl.DateTimeFormat('en-US', {
        timeZone: arizonaTimeZone,
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    }).format(date);
    
    const [hourStr, minuteStr] = arizonaTime.split(':');
    const hour = parseInt(hourStr);
    const minutes = minuteStr;

    var period = hour >= 12 ? 'PM' : 'AM';
    if(isJpn){
        period = hour >= 12 ? '午後' : '午前';
        return `${period}${hour}時${minutes}分`
    }

    return `${hour}:${minutes} ${period}`
}


export function getSchoolYear(locale) {
    const startMonth = 7
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth(); // 0 = January, 11 = December
  
    let schoolYearStart, schoolYearEnd;
  
    if (month >= startMonth) { // 開始月以降
      schoolYearStart = year;
      schoolYearEnd = year + 1;
    } else { // 開始月より前
      schoolYearStart = year - 1;
      schoolYearEnd = year;
    }

    const label = locale == "ja" ? `${schoolYearStart}年度` : `${schoolYearStart}-${schoolYearEnd} School Event`
  
    return {
        start: schoolYearStart,
        term: `${schoolYearStart}-${schoolYearEnd}`,
        label: label
    }
}

export function isWithinSchoolYear(dateString, schoolYearStartMonth = 8) {
    const date = new Date(dateString); // 'YYYY-MM-DD'形式の文字列をDateオブジェクトに変換
    
    const year = date.getFullYear();
    const startYear = date.getMonth() >= schoolYearStartMonth - 1 ? year : year - 1; // 学年度の開始年を決定
    const endYear = startYear + 1; // 学年度の終了年
  
    const schoolYearStart = new Date(startYear, schoolYearStartMonth - 1, 1); // 学年度開始日
    const schoolYearEnd = new Date(endYear, 5, 31); // 学年度終了日（5月31日）
  
    return date >= schoolYearStart && date <= schoolYearEnd; // 判定
}