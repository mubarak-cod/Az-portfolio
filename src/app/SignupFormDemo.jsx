"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";

export function SignupFormDemo() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div className="shadow-input mx-auto w-full max-w-xl px-4 md:px-6 rounded-none md:rounded-2xl md:py-2 py-6">
      <div className="max-w-2xl mx-auto text-center px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Get In Touch
        </h1>
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          I'm currently open to{" "}
          <span className="font-semibold text-indigo-600 dark:text-indigo-400">
            full-time
          </span>
          ,{" "}
          <span className="font-semibold text-blue-600 dark:text-blue-400">
            part-time
          </span>
          ,{" "}
          <span className="font-semibold text-emerald-600 dark:text-emerald-400">
            contract
          </span>
          , or{" "}
          <span className="font-semibold text-pink-600 dark:text-pink-400">
            freelance
          </span>{" "}
          opportunities.
          <br className="hidden sm:block" />
          Whether you have a project in mind or just want to connect, feel free
          to reach out — I’ll respond as soon as possible.
        </p>
      </div>

      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row gap-4">
          <LabelInputContainer>
            <Input id="firstname" placeholder="First Name" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Input id="lastname" placeholder="Last-Name" type="text" />
          </LabelInputContainer>
        </div>

        <LabelInputContainer>
          <Input id="email" placeholder="Your Email" type="email" />
        </LabelInputContainer>

        <LabelInputContainer>
          <textarea
            id="message"
            placeholder="Your Message"
            className="w-full rounded-md border border-neutral-200 bg-white px-4 py-2 text-sm text-black placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-black dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:placeholder:text-neutral-600 dark:focus:ring-white"
            rows={4}
          />
        </LabelInputContainer>

        <button
          className="group/btn relative block h-11 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          type="submit"
        >
          Send Message &rarr;
          <BottomGradient />
        </button>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
