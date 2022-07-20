import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Header from './header';
import NavBar from './navbar';
import Content from './content';
import Social from './social';

const name = 'Emily Peri';
export const siteTitle = 'Personal Website';

export default function Layout({home,  children }) {
    return (
        <>
        <Head>
            <link rel="icon" href="favicon.ico" />
            <meta name="og:title" content={siteTitle} />
        </Head>
        <div className="bg-lightgreymagenta">
        <div className="container mx-auto">
            <NavBar />
            <Header name={name}></Header>
        </div>
            <div className="container mx-auto max-w-5xl min-h-screen">
            <Content>{children}</Content>
            <Social />
        </div>
        </div>
       </>
       );
}
