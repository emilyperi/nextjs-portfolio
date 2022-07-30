import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeBlock = (props) => { 
    return (
        <SyntaxHighlighter language={props.language} style={dracula} wrapLongLines={true}>
          {props.codeString}
        </SyntaxHighlighter>
      );
      
};
export default CodeBlock;