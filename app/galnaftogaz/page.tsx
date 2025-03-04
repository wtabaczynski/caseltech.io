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
            Fraud Detection in Transactional Data of the Fishka Loyalty System.
            Galnaftogaz
          </h1>

          <p className="font-bold underline text-xl mb-2">Sector: Oil & Gas</p>

          <br />
          <br />

          <p>
            The 'Fraud Detection in Transactional Data of the Fishka Loyalty
            System' project leverages machine learning algorithms to identify
            anomalies in sales transactions. Loyalty transactions flagged as
            suspicious undergo additional verification by the operational team
            and are subsequently blocked in the system if confirmed as
            fraudulent. The integration of ML/AI algorithms significantly
            accelerates the analysis process and helps uncover fraud strategies
            used by employees or program participants. This enables proactive
            measures, such as refining program regulations or adjusting business
            rules, to minimize the risk of fraudulent activities.
          </p>
        </motion.div>

        {/* Left side with image and right-aligned button */}
        <motion.div
          className="flex flex-col items-center md:items-start w-full md:w-1/2"
          variants={textVariants}
        >
          <motion.div variants={imageVariants}>
            <Image
              src="/fraud.jpeg"
              alt="galnaftogaz"
              width={600}
              height={350}
              className="rounded-lg"
            />
          </motion.div>
          <motion.div
            className="mt-10 flex justify-end w-full"
            variants={buttonVariants}
          >
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
