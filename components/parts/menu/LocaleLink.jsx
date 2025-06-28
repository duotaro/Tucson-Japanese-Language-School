import LocaleContext from "@/components/context/localeContext";
import Link from "next/link";
import { useContext } from "react";

export default function LocaleLink({ href, className, children, ...props}) {
  const { locale } = useContext(LocaleContext);
  
  // hrefがnullまたはundefined、空文字の場合はデフォルトのリンクを設定
  let safeHref = href;
  if (!safeHref || safeHref === null || safeHref === undefined || safeHref === "") {
    safeHref = "/";
  }
  
  // 文字列型でない場合も対応
  if (typeof safeHref !== "string") {
    safeHref = "/";
  }
  
  // locale が存在しない場合のデフォルト処理
  const currentLocale = locale || "ja";
  
  if(currentLocale === "en"){
    safeHref = `/en${safeHref}`;
  }
  
  // childrenが存在しない場合のデフォルト処理
  const safeChildren = children || "Link";
  
  return (
    <Link href={safeHref} className={className || ""} {...props}>
        {safeChildren}
    </Link>
  );
}