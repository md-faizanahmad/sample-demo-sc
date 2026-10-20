import { getAcademicSession, getPreviousMonth } from "@/helper/academicYear";
import { FileText, Download } from "lucide-react";

export default function RegistrationDownload() {
  const academicSession = getAcademicSession();
  const updatedMonth = getPreviousMonth();

  return (
    <section className="container mx-auto px-4 py-8 md:px-6 md:py-12">
      <div className="group relative overflow-hidden p-1 transition-all duration-500 md:p-1.5">
        <div className="flex flex-col items-center justify-between gap-8 rounded-[1.8rem] bg-white p-6 md:gap-8 md:rounded-[2.2rem] md:p-8 lg:flex-row lg:gap-8 lg:p-8">
          {/* Icon and registration information */}
          <div className="flex flex-col items-center gap-4 text-center md:flex-row md:gap-5 md:text-left">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent transition-transform duration-500 group-hover:scale-110 md:h-16 md:w-16">
              <FileText size={28} strokeWidth={1.5} />
            </div>

            <div className="max-w-md">
              <h3 className="text-xl font-black uppercase leading-tight tracking-tighter text-primary md:text-xl lg:text-xl">
                Registration <span className="italic text-accent">Form</span>
              </h3>

              <p className="mt-2 text-sm font-medium leading-relaxed text-slate-500 md:text-sm lg:text-sm">
                Download the official {academicSession} admission form. Please
                fill it out and visit our Gaya campus for verification.
              </p>
            </div>
          </div>

          {/* Download action */}
          <div className="w-full lg:w-auto lg:shrink-0">
            <a
              href="/school_registration_form.pdf"
              download="FutureSchool_Gaya_Registration_2026.pdf"
              className="group/btn flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-none transition-colors duration-300 hover:bg-accent hover:text-primary active:scale-95 md:px-8 md:py-4 md:text-xs lg:w-fit lg:px-6 lg:py-3"
            >
              <Download
                size={16}
                className="transition-transform group-hover/btn:-translate-y-0.5"
              />
              Download PDF Form
            </a>

            <p className="mt-3 text-center text-[10px] font-medium uppercase tracking-wide text-slate-400 lg:text-[9px]">
              PDF Document · Updated {updatedMonth}
            </p>
          </div>
        </div>

        {/* Decorative background */}
        <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 opacity-50 blur-3xl md:opacity-100" />
      </div>
    </section>
  );
}
