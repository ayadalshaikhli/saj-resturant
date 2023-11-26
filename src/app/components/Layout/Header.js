"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SwitchLang from "../Reused/SwitchLang";

export default function Header({ dict = {}, lang }) {
  const { home, about, contact, login, register } = dict?.nav || {};
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    console.log("toggleMenu called");
    setIsMenuOpen(!isMenuOpen);
    console.log("isMenuOpen:", isMenuOpen);
  };

  return (
    <header>
      <nav
        className={`${
          lang === "ar" ? "arabic-nav" : "english-nav"
        } flex justify-between items-center p-4 bg-red-100`}
      >
        <div className="logo">
          <Image src="/next.svg" alt="Logo" width={80} height={50} />
        </div>

        {/* Burger Icon */}
        <div className="md:hidden" onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>

        <ul
          className={`menu ${
            isMenuOpen ? "block" : "hidden"
          } md:flex md:space-x-5`}
        >
          <li>
            <Link href="/">{home}</Link>
          </li>
          <li>
            <Link href="/about">{about}</Link>
          </li>
          <li>
            <Link href="/contact">{contact}</Link>
          </li>
          <li>
            <Link href="/login">{login}</Link>
          </li>
          <li>
            <Link href="/register">{register}</Link>
          </li>
        </ul>
        <div>
          <SwitchLang />
        </div>
      </nav>
    </header>
  );
}
