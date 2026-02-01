// src/components/sections/Testimonials/TestimonialsGlow.tsx
import { TestimonialsClientWrapper } from "./TestimonialsClientWrapper";

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

export default function TestimonialsGlow() {
  const testimonials: Testimonial[] = [
    {
      id: "1",
      name: "Ramesh Kumar Singh",
      role: "Parent of Class 8 Student",
      quote:
        "Gaya mein Hansraj School ne shiksha ka star hi badal diya hai. My son's confidence in English and Math has improved remarkably since he joined.",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200",
    },
    {
      id: "2",
      name: "Anjali Devi",
      role: "Local Business Owner",
      quote:
        "Finally, Gaya mein ek aisa school hai jo baccho ke sanskar aur modern education dono par dhyan deta hai. Highly recommended for parents in our area.",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200",
    },
    {
      id: "3",
      name: "Prakash Yadav",
      role: "Govt. Employee",
      quote:
        "The discipline and focus on extracurricular activities at Hansraj Public School are impressive. It's the best investment for my daughter's future.",
      avatar:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200",
    },
  ];

  return (
    <section className="relative py-24 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6 mb-16 text-center lg:text-left">
        <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-blue-600/60">
          Parents&apos; Voices in Gaya
        </h2>
        <p className="mt-4 text-4xl md:text-5xl font-black tracking-tighter text-slate-900">
          Trusted by <span className="text-accent">Local Families</span>
        </p>
      </div>

      <TestimonialsClientWrapper testimonials={testimonials} />
    </section>
  );
}
