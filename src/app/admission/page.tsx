import {
  Calendar,
  CheckCircle,
  FileText,
  Phone,
  Mail,
  HelpCircle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Admission Details | Hansraj Public School",
  description:
    "Official admission process, criteria, and documentation for Hansraj Public School, Gaya.",
};

export default function AdmissionPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* --- HERO SECTION --- */}
      <section className="pt-32 pb-20 px-6 text-center bg-slate-50">
        <div className="container mx-auto max-w-4xl">
          <span className="text-accent text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">
            Academic Session 2026-27
          </span>
          <h1 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tighter mb-6 leading-[0.9]">
            Admission <span className="italic text-accent">Guidelines</span>
          </h1>
          <p className="text-slate-500 font-medium max-w-2xl mx-auto text-lg">
            Everything you need to know about joining Hansraj Public School. We
            ensure a transparent and merit-based process for every student.
          </p>
        </div>
      </section>

      {/* --- DETAILS CONTENT --- */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            {/* 1. Academic Year & Timeline */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-accent/10 rounded-2xl text-accent">
                  <Calendar size={24} />
                </div>
                <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">
                  Timeline
                </h2>
              </div>
              <div className="space-y-4 font-medium">
                <p className="text-slate-600 leading-relaxed">
                  The academic year extends from{" "}
                  <span className="text-slate-900 font-bold">June – April</span>
                  .
                </p>
                <div className="p-6 rounded-[2rem] bg-slate-50 border border-slate-100">
                  <p className="text-sm text-slate-500 mb-2 font-bold uppercase tracking-widest">
                    Registration Opens
                  </p>
                  <p className="text-slate-900">
                    Admission for{" "}
                    <span className="font-bold">
                      Nursery (Balvarg-1), KG1, KG2, and 1st Class
                    </span>{" "}
                    begins at the end of January annually.
                  </p>
                </div>
              </div>
            </div>

            {/* 2. Admission Criteria */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-accent/10 rounded-2xl text-accent">
                  <CheckCircle size={24} />
                </div>
                <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">
                  Criteria
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center justify-between p-5 rounded-2xl border border-slate-100 shadow-sm">
                  <span className="font-bold text-slate-700">
                    KG1, KG2 & 1st Class
                  </span>
                  <span className="text-xs font-black px-3 py-1 bg-accent/10 text-accent rounded-full uppercase">
                    First Come First Served
                  </span>
                </div>
                <div className="flex items-center justify-between p-5 rounded-2xl border border-slate-100 shadow-sm">
                  <span className="font-bold text-slate-700">
                    2nd to 10th Class
                  </span>
                  <span className="text-xs font-black px-3 py-1 bg-slate-900 text-white rounded-full uppercase">
                    Merit Based
                  </span>
                </div>
              </div>
              <p className="text-sm text-slate-500 italic">
                *Admission is subject to available seats and meeting required
                standards.
              </p>
            </div>

            {/* 3. Documents Required (Full Width) */}
            <div className="md:col-span-2 bg-slate-900 rounded-[3rem] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-10">
                  <FileText className="text-accent" size={28} />
                  <h2 className="text-3xl font-black uppercase tracking-tight">
                    Documents Required
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <ul className="space-y-5">
                    <li className="flex items-start gap-4">
                      <div className="mt-1.5 h-2 w-2 rounded-full bg-accent shrink-0" />
                      <span className="text-slate-300">
                        Xerox Copy of Birth Certificate from
                        Municipality/Panchayat
                      </span>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="mt-1.5 h-2 w-2 rounded-full bg-accent shrink-0" />
                      <span className="text-slate-300">
                        3 Recent Passport size photographs
                      </span>
                    </li>
                  </ul>
                  <ul className="space-y-5">
                    <li className="flex items-start gap-4">
                      <div className="mt-1.5 h-2 w-2 rounded-full bg-accent shrink-0" />
                      <span className="text-slate-300">
                        Original Leaving Certificate (for 2nd to 12th class)
                      </span>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="mt-1.5 h-2 w-2 rounded-full bg-accent shrink-0" />
                      <span className="text-slate-300">
                        Xerox Copy of Aadhar Card
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 blur-[80px] -mr-32 -mt-32" />
            </div>

            {/* 4. Admission Process & Contact */}
            <div className="md:col-span-2 grid grid-cols-1 lg:grid-cols-3 gap-8 pt-10">
              <div className="lg:col-span-2 p-8 md:p-10 rounded-[2.5rem] border-2 border-dashed border-slate-200">
                <div className="flex items-center gap-3 mb-6">
                  <HelpCircle className="text-accent" size={24} />
                  <h3 className="text-xl font-black text-slate-900">
                    Process & Registration
                  </h3>
                </div>
                <p className="text-slate-600 font-medium mb-6">
                  A registration form, duly filled must be submitted in the
                  office before the due date. If selected, parents are requested
                  to remit the fees and submit required documents.
                </p>
                <Link
                  href="/admission/admission-enquiry"
                  className="inline-flex items-center gap-2 text-accent font-bold uppercase tracking-widest text-xs hover:gap-4 transition-all"
                >
                  Go to Enquiry Form <ArrowRight size={16} />
                </Link>
              </div>

              <div className="bg-slate-50 p-8 md:p-10 rounded-[2.5rem] flex flex-col justify-center">
                <h4 className="font-black text-slate-900 mb-6 uppercase tracking-widest text-xs">
                  Help Desk
                </h4>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-white rounded-lg shadow-sm text-accent">
                      <Phone size={18} />
                    </div>
                    <span className="font-bold text-slate-700">9512953624</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-white rounded-lg shadow-sm text-accent">
                      <Mail size={18} />
                    </div>
                    <span className="font-bold text-slate-700 text-sm break-all">
                      hansraj@gmail.com
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
