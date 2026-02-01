import Image from "next/image";
import { Quote, ShieldCheck } from "lucide-react";

export default function LeadershipPage() {
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
          <span className="text-blue-600 text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block text-center">
            Our Leadership
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-slate-900 leading-tight mb-6">
            Guiding Minds, <br />
            <span className="italic text-blue-600 font-medium">
              Shaping Futures.
            </span>
          </h1>
          <p className="text-slate-500 font-medium leading-relaxed">
            Dedicated leaders committed to educational excellence and holistic
            student development.
          </p>
        </div>
      </section>

      {/* 2. VISIONARY PROFILES (Reading Mode) */}
      <section className="py-20 px-6 container mx-auto max-w-6xl space-y-32">
        {/* Profile: Chairwoman */}
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 relative aspect-4/5 rounded-[3rem] overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800"
              alt="Chairwoman"
              fill
              className="object-cover"
            />
          </div>
          <div className="md:col-span-7 space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-serif text-slate-900">
                Mrs. Rashila Singh
              </h2>
              <p className="text-blue-600 font-bold text-xs uppercase tracking-[0.2em]">
                Chairwoman
              </p>
            </div>
            <div className="text-slate-600 space-y-4 leading-relaxed font-medium italic relative">
              <Quote
                className="absolute -left-8 -top-4 text-slate-100"
                size={48}
              />
              <p>
                &quot;Our objective is to create a stimulating environment by
                providing high-quality education with highly qualified,
                experienced staff. We provide child-centred activities to
                prepare students to face the future with steady
                confidence.&quot;
              </p>
              <p className="not-italic font-bold text-slate-900 text-sm">
                — Education is the key to success.
              </p>
            </div>
          </div>
        </div>

        {/* Profile: Managing Director */}
        <div className="grid md:grid-cols-12 gap-12 items-center md:flex-row-reverse">
          <div className="md:col-span-7 space-y-6 md:order-1 order-2">
            <div className="space-y-2">
              <h2 className="text-3xl font-serif text-slate-900">
                Mr. Rajesh Kumar
              </h2>
              <p className="text-blue-600 font-bold text-xs uppercase tracking-[0.2em]">
                Managing Director
              </p>
            </div>
            <p className="text-slate-600 leading-relaxed font-medium">
              &quot;Education is a passion beyond commerce. At our Academy, we
              understand the needs and perspectives of children better. We
              believe in the active participation of the child in all spheres
              which uplift them in every way.&quot;
            </p>
          </div>
          <div className="md:col-span-5 relative aspect-4/5 rounded-[3rem] overflow-hidden shadow-2xl md:order-2 order-1">
            <Image
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800"
              alt="MD"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Profile: Principal */}
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 relative aspect-4/5 rounded-[3rem] overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800"
              alt="Principal"
              fill
              className="object-cover"
            />
          </div>
          <div className="md:col-span-7 space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-serif text-slate-900">
                Mrs. Deepa Sharma
              </h2>
              <p className="text-blue-600 font-bold text-xs uppercase tracking-[0.2em]">
                Director / Principal
              </p>
            </div>
            <div className="text-slate-600 space-y-4 font-medium leading-relaxed italic">
              <p>
                &quot;We continually upgrade our programs to meet student needs.
                By strengthening teaching-learning class activities, we expand
                the learning environment through excellence.&quot;
              </p>
              <p className="not-italic font-bold text-slate-900 text-sm">
                — Education is the training of the mind to think.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. GOVERNANCE: BOARD OF TRUSTEES */}
      <section className="bg-slate-900 py-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 space-y-4">
            <ShieldCheck className="mx-auto text-yellow-500" size={32} />
            <h2 className="text-3xl font-serif text-white uppercase tracking-tight">
              Board of Trustees
            </h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto" />
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
                  <span className="font-bold text-white tracking-tight">
                    {t.name}
                  </span>
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
