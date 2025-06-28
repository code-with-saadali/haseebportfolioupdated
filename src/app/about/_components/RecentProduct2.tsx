"use client";
import Image from "next/image";
import React from "react";

const RecentProduct2 = () => {
  return (
    <section className="px-5 lg:px-10 py-20">
      <div className="flex flex-col lg:flex-row gap-10 items-center">
        {/* Left Image */}
        <div className="w-full lg:w-1/2">
          <Image
            src="https://ik.imagekit.io/msmrd69gi/cfe4SQhxMtcArNzRWNEh6mklwxE.avif?updatedAt=1751110645452"
            width={850}
            height={500}
            alt="Main Visual"
            className="w-full h-auto rounded-xl object-cover shadow-md"
          />
        </div>

        {/* Right Image with Hover Text/Button */}
        <div className="w-full lg:w-1/2 relative cursor-pointer">
          <div className="relative w-fit mx-auto group overflow-hidden">
            {/* Image */}
            <Image
              src="https://ik.imagekit.io/msmrd69gi/kucLa3IlHtGoARwfaCJD5ZgXHMU.avif?updatedAt=1751111097969"
              width={370}
              height={300}
              alt="Overlay Image"
              className="rounded-lg object-cover w-full"
            />

            {/* Gradient Overlay at Bottom */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/60 via-black/30 to-transparent rounded-b-lg z-0 pointer-events-none" />
            <div className="absolute -bottom-5 group-hover:bottom-4 duration-500 left-4 z-10 text-white select-none space-y-2 cursor-pointer">
              <div>
                <p className="text-xs font-medium tracking-widest uppercase">
                  Digital
                </p>
                <p className="text-2xl font-bold leading-tight tracking-wide">
                  Studio 34
                </p>
              </div>

              {/* Hover Button */}
              <div
                className="opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0
                transition-all duration-500 ease-out"
              >
                <button className="px-4 py-1 text-xs bg-white text-black font-medium rounded-md hover:bg-gray-200 transition">
                  Explore More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentProduct2;
