"use client";
import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [mobile, setMobile] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Mobile:", mobile);
  };

  return (
    <div className="min-h-[calc(100vh-100px)]  flex items-center justify-center bg-[#f6f6ff] px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-md rounded-2xl p-6 sm:p-8 w-full max-w-md border border-violet-100">
        <h2 className="text-2xl sm:text-2xl font-semibold text-center text-[#3e1f92] mb-6">
          Login to view your Account Details
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <input
            type="tel"
            placeholder="Enter your mobile number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#8e68f0]"
          />

          <p className="text-sm sm:text-base text-gray-500 text-center">
            By proceeding, you agree to our{" "}
            <Link href="#" className="text-[#6d38f0] hover:underline">
              terms
            </Link>{" "}
            and{" "}
            <Link href="#" className="text-[#6d38f0] hover:underline">
              conditions
            </Link>
          </p>

          <button
            type="submit"
            className="w-full bg-[#6d38f0] hover:bg-[#5b2bd9] text-white font-semibold py-3 rounded-lg shadow-md transition-all"
          >
            Verify your number
          </button>
        </form>
      </div>
    </div>
  );
}
