import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import dynamic from 'next/dynamic';

const SyntaxHighlighter = dynamic(()=> {
  return import("react-syntax-highlighter")}, {ssr: false})


function CodeBlock(props) {
    return (
        <SyntaxHighlighter language={props.language}>
          {props.codeString}
        </SyntaxHighlighter>
      )
}
