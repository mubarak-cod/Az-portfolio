"use client";
import React, { useEffect, useState } from "react";

const words = [
  "Designs that Speak.",
  "Brands that Live.",
  "Experiences that Convert.",
];

export const Typewriter = () => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const speed = isDeleting ? 40 : 100;
  const pauseTime = 1500;

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[wordIndex];
      const updatedText = isDeleting
        ? currentWord.slice(0, charIndex - 1)
        : currentWord.slice(0, charIndex + 1);

      setText(updatedText);
      setCharIndex((prev) => (isDeleting ? prev - 1 : prev + 1));

      if (!isDeleting && updatedText === currentWord) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
        setCharIndex(0);
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <h1 className="text-2xl md:text-4xl font-bold text-center text-white">
      <span>{text}</span>
      <span className="blinking-cursor">|</span>
    </h1>
  );
};
