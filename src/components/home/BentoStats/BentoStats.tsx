// src/components/sections/BentoStats.tsx
import { GraduationCap, Cpu, Users, Award } from "lucide-react";
import { BentoGridManager } from "./BentoGridManager";

export default function BentoStats() {
  const stats = [
    {
      id: "acceptance",
      label: "University Acceptance",
      value: "98%",
      description:
        "Our graduates enter Ivy League and top global tech universities with full scholarships.",
      icon: <GraduationCap />,
      color: "bg-blue-50",
      size: "md:col-span-2 md:row-span-2",
    },
    {
      id: "labs",
      label: "Innovation Tech Labs",
      value: "15",
      description:
        "Equipped with the latest in robotics, AI, and VR learning tools for hands-on research.",
      icon: <Cpu />,
      color: "bg-emerald-50",
      size: "md:col-span-2",
    },
    {
      id: "students",
      label: "Future Architects",
      value: "2.5k+",
      description:
        "A diverse student body representing 45+ nationalities building a global community.",
      icon: <Users />,
      color: "bg-amber-50",
      size: "md:col-span-1",
    },
    {
      id: "awards",
      label: "Global Excellence",
      value: "42",
      description:
        "Winning prestigious awards in STEM, Athletics, and Digital Arts for 5 consecutive years.",
      icon: <Award />,
      color: "bg-purple-50",
      size: "md:col-span-1",
    },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <header className="mb-12">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-primary/60">
            Success Metrics
          </h2>
          <p className="text-4xl font-black tracking-tight text-primary mt-2">
            The Evidence of <span className="text-accent">Growth</span>
          </p>
        </header>

        {/* This Manager handles the 'One at a time' expand logic */}
        <BentoGridManager stats={stats} />
      </div>
    </section>
  );
}
