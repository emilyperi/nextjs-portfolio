export default function NavBar({ children }) {
    return (
        <nav className="relative container mx-auto p-4">
            <div className="hidden md:flex space-x-6 justify-end">
                <a href="#" className="text-greybrown hover:text-lightgreybrown">Home</a>
                <a href="#" className="text-greybrown hover:text-lightgreybrown">Blog</a>
		     </div>
		</nav>
	);
}