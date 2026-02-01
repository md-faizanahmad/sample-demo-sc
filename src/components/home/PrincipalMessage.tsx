"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function PrincipalMessage() {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* PRINCIPAL IMAGE - Mobile First */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative w-full max-w-sm lg:max-w-none lg:w-1/2"
          >
            <div className="relative aspect-4/5 md:aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-8 border-slate-50">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800"
                alt="Principal Hansraj Public School"
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-cover"
              />
            </div>
            {/* Design Element: Floating Quote Icon */}
            <div className="absolute -bottom-6 -right-6 bg-blue-600 p-6 rounded-3xl shadow-xl text-white">
              <Quote size={32} fill="currentColor" />
            </div>
          </motion.div>

          {/* MESSAGE CONTENT */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-blue-600 mb-4 block">
                Leadership
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-2 tracking-tighter">
                From the{" "}
                <span className="text-accent italic">Principal&apos;s</span>{" "}
                Desk
              </h2>
              <h4 className="text-lg md:text-xl font-bold text-slate-500 mb-8 tracking-tight">
                &quot;Nurturing Excellence, Inspiring Future Leaders&quot;
              </h4>

              <div className="space-y-6">
                <p className="text-base md:text-lg text-slate-600 leading-relaxed font-medium">
                  Welcome to Hansraj Public School. Our mission in Gaya has
                  always been to provide more than just textbooks. We focus on a
                  holistic approach where values, technology, and academic rigor
                  meet.
                </p>
                <p className="text-base md:text-lg text-slate-600 leading-relaxed font-medium">
                  We believe every child has a unique spark. Our role is to
                  provide the discipline and the environment to let that spark
                  become a flame of knowledge and character.
                </p>
              </div>

              {/* SIGNATURE AREA */}
              <div className="mt-10 border-t border-slate-100 pt-8">
                <h3 className="text-2xl font-black text-slate-900 leading-none">
                  Dr. S. K. Sharma
                </h3>
                <p className="text-sm font-bold uppercase tracking-widest text-blue-600 mt-2">
                  Principal & Managing Trustee
                </p>
                <p className="text-xs text-slate-400 mt-1 font-medium">
                  Hansraj Public School, Gaya
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
