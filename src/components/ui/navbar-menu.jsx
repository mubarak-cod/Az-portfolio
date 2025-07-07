"use client";
import React from "react";
import { motion } from "motion/react";

// This is no longer used, but kept for possible future use
const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive, // No longer used, dropdown removed
  active,    // No longer used
  item,
}) => {
  return (
    <div className="relative">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-default text-black dark:text-white">
        {item}
      </motion.p>
    </div>
  );
};

export const Menu = ({
  setActive, // No longer used
  children
}) => {
  return (
    <nav
      className="relative rounded-full border border-transparent dark:bg-black dark:border-white/[0.2] bg-white shadow-input flex justify-center space-x-4 px-8 py-6">
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src
}) => {
  return (
    <a href={href} className="flex space-x-2">
      <img
        src={src}
        width={140}
        height={70}
        alt={title}
        className="shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </a>
  );
};

export const HoveredLink = ({
  children,
  ...rest
}) => {
  return (
    <a
      {...rest}
      className="text-neutral-700 dark:text-neutral-200">
      {children}
    </a>
  );
};
