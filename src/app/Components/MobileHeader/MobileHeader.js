import React from "react";
import { navItems } from "../../Utilities/Utility";
import Button from "../Common/Button";
import { usePathname } from "next/navigation";
import Link from "next/link";

const MobileHeader = ({ isLoggedIn }) => {
  const pathname = usePathname();
  console.log(navItems);
  return (
    <div className="md:hidden mt-3 bg-backg rounded-xl p-4 flex flex-col gap-3 shadow-lg transition-all duration-300">
      {navItems.map(({ label, link }) => {
        const isActive = pathname === link;
        return (
          <Link
            key={label}
            href={link}
            className={`font-medium px-4 py-2 rounded-xl border transition-all duration-200 ${
              isActive
                ? "bg-gradient-to-r from-hoverColor to-hoverlight text-textwhite border-transparent shadow-md"
              : "text-hoverColor bg-backg border hover:bg-gradient-to-r hover:from-hoverColor hover:to-hoverlight hover:text-textwhite hover:shadow-md"
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {label}
          </Link>
        );
      })}
      {!isLoggedIn && (
        <Button
          onClick={() => setIsLoginOpen(true)}
          className="w-full relative overflow-hidden bg-backg text-textPrimary px-4 py-2 rounded-xl font-semibold transition-all duration-200 ease-in-out hover:text-textPrimary hover:scale-105 border-none"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-hoverColor to-hoverlight transform translate-x-[-101%] hover:translate-x-0 transition-transform duration-500 ease-in-out rounded-xl"></span>
          <span className="relative z-10">Login</span>
        </Button>
      )}
    </div>
  );
};

export default MobileHeader;
