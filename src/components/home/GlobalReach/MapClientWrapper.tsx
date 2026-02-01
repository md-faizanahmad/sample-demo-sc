// src/components/sections/MapClientWrapper.tsx
"use client";

import { motion } from "framer-motion";
import { Location } from "./GlobalReach";

export function MapClientWrapper({ locations }: { locations: Location[] }) {
  return (
    <div className="relative w-full aspect-video md:aspect-21/9">
      {/* The locations are mapped over the relative container */}
      {locations.map((loc) => (
        <div
          key={loc.id}
          className="absolute"
          style={{ left: loc.x, top: loc.y }}
        >
          {/* Heavy Motion Pulse Effect */}
          <motion.div
            initial={false}
            animate={{
              scale: [1, 2.5, 1],
              opacity: [0.6, 0, 0.6],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -inset-6 rounded-full bg-accent/30 blur-md"
          />

          {/* Core Location Point */}
          <div className="relative h-4 w-4 rounded-full bg-accent border-4 border-white shadow-[0_0_20px_var(--color-future-glow)]" />

          {/* Label for Mobile Clarity */}
          <span className="absolute top-6 left-1/2 -translate-x-1/2 text-[9px] font-black text-white uppercase whitespace-nowrap bg-black/40 px-2 py-1 rounded backdrop-blur-sm md:hidden">
            {loc.city}
          </span>
        </div>
      ))}
    </div>
  );
}
