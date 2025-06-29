"use client";
import Image from "next/image";
import React, { useState } from "react";

type CaseStudy = {
  id: number;
  category: "Identity" | "Strategy" | "Campaign" | "Digital";
  title: string;
  subtitle?: string;
  imageUrl: string;
  highlightText?: string;
  hasViewProject?: boolean;
};

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    category: "Strategy",
    title: "Cut and Paste",
    subtitle: "View Project",
    imageUrl:
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4dccd8fb-9368-480c-abc7-ab8f47acbd35.png",
  },
  {
    id: 2,
    category: "Digital",
    title: "Filippe Monet",
    subtitle: "View Project",
    imageUrl:
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/381b6061-2624-4bf6-b4ac-5e08d1259fdb.png",
  },
  {
    id: 3,
    category: "Digital",
    title: "Studio B",
    subtitle: "View Project",
    imageUrl:
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/51cd1230-ac9d-4093-8b15-52b6e2f50f0c.png",
    hasViewProject: true,
  },
  {
    id: 4,
    category: "Identity",
    title: "Dash & Dinc",
    subtitle: "View Project",
    imageUrl:
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3e205d8e-9d16-4cc0-a37c-fa254a9e5ea8.png",
  },
  {
    id: 5,
    category: "Campaign",
    title: "Habitude",
    subtitle: "View Project",
    imageUrl:
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9ef59b16-f6db-4921-8a32-919124f3de89.png",
  },
  {
    id: 6,
    category: "Digital",
    title: "Studio 34",
    subtitle: "View Project",
    imageUrl:
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/41d79d7b-2933-44ab-8950-b7bfb5fc4344.png",
  },
  {
    id: 7,
    category: "Identity",
    title: "A14",
    subtitle: "View Project",
    imageUrl:
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4f3471b9-0643-4f17-b75c-8eabb043b133.png",
  },
  {
    id: 8,
    category: "Identity",
    title: "Arrival",
    subtitle: "View Project",
    imageUrl:
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/070fc58d-1ff6-4a9a-8bbf-3f80c787382b.png",
  },
  {
    id: 9,
    category: "Identity",
    title: "Sensa",
    subtitle: "View Project",
    imageUrl:
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/565b133b-2605-49fa-a523-62c77745fa01.png",
  },
  {
    id: 10,
    category: "Campaign",
    title: "Google Deepmind",
    subtitle: "View Project",
    imageUrl:
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d2a26bb3-3ffb-4cf1-bdea-348da9d675ad.png",
  },
  {
    id: 11,
    category: "Campaign",
    title: "Solace Sound",
    subtitle: "View Project",
    imageUrl:
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/15f8c419-d2c0-4f3e-bd63-2df7b2081355.png",
  },
  {
    id: 12,
    category: "Strategy",
    title: "Zara",
    subtitle: "View Project",
    imageUrl:
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/aa5e00b6-ca62-4d6f-b156-430be63338fb.png",
  },
  {
    id: 13,
    category: "Strategy",
    title: "Nike",
    subtitle: "View Project",
    imageUrl:
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8ea5508e-f22b-4361-aaed-abd0b2a7f0bf.png",
  },
  {
    id: 14,
    category: "Identity",
    title: "Carebite",
    subtitle: "View Project",
    imageUrl:
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7ab56d4a-a4e0-4dd6-831d-3c97506a20bb.png",
  },
  {
    id: 15,
    category: "Campaign",
    title: "Balmain",
    subtitle: "View Project",
    imageUrl:
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/94784405-6eb5-46b0-9f21-e6e39cc37de7.png",
  },
  {
    id: 16,
    category: "Strategy",
    title: "Marc Jacobs",
    subtitle: "View Project",
    imageUrl:
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f51672a8-9994-49a3-a98d-19c4581dc1b3.png",
  },
  {
    id: 17,
    category: "Digital",
    title: "Burberry",
    subtitle: "View Project",
    imageUrl:
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3b126eac-3520-4a88-b99c-33ab83cceee3.png",
  },
  {
    id: 18,
    category: "Digital",
    title: "Dior",
    subtitle: "View Project",
    imageUrl:
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/301ceeeb-6c74-41f3-a962-cba966dc7f55.png",
  },
];

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
            <h2 className="text-3xl md:text-4xl tracking-tight">
          CASE STUDIES
        </h2>

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
          <article
            key={cs.id}
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
                <span className="inline-block mt-1 text-sm font-medium bg-white/25 text-white rounded-lg hover:bg-white hover:text-black px-5 py-2 cursor-pointer select-none
                  opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                  {cs.subtitle}
                </span>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Hero;
