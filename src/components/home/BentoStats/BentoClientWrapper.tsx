// src/components/sections/BentoClientWrapper.tsx
"use client";

import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function BentoClientWrapper({
  children,
  className,
  isExpanded,
  onToggle,
  description,
}: any) {
  return (
    <motion.div
      layout
      onClick={onToggle}
      // DESKTOP ANIMATION: Scroll Trigger Entrance
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      // DESKTOP ANIMATION: Hover Scale (Only if NOT mobile)
      whileHover={
        typeof window !== "undefined" && window.innerWidth >= 768
          ? { y: -5, scale: 1.02 }
          : {}
      }
      className={cn(
        "relative p-8 border border-border/50 flex flex-col justify-between overflow-hidden cursor-pointer",
        isExpanded ? "ring-2 ring-accent z-10" : "hover:shadow-xl",
        className,
      )}
    >
      <div className="relative z-10">{children}</div>

      {/* MOBILE ONLY: Expandable Description */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden mt-4 pt-4 border-t border-black/5"
          >
            <p className="text-sm leading-relaxed text-muted-foreground">
              {description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Visual background hint for mobile */}
      <div className="absolute top-4 right-4 text-[10px] font-bold uppercase opacity-20 md:hidden">
        {isExpanded ? "Close" : "Details"}
      </div>
    </motion.div>
  );
}
