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
      } else if (router.pathname.includes('/en')) {
        setLocale('en');
      } else {
        // ブラウザの言語設定を使用
        const userLocale = navigator.language || navigator.userLanguage || '';
        if (userLocale.startsWith('ja')) {
          setLocale('ja');
        } else {
          setLocale('en');
        }
      }
    }, [lang, router.pathname]);

    return (
      <LocaleContext.Provider value={{ locale, setLocale }}>
        {children}
      </LocaleContext.Provider>
    );
}

export default LocaleContext;
