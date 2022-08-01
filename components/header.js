import Image from './image';
import Link from 'next/link';
import React, { useState } from 'react';


export default function Header({ name }) {
    return (
        <header className="container flex flex-col items-center mx-auto pt-20 p-4">
            <div className="w-40 h-40 md:w-64 md:h-64">
            <Image
                small="/images/profilelowres.png"
                medium="/images/profilelowres.png"
                large="/images/profilelowres.png"
                className="rounded-full bg-magenta"
		    />
            </div>
            <h1 className="text-4xl mx-auto text-greymagenta font-starmoon p-2">{name}</h1>
	   </header>
	);
}