/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../Common/Button";
import Input from "../Common/Input";
import { onPostSendOtp, onPostSendOtpReset } from "../../Store/Slices/sendOtpSlice";
import { useAppDispatch, SendOtpReducer } from "../../Utilities/Utility";
import toast from "react-hot-toast";

export default function LoginModal({ isOpen, onClose }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [otpError, setOtpError] = useState("");
  const [resendTimer, setResendTimer] = useState(0);
  const dispatch = useAppDispatch();
  const sendOtpState = SendOtpReducer()
  const otpInputRefs = useRef([]);
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

    dispatch(onPostSendOtp({ email: email }));
    setError("");
  };


  const handleOtpChange = (index, value) => {
    if (value.length > 1) return;
    const newOtp = otp.split('');
    newOtp[index] = value;
    setOtp(newOtp.join(''));
    setOtpError("");


    if (value && index < 5) {
      otpInputRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpPaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);

    if (pastedData.length === 6) {
      setOtp(pastedData);

      otpInputRefs.current[5]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      otpInputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerifyOtp = async () => {
    if (otp.length !== 6) {
      setOtpError("Please enter complete 6-digit OTP");
      return;
    }

    setIsVerifying(true);
    setOtpError("");
  };

  const handleResendOtp = () => {
    dispatch(onPostSendOtp({ email: email }));
    setOtp("");
    setOtpError("");
    setResendTimer(60); // Reset timer to 1 minute
  };

  useEffect(() => {
    if (sendOtpState.post_status_code === "200") {
      setShowOtpInput(true);
      setError("");
      toast.success(sendOtpState?.postMessage)
      dispatch(onPostSendOtpReset())
      setResendTimer(60); // Start 1 minute timer
    } else if (sendOtpState.post_status_code === 400) {
      setError(sendOtpState.postMessage);
    }
  }, [sendOtpState]);


  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => {
        setResendTimer(resendTimer - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [resendTimer]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        onClose();
        setError("");
        setOtpError("");
        setShowOtpInput(false);
        setOtp("");
        setResendTimer(0);
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
              {showOtpInput ? "Enter Verification Code" : "Login to view your Account Details"}
            </h2>

            {!showOtpInput ? (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full border ${error ? "border-red-500" : "border-transparent"
                    } rounded-lg px-4 py-3 focus:outline-none focus:ring-2 ${error ? "focus:ring-red-400" : "focus:ring-main"
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
                  disabled={sendOtpState.isLoading}
                  className="w-full bg-main hover:bg-[#9fffe0] text-[#004d4d] font-semibold py-3 rounded-lg shadow-md transition-all disabled:opacity-50"
                >
                  {sendOtpState.isLoading ? "Sending..." : "Verify your email"}
                </Button>
              </form>
            ) : (
              <div className="space-y-4 sm:space-y-6">
                <div className="text-center">
                  <p className="text-[rgba(255,255,255,0.7)] text-sm mb-2">
                    We've sent a 6-digit code to
                  </p>
                  <p className="text-textwhite font-medium">{email}</p>
                </div>

                <div className="flex justify-center gap-2 sm:gap-3">
                  {[0, 1, 2, 3, 4, 5].map((index) => (
                    <input
                      key={index}
                      ref={(el) => (otpInputRefs.current[index] = el)}
                      type="text"
                      maxLength="1"
                      value={otp[index] || ""}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      onPaste={handleOtpPaste}
                      className="w-10 h-10 sm:w-12 sm:h-12 text-center text-lg font-semibold border border-textwhite/20 rounded-lg bg-white/10 text-textwhite focus:outline-none focus:ring-2 focus:ring-main focus:border-transparent"
                    />
                  ))}
                </div>

                {otpError && (
                  <p className="text-red-400 text-sm text-center">{otpError}</p>
                )}

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    onClick={handleVerifyOtp}
                    disabled={otp.length !== 6 || isVerifying}
                    className="flex-1 bg-main hover:bg-[#9fffe0] text-[#004d4d] font-semibold py-3 rounded-lg shadow-md transition-all disabled:opacity-50"
                  >
                    {isVerifying ? "Verifying..." : "Verify OTP"}
                  </Button>

                  <Button
                    onClick={handleResendOtp}
                    disabled={sendOtpState.isPostLoading || resendTimer > 0}
                    className="flex-1 bg-transparent border border-textwhite/20 text-textwhite hover:bg-textwhite/10 font-semibold py-3 rounded-lg transition-all disabled:opacity-50"
                  >
                    {sendOtpState.isPostLoading 
                      ? "Sending..." 
                      : resendTimer > 0 
                        ? `Resend OTP (${resendTimer}s)` 
                        : "Resend OTP"}
                  </Button>
                </div>

                <button
                  onClick={() => {
                    setShowOtpInput(false);
                    setOtp("");
                    setOtpError("");
                    setResendTimer(0);
                  }}
                  className="w-full text-center text-[rgba(255,255,255,0.7)] hover:text-textwhite text-sm transition-colors"
                >
                  ← Back to email
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
