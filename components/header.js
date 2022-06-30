import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';


export default function Header({name}) {
    const [imgClass, setImgClass] = useState("rounded-full bg-white");
    const onMouseEnter = () => setImgClass("rounded-full bg-magenta");
    const onMouseLeave = () => setImgClass("rounded-full bg-white");
    return (
        <header className="container flex flex-col items-center mx-auto p-4">
            <div className="w-40 h-40 md:w-64 md:h-64 rounded-full border" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <Image
                priority
                src="/images/profilelowres.png"
                height={11759}
				width={11759}
				//layout="fill"
				objectFit="cover"
                className={imgClass}
                alt={name}
		    />
            </div>
            <h1 className="text-2xl mx-auto text-greymagenta">{name}</h1>
	   </header>
	);
}