// src/components/sections/BentoGridManager.tsx
"use client";

import { useState } from "react";
import { BentoClientWrapper } from "./BentoClientWrapper";

interface stats {
  id: string;
  label: string;
  value: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  size: string;
}

export function BentoGridManager({ stats }: { stats: stats[] }) {
  const [activeId, setActiveId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    // Only allow expanding on mobile screens (less than 768px)
    if (window.innerWidth >= 768) return;
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-fr">
      {stats.map((stat) => (
        <BentoClientWrapper
          key={stat.id}
          isExpanded={activeId === stat.id}
          onToggle={() => toggleExpand(stat.id)}
          className={`${stat.color} ${stat.size}`}
          description={stat.description}
        >
          <div className="p-3 rounded-xl bg-white/50 w-fit mb-6">
            {stat.icon}
          </div>
          <h3 className="text-5xl font-black tracking-tighter">{stat.value}</h3>
          <p className="text-xl font-bold tracking-tight text-primary/80">
            {stat.label}
          </p>
        </BentoClientWrapper>
      ))}
    </div>
  );
}
