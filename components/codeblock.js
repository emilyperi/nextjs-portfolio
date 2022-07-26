import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierHeathDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function CodeBlock(props) {
    atelierHeathDark.hljs.padding = "1em"
    return (
      <div className='w-full'>
        <SyntaxHighlighter className="rounded-sm p-4" language={props.language} style={atelierHeathDark} wrapLongLines={true}>
          {props.codeString}
        </SyntaxHighlighter>
      </div>
      )
      
}
