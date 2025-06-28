import { Text } from "./Text";

export default function Paragraphs({ text, maxWidth = "ml", addClass = "", mt = "mt-4" }) {
    if(!text){
        return <></>
    }

    const classname = `max-w-${maxWidth} ${mt} text-md font-light leading-relaxed text-gray-500 ${addClass} `

    const isArray = Array.isArray(text);

    const whiteSpaceStyle = isArray ? { whiteSpace: 'pre-wrap', overflowWeap: 'break-word', wordBreak: 'break-all' } : {}
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
