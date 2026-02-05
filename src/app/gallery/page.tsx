"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Camera, ArrowRight, Video } from "lucide-react";

// 1. DATA STRUCTURE (Added type and videoId)
const categories = [
  "All",
  "Infrastructure",
  "Academic Life",
  "Sports",
  "Events",
];

const galleryItems = [
  {
    title: "Annual Sports Meet",
    cat: "Events",
    type: "video",
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with real YouTube Embed URL
    height: "h-[350px]",
  },
  {
    title: "Science Exhibition",
    cat: "Events",
    type: "insta",
    src: "https://www.instagram.com/p/C_sample/embed", // Replace with real Insta Embed URL
    height: "h-[450px]",
  },
  {
    title: "Main Campus",
    cat: "Infrastructure",
    type: "image",
    src: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800",
    height: "h-[300px]",
  },
  {
    title: "Digital Library",
    cat: "Infrastructure",
    type: "image",
    src: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800",
    height: "h-[400px]",
  },
  {
    title: "Morning Assembly",
    cat: "Academic Life",
    type: "image",
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800",
    height: "h-[350px]",
  },
];

export default function Gallery() {
  const [activeCat, setActiveCat] = useState("All");

  const filteredItems =
    activeCat === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.cat === activeCat);

  return (
    <main className="bg-white min-h-screen mt-18">
      {/* HEADER SECTION */}
      <section className="bg-slate-50 pt-24 pb-12 px-6 text-center">
        <div className="container mx-auto max-w-4xl">
          <span className="text-accent text-[10px] font-bold uppercase tracking-[0.4em] mb-3 block">
            Gallery Hub
          </span>
          <h1 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tighter mb-8 leading-none">
            Moments at <span className="italic text-accent">Gaya.</span>
          </h1>

          {/* COMPACT CATEGORY FILTER */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCat(cat)}
                className={`px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all
                  ${activeCat === cat ? "bg-primary text-white shadow-lg scale-105" : "bg-white text-slate-500 border border-slate-200 hover:border-accent"}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="py-12 px-4 md:px-10">
        <div className="container mx-auto">
          <motion.div
            layout
            className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="relative break-inside-avoid rounded-[2rem] overflow-hidden group border border-slate-100 bg-slate-50 shadow-sm"
                >
                  {/* MEDIA CONTENT */}
                  <div
                    className={`${item.height} relative w-full bg-slate-200`}
                  >
                    {item.type === "image" ? (
                      <>
                        <Image
                          src={item.src}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                          <Camera className="text-primary" size={16} />
                        </div>
                      </>
                    ) : (
                      <iframe
                        src={item.src}
                        className="w-full h-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    )}
                  </div>

                  {/* CAPTION */}
                  <div className="p-5 bg-white">
                    <div className="flex items-center gap-2 mb-1">
                      {item.type !== "image" ? (
                        <Video size={12} className="text-accent" />
                      ) : (
                        <Camera size={12} className="text-slate-400" />
                      )}
                      <span className="text-accent font-black text-[9px] uppercase tracking-widest">
                        {item.cat}
                      </span>
                    </div>
                    <h3 className="text-primary text-md font-black tracking-tight leading-tight">
                      {item.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* VISIT CTA */}
      <section className="pb-24 px-6">
        <div className="container mx-auto max-w-5xl bg-primary p-8 md:p-16 rounded-[3rem] text-white text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4">
              See it for yourself.
            </h2>
            <p className="text-white/60 font-medium max-w-sm">
              Guided tours of our digital labs available every weekend.
            </p>
          </div>
          <button className="w-full md:w-auto bg-accent text-primary px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-105 transition-transform whitespace-nowrap">
            Book a Tour <ArrowRight className="inline ml-2" size={16} />
          </button>
        </div>
      </section>
    </main>
  );
}
