import Image from 'next/image';
import NavLink from './navlink';

export default function Social() {
    const linkClass="bg-gradient-to-r from-tange hover:to-gold to-magenta rounded-lg w-10 h-10 p-1";
    return (
        <nav className="w-40 mx-auto">
            <div className="flex space-x-8 justify-center">
                <NavLink href="https://github.com/emilyperi" className={linkClass}>
                    <Image
                        priority
                        src="/images/github.png"
                        height={400}
                        width={400}
                        objectFit="cover"
                        alt="github"
                    />
                </NavLink>

                <NavLink href="https://www.linkedin.com/in/emily-peri-873210208" className={linkClass}>
                    <Image
                        priority
                        src="/images/linkedin.png"
                        height={400}
                        width={400}
                        objectFit="cover"
                        alt="linked in"
                    />
                </NavLink>
		     </div>
		</nav>
	);
}