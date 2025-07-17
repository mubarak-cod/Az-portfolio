"use client";
import React from "react";
import Image from "next/image";

export default function AboutMe() {
  return (
    <section className="w-full bg-[#f9f9ff] dark:bg-[#0c0c1d] py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">
        {/* Bio Section */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0000c9] dark:text-white mb-6">
            Who’s Behind These Designs?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed">
            I’m{" "}
            <span className="font-semibold text-[#0000c9] dark:text-white">
              Azeez Folaranmi
            </span>
            , a multi-skilled Nigerian designer with a passion for transforming ideas into visually striking realities. With over 3 years of experience spanning{" "}
            <strong className="text-[#0000c9] dark:text-white">
              UI/UX design, graphic design, and brand identity
            </strong>
            , I blend logic and creativity to help brands become unforgettable.
            <br />
            <br />
            From mobile apps to full-scale brand visuals, I create experiences that not only look great — but feel right and function smoothly.
          </p>

          {/* Fun Facts - Designer Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
            {[
              {
                icon: "💼",
                title: "3+ Years of Design Experience",
                desc: "Across UI/UX, brand identity, and visual storytelling.",
              },
              {
                icon: "🚀",
                title: "40+ Projects Shipped",
                desc: "From startups to established brands — built to convert and inspire.",
              },
              {
                icon: "🌍",
                title: "Clients Worldwide",
                desc: "Collaborated with teams across 5+ countries and cultures.",
              },
              {
                icon: "🧠",
                title: "Design Thinking Approach",
                desc: "Empathy + strategy + creativity in every solution.",
              },
              {
                icon: "🎯",
                title: "Purpose-Driven",
                desc: "Designs that solve real problems and tell impactful stories.",
              },
            ].map((fact, idx) => (
              <div
                key={idx}
                className="group relative flex flex-col gap-1 bg-white dark:bg-[#1b1b2f] border border-gray-200 dark:border-gray-700 rounded-xl p-5 shadow-md transition-transform duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl hover:ring-1 hover:ring-blue-500/40"
              >
                <span className="text-3xl">{fact.icon}</span>
                <h3 className="text-md md:text-lg font-semibold text-gray-800 dark:text-white">
                  {fact.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {fact.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Image with Spinning Border */}
        <div className="flex-shrink-0 relative w-[250px] h-[250px] rounded-full overflow-hidden">
          <div className="absolute inset-0 rounded-full border-4 border-[#0000c9] animate-spin-slow" />
          <Image
            src="/images/azeez.jpg"
            alt="Azeez"
            fill
            className="object-cover rounded-full"
          />
        </div>
      </div>
    </section>
  );
}
