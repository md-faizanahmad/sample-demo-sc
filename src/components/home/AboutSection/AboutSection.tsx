"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { History, Users, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* IMAGE GRID - Mobile First: Stays hidden/small on mobile, scales on Desktop */}
          <div className="relative w-full lg:w-1/2 flex gap-4">
            <div className="relative w-1/2 h-75 md:h-112.5 rounded-[2rem] overflow-hidden mt-8 shadow-2xl">
              <Image
                src="/school_student1.png"
                alt="Student at Hansraj Public School"
                fill
                sizes="(max-width: 768px) 50vw, 400px"
                className="object-cover"
              />
            </div>
            <div className="relative w-1/2 h-75 md:h-112.5 rounded-[2rem] overflow-hidden shadow-2xl">
              <Image
                src="/school_student2.jpg"
                alt="Hansraj Public School Classroom"
                fill
                sizes="(max-width: 768px) 50vw, 400px"
                className="object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl -z-10" />
          </div>

          {/* CONTENT SIDE */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.4em] text-blue-600 mb-4 block">
                Who We Are
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tighter">
                Hansraj <span className="text-accent">Public School</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed font-medium mb-8">
                Hansraj Public School is a well-known English medium educational
                institution located in Gaya, Bihar. A glorious initiative
                dedicated to academic excellence and holistic development, our
                school is a co-educational institution recognized for fostering
                leadership and moral values in every student.
              </p>

              {/* STATS MINI-GRID */}
              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                  <div className="flex items-center justify-center lg:justify-start gap-3 mb-2">
                    <History className="text-blue-600" size={20} />
                    <span className="text-2xl font-black text-slate-900">
                      10+
                    </span>
                  </div>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-slate-500">
                    Years History
                  </p>
                </div>

                <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                  <div className="flex items-center justify-center lg:justify-start gap-3 mb-2">
                    <Users className="text-blue-600" size={20} />
                    <span className="text-2xl font-black text-slate-900">
                      12:1
                    </span>
                  </div>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-slate-500">
                    Student Ratio
                  </p>
                </div>
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-blue-600 transition-all shadow-xl"
              >
                Learn More <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
