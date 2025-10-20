import en from "../const/locale/en.json";
import ja from "../const/locale/ja.json";

export const useLocale = (locale) => {
  const json = locale === "en" ? en : ja;
  let lang = json.navigation

  // ビジネス名（トップページ用）
  const businessName = lang.business_name;

  // ページタイトル用のサフィックス
  const titleSuffix = lang.title_suffix;

  // 旧形式（互換性のため残す）
  const metaTitleExtension = businessName;

  return { locale, json, metaTitleExtension, businessName, titleSuffix };
}