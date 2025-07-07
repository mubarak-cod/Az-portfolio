import Image from "next/image";
import { SparklesPreview } from "./SparklesPreview";
import  Navbar  from "@/components/Navbar";
// import { BentoGridThirdDemo } from "./BentoGridThirdDemo";
import { InfiniteMovingCardsDemo } from "./InfiniteMovingCardsDemo";
import { CardHoverEffectDemo } from "./CardHoverEffectDemo";
import { SignupFormDemo } from "./SignupFormDemo";
import { FloatingDockDemo } from "./FloatingDockDemo";
import AboutMe from "@/components/AboutMe";
import CaseStudies from "@/components/CaseStudies";
import Services from "@/components/Services"


export default function Home() {
  return (
    <>
      <Navbar />
      <SparklesPreview />
      <AboutMe />
      {/* <BentoGridThirdDemo /> */}
      <CardHoverEffectDemo />
      <CaseStudies />
      <Services />
      <InfiniteMovingCardsDemo />
      <SignupFormDemo />
      <FloatingDockDemo />
    </>
  );
}
