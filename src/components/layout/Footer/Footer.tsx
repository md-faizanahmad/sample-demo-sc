import Link from "next/link";
import { FooterClientWrapper } from "./FooterClientWrapper";
import {
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full overflow-hidden border-t border-slate-100 bg-white py-20">
      {/* The Motion Layer (Subtle background animations) */}
      <FooterClientWrapper />

      {/* Visual Vertical Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="h-32 w-px bg-linear-to-b from-transparent via-accent to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          {/* 1. BRAND IDENTITY - 5 columns */}
          <div className="md:col-span-5 space-y-8">
            <Link href="/" className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-2xl bg-slate-900 flex items-center justify-center shadow-2xl">
                <GraduationCap className="text-accent" size={28} />
              </div>
              <div className="flex flex-col">
                <h2 className="text-2xl font-black tracking-tighter text-slate-900 leading-none">
                  HANSRAJ <span className="text-accent italic">PUBLIC</span>
                </h2>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mt-1">
                  School Gaya
                </span>
              </div>
            </Link>

            <p className="max-w-sm text-base leading-relaxed text-slate-500 font-medium">
              A premier co-educational institution in Gaya, Bihar. We blend
              modern technology with traditional values to nurture the leaders
              of tomorrow.
              <span className="block mt-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
                Affiliated with CBSE, New Delhi.
              </span>
            </p>

            <div className="flex gap-4">
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <button
                  key={i}
                  className="p-3 rounded-full bg-slate-50 text-slate-400 hover:bg-accent hover:text-white transition-all shadow-sm"
                >
                  <Icon size={18} />
                </button>
              ))}
            </div>
          </div>

          {/* 2. NAVIGATION - 3 columns */}
          <div className="md:col-span-3 space-y-6">
            <h3 className="text-xs font-black text-slate-900 uppercase tracking-[0.2em]">
              Explore
            </h3>
            <nav className="flex flex-col space-y-4 text-sm font-bold text-slate-500">
              <Link
                href="/admission-details"
                className="hover:text-accent transition-colors"
              >
                Admission Policy
              </Link>
              <Link
                href="/explore-campus"
                className="hover:text-accent transition-colors"
              >
                Virtual Tour
              </Link>
              <Link
                href="/our-story"
                className="hover:text-accent transition-colors"
              >
                Our History
              </Link>
              <Link
                href="/gallery"
                className="hover:text-accent transition-colors"
              >
                Campus Gallery
              </Link>
            </nav>
          </div>

          {/* 3. CONTACT INFO - 4 columns */}
          <div className="md:col-span-4 space-y-6">
            <h3 className="text-xs font-black text-slate-900 uppercase tracking-[0.2em]">
              Contact
            </h3>
            <ul className="space-y-6 text-sm font-bold text-slate-500">
              <li className="flex items-start gap-4 group">
                <div className="p-2 rounded-lg bg-slate-50 group-hover:bg-accent/10 transition-colors">
                  <MapPin size={18} className="text-accent" />
                </div>
                <address className="not-italic leading-relaxed">
                  Near Bodh Gaya Road, <br />
                  Gaya, Bihar - 824208
                </address>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="p-2 rounded-lg bg-slate-50 group-hover:bg-accent/10 transition-colors">
                  <Phone size={18} className="text-accent" />
                </div>
                <span className="group-hover:text-slate-900 transition-colors">
                  +91 95129 53624
                </span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="p-2 rounded-lg bg-slate-50 group-hover:bg-accent/10 transition-colors">
                  <Mail size={18} className="text-accent" />
                </div>
                <span className="group-hover:text-slate-900 transition-colors truncate">
                  hansraj@schoolgaya.edu
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="mt-20 flex flex-col items-center justify-between border-t border-slate-100 pt-10 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 md:flex-row">
          <p>
            © {currentYear} Hansraj Public School.{" "}
            {/* <span className="text-slate-300 ml-1">Crafted for Excellence.</span> */}
          </p>
          <div className="mt-8 flex space-x-10 md:mt-0">
            <Link
              href="/privacy"
              className="hover:text-accent transition-colors"
            >
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-accent transition-colors">
              Terms
            </Link>
            <Link
              href="/contact"
              className="hover:text-accent transition-colors"
            >
              Locate Us
            </Link>
          </div>{" "}
          {/* <Link href="agency.mdfaizanahmad.in" className="mt-8">
            Designed and Developed By MFA
          </Link> */}
        </div>
      </div>
    </footer>
  );
}
