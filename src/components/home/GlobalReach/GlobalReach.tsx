// src/components/sections/GlobalReach.tsx
import { MapClientWrapper } from "./MapClientWrapper";
import Image from "next/image";

export interface Location {
  id: string;
  x: string;
  y: string;
  city: string;
}

export default function GlobalReach() {
  const locations: Location[] = [
    { id: "usa", x: "22%", y: "38%", city: "New York" },
    { id: "uk", x: "47%", y: "32%", city: "London" },
    { id: "india", x: "71%", y: "52%", city: "Hyderabad" },
    { id: "singapore", x: "81%", y: "62%", city: "Singapore" },
  ];

  return (
    <section className="relative py-32 bg-primary overflow-hidden">
      {/* 1. Background Image Layer */}
      <div className="absolute inset-0 z-0 opacity-20">
        <Image
          src="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?q=80&w=2000"
          alt="Global Network"
          fill
          sizes="100vw"
          className="object-cover grayscale"
          priority
        />
        {/* Scholar Blue Overlay */}
        <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <header className="max-w-3xl mb-12 md:mb-24">
          <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-accent">
            Global Reach
          </h2>
          <p className="mt-4 text-4xl md:text-6xl font-black tracking-tighter text-white">
            Our Students Are <br />
            <span className="text-accent shadow-accent/20 drop-shadow-2xl">
              Redefining Boundaries
            </span>
          </p>
        </header>

        {/* 2. Interactive Map Layer */}
        <MapClientWrapper locations={locations} />

        {/* 3. Statistical Footer */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-12">
          {locations.map((loc) => (
            <div key={loc.id} className="group">
              <span className="text-[10px] font-black uppercase tracking-widest text-accent/60">
                {loc.id}
              </span>
              <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
                {loc.city}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
