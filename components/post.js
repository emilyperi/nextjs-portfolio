import Markdown from "react-markdown";
import {CustomRootRenderer, InlineCodeRenderer, CodeBlockRenderer, ImageRenderer} from "../lib/markdownRenderers"
import {useState} from "react";

function logAst() {
    return (tree) => {
        console.log(tree);
    };
}
const Post = ({ markdown }) => {
    const [clamped, setClamped] = useState(true);
    const [showButton, setShowButon] = useState(true);
    const handleClick = () => setClamped(!clamped);

    const renderers = {
        code: InlineCodeRenderer,
        pre: CodeBlockRenderer,
        img: ImageRenderer
    };

    return (
    <div className="flex flex-col items-start mx-auto w-full mb-10">
        <div className={`${clamped ? 'line-clamp-6' : ''}`}>
        <Markdown components={renderers}>{markdown}</Markdown>
        </div>
        <div className="flex w-full justify-end mt-6">
            {showButton && (
                <button onClick={handleClick} className="bg-greymagenta p-2 text-xlightgreymagenta font-medium rounded-sm">Read {clamped ? "more..." : "less"}</button>
            )}
        </div>
    </div>
    )
};

export default Post;