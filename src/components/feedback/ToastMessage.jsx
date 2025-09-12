"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiCheckCircle, FiInfo, FiAlertCircle } from "react-icons/fi";

const ToastMessage = ({ message, type = "info", duration = 3000 }) => {
  const [show, setShow] = useState(true);
  const [progress, setProgress] = useState(100);

  // Auto-hide + progress bar update
  useEffect(() => {
    if (!show) return;

    let startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const percent = Math.max(100 - (elapsed / duration) * 100, 0);
      setProgress(percent);

      if (elapsed >= duration) {
        setShow(false);
        clearInterval(timer);
      }
    }, 30);

    return () => clearInterval(timer);
  }, [duration, show]);

  const baseStyle =
    "relative overflow-hidden  flex items-center gap-3 px-4 py-3 rounded-2xl font-medium shadow-[0_0_25px_rgba(0,0,0,0.25)] border border-white/20 w-fit min-w-[280px] max-w-sm mb-3 backdrop-blur-lg bg-white/20";

  const typeConfig = {
    error: {
      style: "text-red-500 border-red-200/30 shadow-red-500",
      icon: <FiAlertCircle size={20} />,
      bar: "bg-gradient-to-r from-red-300/50 to-red-700",
    },
    success: {
      style: "text-green-500 border-green-200/30 shadow-green-500",
      icon: <FiCheckCircle size={20} />,
      bar: "bg-gradient-to-r from-green-300/50 to-green-700",
    },
    info: {
      style: "text-blue-500 border-blue-200/30 shadow-blue-500",
      icon: <FiInfo size={20} />,
      bar: "bg-gradient-to-r from-blue-300/50 to-blue-700",
    },
    other: {
      style: "text-gray-500 border-gray-200/30 shadow-gray-500",
      icon: <FiInfo size={20} />,
      bar: "bg-gradient-to-r from-gray-300/50 to-gray-700",
    },
  };

  return (
    <AnimatePresence>
      {show && (
        <>
          <div >
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className={`${baseStyle} ${typeConfig[type]?.style || typeConfig.info.style}`}
            >
              {/* Left Icon */}
              {typeConfig[type]?.icon || typeConfig.info.icon}

              {/* Message */}
              <span className="flex-1">{message}</span>

              {/* Close button */}
              <button
                onClick={() => setShow(false)}
                className="p-1 rounded-full hover:bg-white/20 transition"
              >
                <FiX size={18} />
              </button>

              {/* Progress bar */}
              <motion.div
                className={`absolute bottom-0 left-0 h-1 ${typeConfig[type]?.bar}`}
                style={{ width: `${progress}%` }}
              />
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ToastMessage;