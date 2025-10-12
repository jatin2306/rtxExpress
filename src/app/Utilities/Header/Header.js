"use client"; // Next.js client component

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const handleLogin = () => setIsLoggedIn(true);

  const navItems = ["Home", "Insurance", "EChalan"];

  return (
    <header className="p-5 m-2 rounded-4xl" style={{ background: "#E6E6FA" }}>
      <div className="max-w-7xl mx-auto flex justify-between items-center ">
        <div className="flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-black md:hidden cursor-pointer"
            onClick={toggleMobileMenu}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
            />
          </svg>
          <Link href="/">
            <p className="font-semibold text-black text-lg">rtXpress</p>
          </Link>

          <div className="relative hidden md:block lg:block ml-20">
            <input
              className="bg-white rounded-3xl py-2 px-3 outline-none text-sm w-64 pr-10"
              placeholder="Search for Chalans, Insurances, Etc"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 text-lavender-700 absolute right-3 top-1/2 transform -translate-y-1/2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
        </div>

        <div className="flex items-center gap-12">
          <nav className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <span key={item} href="#" className="nav-3d">
                <Link href={item}> {item}</Link>
              </span>
            ))}
          </nav>

          {isLoggedIn ? (
            <Image
              className="w-8 h-8 rounded-full ring-2 ring-black cursor-pointer"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Profile"
              width={32}
              height={32}
            />
          ) : (
            <Link href="Login">
              <button
                className="relative overflow-hidden bg-white text-lavender-700 px-4 py-2 rounded-xl font-semibold
             transition-all duration-100 ease-in-out
             hover:text-black hover:scale-105"
              >
                <span
                  className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500
                   transform -translate-x-full hover:translate-x-0 transition-transform duration-500 ease-in-out rounded-xl"
                ></span>
                <span className="relative z-10">Login</span>
              </button>
            </Link>
          )}
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden mt-3 bg-lavender-500 rounded-xl p-3 flex flex-col gap-2">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="text-black px-3 py-2 rounded-md hover:bg-grey-700 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
