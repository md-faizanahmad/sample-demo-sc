// src/components/sections/EnrollmentCTA.tsx

import Link from "next/link";
import { MagneticClientWrapper } from "./MagneticClientWrapper";

export default function EnrollmentCTA() {
  return (
    <section className="relative py-32 bg-white overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-linear-to-b from-slate-200 to-transparent" />

      <div className="container relative z-10 mx-auto px-6 text-center">
        <header className="max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-primary/40 mb-6">
            Begin the Journey
          </h2>
          <p className="text-5xl md:text-7xl font-black tracking-tighter text-primary leading-[0.9]">
            Ready to Build <br />
            <span className="text-accent">The Future?</span>
          </p>
          <p className="mt-8 text-lg text-slate-600 font-medium max-w-xl mx-auto">
            Join a global community of innovators, creators, and leaders.
            Admissions for the 2026 academic year are now open.
          </p>
        </header>

        {/* The Magnetic Interaction Layer */}
        <MagneticClientWrapper>
          <button className="group relative px-12 py-6 bg-primary text-white rounded-full font-black text-xl uppercase tracking-widest overflow-hidden shadow-2xl transition-transform active:scale-95">
            <span className=""></span>
            <Link className="relative z-10" href="/admission">
              Enroll Now
            </Link>
            {/* Glow Effect on Hover */}
            <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          </button>
        </MagneticClientWrapper>

        <p className="mt-8 text-xs font-bold text-slate-400 uppercase tracking-widest">
          Limited slots available for international students
        </p>
      </div>
    </section>
  );
}
