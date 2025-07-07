"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration,
        delay: stagger(0.2),
      }
    );
  }, [scope]);

  return (
    <div className={cn("font-bold font-sans", className)}>
      <div className="mt-10">
        <motion.div
          ref={scope}
          className="text-xl font-normal leading-snug tracking-wide text-black dark:text-white font-poppins"
        >
          {words.map((word, idx) => (
            <motion.span
              key={word.text + idx}
              className={cn("opacity-0", word.className)}
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word.text}{" "}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
