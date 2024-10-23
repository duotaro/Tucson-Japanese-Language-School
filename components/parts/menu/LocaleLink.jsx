import LocaleContext from "@/components/context/localeContext";
import Link from "next/link";
import { useContext } from "react";

export default function LocaleLink({ href, className, children}) {
  const { locale } = useContext(LocaleContext);
  if(locale == "en"){
    href = `/en${href}`
  }
  return (
    <Link href={href} className={className}>
        {children}
    </Link>
  );
}