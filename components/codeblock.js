import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeBlock = ({ language, value }) => {
    const customStyle = {
        margin: "0",
        overflow: "auto",
        width: "100%"
    };
    return (
        <div className="code-block-container">
            <div className="code-header">
                {language.toLowerCase()}
            </div>
        <SyntaxHighlighter language={language} style={dracula} wrapLongLines={true} customStyle={customStyle}>
            {value}
        </SyntaxHighlighter>
        </div>
    );
};
export default CodeBlock;