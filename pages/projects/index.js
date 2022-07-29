import Layout from '../../components/layout';
import Paragraph from '../../components/paragraph';
import TextLink from '../../components/textlink';
import Project from "../../components/project";
import Image from '../../components/image';
import CodeBlock from '../../components/codeblock';



export default function Projects() {
  return (
    <Layout home={false}>
        <section>
          <div className="flex flex-col items-center mx-auto max-w-prose lg:max-w-5xl lg:px-20 pt-32">
            <Project title="Making this Website">
            <Paragraph>I often find when it comes to web development, its easier for me to learn how to use a tool (library, framework, etc.) than it is to understand what it actually is. For example, while I can say that Next.js is a framework similar to React's <span className='code-highlight bg-codeHighlight'>create-react-app</span>, I find it more meaningful to to talk about what I can do with it. Next.js compiles my JSX code into JavaScript. It imports the React.js library into my app. It routes my website to the pages I create, and renders them prior to serving them.</Paragraph>
            <h4 className='text-l font-medium text-codeBlock'>Creating An Image Component</h4>
            <Paragraph>Next.js has a lot of pre-built components. I originally used the <span className='code-highlight bg-codeHighlight'>Image</span> component, because its designed to optimize your images. However, I was running into problems with the CSS <span className='code-highlight bg-codeHighlight'>position</span> of the image wrapper.</Paragraph>
            <Image
              small="/images/website-making-sm.png"
              medium="/images/website-making-md.png"
              large="/images/website-making-large.png"
              className="border-image"
              />
            <Paragraph>You can see above that the image is layered on top of the nav bar, which has the style <span className='code-highlight bg-codeHighlight'>position: fixed</span> </Paragraph>
            <Paragraph>In order to fix this problem, I decided to make my own, simpler <span className='code-highlight bg-codeHighlight'>Image</span> component. The thing is, I'm not using a lot of large images. The size of the image I'm using on my home page is 335 KB. Still, I wanted to at least use some optimization in the component to plan ahead for the future. </Paragraph>
            <Paragraph>What do I mean by optimization? In this case, I'm talking about the trade-off between the quality of an image and the time it takes to load. The devices people use to visit a webpage vary in screen size, screen resolution, and the amount of bandwidth at their disposal. The <span className='code-highlight bg-codeHighlight'>srcset</span> attribute allows you to serve different sizes of the same image depending whats best for the viewer. For example,</Paragraph>
            <CodeBlock
              lanuage="html" 
              codeString="<img srcset='/myimage-sm.jpg 1x, /myimage-md.jpg 2x, /myimage-lg.jpg 3x' src='/myimage-sm.jpg'>" />
            
          <Paragraph>Instead of <span className='code-highlight bg-codeHighlight'>1x</span>, <span className='code-highlight bg-codeHighlight'>2x</span>, <span className='code-highlight bg-codeHighlight'>3x</span>, <span className='code-highlight bg-codeHighlight'>4x</span>, you can also use specific sizes such as <span className='code-highlight bg-codeHighlight'>240w</span>, <span className='code-highlight bg-codeHighlight'>300w</span>, <span className='code-highlight bg-codeHighlight'>720w</span>, <span className='code-highlight bg-codeHighlight'>960w</span> or whatever it is that you want to use. While I used srcset to when defining my `Image` component, I didn't end up making different sized versions of my profile photo, because it didn't seem worth it since the image will be small and more or less the same size on every screen. </Paragraph>
          <h4 className='text-l font-medium text-codeBlock'>Creating a Drop-Down Menu</h4>
          <Paragraph>One of the more interesting parts of development was using React's `useState` to create a drop-down menu for mobile devices. </Paragraph>
          <CodeBlock
            lanuage="javascript"
            codeString="const [navOpen, setNavOpen] = useState(false)
              const handleMenuClick = () => {
                setNavOpen(!navOpen)
            }" />
            <Paragraph>By default, <span className='code-highlight bg-codeHighlight'>navOpen</span> is set to <span className='code-highlight bg-codeHighlight'>false</span>, and when the hamburger menu button is clicked, the event handler toggles the value of <span className='code-highlight bg-codeHighlight'>navOpen</span>. </Paragraph>
            <Paragraph>This means that I could change the CSS of the drop-down html element depending on value of <span className='code-highlight bg-codeHighlight'>navOpen</span></Paragraph>
            <CodeBlock lanuage="html" codeString="<div className={navOpen ? 'flex flex-col...' : 'hidden'}>" />
            <Paragraph>Cool!</Paragraph>
            <h4 className='text-l font-medium text-codeBlock'>Tailwind CSS Responsive Navigation Bar</h4>
            <Paragraph>One cool thing about Tailwind CSS is that it makes it easy to change the CSS at each screen breakpoints using class prefixes. For example, I wanted to have a "hamburger" menu for small to medium screens, and a text menu for large screens, I can use the prefix <span className='code-highlight bg-codeHighlight'>lg</span>.</Paragraph>
            <CodeBlock
              lanuage="html"
              codeString="<div className='hidden lg:block ...'><a href='/'>Home</a></div>"
            />
            <Paragraph>This indicates that on default, the style is <span className='code-highlight bg-codeHighlight'>display:hidden</span>, but on large screens (1024 px) and above, it's set to <span className='code-highlight bg-codeHighlight'>block</span>. Its really useful for sizing content responsively as well.</Paragraph>
            <h4 className='text-l font-medium text-codeBlock'>Conclusion</h4>
            <Paragraph>Overall, I think these were the good tools to use for this project. There is a lot more functionality to Next.js than was needed to make this website, but I think it's cool that it is flexible enough for a simple use case like this one, as well as commercially. Thanks for stopping by!</Paragraph>
            </Project>
            <Project title="Simple HTTP Server">
            </Project>
          </div>
        </section>    
    </Layout>
    );
  }