"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const Logistic = () => {
  return (
    <motion.main
      className="flex flex-col items-center justify-center min-h-screen bg-white text-black p-10"
      initial="hidden"
      animate="visible"
    >
      <motion.section
        className="max-w-6xl flex flex-col md:flex-row items-start gap-10"
        initial="hidden"
        animate="visible"
        variants={textVariants}
      >
        {/* Lewa strona z tekstem */}
        <motion.div
          className="w-full md:w-1/2 text-black font-poppins text-lg md:pl-10"
          variants={textVariants}
        >
          <p className="text-2xl font-bold">
            Project for Optimizing Assortment Allocation
          </p>
          <div className="h-8"></div>
          <p className="text-lg font-bold underline">Sector: Retail</p>
          <div className="h-8"></div>
          <p>
            The project involved designing and implementing algorithms for the
            automatic allocation of goods for initial distribution and
            replenishment, taking into account:
          </p>
          <ul className="list-disc pl-5 mt-4">
            <li>Store segmentation into clusters (e.g., by size, location).</li>
            <li>Available size range of the given assortment.</li>
            <li>Sales history and performance of individual locations.</li>
            <li>Planned openings of new stores.</li>
            <li>
              The ability for manual allocation adjustments by the allocation
              manager.
            </li>
          </ul>
          <p className="mt-4">
            Thanks to the implemented solutions, assortment distribution was
            optimized, product availability improved, and sales efficiency
            increased.
          </p>
        </motion.div>

        {/* Prawa strona z obrazkiem oraz przyciskiem */}
        <motion.div
          className="flex flex-col items-center w-full md:w-1/2"
          variants={textVariants}
        >
          <motion.div variants={imageVariants}>
            <Image
              src="/4f2.jpeg"
              alt="forecasting"
              width={600}
              height={350}
              className="rounded-lg"
            />
          </motion.div>
          <motion.div className="mt-10 flex justify-center w-full" variants={buttonVariants}>
            <Link href="/#contact-us">
              <button className="px-6 py-3 bg-blue-800 text-white font-poppins font-bold uppercase rounded-md hover:bg-blue-900 transition">
                Contact Us
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>
    </motion.main>
  );
};

export default Logistic;
