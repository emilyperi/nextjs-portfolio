import Link from 'next/link'
import {useState} from 'react'
export default function NavBar({children}) {
    const [navOpen, setNavOpen] = useState(false)
    const handleMenuClick = () => {
        setNavOpen(!navOpen)
    }
    console.log("navOpen is ", navOpen)

    return (
        <>
        <div className="fixed bg-xlightgreymagenta w-full top-0 left-0 h-14 drop-shadow">
        <div className={navOpen ? "lg:hidden flex flex-col absolute shadow-md top-0 right-0 rounded-md bg-white w-64 h-64 p-2" : "hidden"}>
            <div className="flex justify-end w-full h-10">
                <button onClick={handleMenuClick}>
                <svg 
                className="h-8 w-8 stroke-greybrown hover:bg-xlightgreybrown rounded-sm" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            </button>
            </div>
            <div className="w-full h-10 text-greybrown hover:bg-lightgreymagenta text-wider text-lg px-2 rounded-sm"><Link href="/" className="my-auto w-full">HOME</Link></div>
            <div className="w-full h-10 text-greybrown hover:bg-lightgreymagenta text-wider text-lg px-2 rounded-sm"><Link href="/projects" className="my-auto w-full">PROJECTS</Link></div>
        </div>
            <div className="container max-w-4xl mx-auto pr-6 pl-6 flex justify-end h-full space-x-6">
                <button onClick={handleMenuClick} className="lg:hidden">
                    <svg
                    className="h-8 w-8 stroke-greybrown hover:bg-xlightgreybrown rounded-sm" 
                    ill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
                <div className="hidden lg:block w-16 mt-auto mb-auto text-wider text-greybrown hover:text-lightgreybrown"><Link href="/">HOME</Link></div>
                <div className="hidden lg:block w-16 mt-auto mb-auto text-wider text-greybrown hover:text-lightgreybrown"><Link href="/projects">PROJECTS</Link></div>
            </div>
        </div>
        </>
    )
}