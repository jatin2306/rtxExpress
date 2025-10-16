"use client";
import React from "react";
import { Shield, FileCheck2, TrafficCone } from "lucide-react";

const SafetyTips = () => {
  const tips = [
    {
      icon: <Shield className="text-hoverlight" size={24} />,
      title: "Buckle Up Every Time",
      desc: "Always wear seat belts and helmets — safety is your best protection on the road.",
    },
    {
      icon: <TrafficCone className="text-hoverlight" size={24} />,
      title: "Respect Speed Limits",
      desc: "Slow down near schools, crossings, and residential zones. It saves lives.",
    },
    {
      icon: <FileCheck2 className="text-hoverlight" size={24} />,
      title: "Keep Documents Updated",
      desc: "Maintain valid RC, insurance, and license — digital or printed — to avoid penalties.",
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-main to-white">
      <div className="max-w-6xl mx-auto">

        {/* Top CTA box */}
        <div className="bg-main rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col sm:flex-row items-center justify-between shadow-md mb-10 sm:mb-12 gap-6">
          <div className="sm:w-2/3 text-center sm:text-left">
            <h2 className="text-lg sm:text-xl md:text-3xl font-semibold text-textPrimary leading-snug mb-3">
              Pay your challan quickly<br className="sm:hidden" /> to speed up approvals
            </h2>
            <ul className="space-y-1 sm:space-y-2 text-gray-700 text-sm sm:text-base">
              <li>📄 Loan Approvals</li>
              <li>🛡️ Insurance Renewals</li>
              <li>🚗 Vehicle Resale Process</li>
            </ul>
          </div>
          <div className="text-4xl sm:text-6xl md:text-8xl text-hoverlight/25 font-bold">
            🚀
          </div>
        </div>

        {/* Safety Tips */}
        <h3 className="text-lg sm:text-2xl md:text-2xl font-bold text-gray-900 mb-6 text-center sm:text-left">
          Quick Safety Tips to Avoid Challan
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 shadow-md hover:shadow-lg rounded-2xl p-4 sm:p-6 transition-all"
            >
              <div className="flex items-center gap-3 mb-2 sm:mb-3">
                <div className="p-2 sm:p-3 bg-main rounded-xl">{tip.icon}</div>
                <h4 className="font-semibold text-gray-800 text-sm sm:text-base">{tip.title}</h4>
              </div>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{tip.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SafetyTips;
