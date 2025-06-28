"use client";

import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      <div className="relative z-10 h-full">
        <Image
          src="https://ik.imagekit.io/msmrd69gi/PlON4uVOzi07JKp1TdKtF9T4CZY.png?updatedAt=1751105699527"
          alt="Hero background image showcasing a person"
          fill
          className="object-cover"
          quality={100}
          priority
        />
      </div>

      <div className="absolute bottom-5 right-5 z-20 w-[300px] max-md:left-[50%] -translate-x-[50%] h-[170px] rounded-xl overflow-hidden shadow-lg">
        <iframe
          className="w-full h-full"
          src="https://ik.imagekit.io/msmrd69gi/all%20website.mp4?updatedAt=1748864437246"
          title="Website introduction video"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>
    </section>
  );
};

export default HeroSection;
