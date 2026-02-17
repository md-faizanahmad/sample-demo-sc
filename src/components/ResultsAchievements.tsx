import Link from "next/link";
import { resultsData } from "@/data/results";
import { Trophy, Star, ChevronRight, GraduationCap, Medal } from "lucide-react";

export default function ResultsAchievements() {
  const latest = resultsData[0];

  return (
    <section className="py-10 md:py-24 ">
      <div className="container mx-auto  md:px-6 max-w-6xl">
        {/* Header - Minimalist */}
        <div className="mb-12 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-4xl md:text-6xl font-black text-primary tracking-tighter uppercase">
              The <span className="text-accent">Success</span> Report
            </h2>
            <p className="text-slate-500 font-medium mt-2">
              Celebrating the milestones of the Class of {latest.year}
            </p>
          </div>
          <Link
            href="/results"
            className="hidden md:flex items-center gap-2 font-bold text-sm text-primary hover:text-accent transition-colors"
          >
            VIEW ALL YEARS <ChevronRight size={16} />
          </Link>
        </div>

        {/* BENTO GRID START */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-175">
          {/* 1. Main Stat Card (Big) */}
          <div className="md:col-span-2 md:row-span-2 bg-primary rounded-[1rem] p-4 md:p-12 text-white flex flex-col justify-between relative overflow-hidden group">
            <div className="relative z-10">
              <div className="h-12 w-12 rounded-2xl bg-white/10 flex items-center justify-center text-accent mb-8">
                <GraduationCap size={28} />
              </div>
              <h3 className="text-2x1 font-bold text-white/60 uppercase tracking-widest mb-2">
                Academic Record
              </h3>
              <p className="text-3xl md:text-5xl font-black leading-tight">
                Setting New Benchmarks in {latest.board}
              </p>
            </div>

            <div className="relative z-10 mt-12 md:mt-0">
              <div className="text-4xl md:text-[12rem] font-black text-accent tracking-tighter leading-none">
                {latest.passPercentage}
              </div>
              <p className="text-xl font-bold uppercase tracking-widest text-white/80">
                Total Pass Rate
              </p>
            </div>

            {/* Subtle background decoration */}
            <div className="absolute -bottom-10 -right-10 text-white/5 font-black text-[20rem] leading-none select-none">
              %
            </div>
          </div>

          {/* 2. Toppers Card (Tall) */}
          <div className="md:col-span-1 md:row-span-2 bg-white rounded-[2.5rem] p-8 border border-slate-200 flex flex-col shadow-sm">
            <div className="flex items-center gap-2 text-primary/40 font-black text-[10px] uppercase tracking-[0.2em] mb-8">
              <Star size={14} className="fill-accent text-accent" /> School
              Toppers
            </div>
            <div className="flex-1 space-y-8">
              {latest.toppers.map((topper) => (
                <div key={topper.name} className="flex flex-col">
                  <span className="text-2xl font-black text-primary">
                    {topper.score}
                  </span>
                  <span className="text-sm font-bold text-slate-700 uppercase">
                    {topper.name}
                  </span>
                  <div className="w-full h-1 bg-slate-100 mt-2 rounded-full overflow-hidden">
                    <div
                      className="bg-accent h-full"
                      style={{ width: topper.score }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-8 text-[10px] text-slate-400 font-bold uppercase italic">
              Ranked by overall aggregate
            </p>
          </div>

          {/* 3. Compliance Card (Wide/Small) */}
          <div className="md:col-span-1 md:row-span-1 bg-accent rounded-[2.5rem] p-8 text-primary flex flex-col justify-center items-center text-center">
            <Trophy size={40} className="mb-4" />
            <h4 className="text-xl font-black uppercase leading-tight">
              100% CBSE Verified
            </h4>
            <p className="text-xs font-bold opacity-70 mt-2">
              Academic Year 2025-26
            </p>
          </div>

          {/* 4. Highlights Card (Small) */}
          <div className="md:col-span-1 md:row-span-1 bg-slate-200 rounded-[2.5rem] p-8 flex flex-col justify-between group hover:bg-primary transition-colors duration-500">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-8 w-8 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center text-[10px] font-bold text-primary"
                >
                  <Medal size={14} />
                </div>
              ))}
            </div>
            <div className="mt-4">
              <h4 className="font-black text-primary group-hover:text-white transition-colors uppercase text-sm leading-tight">
                Multiple District Distinctions
              </h4>
              <p className="text-[10px] text-slate-500 group-hover:text-white/60 font-bold mt-1 uppercase">
                Read More →
              </p>
            </div>
          </div>
        </div>

        {/* Mobile View Archives Button */}
        <div className="mt-6 md:hidden">
          <Link
            href="/results"
            className="w-full block py-4 bg-white border-2 border-primary text-primary text-center rounded-2xl font-black text-xs uppercase tracking-widest"
          >
            View Archive
          </Link>
        </div>
      </div>
    </section>
  );
}
