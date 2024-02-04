import CodeBlock from "../components/codeblock";
import Image from "../components/image";

export const CodeBlockRenderer = ({children}) => {
    const props = children.props;
    const language = props.className ? props.className.replace('language-', '') : undefined;
    const value = props.children ? props.children : undefined;
    return <CodeBlock language={language} value={value} />;
};

export const InlineCodeRenderer = ({ children }) => {
    return <span className="code-highlight bg-codeHighlight">{children}</span>;
};

export const ImageRenderer = ({ node, ...props }) => {
    const small = props.src
    const medium = small.replace(/sm/g, "md")
    const large = small.replace(/sm/g, "lg")
    const className = "border-image"
    return Image({small, medium, large, className})
};

export const CustomRootRenderer = ({ children, clamped, ...props }) => {
    console.log(clamped)
    const contentToRender = clamped ? React.Children.toArray(children).slice(0, 1) : children;
    return <div {...props}>{contentToRender}</div>;
}
