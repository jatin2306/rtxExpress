"use client";
import { motion, AnimatePresence } from "framer-motion";

export default function VehicleLoader({ loading }) {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-main"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <motion.div
            animate={{ x: [0, 60, -60, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="w-24 h-24 md:w-32 md:h-32"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 32"
              fill="none"
            >
              <path
                d="M2 24h60v4H2v-4zm8-8h44l4 8H6l4-8zm0 0V12a4 4 0 014-4h36a4 4 0 014 4v4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="14" cy="24" r="3" fill="currentColor" />
              <circle cx="50" cy="24" r="3" fill="currentColor" />
            </svg>
          </motion.div>

          <motion.h2
            className="mt-8 text-xl md:text-2xl font-semibold text-textPrimary"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Hang tight, verifying your vehicle details…
          </motion.h2>

          <p className="text-gray-500 mt-2 text-sm md:text-base">
            Fetching pending challans from transport servers
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
