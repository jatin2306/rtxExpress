"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function NotFound({
  title = "No Data Found",
  message = "Looks like there’s nothing here right now.",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center text-center p-8 bg-white border border-violet-100 shadow-md rounded-2xl max-w-md mx-auto"
    >
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="mb-4"
      >
        <Image
          src="/not-found.svg" // Add your illustration in /public folder
          alt="Not Found"
          width={180}
          height={180}
          className="object-contain"
        />
      </motion.div>

      <h2 className="text-xl font-semibold text-[#3e1f92] mb-2">{title}</h2>
      <p className="text-gray-600 text-sm">{message}</p>
    </motion.div>
  );
}
