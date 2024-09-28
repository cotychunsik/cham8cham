"use client";
// src/app/components/Navbar.tsx
import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"; // Bars3, XMark 아이콘 불러오기

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // 메뉴 열림 상태 관리

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // 클릭 시 메뉴 토글
  };

  const closeMenu = () => {
    setMenuOpen(false); // 메뉴 닫기
  };

  return (
    <nav className="top-0 z-50 flex-shrink-0 py-4 bg-white sticky">
      <div className="container flex items-center justify-between px-6 mx-auto">
        <Link href="/" className="text-lg font-bold">
          <Logo />
        </Link>

        {/* Mobile Menu Icon (Bars3Icon) */}
        <button
          className="block md:hidden text-gray-700"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <Bars3Icon className="h-8 w-8" />
        </button>

        {/* Desktop Navigation Menu */}
        <ul className="hidden md:flex flex-col md:flex-row md:items-center md:gap-8 lg:gap-12 mt-6 md:mt-0">
          <li className="py-4 text-sm md:text-base font-normal text-gray-500 hover:text-gray-700">
            <Link href="/">Home</Link>
          </li>
          <li className="py-4 text-sm md:text-base font-normal text-gray-500 hover:text-gray-700">
            <Link href="../pages/AboutSection">About Us</Link>
          </li>
          <li className="py-4 text-sm md:text-base font-normal text-gray-500 hover:text-gray-700">
            <Link href="../pages/Contact">Contact</Link>
          </li>
        </ul>
      </div>

      {/* 모바일 메뉴 오버레이 */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 mx-auto">
          {/* 모바일 메뉴 */}
          <div className="fixed top-0 left-0 w-full h-full bg-white z-50 p-6">
            <button
              className="absolute top-6 right-6 text-gray-700"
              onClick={closeMenu}
              aria-label="Close Menu"
            >
              <XMarkIcon className="h-8 w-8" />
            </button>
            <ul className="flex flex-col items-start gap-6 mt-12 ">
              <li className="text-lg font-bold text-gray-500 hover:text-gray-700">
                <Link href="/" onClick={closeMenu}>Home</Link>
              </li>
              <li className="text-lg font-bold text-gray-500 hover:text-gray-700">
                <Link href="../pages/AboutSection" onClick={closeMenu}>About Us</Link>
              </li>
              <li className="text-lg font-bold text-gray-500 hover:text-gray-700">
                <Link href="../pages/Contact" onClick={closeMenu}>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
