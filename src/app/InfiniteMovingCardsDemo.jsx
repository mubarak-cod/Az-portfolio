"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <h1 className="text-4xl md:text-5xl text-center text-white">
        Kind words from{" "}
        <span className="text-[#38bdf8] drop-shadow-[0_0_10px_#38bdf8] animate-pulse">
          Clients
        </span>
      </h1>

      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Azeez completely transformed the way our brand looked. From the logo to the entire identity, everything feels premium now. He really gets it",
    name: "Seyi Adewale, Founder @ Bloom & Brew",
    // title: "A Tale of Two Cities",
  },
  {
    quote:
      "What I love most about working with Azeez is that he doesn’t just design, he listens, understands your vision, and delivers even more than you imagined.",
    name: "Mary Njoku, Creative Lead @ Klay Kidswear",
    // title: "Hamlet",
  },
  {
    quote: "I had this vision for an old-school party night, but it was all in my head. Azeez brought it to life perfectly, vibrant, retro, and exactly the vibe I wanted. Even the guests were asking who designed it!",
    name: "Zita K., Event Planner (united kingdom)",
    // title: "A Dream Within a Dream",
  },
  {
    quote:
      "We hired Azeez to revamp our platform’s UX for international users. His approach was smart, clean, and culturally aware, it improved engagement by over 40%. He’s the type of designer you want on every product.",
    name: "Carlos Mendes, Product Manager @ Streamly  (Spain)",
    // title: "Pride and Prejudice",
  },
  {
    quote:
      "From our first meeting, Azeez understood the soul of our skincare brand. He gave us a look that feels premium and natural, our packaging now competes on shelves globally..",
    name: "Isabelle Moreau, Founder @ Elua Organics 🇫🇷 (France)",
    // title: "Moby-Dick",
  },
];
