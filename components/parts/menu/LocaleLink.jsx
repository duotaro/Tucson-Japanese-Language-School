import LocaleContext from "@/components/context/localeContext";
import Link from "next/link";
import { useContext } from "react";

export default function LocaleLink({ href, className, children}) {
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
  
  if(locale == "en"){
    safeHref = `/en${safeHref}`
  }
  
  return (
    <Link href={safeHref} className={className}>
        {children}
    </Link>
  );
}