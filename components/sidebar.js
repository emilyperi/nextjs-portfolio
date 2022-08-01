import Social from './social';

export default function SideBar(props) {
    return(
        <div className="hidden fixed top-0 top-left lg:flex flex-col min-h-screen w-64 bg-xlightgreymagenta">
            <div className="mt-20 w-3/4 mx-auto">
            <img src="/images/profilelowres.png" className="rounded-full bg-magenta"/>
            <h1 className="text-4xl text-center text-greymagenta font-starmoon p-2">Emily Peri</h1>
            </div>

            <div className="w-3/4 mx-auto mt-8">
                <ul className="list-none text-greymagenta text-large underline leading-relaxed">
                    <li><a href="#nextjs-website">NextJS Website</a></li>
                    <li><a href="#http-sever">Simple HTTP Server</a></li>
                </ul>
            </div>
            <div className='mt-8 sw-3/4'>
                <Social />
            </div>
            
        </div>
    )
}