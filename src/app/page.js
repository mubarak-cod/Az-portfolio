"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Player } from "@lottiefiles/react-lottie-player";

import { SparklesPreview } from "./SparklesPreview";
import Navbar from "@/components/Navbar";
import { InfiniteMovingCardsDemo } from "./InfiniteMovingCardsDemo";
import { CardHoverEffectDemo } from "./CardHoverEffectDemo";
import { SignupFormDemo } from "./SignupFormDemo";
import { FloatingDockDemo } from "./FloatingDockDemo";
import AboutMe from "@/components/AboutMe";
import Services from "@/components/Services";
import GreenBiteCaseStudy from "@/components/GreenBiteCaseStudy";
import BorderMagicButton from "@/components/BorderMagicButton";
import TestimonialSlider from "@/components/TestimonialSlider";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500); // 2.5s delay
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-[#0000C9]">
        <Player
          autoplay
          loop
          src="/lottie/paper-plane.json"
          style={{ height: "150px", width: "150px" }}
        />
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <section id="home" className="scroll-mt-28">
        <SparklesPreview />
      </section>

      <section id="about" className="scroll-mt-28">
        <AboutMe />
      </section>

      <section id="projects" className="scroll-mt-28">
        <CardHoverEffectDemo />
      </section>

      <section id="case-studies" className="scroll-mt-28">
        <GreenBiteCaseStudy />
      </section>

      <section id="services" className="scroll-mt-28">
        <Services />
      </section>

      <section id="testimonials" className="scroll-mt-28">
        <TestimonialSlider />
      </section>

      <section id="contact" className="scroll-mt-28">
        <BorderMagicButton />
      </section>

      <FloatingDockDemo />
    </>
  );
}
