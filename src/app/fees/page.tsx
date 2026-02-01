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
    <main className="bg-white min-h-screen">
      {/* 1. HEADER */}
      <section className="bg-slate-50 pt-24 pb-12 md:pt-40 md:pb-24 px-6 border-b border-slate-100">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-3xl md:text-6xl font-serif text-slate-900 leading-tight mb-6">
            Transparent <br />
            <span className="italic text-blue-600 font-medium">
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
      <section className="py-12 md:py-20 px-4 md:px-6">
        <div className="container mx-auto max-w-5xl">
          {/* MOBILE VIEW: Card Stack (Visible only on Mobile) */}
          <div className="grid gap-6 md:hidden">
            {feeData.map((row) => (
              <div
                key={row.class}
                className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden"
              >
                <div className="bg-blue-900 p-4">
                  <h3 className="text-white font-bold text-lg">{row.class}</h3>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-center border-b border-slate-50 pb-2">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                      Admission (One-time)
                    </span>
                    <span className="text-slate-900 font-bold">
                      {row.oneTime}
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-b border-slate-50 pb-2">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                      Monthly Tuition
                    </span>
                    <span className="text-blue-600 font-black text-lg">
                      {row.monthly}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                      Annual Charges
                    </span>
                    <span className="text-slate-900 font-bold">
                      {row.annual}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* DESKTOP VIEW: Professional Table (Visible only on MD and up) */}
          <div className="hidden md:block overflow-hidden rounded-[2.5rem] border border-slate-100 shadow-2xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-blue-900 text-white">
                  <th className="p-8 text-xs font-bold uppercase tracking-widest">
                    Academic Wing
                  </th>
                  <th className="p-8 text-xs font-bold uppercase tracking-widest text-center">
                    Admission Fee
                  </th>
                  <th className="p-8 text-xs font-bold uppercase tracking-widest text-center">
                    Monthly Tuition
                  </th>
                  <th className="p-8 text-xs font-bold uppercase tracking-widest text-center">
                    Annual Charges
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {feeData.map((row) => (
                  <tr
                    key={row.class}
                    className="hover:bg-blue-50/30 transition-colors"
                  >
                    <td className="p-8 font-black text-slate-900 text-lg">
                      {row.class}
                    </td>
                    <td className="p-8 text-slate-600 font-bold text-center">
                      {row.oneTime}
                    </td>
                    <td className="p-8 text-blue-700 font-black text-xl text-center">
                      {row.monthly}
                    </td>
                    <td className="p-8 text-slate-600 font-bold text-center">
                      {row.annual}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 3. ADDITIONAL DETAILS */}
      <section className="pb-24 px-4 md:px-6">
        <div className="container mx-auto max-w-5xl grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Facilities */}
          <div className="space-y-6">
            <h3 className="text-2xl font-serif text-slate-900 flex items-center gap-3">
              <Info className="text-blue-600" size={24} /> Other Facilities
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
          <div className="bg-slate-900 p-8 md:p-10 rounded-[2.5rem] shadow-2xl shadow-blue-900/20">
            <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3 underline decoration-blue-500 underline-offset-8">
              <FileText className="text-blue-400" size={20} /> Payment
              Guidelines
            </h3>
            <ul className="space-y-5 text-sm md:text-base text-slate-300">
              <li className="flex gap-4">
                <CheckCircle className="text-blue-400 shrink-0" size={20} />
                <span>
                  Fees must be paid by the <strong>10th of every month</strong>.
                </span>
              </li>
              <li className="flex gap-4">
                <CheckCircle className="text-blue-400 shrink-0" size={20} />
                <span>
                  Sibling discount: <strong>10% off</strong> for the younger
                  child.
                </span>
              </li>
              <li className="flex gap-4 p-4 bg-white/5 rounded-2xl border border-white/10 text-red-400 font-bold">
                <Info className="shrink-0" size={20} />
                <span>Late fee of ₹50 per day applies after due date.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

function FeeAddon({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-center p-5 rounded-2xl border border-transparent hover:border-slate-100 hover:bg-slate-50 transition-all">
      <span className="text-slate-700 font-bold text-sm md:text-base">
        {label}
      </span>
      <span className="text-blue-600 text-sm md:text-base font-bold text-right">
        {value}
      </span>
    </div>
  );
}
