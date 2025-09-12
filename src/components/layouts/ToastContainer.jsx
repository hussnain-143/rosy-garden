// ToastContainer.jsx
"use client";
import React from "react";

const ToastContainer = ({ children }) => {
  return (
    <div className="fixed top-5 right-5 flex flex-col gap-3 z-50">
      {children}
    </div>
  );
};

export default ToastContainer;
