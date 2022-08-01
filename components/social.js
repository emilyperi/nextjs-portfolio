import Image from 'next/image';
import Link from 'next/link';

export default function Social() {
    const linkClass="bg-gradient-to-r from-tange hover:to-gold to-magenta rounded-lg w-10 h-10 p-1";
    return (
        <div className="w-40 mx-auto">
            <div className="flex space-x-8 justify-center">
                <div className={linkClass}>
                    <a href="https://github.com/emilyperi" >
                        <Image
                            priority
                            src="/images/github.png"
                            height={400}
                            width={400}
                            objectFit="cover"
                            alt="github"
                        />
                    </a>
                </div>
                <div className={linkClass}>
                    <a href="https://www.linkedin.com/in/emily-peri-873210208">
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
		     </div>
		</div>
	);
}