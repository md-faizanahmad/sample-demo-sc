import Image from "next/image";
import { Quote, ShieldCheck } from "lucide-react";

export default function Faculty() {
  const trustees = [
    { name: "Mr. Vikram Singh", role: "Board Chairman" },
    { name: "Mrs. Anjali Devi", role: "Trustee" },
    { name: "Mr. Sameer Ahmad", role: "Trustee" },
    { name: "Mr. Murji Patel", role: "Trustee" },
  ];

  return (
    <main className="bg-white min-h-screen">
      {/* 1. HERO HEADER */}
      <section className="bg-slate-50 pt-32 pb-16 md:pt-40 md:pb-24 px-6 border-b border-slate-100 text-center">
        <div className="container mx-auto max-w-3xl">
          <span className="text-blue-600 text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">
            School Leadership
          </span>

          <h1 className="text-4xl md:text-6xl font-serif text-slate-900 leading-tight mb-6">
            Leadership & Faculty <br />
            <span className="italic text-blue-600 font-medium">
              Hansraj Public School, Gaya
            </span>
          </h1>

          <p className="text-slate-500 font-medium leading-relaxed">
            Meet the experienced leadership and academic heads responsible for
            maintaining discipline, academic excellence, and a safe learning
            environment at Hansraj Public School, Gaya.
          </p>
        </div>
      </section>

      {/* 2. LEADERSHIP PROFILES */}
      <section className="py-20 px-6 container mx-auto max-w-6xl space-y-32">
        {/* Chairwoman */}
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 relative aspect-4/5 rounded-[3rem] overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800"
              alt="Chairwoman of Hansraj Public School"
              fill
              className="object-cover"
            />
          </div>

          <div className="md:col-span-7 space-y-6">
            <div>
              <h2 className="text-3xl font-serif text-slate-900">
                Mrs. Rashila Singh
              </h2>
              <p className="text-blue-600 font-bold text-xs uppercase tracking-[0.2em]">
                Chairwoman
              </p>
            </div>

            <div className="text-slate-600 space-y-4 leading-relaxed font-medium relative">
              <Quote
                className="absolute -left-8 -top-4 text-slate-100"
                size={48}
              />
              <p>
                As Chairwoman of Hansraj Public School, Gaya, my vision is to
                provide high-quality CBSE education supported by experienced
                faculty, modern teaching practices, and a student-centered
                learning environment.
              </p>
              <p>
                Our goal is to help students grow academically, socially, and
                ethically, preparing them to face future challenges with
                confidence and discipline.
              </p>
            </div>
          </div>
        </div>

        {/* Managing Director */}
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 space-y-6 md:order-1 order-2">
            <div>
              <h2 className="text-3xl font-serif text-slate-900">
                Mr. Rajesh Kumar
              </h2>
              <p className="text-blue-600 font-bold text-xs uppercase tracking-[0.2em]">
                Managing Director
              </p>
            </div>

            <p className="text-slate-600 leading-relaxed font-medium">
              At Hansraj Public School, we believe education goes beyond
              academics. Our management focuses on building a structured,
              disciplined, and supportive environment where every child receives
              equal opportunity to succeed.
            </p>
          </div>

          <div className="md:col-span-5 relative aspect-4/5 rounded-[3rem] overflow-hidden shadow-2xl md:order-2 order-1">
            <Image
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800"
              alt="Managing Director of Hansraj Public School"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Principal */}
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 relative aspect-4/5 rounded-[3rem] overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800"
              alt="Principal of Hansraj Public School"
              fill
              className="object-cover"
            />
          </div>

          <div className="md:col-span-7 space-y-6">
            <div>
              <h2 className="text-3xl font-serif text-slate-900">
                Mrs. Deepa Sharma
              </h2>
              <p className="text-blue-600 font-bold text-xs uppercase tracking-[0.2em]">
                Director & Principal
              </p>
            </div>

            <p className="text-slate-600 leading-relaxed font-medium">
              As Principal of Hansraj Public School, my focus is on academic
              excellence, disciplined classroom practices, and continuous
              improvement in teaching methodologies aligned with CBSE standards.
            </p>
          </div>
        </div>
      </section>

      {/* 3. GOVERNANCE */}
      <section className="bg-slate-900 py-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 space-y-4">
            <ShieldCheck className="mx-auto text-yellow-500" size={32} />
            <h2 className="text-3xl font-serif text-white">
              Board of Trustees
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto">
              The Board of Trustees oversees governance, policy, and long-term
              vision of Hansraj Public School, ensuring transparency and
              accountability.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/50">
            <div className="grid grid-cols-2 bg-slate-800/50 p-6 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">
              <span>Name</span>
              <span>Designation</span>
            </div>

            <div className="divide-y divide-slate-800">
              {trustees.map((t) => (
                <div
                  key={t.name}
                  className="grid grid-cols-2 p-6 hover:bg-slate-800/20 transition-colors"
                >
                  <span className="font-bold text-white">{t.name}</span>
                  <span className="text-blue-400 text-sm font-semibold">
                    {t.role}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
