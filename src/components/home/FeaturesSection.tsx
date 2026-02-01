"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  MonitorPlay,
  CalendarCheck,
  Sparkles,
} from "lucide-react";

const features = [
  {
    title: "Quality Education",
    desc: "Dedicated and qualified faculties for all subjects.",
    icon: <Sparkles className="text-blue-600" size={20} />,
    bgColor: "bg-blue-50",
  },
  {
    title: "Tech in Learning",
    desc: "Smart labs, classrooms, and SMS alerts for parents.",
    icon: <MonitorPlay className="text-emerald-600" size={20} />,
    bgColor: "bg-emerald-50",
  },
  {
    title: "Advance Planning",
    desc: "Micro-level planning for tests and career guidance.",
    icon: <CalendarCheck className="text-indigo-600" size={20} />,
    bgColor: "bg-indigo-50",
  },
  {
    title: "Top Facilities",
    desc: "Safe transport, CCTV, and AC classrooms.",
    icon: <ShieldCheck className="text-rose-600" size={20} />,
    bgColor: "bg-rose-50",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* HEADER */}
        <div className="text-center mb-12">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-600 mb-2 block">
            The Difference
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter">
            Why We Are <span className="text-accent italic">Unique?</span>
          </h2>
        </div>

        {/* GRID: Mobile 2 | Tablet 3 | Desktop 4 */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-5 md:p-8 bg-slate-50 rounded-[2rem] border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-300"
            >
              {/* Smaller Icon for Tight Grid */}
              <div
                className={`mb-4 inline-flex p-3 rounded-xl ${feature.bgColor} group-hover:scale-110 transition-transform`}
              >
                {feature.icon}
              </div>

              {/* Adjusted Font Sizes for Grid Density */}
              <h3 className="text-sm md:text-xl font-bold text-slate-900 mb-2 leading-tight">
                {feature.title}
              </h3>
              <p className="text-[11px] md:text-sm text-slate-500 font-medium leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
