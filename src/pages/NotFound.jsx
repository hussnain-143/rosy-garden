import React from "react";
import { FiHome } from "react-icons/fi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "../components/ui/Button";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  font-didot text-center px-6">
      {/* Animated Withered Flower */}
      <motion.div
        className="w-36 h-36 mb-6"
        initial={{ rotate: -10, opacity: 0 }}
        animate={{ rotate: 10, opacity: 1 }}
        transition={{
          rotate: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 4,
            ease: "easeInOut",
          },
          opacity: { duration: 1.2 },
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          fill="none"
          className="w-full h-full drop-shadow-md"
        >
          {/* Stem */}
          <motion.path
            d="M32 20 C32 35, 30 45, 32 60"
            stroke="#2E7D32"
            strokeWidth="3"
            fill="none"
            animate={{ pathLength: [0.8, 1, 0.8] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          />
          {/* Drooping flower head */}
          <motion.ellipse
            cx="32"
            cy="20"
            rx="10"
            ry="14"
            fill="#EF5350"
            transform="rotate(30 32 20)"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          />
          {/* Center */}
          <circle cx="32" cy="20" r="4" fill="#FFD54F" />
          {/* Leaves */}
          <path d="M28 40 C20 38, 15 45, 22 48" fill="#81C784" />
          <path d="M36 45 C44 44, 48 50, 40 52" fill="#81C784" />
        </svg>
      </motion.div>

      {/* Error Text */}
      <h1 className="text-8xl font-bold text-red-custom">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold mt-4 text-green-custom">
        Oops! This Flower Has Withered
      </h2>
      <p className="text-gray-600 mt-3 max-w-md">
        Just like a bloom past its prime, this page no longer blossoms.
        But don’t worry — fresh flowers await you back at{" "}
        <span className="font-bold  text-red-custom">Rosy Garden</span>.
      </p>

      <Button
        message={
          <Link
            to="/"
          >
            Back to Garden
          </Link>
        }
        style="px-6 py-3 mt-10 text-lg"
      />

    </div>
  );
};

export default NotFound;
