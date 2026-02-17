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
    // Rotation/Translation for the fan-out effect
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
    <section className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        {/* HEADER */}
        <header className="flex flex-col items-center text-center mb-16 md:mb-24">
          <div className="max-w-2xl">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-blue-600 mb-4 block">
              Campus & Facilities
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-[0.9]">
              Life at <span className="text-accent italic">Hansraj Public</span>
            </h2>
          </div>
        </header>

        {/* FAN-OUT STACK CONTAINER */}
        <MotionContainer>
          {/* Mobile: Simple stack with slight overlap | Desktop: Full fan-out */}
          <div className="relative flex flex-col md:flex-row items-center justify-center min-h-125 md:min-h-150 -space-y-37.5 md:space-y-0">
            {galleryPreview.map((item, index) => (
              <MotionItem
                key={index}
                className={`
                  group relative w-80 h-95 sm:w-[320px] sm:h-112.5 md:w-87.5 md:h-125
                  rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-500 ease-out
                  hover:scale-105 hover:z-50 md:absolute
                  ${item.style}
                `}
              >
                {/* Image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Polaroid-style White Border Overlay */}
                <div className="absolute inset-0 border-12 border-white/10 group-hover:border-white transition-colors duration-500 rounded-[2.5rem] z-20 pointer-events-none" />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-70 group-hover:opacity-80 transition-opacity z-10" />

                {/* Content - Visible on hover or focus */}
                <div className="absolute bottom-0 left-0 p-8 w-full z-30 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-accent rounded-lg text-white scale-75 md:scale-100">
                      {item.icon}
                    </div>
                    <h3 className="text-lg md:text-xl font-black text-white uppercase tracking-tight">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-slate-300 text-xs md:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {item.desc}
                  </p>
                </div>
              </MotionItem>
            ))}
          </div>
        </MotionContainer>

        {/* Center CTA */}
        <div className="mt-16 md:mt-24 flex justify-center">
          <Link
            href="/gallery"
            className="group flex items-center gap-3 px-10 py-5 bg-primary text-white rounded-full transition-all duration-300 shadow-xl active:scale-95"
          >
            <span className="text-xs font-black uppercase tracking-widest">
              Explore Full Gallery
            </span>
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
