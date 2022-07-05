import Link from 'next/link';
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout';

export default function Home() {
  return (
    <Layout home>
        <section>
          <div className="flex flex-col items-center justify-center max-w-prose mx-auto">
            <p>Hi there! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
		      </div>
        </section>    
    </Layout>
    );
	
}
