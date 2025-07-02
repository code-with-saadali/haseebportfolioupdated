"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

const NewArrivals = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Scroll-based animation
  const width = useTransform(scrollYProgress, [0, 1], ["50%", "120%"]);

  return (
    <section ref={ref} className="relative w-full min-h-screen overflow-hidden">
      {/* Animated Image */}
      <motion.div
        style={{ width }}
        className="absolute top-0 left-1/2 -translate-x-1/2 h-full z-0"
      >
        <Image
          src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/24e74b8b-1787-4846-bc28-e5ba191c9a30.png"
          alt="New Arrivals"
          fill
          className="object-cover"
        />
      </motion.div>

      {/* Center Text */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[80px] max-lg:text-[60px] max-md:text-[40px] uppercase tracking-tight font-extrabold text-white mb-4">
            Wear the best
          </h2>
          <Link href="/contact">
            <button className="bg-white text-black cursor-pointer px-8 py-3 rounded-full font-semibold uppercase tracking-wider border border-transparent hover:border-white hover:bg-transparent hover:text-white transition-all duration-300 shadow-md hover:shadow-lg">
              Reach out
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default NewArrivals;
