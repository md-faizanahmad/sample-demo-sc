// src/components/sections/RegistrationDownload.tsx
import { FileText, Download } from "lucide-react";

export default function RegistrationDownload() {
  return (
    <section className="container mx-auto px-6 py-12">
      <div className="relative group overflow-hidden rounded-[2rem] bg-slate-50 border border-slate-200 p-1">
        <div className="bg-white rounded-[1.8rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          {/* 1. Icon & Text */}
          <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <div className="h-20 w-20 shrink-0 rounded-2xl bg-accent/10 flex items-center justify-center text-accent">
              <FileText size={40} strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-2xl font-black text-primary tracking-tighter uppercase">
                Registration <span className="text-accent italic">Form</span>
              </h3>
              <p className="mt-2 text-slate-500 font-medium max-w-sm">
                Download the official 2026-27 admission form. Please fill it out
                and visit our Gaya campus for verification.
              </p>
            </div>
          </div>

          {/* 2. Action Button */}
          <div className="w-full md:w-auto">
            <a
              href="/school_registration_form.pdf"
              download="FutureSchool_Gaya_Registration_2026.pdf"
              className="flex items-center justify-center gap-3 bg-primary text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-accent hover:text-primary transition-all duration-300 shadow-xl hover:shadow-accent/20 active:scale-95 group/btn"
            >
              <Download
                size={18}
                className="group-hover/btn:-translate-y-1 transition-transform"
              />
              Download PDF
            </a>
            <p className="text-[10px] text-center mt-3 font-bold text-slate-400 uppercase tracking-tighter">
              PDF Format • 1.2 MB • Updated Feb 2026
            </p>
          </div>
        </div>

        {/* Decorative background element */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-32 h-32 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      </div>
    </section>
  );
}
