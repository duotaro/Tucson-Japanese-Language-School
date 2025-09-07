import { Text } from "./Text";
import { useRouter } from 'next/router';

export default function Paragraphs({ text, maxWidth = "ml", addClass = "", mt = "mt-4" }) {
    const router = useRouter();
    
    if(!text){
        return <></>
    }

    const classname = `max-w-${maxWidth} ${mt} text-md font-light leading-relaxed text-gray-500 ${addClass} `

    const isArray = Array.isArray(text);
    
    // URLパスから言語を判定
    const isEnglish = router.asPath.startsWith('/en');
    
    // 言語に応じて適切なwordBreakスタイルを設定
    const whiteSpaceStyle = isArray ? { 
        whiteSpace: 'pre-wrap', 
        overflowWrap: 'break-word', 
        wordBreak: isEnglish ? 'normal' : 'break-all' 
    } : {}
    return (
      <div className={classname} style={whiteSpaceStyle}>
        {isArray && (
            <Text text={text} />
        )}
        {!isArray && (
          <>{text}</>  
        )}
      </div>
    );
}
