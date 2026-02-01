import Image from "next/image";
import { Heart, ShieldCheck, Target } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="bg-white pb-20">
      {/* 1. MINIMALIST HERO */}
      <section className="bg-slate-50 pt-32 pb-16 md:pt-40 md:pb-24 px-6 border-b border-slate-100">
        <div className="container mx-auto max-w-4xl text-center">
          <span className="text-blue-600 text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
            Established 1998
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-slate-900 leading-tight mb-8">
            Nurturing Minds, <br />
            <span className="italic text-blue-600">Building Legacies.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
            ABC Public School is more than an institution; it is a community
            dedicated to the intellectual, social, and ethical growth of every
            student.
          </p>
        </div>
      </section>

      {/* 2. THE PRINCIPAL'S MESSAGE (Reading Mode) */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 relative aspect-4/5 rounded-[2rem] overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800"
              alt="Principal"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
          <div className="md:col-span-7 space-y-6">
            <h2 className="text-3xl font-serif text-slate-900 tracking-tight">
              From the Desk of the Principal
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed text-lg italic border-l-4 border-blue-900 pl-6">
              <p>
                &quot;Education is not the learning of facts, but the training
                of the mind to think. At ABC Public School, we strive to create
                an environment where curiosity is celebrated and character is
                built.&quot;
              </p>
            </div>
            <div className="pt-4">
              <p className="font-bold text-slate-900">Dr. Sarah Ahmad</p>
              <p className="text-sm text-slate-500 uppercase font-bold tracking-widest">
                M.A., Ph.D. (Education)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR VALUES (Grid Layout) */}
      <section className="bg-blue-900 py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-white mb-4">
              The Pillars of Our School
            </h2>
            <div className="h-1 w-20 bg-yellow-500 mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ValueCard
              icon={<Target className="text-yellow-500" size={28} />}
              title="Academic Rigor"
              text="Our CBSE-aligned curriculum is designed to challenge students and ensure deep conceptual understanding."
            />
            <ValueCard
              icon={<Heart className="text-yellow-500" size={28} />}
              title="Holistic Growth"
              text="From arts to athletics, we ensure that every child finds their passion and develops a well-rounded personality."
            />
            <ValueCard
              icon={<ShieldCheck className="text-yellow-500" size={28} />}
              title="Safe Haven"
              text="A high-security campus with GPS-enabled transport and 24/7 CCTV monitoring for absolute peace of mind."
            />
          </div>
        </div>
      </section>

      {/* 4. KEY STATISTICS (Trust Indicators) */}
      <section className="py-20 px-6 border-b border-slate-100">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-serif text-blue-900">25+</p>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mt-2">
                Years of Excellence
              </p>
            </div>
            <div>
              <p className="text-4xl font-serif text-blue-900">1200+</p>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mt-2">
                Total Students
              </p>
            </div>
            <div>
              <p className="text-4xl font-serif text-blue-900">50+</p>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mt-2">
                Expert Teachers
              </p>
            </div>
            <div>
              <p className="text-4xl font-serif text-blue-900">100%</p>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mt-2">
                CBSE Results
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function ValueCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="bg-blue-950 p-8 rounded-3xl border border-blue-800 hover:border-yellow-500/50 transition-all">
      <div className="mb-6">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
        {title}
      </h3>
      <p className="text-blue-100/70 text-sm leading-relaxed">{text}</p>
    </div>
  );
}
