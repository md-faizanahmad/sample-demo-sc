import { feeFAQSchema } from "@/schema/feeFAQSchema";
import { CheckCircle, Download, FileText, Info } from "lucide-react";

export default function FeePage() {
  const feeData = [
    {
      class: "Nursery - UKG",
      oneTime: "₹15,000",
      monthly: "₹2,500",
      annual: "₹5,000",
    },
    {
      class: "Grade I - V",
      oneTime: "₹18,000",
      monthly: "₹3,200",
      annual: "₹6,500",
    },
    {
      class: "Grade VI - VIII",
      oneTime: "₹20,000",
      monthly: "₹3,800",
      annual: "₹7,500",
    },
    {
      class: "Grade IX - X",
      oneTime: "₹25,000",
      monthly: "₹4,500",
      annual: "₹8,500",
    },
    {
      class: "Grade XI - XII",
      oneTime: "₹30,000",
      monthly: "₹5,500",
      annual: "₹10,000",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(feeFAQSchema()),
        }}
      />
      ;
      <main className="bg-white min-h-screen">
        {/* 1. HEADER */}
        <section className="bg-slate-50 pt-24 pb-12 md:pt-40 md:pb-24 px-6 border-b border-slate-100">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-3xl md:text-6xl font-serif text-slate-900 leading-tight mb-6">
              Transparent <br />
              <span className="italic text-primary font-medium">
                Investment in Future.
              </span>
            </h1>
            <p className="text-base md:text-lg text-slate-500 leading-relaxed font-medium max-w-2xl mx-auto">
              We provide world-class facilities at a competitive fee structure,
              ensuring quality education is accessible and clearly communicated.
            </p>
            <div className="mt-8">
              <button className="inline-flex items-center gap-2 bg-blue-900 text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-blue-800 transition-all shadow-lg shadow-blue-100">
                <Download size={18} /> Download Full PDF
              </button>
            </div>
          </div>
        </section>

        {/* 2. FEE SECTION */}
        <section className="px-4 py-8 sm:px-6 sm:py-12 lg:py-16">
          <div className="mx-auto w-full max-w-5xl">
            <div className="divide-y divide-slate-200 border-y border-slate-200">
              {feeData.map((row) => (
                <details key={row.class} className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-4 transition-colors hover:bg-slate-50 sm:px-6 sm:py-5 [&::-webkit-details-marker]:hidden">
                    <span className="text-sm font-semibold text-slate-900 sm:text-base">
                      {row.class}
                    </span>

                    <svg
                      className="h-5 w-5 shrink-0 text-blue-900 transition-transform duration-200 group-open:rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </summary>

                  <div className=" px-4 pb-4 sm:px-6 sm:pb-5">
                    <div className="overflow-hidden rounded-sm ">
                      <div className="flex items-center justify-between gap-4 border-b border-slate-100 px-4 py-3 sm:px-5">
                        <span className="text-xs font-medium text-slate-500 sm:text-sm">
                          Admission (One-time)
                        </span>
                        <span className="text-sm font-semibold text-slate-900">
                          {row.oneTime}
                        </span>
                      </div>

                      <div className="flex items-center justify-between gap-4 border-b border-slate-100 px-4 py-3 sm:px-5">
                        <span className="text-xs font-medium text-slate-500 sm:text-sm">
                          Monthly Tuition
                        </span>
                        <span className="text-sm font-bold text-primary">
                          {row.monthly}
                        </span>
                      </div>

                      <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-5">
                        <span className="text-xs font-medium text-slate-500 sm:text-sm">
                          Annual Charges
                        </span>
                        <span className="text-sm font-semibold text-slate-900">
                          {row.annual}
                        </span>
                      </div>
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 3. ADDITIONAL DETAILS */}
        <section className="pb-24 px-4 md:px-6">
          <div className="container mx-auto max-w-5xl grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Facilities */}
            <div className="space-y-6">
              <h3 className="text-2xl font-serif text-slate-900 flex items-center gap-3">
                <Info className="text-primary" size={20} /> Other Facilities
              </h3>
              <div className="space-y-2">
                <FeeAddon
                  label="Transport Fee"
                  value="₹1,200 - ₹2,500 (By Distance)"
                />
                <FeeAddon label="Examination Fee" value="₹500 (Per Term)" />
                <FeeAddon
                  label="Uniform & Books"
                  value="External (Refer to store)"
                />
              </div>
            </div>

            {/* Guidelines */}

            <div className="bg-slate-900 p-6 sm:p-8 md:p-10 shadow-xl shadow-slate-900/10">
              <h3 className="mb-8 flex items-center gap-3 text-xl font-bold text-white underline decoration-blue-400 underline-offset-8">
                <FileText className="shrink-0 text-blue-400" size={20} />
                Payment Guidelines
              </h3>

              <ul className="space-y-5 text-sm leading-relaxed text-slate-100 md:text-base">
                <li className="flex items-start gap-3">
                  <CheckCircle
                    className="mt-0.5 shrink-0 text-emerald-400"
                    size={20}
                  />
                  <span>
                    Fees must be paid by the{" "}
                    <strong className="font-bold text-white">
                      10th of every month
                    </strong>
                    .
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle
                    className="mt-0.5 shrink-0 text-emerald-400"
                    size={20}
                  />
                  <span>
                    Sibling discount:{" "}
                    <strong className="font-bold text-white">10% off</strong>{" "}
                    for the younger child.
                  </span>
                </li>

                <li className="flex items-start gap-3  p-4 font-semibold text-red-900">
                  <span>
                    Late fee of ₹50 per day applies after the due date.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function FeeAddon({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-center p-5 rounded-2xl border border-transparent hover:border-slate-100 hover:bg-slate-50 transition-all">
      <span className="text-slate-700 font-bold text-sm md:text-base">
        {label}
      </span>
      <span className="text-primary text-sm md:text-base font-bold text-right">
        {value}
      </span>
    </div>
  );
}
