"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Home = () => {
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const textOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);
  const textScale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  return (
    <main className="min-h-screen flex flex-col bg-white text-gray-800">
      <section
        ref={heroRef}
        className="w-full h-[550px] relative overflow-hidden flex items-center justify-center bg-black"
      >
        {/* Background Image */}
        <motion.div
          style={{ y: bgY }}
          className="absolute inset-0 z-0 will-change-transform"
        >
          <Image
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1470&q=80"
            alt="Modern workspace"
            fill
            quality={100}
            className="object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        </motion.div>

        {/* Text Overlay */}
        <motion.div
          style={{ y: textY, opacity: textOpacity, scale: textScale }}
          className="relative z-10 px-6 text-center max-w-3xl backdrop-blur-sm bg-white/10 rounded-xl py-10 border border-white/20"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-4">
            Build Your Career With Us
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-xl mx-auto">
            Join our global team of innovators and shape the future together
          </p>
        </motion.div>
      </section>

      <section className="py-24 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            {/* Title */}
            <div className="md:w-1/3">
              <h2 className="text-3xl md:text-4xl font-bold border-l-4 border-black pl-4 py-2">
                CAREERS
              </h2>
            </div>

            {/* Text Blocks */}
            <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-12 text-gray-700">
              <div>
                <p className="mb-5 leading-relaxed">
                  We develop optimal processes to deliver exceptional quality with
                  efficiency. Our teams excel under pressure, consistently surpassing
                  expectations through innovative approaches and disciplined execution.
                </p>
                <p className="leading-relaxed">
                  Our global presence allows us to deploy specialized teams anywhere
                  in the world. With strategic hubs in Amsterdam, New York, San
                  Francisco, and Stockholm, we maintain 24/7 availability and local
                  expertise.
                </p>
              </div>

              <div>
                <div className="mb-10">
                  <h3 className="text-lg font-semibold text-black mb-2">
                  Global Opportunities
                  </h3>
                  <p className="text-sm text-gray-600">
                    Join our international network with relocation support and
                    cross-cultural experiences.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black mb-2">
                   Professional Growth
                  </h3>
                  <p className="text-sm text-gray-600">
                    Continuous learning programs and leadership development tracks
                    to help you grow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
