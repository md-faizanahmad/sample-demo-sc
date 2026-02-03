import Image from "next/image";
import { Heart, ShieldCheck, Target } from "lucide-react";
import { personSchema } from "@/schema/personSchema";

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            personSchema({
              name: "Dr. S. K. Sharma",
              jobTitle: "Principal",
              worksFor: {
                name: "Hansraj Public School",
                url: "https://yourdomain.com",
              },
              description:
                "Principal of Hansraj Public School, Gaya, with years of experience in CBSE education and school leadership.",
            }),
          ),
        }}
      />
      <main className="bg-white pb-20">
        {/* 1. HERO – IDENTITY FIRST */}
        <section className="bg-slate-50 pt-32 pb-16 md:pt-40 md:pb-24 px-6 border-b border-slate-100">
          <div className="container mx-auto max-w-4xl text-center">
            <span className="text-blue-600 text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
              About Our School
            </span>

            <h1 className="text-4xl md:text-6xl font-serif text-slate-900 leading-tight mb-8">
              Hansraj Public School, <br />
              <span className="italic text-blue-600">Gaya, Bihar</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
              Hansraj Public School is a CBSE-affiliated, co-educational school
              in Gaya, Bihar, committed to academic excellence, disciplined
              learning, and the holistic development of every child from Nursery
              to Class 10.
            </p>
          </div>
        </section>

        {/* 2. PRINCIPAL MESSAGE – TRUST + LEADERSHIP */}
        <section className="py-20 px-6 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5 relative aspect-4/5 rounded-[2rem] overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800"
                alt="Principal of Hansraj Public School Gaya"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>

            <div className="md:col-span-7 space-y-6">
              <h2 className="text-3xl font-serif text-slate-900 tracking-tight">
                Message from the Principal
              </h2>

              <div className="space-y-4 text-slate-600 leading-relaxed text-lg border-l-4 border-blue-900 pl-6">
                <p>
                  At Hansraj Public School, Gaya, our focus is not limited to
                  textbooks and examinations. We aim to nurture disciplined,
                  confident, and responsible learners who are prepared for both
                  academic success and real-life challenges.
                </p>
                <p>
                  Our CBSE curriculum, experienced faculty, and safe learning
                  environment ensure that every student receives personal
                  attention and a strong educational foundation.
                </p>
              </div>

              <div className="pt-4">
                <p className="font-bold text-slate-900">Dr. S. K. Sharma</p>
                <p className="text-sm text-slate-500 uppercase font-bold tracking-widest">
                  Principal, Hansraj Public School
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. CORE VALUES – SEARCH + PARENT LANGUAGE */}
        <section className="bg-blue-900 py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif text-white mb-4">
                Our Educational Values
              </h2>
              <div className="h-1 w-20 bg-yellow-500 mx-auto" />
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <ValueCard
                icon={<Target className="text-yellow-500" size={28} />}
                title="Strong Academics"
                text="A CBSE-aligned curriculum focused on concept clarity, regular assessments, and consistent academic performance."
              />
              <ValueCard
                icon={<Heart className="text-yellow-500" size={28} />}
                title="Holistic Development"
                text="Equal emphasis on academics, sports, arts, discipline, and moral values to shape confident individuals."
              />
              <ValueCard
                icon={<ShieldCheck className="text-yellow-500" size={28} />}
                title="Safe & Secure Campus"
                text="CCTV-monitored campus, trained staff, and student safety protocols trusted by parents across Gaya."
              />
            </div>
          </div>
        </section>

        {/* 4. TRUST INDICATORS */}
        <section className="py-20 px-6 border-b border-slate-100">
          <div className="container mx-auto max-w-5xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <Stat value="25+" label="Years of Academic Excellence" />
              <Stat value="1200+" label="Students Enrolled" />
              <Stat value="50+" label="Qualified Teachers" />
              <Stat value="100%" label="CBSE-Oriented Curriculum" />
            </div>
          </div>
        </section>
      </main>
    </>
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

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-4xl font-serif text-blue-900">{value}</p>
      <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mt-2">
        {label}
      </p>
    </div>
  );
}
