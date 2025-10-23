"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Car, Clock, FileCheck, ChevronLeft } from "lucide-react";

export default function ChallanDashboard() {
  const router = useRouter();

  const countsByTab = {
    "Pending": 2,
    "In Progress": 1,
    "Settled": 0,
  };

  const tabs = [
    {
      label: "Pending",
      icon: <Car className="text-main" size={50} />,
      message: "View all your pending challans.",
      sub: "Tap to check details of unpaid challans.",
      color: "from-black/20 to-black/10",
    },
    {
      label: "In Progress",
      icon: <Clock className="text-main" size={50} />,
      message: "Check challans currently being processed.",
      sub: "Tap to see updates on ongoing payments.",
      color: "from-black/20 to-black/10",
    },
    {
      label: "Settled",
      icon: <FileCheck className="text-main" size={50} />,
      message: "View your settled challans history.",
      sub: "Tap to review completed challan details.",
      color: "from-black/20 to-black/10",
    },
  ];

  const handleCardClick = (tabLabel) => {
    router.push(`/Overview?tab=${encodeURIComponent(tabLabel)}`);
  };

  return (
    <div className="min-h-screen bg-backg text-textwhite px-4 sm:px-6 md:px-12 py-6 md:py-12 flex flex-col">
      <div className="flex items-center gap-3 mb-8 md:mb-10">
        <button
          onClick={() => window.history.back()}
          className="p-2 rounded-full bg-main hover:bg-[#9fffe0] transition"
        >
          <ChevronLeft className="text-[#004d4d]" size={22} />
        </button>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-textwhite leading-tight">
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
              boxShadow: "0px 10px 25px rgba(127, 255, 212, 0.25)",
            }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className={`bg-gradient-to-br ${tab.color} backdrop-blur-lg border border-[rgba(255,255,255,0.2)] rounded-3xl p-6 sm:p-8 md:p-10 text-center cursor-pointer transition-all duration-300 flex flex-col justify-center relative overflow-hidden group shadow-md active:shadow-inner h-[280px] sm:h-[340px] md:h-[400px]`}
          >
            <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${
              (countsByTab[tab.label] ?? 0) > 0 ? "bg-main text-[#004d4d]" : "bg-white/10 text-[rgba(255,255,255,0.7)]"
            }`}>
              {(countsByTab[tab.label] ?? 0)}
            </div>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-[radial-gradient(circle_at_center,rgba(127,255,212,0.6)_0%,transparent_70%)] transition-all duration-500"></div>

            <div className="flex justify-center mb-5 md:mb-6">{tab.icon}</div>

            <h3 className="font-extrabold text-xl sm:text-2xl text-textwhite mb-2 md:mb-3">
              {tab.label}
            </h3>

            <p className="font-medium text-[rgba(255,255,255,0.8)] text-sm sm:text-base md:text-lg mb-1">
              {tab.message}
            </p>
            <div className="mt-2 flex items-center justify-center gap-2">
              <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold ${
                (countsByTab[tab.label] ?? 0) > 0 ? "bg-main text-[#004d4d]" : "bg-white/10 text-[rgba(255,255,255,0.7)]"
              }`}>
                <span className={`w-1.5 h-1.5 rounded-full ${
                  (countsByTab[tab.label] ?? 0) > 0 ? "bg-[#004d4d]" : "bg-[rgba(255,255,255,0.5)]"
                }`}></span>
                {(countsByTab[tab.label] ?? 0)} item{(countsByTab[tab.label] ?? 0) === 1 ? "" : "s"}
              </span>
            </div>
            <p className="pt-4 text-xs sm:text-sm text-[rgba(255,255,255,0.6)] group-hover:text-main transition-colors">
              {tab.sub}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
