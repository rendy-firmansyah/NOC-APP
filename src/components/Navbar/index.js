const Navbar = () => {
    return (
        <nav className="border-b shado md:flex md:items-center md:justify-between px-10 py-3">
            <div className="">
                <span className="text-2xl cursor-pointer font-bold">NOC App</span>   
            </div>
            <ul className="md:flex md:items-center">
                <li className="mx-4 my-6 md:my-0">
                    <a href="" className="text-md hover:text-amber-500 duration-300 transition-all">BERANDA</a>
                </li>
                <li className="mx-4 my-6 md:my-0">
                    <a href="" className="text-md hover:text-amber-500 duration-300 transition-all">SURVEI</a>
                </li>
                <a href="/login" className="px-7 py-2 bg-gray-300 rounded-lg hover:bg-gray-500 duration-300 transition-all mx-4">Login</a>
            </ul>
        </nav>
    )
}

export default Navbar