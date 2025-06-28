"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Link from "next/link";

const navItems = [
  { name: "About", link: "/" },
  { name: "Projects", link: "/" },
  { name: "News", link: "/" },
  { name: "Careers", link: "/" },
];

const navItemVariants: Variants = {
  hidden: { opacity: 0, y: -10 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.08,
      type: "spring",
      stiffness: 180,
    },
  }),
};

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNavbar(currentScrollY < lastScrollY.current || currentScrollY < 10);
      lastScrollY.current = currentScrollY;
      setScrolled(currentScrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: showNavbar ? 0 : -100 }}
      transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
      className="fixed top-0 w-full z-[10000] bg-white/90 shadow"
    >
      <motion.div
        className="w-full px-5 lg:px-10 mx-auto py-4 flex items-center justify-between relative text-[#1a1a1a]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {/* Logo */}
        <Link href="/">
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-3xl font-serif italic tracking-tight uppercase text-black"
          >
            Infinit
          </motion.div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 text-[15px] font-semibold uppercase tracking-wide items-center">
          {navItems.map((item, index) => (
            <motion.div
              key={index}
              className="relative group cursor-pointer"
              custom={index}
              initial="hidden"
              animate="visible"
              variants={navItemVariants}
              whileHover={{ y: -2 }}
            >
              <Link href={item.link} className="flex items-center gap-1">
                {item.name}
              </Link>
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
            </motion.div>
          ))}

          {/* Premium Contact Button */}
          <motion.button
            whileHover={{ scale: 1.06 }}
            transition={{ type: "spring", stiffness: 250, damping: 15 }}
            className={`relative group overflow-hidden rounded-full px-6 py-2 text-sm font-semibold tracking-wide transition-all duration-300 backdrop-blur-md ${
              scrolled
                ? "bg-white text-black shadow-md"
                : "border border-black text-black"
            }`}
          >
            <span className="absolute inset-0 transform scale-0 group-hover:scale-100 transition-transform duration-500 ease-out bg-black rounded-full" />
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
              Contact
            </span>
          </motion.button>
        </div>

        {/* Mobile Menu Button (Menu/Close) */}
        <div className="md:hidden z-50">
          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="px-5 py-2 border border-black rounded-full text-sm font-semibold tracking-wide text-black hover:bg-black hover:text-white transition-all duration-300"
          >
            {isMobileMenuOpen ? "Close" : "Menu"}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-[100%] left-0 w-full bg-white/90 backdrop-blur-md flex flex-col items-center gap-5 py-10 text-[16px] font-medium z-40 text-black"
            >
              {navItems.map((item, index) => (
                <Link
                  href={item.link}
                  key={index}
                  className="hover:text-black"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <button
                className="mt-2 border px-6 py-2 rounded-full text-black hover:bg-black hover:text-white transition-all duration-300 font-semibold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.nav>
  );
}
