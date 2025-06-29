import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <div className="px-5 lg:px-10 py-28">
        <div className="text py-5 max-lg:text-center">
            <h1 className="text-3xl lg:text-5xl uppercase">From the journal</h1>
        </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {[
          {
            img: "https://ik.imagekit.io/msmrd69gi/VJzTz4gIcnNHMPPOe2qg7Mnps.jpg?updatedAt=1751096410854",
            title: "How Brownies & Co. connects with their fans",
            desc: "In the ever-evolving landscape of branding, advertising, and digital experiences, we find ourselves at a crossroads between mere creation and profound impact.",
          },
          {
            img: "https://ik.imagekit.io/msmrd69gi/rzbPtCB0tgIXOz1ypbASf10eVU.png?updatedAt=1751096412159",
            title: "Infinite launches Studio B",
            desc: "Celebrate with us as we bask in the glow of recognition for our exceptional designs. At Infinite, excellence is not just a goal – it’s a standard we uphold.",
          },
          {
            img: "https://ik.imagekit.io/msmrd69gi/zoimqmwmPzQCsx9m3c9GwJ1A0XU.png?updatedAt=1751096411867",
            title: "How Brands Can Lead with Purpose and Impact",
            desc: "At Infinite, we believe in the power of design to drive positive change in the world. In this article, we shine a spotlight on our efforts to harness creativity.",
          },
        ].map((project, index) => (
          <div key={index} className="group space-y-3 cursor-pointer">
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src={project.img}
                width={600}
                height={600}
                alt=""
                className="h-[450px] w-full object-cover transition-transform duration-800 ease-in-out group-hover:scale-105"
              />
            </div>
            <div className="text-area">
              <h1 className="text-lg">{project.title}</h1>
              <p className="text-[12px] text-gray-600">{project.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="lg:flex gap-3 py-20">
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

export default Projects;
