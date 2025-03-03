"use client";
import { sectorsData } from "@/constants";
import SectorCard from "./SectorCards";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Sectors = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: false });

  useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("hidden");
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      className="w-full py-8 bg-orange-500"
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-2xl font-bold text-center text-white dark:text-white mb-6"
          variants={cardVariants}
        >
          Our Sectors
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
        >
          {sectorsData.map((sector, index) => (
            <motion.div key={index} variants={cardVariants}>
              <motion.div
                whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
              >
                <SectorCard {...sector} />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Sectors;
