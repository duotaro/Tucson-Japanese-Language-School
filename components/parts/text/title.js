import Link from "next/link";

export default function Title({ title, link = null, fontSize = "text-xl  sm:text-2xl lg:text-3xl" }) {
    
    return (
      <h2 className={`font-black text-center ${fontSize}`}>
          {link && (
            <Link href={link}><h3>{title}</h3></Link>
          )}
          {!link && (
            <h3>{title}</h3>
          )}
      </h2>
    );
}
