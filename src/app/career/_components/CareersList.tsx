"use client";

import { useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { MdClose } from "react-icons/md";

type Job = {
  title: string;
  type: string;
  link: string;
  description?: string;
  image: string;
};

type JobGroup = {
  category: string;
  listings: Job[];
};

const jobs: JobGroup[] = [
  {
    category: "Brand",
    listings: [
      {
        title: "Junior Designer",
        type: "Fulltime (London)",
        link: "/",
        image:
          "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Senior Strategist",
        type: "Fulltime (London)",
        link: "/",
        image:
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Senior Designer",
        type: "Freelance (Tokyo)",
        link: "/",
        image:
          "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Design Director",
        type: "Fulltime (Amsterdam)",
        link: "/",
        image:
          "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  {
    category: "Operations",
    listings: [
      {
        title: "Head of HR",
        type: "Fulltime (London)",
        link: "/",
        image:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Team Lead",
        type: "Internship (Tokyo)",
        link: "/",
        image:
          "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Director",
        type: "Internship (London)",
        link: "/",
        image:
          "https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  {
    category: "Marketing",
    listings: [
      {
        title: "Senior Marketer",
        type: "Fulltime (London)",
        link: "/",
        image:
          "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description:
          "We are looking for an experienced Senior Marketer to lead our marketing initiatives. You will be responsible for developing and executing strategies to drive brand growth.",
      },
      {
        title: "Marketing Intern",
        type: "Internship (Tokyo)",
        link: "/",
        image:
          "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description:
          "Join us as a Marketing Intern and get hands-on experience in real campaigns and branding.",
      },
    ],
  },
];

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

const CareersList = () => {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  return (
    <section className="relative px-5 lg:px-10 py-20 bg-white text-black flex">
      {/* Main List */}
      <div className={`w-full ${selectedJob ? "lg:w-3/4" : "w-full"}`}>
        {jobs.map((group) => (
          <div key={group.category} className="mb-16">
            <h3 className="text-sm uppercase text-gray-400 mb-6">
              {group.category}
            </h3>
            <div className="divide-y divide-gray-200">
              {group.listings.map((job, i) => (
                <motion.div
                  key={job.title}
                  className="relative flex items-center justify-between py-4 group cursor-pointer"
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  onClick={() => setSelectedJob(job)}
                >
                  <div>
                    <h4 className="text-lg font-medium">{job.title}</h4>
                    <span className="absolute bottom-0 left-0 h-[1px] w-full bg-gray-300 group-hover:bg-black scale-x-0 group-hover:scale-x-100 transition-all origin-left duration-600" />
                  </div>
                  <p className="text-sm text-gray-500">{job.type}</p>
                  <Link
                    href={job.link}
                    className="text-sm text-gray-500 group-hover:text-black transition duration-300"
                    onClick={(e) => e.preventDefault()}
                  >
                    View role
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Side Drawer */}
      <AnimatePresence>
        {selectedJob && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4 }}
            className="fixed right-0 top-0 w-full max-w-md h-full bg-white shadow-xl px-6 py-8 overflow-y-auto z-[20001]"
          >
            <button
              className="absolute top-5 right-5 text-gray-500 hover:text-black text-3xl transition-colors cursor-pointer"
              onClick={() => setSelectedJob(null)}
            >
              <MdClose/>
            </button>

            {selectedJob.image && (
              <div className="relative h-64 w-full rounded-lg overflow-hidden my-6">
                <Image
                  src={selectedJob.image}
                  alt={selectedJob.title}
                  fill
                  className="object-cover"
                  quality={90}
                />
              </div>
            )}

            <div className="pr-8">
              <h2 className="text-2xl font-bold mb-2">{selectedJob.title}</h2>
              <p className="text-gray-600 mb-6">{selectedJob.type}</p>

              <p className="text-gray-700 mb-6 leading-relaxed">
                {selectedJob.description ??
                  "We are looking for a talented individual to join our team."}
              </p>

              <h3 className="font-semibold mb-3 text-lg">
                Key responsibilities
              </h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-8">
                <li>Develop and implement comprehensive strategies</li>
                <li>Oversee the creation of content and campaigns</li>
                <li>Manage and mentor team members</li>
                <li>Analyze market trends and consumer behavior</li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CareersList;
