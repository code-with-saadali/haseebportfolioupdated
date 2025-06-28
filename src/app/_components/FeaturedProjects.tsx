"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { FiArrowRight, FiArrowLeft, FiX, FiArrowUpRight } from "react-icons/fi";

const projects = [
  {
    title: "Editorial Fashion Shoot",
    category: "Editorial",
    img: "https://ik.imagekit.io/msmrd69gi/a6yHdu1OMuJ0monBsX1wo7Qo5pM.png?updatedAt=1750947953183",
    description:
      "Capturing the essence of modern elegance through carefully curated editorial compositions",
  },
  {
    title: "Classic Studio Series",
    category: "Studio",
    img: "https://ik.imagekit.io/msmrd69gi/2006-glennon-wagner-charleston-backdrop-high-fashion-editorial-warmth-00006_web.jpg?updatedAt=1750947987875",
    description:
      "Timeless studio portraits that redefine classic beauty standards",
  },
  {
    title: "Backyard Editorial",
    category: "Outdoor",
    img: "https://ik.imagekit.io/msmrd69gi/lGIYxhkXPh8XifcxiGPmeA96Aj8.png?updatedAt=1750947952333",
    description:
      "Natural light photography blending urban environments with organic beauty",
  },
];

export default function FeaturedProjects() {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeProject !== null) {
        if (e.key === "Escape") {
          setActiveProject(null);
        } else if (e.key === "ArrowRight") {
          setActiveProject((prev) => (prev! + 1) % projects.length);
        } else if (e.key === "ArrowLeft") {
          setActiveProject(
            (prev) => (prev! - 1 + projects.length) % projects.length
          );
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeProject]);

  return (
    <section
      ref={sectionRef}
      className="w-full px-5 lg:px-10 py-24 bg-white relative overflow-hidden"
      id="projects"
    >
      <motion.div
        className="text-center mb-16 px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-3">
          Creative Portfolio
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
          Featured Projects
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600">
          A curated selection of our most impactful visual narratives,
          showcasing the intersection of artistry and technical excellence.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative w-full h-[550px] overflow-hidden rounded-2xl group cursor-pointer"
            whileHover="hover"
            initial="initial"
            animate="initial"
            onClick={() => setActiveProject(index)}
          >
            <Image
              src={project.img}
              alt={project.title}
              fill
              className="object-cover transition-all duration-700 group-hover:scale-105"
              quality={90}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent rounded-2xl" />

            {/* Content */}
            <div className="absolute -bottom-20 group-hover:bottom-0 duration-700 left-0 right-0 p-6 text-white z-10">
              <motion.div
                className="space-y-2"
                variants={{
                  initial: { y: 0, opacity: 1 },
                  hover: { y: -10, opacity: 1 },
                }}
                transition={{ duration: 0.4 }}
              >
                <p className="text-xs tracking-widest opacity-80">
                  {project.category}
                </p>
                <h3 className="text-xl md:text-2xl font-bold">
                  {project.title}
                </h3>
              </motion.div>

              <motion.div
                className="mt-4"
                variants={{
                  initial: { y: 20, opacity: 0 },
                  hover: { y: 0, opacity: 1 },
                }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <p className="text-sm opacity-80 mb-3 line-clamp-2">
                  {project.description}
                </p>
                <button className="flex items-center gap-2 text-sm font-medium hover:underline transition-all">
                  <span>View Project</span>
                  <FiArrowUpRight />
                </button>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeProject !== null && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => {
              if (e.target === e.currentTarget) setActiveProject(null);
            }}
          >
            <motion.div
              className="bg-white w-full h-[60vh] rounded-2xl mx-10 max-lg:mx-5 overflow-hidden flex flex-col md:flex-row"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              {/* Image */}
              <div className="md:w-1/2 h-[400px] md:h-auto relative">
                <Image
                  src={projects[activeProject].img}
                  alt={projects[activeProject].title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="md:w-1/2 p-6 md:p-10 flex flex-col">
                <div className="mb-6">
                  <p className="text-sm uppercase tracking-widest text-gray-500">
                    Featured Project
                  </p>
                  <h3 className="text-3xl font-bold text-gray-900 mt-2">
                    {projects[activeProject].title}
                  </h3>
                  <p className="text-gray-600 mt-4">
                    {projects[activeProject].description}
                  </p>
                </div>

                <div className="mt-auto pt-6 border-t border-gray-200 flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-500">Category</p>
                    <p className="font-medium">
                      {projects[activeProject].category}
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <button
                      className="p-2 rounded-full hover:bg-gray-100"
                      onClick={() =>
                        setActiveProject(
                          (activeProject - 1 + projects.length) % projects.length
                        )
                      }
                    >
                      <FiArrowLeft className="w-5 h-5" />
                    </button>
                    <button
                      className="p-2 rounded-full hover:bg-gray-100"
                      onClick={() =>
                        setActiveProject((activeProject + 1) % projects.length)
                      }
                    >
                      <FiArrowRight className="w-5 h-5" />
                    </button>
                    <button
                      className="p-2 rounded-full hover:bg-gray-100"
                      onClick={() => setActiveProject(null)}
                    >
                      <FiX className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* View All Button */}
      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <button className="px-8 py-3.5 border-2 border-black text-black font-medium rounded-full hover:bg-black hover:text-white transition-all duration-300 flex items-center gap-2 mx-auto">
          View All Projects
          <FiArrowRight />
        </button>
      </motion.div>
    </section>
  );
}
