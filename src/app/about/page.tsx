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
      {/* Principal structured data */}
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
        {/* 1. Hero */}
        <section className="border-b border-slate-100 bg-slate-50 px-4 pb-12 pt-24 sm:px-6 md:pb-16 md:pt-28">
          <div className="container mx-auto max-w-4xl text-center">
            <span className="mb-3 block text-xs font-semibold uppercase tracking-wider text-primary">
              About Hansraj Public School
            </span>

            <h1 className="mb-5 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl md:mb-6 md:text-5xl lg:text-6xl">
              Hansraj Public School,
              <br />
              <span className="text-yellow-500">Gaya, Bihar</span>
            </h1>

            <p className="mx-auto max-w-3xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7 md:text-lg">
              Hansraj Public School is a CBSE-affiliated, co-educational English
              medium school in Gaya, Bihar, committed to academic excellence,
              discipline, and holistic development from Nursery to Class 10.
            </p>
          </div>
        </section>

        {/* 2. Principal message */}
        <section className="px-4 py-12 sm:px-6 md:py-16 lg:py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-12 md:gap-10 lg:gap-14">
            <div className="relative aspect-square w-full overflow-hidden md:col-span-5">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800"
                alt="Principal of Hansraj Public School Gaya"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 42vw, 480px"
                className="object-cover"
              />
            </div>

            <div className="space-y-5 md:col-span-7 md:space-y-6">
              <div>
                <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Leadership
                </span>

                <h2 className="text-2xl font-bold leading-tight text-slate-900 md:text-3xl">
                  Message from the Principal
                </h2>
              </div>

              <div className="space-y-4 border-l-2 border-primary pl-4 text-sm leading-7 text-slate-600 sm:text-base md:pl-5">
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

              <div className="pt-1">
                <p className="text-base font-semibold text-slate-900">
                  Dr. S. K. Sharma
                </p>

                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-500">
                  Principal, Hansraj Public School
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. School story and milestones */}
        <section className="bg-slate-900 px-0 py-12 text-white sm:px-0 md:py-16 lg:py-20">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-8 flex items-center gap-3 px-4 sm:px-6 md:mb-10">
              <History
                className="shrink-0 text-accent"
                size={26}
                strokeWidth={1.6}
              />

              <h2 className="text-2xl font-bold md:text-3xl">
                Our <span className="italic text-accent">Journey</span>
              </h2>
            </div>

            {/* Horizontal swipe on mobile, grid on desktop */}
            <div
              className="
                flex snap-x snap-mandatory gap-4
                overflow-x-auto overscroll-x-contain
                px-4 pb-3
                sm:px-6
                [scrollbar-width:none]
                [&::-webkit-scrollbar]:hidden
                md:grid md:grid-cols-2 md:gap-x-10 md:gap-y-8
                md:overflow-visible md:snap-none
                lg:gap-x-14 lg:gap-y-10
              "
            >
              {milestones.map((milestone) => (
                <article
                  key={milestone.year}
                  className="
                    flex w-[82vw] shrink-0 snap-center flex-col
                    border-t border-slate-700 pt-4
                    sm:w-[65vw]
                    md:w-auto md:min-w-0 md:pt-5
                  "
                >
                  <span className="mb-3 text-2xl font-semibold tracking-tight text-accent md:text-3xl">
                    {milestone.year}
                  </span>

                  <h3 className="mb-2 text-base font-semibold leading-snug text-white md:text-lg">
                    {milestone.title}
                  </h3>

                  <p className="text-sm leading-6 text-slate-400">
                    {milestone.desc}
                  </p>
                </article>
              ))}
            </div>

            {/* Mobile swipe indicator */}
            <div className="mt-4 flex justify-center gap-1.5 md:hidden">
              {milestones.map((milestone, index) => (
                <span
                  key={milestone.year}
                  className={`h-1 transition-all ${
                    index === 0 ? "w-6 bg-accent" : "w-2 bg-slate-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* 4. Core values */}
        <section className="bg-primary px-4 py-12 sm:px-6 md:py-16 lg:py-20">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-8 md:mb-10">
              <span className="mb-2 block text-center text-xs font-semibold uppercase tracking-wider text-white/60">
                What guides us
              </span>

              <h2 className="text-center text-2xl font-bold text-white md:text-3xl">
                Our Educational Values
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-3 md:gap-5">
              <ValueCard
                icon={<Target className="text-yellow-400" size={25} />}
                title="Strong Academics"
                text="CBSE-aligned curriculum focused on concept clarity and consistent performance."
              />

              <ValueCard
                icon={<Heart className="text-yellow-400" size={25} />}
                title="Holistic Development"
                text="Equal importance to academics, sports, discipline, and moral values."
              />

              <ValueCard
                icon={<ShieldCheck className="text-yellow-400" size={25} />}
                title="Safe Campus"
                text="CCTV-monitored campus with trained staff ensuring student safety."
              />
            </div>
          </div>
        </section>

        {/* 5. School statistics */}
        <section className="border-b border-slate-100 px-4 py-12 sm:px-6 md:py-16">
          <div className="container mx-auto grid max-w-5xl grid-cols-2 gap-x-4 gap-y-8 text-center md:grid-cols-4 md:gap-8">
            <Stat value="25+" label="Years of Excellence" />
            <Stat value="1200+" label="Students Enrolled" />
            <Stat value="50+" label="Qualified Teachers" />
            <Stat value="CBSE" label="Curriculum Focused" />
          </div>
        </section>

        {/* 6. Admission call to action */}
        <section className="px-4 py-12 text-center sm:px-6 md:py-16">
          <Link
            href="/admission"
            className="
              inline-flex min-h-11 items-center justify-center gap-3
              bg-accent px-6 py-3
              text-xs font-semibold uppercase tracking-wider text-white
              transition-colors hover:bg-slate-900
              focus-visible:outline-2 focus-visible:outline-offset-2
              focus-visible:outline-primary
              sm:px-8 md:text-sm
            "
          >
            Admission Enquiry
            <ArrowRight size={16} />
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
    <article className="bg-blue-950 p-5 sm:p-6 md:p-6">
      <div className="mb-4">{icon}</div>

      <h3 className="mb-2 text-base font-semibold leading-snug text-white md:text-lg">
        {title}
      </h3>

      <p className="text-sm leading-6 text-blue-100/75">{text}</p>
    </article>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-3xl font-bold tracking-tight text-blue-900 sm:text-4xl">
        {value}
      </p>

      <p className="mt-2 text-[11px] font-semibold uppercase leading-5 tracking-wider text-slate-500 sm:text-xs">
        {label}
      </p>
    </div>
  );
}
