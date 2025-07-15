"use client";

import Image from "next/image";

export default function GreenBiteCaseStudy() {
  return (
    <section id="green-bite" className="py-20 px-6 bg-white dark:bg-[#0c0c1d]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-[#0000c9] dark:text-white mb-12">
          Case Study: Green Bite – Food Delivery App UI/UX
        </h2>
      </div>

              <main className="bg-black text-white min-h-screen py-10 px-4 md:px-20 font-sans">
                  <section className="max-w-4xl mx-auto space-y-10">
                      <div className="border border-gray-700 rounded-lg p-6">
                          <h2 className="text-3xl font-bold text-green-400 mb-4">Introduction</h2>
                          <p className="text-gray-300">
                              Green Bite is a modern food delivery app built for users who want convenience,
                              simplicity, and fast food ordering in one smooth experience. This project allowed
                              me to explore user-centered UI design while crafting a visually appealing and
                              functional app for mobile platforms.
                          </p>
                      </div>
      
                      <div className="border border-gray-700 rounded-lg p-6">
                          <h2 className="text-3xl font-bold text-green-400 mb-4">The Problem</h2>
                          <p className="text-gray-300">
                              Many food delivery apps are either cluttered or outdated. Users struggle to find
                              meals quickly, and checkout flows can feel long or confusing. I designed Green Bite
                              to fix that — with a clean interface, minimal steps, and real-time order tracking.
                          </p>
                      </div>
      
                      <div className="border border-gray-700 rounded-lg p-6">
                          <h2 className="text-3xl font-bold text-green-400 mb-4">The Solution</h2>
                          <p className="text-gray-300">
                              Green Bite solves these issues with intuitive navigation, stunning food visuals,
                              and a frictionless checkout process.
                          </p>
                      </div>
      
                      <div className="border border-gray-700 rounded-lg p-6">
                          <h2 className="text-3xl font-bold text-green-400 mb-4">Mission</h2>
                          <p className="text-gray-300">
                              To deliver a fast, modern, and user-friendly food ordering app that’s easy to use
                              and visually satisfying.
                          </p>
                      </div>
      
<div className="mt-10">
  <h2 className="text-2xl font-semibold text-green-400 mb-4">Design Screens</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
    {[
      "/images/Frame 1.png",
      "/images/Frame 2.png",
      "/images/Frame 3 (1).png",
      "/images/Frame 4.png",
      "/images/Frame 5.png",
      "/images/Frame 6.png",
      "/images/Frame 7 (2).png",
      "/images/Frame 8.png",
      "/images/Frame 9.png",
      "/images/Frame 10.png",
      "/images/cargo.png",
      "/images/mock.png",
    ].map((src, index) => (
      <div
        key={index}
        className="bg-gray-900 p-2 rounded-xl shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg"
      >
        <div className="w-full h-auto rounded-lg overflow-hidden">
          <Image
            src={src}
            alt={`Design ${index + 1}`}
            width={600}
            height={400}
            className="rounded-lg w-full h-auto object-contain"
          />
        </div>
      </div>
    ))}
  </div>
</div>

                  </section>
              </main>
    </section>
  );
}





