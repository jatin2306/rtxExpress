"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Car, Clock, FileCheck, ChevronLeft } from "lucide-react";

export default function ChallanDashboard() {
  const router = useRouter();

  const tabs = [
    {
      label: "Pending",
      icon: <Car className="text-[#8b5cff]" size={50} />,
      message: "View all your pending challans.",
      sub: "Tap to check details of unpaid challans.",
      color: "from-[#f1e5ff] to-[#e3d1ff]",
    },
    {
      label: "In Progress",
      icon: <Clock className="text-[#8b5cff]" size={50} />,
      message: "Check challans currently being processed.",
      sub: "Tap to see updates on ongoing payments.",
      color: "from-[#e9e5ff] to-[#d9d1ff]",
    },
    {
      label: "Settled",
      icon: <FileCheck className="text-[#8b5cff]" size={50} />,
      message: "View your settled challans history.",
      sub: "Tap to review completed challan details.",
      color: "from-[#eaf6ff] to-[#d8edff]",
    },
  ];

  const handleCardClick = (tabLabel) => {
    router.push(`/Overview?tab=${encodeURIComponent(tabLabel)}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5f2ff] to-white text-gray-800 px-4 sm:px-6 md:px-12 py-6 md:py-12 flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8 md:mb-10">
        <button
          onClick={() => window.history.back()}
          className="p-2 rounded-full bg-[#ebe3ff] hover:bg-[#d8cbff] transition"
        >
          <ChevronLeft className="text-[#3e1f92]" size={22} />
        </button>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#3e1f92] leading-tight">
          Challan Status Overview
        </h1>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 flex-grow"
      >
        {tabs.map((tab, i) => (
          <motion.div
            key={i}
            onClick={() => handleCardClick(tab.label)}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 25px rgba(139, 92, 255, 0.25)",
            }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className={`bg-gradient-to-br ${tab.color} backdrop-blur-lg border border-violet-100 rounded-3xl p-6 sm:p-8 md:p-10 text-center cursor-pointer transition-all duration-300 flex flex-col justify-center relative overflow-hidden group shadow-md active:shadow-inner h-[280px] sm:h-[340px] md:h-[400px]`}
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-[radial-gradient(circle_at_center,rgba(139,92,255,0.6)_0%,transparent_70%)] transition-all duration-500"></div>

            <div className="flex justify-center mb-5 md:mb-6">{tab.icon}</div>

            <h3 className="font-extrabold text-xl sm:text-2xl text-[#3e1f92] mb-2 md:mb-3">
              {tab.label}
            </h3>

            <p className="font-medium text-gray-700 text-sm sm:text-base md:text-lg mb-1">
              {tab.message}
            </p>
            <p className="text-xs sm:text-sm text-gray-500 group-hover:text-[#6f49ff] transition-colors">
              {tab.sub}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
