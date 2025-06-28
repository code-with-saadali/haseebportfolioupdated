"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  {
    src: "https://storage.googleapis.com/a1aa/image/40aaf173-9fb7-4bfa-3d7d-0cb6d4a43baa.jpg",
    alt: "Serum bottle",
    category: "AGENCY",
    title: "CIRCOLOCO",
    link: "/",
  },
  {
    src: "https://storage.googleapis.com/a1aa/image/b90e2d6b-c4e7-43ed-a6ad-77ea9c92f555.jpg",
    alt: "Serum bottle",
    category: "AGENCY",
    title: "CIRCOLOCO",
    link: "/",
  },
  {
    src: "https://storage.googleapis.com/a1aa/image/9f69da7c-f51b-4d53-f9fc-43d29da94fc2.jpg",
    alt: "Serum bottle",
    category: "AGENCY",
    title: "CIRCOLOCO",
    link: "/",
  },
  {
    src: "https://storage.googleapis.com/a1aa/image/594bb61b-4e9c-43a3-6f43-860216e44920.jpg",
    alt: "Bulb",
    category: "MARKETING",
    title: "MONTANA",
    link: "/",
  },
  {
    src: "https://storage.googleapis.com/a1aa/image/b692d38a-73a1-428f-ff83-41818a6284b3.jpg",
    alt: "Bulb",
    category: "MARKETING",
    title: "MONTANA",
    link: "/",
  },
  {
    src: "https://storage.googleapis.com/a1aa/image/d98fa728-9058-44a5-7dfc-f125cd77f11e.jpg",
    alt: "Bulb",
    category: "MARKETING",
    title: "MONTANA",
    link: "/",
  },
];

const cursorVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 20,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: { duration: 0.2 },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 120,
      damping: 14,
    },
  },
};

const INITIAL_COUNT = 4;

const CaseStudiesSection = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    if (hoveredIndex !== null) {
      document.body.style.cursor = "none";
      window.addEventListener("mousemove", moveCursor);
    } else {
      document.body.style.cursor = "default";
      window.removeEventListener("mousemove", moveCursor);
    }

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.body.style.cursor = "default";
    };
  }, [hoveredIndex]);

  const showMore = () => {
    setVisibleCount(items.length);
  };

  return (
    <section className="py-20 px-5 lg:px-10 bg-white">
      <AnimatePresence>
        {hoveredIndex !== null && (
          <motion.div
            className="fixed z-[9999] pointer-events-none"
            variants={cursorVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{
              top: cursorPos.y - 28,
              left: cursorPos.x - 28,
              width: 56,
              height: 56,
            }}
          >
            <div
              className="w-20 h-20 bg-black text-white text-[15px] font-semibold rounded-full flex items-center justify-center shadow-xl ring-4 ring-gray-300 select-none tracking-wide"
              style={{
                fontFamily: "'Poppins', sans-serif",
                textShadow: "0 0 8px rgba(0,0,0,0.2), 0 0 10px rgba(0,0,0,0.1)",
              }}
            >
              Explore
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 p-4 max-md:p-0">
        {items.slice(0, visibleCount).map((item, index) => (
          <Link key={index} href={item.link}>
            <div
              className="relative w-full aspect-square cursor-pointer group overflow-hidden shadow-lg block"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              role="button"
              tabIndex={0}
            >
              <Image
                alt={item.alt}
                src={item.src}
                width={600}
                height={600}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />

              <motion.div
                className="absolute bottom-6 left-6 text-black z-10 select-none"
                initial="hidden"
                animate={hoveredIndex === index ? "visible" : "hidden"}
                variants={textVariants}
              >
                <p className="text-xs font-medium tracking-widest text-white">
                  {item.category}
                </p>
                <p className="text-2xl font-bold leading-tight tracking-wide">
                  {item.title}
                </p>
              </motion.div>
            </div>
          </Link>
        ))}
      </div>

      {visibleCount < items.length && (
        <div className="flex justify-center mt-12">
          <motion.button
            onClick={showMore}
            whileHover={{ scale: 1.07 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative group overflow-hidden rounded-full px-7 py-3 text-sm font-semibold tracking-wide backdrop-blur-md bg-black hover:ring-2 hover:ring-black/20 cursor-pointer shadow-md"
          >
            <span className="absolute inset-0 scale-0 group-hover:scale-100 transition-transform duration-500 ease-in-out bg-gradient-to-r from-white to-gray-100 rounded-full" />
            <span className="relative z-10 text-white group-hover:text-black transition-colors duration-300">
              More Projects
            </span>
          </motion.button>
        </div>
      )}
    </section>
  );
};

export default CaseStudiesSection;
