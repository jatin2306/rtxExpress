"use client";

import { motion } from "framer-motion";

export default function NoRecordsFound({
  title = "No records found!",
  subtitle = "Try searching again or check back later.",
  buttonText = "Go Back",
  onClick,
}) {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] text-center px-4">
      {/* Illustration */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative mb-6"
      >
        <div className="bg-bg-warning rounded-2xl w-56 h-40 flex items-center justify-center shadow-md">
          <div className="text-text-primary text-6xl">📄</div>
        </div>
        <div className="absolute -top-4 right-6 text-text-warning text-2xl">⭐</div>
        <div className="absolute top-10 left-4 text-text-muted text-xl">✨</div>
      </motion.div>

      {/* Text */}
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-2xl font-semibold text-text-primary mb-2"
      >
        {title}
      </motion.h2>
      <p className="text-text-secondary mb-6">{subtitle}</p>

      {/* Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        onClick={onClick}
        className="bg-main hover:bg-hoverlight text-backg font-medium py-2 px-5 rounded-full shadow-md transition-all"
      >
        {buttonText}
      </motion.button>
    </div>
  );
}
