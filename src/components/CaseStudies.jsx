"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const caseStudies = [
  {
    title: "Fintech App UI Revamp",
    problem: "Users struggled with complex navigation and poor onboarding.",
    goal: "Redesign a seamless, user-friendly interface for mobile and web.",
    role: "UI/UX Designer & Research Lead",
    process:
      "Conducted user interviews, created personas, sketched wireframes, and iterated with feedback.",
    result: "35% increase in user retention and 25% rise in task completion.",
    imageBefore: "/images/case1-before.png",
    imageAfter: "/images/case1-after.png",
  },
  {
    title: "Health Tracker Branding & UI",
    problem: "Lacked a visual identity and intuitive flow.",
    goal: "Develop a brand + UI system that resonates with young users.",
    role: "Brand Strategist & UI Designer",
    process:
      "Built moodboards, created style tiles, and designed responsive layouts.",
    result: "Received 5-star ratings from early adopters in beta testing.",
    imageBefore: "/images/case2-before.png",
    imageAfter: "/images/case2-after.png",
  },
];

export default function CaseStudies() {
  return (
    <section className="w-full bg-white dark:bg-[#0f0f1b] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0000c9] dark:text-white mb-16">
          Who Said Brains Can’t Be Beautiful?
        </h2>

        {caseStudies.map((study, idx) => (
          <motion.div
            key={idx}
            className="mb-24 space-y-6 md:space-y-0 md:flex md:gap-12 items-start"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Left Visuals */}
            <div className="flex-1 space-y-4">
              <div className="relative w-full h-[250px] sm:h-[320px] rounded-lg overflow-hidden shadow-lg border">
                <Image
                  src={study.imageBefore}
                  alt="Before"
                  fill
                  className="object-cover"
                />
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                  Before
                </span>
              </div>
              <div className="relative w-full h-[250px] sm:h-[320px] rounded-lg overflow-hidden shadow-lg border">
                <Image
                  src={study.imageAfter}
                  alt="After"
                  fill
                  className="object-cover"
                />
                <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                  After
                </span>
              </div>
            </div>

            {/* Right Story */}
            <div className="flex-1 text-gray-800 dark:text-gray-300 space-y-3">
              <h3 className="text-2xl font-semibold text-[#0000c9] dark:text-white">
                {study.title}
              </h3>
              <p><strong>The Problem:</strong> {study.problem}</p>
              <p><strong>The Goal:</strong> {study.goal}</p>
              <p><strong>My Role:</strong> {study.role}</p>
              <p><strong>My Process:</strong> {study.process}</p>
              <p><strong>The Result:</strong> {study.result}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
