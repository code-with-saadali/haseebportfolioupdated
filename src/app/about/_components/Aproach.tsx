import Image from "next/image";
import React from "react";

const Aproach = () => {
  return (
    <div className="py-16 px-5 lg:px-10">
      <div className="main border-t pt-6 border-[#D9D9D9]">
        <h1 className="text-gray-500 text-sm pb-5">Aproach</h1>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        <div className="relative w-full mb-6 lg:mb-0 rounded-xl overflow-hidden">
          <Image
            src="https://ik.imagekit.io/msmrd69gi/8Ou7m6Tc0flZz3yhClXwGhA8U.avif?updatedAt=1751107534201"
            alt="Behind the Studio"
            width={1800}
            height={1800}
            className="h-[600px] w-full object-cover"
          />
          <div className="absolute bottom-10 left-6 right-6 text-white">
            <h1 className="text-2xl font-medium mb-2">Research</h1>
            <p className="text-[12px] text-white opacity-80">
              The first step in defining project objectives involves gathering
              information from interviews, audits, and research.​
            </p>
          </div>
        </div>
        <div className="relative w-full rounded-xl overflow-hidden">
          <Image
            src="https://ik.imagekit.io/msmrd69gi/cZar7uW8QyREEsbUFHd4MDhib8.avif?updatedAt=1751107639700"
            alt="Behind the Studio"
            width={1800}
            height={1800}
            className="h-[600px] w-full object-cover"
          />
          <div className="absolute bottom-10 left-6 right-6 text-white">
            <h1 className="text-2xl font-medium mb-2">Experimentation</h1>
            <p className="text-[12px] text-white opacity-80">
              In this phase we will define how your organization wishes to be
              perceived by consumers. What makes it unique?
            </p>
          </div>
        </div>
        <div className="relative w-full rounded-xl overflow-hidden">
          <Image
            src="https://ik.imagekit.io/msmrd69gi/zwEjSOkudBrzraGtRLXcZQ1RQc.avif?updatedAt=1751107832434"
            alt="Behind the Studio"
            width={1800}
            height={1800}
            className="h-[600px] w-full object-cover"
          />
          <div className="absolute bottom-10 left-6 right-6 text-white">
            <h1 className="text-2xl font-medium mb-2">Implementation</h1>
            <p className="text-[12px] text-white opacity-80">
              Strategic design solutions will be explored based on the research,
              with multiple options presented and the chosen one further
              developed.
            </p>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-20 py-28">
        <div className="story1">
        <h1 className="text-[20px] uppercase">our story</h1>
      </div>
      <div className="story2">
        <p className="text-[11px] font-[600]">
            At Infinite, we are more than just a design studio. We are a passionate team of creative minds, dedicated to turning ideas into reality through innovative design solutions. With a focus on collaboration and excellence, we work closely with our clients to understand their unique needs and objectives, crafting bespoke designs that not only meet but exceed expectations. From concept to execution, we leverage our expertise and creativity to deliver impactful and visually stunning outcomes that leave a lasting impression.
        </p>
      </div>
      <div className="story3">
        <p className="text-[11px] font-[600]">Driven by a relentless pursuit of perfection, we thrive on pushing boundaries and challenging the status quo in the world of design. Our approach is rooted in a deep understanding of design principles, coupled with a keen eye for detail and a commitment to excellence. Whether it&apos;s branding, web design, or digital experiences, we bring passion and creativity to every project, ensuring that each design solution not only resonates with our clients&apos; target audience but also achieves results.</p>
      </div>
      </div>
    </div>
  );
};

export default Aproach;
