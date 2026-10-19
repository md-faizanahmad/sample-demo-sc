import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Bot, Book, Trees } from "lucide-react";
import { MotionContainer, MotionItem } from "./LifeAtSchoolMotion.client";

const galleryPreview = [
  {
    title: "Robotics & Computer Lab",
    desc: "Modern robotics and computer labs encouraging innovation.",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800",
    icon: <Bot size={20} />,
    style: "md:-rotate-6 md:-translate-x-16 z-10",
  },
  {
    title: "School Library",
    desc: "Well-stocked library promoting reading habits.",
    image:
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800",
    icon: <Book size={20} />,
    style: "md:rotate-0 md:translate-y-4 z-20",
  },
  {
    title: "Playground & Activity Area",
    desc: "Open play zones supporting physical development.",
    image:
      "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?q=80&w=800",
    icon: <Trees size={20} />,
    style: "md:rotate-6 md:translate-x-16 z-10",
  },
];

export default function LifeAtSchool() {
  return (
    <section className="overflow-hidden bg-white py-12 sm:py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <header className="mb-8 text-center sm:mb-12 md:mb-20">
          <div className="mx-auto max-w-2xl">
            <span className="mb-3 block text-[10px] font-bold uppercase tracking-[0.3em] text-primary sm:mb-4 sm:tracking-[0.4em]">
              Campus & Facilities
            </span>

            <h2 className="text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-6xl md:leading-[0.9] md:tracking-tighter">
              Life at <span className="text-accent italic">Hansraj Public</span>
            </h2>
          </div>
        </header>

        {/* Gallery: horizontal swipe on mobile, fan-out on desktop */}
        <MotionContainer>
          <div
            aria-label="School facilities gallery"
            className="
              flex items-stretch gap-4 overflow-x-auto
              snap-x snap-mandatory overscroll-x-contain
              pb-3
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
              md:relative md:min-h-125
              md:flex-row md:items-center md:justify-center
              md:gap-0 md:overflow-visible md:pb-0
              md:snap-none
            "
          >
            {galleryPreview.map((item) => (
              <MotionItem
                key={item.title}
                className={`
                  group relative h-70 w-[85%] max-w-85
                  shrink-0 snap-center overflow-hidden rounded-xl
                  shadow-lg
                  sm:h-80 sm:w-[75%] sm:max-w-95
                  md:absolute md:h-115 md:w-87.5
                  md:max-w-none md:shrink md:rounded-3xl
                  md:shadow-2xl md:hover:z-50 md:hover:scale-105
                  ${item.style}
                `}
              >
                {/* Image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 767px) 85vw, 350px"
                  className="object-cover transition-transform duration-700 md:group-hover:scale-110"
                />

                {/* Border */}
                <div className="pointer-events-none absolute inset-0 z-20 rounded-xl border border-white/20 transition-colors duration-500 group-hover:border-white/50 md:rounded-3xl md:border-10" />

                {/* Gradient overlay */}
                <div className="absolute inset-0 z-10 bg-linear-to-t from-black/90 via-black/30 to-transparent md:opacity-80 md:transition-opacity md:duration-500 md:group-hover:opacity-90" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 z-30 w-full p-5 sm:p-6 md:translate-y-4 md:p-7 md:transition-transform md:duration-500 md:group-hover:translate-y-0">
                  <div className="mb-2 flex items-center gap-3">
                    <div className="shrink-0 rounded-lg bg-accent p-2 text-white">
                      {item.icon}
                    </div>

                    <h3 className="text-base font-black uppercase leading-tight tracking-tight text-white sm:text-lg md:text-xl">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs font-medium leading-relaxed text-slate-200 sm:text-sm md:opacity-0 md:transition-opacity md:duration-500 md:delay-100 md:group-hover:opacity-100">
                    {item.desc}
                  </p>
                </div>
              </MotionItem>
            ))}
          </div>
        </MotionContainer>

        {/* Gallery CTA */}
        <div className="mt-8 flex justify-center sm:mt-10 md:mt-20">
          <Link
            href="/gallery"
            className="group flex min-h-11 items-center justify-center gap-2.5 rounded-full bg-primary px-6 py-3 text-white shadow-md transition-colors duration-300 hover:bg-primary/90 active:scale-[0.98] sm:gap-3 sm:px-8 md:px-10 md:py-4"
          >
            <span className="text-[10px] font-bold uppercase tracking-widest sm:text-xs">
              Explore Full Gallery
            </span>

            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1 sm:h-4.5 sm:w-4.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
