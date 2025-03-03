"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const transitionVariants = {
  initial: { y: "100%" },
  animate: { y: 0, transition: { duration: 3.2, ease: "easeInOut" } },
  exit: {
    y: "100%",
    borderRadius: ["0%", "50%"],
    transition: { duration: 3.2, ease: "easeInOut", delay: 2 },
  },
};

const textVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 1.5, ease: "easeOut", delay: 2 } },
  exit: { opacity: 0, y: -20, transition: { duration: 1.5, ease: "easeInOut", delay: 1.5 } },
};

const PageTransition = () => {
  return (
    <motion.div
      className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50"
      variants={transitionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.h1 className="text-white text-4xl font-bold" variants={textVariants}>
        Caseltech
      </motion.h1>
      <motion.h2 className="text-white text-2xl mt-2" variants={textVariants}>
        Smart Solutions
      </motion.h2>
    </motion.div>
  );
};

export default PageTransition;
