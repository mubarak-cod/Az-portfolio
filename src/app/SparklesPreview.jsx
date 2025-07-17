"use client";

import React, { useEffect, useState } from "react";
import { SparklesCore } from "../components/ui/sparkles";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Typewriter } from "@/components/Typewriter";

const rawText = [
  { text: "I’m Azeez, a" },
  {
    text: "UI/UX, Brand & Graphic Designer",
    className: "text-white font-semibold",
  },
  { text: " turning ideas into mind-blowing visual realities." },
];

export function SparklesPreview() {
  return (
    <div className="relative w-100vh min-h-screen bg-[#0000C9] flex flex-col items-center justify-start overflow-hidden rounded-md px-4 sm:px-6 md:px-8 pt-28 md:pt-36">
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

      {/* Typewriter Text */}
      <div>
        <Typewriter />
      </div>

      {/* Lottie Animation */}
      <div className="relative z-20 mt-2">
        <DotLottieReact
          src="https://lottie.host/11427381-636e-4aba-9442-8cbdd0b58a34/NC5b883QRf.lottie"
          loop
          autoplay
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </div>

      {/* Text Paragraph Animation */}
      <div className="w-full max-w-4xl px-4 md:px-8 mx-auto text-center relative z-20 text-white text-base sm:text-lg md:text-xl leading-relaxed">
        <TextGenerateEffect words={rawText} />
      </div>

      {/* Buttons */}
      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 z-30">
        {/* Gradient Button */}
        <button
          onClick={() => {
            const section = document.getElementById("about");
            if (section) {
              section.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="relative group px-6 py-3 rounded-full bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] text-white font-semibold text-base shadow-xl overflow-hidden transition-all duration-300 hover:scale-105"
        >
          <span className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-[1200ms] ease-in-out blur-sm opacity-80"></span>
          <div className="relative z-10 flex items-center gap-2">
            <span>Let’s Get Started</span>
            <svg
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="white"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </button>

        {/* Download CV Button */}
       <a
  href="/azeez.pdf"
  download
  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#0000C9] font-semibold text-base shadow-xl transition-all duration-300 hover:scale-105 hover:bg-gray-100"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12v6m0 0l-3-3m3 3l3-3m0-6h-6a2 2 0 00-2 2v2"
    />
  </svg>
  <span>Download my CV</span>
</a>

      </div>
    </div>
  );
}
