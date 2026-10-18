import Link from "next/link";
import { resultsData } from "@/data/results";
import { Trophy, Star, ChevronRight, GraduationCap, Medal } from "lucide-react";

export default function ResultsAchievements() {
  const latest = resultsData[0];

  if (!latest) return null;

  return (
    <section className="bg-white py-10 sm:py-14 lg:py-12">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 sm:mb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-black uppercase tracking-tight text-primary sm:text-4xl lg:text-5xl">
              The <span className="text-accent">Success</span> Report
            </h2>
            <p className="mt-2 text-sm font-medium text-slate-500 sm:text-base">
              Celebrating the milestones of the Class of {latest.year}
            </p>
          </div>

          <Link
            href="/results"
            className="hidden items-center gap-2 border-b border-slate-200 pb-1 text-sm font-bold text-primary transition-colors hover:border-accent hover:text-accent md:flex"
          >
            VIEW ALL YEARS <ChevronRight size={16} />
          </Link>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {/* Academic Record */}
          <div className="relative flex min-w-0 flex-col justify-between overflow-hidden rounded-sm bg-primary p-6 text-white sm:col-span-2 sm:p-8 lg:row-span-2 lg:rounded-sm lg:p-8">
            <div className="relative z-10">
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-accent sm:mb-6 sm:h-12 sm:w-12">
                <GraduationCap size={26} />
              </div>

              <h3 className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-white/60 sm:text-xs">
                Academic Record
              </h3>

              <p className="max-w-md text-2xl font-black leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                Setting New Benchmarks in {latest.board}
              </p>
            </div>

            <div className="relative z-10 mt-8 sm:mt-10 lg:mt-12">
              <div className="text-6xl font-black leading-none tracking-tight text-accent sm:text-7xl lg:text-8xl">
                {latest.passPercentage}
              </div>
              <p className="mt-2 text-xs font-bold uppercase tracking-widest text-white/80 sm:text-sm">
                Total Pass Rate
              </p>
            </div>

            <div className="pointer-events-none absolute -bottom-6 -right-3 hidden select-none text-[12rem] font-black leading-none text-white/4 lg:block">
              %
            </div>
          </div>

          {/* School Toppers */}
          <div className="flex min-w-0 flex-col rounded-sm border border-slate-200 bg-white p-5 shadow-sm sm:p-6 lg:row-span-2 lg:rounded-sm lg:p-7">
            <div className="mb-6 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-500 sm:text-xs">
              <Star size={15} className="fill-accent text-accent" />
              School Toppers
            </div>

            <div className="flex flex-col gap-5">
              {latest.toppers.map((topper) => (
                <div key={topper.name} className="min-w-0">
                  <div className="mb-1 flex items-baseline justify-between gap-2">
                    <span className="text-2xl font-black leading-none text-primary sm:text-3xl">
                      {topper.score}
                    </span>
                    <span className="text-[9px] font-semibold uppercase tracking-wider text-slate-400">
                      Score
                    </span>
                  </div>

                  <p className="wrap-break-word text-sm font-semibold leading-snug text-slate-700">
                    {topper.name}
                  </p>

                  <div className="mt-2.5 h-1.5 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className="h-full rounded-full bg-accent"
                      style={{
                        width: `${Math.min(
                          100,
                          Math.max(0, Number.parseFloat(topper.score)),
                        )}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-6 border-t border-slate-100 pt-4 text-[9px] font-medium uppercase leading-relaxed tracking-wider text-slate-400">
              Official board aggregate records
            </p>
          </div>

          {/* CBSE Verification */}
          <div className="group flex min-w-0 flex-col items-center justify-center rounded-sm bg-accent p-6 text-center text-primary transition-colors duration-300 hover:bg-primary hover:text-white sm:p-7 lg:rounded-sm">
            <Trophy
              size={34}
              strokeWidth={1.7}
              className="mb-4 transition-transform duration-300 group-hover:scale-110"
            />

            <h4 className="text-lg font-black uppercase leading-tight sm:text-xl">
              100% CBSE Verified
            </h4>

            <p className="mt-2 text-[10px] font-semibold uppercase tracking-widest opacity-70">
              Session 2025–26
            </p>
          </div>

          {/* Highlights */}
          <div className="group flex min-w-0 flex-col justify-between rounded-sm border border-slate-100 bg-slate-50 p-6 transition-colors duration-300 hover:border-primary/10 hover:bg-primary sm:p-7 lg:rounded-sm">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-white text-primary shadow-sm"
                >
                  <Medal size={16} />
                </div>
              ))}
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-black uppercase leading-snug text-primary transition-colors group-hover:text-white">
                Top District Distinctions
              </h4>

              <Link
                href="/results"
                className="mt-3 inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wide text-slate-500 transition-colors hover:text-accent group-hover:text-white/70 group-hover:hover:text-accent"
              >
                Explore Archives
                <ChevronRight size={13} />
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Archive Button */}
        <div className="mt-6 md:hidden">
          <Link
            href="/results"
            className="flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-primary/90"
          >
            Full Archive List
            <ChevronRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
