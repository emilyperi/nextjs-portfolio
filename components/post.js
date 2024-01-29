import Markdown from "react-markdown";
import renderers from "../lib/markdownRenderers"
const Post = ({ markdown }) => {
    return (
    <div className="flex flex-col items-start mx-auto w-full mb-10">
        <Markdown components={renderers}>{markdown}</Markdown>
    </div>
    )
};

export default Post;