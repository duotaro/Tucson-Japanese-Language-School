// context/ThemeContext.js
import { createContext, useState, useEffect } from 'react';

const LocaleContext = createContext();
import { useRouter } from 'next/router';

export function LocaleProvider({ children }) {
    const router = useRouter();
    const { lang } = router.query;
    const [locale, setLocale] = useState("ja");

    useEffect(() => {
      if (lang) {
        setLocale(lang);
      } else if (router.asPath.startsWith('/en') || router.pathname.includes('/en')) {
        setLocale('en');
      } else if (router.asPath === '/' || !router.asPath.startsWith('/en')) {
        setLocale('ja');
      } else {
        // ユーザーが選択したロケールをlocalStorageから取得
        const savedLocale = typeof window !== 'undefined' ? localStorage.getItem('userLocale') : null;
        if (savedLocale) {
          setLocale(savedLocale);
        } else {
          // 初回訪問時のみブラウザの言語設定を使用
          const userLocale = navigator.language || navigator.userLanguage || '';
          const initialLocale = userLocale.startsWith('ja') ? 'ja' : 'en';
          setLocale(initialLocale);
          localStorage.setItem('userLocale', initialLocale);
        }
      }
    }, [lang, router.pathname, router.asPath]);

    return (
      <LocaleContext.Provider value={{ locale, setLocale }}>
        {children}
      </LocaleContext.Provider>
    );
}

export default LocaleContext;
