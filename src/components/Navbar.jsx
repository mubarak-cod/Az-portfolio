"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import {
  Home,
  User,
  FolderKanban,
  FileBarChart,
  MessageSquare,
  Wrench,
  Phone,
  Menu,
  X,
} from "lucide-react";

const navItems = [
  { name: "Home", icon: <Home />, href: "#home" },
  { name: "About", icon: <User />, href: "#about" },
  { name: "Projects", icon: <FolderKanban />, href: "#projects" },
  { name: "Case Studies", icon: <FileBarChart />, href: "#case-studies" },
  { name: "Testimonials", icon: <MessageSquare />, href: "#testimonials" },
  { name: "Services", icon: <Wrench />, href: "#services" },
  { name: "Contact", icon: <Phone />, href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-[#0e0e1a] shadow z-50 px-4 md:px-12 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          {/* Replace below span with an actual logo image/icon if needed */}
          <Image
            src="/logo.jpg"
            alt="Artistic Axis Logo"
            width={32}
            height={32}
             className="object-contain rounded-full"
          />
          <span className="text-2xl font-bold text-[#0000c9]">
            Artistic Axis
          </span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 text-sm font-medium text-gray-800 dark:text-white">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="hover:text-[#0000c9] transition-colors duration-300"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700 dark:text-white"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden flex flex-col items-center gap-6 mt-4 pb-6 text-sm font-medium text-gray-800 dark:text-white"
          >
            {navItems.map((item) => (
              <a
                href={item.href}
                key={item.name}
                className="flex items-center gap-2 hover:text-[#0000c9] transition-colors"
              >
                <span className="w-5 h-5">{item.icon}</span>
                <span className="sr-only">{item.name}</span>
              </a>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}
