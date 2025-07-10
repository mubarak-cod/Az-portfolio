"use client";
import React, { useRef, useEffect } from "react";

const testimonials = [
  {
    quote:
      "Azeez completely transformed the way our brand looked. From the logo to the entire identity, everything feels premium now. He really gets it",
    name: "Seyi Adewale, Founder @ Bloom & Brew",
  },
  {
    quote:
      "What I love most about working with Azeez is that he doesn’t just design, he listens, understands your vision, and delivers even more than you imagined.",
    name: "Mary Njoku, Creative Lead @ Klay Kidswear",
  },
  {
    quote:
      "I had this vision for an old-school party night, but it was all in my head. Azeez brought it to life perfectly, vibrant, retro, and exactly the vibe I wanted. Even the guests were asking who designed it!",
    name: "Zita K., Event Planner (United Kingdom)",
  },
  {
    quote:
      "We hired Azeez to revamp our platform’s UX for international users. His approach was smart, clean, and culturally aware, it improved engagement by over 40%. He’s the type of designer you want on every product.",
    name: "Carlos Mendes, Product Manager @ Streamly (Spain)",
  },
  {
    quote:
      "From our first meeting, Azeez understood the soul of our skincare brand. He gave us a look that feels premium and natural, our packaging now competes on shelves globally.",
    name: "Isabelle Moreau, Founder @ Elua Organics 🇫🇷 (France)",
  },
];

export default function TestimonialSlider() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const interval = setInterval(() => {
      el.scrollBy({ left: 1, behavior: "smooth" });
    }, 20); // adjust speed if needed

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full py-16 px-4 bg-[#f9f9ff] dark:bg-[#0c0c1d]">
      <h1 className="text-4xl md:text-5xl text-center text-white pb-2">
        Kind words from{" "}
        <span className="text-[#38bdf8] drop-shadow-[0_0_10px_#38bdf8] animate-pulse">
          Clients
        </span>
      </h1>

      <div
        className="overflow-x-auto no-scrollbar scroll-smooth"
        ref={scrollRef}
      >
        <div className="flex gap-6 px-2 md:px-8 w-max">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="min-w-[300px] max-w-sm flex-shrink-0 bg-white dark:bg-[#1b1b2f] border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm"
            >
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                “{t.quote}”
              </p>
              <p className="text-sm font-semibold text-[#0000c9] dark:text-white">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
