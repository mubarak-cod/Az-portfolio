"use client";

import Image from "next/image";

export default function GreenBiteCaseStudy() {
  return (
    <section id="green-bite" className="py-20 px-6 bg-white dark:bg-[#0c0c1d]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-[#0000c9] dark:text-white mb-12">
          Case Study: Green Bite – Food Delivery App UI/UX
        </h2>

        {/* Problem & Goal */}
        <div className="grid md:grid-cols-2 gap-10 mb-12">
          <div>
            <h3 className="text-xl font-semibold mb-2">🧩 The Problem</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Most food delivery apps used by the target audience were clunky, slow, and filled with too many steps.
              Users often abandoned the cart or got frustrated before completing orders. There was also lack of visual trust,
              users couldn’t tell if a vendor was legit.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">🎯 The Goal</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Design a mobile-first food delivery app that’s clean, fast, visually appealing, and easy to navigate,
              with a trustworthy feel that encourages quick decision-making and reorders.
            </p>
          </div>
        </div>

        {/* Role & Tools */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-blue-50 dark:bg-[#1b1b2f] p-6 rounded-lg">
            <h4 className="font-medium text-lg mb-2">💼 My Role</h4>
            <ul className="list-disc text-gray-700 dark:text-gray-300 pl-5 space-y-1 text-sm">
              <li>UX Research</li>
              <li>UI Design</li>
              <li>Visual Direction</li>
              <li>Prototyping</li>
            </ul>
          </div>

          <div className="bg-blue-50 dark:bg-[#1b1b2f] p-6 rounded-lg">
            <h4 className="font-medium text-lg mb-2">🛠 Tools Used</h4>
            <p className="text-gray-700 dark:text-gray-300 text-sm">Figma</p>
          </div>
        </div>

        {/* Process */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-4">🔄 The Process</h3>
          <div className="space-y-4 text-sm text-gray-700 dark:text-gray-300">
            <div>
              <p className="font-medium">1. Research & Competitive Audit</p>
              <p>
                Studied top-performing food apps (like Jumia Food, Glovo, etc.) and analyzed user complaints & reviews.
              </p>
            </div>
            <div>
              <p className="font-medium">2. User Flow Mapping</p>
              <p>Simplified the ordering process into 3 primary actions: Search → Select → Checkout</p>
            </div>
            <div>
              <p className="font-medium">3. Wireframing</p>
              <p>Sketched and tested wireframes to remove distractions and reduce decision fatigue.</p>
            </div>
            <div>
              <p className="font-medium">4. UI Design</p>
              <p>
                Used a modern, fresh color palette and big, readable fonts. Designed strong CTAs, clean layout,
                and trust indicators (vendor ratings, delivery times, etc.).
              </p>
            </div>
            <div>
              <p className="font-medium">5. Prototype & Feedback</p>
              <p>
                Created an interactive prototype and tested with 4 users. All gave positive feedback on how easy
                and smooth the app felt.
              </p>
            </div>
          </div>
        </div>

        {/* Result */}
        <div className="bg-green-100 dark:bg-[#102e1a] border-l-4 border-green-500 p-6 rounded-lg mb-12">
          <h4 className="text-lg font-semibold text-green-800 dark:text-green-300 mb-2">✅ The Result</h4>
          <p className="text-sm text-gray-800 dark:text-gray-100">
            The final UI was clean, intuitive, and mobile-optimized. Users said it made ordering food feel
            “effortless and fast.” It’s now a model for other food delivery concepts I pitch.
          </p>
        </div>

        {/* Visuals */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Image
            src="/images/green-bite-home.png"
            alt="Home screen"
            width={600}
            height={800}
            className="rounded-xl shadow"
          />
          <Image
            src="/images/green-bite-cart.png"
            alt="Cart"
            width={600}
            height={800}
            className="rounded-xl shadow"
          />
          <Image
            src="/images/green-bite-tracking.png"
            alt="Tracking"
            width={600}
            height={800}
            className="rounded-xl shadow"
          />
        </div>
      </div>
    </section>
  );
}
