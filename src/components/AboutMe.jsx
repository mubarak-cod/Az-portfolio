"use client";
import React from "react";

export default function AboutMe() {
  return (
    <section className="w-full bg-[#f9f9ff] dark:bg-[#0c0c1d] py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
        {/* Bio Section */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0000c9] dark:text-white mb-6">
            Who’s Behind These Designs?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed">
            I’m <span className="font-semibold text-[#0000c9] dark:text-white">Azeez Folaranmi</span> — a multi-passionate Nigerian UI/UX, Brand & Graphic Designer
            blending logic and emotion to solve real-world problems with sleek visuals.
            With 3+ years of experience, I help brands become unforgettable.
            <br />
            <br />
            From mobile apps to full visual identities, I create designs that hit different and leave a mark.
          </p>

          {/* Fun Facts - Designer Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
            {[
              {
                icon: "💼",
                title: "3+ Years Crafting UX",
                desc: "Creating intuitive, user-first experiences that drive results.",
              },
              {
                icon: "🚀",
                title: "40+ Projects Shipped",
                desc: "From startups to established brands — built to convert and inspire.",
              },
              {
                icon: "🌍",
                title: "Clients Worldwide",
                desc: "Collaborated remotely with teams in 5+ countries and cultures.",
              },
              {
                icon: "🧠",
                title: "Design Thinking",
                desc: "Blending empathy, strategy, and visual finesse in every solution.",
              },
              {
                icon: "🎯",
                title: "Purpose-Driven Mission",
                desc: "To solve real problems through thoughtful design and storytelling.",
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
                <p className="text-sm text-gray-600 dark:text-gray-400">{fact.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Image with Spinning Border */}
        <div className="flex-shrink-0 relative w-[250px] h-[250px] rounded-full overflow-hidden">
          {/* Animated border */}
          <div className="absolute inset-0 rounded-full border-4 border-[#0000c9] animate-spin-slow" />
          {/* Static image inside */}
          <img
            src="https://i.ibb.co/Wp6kBR5/elon-musk.jpg"
            alt="Profile"
            className="w-full h-full object-cover rounded-full z-10 relative"
          />
        </div>
      </div>
    </section>
  );
}
