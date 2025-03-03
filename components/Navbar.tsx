"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";

const NavLinks = [
  { name: "Home", link: "/#intro" },
  { name: "About us", link: "/about-us" },
  { name: "Loyalty", link: "/loyalty" },
  { name: "Customer succes stories", link: "/#newsroom" },
  { name: "Contact us", link: "/#contact-us" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleLinkClick = (link: string) => {
    if (link.startsWith("#")) {
      const sectionId = link.replace("#", "");
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        setOpen(false);
      }
    } else {
      setOpen(false);
    }
  };

  return (
    <div className="w-full h-[65px] fixed flex flex-row items-center top-0 bg-indigo-800 z-[999] px-10 shadow-md">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <Link href="/#intro" scroll={true} className="h-auto w-auto flex flex-row items-center">
          <span className="font-bold ml-[1px] hidden md:block text-white text-2xl md:text-2xl font-[Poppins]">
            CASELTECH
          </span>
        </Link>
      </div>
      <div>
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen(!open)}
        >
          <motion.div
            className={`w-10 h-1 rounded origin-left ${open ? "bg-white" : "bg-white"}`}
            animate={open ? { rotate: 45, y: 1 } : { rotate: 0, y: 0 }}
          ></motion.div>
          <motion.div
            className={`w-6 h-1 rounded ${open ? "bg-white" : "bg-white"}`}
            animate={open ? { opacity: 0 } : { opacity: 1 }}
          ></motion.div>
          <motion.div
            className={`w-10 h-1 rounded origin-left ${open ? "bg-white" : "bg-white"}`}
            animate={open ? { rotate: -45, y: -1 } : { rotate: 0, y: 0 }}
          ></motion.div>
        </button>

        {open && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: "0%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-full h-screen bg-gray-900 text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
          >
            {NavLinks.map((link) => (
              <motion.div
                key={link.name}
                onClick={() => handleLinkClick(link.link)}
                className="cursor-pointer hover:text-gray-400 transition duration-300"
              >
                <Link href={link.link} onClick={() => setOpen(false)}>{link.name}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
