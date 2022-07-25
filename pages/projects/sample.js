import Layout from '../../components/layout';
import Paragraph from '../../components/paragraph';
import TextLink from '../../components/textlink';
import Project from "../../components/project"
import CodeBlock from '../../components/codeblock';

const projectData = {
  title: "My Project",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  href: "/posts/sample"
}

export default function Sample() {
  return (
    <Layout home={false}>
        <>
          <div className="flex flex-col items-center justify-center max-w-prose mx-auto mt-20">
            <Project title={projectData.title} description={projectData.description} href={projectData.href}/>
            <CodeBlock lanuage="html" codeString="<p>Hello World</p>" />
          </div>
        </>    
    </Layout>
    );
  }