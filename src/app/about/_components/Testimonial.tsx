"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaPlus } from "react-icons/fa6";;

const faqs = [
  {
    question: "What makes your work stand out?",
    answer:
      "With 4+ years of hands-on experience in web design and development, I combine creative design, clean code, and user-first thinking to build impactful digital experiences.",
  },
  {
    question: "How do you approach client projects?",
    answer:
      "I believe in a transparent, collaborative process — from discovery and design to deployment. Every project is handled with precision, communication, and passion.",
  },
  {
    question: "What kind of clients do you work with?",
    answer:
      "From startups and agencies to personal brands and small businesses, I help anyone looking to elevate their digital presence with professional web solutions.",
  },
];

export default function Testimonial() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="text-black bg-white py-28 px-5 md:px-24">
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Left Side */}
        <div>
          {/* Avatars */}
          <div className="flex items-center space-x-[-8px] pb-5">
            <Image
              alt="Profile 1"
              className="w-16 h-16 rounded-full border-2 border-gray-200"
              height="50"
              src="https://storage.googleapis.com/a1aa/image/7ca2c062-1c35-4fbb-6d93-a0a3fb60d5c1.jpg"
              width="50"
            />
            <Image
              alt="Profile 2"
              className="w-16 h-16 rounded-full border-2 border-gray-200"
              height="40"
              src="https://storage.googleapis.com/a1aa/image/b336fd2d-71f7-4376-87ac-62122cd37194.jpg"
              width="40"
            />
            <Image
              alt="Profile 3"
              className="w-16 h-16 rounded-full border-2 border-gray-200"
              height="40"
              src="https://storage.googleapis.com/a1aa/image/a91da667-954d-499f-1e88-c8dd00ca4d63.jpg"
              width="40"
            />
            <button
              aria-label="Add more people"
              className="w-16 h-16 rounded-full bg-gray-100 text-black flex items-center justify-center text-2xl border border-gray-400 hover:bg-gray-200 transition"
            >
              <FaPlus />
            </button>
          </div>

          {/* Paragraph */}
          <p className="text-gray-700 text-lg leading-relaxed max-w-md font mb-6">
            I&apos;m Saad — a passionate web designer and developer with a strong
            eye for detail. For the past 4+ years, I’ve been crafting stunning,
            responsive websites that not only look great but perform even better.
          </p>
        </div>

        {/* Right Side */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-4xl md:text-[80px] uppercase text-black"
          >
            I believe that <br />
            my work can <span className="font-bold">elevate</span> <br />
            your <span className="font-bold">brand</span> online
          </motion.h2>

          <div className="text-gray-400 text-7xl my-8">✻</div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                onClick={() => toggleFAQ(index)}
                className="cursor-pointer border-b border-gray-300 pb-4"
              >
                <div className="flex justify-between items-center">
                  <h4 className="text-black font-semibold text-lg">
                    {faq.question}
                  </h4>
                  <span className="text-xl">
                    {activeIndex === index ? "-" : "+"}
                  </span>
                </div>

                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={
                    activeIndex === index
                      ? { height: "auto", opacity: 1 }
                      : { height: 0, opacity: 0 }
                  }
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden text-gray-600 mt-2"
                >
                  <p>{faq.answer}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
