// src/components/Button.jsx
import React from "react";

const Button = ({ message, style = "" }) => {
  return (
    <button
      className={`
        relative overflow-hidden inline-block group
        cursor-pointer
        shadow-2xl
        text-white
        ${style}
      `}
    >
      {/* Base background (red) */}
      <span className="absolute inset-0 bg-red-custom transition-colors duration-500 z-0"></span>

      {/* Sliding background (green) */}
      <span
        className="
          absolute inset-0 bg-green-custom
          transform -translate-x-[94%] group-hover:translate-x-0
          transition-transform duration-700 ease-out
          z-10
        "
      ></span>

      {/* Button text */}
      <span className="relative z-20">{message}</span>
    </button>
  );
};

export default Button;
