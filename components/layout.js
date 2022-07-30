import Head from 'next/head';
import Header from './header';
import NavBar from './navbar';
import Content from './content';
import Social from './social';
import SideBar from './sidebar';

const name = 'Emily Peri';
export const siteTitle = 'Personal Website';

export default function Layout({home,  children }) {
    return (
        <>
        <Head>
            <link rel="icon" href="favicon.ico" />
            <meta name="og:title" content={siteTitle} />
        </Head>
        <div className="bg-lightgreymagenta min-h-screen">
    
            { home
                ?   <>
                        <NavBar />
                        <div className="container mx-auto max-w-5xl">
                            <Header name={name}></Header>
                            <Content>{children}</Content>
                            <div className='pt-10 pb-20'>
                            <Social />
                            </div>
                        </div>
                    </>
                : <>
                    <SideBar />
                    <NavBar />
                    <div className='flex mx-auto justify-center lg:pl-64'>
                        <Content>{children}</Content>
                    </div>
                </>
            }   
        </div>
        </>
       );
}
