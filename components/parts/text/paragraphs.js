import { Text } from "../../../pages/news/[id]";

export default function Paragraphs({ text, maxWidth = "ml", addClass = "" }) {
    if(!text){
        return <></>
    }

    const classname = `max-w-${maxWidth} mt-4 text-md font-light leading-relaxed text-gray-500 ${addClass} `

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
