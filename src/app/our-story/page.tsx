"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, Target, Star, History, ArrowRight } from "lucide-react";
import Link from "next/link";

const milestones = [
  {
    year: "2015",
    title: "The Seed is Sown",
    desc: "Hansraj Public School started with a small group of 50 students and a vision to bring quality English-medium education to Gaya.",
  },
  {
    year: "2018",
    title: "Expanding Horizons",
    desc: "We moved to our current 5-acre campus, introducing smart classrooms and advanced science laboratories.",
  },
  {
    year: "2022",
    title: "Academic Excellence",
    desc: "Achieved 100% results in board examinations, establishing ourselves as a premier institution in the region.",
  },
  {
    year: "Present",
    title: "Leading the Way",
    desc: "Today, we educate over 500+ students, focusing on robotics, sports, and holistic character building.",
  },
];

export default function OurStory() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. EMOTIONAL HERO */}
      <section className="relative pt-32 pb-20 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-accent text-[10px] font-bold uppercase tracking-[0.5em] mb-4 block"
          >
            Since 2015
          </motion.span>
          <h1 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.85] mb-8">
            The Journey <br /> of{" "}
            <span className="italic text-accent">Excellence.</span>
          </h1>
          <p className="text-slate-500 font-medium max-w-2xl mx-auto text-lg leading-relaxed">
            Hansraj Public School wasn&apos;t just built with bricks; it was
            built with a promise to nurture every child&apos;s unique potential
            in the heart of Bihar.
          </p>
        </div>
      </section>

      {/* 2. THE VISION GRID */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="text-accent" />,
                title: "Our Mission",
                text: "To provide quality education that empowers students to become lifelong learners and responsible citizens.",
              },
              {
                icon: <Heart className="text-rose-500" />,
                title: "Our Values",
                text: "Discipline, Respect, and Integrity are the pillars upon which we build the character of our students.",
              },
              {
                icon: <Star className="text-amber-500" />,
                title: "Our Vision",
                text: "To be a beacon of academic excellence in Gaya, blending traditional values with modern technology.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-shadow"
              >
                <div className="mb-6 p-4 w-fit rounded-2xl bg-slate-50">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-slate-500 font-medium leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TIMELINE SECTION */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none mb-6">
                Our <span className="text-accent italic">Milestones.</span>
              </h2>
              <p className="text-slate-400 font-medium">
                Tracing our path from a dream to Gaya&apos;s leading
                institution.
              </p>
            </div>
            <History
              size={60}
              className="text-accent opacity-20 hidden md:block"
            />
          </div>

          <div className="relative">
            {/* Vertical Line for Desktop */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block" />

            <div className="space-y-16 md:space-y-32">
              {milestones.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                >
                  <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                    <div
                      className={`${i % 2 === 0 ? "md:text-left" : "md:text-right"} w-full md:max-w-md`}
                    >
                      <span className="text-4xl font-black text-accent mb-4 block">
                        {m.year}
                      </span>
                      <h3 className="text-2xl font-bold mb-4">{m.title}</h3>
                      <p className="text-slate-400 leading-relaxed font-medium">
                        {m.desc}
                      </p>
                    </div>
                  </div>
                  <div className="relative z-10 w-4 h-4 rounded-full bg-accent border-4 border-slate-900 shadow-[0_0_20px_rgba(var(--color-accent),0.5)]" />
                  <div className="hidden md:block w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. FOUNDER'S VISION */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 relative">
              <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1592066575517-58df903152f2?"
                  alt="Founding Hansraj School"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 p-8 bg-accent rounded-[2rem] shadow-xl text-white font-black text-xl italic">
                &quot;Education is the <br /> strongest weapon.&quot;
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-8">
                The Founding <br />{" "}
                <span className="text-accent italic">Philosophy.</span>
              </h2>
              <p className="text-slate-600 font-medium text-lg leading-relaxed mb-6">
                Hansraj Public School was established on the belief that
                geography should not limit opportunity. We wanted to provide the
                children of Gaya the same technological and academic advantages
                found in India&apos;s metropolitan cities.
              </p>
              <p className="text-slate-600 font-medium text-lg leading-relaxed">
                Today, as we look back on a decade of growth, our heart remains
                the same: every child who walks through our gates is a future
                leader in the making.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="py-20 px-6 text-center">
        <Link
          href="/admission-enquiry"
          className="inline-flex items-center gap-3 bg-accent text-white px-10 py-5 rounded-full font-bold uppercase text-xs tracking-[0.2em] hover:bg-slate-900 transition-all shadow-2xl"
        >
          Join Our Story <ArrowRight size={16} />
        </Link>
      </section>
    </main>
  );
}
