import { HoverEffect } from "@/components/ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <h1 className="text-3xl sm:text-4xl md:text-5xl mt-22 font-bold text-center text-neutral-800 dark:text-white tracking-tight mb-6">
        My Creative Arsenal
      </h1>

      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  {
    title: "Green Bite – Food Delivery App UI/UX",
    description:
      "Type: UI/UX Design · Tools: Figma · Year: 2025 — Designed a clean, fast mobile app with smooth navigation and bold CTAs to simplify food ordering.",
    // link: "#",
  },
  {
    title: "Bloom & Brew – Coffee Brand Identity",
    description:
      "Type: Branding, Packaging · Tools: Illustrator, Photoshop · Year: 2025 — Crafted a premium identity that emotionally connects with coffee lovers and boosts shelf appeal.",
    // link: "#",
  },
  {
    title: "Styled by Zee – Fashion Brand Visual Identity",
    description:
      "Type: Logo, Branding · Tools: Illustrator · Year: 2024 — Created a luxurious, feminine brand image that builds trust and stands out.",
    // link: "#",
  },
  {
    title: "MaxReach – Marketing Flyers & Ads",
    description:
      "Type: Graphic Design · Tools: Photoshop · Year: 2024–2025 — Redesigned flyers with bold visuals and CTAs, increasing engagement and conversions.",
    // link: "#",
  },
  {
    title: "Old School RnB Night – Event Visual",
    description:
      "Type: Event Branding / Poster Design · Tools: Photoshop · Year: 2025 — Brought a retro-themed vision to life and visually sold out the event.",
    // link: "#",
  },
  {
    title: "Klay Kidswear – Kids Fashion Brand Identity",
    description:
      "Type: Logo, Social Templates · Tools: Illustrator, Photoshop · Year: 2024 — Designed a playful yet clean identity that resonates with kids and parents.",
    // link: "#",
  },
];
