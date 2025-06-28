"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useRef } from "react";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  src: string;
  alt: string;
  expertise: string[];
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Alexander Morgan",
    role: "Creative Director",
    bio: "Visionary leader with 15+ years transforming concepts into award-winning brand experiences. Specializes in brand strategy, digital transformation, and experiential design.",
    src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=774&q=80",
    alt: "Creative Director",
    expertise: ["Brand Strategy", "Digital Transformation", "Art Direction"]
  },
  {
    id: 2,
    name: "Jordan Taylor",
    role: "Lead Developer",
    bio: "Full-stack architect with expertise in scalable SaaS solutions. Certified AWS Solutions Architect with a passion for optimizing performance and security.",
    src: "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?auto=format&fit=crop&w=774&q=80",
    alt: "Lead Developer",
    expertise: ["React", "Node.js", "Cloud Architecture", "DevOps"]
  },
  {
    id: 3,
    name: "Riley Chen",
    role: "UX Strategist",
    bio: "User experience expert focused on creating intuitive, human-centered designs. Masters in Cognitive Psychology with a passion for accessibility and inclusive design.",
    src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=772&q=80",
    alt: "UX Strategist",
    expertise: ["User Research", "Prototyping", "Accessibility", "UI Design"]
  },
  {
    id: 4,
    name: "Casey Williams",
    role: "Marketing Director",
    bio: "Data-driven growth strategist with a track record of 3x revenue increases for Fortune 500 clients. Specializes in performance marketing and brand positioning.",
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=1770&q=80",
    alt: "Marketing Director",
    expertise: ["Growth Marketing", "Analytics", "Brand Strategy", "Content"]
  }
];

const Team = () => {
  const [activeMember, setActiveMember] = useState<number | null>(null);
  const [bioVisible, setBioVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMemberClick = (id: number) => {
    if (activeMember === id) {
      setBioVisible(false);
      setTimeout(() => setActiveMember(null), 300);
    } else {
      setActiveMember(id);
      setTimeout(() => setBioVisible(true), 100);
    }
  };

  const closeDetail = () => {
    setBioVisible(false);
    setTimeout(() => setActiveMember(null), 300);
  };

  return (
    <section className="relative py-24 px-5 lg:px-10 bg-gradient-to-b from-white to-gray-50">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-gray-900 to-transparent opacity-5" />
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-900 to-transparent opacity-5" />
      
      <div className="relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 text-black"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            Executive Leadership Team
          </motion.h2>
          <motion.p
            className="max-w-2xl mx-auto text-gray-600 text-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Strategic visionaries driving innovation and excellence across our organization
          </motion.p>
        </div>

        <div 
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: member.id * 0.1 }}
              layout
            >
              <motion.div
                className={`relative rounded-xl overflow-hidden shadow-lg cursor-pointer transition-all duration-300 ${
                  activeMember === member.id 
                    ? "ring-4 ring-blue-500 ring-opacity-50" 
                    : "hover:shadow-2xl"
                }`}
                onClick={() => handleMemberClick(member.id)}
                layout
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={member.src}
                    alt={member.alt}
                    width={500}
                    height={667}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>

                <div className="absolute bottom-0 left-0 w-full p-5 text-white z-10">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-blue-100 font-medium">{member.role}</p>
                </div>

                <div className="absolute top-4 right-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-800"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {activeMember !== null && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeDetail}
            >
              <motion.div
                className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full overflow-hidden relative"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ 
                  scale: bioVisible ? 1 : 0.9, 
                  opacity: bioVisible ? 1 : 0 
                }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                layout
              >
                <button 
                  className="absolute top-4 right-4 z-20 text-gray-500 hover:text-gray-800 transition-colors"
                  onClick={closeDetail}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                
                {teamMembers
                  .filter(member => member.id === activeMember)
                  .map(member => (
                    <div key={member.id} className="flex flex-col md:flex-row">
                      <div className="md:w-2/5 relative">
                        <div className="aspect-[3/4] w-full relative">
                          <Image
                            src={member.src}
                            alt={member.alt}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="p-6 bg-gradient-to-t from-black to-transparent absolute bottom-0 left-0 w-full text-white">
                          <h3 className="text-2xl font-bold">{member.name}</h3>
                          <p className="text-blue-300 font-medium">{member.role}</p>
                        </div>
                      </div>
                      
                      <div className="md:w-3/5 p-8">
                        <div className="flex flex-wrap gap-2 mb-6">
                          {member.expertise.map((skill, index) => (
                            <span 
                              key={index} 
                              className="px-3 py-1 bg-blue-50 rounded-full text-sm font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                        
                        <p className="text-gray-700 mb-6 leading-relaxed">
                          {member.bio}
                        </p>
                        
                        <div className="flex items-center space-x-4">
                          <button className="flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                            Contact
                          </button>
                          
                          <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-800" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                            </svg>
                            Portfolio
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.4 }}
        >
           <motion.button
            whileHover={{ scale: 1.07 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative group overflow-hidden rounded-full px-7 py-3 text-sm font-semibold tracking-wide backdrop-blur-md bg-black hover:ring-2 hover:ring-black/20 cursor-pointer shadow-md"
          >
            <span className="absolute inset-0 scale-0 group-hover:scale-100 transition-transform duration-500 ease-in-out bg-gradient-to-r from-white to-gray-100 rounded-full" />
            <span className="relative z-10 text-white group-hover:text-black transition-colors duration-300">
              Join Our Team
            </span>
          </motion.button>
          
          <p className="mt-6 text-gray-500 max-w-md mx-auto">
            Join our team of innovators and visionaries shaping the future of digital experiences.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;