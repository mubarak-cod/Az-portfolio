"use client";
import React from "react";
import { Send } from "lucide-react";

const BorderMagicButton = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center pt-2 pb-30 px-4 text-center">
      {/* Header Text */}
      <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white mb-2">
        What’s Next?
      </h2>
      <p className="text-lg max-w-xl text-gray-700 dark:text-gray-300 mb-6">
        <span className="font-semibold text-neutral-800 dark:text-neutral-100">
          Get In Touch
        </span>
        <br />
        I'm currently open to <span className="font-medium">
          full-time
        </span>, <span className="font-medium">part-time</span>,{" "}
        <span className="font-medium">contract</span>, or{" "}
        <span className="font-medium">freelance</span> opportunities. Whether
        you have a project in mind or just want to say hello, I’ll do my best to
        respond promptly!
      </p>

      {/* Button */}
      <a
       href="mailto:artisticaxis2024@gmail.com?subject=Let's%20Work%20Together&body=Hi%20Azeez%2C%20I%27m%20interested%20in%20working%20with%20you..."
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
