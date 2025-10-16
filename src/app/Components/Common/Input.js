"use client";
import React from "react";

const Input = ({ className = "", error = false, ...props }) => {
  return (
    <input
      {...props}
      className={`${className} ${
        error
          ? "border-red-500 focus:ring-red-400"
          : "border-gray-300 focus:ring-hoverlight"
      } rounded-lg px-4 py-3 focus:outline-none focus:ring-2`}
    />
  );
};

export default Input;
