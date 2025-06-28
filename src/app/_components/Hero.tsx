'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const videoSources = [
  'https://ik.imagekit.io/msmrd69gi/857195-hd_1280_720_25fps.mp4?updatedAt=1750944425157',
  'https://ik.imagekit.io/msmrd69gi/854122-hd_1920_1080_25fps.mp4?updatedAt=1750945057698',
  'https://ik.imagekit.io/msmrd69gi/854345-hd_1280_720_30fps.mp4?updatedAt=1750945279720',
];

const contentData = [
  {
    heading: "Fashion That Stands the Test of Time",
    subheading: "We bring fashion that transcends time, blending style with purpose.",
    buttonText: "Explore Timeless",
  },
  {
    heading: "Redefining Urban Elegance",
    subheading: "Bold, brave, and effortlessly stylish — that’s our signature.",
    buttonText: "See the Lookbook",
  },
  {
    heading: "Elegance in Every Step",
    subheading: "Experience luxury and grace in motion with our latest collection.",
    buttonText: "View Collection",
  },
];

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.playbackRate = 0.5;
    video.load();
    video.play();

    const handleEnded = () => {
      setCurrentVideoIndex((prev) => (prev + 1) % videoSources.length);
    };

    video.addEventListener('ended', handleEnded);
    return () => {
      video.removeEventListener('ended', handleEnded);
    };
  }, [currentVideoIndex]);

  const currentContent = contentData[currentVideoIndex];

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        key={currentVideoIndex}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        muted
        playsInline
        autoPlay
      >
        <source src={videoSources[currentVideoIndex]} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-end px-6 sm:px-14 lg:px-24 pb-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentVideoIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="flex flex-col md:flex-row justify-between items-end gap-10"
          >
            {/* Left Text Block */}
            <div className="space-y-3 max-w-xl">
              <p className="text-white/90 font-semibold text-sm sm:text-base drop-shadow">
                EST. 2020
              </p>
              <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold uppercase leading-tight drop-shadow-lg">
                {currentContent.heading}
              </h1>
            </div>

            {/* Right Text Block */}
            <div className="space-y-4 max-w-md">
              <p className="text-white/80 font-light text-lg leading-relaxed drop-shadow-md">
                {currentContent.subheading}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-white text-black text-lg font-semibold px-6 py-3 rounded-full hover:bg-black hover:text-white transition-all duration-300 shadow-lg"
              >
                {currentContent.buttonText}
              </motion.button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* 3 Animated Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-30">
          {videoSources.map((_, i) => (
            <motion.div
              key={i}
              animate={{
                scale: i === currentVideoIndex ? 1.2 : 1,
                backgroundColor: i === currentVideoIndex ? '#fff' : '#ffffff33',
              }}
              transition={{ duration: 0.3 }}
              className="w-3 h-3 rounded-full border border-white"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
