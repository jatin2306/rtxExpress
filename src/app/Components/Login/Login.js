"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function LoginModal({ isOpen, onClose }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setError("Email is required");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setError("");
    console.log("Email:", email);
  };
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        onClose();
        setError("");
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
    } else {
      document.removeEventListener("keydown", handleEsc);
    }

    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-[90%] max-w-md rounded-2xl p-6 sm:p-8 border border-violet-100 shadow-lg relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button
              onClick={() => {
                onClose();
                setError("");
              }}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl font-bold"
            >
              ×
            </button>

            <h2 className="text-2xl font-semibold text-center text-[#3e1f92] mb-6">
              Login to view your Account Details
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full border ${
                  error ? "border-red-500" : "border-gray-300"
                } rounded-lg px-4 py-3 focus:outline-none focus:ring-2 ${
                  error
                    ? "focus:ring-red-400"
                    : "focus:ring-[#8e68f0] border-gray-300"
                }`}
              />

              {error && (
                <p className="text-red-500 text-sm text-center">{error}</p>
              )}

              <p className="text-sm sm:text-base text-gray-500 text-center">
                By proceeding, you agree to our{" "}
                <Link href="#" className="text-[#6d38f0] hover:underline">
                  terms
                </Link>{" "}
                and{" "}
                <Link href="#" className="text-[#6d38f0] hover:underline">
                  conditions
                </Link>
              </p>

              <button
                type="submit"
                className="w-full bg-[#6d38f0] hover:bg-[#5b2bd9] text-white font-semibold py-3 rounded-lg shadow-md transition-all"
              >
                Verify your email
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
