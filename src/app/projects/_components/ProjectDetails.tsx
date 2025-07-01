"use client";

import { CaseStudy } from "@/app/_data/projects";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProjectDetails({ project }: { project: CaseStudy }) {
  return (
    <section className="relative text-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden z-0">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40 z-10" />

        <motion.div
          className="absolute bottom-20 left-6 md:left-20 z-20 max-w-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="uppercase text-sm text-white/80 mb-2 tracking-wide">
            {project.category}
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            {project.title}
          </h1>
          {project.subtitle && (
            <span className="mt-4 inline-block bg-white text-black px-6 py-2 rounded-full text-sm font-medium shadow-md">
              {project.subtitle}
            </span>
          )}
        </motion.div>
      </div>
      <div className="relative z-30 bg-white">
        <div className="max-w-4xl mx-auto py-20 px-5 text-center space-y-6">
          <motion.p
            className="text-lg text-gray-700 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {project.paragraph}
          </motion.p>
        </div>
        <div className="space-y-16 px-5 lg:px-10">
          {[
            "https://ik.imagekit.io/msmrd69gi/qWAwfc05LDZ7FoVugrlS5tNsaDw.avif",
            "https://ik.imagekit.io/msmrd69gi/D3XmTZr3DWpEA87VRfHiQoJ0.avif",
          ].map((src, i) => (
            <GalleryImage key={i} src={src} />
          ))}
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "https://ik.imagekit.io/msmrd69gi/6PwRr1stmtvVieqWosE8Dk1Jz6g.avif",
              "https://ik.imagekit.io/msmrd69gi/7aIt5C65gWrogDgGG1mWPFyzsM.avif",
            ].map((src, i) => (
              <GalleryImage key={i} src={src} />
            ))}
          </div>
          {[
            "https://ik.imagekit.io/msmrd69gi/Kgnndufmj8zZSTwbsY9kAVjL1g.avif",
            "https://ik.imagekit.io/msmrd69gi/5gxjnlL9NtlDpzpHJDeNAEN7DI.avif",
          ].map((src, i) => (
            <GalleryImage key={i} src={src} />
          ))}
        </div>
      </div>
    </section>
  );
}

const GalleryImage = ({ src }: { src: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    viewport={{ once: true, margin: "-100px" }}
    className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-md"
  >
    <Image
      src={src}
      alt="Project image"
      fill
      className="object-cover w-full h-full transition-transform duration-500 hover:scale-[1.02]"
      sizes="(max-width: 768px) 100vw, 80vw"
    />
  </motion.div>
);
