"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function EnquiryButton({
  className = "",
}: {
  className?: string;
}) {
  return (
    <Link
      href="/admission/admission-enquiry"
      className={`inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-slate-900 transition-all shadow-xl active:scale-95 ${className}`}
    >
      Admission Enquiry <ArrowRight size={16} />
    </Link>
  );
}
