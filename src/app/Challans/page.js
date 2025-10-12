"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Car, Clock, FileCheck, ChevronLeft } from "lucide-react";
import Image from "next/image";

export default function ChallanDashboard() {
  const [selectedTab, setSelectedTab] = useState(null);

  const tabs = [
    {
      label: "Pending",
      icon: <Car className="text-[#8b5cff]" size={22} />,
      message: "Hang tight! We’re fetching your challans...",
      sub: "Checking for pending challans.",
      illustration: "/pending.svg",
    },
    {
      label: "In Progress",
      icon: <Clock className="text-[#8b5cff]" size={22} />,
      message: "Processing your payments...",
      sub: "Your challan is being settled securely.",
      illustration: "/progress.svg",
    },
    {
      label: "Settled",
      icon: <FileCheck className="text-[#8b5cff]" size={22} />,
      message: "Great! No pending challans.",
      sub: "Keep up the responsible driving 🚗",
      illustration: "/settled.svg",
    },
  ];

  const activeData = tabs.find((t) => t.label === selectedTab);

  return (
    <div className="min-h-screen bg-[#f9f7ff] text-gray-800 px-5 sm:px-8 md:px-12 py-8 md:py-10">
      <div className="flex items-center gap-3 mb-8">
        <button
          onClick={() => window.history.back()}
          className="p-2 rounded-full bg-[#ebe3ff] hover:bg-[#d8cbff] transition"
        >
          <ChevronLeft className="text-[#3e1f92]" size={22} />
        </button>
        <h1 className="text-2xl sm:text-3xl font-bold text-[#3e1f92]">
          Challan Status Overview
        </h1>
      </div>

      {!selectedTab ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {tabs.map((tab, i) => (
            <motion.div
              key={i}
              onClick={() => setSelectedTab(tab.label)}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="bg-white border border-violet-100 shadow-md rounded-2xl p-6 text-center hover:shadow-lg cursor-pointer transition-all"
            >
              <div className="flex justify-center mb-4">{tab.icon}</div>
              <h3 className="font-semibold text-lg text-[#3e1f92] mb-2">
                {tab.label}
              </h3>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="flex justify-center mb-4"
              >
                <Image
                  src={tab.illustration}
                  alt={tab.label}
                  width={160}
                  height={160}
                  className="object-contain"
                />
              </motion.div>
              <p className="font-medium text-gray-700">{tab.message}</p>
              <p className="text-sm text-gray-500 mt-1">{tab.sub}</p>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white border border-violet-100 shadow-md rounded-2xl p-8 text-center max-w-lg mx-auto"
        >
          <div className="flex justify-center mb-4">{activeData.icon}</div>
          <h2 className="text-xl sm:text-2xl font-semibold text-[#3e1f92] mb-2">
            {activeData.label} Challan
          </h2>
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="flex justify-center mb-4"
          >
            <Image
              src={activeData.illustration}
              alt={activeData.label}
              width={180}
              height={180}
              className="object-contain"
            />
          </motion.div>
          <p className="text-gray-700 font-medium mb-1">{activeData.message}</p>
          <p className="text-sm text-gray-500">{activeData.sub}</p>
          <button
            onClick={() => setSelectedTab(null)}
            className="mt-6 px-6 py-2 bg-[#6d38f0] hover:bg-[#5b2bd9] text-white rounded-lg transition"
          >
            Back to Overview
          </button>
        </motion.div>
      )}
    </div>
  );
}
