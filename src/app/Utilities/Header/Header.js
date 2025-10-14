"use client";

import { LogOut } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { logoName } from "../Utility";
import LoginModal from "../../Login/page";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const navItems = ["Home", "Insurance", "EChalan"];

  return (
    <>
      <header className="p-5 m-2 rounded-4xl" style={{ background: "#E6E6FA" }}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-7 h-7 text-black md:hidden cursor-pointer"
              onClick={toggleMobileMenu}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
              />
            </svg>

            <Link href="/">
              <p className="font-semibold text-black text-lg cursor-pointer">
                {logoName}
              </p>
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-10">
            <nav className="flex gap-5">
              {navItems.map((item) => (
                <Link
                  key={item}
                  href={item}
                  className="px-5 py-2 rounded-xl font-medium text-indigo-600 bg-white border border-indigo-200
                shadow-sm hover:bg-gradient-to-r hover:from-purple-400 hover:to-indigo-500 hover:text-white hover:shadow-md 
                transition-all duration-200"
                >
                  {item}
                </Link>
              ))}
            </nav>

            {isLoggedIn ? (
              <Image
                className="w-8 h-8 rounded-full ring-2 ring-black cursor-pointer"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Profile"
                width={32}
                height={32}
              />
            ) : (
              <button
                className="cursor-pointer relative overflow-hidden bg-white text-lavender-700 px-4 py-2 rounded-xl font-semibold
                  transition-all duration-200 ease-in-out hover:text-black hover:scale-105 border-none"
              >
                <span
                  className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500
                    transform translate-x-[-101%] hover:translate-x-0 transition-transform duration-500 ease-in-out rounded-xl"
                ></span>
                <span
                  className="relative z-10"
                  onClick={() => setIsLoginOpen(true)}
                >
                  Login
                </span>
              </button>
            )}
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-3 bg-white rounded-xl p-4 flex flex-col gap-3 shadow-lg transition-all duration-300">
            {navItems.map((item) => (
              <Link
                key={item}
                href={item}
                className="text-indigo-600 font-medium px-4 py-2 rounded-lg border border-indigo-100 
              hover:bg-gradient-to-r hover:from-purple-400 hover:to-indigo-500 hover:text-white transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </Link>
            ))}

            {!isLoggedIn && (
              <button
                onClick={() => setIsLoginOpen(true)}
                className="w-full bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500 text-white font-semibold py-2 rounded-xl transition-all duration-200"
              >
                Login
              </button>
            )}
          </div>
        )}
      </header>
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
};

export default Header;
