"use client";
import Link from "next/link";
import { logoName } from "../../Utilities/Utility";

export default function Footer() {
  return (
    <footer className="bg-black/20 backdrop-blur-lg border-t border-[rgba(255,255,255,0.2)] text-textwhite mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-xl font-semibold text-textwhite mb-3">
            {logoName}
          </h2>
          <p className="text-sm leading-relaxed text-[rgba(255,255,255,0.7)]">
            Check and pay your E-Challans instantly. Secure, reliable, and easy
            to use – stay compliant on the road with {logoName}.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-textwhite mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-main transition text-[rgba(255,255,255,0.7)]">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/insurance"
                className="hover:text-main transition text-[rgba(255,255,255,0.7)]"
              >
                Insurance
              </Link>
            </li>
            <li>
              <Link
                href="/echallan"
                className="hover:text-main transition text-[rgba(255,255,255,0.7)]"
              >
                E-Challan
              </Link>
            </li>
            <li>
              <Link href="/login" className="hover:text-main transition text-[rgba(255,255,255,0.7)]">
                Login
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-textwhite mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/help" className="hover:text-main transition text-[rgba(255,255,255,0.7)]">
                Help Center
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-main transition text-[rgba(255,255,255,0.7)]">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-main transition text-[rgba(255,255,255,0.7)]">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-textwhite mb-3">
            Contact Us
          </h3>
          <p className="text-sm text-[rgba(255,255,255,0.7)]">
            Email:{" "}
            <Link
              href="mailto:support@{logoName}.com"
              className="text-main hover:underline"
            >
              support@{logoName}.com
            </Link>
          </p>
          <p className="text-sm text-[rgba(255,255,255,0.7)] mt-2">
            Phone:{" "}
            <Link
              href="tel:+911234567890"
              className="text-main hover:underline"
            >
              +91 12345 67890
            </Link>
          </p>
        </div>
      </div>

      <div className="bg-backg py-4 text-center text-sm text-[rgba(255,255,255,0.7)]">
        © {new Date().getFullYear()} {logoName}. All rights reserved.
      </div>
    </footer>
  );
}
