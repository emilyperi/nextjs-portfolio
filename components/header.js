import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';


export default function Header({ name }) {
    return (
        <header className="container flex flex-col items-center mx-auto p-4">
            <div className="w-40 h-40 md:w-64 md:h-64 rounded-full border">
            <Image
                priority
                src="/images/profilelowres.png"
                height={11759}
				width={11759}
				objectFit="cover"
                className="rounded-full bg-magenta"
                alt={name}
		    />
            </div>
            <h1 className="text-4xl mx-auto text-greymagenta font-starmoon p-2">{name}</h1>
	   </header>
	);
}