import Image from 'next/image';
export default function NavBar() {
    return (
        <nav className="container mx-auto p-4 pt-8">
            <div className="flex space-x-6 justify-center">

                <a href="#" className="bg-gradient-to-r from-tange hover:to-gold to-magenta rounded-lg w-10 h-10 p-1">
                    <Image
                        priority
                        src="/images/github.png"
                        height={400}
                        width={400}
                        objectFit="cover"
                        alt="github"
                    />
                </a>
                <a href="#" className="bg-gradient-to-r from-tange hover:to-gold to-magenta rounded-lg w-10 h-10 p-1">
                    <Image
                        priority
                        src="/images/linkedin.png"
                        height={400}
                        width={400}
                        objectFit="cover"
                        alt="linked in"
                    />
                </a>
		     </div>
		</nav>
	);
}