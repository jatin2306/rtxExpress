"use client";

import { LogOut } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { logoName, navItems } from "../../Utilities/Utility";
import LoginModal from "../Login/Login";
import { usePathname } from "next/navigation";
import Button from "../Common/Button";
import MobileHeader from "../MobileHeader/MobileHeader";
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
    const pathname = usePathname();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <header className="p-5 m-2 rounded-4xl bg-main">
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
              <p className="font-semibold text-textPrimary text-lg cursor-pointer">
                {logoName}
              </p>
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-10">
            <nav className="flex gap-5">
              {navItems.map(({ label, link }) => {
                const isActive = pathname === link;
                return (
                  <Link
                    key={label}
                    href={link}
                    className={`px-5 py-2 rounded-xl font-medium border shadow-sm transition-all duration-200 ${
                      isActive
                        ? "bg-gradient-to-r from-hoverColor to-hoverlight text-textwhite font-semibold border-transparent shadow-md"
                        : "text-hoverColor bg-backg border hover:bg-gradient-to-r font-semibold hover:from-hoverColor hover:to-hoverlight hover:text-textwhite hover:border-transparent hover:shadow-md"
                    }`}
                  >
                    {label}
                  </Link>
                );
              })}
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
              <Button
                className="cursor-pointer relative overflow-hidden bg-backg text-textPrimary px-4 py-2 rounded-xl font-semibold
                transition-all duration-200 ease-in-out hover:text-textPrimary hover:scale-105 border-none"
                onClick={() => setIsLoginOpen(true)}
              >
                <span
                  className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500
                  transform translate-x-[-101%] hover:translate-x-0 transition-transform duration-500 ease-in-out rounded-xl"
                ></span>
                <span className="relative z-10">Login</span>
              </Button>
            )}
          </div>
        </div>

        {isMobileMenuOpen && <MobileHeader isLoggedIn={isLoggedIn} />}
      </header>

      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
};

export default Header;
