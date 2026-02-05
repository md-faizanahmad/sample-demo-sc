// src/components/sections/LegacyQuote.tsx
import Image from "next/image";

export default function LegacyQuote() {
  return (
    <section className="container mx-auto px-6 py-12">
      <div className="relative w-full min-h-100 md:min-h-125 rounded-[2.5rem] overflow-hidden flex items-center justify-center shadow-xl border border-slate-100">
        {/* 1. Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/M_Gandhi.jpg" // A respectful, artistic portrait or silhouette
            alt="Mahatma Gandhi"
            fill
            sizes="(max-width: 768px) 100vw, 80vw"
            className="object-cover grayscale brightness-100 transition-transform duration-1000 hover:scale-105"
          />
          {/* Solid Brand Overlay (Scholar Blue at 60% opacity) */}
          <div className="absolute inset-0 bg-primary/60 backdrop-blur-[2px] z-10" />
        </div>

        {/* 2. Content Layer */}
        <div className="relative z-20 max-w-3xl px-8 text-center">
          <div className="flex justify-center mb-6">
            <span className="h-px w-12 bg-accent self-center" />
            <span className="mx-4 text-accent text-[10px] font-black uppercase tracking-[0.4em]">
              Inspiration
            </span>
            <span className="h-px w-12 bg-accent self-center" />
          </div>

          <blockquote className="space-y-6">
            <p className="text-2xl md:text-4xl lg:text-5xl font-black text-white tracking-tighter leading-[1.1]">
              &quot;What is really needed to make democracy function is not
              knowledge of facts, <br />
              <span className="text-accent italic">
                but right education.&quot;
              </span>
            </p>

            <footer className="mt-8">
              <cite className="not-italic">
                <span className="block text-white font-bold uppercase tracking-widest text-xs md:text-sm">
                  — Mahatma Gandhi
                </span>
                <span className="block text-white/50 text-[10px] font-medium mt-1 uppercase tracking-tighter">
                  Father of the Nation
                </span>
              </cite>
            </footer>
          </blockquote>
        </div>

        {/* 3. Decorative Corner (Optional Gaya Identity) */}
        <div className="absolute bottom-8 right-10 hidden md:block z-20">
          <div className="text-white/10 text-6xl font-black select-none uppercase">
            Gaya
          </div>
        </div>
      </div>
    </section>
  );
}
