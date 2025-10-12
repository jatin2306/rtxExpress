"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#f3ecff] border-t border-violet-200 text-gray-700 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-xl font-semibold text-[#3e1f92] mb-3">rtXpress</h2>
          <p className="text-sm leading-relaxed text-gray-600">
            Check and pay your E-Challans instantly. Secure, reliable, and easy
            to use – stay compliant on the road with rtXpress.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#5b2bd9] mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-[#6d38f0] transition">Home</Link></li>
            <li><Link href="/insurance" className="hover:text-[#6d38f0] transition">Insurance</Link></li>
            <li><Link href="/echallan" className="hover:text-[#6d38f0] transition">E-Challan</Link></li>
            <li><Link href="/login" className="hover:text-[#6d38f0] transition">Login</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#5b2bd9] mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/help" className="hover:text-[#6d38f0] transition">Help Center</Link></li>
            <li><Link href="/terms" className="hover:text-[#6d38f0] transition">Terms & Conditions</Link></li>
            <li><Link href="/privacy" className="hover:text-[#6d38f0] transition">Privacy Policy</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#5b2bd9] mb-3">Contact Us</h3>
          <p className="text-sm text-gray-600">
            Email:{" "}
            <Link href="mailto:support@rtxpress.com" className="text-[#6d38f0] hover:underline">
              support@rtxpress.com
            </Link>
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Phone:{" "}
            <Link href="tel:+911234567890" className="text-[#6d38f0] hover:underline">
              +91 12345 67890
            </Link>
          </p>
        </div>
      </div>

      <div className="bg-[#e9dcff] py-4 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} rtXpress. All rights reserved.
      </div>
    </footer>
  );
}
