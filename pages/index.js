import Link from 'next/link';
import Head from 'next/head'
import Layout from '../components/layout';
import Paragraph from '../components/paragraph';
import TextLink from '../components/textlink';

export default function Home() {
  return (
    <Layout home>
        <section>
          <div className="flex flex-col items-center justify-center max-w-prose mx-auto">
            <Paragraph>Hi there! If you’re curious to learn more about me, you’ve (maybe) come to the right place. Starting with the fun facts, I’m a Cancer sun, Pisces moon, and Virgo rising. While I’m no expert on the lore, my horoscope app tells me that it’s okay to have feelings, so it pretty much has me figured out. I’m more of a dog person than a cat person, but more of a cat person than a people person. I’m proud to say that as of mid 2022, I too have renewed my <TextLink href="https://youtube.com/watch?v=jJ1tsu401jk&t=533s">passport</TextLink>.</Paragraph>
            <Paragraph>More seriously, I left my non-profit job back in March so that I could focus full-time on becoming a software engineer. I assumed that an undergraduate degree in Computer Science would guarantee a job in the field post-college. Maybe this was true 5 or 10 years ago, but these days, the hustle never ends. I spent a month reviewing data structures, dynamic programming and general algorithms. While not a bad way to pass the time, I wasn’t getting any interviews. Since then, I’ve changed strategies— my focus is now on making things.</Paragraph>
            <Paragraph>That being said, it’s an unsettling time to be unemployed. It is hard to envision opportunity when surrounded by scarcity (real or fabricated) and reactionary politics. It’s hard to focus on building a portfolio when your bank account is dwindling and your civil liberties are slowly being taken away from you. We can’t be creative if confined to a narrow expression of human identity. I thrive in cooperative communities, where I derive meaning and fulfillment from a collective pursuit of happiness, not just my own. I know that there are enough people out there that feel the same way.</Paragraph>
            <Paragraph>I’m more connected to the internet than ever before. Throughout my adulthood I have avoided social media (yes, back in the day I had a myspace), opting for personal privacy over hundreds of virtual connections. This was partly preference, and partly from having social anxiety at the idea of publicly broadcasting. Finally, I’ve come to terms with the fact that if I want to make my career contributing to the web, I will inevitably leave a footprint. When I believe strongly in a vision, a mission, or a personal goal, I manage my fear. Previously I worked in outreach; my job was in essence, talking with strangers— not exactly the role you’d expect for introvert who likes to keep to herself. Without going in to all of the details, I muddled through, and learned from people I wouldn’t have met otherwise.</Paragraph>
            <Paragraph>Well, if you read this far, cool! For now, the best way to contact me is through <TextLink href="https://www.linkedin.com/in/emily-peri-873210208">Linked In</TextLink>. Thanks for tuning in.</Paragraph>
          </div>
        </section>    
    </Layout>
    );
	
}
