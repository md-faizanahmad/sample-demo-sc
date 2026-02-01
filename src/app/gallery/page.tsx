"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ArrowRight, Camera } from "lucide-react";

const categories = [
  "All",
  "Infrastructure",
  "Academic Life",
  "Sports & Events",
];

const images = [
  {
    title: "Main Campus",
    cat: "Infrastructure",
    src: "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=800",
    height: "h-[300px]",
  },
  {
    title: "Science Lab",
    cat: "Infrastructure",
    src: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800",
    height: "h-[450px]",
  },
  {
    title: "Morning Assembly",
    cat: "Academic Life",
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800",
    height: "h-[350px]",
  },
  {
    title: "Annual Sports",
    cat: "Sports & Events",
    src: "https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=800",
    height: "h-[400px]",
  },
  {
    title: "Digital Library",
    cat: "Infrastructure",
    src: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800",
    height: "h-[500px]",
  },
  {
    title: "Art Workshop",
    cat: "Academic Life",
    src: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800",
    height: "h-[320px]",
  },
];

export default function GalleryPage() {
  const [activeCat, setActiveCat] = useState("All");
  const carouselRef = useRef<HTMLDivElement>(null);
  const [constraints, setConstraints] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      setConstraints(
        carouselRef.current.scrollWidth - carouselRef.current.offsetWidth,
      );
    }
  }, []);

  return (
    <main className="bg-white min-h-screen">
      {/* 1. HEADER */}
      <section className="bg-slate-50 pt-32 pb-16 px-6 text-center">
        <div className="container mx-auto max-w-4xl">
          <span className="text-accent text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">
            Visual Journey
          </span>
          <h1 className="text-5xl md:text-8xl font-black text-slate-900 leading-[0.85] tracking-tighter mb-8">
            Campus <span className="italic text-accent">Gallery.</span>
          </h1>

          {/* CATEGORY FILTER */}
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCat(cat)}
                className={`px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all
                  ${activeCat === cat ? "bg-slate-900 text-white shadow-xl" : "bg-white text-slate-500 border border-slate-200 hover:border-accent hover:text-accent"}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. MOBILE SWIPE VIEW (Visible < 768px) */}
      <section className="md:hidden py-12 overflow-hidden">
        <motion.div
          ref={carouselRef}
          drag="x"
          dragConstraints={{ right: 0, left: -constraints - 48 }}
          className="flex gap-6 px-6 cursor-grab active:cursor-grabbing"
        >
          {images.map((img, i) => (
            <motion.div
              key={i}
              className="min-w-[85vw] h-112.5 relative rounded-[2.5rem] overflow-hidden shadow-2xl shrink-0"
            >
              <Image
                src={img.src}
                alt={img.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-transparent to-transparent p-8 flex flex-col justify-end">
                <p className="text-accent font-bold text-[10px] uppercase tracking-widest mb-2">
                  {img.cat}
                </p>
                <h3 className="text-white text-2xl font-black tracking-tight">
                  {img.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="text-center mt-8 animate-pulse text-slate-400 text-[10px] font-bold uppercase tracking-widest">
          ← Swipe to explore →
        </div>
      </section>

      {/* 3. DESKTOP PINTEREST MASONRY (Visible >= 768px) */}
      <section className="hidden md:block py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
            {images.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`relative break-inside-avoid rounded-[2.5rem] overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-500`}
              >
                <div className={`${img.height} relative w-full`}>
                  <Image
                    src={img.src}
                    alt={img.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur-md p-4 rounded-full scale-50 group-hover:scale-100 transition-transform duration-500">
                      <Camera className="text-accent" size={24} />
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-slate-50 border-t border-slate-100">
                  <p className="text-accent font-bold text-[10px] uppercase tracking-widest mb-1">
                    {img.cat}
                  </p>
                  <h3 className="text-slate-900 text-lg font-black tracking-tight">
                    {img.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section className="py-24 px-6 text-center">
        <div className="container mx-auto max-w-4xl bg-slate-900 p-12 md:p-20 rounded-[4rem] text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
              Experience our <span className="text-accent">Campus</span> in
              person.
            </h2>
            <p className="text-slate-400 mb-10 max-w-lg mx-auto font-medium">
              Join us for a guided tour every Saturday to explore our smart
              classrooms and labs.
            </p>
            <button className="bg-accent text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-slate-900 transition-all shadow-2xl">
              Schedule a Visit{" "}
              <ArrowRight className="inline-flex ml-2" size={16} />
            </button>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 blur-[100px] -mr-32 -mt-32" />
        </div>
      </section>
    </main>
  );
}
