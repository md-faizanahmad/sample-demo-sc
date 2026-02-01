"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function FooterClientWrapper() {
  const containerRef = useRef(null);

  // Parallax effect: Text moves slightly as the user scrolls into the footer
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const xMove = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden select-none"
    >
      {/* MASSIVE WATERMARK ANIMATION */}
      <motion.div
        style={{ x: xMove }}
        className="absolute bottom-0 left-0 whitespace-nowrap leading-none opacity-[0.03] transition-opacity duration-1000"
      >
        <h2 className="text-[15vw] font-black uppercase tracking-tighter text-primary">
          Hansraj Public School
        </h2>
      </motion.div>

      {/* AMBIENT GLOW (Existing) */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.15, 0.5],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-future-glow blur-[120px]"
      />
    </div>
  );
}
