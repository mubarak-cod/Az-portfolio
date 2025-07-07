"use client";
import React from "react";
import { Send } from "lucide-react";

const BorderMagicButton = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-12 px-4 text-center">
      {/* Header Text */}
      <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white mb-2">
        What’s Next?
      </h2>
      <p className="text-lg max-w-xl text-gray-700 dark:text-gray-300 mb-6">
        <strong className="text-indigo-600 dark:text-indigo-400">Get In Touch</strong>
        <br />
        I'm currently open to <span className="font-medium text-blue-600 dark:text-blue-400">full-time</span>,{" "}
        <span className="font-medium text-emerald-600 dark:text-emerald-400">part-time</span>,{" "}
        <span className="font-medium text-pink-600 dark:text-pink-400">contract</span>, or{" "}
        <span className="font-medium text-purple-600 dark:text-purple-400">freelance</span> opportunities.
        Whether you have a project in mind or just want to say hello, I’ll do my best to respond promptly!
      </p>

      {/* Button */}
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=artisticaxis2024@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="relative inline-flex h-11 w-52 sm:w-60 overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
      >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full items-center justify-center gap-2 rounded-md bg-slate-950 px-4 text-sm font-medium text-white backdrop-blur-3xl">
          <Send className="h-4 w-4" />
          Get in touch
        </span>
      </a>
    </div>
  );
};

export default BorderMagicButton;
