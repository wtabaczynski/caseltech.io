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
            Fraud Detection in Transactional Data of the Fishka Loyalty System.
          </p>
          <p className="text-lg font-bold underline mb-6">Sector: Retail</p>
          <p className="mb-4">
            The 'Fraud Detection in Transactional Data of the Fishka Loyalty System' project leverages machine learning algorithms to identify anomalies in sales transactions.
          </p>
          <p className="mb-4">
            Loyalty transactions flagged as suspicious undergo additional verification by the operational team and are subsequently blocked in the system if confirmed as fraudulent.
          </p>
          <p>
            The integration of ML/AI algorithms significantly accelerates the analysis process and helps uncover fraud strategies used by employees or program participants. This enables proactive measures, such as refining program regulations or adjusting business rules, to minimize the risk of fraudulent activities.
          </p>
        </motion.div>

        {/* Prawa strona z obrazkiem i przyciskami */}
        <motion.div
          className="flex flex-col items-center w-full md:w-1/2"
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
            className="mt-10 flex flex-col md:flex-row justify-center items-center w-full gap-4"
            variants={buttonVariants}
          >
            <Link href="/#contact-us">
              <button className="px-6 py-3 bg-blue-800 text-white font-poppins font-bold uppercase rounded-md hover:bg-blue-900 transition w-full md:w-auto text-center">
                Contact Us
              </button>
            </Link>
            {/* <Link href="https://example.com/galnaftogaz-project" target="_blank">
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

export default galnaftogaz;
