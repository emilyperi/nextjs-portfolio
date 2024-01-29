import Layout from '../../components/layout';
import Post from "../../components/post";
import { getStaticProps } from '../../lib/getStaticProps';

export default function Blog({markdown}) {
    return (
        <Layout home={false}>
            <div className="flex flex-col items-center mx-auto max-w-prose lg:max-w-5xl lg:px-32 pt-32">
            <Post markdown={markdown}></Post>
            </div>
        </Layout>
    )
}

export { getStaticProps };