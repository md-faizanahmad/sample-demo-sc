// src/components/sections/ResultsAchievements.tsx
import Link from "next/link";
import { resultsData } from "@/data/results";
import { Trophy, Star, ChevronRight } from "lucide-react";

export default function ResultsAchievements() {
  const latest = resultsData[0];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header - Compact & Left Aligned for 2026 feel */}
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black text-primary tracking-tighter">
              Academic <span className="text-accent italic">Excellence.</span>
            </h2>
            <p className="mt-4 text-slate-600 font-medium">
              Gaya&apos;s brightest minds consistently setting new benchmarks in{" "}
              {latest.board} examinations.
            </p>
          </div>
          <Link
            href="/results"
            className="group hidden md:flex items-center gap-2 text-sm font-black uppercase tracking-widest text-primary"
          >
            Full Archives{" "}
            <ChevronRight className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform" />
          </Link>
        </header>

        {/* The Achievement Hub Card */}
        <article className="relative overflow-hidden rounded-[2.5rem] bg-slate-50 border border-slate-100 shadow-sm">
          <div className="flex flex-col lg:flex-row">
            {/* Left Column: Big Stats (The Hook) */}
            <div className="bg-primary p-10 md:p-14 text-white lg:w-2/5 flex flex-col justify-between">
              <div>
                <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-[10px] font-black uppercase tracking-widest text-accent mb-6 border border-white/10">
                  Class of {latest.year}
                </span>
                <p className="text-sm font-medium text-white/60 mb-1">
                  Overall Pass Percentage
                </p>
                <div className="text-7xl md:text-8xl font-black tracking-tighter text-accent">
                  {latest.passPercentage}
                </div>
              </div>

              <div className="mt-12 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center text-accent">
                    <Trophy size={20} />
                  </div>
                  <span className="text-sm font-bold uppercase tracking-tight">
                    100% CBSE Compliance
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Details (The Facts) */}
            <div className="p-10 md:p-14 lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Toppers List */}
              <div>
                <h4 className="flex items-center gap-2 text-sm font-black uppercase tracking-widest text-primary mb-6">
                  <Star size={16} className="text-accent fill-accent" />
                  School Toppers
                </h4>
                <ul className="space-y-4">
                  {latest.toppers.map((topper) => (
                    <li
                      key={topper.name}
                      className="group flex justify-between items-end border-b border-slate-200 pb-2"
                    >
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                          Student Name
                        </span>
                        <span className="text-primary font-black group-hover:text-accent transition-colors uppercase text-sm">
                          {topper.name}
                        </span>
                      </div>
                      <span className="text-xl font-black text-primary">
                        {topper.score}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Highlights */}
              <div>
                <h4 className="flex items-center gap-2 text-sm font-black uppercase tracking-widest text-primary mb-6">
                  <ChevronRight size={16} className="text-accent" />
                  Highlights
                </h4>
                <ul className="space-y-4">
                  {latest.achievements.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm text-slate-600 font-medium leading-tight"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0 mt-1.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </article>

        {/* Mobile-Only CTA */}
        <div className="mt-8 flex md:hidden justify-center">
          <Link
            href="/results"
            className="w-full text-center py-4 bg-primary text-white text-xs font-black uppercase tracking-widest rounded-2xl"
          >
            View All Results
          </Link>
        </div>
      </div>
    </section>
  );
}
