import Link from 'next/link';
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
        <section className={utilStyles.headingMd}>
         <p>Welcome to my website.</p>
        </section>    
    </Layout>
    );
	
}
