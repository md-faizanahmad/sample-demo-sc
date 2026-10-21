"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Camera, ArrowRight, Video } from "lucide-react";

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
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    height: "h-56 sm:h-72 lg:h-80",
  },
  {
    title: "Science Exhibition",
    cat: "Events",
    type: "insta",
    src: "https://www.instagram.com/p/C_sample/embed",
    height: "h-72 sm:h-80 lg:h-[400px]",
  },
  {
    title: "Main Campus",
    cat: "Infrastructure",
    type: "image",
    src: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800",
    height: "h-56 sm:h-64 lg:h-72",
  },
  {
    title: "Digital Library",
    cat: "Infrastructure",
    type: "image",
    src: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800",
    height: "h-64 sm:h-80 lg:h-96",
  },
  {
    title: "Morning Assembly",
    cat: "Academic Life",
    type: "image",
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800",
    height: "h-60 sm:h-72 lg:h-80",
  },
];

export default function Gallery() {
  const [activeCat, setActiveCat] = useState("All");

  const filteredItems =
    activeCat === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.cat === activeCat);

  return (
    <main className="min-h-screen bg-white">
      {/* HEADER */}
      <section className="bg-slate-50 px-4 pb-8 pt-24 sm:px-6 sm:pb-10 sm:pt-28 lg:pb-12 lg:pt-32">
        <div className="mx-auto w-full max-w-6xl text-center">
          <span className="mb-3 block text-[10px] font-bold uppercase tracking-[0.25em] text-accent sm:tracking-[0.35em]">
            Gallery Hub
          </span>

          <h1 className="mb-5 text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:mb-7 lg:text-7xl">
            Moments at <span className="italic text-accent">Gaya.</span>
          </h1>

          <p className="mx-auto mb-6 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
            A glimpse into our campus, classrooms, activities, and school life.
          </p>

          {/* RESPONSIVE CATEGORY FILTERS */}
          <div className="-mx-4 flex flex-wrap  justify-center gap-2 px-4 sm:mx-0 sm:gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCat(cat)}
                aria-pressed={activeCat === cat}
                className={`min-h-9 px-3 py-2 text-[10px] font-bold uppercase tracking-wide transition-colors sm:px-5 sm:text-xs ${
                  activeCat === cat
                    ? "bg-primary text-white"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-primary hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-14">
        <div className="mx-auto w-full max-w-7xl">
          <motion.div layout>
            <AnimatePresence mode="popLayout">
              <div className="columns-1 gap-4 sm:columns-2 sm:gap-5 lg:columns-3 lg:gap-6">
                {filteredItems.map((item) => (
                  <motion.article
                    key={item.title}
                    layout
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.25 }}
                    className="mb-4 inline-block w-full break-inside-avoid overflow-hidden border border-slate-200 bg-white sm:mb-5 lg:mb-6"
                  >
                    {/* MEDIA */}
                    <div
                      className={`group relative w-full overflow-hidden bg-slate-100 ${item.height}`}
                    >
                      {item.type === "image" ? (
                        <>
                          <Image
                            src={item.src}
                            alt={item.title}
                            fill
                            sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                          />

                          <div className="absolute left-3 top-3 bg-white p-2 text-primary sm:left-4 sm:top-4">
                            <Camera size={16} aria-hidden="true" />
                          </div>
                        </>
                      ) : (
                        <iframe
                          src={item.src}
                          title={item.title}
                          loading="lazy"
                          className="absolute inset-0 h-full w-full border-0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      )}
                    </div>

                    {/* CAPTION */}
                    <div className="px-4 py-4 sm:px-5 sm:py-5">
                      <div className="mb-2 flex items-center gap-2">
                        {item.type === "image" ? (
                          <Camera
                            size={13}
                            className="shrink-0 text-slate-500"
                            aria-hidden="true"
                          />
                        ) : (
                          <Video
                            size={13}
                            className="shrink-0 text-accent"
                            aria-hidden="true"
                          />
                        )}

                        <span className="text-[10px] font-bold uppercase tracking-wider text-accent">
                          {item.cat}
                        </span>
                      </div>

                      <h2 className="text-base font-bold leading-snug text-primary sm:text-lg">
                        {item.title}
                      </h2>
                    </div>
                  </motion.article>
                ))}
              </div>
            </AnimatePresence>
          </motion.div>

          {filteredItems.length === 0 && (
            <p className="py-12 text-center text-sm text-slate-500">
              No gallery items found in this category.
            </p>
          )}
        </div>
      </section>

      {/* VISIT CTA */}
      <section className="px-4 pb-10 sm:px-6 sm:pb-14 lg:px-8 lg:pb-16">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-start gap-6 bg-primary p-6 text-white sm:p-8 md:flex-row md:items-center md:justify-between md:gap-8 md:p-10 lg:p-12">
          <div className="max-w-xl">
            <h2 className="mb-3 text-2xl font-black leading-tight tracking-tight sm:text-3xl lg:text-4xl">
              See it for yourself.
            </h2>

            <p className="max-w-md text-sm leading-relaxed text-white/80 sm:text-base">
              Guided tours of our digital labs are available every weekend.
            </p>
          </div>

          <button
            type="button"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 bg-accent px-6 py-3 text-xs font-bold uppercase tracking-wider text-primary transition-opacity hover:opacity-90 sm:w-auto sm:px-8"
          >
            Book a Tour
            <ArrowRight size={16} aria-hidden="true" />
          </button>
        </div>
      </section>
    </main>
  );
}
