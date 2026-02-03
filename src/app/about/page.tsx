import Image from "next/image";
import Link from "next/link";
import { Heart, ShieldCheck, Target, History, ArrowRight } from "lucide-react";
import { personSchema } from "@/schema/personSchema";

const milestones = [
  {
    year: "2015",
    title: "Foundation of the School",
    desc: "Hansraj Public School was established in Gaya with a vision to provide quality English-medium CBSE education.",
  },
  {
    year: "2018",
    title: "Campus Expansion",
    desc: "Shifted to a larger campus with smart classrooms, science labs, and activity spaces.",
  },
  {
    year: "2022",
    title: "Academic Excellence",
    desc: "Achieved consistent academic results and earned trust of parents across Gaya.",
  },
  {
    year: "Today",
    title: "Holistic Growth",
    desc: "Educating 500+ students with focus on academics, discipline, sports, and values.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* PERSON SCHEMA – PRINCIPAL */}
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
                "Principal of Hansraj Public School, Gaya, leading CBSE education with a focus on discipline and academic excellence.",
            }),
          ),
        }}
      />

      <main className="bg-white">
        {/* 1. HERO – IDENTITY + SEO */}
        <section className="bg-slate-50 pt-32 pb-20 px-6 border-b border-slate-100">
          <div className="container mx-auto max-w-4xl text-center">
            <span className="text-blue-600 text-xs font-bold uppercase tracking-widest mb-4 block">
              About Hansraj Public School
            </span>

            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8">
              Hansraj Public School, <br />
              <span className="italic text-blue-600">Gaya, Bihar</span>
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              Hansraj Public School is a CBSE-affiliated, co-educational English
              medium school in Gaya, Bihar, committed to academic excellence,
              discipline, and holistic development from Nursery to Class 10.
            </p>
          </div>
        </section>

        {/* 2. PRINCIPAL MESSAGE – TRUST */}
        <section className="py-20 px-6 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5 relative aspect-4/5 rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800"
                alt="Principal of Hansraj Public School Gaya"
                fill
                className="object-cover"
              />
            </div>

            <div className="md:col-span-7 space-y-6">
              <h2 className="text-3xl font-black text-slate-900">
                Message from the Principal
              </h2>

              <div className="border-l-4 border-blue-900 pl-6 space-y-4 text-slate-600 text-lg leading-relaxed">
                <p>
                  At Hansraj Public School, our goal is to nurture confident,
                  disciplined, and responsible learners. Education here goes
                  beyond textbooks, preparing students for real-life challenges.
                </p>
                <p>
                  Our CBSE curriculum, experienced teachers, and safe campus
                  environment ensure a strong academic foundation for every
                  child.
                </p>
              </div>

              <div>
                <p className="font-bold text-slate-900">Dr. S. K. Sharma</p>
                <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">
                  Principal, Hansraj Public School
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. SCHOOL STORY & MILESTONES */}
        <section className="py-24 bg-slate-900 text-white px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="flex items-center gap-4 mb-16">
              <History className="text-accent" size={32} />
              <h2 className="text-4xl font-black">
                Our <span className="italic text-accent">Journey</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {milestones.map((m) => (
                <div key={m.year}>
                  <span className="text-accent text-3xl font-black block mb-2">
                    {m.year}
                  </span>
                  <h3 className="text-xl font-bold mb-2">{m.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. CORE VALUES */}
        <section className="bg-blue-900 py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-black text-white text-center mb-16">
              Our Educational Values
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <ValueCard
                icon={<Target className="text-yellow-500" size={28} />}
                title="Strong Academics"
                text="CBSE-aligned curriculum focused on concept clarity and consistent performance."
              />
              <ValueCard
                icon={<Heart className="text-yellow-500" size={28} />}
                title="Holistic Development"
                text="Equal importance to academics, sports, discipline, and moral values."
              />
              <ValueCard
                icon={<ShieldCheck className="text-yellow-500" size={28} />}
                title="Safe Campus"
                text="CCTV-monitored campus with trained staff ensuring student safety."
              />
            </div>
          </div>
        </section>

        {/* 5. TRUST STATS */}
        <section className="py-20 px-6 border-b border-slate-100">
          <div className="container mx-auto max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <Stat value="25+" label="Years of Excellence" />
            <Stat value="1200+" label="Students Enrolled" />
            <Stat value="50+" label="Qualified Teachers" />
            <Stat value="CBSE" label="Curriculum Focused" />
          </div>
        </section>

        {/* 6. CTA */}
        <section className="py-20 text-center px-6">
          <Link
            href="/admission"
            className="inline-flex items-center gap-3 bg-accent text-white px-10 py-5 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-slate-900 transition"
          >
            Admission Enquiry <ArrowRight size={16} />
          </Link>
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
    <div className="bg-blue-950 p-8 rounded-3xl border border-blue-800">
      <div className="mb-6">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-blue-100/70 text-sm leading-relaxed">{text}</p>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-4xl font-black text-blue-900">{value}</p>
      <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mt-2">
        {label}
      </p>
    </div>
  );
}
