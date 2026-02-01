// src/components/sections/Testimonials/SwipeClientWrapper.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Subject } from "./CurriculumSwipe";
import { useRef, useEffect, useState } from "react";

export function SwipeClientWrapper({ subjects }: { subjects: Subject[] }) {
  const [isMobile, setIsMobile] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [constraints, setConstraints] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (carouselRef.current) {
        setConstraints(
          carouselRef.current.scrollWidth - carouselRef.current.offsetWidth,
        );
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) {
    return (
      <div className="relative">
        <motion.div
          ref={carouselRef}
          className="flex gap-6 cursor-grab active:cursor-grabbing px-6"
          drag="x"
          dragConstraints={{ right: 0, left: -constraints - 48 }}
        >
          {subjects.map((subject, index) => (
            <motion.article
              key={subject.id}
              className="min-w-[85vw] h-112.5 relative rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-xl shrink-0"
            >
              <Image
                src={subject.image}
                alt={subject.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
              <div
                className={`absolute inset-0 ${subject.color} mix-blend-multiply opacity-70`}
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-transparent to-transparent opacity-80" />

              <div className="relative h-full p-8 flex flex-col justify-end z-10">
                <span className="text-blue-400 font-bold text-5xl opacity-40 mb-2">
                  0{index + 1}
                </span>
                <h3 className="text-2xl font-black text-white uppercase tracking-tight">
                  {subject.title}
                </h3>
                <p className="text-sm text-slate-200 font-medium mt-2 leading-relaxed">
                  {subject.desc}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    );
  }

  return (
    <div className="space-y-40 relative">
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-100 -translate-x-1/2" />

      {subjects.map((subject, index) => {
        const isEven = index % 2 === 0;
        return (
          <motion.article
            key={subject.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`flex flex-row ${isEven ? "" : "flex-row-reverse"} items-center gap-20`}
          >
            {/* Image Side */}
            <div className="relative lg:w-1/2 lg:h-100  rounded-[3rem] overflow-hidden shadow-2xl group">
              <Image
                src={subject.image}
                alt={subject.title}
                fill
                sizes="50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div
                className={`absolute inset-0 ${subject.color} mix-blend-multiply opacity-40 group-hover:opacity-20 transition-opacity`}
              />
            </div>

            {/* Text Side */}
            <div className={`w-1/2 ${isEven ? "pl-10" : "pr-10 text-right"}`}>
              <span className="text-blue-600 font-black text-8xl opacity-10 block -mb-8">
                0{index + 1}
              </span>
              <h3 className="text-5xl font-black text-slate-900 tracking-tighter mb-6 uppercase">
                {subject.title}
              </h3>
              <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-md">
                {subject.desc}
              </p>
              <div
                className={`mt-8 h-1.5 w-20 bg-blue-600 rounded-full ${isEven ? "" : "ml-auto"}`}
              />
            </div>
          </motion.article>
        );
      })}
    </div>
  );
}
