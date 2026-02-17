import { FileText, Download } from "lucide-react";

export default function RegistrationDownload() {
  return (
    // Mobile-first: py-8, Desktop: py-12
    <section className="container mx-auto px-4 md:px-6 py-8 md:py-12">
      {/* Outer Border Frame */}
      <div className="relative group overflow-hidden rounded-[2rem] md:rounded-[2.5rem] bg-slate-100/50 border border-slate-200 p-1 md:p-1.5 transition-all duration-500 hover:shadow-xl">
        {/* Inner Card Body */}
        <div className="bg-white rounded-[1.8rem] md:rounded-[2.2rem] p-6 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-10">
          {/* 1. Icon & Text Section */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-center md:text-left">
            {/* Responsive Icon: Smaller on mobile */}
            <div className="h-16 w-16 md:h-20 md:w-20 shrink-0 rounded-2xl bg-accent/10 flex items-center justify-center text-accent transition-transform group-hover:scale-110 duration-500">
              <FileText size={32} strokeWidth={1.5} />
            </div>

            <div className="max-w-md">
              <h3 className="text-xl md:text-2xl font-black text-primary tracking-tighter uppercase leading-tight">
                Registration <span className="text-accent italic">Form</span>
              </h3>
              <p className="mt-2 text-sm md:text-base text-slate-500 font-medium leading-relaxed">
                Download the official 2026-27 admission form. Please fill it out
                and visit our Gaya campus for verification.
              </p>
            </div>
          </div>

          {/* 2. Action Button Section */}
          <div className="w-full lg:w-auto">
            <a
              href="/school_registration_form.pdf"
              download="FutureSchool_Gaya_Registration_2026.pdf"
              className="flex items-center justify-center gap-3 bg-primary text-white w-full lg:w-fit px-8 md:px-10 py-4 md:py-5 rounded-2xl font-black uppercase tracking-widest text-xs md:text-sm hover:bg-accent hover:text-primary transition-all duration-300 shadow-lg hover:shadow-accent/30 active:scale-95 group/btn"
            >
              <Download
                size={18}
                className="group-hover/btn:-translate-y-1 transition-transform"
              />
              Download PDF Form
            </a>

            <p className="text-[9px] md:text-[10px] text-center mt-4 font-bold text-slate-400 uppercase tracking-widest">
              PDF Format • 1.2 MB • Updated Feb 2026
            </p>
          </div>
        </div>

        {/* Decorative background element: Only visible on larger screens to keep mobile clean */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-32 h-32 bg-accent/10 rounded-full blur-3xl pointer-events-none opacity-50 md:opacity-100" />
      </div>
    </section>
  );
}
