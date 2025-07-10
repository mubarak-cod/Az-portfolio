import Image from "next/image";
import { SparklesPreview } from "./SparklesPreview";
import Navbar from "@/components/Navbar";
// import { BentoGridThirdDemo } from "./BentoGridThirdDemo";
import { InfiniteMovingCardsDemo } from "./InfiniteMovingCardsDemo";
import { CardHoverEffectDemo } from "./CardHoverEffectDemo";
import { SignupFormDemo } from "./SignupFormDemo";
import { FloatingDockDemo } from "./FloatingDockDemo";
import AboutMe from "@/components/AboutMe";
import Services from "@/components/Services";
import GreenBiteCaseStudy from "@/components/GreenBiteCaseStudy";
import BorderMagicButton from "@/components/BorderMagicButton";
import TestimonialSlider from "@/components/TestimonialSlider"

export default function Home() {
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
