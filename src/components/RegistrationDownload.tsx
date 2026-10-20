import { getAcademicSession, getPreviousMonth } from "@/helper/academicYear";
import { FileText, Download } from "lucide-react";

export default function RegistrationDownload() {
  const academicSession = getAcademicSession();
  const updatedMonth = getPreviousMonth();
  return (
    <section className="container mx-auto px-4 py-8 md:px-6 md:py-10">
      <div className="flex flex-col gap-6  p-5 sm:p-6 md:flex-row md:items-center md:justify-between md:gap-8 md:p-8">
        {/* Registration form information */}
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-slate-200 bg-slate-50 text-primary">
            <FileText size={24} strokeWidth={1.6} />
          </div>

          <div className="min-w-0">
            <h3 className="text-lg font-semibold leading-snug text-slate-900 md:text-xl">
              Registration Form
            </h3>

            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600">
              Download the official ${academicSession} admission form. Complete
              the form and visit our Gaya campus for verification.
            </p>
          </div>
        </div>

        {/* Download action */}
        <div className="w-full shrink-0 md:w-auto">
          <a
            href="/school_registration_form.pdf"
            download="FutureSchool_Gaya_Registration_2026.pdf"
            className="
              inline-flex min-h-11 w-full items-center justify-center gap-2
              border border-primary bg-primary px-5 py-3
              text-sm font-semibold text-white
              transition-colors duration-200
              hover:bg-white hover:text-primary
              focus-visible:outline-2 focus-visible:outline-offset-2
              focus-visible:outline-primary
              md:w-auto
            "
          >
            <Download size={17} strokeWidth={1.8} />
            Download PDF Form
          </a>

          <p className="mt-2 text-center text-xs text-slate-500 md:text-right">
            PDF document · Updated {updatedMonth}
          </p>
        </div>
      </div>
    </section>
  );
}
