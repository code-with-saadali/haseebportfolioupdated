import Image from "next/image";
import React from "react";

const RecentProduct = () => {
  return (
    <section className="bg-black text-white px-5 lg:px-10 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Column */}
        <div className="space-y-6">
          <h2 className="text-sm uppercase tracking-wide">
            Recent Podcast
          </h2>
          <h1 className="text-2xl md:text-3xl font-bold uppercase leading-snug">
            How to create a mood-board <br className="hidden md:block" /> for your project.
          </h1>
          <p className="text-sm text-gray-300 leading-relaxed max-w-xl">
            In this podcast we reveal all the tips and tricks on how to create
            the perfect mood-board for your branding project. From references
            to websites, you will learn everything that you need for your next project.
          </p>
          <button className="mt-4 border border-gray-500 text-sm px-4 py-2 rounded-md hover:border-white hover:text-white transition duration-300">
            Listen on Shopify
          </button>
        </div>

        {/* Right Column */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <Image
            src="https://ik.imagekit.io/msmrd69gi/sS6otXxztZwC8mZ5imYz0tokS90.jpg?updatedAt=1751110086516"
            alt="Podcast Preview"
            width={600}
            height={400}
            className="w-full h-[600px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default RecentProduct;
