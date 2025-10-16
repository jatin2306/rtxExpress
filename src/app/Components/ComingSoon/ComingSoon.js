"use client"
import React from "react";
import { motion } from "framer-motion";
import { logoName } from "../../Utilities/Utility";

const ComingSoon = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[90vh] overflow-hidden bg-gradient-to-b from-main via-backg to-white text-center px-4 sm:px-6 md:px-8">
      <div className="absolute top-[-10%] left-[-10%] w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-tr from-hoverColor to-hoverlight rounded-full blur-3xl opacity-30 animate-float-slow"></div>
      <div className="absolute bottom-[-15%] right-[-5%] w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-bl from-hoverlight to-hoverColor rounded-full blur-3xl opacity-25 animate-float-slow-rev"></div>

      <motion.h1
        className="text-4xl sm:text-[3rem] md:text-[5rem] font-extrabold bg-gradient-to-r from-hoverColor to-hoverlight bg-clip-text text-transparent drop-shadow-xl tracking-wide"
        initial={{ opacity: 0, x: -120 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.4, ease: [0.25, 0.8, 0.25, 1] }}
      >
        {logoName}
      </motion.h1>

      <motion.p
        className="mt-4 sm:mt-5 text-base sm:text-lg md:text-2xl text-textPrimary font-medium"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        Something good is coming soon ✨
      </motion.p>

      <motion.div
        className="mt-6 sm:mt-8 w-32 sm:w-40 h-[3px] bg-gradient-to-r from-hoverColor to-hoverlight rounded-full"
        initial={{ width: 0 }}
        animate={{ width: "10rem" }}
        transition={{ delay: 1.2, duration: 1 }}
      />

      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full opacity-60"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{ y: ["0%", "-15%", "0%"], opacity: [0.6, 1, 0.6] }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes float-slow {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(20px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        @keyframes float-slow-rev {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        .animate-float-slow-rev {
          animation: float-slow-rev 10s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ComingSoon;
