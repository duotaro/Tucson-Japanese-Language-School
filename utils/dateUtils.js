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
    // ISO 8601形式の文字列をDateオブジェクトに変換
    const date = new Date(dateString);

    // 日を取得
    const day = date.getDate();
    var month = date.getMonth() + 1;
    const year = date.getFullYear();
    const dayNumber = date.getDay(); // 0 (日曜日) から 6 (土曜日) までの整数
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


    // 月の略称を取得するためのオプション
    const monthFormatter = new Intl.DateTimeFormat("en", { month: 'short' });
    month = monthFormatter.format(date);

    const formatterWeekday = new Intl.DateTimeFormat("en", { weekday: 'short' });
    dayName = formatterWeekday.format(date);
        
    return {
        "year" : year,
        "month" : month,
        "day" : day,
        "dayName" : dayName
    }
}

export const formatDateForHHmm = (dateString, isJpn) => {
    const date = new Date(dateString);
    const hour = date.getHours()
    const minutes = formatMinutes(date)

    var period = hour >= 12 ? 'PM' : 'AM';
    if(isJpn){
        period = hour >= 12 ? '午後' : '午前';
        return `${period}${hour}時${minutes}分`
    }

    return `${hour}:${minutes} ${period}`
}

function formatMinutes(date) {
    // 分を取得
    const minutes = date.getMinutes();
    // 分を2桁の文字列にフォーマット
    return minutes.toString().padStart(2, '0');
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