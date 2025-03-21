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
        {/* Lewa strona z tekstem */}
        <motion.div
          className="w-full md:w-1/2 text-black font-poppins text-lg md:pl-10"
          variants={textVariants}
        >
          <p className="text-2xl font-bold mb-4">
            AI-Driven Injury Detection System
          </p>
          {/* <p className="text-2xl font-bold mb-4">
            Equitable and Accessible Software for Injury Detection
          </p> */}
          <p className="text-lg font-bold underline mb-6">Sector: Healthcare</p>
          {/* <p className="mb-4">
            The Caseltech provides an implementation of an interactive database for the Equitable and Accessible Software for Injury Detection (EAS-ID) project.
          </p> */}
          {/* <p>
            The project involves building a unique data repository that combines images of bruises and other injuries with measurements, clinical and demographic information about the victim, and information inferred by artificial intelligence.
          </p> */}
          <p className="mb-4"> 
          Caseltech is implementing an interactive database for a group of institutions in the healthcare sector.
          </p> 
          <p className="mb-4">
          The project involves creating a unique data repository that combines images and injury measurements with clinical and demographic information about the crime victim, as well as data inferred by artificial intelligence.
          </p> 
        </motion.div>

        {/* Prawa strona z obrazkiem oraz przyciskami */}
        <motion.div
          className="flex flex-col items-center w-full md:w-1/2"
          variants={textVariants}
        >
          <motion.div variants={imageVariants}>
            <Image
              src="/george.jpeg"
              alt="GMU"
              width={600}
              height={350}
              className="rounded-lg"
            />
          </motion.div>

          {/* Responsywne przyciski */}
          <motion.div
            className="mt-10 flex flex-col md:flex-row justify-center items-center w-full gap-4"
            variants={buttonVariants}
          >
            <Link href="/#contact-us">
              <button className="px-6 py-3 bg-blue-800 text-white font-poppins font-bold uppercase rounded-md hover:bg-blue-900 transition w-full md:w-auto text-center">
                Contact Us
              </button>
            </Link>
            {/* <Link href="https://bruise.gmu.edu/about/" target="_blank">
              <button className="px-6 py-3 bg-blue-800 text-white font-poppins font-bold uppercase rounded-md hover:bg-blue-900 transition w-full md:w-auto text-center">
                Project website
              </button>
            </Link> */}
          </motion.div>
        </motion.div>
      </motion.section>
    </motion.main>
  );
};

export default GMU;
