import Image from "next/image";
import React from "react";

const Project = () => {
  return (
    <div>
      <div className="lg:flex gap-3 py-20 bg-black px-5 lg:px-10">
        <div className="relative w-full lg:w-[67%] mb-6 lg:mb-0 rounded-xl overflow-hidden">
          <Image
            src="https://ik.imagekit.io/msmrd69gi/IDsdndZOtEmbqFOutdR7kVOPn9c.png?updatedAt=1751097740740"
            alt="Behind the Studio"
            width={1800}
            height={1800}
            className="h-[600px] w-full object-cover"
          />
          <div className="absolute bottom-10 left-6 right-6 lg:left-10 text-white">
            <h1 className="text-3xl lg:text-4xl font-bold mb-2">
              Behind the Studio
            </h1>
            <p className="text-sm lg:text-base max-w-2xl mb-4">
              A dynamic space where imagination knows no bounds and
              experimentation is celebrated.
            </p>
            <button className="bg-white text-black px-5 py-2 rounded-full font-medium hover:bg-gray-100 transition duration-300">
              About Us
            </button>
          </div>
        </div>

        <div className="relative w-full lg:w-[33%] rounded-xl overflow-hidden">
          <Image
            src="https://ik.imagekit.io/msmrd69gi/OYSWpg6nbti5PKdqB0Ha1hnN8.png?updatedAt=1751097740773"
            alt="Behind the Studio"
            width={1800}
            height={1800}
            className="h-[600px] w-full object-cover"
          />
          <div className="absolute bottom-10 left-6 right-6 lg:left-10 text-white">
            <h1 className="text-3xl lg:text-4xl font-bold mb-2">
              Behind the Studio
            </h1>
            <p className="text-sm lg:text-base max-w-2xl mb-4">
              A dynamic space where imagination knows no bounds and
              experimentation is celebrated.
            </p>
            <button className="bg-white text-black px-5 py-2 rounded-full font-medium hover:bg-gray-100 transition duration-300">
              About Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
