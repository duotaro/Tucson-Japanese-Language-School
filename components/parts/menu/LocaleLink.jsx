import LocaleContext from "@/components/context/localeContext";
import Link from "next/link";
import { useContext } from "react";
import { useRouter } from "next/router";

export default function LocaleLink({ href, className, children, onClick, ...props}) {
  const { locale } = useContext(LocaleContext);
  const router = useRouter();
  
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
  
  // モバイルメニューの場合、遷移してからメニューを閉じる
  const handleClick = (e) => {
    if (onClick) {
      e.preventDefault();
      // まず遷移を開始
      router.push(safeHref);
      // 遷移アニメーション後にメニューを閉じる
      setTimeout(() => {
        onClick();
      }, 200);
    }
  };
  
  return (
    <Link href={safeHref} className={className || ""} onClick={handleClick} {...props}>
        {safeChildren}
    </Link>
  );
}