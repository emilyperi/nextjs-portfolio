import {useState} from 'react'
export default function NavBar({children}) {
    const [navOpen, setNavOpen] = useState(false)
    const handleMenuClick = () => {
        setNavOpen(!navOpen)
    }
    console.log("navOpen is ", navOpen)

    return (
        <>
        <div className="fixed bg-white w-full top-0 left-0 h-14">
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
            <div className="flex justify-end w-full h-10 text-greymagenta hover:bg-lightgreymagenta text-left text-xl px-2 rounded-lg"><a href="#" className="my-auto w-full">Home</a></div>
            <div className="flex justify-end w-full h-10 text-greymagenta hover:bg-lightgreymagenta text-left text-xl px-2 rounded-lg"><a href="#" className="my-auto w-full">Projects</a></div>
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
                <div className="hidden lg:block w-16 mt-auto mb-auto text-xl text-greybrown hover:text-lightgreybrown"><a href="#">Home</a></div>
                <div className="hidden lg:block w-16 mt-auto mb-auto text-xl text-greybrown hover:text-lightgreybrown"><a href="#">Projects</a></div>
            </div>
        </div>
        </>
    )
}