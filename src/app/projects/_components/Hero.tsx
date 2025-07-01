"use client";
import { caseStudies } from "@/app/_data/projects";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const categories = ["All", "Identity", "Strategy", "Campaign", "Digital"];

const Hero: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredStudies =
    selectedCategory === "All"
      ? caseStudies
      : caseStudies.filter((cs) => cs.category === selectedCategory);

  return (
    <section className="px-5 lg:px-10 py-28">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
        <div>
          <h2 className="text-3xl md:text-4xl tracking-tight">CASE STUDIES</h2>

          <div className="flex items-center space-x-2 pt-5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-1.5 rounded-xl text-sm border transition-colors duration-300 hover:border-black hover:bg-black hover:text-white cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-black text-white"
                    : "border-gray-300 text-gray-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="ml-0 sm:ml-6 mt-3 sm:mt-0 flex items-center space-x-2 text-gray-500 cursor-pointer">
          {/* View toggle icons placeholder */}
          <button
            aria-label="Grid View"
            title="Grid View"
            className="p-1 rounded hover:bg-gray-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <rect x="3" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="14" width="7" height="7" rx="1" />
              <rect x="3" y="14" width="7" height="7" rx="1" />
            </svg>
          </button>
          <button
            aria-label="List View"
            title="List View"
            className="p-1 rounded hover:bg-gray-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <line x1="4" y1="6" x2="20" y2="6" strokeLinecap="round" />
              <line x1="4" y1="12" x2="20" y2="12" strokeLinecap="round" />
              <line x1="4" y1="18" x2="20" y2="18" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
        role="list"
      >
        {filteredStudies.map((cs) => (
          <Link
            key={cs.id}
            href={`/projects/${cs.slug}`}
            className={`relative group cursor-pointer rounded-lg overflow-hidden shadow-lg ${
              cs.id === 4 || cs.id === 10 || cs.id === 14 ? "sm:col-span-2" : ""
            }`}
            role="listitem"
          >
            <Image
              src={cs.imageUrl}
              alt={`${cs.title} case study image`}
              loading="lazy"
              width={800}
              height={800}
              className="w-full h-[280px] sm:h-60 md:h-72 lg:h-[550px] object-cover transition-transform duration-300 group-hover:scale-105"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f6c7bbca-8e30-43f5-be01-e5c56f85d5d3.png";
              }}
            />
            <div className="absolute -bottom-10 group-hover:bottom-0 duration-600 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent text-white sm:p-4">
              <p className="text-xs uppercase tracking-widest font-semibold opacity-80 mb-1">
                {cs.category}
              </p>
              <h3 className="text-lg font-bold leading-snug">{cs.title}</h3>
              {cs.subtitle && (
                <span
                  className="inline-block mt-1 text-sm font-medium bg-white/25 text-white rounded-lg hover:bg-white hover:text-black px-5 py-2 cursor-pointer select-none
                  opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300"
                >
                  {cs.subtitle}
                </span>
              )}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Hero;
