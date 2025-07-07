"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Palette,
  PenTool,
  LayoutDashboard,
  Smartphone,
  UserCheck,
  WandSparkles,
  MousePointerClick,
} from "lucide-react";

const services = [
  {
    title: "UI/UX Design",
    icon: <LayoutDashboard className="w-7 h-7" />,
    desc: "Crafting intuitive interfaces that engage and convert across platforms.",
  },
  {
    title: "Brand Identity",
    icon: <Palette className="w-7 h-7" />,
    desc: "Creating memorable brand visuals that speak your brand story.",
  },
  {
    title: "Logo Design",
    icon: <PenTool className="w-7 h-7" />,
    desc: "Designing sleek, scalable logos that stand the test of time.",
  },
  {
    title: "Graphic Design",
    icon: <Smartphone className="w-7 h-7" />,
    desc: "Versatile visuals for web, print, and digital campaigns.",
  },
  {
    title: "Social Media Design",
    icon: <UserCheck className="w-7 h-7" />,
    desc: "Boost your online presence with standout post and banner designs.",
  },
  {
    title: "Design Consultation",
    icon: <WandSparkles className="w-7 h-7" />,
    desc: "Strategic advice to refine your product’s visual direction.",
  },
  {
    title: "Visual Direction",
    icon: <MousePointerClick className="w-7 h-7" />,
    desc: "Leading design systems that ensure visual consistency & impact.",
  },
];

export default function Services() {
  return (
    <section className="w-full bg-[#fefefe] dark:bg-[#0d0d1c] py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0000c9] dark:text-white mb-12">
          What I Do Best
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-[#141426] rounded-xl shadow-md p-6 hover:shadow-xl hover:border-[#0000c9] border border-transparent transition-all duration-300 group"
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="flex items-center justify-center w-14 h-14 bg-[#e7eaff] dark:bg-[#1f1f3f] rounded-full mb-4 mx-auto text-[#0000c9] group-hover:rotate-[6deg] transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-16"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-lg md:text-xl text-gray-800 dark:text-gray-200 mb-4">
            Not sure what you need?
          </p>
          <button className="px-6 py-3 bg-[#0000c9] text-white rounded-full hover:bg-[#1a1aff] transition duration-300 shadow-md hover:shadow-lg">
            Let’s Talk
          </button>
        </motion.div>
      </div>
    </section>
  );
}
