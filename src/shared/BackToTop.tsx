"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight / 4);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      title="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-24 lg:right-9 md:right-7 right-4 z-40
        flex h-10 w-10 items-center justify-center
        sm:bottom-24 sm:right-5 sm:h-11 sm:w-11
        rounded-full border border-slate-200
        bg-white text-slate-700 shadow-md
        transition-all duration-200
        hover:bg-slate-100 hover:text-primary
        active:scale-95
        focus-visible:outline-none focus-visible:ring-2
        focus-visible:ring-primary focus-visible:ring-offset-2
        ${
          visible
            ? "visible translate-y-0 opacity-100"
            : "invisible translate-y-3 opacity-0 pointer-events-none"
        }`}
    >
      <ArrowUp className="h-5 w-5 sm:h-5 sm:w-5" />
    </button>
  );
}
