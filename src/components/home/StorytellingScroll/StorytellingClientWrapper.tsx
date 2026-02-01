"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { JourneyStep } from "./StorytellingScroll";

gsap.registerPlugin(ScrollTrigger);

export function StorytellingClientWrapper({
  journey,
}: {
  journey: JourneyStep[];
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Image Reveal Logic
    journey.forEach((_, index) => {
      gsap.fromTo(
        `.img-box-${index}`,
        { clipPath: "inset(20% 20% 20% 20%)", opacity: 0, scale: 0.9 },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          opacity: 1,
          scale: 1,
          scrollTrigger: {
            trigger: `#step-${index}`,
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
        },
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [journey]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-slate-50/30"
    >
      {journey.map((step, index) => (
        <div
          key={step.id}
          className={`img-box-${index} absolute inset-0 flex items-center justify-start px-6 md:px-24 opacity-0`}
        >
          {/* Image Container: Hidden on small mobile, visible from md up */}
          <div className="hidden md:block relative w-full md:w-5/12 h-[55vh] rounded-[3rem] overflow-hidden border-4 border-white shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
            <Image
              src={step.image}
              alt={step.title}
              fill
              sizes="40vw"
              className="object-cover"
            />
            {/* Soft overlay to match school theme */}
            <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply" />
          </div>
        </div>
      ))}
    </div>
  );
}
