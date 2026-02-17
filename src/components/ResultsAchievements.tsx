import Link from "next/link";
import { resultsData } from "@/data/results";
import { Trophy, Star, ChevronRight, GraduationCap, Medal } from "lucide-react";

export default function ResultsAchievements() {
  const latest = resultsData[0];

  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Header - Minimalist */}
        <div className="mb-12 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-4xl lg:text-6xl font-black text-primary tracking-tighter uppercase">
              The <span className="text-accent">Success</span> Report
            </h2>
            <p className="text-slate-500 font-medium mt-2 text-sm md:text-base">
              Celebrating the milestones of the Class of {latest.year}
            </p>
          </div>
          <Link
            href="/results"
            className="hidden md:flex items-center gap-2 font-bold text-sm text-primary hover:text-accent transition-colors border-b-2 border-transparent hover:border-accent pb-1"
          >
            VIEW ALL YEARS <ChevronRight size={16} />
          </Link>
        </div>

        {/* BENTO GRID 
            - Mobile: 1 col (stack)
            - Tablet (md): 2 cols
            - Desktop (lg): 4 cols
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-auto lg:h-175">
          {/* 1. Main Stat Card (Big)
              - Mobile: Full width
              - Tablet: Full width (2 cols)
              - Desktop: Half width (2 cols)
          */}
          <div className="md:col-span-2 lg:row-span-2 bg-primary rounded-[2rem] p-8 md:p-12 text-white flex flex-col justify-between relative overflow-hidden group min-h-100 md:min-h-125 lg:min-h-0">
            <div className="relative z-10">
              <div className="h-12 w-12 rounded-2xl bg-white/10 flex items-center justify-center text-accent mb-8">
                <GraduationCap size={28} />
              </div>
              <h3 className="text-xs md:text-sm font-bold text-white/60 uppercase tracking-[0.2em] mb-4">
                Academic Record
              </h3>
              <p className="text-3xl md:text-5xl font-black leading-tight tracking-tighter">
                Setting New Benchmarks in {latest.board}
              </p>
            </div>

            <div className="relative z-10 mt-12 lg:mt-0">
              <div className="text-7xl md:text-8xl lg:text-[10rem] font-black text-accent tracking-tighter leading-none">
                {latest.passPercentage}
              </div>
              <p className="text-lg md:text-xl font-bold uppercase tracking-widest text-white/80">
                Total Pass Rate
              </p>
            </div>

            {/* Subtle background decoration - hidden on mobile for cleaner look */}
            <div className="hidden md:block absolute -bottom-10 -right-10 text-white/5 font-black text-[15rem] lg:text-[20rem] leading-none select-none">
              %
            </div>
          </div>

          {/* 2. Toppers Card (Tall)
              - Tablet: Row 2, Col 1
              - Desktop: Col 3, Row 1&2
          */}
          <div className="md:col-span-1 lg:row-span-2 bg-white rounded-[2rem] p-8 border border-slate-200 flex flex-col shadow-sm min-h-112.5 lg:min-h-0">
            <div className="flex items-center gap-2 text-primary/40 font-black text-[10px] uppercase tracking-[0.2em] mb-8">
              <Star size={14} className="fill-accent text-accent" /> School
              Toppers
            </div>
            <div className="flex-1 space-y-8">
              {latest.toppers.map((topper) => (
                <div key={topper.name} className="flex flex-col group/item">
                  <div className="flex justify-between items-end mb-1">
                    <span className="text-2xl font-black text-primary leading-none">
                      {topper.score}
                    </span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase">
                      Score
                    </span>
                  </div>
                  <span className="text-sm font-bold text-slate-700 uppercase tracking-tight group-hover/item:text-accent transition-colors">
                    {topper.name}
                  </span>
                  <div className="w-full h-1.5 bg-slate-100 mt-3 rounded-full overflow-hidden">
                    <div
                      className="bg-accent h-full transition-all duration-1000"
                      style={{ width: topper.score }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-8 text-[9px] text-slate-400 font-bold uppercase tracking-wider italic text-center">
              Official board aggregate records
            </p>
          </div>

          {/* 3. Compliance Card (Square/Small) */}
          <div className="md:col-span-1 lg:row-span-1 bg-accent rounded-[2rem] p-8 text-primary flex flex-col justify-center items-center text-center group hover:bg-primary hover:text-white transition-all duration-500">
            <Trophy
              size={40}
              className="mb-4 transition-transform group-hover:scale-110"
            />
            <h4 className="text-xl font-black uppercase leading-tight">
              100% CBSE Verified
            </h4>
            <p className="text-[10px] font-bold opacity-70 mt-2 uppercase tracking-widest">
              Session 2025-26
            </p>
          </div>

          {/* 4. Highlights Card (Small) */}
          <div className="md:col-span-1 lg:row-span-1 bg-slate-100 rounded-[2rem] p-8 flex flex-col justify-between group hover:bg-primary transition-all duration-500 border border-transparent hover:border-white/10">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-9 w-9 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center text-primary shadow-sm"
                >
                  <Medal size={16} />
                </div>
              ))}
            </div>
            <div className="mt-6">
              <h4 className="font-black text-primary group-hover:text-white transition-colors uppercase text-sm leading-tight">
                Top District Distinctions
              </h4>
              <Link
                href="/results"
                className="inline-block text-[10px] text-slate-500 group-hover:text-accent font-bold mt-2 uppercase tracking-tighter"
              >
                Explore Archives →
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile View Archives Button */}
        <div className="mt-8 md:hidden px-2">
          <Link
            href="/results"
            className="w-full flex items-center justify-center gap-2 py-4 bg-primary text-white rounded-2xl font-black text-xs uppercase tracking-widest active:scale-95 transition-transform shadow-lg"
          >
            Full Archive List <ChevronRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
