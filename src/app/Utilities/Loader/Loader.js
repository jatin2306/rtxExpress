"use client";
import { motion } from "framer-motion";
import { Car } from "lucide-react";

export default function VehicleLoader() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#f9f6ff]">
      <motion.div
        animate={{ x: [0, 60, -60, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="text-[#6d38f0]"
      >
        <Car size={80} strokeWidth={1.5} />
      </motion.div>

      <motion.h2
        className="mt-8 text-xl md:text-2xl font-semibold text-[#3e1f92]"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Hang tight, verifying your vehicle details…
      </motion.h2>

      <p className="text-gray-500 mt-2 text-sm md:text-base">
        Fetching pending challans from transport servers
      </p>
    </div>
  );
}
