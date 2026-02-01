// src/components/sections/HeroClientWrapper.tsx
"use client";

import { motion } from "framer-motion";
import { useLayoutEffect, useState } from "react"; // Changed to useLayoutEffect

export function HeroClientWrapper() {
  const [state, setState] = useState<{
    isMounted: boolean;
    particles: { left: string; top: string; delay: number }[];
  }>({
    isMounted: false,
    particles: [],
  });

  useLayoutEffect(() => {
    // Changed from useEffect
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // Generate particles and mark as mounted in one update to avoid cascading renders
    const newParticles = [...Array(6)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: Math.random() * 5,
    }));
    setState({ isMounted: true, particles: newParticles });
  }, []);

  // If not mounted, return null to match server render
  if (!state.isMounted) return null;

  return (
    <div className="absolute inset-0 pointer-events-none z-5">
      {state.particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white rounded-full opacity-70"
          style={{ left: p.left, top: p.top }}
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, delay: p.delay, repeat: Infinity }}
        />
      ))}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-accent/10 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2" />
    </div>
  );
}
