"use client";

import React, { useEffect, useState } from "react";
import { SparklesCore } from "../components/ui/sparkles";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { Typewriter } from "@/components/Typewriter";

const rawText = [
  { text: "Hi! I'm Azeez, a " },
  { text: "UI/UX Designer", className: "text-blue-400" },
  {
    text: " passionate about crafting intuitive and visually compelling digital experiences. I specialize in transforming ideas into user-centered interfaces using tools like ",
  },
  { text: "Figma", className: "text-pink-400" },
  { text: ", " },
  { text: "Adobe XD", className: "text-yellow-400" },
  { text: ", and " },
  { text: "Webflow", className: "text-green-400" },
  {
    text: ". From wireframes to high-fidelity prototypes, I help brands create seamless design systems that elevate usability and engagement. Based in Nigeria, I collaborate with teams to bring designs to life with precision and purpose.",
  },
];

export function SparklesPreview() {
  return (
    <div className="relative w-full min-h-screen bg-[#0000C9] flex flex-col items-center justify-start overflow-hidden rounded-md px-4 sm:px-6 md:px-8 pt-28 md:pt-36">
      {/* Sparkles Background */}
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      <h1 className="text-white text-2xl md:text-5xl font-bold text-center">
        <Typewriter />
      </h1>

      <div className="relative z-20 mb-6">
        <DotLottieReact
          src="https://lottie.host/11427381-636e-4aba-9442-8cbdd0b58a34/NC5b883QRf.lottie"
          loop
          autoplay
        />
      </div>

      {/* Text Paragraph Animation */}
      <div className="w-full max-w-4xl px-4 md:px-8 mx-auto text-center relative z-20 text-white text-base sm:text-lg md:text-xl leading-relaxed">
        <TextGenerateEffect words={rawText} />
      </div>

      <div>
       <button className="relative group mt-8 px-6 py-3 rounded-full bg-white text-[#0000C9] font-semibold text-base shadow-xl overflow-hidden ring-1 ring-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
  {/* Hover shine animation */}
  <span className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-[1200ms] ease-in-out blur-sm opacity-70"></span>

  {/* Text and Arrow */}
  <div className="relative z-10 flex items-center gap-2">
    <span>Let’s Get Started</span>
    <svg
      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
      fill="none"
      stroke="#0000C9"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  </div>
</button>


      </div>
    </div>
  );
}
