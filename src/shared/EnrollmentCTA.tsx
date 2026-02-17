import Link from "next/link";
import { MagneticClientWrapper } from "./MagneticClientWrapper";
import RegistrationDownload from "@/components/RegistrationDownload";

export default function EnrollmentCTA() {
  return (
    // Reduced padding for mobile (py-20) vs desktop (py-32)
    <section className="relative py-20 md:py-32 bg-white overflow-hidden">
      {/* Background Decoration - Shorter on mobile */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 md:h-24 bg-linear-to-b from-slate-200 to-transparent" />

      <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
        <header className="max-w-4xl mx-auto mb-12 md:mb-16">
          {/* Mobile-first: smaller text, tighter tracking */}
          <h2 className="text-[10px] md:text-sm font-bold uppercase tracking-[0.2em] md:tracking-[0.4em] text-primary/40 mb-4 md:mb-6">
            School Admissions Open
          </h2>

          {/* Heading: Responsive scaling 4xl -> 7xl */}
          <p className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-primary leading-[0.95] md:leading-[0.9]">
            Admissions Open at <br className="hidden sm:block" />
            <span className="text-accent block mt-2 sm:mt-0">
              Hansraj Public School
            </span>
          </p>

          <p className="mt-6 md:mt-8 text-base md:text-lg text-slate-600 font-medium max-w-xl mx-auto leading-relaxed">
            Apply for admission at Hansraj Public School, a CBSE-affiliated
            school in Gaya offering quality education from Nursery to Class 10.
          </p>
        </header>

        {/* CTA Button: Full width on mobile, auto width on desktop */}
        <div className="flex justify-center px-2">
          <MagneticClientWrapper>
            <Link
              href="/admission"
              className="group relative inline-flex items-center justify-center w-full md:w-auto px-8 md:px-12 py-5 md:py-6 bg-primary text-white rounded-full font-black text-lg md:text-xl uppercase tracking-widest overflow-hidden shadow-2xl transition-all active:scale-95"
            >
              <span className="relative z-10">Apply for Admission</span>

              {/* Glow Effect / Hover state */}
              <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            </Link>
          </MagneticClientWrapper>
        </div>

        {/* Footer text: Tighter for mobile screens */}
        <div className="mt-8 space-y-6">
          <p className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest px-4">
            Limited seats available • Early applications encouraged
          </p>

          <div className="flex justify-center scale-90 md:scale-100 origin-center">
            <RegistrationDownload />
          </div>
        </div>

        {/* SEO helper */}
        <p className="sr-only">
          School admission in Gaya for CBSE curriculum. Apply online for Nursery
          to Class 10 at Hansraj Public School.
        </p>
      </div>
    </section>
  );
}
