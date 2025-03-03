"use client"
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const buttonVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const galnaftogaz = () => {
  return (
    <motion.main 
      className="flex flex-col items-center justify-center min-h-screen bg-white text-black p-10"
      initial="hidden"
      animate="visible"
    >
      <motion.section 
        className="max-w-6xl flex flex-col md:flex-row items-center gap-10"
        initial="hidden"
        animate="visible"
        variants={textVariants}
      >
        {/* Right side with text and heading */}
        <motion.div 
          className="w-full md:w-1/2 text-black text-lg"
          variants={textVariants}
        >
          <h1 className="text-4xl font-bold mb-6 text-black">
            Fraud detection for Galnaftogaz
          </h1>

          <p className="font-bold underline text-xl mb-2">Sector: Retail</p>

          <br />
          <br />

          <p>
          Implementation of a fraud detection project for transactional datasets from the Fishka loyalty system.
          The project utilized both supervised and unsupervised machine learning algorithms to detect anomalies in sales transactions.
          Sales transactions flagged as anomalies, when analyzed by the operational team, help identify loopholes in promotional rules or regulations that fraudsters exploit for financial gain.
          </p>
        </motion.div>

        {/* Left side with image and right-aligned button */}
        <motion.div 
          className="flex flex-col items-center md:items-start w-full md:w-1/2"
          variants={textVariants}
        >
          <motion.div variants={imageVariants}>
            <Image src="/fraud.jpeg" alt="galnaftogaz" width={600} height={350} className="rounded-lg" />
          </motion.div>
          <motion.div className="mt-10 flex justify-end w-full" variants={buttonVariants}>
            <Link href="/#contact-us">
              <button className="px-6 py-3 bg-blue-800 text-white font-bold uppercase rounded-md hover:bg-blue-900 transition">
                Contact Us
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>
    </motion.main>
  );
};

export default galnaftogaz;
