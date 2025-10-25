import React from "react";
import { navItems } from "../../Utilities/Utility";
import Button from "../Common/Button";
import { usePathname } from "next/navigation";
import Link from "next/link";

const MobileHeader = ({ isLoggedIn, setIsLoginOpen, setIsMobileMenuOpen }) => {
  const pathname = usePathname();
  console.log(navItems);
  return (
    <div className="md:hidden mt-3 bg-black/20 backdrop-blur-lg border border-[rgba(255,255,255,0.2)] rounded-xl p-4 flex flex-col gap-3 shadow-lg transition-all duration-300">
      {navItems.map(({ label, link }) => {
        const isActive = pathname === link;
        return (
          <Link
            key={label}
            href={link}
            className={`font-medium px-4 py-2 rounded-xl transition-all duration-200 ${
              isActive
                ? "bg-main text-backg shadow-md"
              : "text-textwhite hover:bg-main hover:text-backg"
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
          className="w-full bg-main text-backg px-4 py-2 rounded-xl font-semibold transition-all duration-200 ease-in-out hover:bg-hoverlight border-none"
        >
          Login
        </Button>
      )}
    </div>
  );
};

export default MobileHeader;
