"use client";
import { useState } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#2e3f51] px-6 sm:px-10 md:px-36 text-white h-16 flex items-center justify-between">
      {/* Logo */}
      <div className="text-lg font-bold">Your Logo</div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6">
        <li>
          <Link href="#portfolio" className="hover:underline uppercase font-bold">
            Portfolio
          </Link>
        </li>
        <li>
          <Link href="#about" className="hover:underline uppercase font-bold">
            About
          </Link>
        </li>
        <li>
          <Link href="#contact" className="hover:underline uppercase font-bold">
            Contact
          </Link>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden text-2xl"
        aria-label="Toggle Menu"
      >
        {isMenuOpen ? <HiX /> : <HiMenu />}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#2e3f51] flex flex-col items-center space-y-4 py-4 md:hidden">
          <Link
            href="#portfolio"
            className="hover:underline uppercase font-bold"
            onClick={() => setIsMenuOpen(false)}
          >
            Portfolio
          </Link>
          <Link
            href="#about"
            className="hover:underline uppercase font-bold"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="#contact"
            className="hover:underline uppercase font-bold"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
