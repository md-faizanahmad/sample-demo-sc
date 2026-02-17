// src/components/sections/AcademicJourney.tsx

import { Compass, Lightbulb, Trophy, ArrowRight } from "lucide-react";
import { MotionContainer, MotionItem } from "./AcademicJourneyMotion.client";

const stages = [
  {
    title: "Pre-Primary Education",
    sub: "(Nursery – KG)",
    desc: "Early childhood education focusing on literacy, numeracy, social skills, and curiosity through play-based learning.",
    icon: <Compass className="text-blue-600" size={24} />,
    color: "bg-blue-50",
    border: "border-blue-100",
    stickyTop: "top-24", // Offset for mobile stacking
  },
  {
    title: "Primary School Curriculum",
    sub: "(Class 1 – 5)",
    desc: "Strong academic foundation with CBSE-aligned curriculum, creative learning, and concept clarity.",
    icon: <Lightbulb className="text-amber-600" size={24} />,
    color: "bg-amber-50",
    border: "border-amber-100",
    stickyTop: "top-32", // Slightly more offset for the second card
  },
  {
    title: "Secondary Education",
    sub: "(Class 6 – 10)",
    desc: "Advanced academics, leadership development, and exam-oriented preparation for future success.",
    icon: <Trophy className="text-emerald-600" size={24} />,
    color: "bg-emerald-50",
    border: "border-emerald-100",
    stickyTop: "top-40",
  },
];

export default function AcademicJourney() {
  return (
    <section className="py-16 md:py-24 bg-slate-50/30">
      <div className="container mx-auto px-6">
        {/* HEADER */}
        <header className="text-center mb-14 md:mb-20">
          <span className="text-xs font-bold uppercase tracking-[0.4em] text-blue-600 mb-4 block">
            Academic Structure
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter">
            Complete School Education at{" "}
            <span className="text-accent italic">Hansraj Public School</span>
          </h2>
        </header>

        {/* STAGES CONTAINER */}
        <MotionContainer>
          {/* MOBILE: Column layout with spacing for stacking 
            DESKTOP: Normal 3-column grid
          */}
          <div className="flex flex-col lg:grid lg:grid-cols-3 gap-10 lg:gap-8 relative">
            {/* Decorative line (desktop only) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-slate-200 -z-10" />

            {stages.map((stage, index) => (
              <MotionItem
                key={index}
                // STACKING LOGIC:
                // 'sticky' and 'top-X' triggers the stack on mobile.
                // 'lg:relative' and 'lg:top-0' resets it for desktop grid.
                className={`sticky lg:relative ${stage.stickyTop} lg:top-0 group w-full`}
              >
                <div
                  className={`
                    h-full p-8 md:p-10 rounded-[2.5rem] bg-white border ${stage.border} 
                    shadow-xl lg:shadow-sm group-hover:shadow-2xl transition-all duration-500
                  `}
                >
                  {/* Icon + Step */}
                  <div className="flex justify-between items-start mb-8">
                    <div
                      className={`p-4 rounded-2xl ${stage.color} transition-transform duration-500 group-hover:rotate-12`}
                    >
                      {stage.icon}
                    </div>
                    <span className="text-5xl font-black text-slate-100">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-1">
                    {stage.title}
                  </h3>
                  <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-4">
                    {stage.sub}
                  </p>
                  <p className="text-slate-500 font-medium leading-relaxed mb-6 text-sm md:text-base">
                    {stage.desc}
                  </p>

                  <div className="flex items-center gap-2 text-xs font-bold text-slate-400 group-hover:text-blue-600 transition-colors cursor-pointer">
                    View Curriculum <ArrowRight size={14} />
                  </div>
                </div>

                {/* Arrow connector (Desktop Only) */}
                {index < stages.length - 1 && (
                  <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 bg-white p-2 rounded-full border border-slate-100 shadow-md">
                    <ArrowRight size={16} className="text-slate-300" />
                  </div>
                )}
              </MotionItem>
            ))}
          </div>
        </MotionContainer>
      </div>
    </section>
  );
}
