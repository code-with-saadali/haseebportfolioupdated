"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <div>
      <div className="lg:flex gap-3 py-20 bg-black px-5 lg:px-10">
        <div className="relative w-full lg:w-[67%] mb-6 lg:mb-0 rounded-xl overflow-hidden">
          <Image
            src="https://ik.imagekit.io/msmrd69gi/IDsdndZOtEmbqFOutdR7kVOPn9c.png?updatedAt=1751097740740"
            alt="Behind the Studio"
            width={1800}
            height={1800}
            className="h-[600px] w-full object-cover"
          />
          <div className="absolute bottom-10 left-6 right-6 lg:left-10 text-white">
            <h1 className="text-3xl lg:text-4xl font-bold mb-2">
              Behind the Studio
            </h1>
            <p className="text-sm lg:text-base max-w-2xl mb-4">
              A dynamic space where imagination knows no bounds and
              experimentation is celebrated.
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.4 }}
            >
              <motion.button
                whileHover={{ scale: 1.07 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative group overflow-hidden rounded-full px-7 py-3 text-sm tracking-wide backdrop-blur-md bg-white hover:ring-2 hover:ring-black/20 cursor-pointer shadow-md"
              >
                <span className="absolute inset-0 scale-0 group-hover:scale-100 transition-transform duration-500 ease-in-out bg-gradient-to-r from-black to-black rounded-full" />
                <span className="relative z-10 text-black group-hover:text-white transition-colors duration-300">
                  About Us
                </span>
              </motion.button>
            </motion.div>
          </div>
        </div>

        <div className="relative w-full lg:w-[33%] rounded-xl overflow-hidden">
          <Image
            src="https://ik.imagekit.io/msmrd69gi/OYSWpg6nbti5PKdqB0Ha1hnN8.png?updatedAt=1751097740773"
            alt="Behind the Studio"
            width={1800}
            height={1800}
            className="h-[600px] w-full object-cover"
          />
          <div className="absolute bottom-10 left-6 right-6 lg:left-10 text-white">
            <h1 className="text-3xl lg:text-4xl font-bold mb-2">
              Behind the Studio
            </h1>
            <p className="text-sm lg:text-base max-w-2xl mb-4">
              A dynamic space where imagination knows no bounds and
              experimentation is celebrated.
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.4 }}
            >
              <motion.button
                whileHover={{ scale: 1.07 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative group overflow-hidden rounded-full px-7 py-3 text-sm tracking-wide backdrop-blur-md bg-white hover:ring-2 hover:ring-black/20 cursor-pointer shadow-md"
              >
                <span className="absolute inset-0 scale-0 group-hover:scale-100 transition-transform duration-500 ease-in-out bg-gradient-to-r from-black to-black rounded-full" />
                <span className="relative z-10 text-black group-hover:text-white transition-colors duration-300">
                  About Us
                </span>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
