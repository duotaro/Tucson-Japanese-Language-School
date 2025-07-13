import "../styles/globals.css";
import "../firebase/client.js"
import Script from "next/script";
import { LocaleProvider } from "../components/context/localeContext.js"
import { getDatabase } from "../lib/notion.js";
import Layout from "../components/layout.js";
// import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  
//  useEffect(() => {
//     require("bootstrap/dist/js/bootstrap.bundle.min.js");
//   }, []);

  return (
  <>
    <LocaleProvider> 
      <Component {...pageProps} />
    </LocaleProvider>
  </>
  );
}

// MyApp.getInitialProps = async (appContext) => {
//   // ページコンポーネントが持つgetInitialPropsも呼び出します
//   const appProps = await App.getInitialProps(appContext);

//   // 共通データの取得
//   const sponsor = await getSponsors()
//   const commonData = {
//     sponsor
//   }

//   return { ...appProps, pageProps: { ...appProps.pageProps, commonData } };
// };

const getSponsors = async () => {
  try {
    const { loadCachedData } = await import('../lib/cache-loader.js');
    const database = await loadCachedData('sponsors', { fallbackToAPI: false });
    return database;
  } catch (error) {
    console.error('Error loading sponsors from cache:', error);
    return [];
  }
}

export default MyApp;
