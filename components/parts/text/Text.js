import { Fragment } from "react";

export const Text = ({ text }) => {
  if (!text) {
    return null;
  }
  return text.map((value, valueIndex) => {
    const {
      annotations: { bold, code, color, italic, strikethrough, underline },
      text,
    } = value;
    
    const className = [
      bold ? "font-bold" : "",
      code ? "font-mono bg-gray-200 p-1 rounded" : "",
      italic ? "italic" : "",
      strikethrough ? "line-through" : "",
      underline ? "underline" : "",
    ].join(" ");
    
    const style = color !== "default" ? { color } : {};
    
    // 改行文字を処理
    const processText = (content) => {
      if (!content) return content;
      return content.split('\n').map((line, index, array) => (
        <Fragment key={index}>
          {line}
          {index < array.length - 1 && <br />}
        </Fragment>
      ));
    };
    
    return (
      <span
        className={className}
        style={style}
        key={`${text.content}-${valueIndex}`}
      >
        {text.link ? (
          <a 
            className="text-black hover:text-blue-500 underline hover:no-underline transition duration-300" 
            href={text.link.url} 
            target="_blank"
            rel="noopener noreferrer"
          >
            {processText(text.content)}
          </a>
        ) : (
          processText(text.content)
        )}
      </span>
    );
  });
};