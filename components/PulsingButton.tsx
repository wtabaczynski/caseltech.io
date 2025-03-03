import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut" } },
};

const pulseAnimation = {
  animate: {
    scale: [1, 1.08, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const CircularButton = () => {
  return (
    <div className="relative flex items-center justify-center w-48 h-48">
      {/* Rotating Circular Text */}
      <div className="absolute w-full h-full animate-spin-slow" style={{ transform: "translateY(-4px)" }}>
        <svg className="w-full h-full" viewBox="0 0 200 200">
          <defs>
            <path
              id="circlePath"
              d="M 100, 100
                 m -75, 0
                 a 75,75 0 1,1 150,0
                 a 75,75 0 1,1 -150,0"
            />
          </defs>
          <text fontSize="16" fill="currentColor" className="text-violet-600">
            <textPath href="#circlePath" textLength="500">
              CHECK OUT OUR OFFER • CHECK OUT OUR OFFER • CHECK OUT OUR OFFER •
            </textPath>
          </text>
        </svg>
      </div>

      {/* 3D Styled Pulsating Button */}
      <motion.div
        className="w-32 h-32 bg-violet-600 text-white font-bold flex items-center justify-center rounded-full shadow-lg transform hover:scale-105 transition-all"
        variants={buttonVariants}
        initial="hidden"
        animate="visible"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div variants={pulseAnimation} animate="animate">
          <Link href="https://demo.caseltech.com">Get Started</Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CircularButton;
