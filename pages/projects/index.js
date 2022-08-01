import path from 'path';
import fsPromises from 'fs/promises';
import Layout from '../../components/layout';
import Paragraph from '../../components/paragraph';
import TextLink from '../../components/textlink';
import Project from "../../components/project";
import Image from '../../components/image';
import CodeBlock from '../../components/codeblock';
import OrdList from '../../components/orderedlist';

export default function Projects({allProjects}) {
  const codeBlocksWeb = allProjects.nextjsWebsite.codeBlocks;
  const codeBlocksServ = allProjects.httpServer.codeBlocks;
  const CodeSpan = ({children}) => <span className='code-highlight bg-codeHighlight'>{children}</span>

  return (
    <Layout home={false}>
        <section>
          <div className="flex flex-col items-center mx-auto max-w-prose lg:max-w-5xl lg:px-32 pt-32">
            <Project id="nextjs-website" title="Making this Website">
            <Paragraph>I often find when it comes to web development, its easier for me to learn how to use a tool (library, framework, etc.) than it is to understand what it actually is. For example, while I can say that Next.js is a framework similar to React's <span className='code-highlight bg-codeHighlight'>create-react-app</span>, I find it more meaningful to to talk about what I can do with it. Next.js compiles my JSX code into JavaScript. It imports the React.js library into my app. It routes my website to the pages I create, and renders them prior to serving them.</Paragraph>
            <h4 className='text-l font-medium text-codeBlock'>Creating An Image Component</h4>
            <Paragraph>Next.js has a lot of pre-built components. I originally used the <CodeSpan>Image</CodeSpan> component, because its designed to optimize your images. However, I was running into problems with the CSS <span className='code-highlight bg-codeHighlight'>position</span> of the image wrapper.</Paragraph>
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
              language={codeBlocksWeb[0].language}
              codeString={codeBlocksWeb[0].code}
            />
            
          <Paragraph>Instead of <span className='code-highlight bg-codeHighlight'>1x</span>, <span className='code-highlight bg-codeHighlight'>2x</span>, <span className='code-highlight bg-codeHighlight'>3x</span>, <span className='code-highlight bg-codeHighlight'>4x</span>, you can also use specific sizes such as <span className='code-highlight bg-codeHighlight'>240w</span>, <span className='code-highlight bg-codeHighlight'>300w</span>, <span className='code-highlight bg-codeHighlight'>720w</span>, <span className='code-highlight bg-codeHighlight'>960w</span> or whatever it is that you want to use. While I used srcset to when defining my `Image` component, I didn't end up making different sized versions of my profile photo, because it didn't seem worth it since the image will be small and more or less the same size on every screen. </Paragraph>
          <h4 className='text-l font-medium text-codeBlock'>Creating a Drop-Down Menu</h4>
          <Paragraph>One of the more interesting parts of development was using React's `useState` to create a drop-down menu for mobile devices. </Paragraph>
          <CodeBlock
            language={codeBlocksWeb[1].language}
            codeString={codeBlocksWeb[1].code}
          />
            <Paragraph>By default, <span className='code-highlight bg-codeHighlight'>navOpen</span> is set to <span className='code-highlight bg-codeHighlight'>false</span>, and when the hamburger menu button is clicked, the event handler toggles the value of <span className='code-highlight bg-codeHighlight'>navOpen</span>. </Paragraph>
            <Paragraph>This means that I could change the CSS of the drop-down html element depending on value of <span className='code-highlight bg-codeHighlight'>navOpen</span></Paragraph>
            <CodeBlock
              language={codeBlocksWeb[2].language}
              codeString={codeBlocksWeb[2].code}
              />
            <Paragraph>Cool!</Paragraph>
            <h4 className='text-l font-medium text-codeBlock'>Tailwind CSS Responsive Navigation Bar</h4>
            <Paragraph>One cool thing about Tailwind CSS is that it makes it easy to change the CSS at each screen breakpoints using class prefixes. For example, I wanted to have a "hamburger" menu for small to medium screens, and a text menu for large screens, I can use the prefix <span className='code-highlight bg-codeHighlight'>lg</span>.</Paragraph>
            <CodeBlock
              language={codeBlocksWeb[3].language}
              codeString={codeBlocksWeb[3].code}
            />
            <Paragraph>This indicates that on default, the style is <span className='code-highlight bg-codeHighlight'>display:hidden</span>, but on large screens (1024 px) and above, it's set to <span className='code-highlight bg-codeHighlight'>block</span>. Its really useful for sizing content responsively as well.</Paragraph>
            <h4 className='text-l font-medium text-codeBlock'>Conclusion</h4>
            <Paragraph>Overall, I think these were the good tools to use for this project. There is a lot more functionality to Next.js than was needed to make this website, but I think it's cool that it is flexible enough for a simple use case like this one, as well as commercially. Thanks for stopping by!</Paragraph>
            </Project>
            <Project id="http-sever" title="Simple HTTP Server">
            <Paragraph>During the Operating Systems course I took in college, one of our homework assignments was to build a 'GET' capable HTTP Server. We started off with a code skeleton, and were required to implement several functions in order to:</Paragraph>
            <OrdList items={
              [
                {
                  key: 0,
                  content: "Create a listening socket and bind it to a port",
                },
                {
                  key:1,
                  content: "Wait for a client to connect to the port",
                },
                {
                  key: 2,
                  content: "Accept the client and obtain a new connection socket",
                },
                {
                  key: 3,
                  content: "Read in and parse the HTTP request",
                },
                {
                  key:4,
                  content: "Do one of two things (determined by command line arguments:",
                  sublist:[
                    { 
                      key: 5,
                      content: "Serve a file form the local file system, or yield a 404 Not Found"
                    },
                    {
                      key: 6,
                      content: "Proxy the request to another HTTP server"
                    }
                  ]
                },

                {
                  key:7,
                  content: "Send the appropriate HTTP response header and attached file back to the client",
                },
                {
                  key:8,
                  content: "Implement a thread pool for serving multiple HTTP requests concurrently",
                }
              ]
            } />
            <Paragraph>When I tried to look back at my old work, the vagrant box it was stored in was broken. While I may still be able to recover it from the virtual box hard disk, I decided this was a good enough reason to attempt the assignment over again.</Paragraph>
            <h4 className='text-l font-medium text-codeBlock'>Part 1: Sockets</h4>
            <Paragraph>The skeleton code included of the following functions, some fully and some partially implemented. </Paragraph>
            {/*Code Block 0 */}
            <CodeBlock 
              language={codeBlocksServ[0].language}
              codeString={codeBlocksServ[0].code}
            />
            <Paragraph>The first part of the assignment really just involved understanding what a socket is, and how to use the relevant C header files.</Paragraph>
            <Paragraph>So, what exactly is a socket? As an analogy, suppose you and your friend write letters back and forth and send them through the postal service. You can think of your mailbox as a socket, i.e. the endpoint you check with some regularity to see if a letter has arrived. Once you receive a letter, you read it and write a response, and (in rural places) leave it it in the mailbox for the postal worker to take with them. This way, the mailbox serves as endpoint for outgoing and incoming messages.</Paragraph>
            <Paragraph>Now consider two processes that need to send data to one-another. They can either be on the same computer, or on different ones connected over a network. They share a queue: one process sends data by pushing it onto the queue, the other recieves by popping the data off. A socket refers to one endpoint (like a location in memory) of a bidrectional queue used to communicate between two different processes. Bidirectional just means that each side can both receive and send data. </Paragraph>           
            <div className='w-full'><img className="mx-auto" src="/images/sharingqueue.svg" alt="bidirectional queue"></img></div>
            <Paragraph>In C, the sys/socket.h header file contains a set of function definitions that allow you to create an instance of a socket and interact with it. The function <CodeSpan>int socket(int family, int type, int protocol)</CodeSpan> really just returns an integer, known as a file descriptor. This integer is used to <a href="https://stackoverflow.com/questions/13378035/socket-and-file-descriptors">keep track of the socket</a>. </Paragraph>
            <Paragraph>The first task was simple, just finish the function <CodeSpan>serve_forever</CodeSpan>, binding the socket file descriptor to an address and a port, and give it the job of listening for incoming connections.</Paragraph>
            <h4 className='text-l font-medium text-codeBlock' >Part 2 read() and write()</h4>
            <Paragraph>The assignment required using the lower-level io functions, <CodeSpan>open()</CodeSpan>, <CodeSpan>read()</CodeSpan>, and <CodeSpan>write()</CodeSpan>, for "pedagogical reasons". Essentially, it was a learning exercise. Once we had parsed the client request using a given library of helper functions, we had access to the "path" within the client request. The <CodeSpan>stat()</CodeSpan> method was helpful to figure out if the path was a directory, or a regular file, or did not exist.</Paragraph>
            {/*Code Block 1 */}
            <CodeBlock 
              language={codeBlocksServ[1].language}
              codeString={codeBlocksServ[1].code}
            />
            <Paragraph>Once we get enough information about the path, we can call the appropriate helper function, either <CodeSpan>serve_file</CodeSpan> or <CodeSpan>serve_directory</CodeSpan>. </Paragraph>
            <Paragraph>In <CodeSpan>serve_file</CodeSpan>, we start to deal with two file descriptors-- one for the client, and another for the file requested.</Paragraph>
              {/*Code Block 2 */}
              <CodeBlock 
                language={codeBlocksServ[2].language}
                codeString={codeBlocksServ[2].code}
              />
              <Paragraph>In order to <CodeSpan>read</CodeSpan> from the path file descriptor and <CodeSpan>write</CodeSpan> to the client file descriptor, you have to use a "buffer" array, that is some place to temporarily store the data in memory. When you call <CodeSpan>read(int fd, const void *buf, size_t count)</CodeSpan>, the data goes from the resource file descriptor to the buffer. When you call <CodeSpan>write(int fd, const void *buf, size_t count)</CodeSpan>, the data goes from buffer to the client file descriptor.</Paragraph>
              <Paragraph>The tricky is part is, how big do we make the buffer? We could get the file-size from the <CodeSpan>stat()</CodeSpan> function, and allocate enough space to fit the entire file. But, is that a good use of heap memory? What if we had 20 threads running concurrently, each asking for 300,000 bytes from the heap? Well, maybe that still isn't a big deal, and to be honest I'm not entirely sure what it is a typical scenario for an actual HTTP server. But it seems to me, that we are better off creating a smaller, fixed sized buffer and doing repeated reads and writes until completion.</Paragraph>
              {/*Code Block 3 */}
              <CodeBlock 
                language={codeBlocksServ[3].language}
                codeString={codeBlocksServ[3].code}
              />
              <Paragraph> The other tricky part, is that <CodeSpan>read</CodeSpan> and <CodeSpan>write</CodeSpan>are not guaranteed to actually read and write the number of bytes passed in as the size paramter. They may also return -1 if there is an error. I didn't know for sure what was the best thing to do in these scenarios. Should the program keep writing (in a loop) to the client fd until the number of bytes written equaled those read? Would that loop be guaranteed to end? If there is an error, how should the program respond to the client? These are definetly questions that I would like to explore!</Paragraph>
              <h4 className='text-l font-medium text-codeBlock'>Part 3 worker thread pool</h4>
              <Paragraph>I want lay down some intuiton for a multi-threaded program is in the first place. Suppose you are spending the day doing household chores and running errands-- you need to run the dishwasher, do the laundry and go to the grocery store. Some of these tasks you can start, let them run in the background, and get something else done in the meantime. You load up the washing machine, head out to the grocery store, and by the time you come back, the clothes are ready to move to the dryer.</Paragraph>
              <Paragraph>We can think of each chore or errand as similar to an incoming client request. If we just have one thread, we can only serve on client at a time. This is a problem when one client requests a huge file. Or, imagine having to wait in front of the washing machine the entire time it runs. When the program instead uses different threads for each request, the threads take turns running on the cpu, so every request gets some work done, and shorter ones can be completed before longer ones.</Paragraph>
              <Paragraph>In the case of the current assignment, our goal was to set-up a "worker queue" so that anytime an incoming client request arrives, the program pushes the newly opened file descriptor onto the queue, and the next available thread handles it. The "thread pool" simply refers to the set number of thread created when the server starts up.</Paragraph>
              {/*Code Block 4 */}
              <CodeBlock 
                language={codeBlocksServ[4].language}
                codeString={codeBlocksServ[4].code}
              />
              <Paragraph>Then, <CodeSpan>handle_clients</CodeSpan> looks something like this</Paragraph>
              
              {/*Code Block 5 */}
              <CodeBlock 
                language={codeBlocksServ[5].language}
                codeString={codeBlocksServ[5].code}
              />
              <Paragraph>There is one big problem to all of this. What happens when a thread calls <CodeSpan>wq.pop</CodeSpan> and its empty? In a non-multithreaded scenario, this would be simple-- just check.</Paragraph>
              {/*Code Block 6 */}
              <CodeBlock 
                language={codeBlocksServ[6].language}
                codeString={codeBlocksServ[6].code}
              />
              <Paragraph>But with multithreading, we don't know at what point the cpu will stop and switch out a thread during its execution. Thread A might check the size, find that its 1, proceed into the body of the <CodeSpan>if</CodeSpan> statement. Then, before it gets a chance to remove an item from the queue, the cpu suspends it and begins to run thread B. Thread B, also checks the size, finds that its 1, and successfully calls <CodeSpan>wq.pop()</CodeSpan>. When thread A resumes, it immedietly call <CodeSpan>wq.pop</CodeSpan>, but the queue is now empty and the program errors!</Paragraph>
              <Paragraph>The solution is to force the program to follow synchronization rules. If there is any sort of shared resource, then only one thread gets to access it at the same time. A "blocking" section of the program prevents more than one thread running until its complete. </Paragraph>
              <Paragraph>It turns out, the given library functions <CodeSpan>wq.pop</CodeSpan> and <CodeSpan>wq.push</CodeSpan> functions are blocking. This actually is a newer addtion to the skeleton code, as it part of the assignment used to be making these functions blocking.</Paragraph>
              {/*Code Block 7 */}
              <CodeBlock 
                language={codeBlocksServ[7].language}
                codeString={codeBlocksServ[7].code}
              />
              <Paragraph><CodeSpan>mutex</CodeSpan> stands for mutual exclusion, and is a special kind of object. You can kind of think of it like the "magic talking stick" (or ball , etc.) in an elementary school classroom-- the teacher hands it one at a time to each student who wants a turn to speak Similarly, the function <CodeSpan>pthread_mutex_lock()</CodeSpan> successfully acquires the mutual exclusion lock if its available, and if not, the current thread is suspended. When the thread manages to get the lock, it's guaranteed that no other thread can run the next line of code, so the current thread can safely read the queue size.</Paragraph>
              <Paragraph>But what if the queue is empty, that its, <CodeSpan>wq-{'>'}size == 0</CodeSpan> is true? When there is no work for the thread to do, it can simply wait and relinquish the cpu. However, it also needs to give up the lock, because its used different parts of the program, such as adding items to the queue. The function <CodeSpan>pthread_cond-wait()</CodeSpan> takes in a conditional variable, another synchronization object, as well as the lock, and causes the thread to release the lock and essentially, take a nap. </Paragraph>
              <Paragraph>In the <CodeSpan>wq_push</CodeSpan> function, after adding an item to the queue, calls</Paragraph>
              {/*Code Block 8 */}
              <CodeBlock 
                language={codeBlocksServ[8].language}
                codeString={codeBlocksServ[8].code}
              />
              <Paragraph>Any of the threads that had previously called <CodeSpan>pthread_cond_wait</CodeSpan> with the conditional variable <CodeSpan>wq-{'>'}condvar</CodeSpan> are awoken from their naps, and the first one in line will take back the lock and continue on where they left off. </Paragraph>
              <h4 className='text-l font-medium text-codeBlock'>Part 4 proxy server</h4>
              <Paragraph>Since I've written a lot as it is, I'm going to stop here for now. However, this part of the assignment was also interesting, so I do hope to get into the detail eventually!</Paragraph>
            </Project>
          </div>
        </section>    
    </Layout>
    );
  }

  export async function getStaticProps() {
    const filePath = path.join(process.cwd(), 'db.json');
    const jsonData = await fsPromises.readFile(filePath);
    const results = JSON.parse(jsonData);
    return {
      props: {allProjects: results},
    };
  }