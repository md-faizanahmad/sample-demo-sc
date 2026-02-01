"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  MapPin,
  Box,
  Wind,
  Coffee,
  BookOpen,
  GraduationCap,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const facilities = [
  {
    title: "Smart Classrooms",
    desc: "Equipped with interactive touch panels and high-speed internet for a modern learning experience.",
    icon: <Box className="text-accent" size={24} />,
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800",
  },
  {
    title: "The Knowledge Hub",
    desc: "A massive library featuring over 5,000 titles and a dedicated digital research zone.",
    icon: <BookOpen className="text-accent" size={24} />,
    image:
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800",
  },
  {
    title: "Science & Robotics",
    desc: "Advanced labs where theory meets practice through experiments and bot-building.",
    icon: <GraduationCap className="text-accent" size={24} />,
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800",
  },
  {
    title: "Dining Hall",
    desc: "A clean, hygienic space serving nutritious vegetarian meals prepared in our in-house kitchen.",
    icon: <Coffee className="text-accent" size={24} />,
    image:
      "https://images.unsplash.com/photo-1574333081543-999d9979c09a?q=80&w=800",
  },
];

export default function ExploreCampus() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. CINEMATIC HERO */}
      <section className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden bg-slate-900">
        <Image
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1600"
          alt="Hansraj Campus"
          fill
          className="object-cover opacity-60 scale-105"
          priority
        />
        <div className="relative z-10 text-center px-6">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-accent text-[10px] md:text-xs font-bold uppercase tracking-[0.5em] mb-4 block"
          >
            Virtual Tour
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.85] mb-8"
          >
            Explore <br /> Our{" "}
            <span className="italic text-accent">World.</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center gap-2 text-slate-300 font-medium"
          >
            <MapPin size={18} className="text-accent" />
            <span>Gaya, Bihar, India</span>
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-linear-to-t from-white via-transparent to-transparent" />
      </section>

      {/* 2. STATS OVERVIEW */}
      <section className="relative z-20 -mt-16 container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              label: "Campus Area",
              val: "5 Acres",
              icon: <MapPin size={16} />,
            },
            { label: "Smart Classes", val: "24+", icon: <Box size={16} /> },
            { label: "Wi-Fi Speed", val: "100 Mbps", icon: <Wind size={16} /> },
            {
              label: "Safety Labs",
              val: "100%",
              icon: <GraduationCap size={16} />,
            },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white p-6 md:p-8 rounded-[2rem] shadow-xl border border-slate-100 flex flex-col items-center text-center"
            >
              <div className="text-accent mb-2">{stat.icon}</div>
              <h3 className="text-xl md:text-2xl font-black text-slate-900">
                {stat.val}
              </h3>
              <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CAMPUS HOTSPOTS */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <div className="max-w-2xl mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-none mb-6">
              Infrastructural <br />{" "}
              <span className="text-accent italic">Excellence.</span>
            </h2>
            <p className="text-slate-500 font-medium text-lg">
              Our campus is designed to inspire. Every corner serves a
              purpose—to foster creativity, discipline, and high-performance
              learning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {facilities.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative flex flex-col bg-slate-50 rounded-[3rem] overflow-hidden border border-slate-100"
              >
                <div className="relative h-64 md:h-80 w-full overflow-hidden">
                  <Image
                    src={f.image}
                    alt={f.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-6 left-6 p-3 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg">
                    {f.icon}
                  </div>
                </div>
                <div className="p-8 md:p-10">
                  <h3 className="text-2xl font-black text-slate-900 mb-4">
                    {f.title}
                  </h3>
                  <p className="text-slate-600 font-medium leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION - ADMISSION */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-5xl bg-slate-900 rounded-[4rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8">
              See it for <span className="text-accent italic">Yourself.</span>
            </h2>
            <p className="text-slate-400 font-medium text-lg mb-10 max-w-xl mx-auto">
              Photos can only tell half the story. Visit us in person to feel
              the energy of Hansraj Public School.
            </p>
            <Link
              href="/admission-enquiry"
              className="inline-flex items-center gap-3 bg-accent text-white px-10 py-5 rounded-full font-bold uppercase text-xs tracking-[0.2em] hover:bg-white hover:text-slate-900 transition-all shadow-2xl"
            >
              Book a Campus Visit <ArrowRight size={16} />
            </Link>
          </div>
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-accent/10 blur-[100px] -mr-40 -mt-40 rounded-full" />
        </div>
      </section>
    </main>
  );
}
