"use client"

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-10">
        <div className="cursor-pointer">
          <Image src="/brand-noc.png" alt="Brand Logo NOC" width={80} height={80} />
        </div>
        <div
          className="absolute right-8 top-6 cursor-pointer md:hidden"
          onClick={toggleNavbar}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            />
          </svg>
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:bg-white bg-gray-100 md:z-auto z-50 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            isOpen ? 'top-20' : 'top-[-490px]'
          }`}
          onClick={toggleNavbar}
        >
          <li className="md:ml-8 md:text-md lg:text-xl md:my-0 my-7 text-black hover:text-gray-400 transition-all duration-300 cursor-pointer">Beranda</li>
          <li className="md:ml-8 md:text-md lg:text-xl md:my-0 my-7 text-black hover:text-gray-400 transition-all duration-300 cursor-pointer">Survei</li>
          <Link href="/login">
          <button type="" className="md:text-md lg:text-xl md:ml-8 px-7 py-2 border bg-gray-400 hover:bg-gray-200 rounded-md transition-all duration-300">
            Login
          </button>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;


