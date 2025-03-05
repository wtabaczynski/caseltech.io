"use client";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";

const TWE = dynamic(() => import("tw-elements"), { ssr: false });

const NewsCards = () => {
  useEffect(() => {
    const init = async () => {
      const { NewsCards, initTWE } = await import("tw-elements");
      initTWE({ NewsCards });
    };
    init();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {[
        {
          img: "/otcf1.jpeg",
          title:
            "Caseltech's Innovative Sales Forecasting Solutions with OTCF SA",
          link: "/forecasting",
          buttonText: "Show more",
        },
        {
          img: "/Galnaftogaz.jpg",
          title:
            "Fraud detection in the transaction data of the loyalty system - Galnaftogaz.",
          link: "/galnaftogaz",
          buttonText: "Show more",
        },
        {
          img: "/healthcare.jpeg",
          title:
            "Revolutionizing Medical Diagnostics with George Mason University",
          link: "/GMU",
          buttonText: "Show more",
        },
        {
          img: "/Skyspark.webp",
          title:
            "SkySpark environment with the Energy Twin extension for smart buildings - Naurotermika Spzoo.",
          link: "/skyspark",
          buttonText: "Show more",
        },
        {
          img: "/audit.jpeg",
          title:
            "Audit of the billing system performance and customer settlement process - BIK SA",
          link: "/Tmatic",
          buttonText: "Show more",
        },
      ].map(({ img, title, link, buttonText = "Learn more" }, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
        >
          <div className="flex flex-col justify-between h-full block rounded-2xl bg-white shadow-secondary-1">
            <div
              className="relative overflow-hidden bg-cover bg-no-repeat h-48 w-full flex items-center justify-center"
              data-twe-ripple-init
              data-twe-ripple-color="light"
            >
              <img className="h-full w-full object-cover" src={img} alt="" />
            </div>
            <div className="p-6 bg-white text-gray-700 flex flex-col flex-grow">
              <h5 className="mb-4 text-xl font-poppins font-medium leading-tight text-center flex-grow flex items-center justify-center">
                {title}
              </h5>
              <div className="flex justify-center mt-auto">
                <Link href={link}>
                  <button className="inline-block rounded border border-black bg-white px-6 py-2 text-xs font-poppins font-medium uppercase leading-normal text-black text-center transition-colors duration-300 hover:bg-indigo-900 hover:text-white hover:border-transparent">
                    {buttonText}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default NewsCards;
