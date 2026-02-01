// src/components/sections/CurriculumSwipe.tsx
import { SwipeClientWrapper } from "./SwipeClientWrapper";

export interface Subject {
  id: string;
  title: string;
  desc: string;
  image: string;
  color: string;
}

export default function CurriculumSwipe() {
  const subjects: Subject[] = [
    {
      id: "computer",
      title: "Smart Class & IT",
      desc: "Equipping students with essential computer skills and digital literacy for the modern world.",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
      color: "bg-blue-600/10",
    },
    {
      id: "english",
      title: "English Fluency",
      desc: "Focusing on spoken English and confidence-building to prepare students for global opportunities.",
      image: "https://images.unsplash.com/photo-1546074177-ffdda98d214f",
      color: "bg-purple-600/10",
    },
    {
      id: "olympiad",
      title: "Competitive Prep",
      desc: "Special coaching for Olympiads, NTSE, and foundation courses for future medical and engineering exams.",
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800",
      color: "bg-emerald-600/10",
    },
    {
      id: "sports",
      title: "Physical Education",
      desc: "Traditional sports and yoga sessions to build physical strength, discipline, and mental focus.",
      image:
        "https://images.unsplash.com/photo-1541534741688-6078c65b5a33?auto=format&fit=crop&q=80&w=800",
      color: "bg-orange-600/10",
    },
  ];

  return (
    <section className="py-16 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <header className="mb-12 md:mb-24 text-center">
          <h2 className="text-xs md:text-sm font-bold uppercase tracking-[0.4em] text-blue-600/60">
            Our Pillars
          </h2>
          <p className="mt-4 text-4xl md:text-6xl font-black tracking-tighter text-slate-900">
            The <span className="text-blue-600">Curriculum</span>
          </p>
        </header>

        <SwipeClientWrapper subjects={subjects} />
      </div>
    </section>
  );
}
