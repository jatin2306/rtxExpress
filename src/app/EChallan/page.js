"use client";
import React, { useState } from "react";
import FAQSection from "../FAQ/FAQSection";
import Link from "next/link";
import Loader from "../Components/Loader/Loader";
import SafetyTips from "../Components/SafetyTips/SafetyTips";
import HowItWorks from "../Components/HowItWorks/HowItWorks";
import FeaturesSection from "../Components/FeaturesSection/FeaturesSection";
import StatisticsSection from "../Components/StatisticsSection/StatisticsSection";
import LoginModal from "../Components/Login/Login";
import VehicleStatusForm from "../Components/EChallan/VehicleStatusForm";
import { login } from "../Utilities/Utility";

export default function EChallan() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const isLoggedIn = login;

  const handleCheckChallan = (isLoggedIn) => {
    if (!isLoggedIn) {
      setShowLoginModal(true);
      return;
    }
    window.location.href = "/Challans";
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

          <VehicleStatusForm 
            isLoggedIn={isLoggedIn}
            onCheckChallan={handleCheckChallan}
          />
        </div>
      </div>

      <HowItWorks />
      <FeaturesSection />
      <StatisticsSection />

      <SafetyTips />
      <Loader loading={false} />
      <FAQSection />

      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
      />
    </>
  );
}
