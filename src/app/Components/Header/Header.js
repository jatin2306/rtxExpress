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
      <header className="p-5 m-2 rounded-4xl bg-black/20 backdrop-blur-lg border border-[rgba(255,255,255,0.2)]">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-7 h-7 text-textwhite md:hidden cursor-pointer"
              onClick={toggleMobileMenu}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
              />
            </svg>

            <Link href="/">
              <p className="font-semibold text-textwhite text-lg cursor-pointer">
                {logoName}
              </p>
            </Link>
          </div>

          <div className="flex items-center gap-10">
            <nav className="hidden md:flex gap-5">
              {navItems.map(({ label, link }) => {
                const isActive = pathname === link;
                return (
                  <Link
                    key={label}
                    href={link}
                    className={`px-5 py-2 rounded-xl font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-main text-[#004d4d] font-semibold shadow-md"
                        : "text-textwhite hover:bg-main hover:text-[#004d4d] font-semibold"
                    }`}
                  >
                    {label}
                  </Link>
                );
              })}
            </nav>

            {isLoggedIn ? (
              <Image
                className="w-8 h-8 rounded-full ring-2 ring-main cursor-pointer"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Profile"
                width={32}
                height={32}
              />
            ) : (
              <Button
                className="cursor-pointer bg-main text-[#004d4d] px-4 py-2 rounded-xl font-semibold
                transition-all duration-200 ease-in-out hover:bg-[#9fffe0] border-none"
                onClick={() => setIsLoginOpen(true)}
              >
                Login
              </Button>
            )}
          </div>
        </div>
        {isMobileMenuOpen && (
          <MobileHeader
            isLoggedIn={isLoggedIn}
            setIsLoginOpen={setIsLoginOpen}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
          />
        )}
      </header>

      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
};

export default Header;
