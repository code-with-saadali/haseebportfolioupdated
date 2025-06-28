import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <section className="px-5 lg:px-10 py-16 min-h-screen bg-white">
      <div className="flex flex-col lg:flex-row gap-20 max-lg:gap-10 items-start">
        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <Image
            src="https://ik.imagekit.io/msmrd69gi/5kkmtIf0TPYac8MJsDrCXhyIb0c.png?updatedAt=1750951146664"
            width={770}
            height={600}
            alt="Creative Journey"
            className="w-full rounded-xl object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 sticky top-20 max-lg:relative">
          <h3 className="text-gray-500 uppercase tracking-widest text-sm mb-2">
            Who are you
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            A Creative Journey
          </h2>
          <p className="text-gray-700 leading-relaxed text-base">
           A dynamic space where imagination knows no bounds and <br /> experimentation is celebrated.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
