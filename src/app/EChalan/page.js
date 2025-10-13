"use client";
import React, { useState } from "react";
import FAQSection from "../FAQ/FAQSection";
import Link from "next/link";
import Loader from "../Utilities/Loader/Loader";
import SafetyTips from "../Components/SafetyTips/SafetyTips";

export default function EChallan() {
  const [vehicleNumber, setVehicleNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Vehicle Number:", vehicleNumber);
  };
  const handleVehicleInput = (value) => {
    let formatted = value.toUpperCase().replace(/[^A-Z0-9]/g, "");
    if (formatted.length > 2)
      formatted = formatted.slice(0, 2) + " " + formatted.slice(2);
    if (formatted.length > 5)
      formatted = formatted.slice(0, 5) + " " + formatted.slice(5);
    if (formatted.length > 8)
      formatted = formatted.slice(0, 8) + " " + formatted.slice(8, 12);
    setVehicleNumber(formatted);
  };

  return (
    <>
      {" "}
      <div className="min-h-[calc(100vh-64px)] bg-gradient-to-b from-[#ede9ff] via-[#f6f4ff] to-white flex items-center justify-center px-4 py-10">
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-10">
          {/* Left Section - Illustration & Info */}
          <div className="flex flex-col justify-center w-full md:w-1/2 space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Check & Pay Your <br />
              <span className="text-[#7d5cff] font-extrabold">E-</span>
              <span className="text-[#7d5cff] font-extrabold">
                Challan
              </span>{" "}
              Instantly
            </h1>

            <p className="text-gray-600 text-base md:text-lg max-w-md mx-auto md:mx-0">
              Stay compliant on the road. Find your challan, view details, and
              pay securely in just a few clicks.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 mt-4">
              <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-lg p-3 shadow-sm border border-violet-100">
                🚗 <span>Instant challan lookup</span>
              </div>
              <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-lg p-3 shadow-sm border border-violet-100">
                💳 <span>Secure payment gateway</span>
              </div>
              <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-lg p-3 shadow-sm border border-violet-100">
                ⚡ <span>One-tap clearance</span>
              </div>
              <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-lg p-3 shadow-sm border border-violet-100">
                🕐 <span>Faster loan processing</span>
              </div>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="w-full md:w-1/2 bg-white/70 backdrop-blur-lg border border-violet-100 rounded-2xl shadow-xl p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-[#3e1f92] mb-4">
              Check Your Vehicle Status
            </h2>
            <p className="text-sm text-gray-500 mb-6">
              Enter your vehicle registration number below to view your challan
              details.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Vehicle Number
                </label>
                <div className="flex items-center gap-2">
                  <div className="bg-[#ece9fe] text-[#3e1f92] font-semibold px-4 py-2 rounded-lg">
                    IND
                  </div>
                  <input
                    type="text"
                    placeholder="DL 12 CX 1234"
                    value={vehicleNumber}
                    onChange={(e) => handleVehicleInput(e.target.value)}
                    className="flex-1 border border-gray-300 rounded-lg px-4 py-3 text-xl font-bold uppercase tracking-widest focus:outline-none focus:ring-2 focus:ring-[#7b4ff2] transition-all"
                  />
                </div>
              </div>

              <Link href="Challans">
                {" "}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#6d38f0] to-[#a178ff] hover:from-[#5b2bd9] hover:to-[#8b5cff] text-white font-semibold py-2.5 rounded-lg shadow-lg transition-all duration-300"
                >
                  🔍 Check Challan
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
      <SafetyTips />
      <Loader loading={false} />
      <FAQSection />
    </>
  );
}
