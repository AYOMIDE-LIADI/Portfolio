"use client";
import React, { useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa6";

function ScrollToTopButton() {
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    showBtn && (
      <button
        onClick={handleScrollToTop}
        className="fixed bottom-6 right-6 z-50 bg-yellow-600 hover:bg-yellow-700 p-4 rounded-full text-white shadow-lg transition-all"
      >
        <FaAngleUp size={20} />
      </button>
    )
  );
}

export default ScrollToTopButton;
