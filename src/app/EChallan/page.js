"use client";
import React, { useState } from "react";
import FAQSection from "../FAQ/FAQSection";
import Link from "next/link";
import Loader from "../Components/Loader/Loader";
import SafetyTips from "../Components/SafetyTips/SafetyTips";
import HowItWorks from "../Components/HowItWorks/HowItWorks";
import FeaturesSection from "../Components/FeaturesSection/FeaturesSection";
import StatisticsSection from "../Components/StatisticsSection/StatisticsSection";

export default function EChallan() {
  const [vehicleNumber, setVehicleNumber] = useState("");
  

  const lastSearchedVehicles = [
    "DL 7S CM 4147",
    "WW WW WW WWW", 
    "32 43 24 2342",
    "HR 26 AB 1234",
    "MH 01 XY 5678"
  ];

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

  const handleVehicleSuggestion = (suggestion) => {
    setVehicleNumber(suggestion);
  };

  return (
    <>
      {" "}
      <div className="min-h-[calc(100vh-64px)] bg-backg flex items-center justify-center px-4 py-12">
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-10">
          <div className="flex flex-col justify-center w-full md:w-1/2 space-y-6 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-textwhite">
              Check & Pay Your <br />
              <span className="text-main font-extrabold">E-</span>
              <span className="text-main font-extrabold">
                Challan
              </span>{" "}
              Instantly
            </h1>

            <p className="text-[rgba(255,255,255,0.8)] text-sm sm:text-base md:text-lg max-w-md mx-auto md:mx-0">
              Stay compliant on the road. Find your challan, view details, and
              pay securely in just a few clicks.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-2 sm:mt-4">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg p-3 shadow-sm border border-[rgba(255,255,255,0.2)] text-textwhite text-sm sm:text-base">
                🚗 <span>Instant challan lookup</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg p-3 shadow-sm border border-[rgba(255,255,255,0.2)] text-textwhite text-sm sm:text-base">
                💳 <span>Secure payment gateway</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg p-3 shadow-sm border border-[rgba(255,255,255,0.2)] text-textwhite text-sm sm:text-base">
                ⚡ <span>One-tap clearance</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg p-3 shadow-sm border border-[rgba(255,255,255,0.2)] text-textwhite text-sm sm:text-base">
                🕐 <span>Faster loan processing</span>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 bg-black/20 backdrop-blur-lg border border-[rgba(255,255,255,0.2)] rounded-2xl shadow-xl p-6 sm:p-8 md:p-10">
            <h2 className="text-xl sm:text-2xl font-semibold text-textwhite mb-3 sm:mb-4">
              Check Your Vehicle Status
            </h2>
            <p className="text-xs sm:text-sm text-[rgba(255,255,255,0.7)] mb-5 sm:mb-6">
              Enter your vehicle registration number below to view your challan
              details.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-textwhite mb-2">
                  Vehicle Number
                </label>
                <div className="flex items-center gap-2">
                  <div className="bg-main text-backg font-semibold px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base">
                    IND
                  </div>
                  <input
                    type="text"
                    placeholder="DL 12 CX 1234"
                    value={vehicleNumber}
                    onChange={(e) => handleVehicleInput(e.target.value)}
                    className="flex-1 border border-transparent rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-lg sm:text-xl font-bold uppercase tracking-widest focus:outline-none focus:ring-2 focus:ring-main transition-all bg-bg-primary text-text-primary placeholder:text-text-muted"
                  />
                </div>
              </div>

              <Link href="/Challans">
                <button
                  type="submit"
                  className="w-full bg-main hover:bg-hoverlight text-backg font-semibold py-2.5 sm:py-3 rounded-lg shadow-lg transition-all duration-200 text-sm sm:text-base"
                >
                  🔍 Check Challan
                </button>
              </Link>
            </form>

            <div className="mt-6">
              <p className="text-xs sm:text-sm text-[rgba(255,255,255,0.7)] mb-3">
                Last searched vehicles:
              </p>
              <div className="flex flex-wrap gap-2">
                {lastSearchedVehicles.map((vehicle, index) => (
                  <button
                    key={index}
                    onClick={() => handleVehicleSuggestion(vehicle)}
                    className="px-3 py-1.5 text-xs sm:text-sm bg-white/10 hover:bg-white/20 text-[rgba(255,255,255,0.8)] hover:text-textwhite border border-[rgba(255,255,255,0.2)] rounded-lg transition-all duration-200 hover:scale-105"
                  >
                    {vehicle}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <HowItWorks />
      <FeaturesSection />
      <StatisticsSection />

      <SafetyTips />
      <Loader loading={false} />
      <FAQSection />
    </>
  );
}
