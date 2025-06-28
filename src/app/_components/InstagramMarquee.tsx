"use client";

import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import Image from "next/image";
import React, { useState, useRef } from "react";
import { FiHeart, FiInstagram } from "react-icons/fi";

const images = [
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600",
  "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600",
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600",
];

const InstagramMarquee = () => {
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [speed, setSpeed] = useState(0.5); 

  useAnimationFrame(() => {
  x.set(x.get() - speed);
});
  return (
    <div className="overflow-hidden py-16 bg-gray-50">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center gap-2 mb-3">
          <FiInstagram className="text-2xl text-gray-600" />
          <p className="text-gray-600 text-sm uppercase tracking-wider">Follow Us</p>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent">
          @INFINITE_OFFICIAL
        </h1>
        <div className="mt-4 flex justify-center">
          <div className="w-16 h-1 bg-indigo-500 rounded-full"></div>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative py-4 cursor-pointer" onMouseEnter={() => setSpeed(0.1)} onMouseLeave={() => setSpeed(0.5)}>
        <motion.div
          className="flex gap-4 md:gap-6 w-max"
          ref={containerRef}
          style={{ x }}
        >
          {[...images, ...images].map((src, idx) => (
            <motion.div
              key={idx}
              className="relative min-w-[240px] md:min-w-[280px] h-[320px] rounded-xl overflow-hidden shadow-lg flex-shrink-0 group"
              whileHover={{ scale: 1.03 }}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Image
                src={src}
                alt={`Professional office ${idx}`}
                width={600}
                height={600}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Hover Heart Icon */}
              {hoveredIndex === idx && (
                <motion.div
                  className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    className="bg-white p-3 rounded-full"
                  >
                    <FiHeart className="text-xl text-pink-500" />
                  </motion.div>
                </motion.div>
              )}

              {/* Instagram Badge */}
              <div className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md">
                <FiInstagram className="text-indigo-600" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Gradient Fades */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
      </div>

      {/* CTA Button */}
      <div className="text-center mt-12">
        <button className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-pink-500 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          Follow on Instagram
        </button>
      </div>
    </div>
  );
};

export default InstagramMarquee;
