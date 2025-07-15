import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconBrandInstagram,
} from "@tabler/icons-react";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Facebook",
      icon: (
        <IconBrandFacebook className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.facebook.com/profile.php?id=61563993220558",
    },

    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/azeezcreative?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },

    {
      title: "WhatsApp",
      icon: (
        <IconBrandWhatsapp className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://wa.me/2348142545699",
    },
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://x.com/artistic_axis?t=pkuwkjOXAdZwHEuTzkCm8A&s=09",
    },
    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.instagram.com/artistic_axis_gd?igsh=MWQ5czhnZXF3OTM0Mg==",
    },
  ];
  return (
    <div className="w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-12 sm:py-16">
      <FloatingDock mobileClassName="translate-y-20 space-y-2  py-4" items={links} />

     <span className="mt-20 sm:mt-4 text-sm text-center text-neutral-500 dark:text-neutral-400">
  © 2025 Artistic Axis. All rights reserved.
</span>

    </div>
  );
}
