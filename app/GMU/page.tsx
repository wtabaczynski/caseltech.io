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

const GMU = () => {
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
        {/* Lewa kolumna – nagłówek, tekst oraz przycisk */}
        <motion.div
          className="w-full md:w-1/2 text-black"
          variants={textVariants}
        >
          <h1 className="text-4xl font-bold mb-6">
            Equitable and Accessible Software for Injury Detection
          </h1>
          <div className="text-lg leading-relaxed text-justify">
            <p className="font-bold underline">Sector: Healthcare</p>
            <div className="h-6"></div>
            <p className="mb-4">
              The Caseltech provides an implementation of an interactive
              database for the Equitable and Accessible Software for Injury
              Detection (EAS-ID) project for George Mason University.
            </p>
            <p>
              The project involves building a unique data repository that
              combines images of bruises and other injuries with measurements,
              clinical and demographic information about the victim, and
              information inferred by artificial intelligence.
            </p>
          </div>
          <motion.div
            className="mt-10 flex justify-end"
            variants={buttonVariants}
          >
            <Link href="https://bruise.gmu.edu/about/">
              <button className="px-6 py-3 bg-blue-800 text-white font-bold uppercase rounded-md hover:bg-blue-900 transition">
                Project website
              </button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Prawa kolumna – obrazek */}
        <motion.div className="w-full md:w-1/2" variants={imageVariants}>
          <Image
            src="/george.jpeg"
            alt="GMU"
            width={600}
            height={350}
            className="rounded-lg"
          />
        </motion.div>
      </motion.section>
    </motion.main>
  );
};

export default GMU;
