import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Header from './header';
import utilStyles from '../styles/utils.module.css';
import NavBar from './navbar';
import Content from './content';

const name = 'Emily Peri';
export const siteTitle = 'Personal Website';

export default function Layout({ children, home }) {
    return (
        <div className="container mx-auto w-screen h-screen bg-lightgreymagenta">
        <Head>
            <link rel="icon" href="favicon.ico" />
            <meta name="og:title" content={siteTitle} />
        </Head>
        
        <NavBar />
        <Header name></Header>
        <Content>{children}</Content>
       </div>
    );
}
