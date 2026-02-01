import AdmissionForm from "@/components/AdmissionForm";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Admission Enquiry | ABC Public School",
  description:
    "Inquire about admissions for the 2026-27 academic session at ABC Public School, Gaya.",
};

export default function AdmissionPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Toaster position="top-right" containerClassName="mt-12" />
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 text-center">
        <div className="container mx-auto max-w-4xl">
          <span className="text-blue-600 text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">
            Join Our Community
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-slate-900 leading-tight mb-6">
            Begin the <span className="italic text-blue-600">Admission</span>{" "}
            Process.
          </h1>
          <p className="text-slate-500 font-medium max-w-2xl mx-auto">
            Fill out the form below to initiate an enquiry. Our admissions team
            will reach out to you within 24 hours to schedule a campus tour.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="pb-24 px-6">
        <div className="container mx-auto max-w-2xl">
          <AdmissionForm />
        </div>
      </section>
    </main>
  );
}
