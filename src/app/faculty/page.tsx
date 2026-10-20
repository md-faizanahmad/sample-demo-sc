import Image from "next/image";
import { Quote } from "lucide-react";

export default function Faculty() {
  const trustees = [
    { name: "Mr. Vikram Singh", role: "Board Chairman" },
    { name: "Mrs. Anjali Devi", role: "Trustee" },
    { name: "Mr. Sameer Ahmad", role: "Trustee" },
    { name: "Mr. Murji Patel", role: "Trustee" },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* 1. HERO HEADER */}
      <section className="border-b border-slate-100 bg-slate-50 px-6 pb-16 pt-32 text-center md:pb-24 md:pt-40">
        <div className="container mx-auto max-w-3xl">
          <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
            School Leadership
          </span>

          <h1 className="mb-6 font-serif text-4xl leading-tight text-slate-900 md:text-6xl">
            Leadership & Faculty <br />
            <span className="font-medium italic text-primary">
              Hansraj Public School, Gaya
            </span>
          </h1>

          <p className="font-medium leading-relaxed text-slate-500">
            Meet the experienced leadership and academic heads responsible for
            maintaining discipline, academic excellence, and a safe learning
            environment at Hansraj Public School, Gaya.
          </p>
        </div>
      </section>

      {/* 2. LEADERSHIP PROFILES */}
      <section className="container mx-auto max-w-6xl space-y-24 px-6 py-16 md:space-y-32 md:py-20">
        {/* Chairwoman */}
        <div className="grid items-center gap-8 md:grid-cols-12 md:gap-12">
          <div className="relative h-70 w-full overflow-hidden rounded-[3rem] shadow-2xl sm:h-85 md:col-span-5 md:h-105 lg:h-115">
            <Image
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800"
              alt="Chairwoman of Hansraj Public School"
              fill
              sizes="(max-width: 767px) 100vw, (max-width: 1023px) 42vw, 460px"
              className="object-cover"
            />
          </div>

          <div className="space-y-6 md:col-span-7">
            <div>
              <h2 className="font-serif text-3xl text-slate-900">
                Mrs. Rashila Singh
              </h2>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Chairwoman
              </p>
            </div>

            <div className="relative space-y-4 font-medium leading-relaxed text-slate-600">
              <Quote
                className="absolute -left-4 -top-4 text-slate-100 sm:-left-8"
                size={48}
                aria-hidden="true"
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
        <div className="grid items-center gap-8 md:grid-cols-12 md:gap-12">
          <div className="order-2 space-y-6 md:order-1 md:col-span-7">
            <div>
              <h2 className="font-serif text-3xl text-slate-900">
                Mr. Rajesh Kumar
              </h2>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Managing Director
              </p>
            </div>

            <p className="font-medium leading-relaxed text-slate-600">
              At Hansraj Public School, we believe education goes beyond
              academics. Our management focuses on building a structured,
              disciplined, and supportive environment where every child receives
              equal opportunity to succeed.
            </p>
          </div>

          <div className="relative order-1 h-70 w-full overflow-hidden rounded-[3rem] shadow-2xl sm:h-85 md:order-2 md:col-span-5 md:h-105 lg:h-115">
            <Image
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800"
              alt="Managing Director of Hansraj Public School"
              fill
              sizes="(max-width: 767px) 100vw, (max-width: 1023px) 42vw, 460px"
              className="object-cover"
            />
          </div>
        </div>

        {/* Principal */}
        <div className="grid items-center gap-8 md:grid-cols-12 md:gap-12">
          <div className="relative h-70 w-full overflow-hidden rounded-[3rem] shadow-2xl sm:h-85 md:col-span-5 md:h-105 lg:h-115">
            <Image
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800"
              alt="Principal of Hansraj Public School"
              fill
              sizes="(max-width: 767px) 100vw, (max-width: 1023px) 42vw, 460px"
              className="object-cover"
            />
          </div>

          <div className="space-y-6 md:col-span-7">
            <div>
              <h2 className="font-serif text-3xl text-slate-900">
                Mrs. Deepa Sharma
              </h2>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Director & Principal
              </p>
            </div>

            <p className="font-medium leading-relaxed text-slate-600">
              As Principal of Hansraj Public School, my focus is on academic
              excellence, disciplined classroom practices, and continuous
              improvement in teaching methodologies aligned with CBSE standards.
            </p>
          </div>
        </div>
      </section>

      {/* 3. GOVERNANCE */}

      <section className="border-t border-slate-200 bg-white px-4 py-12 sm:px-6 sm:py-16 md:py-20">
        <div className="mx-auto max-w-5xl">
          {/* Heading */}
          <div className="mb-6 sm:mb-8">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary">
              School Governance
            </p>

            <h2 className="font-serif text-2xl text-slate-900 sm:text-3xl">
              Board of Trustees
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
              The board provides governance and strategic direction for the
              school.
            </p>
          </div>

          {/* Trustees table */}
          <div className="overflow-hidden border-y border-slate-200">
            <div className="grid grid-cols-[1fr_125px] gap-3 bg-slate-50 px-3 py-3 text-xs font-semibold text-slate-600 sm:grid-cols-[1fr_220px] sm:px-5">
              <span>Name</span>
              <span>Designation</span>
            </div>

            <div className="divide-y divide-slate-200">
              {trustees.map((trustee) => (
                <div
                  key={trustee.name}
                  className="grid grid-cols-[1fr_125px] items-center gap-3 px-3 py-3 sm:grid-cols-[1fr_220px] sm:px-5 sm:py-4"
                >
                  <span className="wrap-break-word text-sm font-medium leading-5 text-slate-800 sm:text-base">
                    {trustee.name}
                  </span>

                  <span className="text-sm leading-5 text-slate-600">
                    {trustee.role}
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
