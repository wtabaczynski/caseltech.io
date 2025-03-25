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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Acomit = () => {
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
        {/* Lewa strona z obrazkiem */}
        <motion.div
          className="flex flex-col items-center w-full md:w-1/2"
          variants={textVariants}
        >
          <motion.div variants={imageVariants}>
            <Image
              src="/audyt1.jpeg"
              alt="ACOMIT"
              width={600}
              height={350}
              className="rounded-lg"
            />
          </motion.div>
          <motion.div
            className="mt-6 flex justify-center"
            variants={buttonVariants}
          >
            <Link href="/#contact-us">
              <button className="px-6 py-3 bg-blue-800 text-white font-poppins font-bold uppercase rounded-md hover:bg-blue-900 transition">
                Contact Us
              </button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Prawa strona z tekstem */}
        <motion.div
          className="w-full md:w-1/2 text-black text-lg flex flex-col"
          variants={textVariants}
        >
          <h2 className="font-poppins font-bold">
            Audit of the billing system performance and customer settlement
            process
          </h2>
          <div className="h-5"></div>

          <h3 className="font-poppins font-bold underline">
            Sector: Financial
          </h3>
          <div className="h-5"></div>

          <p className="font-poppins">
            Acomit sp. z o.o. together with Caseltech sp. z o.o. is conducting
            an audit of the billing system for BIK S.A. in terms of high system
            availability and operational processes. The audit project covered
            the following areas:
          </p>
          <ul className="list-disc pl-5">
            <li className="font-poppins">
              <strong>IT:</strong> including system architecture, technologies
              used in the billing system, integrations with source and
              accounting systems, infrastructure administration, business
              continuity plan implementation, development of custom reports,
              product roadmap execution, and configuration of new products in
              the product catalog.
            </li>
            <li className="font-poppins">
              <strong>Business:</strong> focusing on processes related to offer
              creation based on contract templates, sales processes.
            </li>
            <li className="font-poppins">
              <strong>Operational:</strong> including invoicing management and
              calculation of settlements for non-standard services.
            </li>
          </ul>
          <p className="font-poppins">
            The auditors presented a report with recommendations for
            improvements in case issues were identified.
          </p>
        </motion.div>
      </motion.section>
    </motion.main>
  );
};

export default Acomit;
