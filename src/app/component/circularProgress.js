import React from "react";
import { motion } from "framer-motion";

const CircularProgress = ({ percentage }) => {
  return (
    <motion.div
      className="relative w-[170px] h-[170px] flex items-center justify-center"
      initial={{ "--percentage": 0 }}
      animate={{ "--percentage": percentage }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      <svg className="w-[170px] h-[170px]" viewBox="0 0 100 100">
        {/* Background Circle */}
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="gray"
          strokeWidth="1"
        />
        {/* Animated Progress Circle */}
        <motion.circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="yellow"
          strokeWidth="1"
          strokeDasharray="282.6"
          strokeDashoffset="calc(282.6 * (1 - var(--percentage) / 100))"
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </svg>
      {/* Percentage Text */}
      <span className="absolute text-white font-bold">{percentage}%</span>
    </motion.div>
  );
};

export default CircularProgress;
