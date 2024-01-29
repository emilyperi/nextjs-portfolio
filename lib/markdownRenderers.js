import CodeBlock from "../components/codeblock";

const CodeBlockRenderer = ({ children }) => {
    const props = children.props;
    const language = props.className ? props.className.replace('language-', '') : undefined;
    const value = props.children ? props.children : undefined;
    return <CodeBlock language={language} value={value} />;
};

const InlineCodeRenderer = ({ children }) => {
    return <span className="code-highlight bg-codeHighlight">{children}</span>;
};

const renderers = {
    p: (props) => <p className="text-large leading-relaxed font-light text-greybrown mt-0 mb-4" {...props} />,
    h1: ({ node, ...props }) => <h1 className="text-4xl text-greybrown mb-4 scroll-mt-32" {...props} />,
    h2: ({ node, ...props }) => <h2 className="text-3xl font-bold" {...props} />,
    h3: ({ node, ...props }) => <h3 className="text-2xl font-bold" {...props} />,
    h4: ({ node, ...props }) => <h4 className="text-l font-medium text-codeBlock" {...props} />,
    ol: (props) => <ol className='list-decimal list-inside' {...props} />,
    ul: (props) => <ul className='list-disc list-inside' {...props} />,
    li: (props) => <li className="font-light text-greybrown leading-loose mt-0" {...props} />,
    code: InlineCodeRenderer,
    pre: CodeBlockRenderer
};

export default renderers;