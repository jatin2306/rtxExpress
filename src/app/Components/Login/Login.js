"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../Common/Button";
import Input from "../Common/Input";

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
            className="bg-black/20 backdrop-blur-lg w-[90%] max-w-md rounded-2xl p-6 sm:p-8 border border-[rgba(255,255,255,0.2)] shadow-lg relative"
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
              className="absolute top-3 right-3 text-[rgba(255,255,255,0.7)] hover:text-textwhite text-2xl font-bold"
            >
              ×
            </button>

            <h2 className="text-2xl font-semibold text-center text-textwhite mb-6">
              Login to view your Account Details
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full border ${
                  error ? "border-red-500" : "border-transparent"
                } rounded-lg px-4 py-3 focus:outline-none focus:ring-2 ${
                  error
                    ? "focus:ring-red-400"
                    : "focus:ring-main"
                } bg-white text-gray-900 placeholder:text-gray-400`}
              />

              {error && (
                <p className="text-red-400 text-sm text-center">{error}</p>
              )}

              <p className="text-sm sm:text-base text-[rgba(255,255,255,0.7)] text-center">
                By proceeding, you agree to our{" "}
                <Link href="#" className="text-main hover:underline">
                  terms
                </Link>{" "}
                and{" "}
                <Link href="#" className="text-main hover:underline">
                  conditions
                </Link>
              </p>

              <Button
                type="submit"
                className="w-full bg-main hover:bg-[#9fffe0] text-[#004d4d] font-semibold py-3 rounded-lg shadow-md transition-all"
              >
                Verify your email
              </Button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
