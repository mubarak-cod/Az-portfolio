// components/FullPageSparklesBackground.jsx
"use client";
import { SparklesCore } from "@/components/ui/sparkles";

export function FullPageSparklesBackground() {
  return (
    <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
      <SparklesCore
        id="tsparticlesfullpage"
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={100}
        className="w-full h-full"
        particleColor="#FFFFFF"
      />
    </div>
  );
}
