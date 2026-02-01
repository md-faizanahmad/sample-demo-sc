"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { Users, GraduationCap, Award, BookOpen } from "lucide-react";

function Counter({
  value,
  direction = "up",
}: {
  value: number;
  direction?: "up" | "down";
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === "down" ? value : 0);
  const springValue = useSpring(motionValue, { damping: 30, stiffness: 100 });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [motionValue, value, isInView]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-IN").format(
          Math.floor(latest),
        );
      }
    });
  }, [springValue]);

  return <span ref={ref} />;
}

const stats = [
  {
    label: "Students",
    value: 500,
    suffix: "+",
    icon: Users,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    label: "Expert Teachers",
    value: 25,
    suffix: "+",
    icon: GraduationCap,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
  },
  {
    label: "Success Rate",
    value: 100,
    suffix: "%",
    icon: Award,
    color: "text-amber-500",
    bgColor: "bg-amber-50",
  },
  {
    label: "Academic Years",
    value: 10,
    suffix: "+",
    icon: BookOpen,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
  },
];

export default function StatsSection() {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid cursor-pointer grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative p-6 md:p-8 rounded-[2rem] bg-slate-50 border border-slate-100 flex flex-col items-center text-center group overflow-hidden shadow-sm hover:shadow-xl transition-all"
              >
                {/* BACKGROUND WATERMARK ICON */}
                <Icon
                  size={100}
                  className={`absolute -right-4 -bottom-4 opacity-[0.08] md:opacity-[0.05] transition-transform duration-700 group-hover:scale-125 group-hover:-rotate-12 ${stat.color}`}
                />

                {/* FOREGROUND CONTENT */}
                {/* <div
                  className={`relative z-10 mb-4 p-4 rounded-2xl ${stat.bgColor} transition-transform duration-300 group-hover:scale-110`}
                >
                  <Icon className={stat.color} size={28} />
                </div> */}

                <div className="relative z-10 text-[16px] md:text-4xl font-black text-slate-900 flex items-center gap-0.5 tracking-tight">
                  <Counter value={stat.value} />
                  <span className="text-accent">{stat.suffix}</span>
                </div>

                <p className="relative z-10 mt-2 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
