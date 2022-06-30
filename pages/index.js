import Link from 'next/link';
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
        <section className={utilStyles.headingMd}>
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-3xl mx-auto">Hi there!</h2>
	        <p>Hello World! Seriously. There are at the time of writing over 5 billion internet users around the world. It's hard not to take this for granted.</p>
		  </div>
        </section>    
    </Layout>
    );
	
}
