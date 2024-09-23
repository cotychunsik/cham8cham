"use client";
// src/app/components/Navbar.tsx
import Link from "next/link";
import Logo from "./Logo";


const Navbar = () => {
  return (
    <nav className="top-0 z-50 flex-shrink-0 py-4 bg-white md:sticky">
          <div className='container flex flex-col items-start justify-between px-6 mx-auto md:flex-row md:items-center'>
            <Link href="/" className="text-lg font-bold"><Logo/></Link>
            <ul className="grid grid-flow-col gap-4 mx-auto mt-6 md:mt-0 auto-cols-auto md:auto-rows-auto md:gap-8 lg:gap-12">
              <li className="py-4 text-sm md:text-base font-normal text-gray-500 hover:text-gray-700">
                <Link href="/" >Home</Link>
              </li>
              <li className="py-4 text-sm md:text-base font-normal text-gray-500 hover:text-gray-700">
                <Link href="../pages/AboutSection">About Us</Link>
              </li>
              {/* <li className="py-4 text-sm md:text-base font-normal text-gray-500 hover:text-gray-700">
                <Link href="../pages/Portfolio" >Portfolio</Link>
              </li> */}

              <li className="py-4 text-sm md:text-base font-normal text-gray-500 hover:text-gray-700">
                <Link href="../pages/Contact" >Contact</Link>
              </li>
            </ul>
          </div>
    </nav>
  );
};

export default Navbar;
