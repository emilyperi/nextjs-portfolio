import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';

const name = 'Emily Peri';
export const siteTitle = 'Personal Website';

export default function Layout({ children, home }) {
    return (
	    <div className={styles.container}>
        <Head>
            <link rel="icon" href="favicon.ico" />
            <meta name="og:title" content={siteTitle} />
	   </Head>
       <header className={styles.header}>
            {home ? (
		        <>
                    <Image
                        priority
                        src="/images/profile.jpeg"
                        className={utilStyles.borderCircle}
                        height={144}
                        width={144}
                        alt={name}
		            />
                    <h1 className={utilStyles.heading2Xl}>Hi there!</h1>
                    </>
            ) : (
		        <>
                        <Link href="/">
                            <a>
                                <Image
                                    priority
                                    src="/images/profile.jpe/g"
                                    className={utilStyles.borderCircle}
                                    height={108}
                                    width={108}
                                    alt={name}
				                />
			                </a>
			            </Link>
                        <h2 className={utilStyles.headingLg}>
                            <Link href="/">
                                <a className={utilStyles.colorInherit}>{name}</a>
			                </Link>
			            </h2>
		        </>
		    
		    )}
	   </header>
       <main>{children}</main>
       {!home && (
        <div className={style.backToHome}>
            <Link href="/">
                <a>← Back to home</a>
            </Link>
        </div>
       )}
       </div>
    );
}
