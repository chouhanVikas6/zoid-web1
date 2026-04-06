"use client";

import React from "react";

const PrintButton = () => {
  const handlePrint = (e: React.MouseEvent) => {
    e.preventDefault();
    window.print();
  };

  return (
    <button
      onClick={handlePrint}
      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-bold transition-colors group no-print cursor-pointer"
    >
      Printer-Friendly Version [PDF]
      <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
    </button>
  );
};

export default PrintButton;
