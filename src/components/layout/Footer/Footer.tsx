import Link from "next/link";
import { FooterClientWrapper } from "./FooterClientWrapper";
import { GraduationCap, MapPin, Phone, Mail } from "lucide-react";
import GetDirectionsButton from "@/shared/GetDirectionsButton";
import SocialLinks from "@/shared/SocialLinks";
import { SCHOOL_CONFIG } from "@/config/school";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const {
    name,
    board,
    city,
    state,
    phone,
    phoneRaw,
    email,
    address,
    location,
    classesOffered,
    medium,
    coEd,
  } = SCHOOL_CONFIG;

  return (
    <footer
      className="relative w-full overflow-hidden border-t border-slate-100 bg-white py-20"
      aria-label="Site Footer"
    >
      <FooterClientWrapper />

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          {/* BRAND */}
          <div className="md:col-span-5 space-y-8">
            <Link href="/" className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-2xl bg-slate-900 flex items-center justify-center">
                <GraduationCap className="text-accent" size={28} />
              </div>
              <div>
                <h2 className="text-2xl font-black text-slate-900 leading-none">
                  {name.split(" ")[0]}{" "}
                  <span className="text-accent italic">
                    {name.replace(name.split(" ")[0], "").trim()}
                  </span>
                </h2>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  {city}, {state}
                </span>
              </div>
            </Link>

            <p className="max-w-sm text-slate-500 font-medium leading-relaxed">
              {name} is a {coEd ? "co-educational" : ""}, {medium.toLowerCase()}{" "}
              school in {city}, {state}, offering quality education with strong
              academic discipline. Admissions are open for {classesOffered}.
            </p>

            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
              {coEd ? "Co-Educational • " : ""}
              {board} Affiliated • {city}
            </p>

            {/* SOCIAL LINKS */}
            <SocialLinks />
          </div>

          {/* QUICK LINKS */}
          <div className="md:col-span-3 space-y-6">
            <h3 className="text-xs font-black uppercase tracking-widest">
              Quick Links
            </h3>
            <nav className="flex flex-col space-y-3 text-sm font-bold text-slate-500">
              <Link href="/admission" className="hover:text-accent">
                Admissions
              </Link>
              <Link
                href="/admission/admission-enquiry"
                className="hover:text-accent"
              >
                Admission Enquiry
              </Link>
              <Link href="/gallery" className="hover:text-accent">
                Gallery
              </Link>
              <Link href="/contact" className="hover:text-accent">
                Contact School
              </Link>
            </nav>
          </div>

          {/* CONTACT + MAP */}
          <div className="md:col-span-4 space-y-6">
            <h3 className="text-xs font-black uppercase tracking-widest">
              Contact & Location
            </h3>

            <address className="space-y-4 not-italic text-sm font-bold text-slate-500">
              <p className="flex gap-3">
                <MapPin className="text-accent" size={18} />
                {address.line1}, {address.city}, {address.state} –{" "}
                {address.postalCode}
              </p>

              <p className="flex gap-3">
                <Phone className="text-accent" size={18} />
                <a href={`tel:+91${phoneRaw}`} className="hover:text-slate-900">
                  {phone}
                </a>
              </p>

              <p className="flex gap-3">
                <Mail className="text-accent" size={18} />
                <a href={`mailto:${email}`} className="hover:text-slate-900">
                  {email}
                </a>
              </p>
            </address>

            {/* MAP PREVIEW */}
            <div className="w-full overflow-hidden rounded-xl border border-slate-200 aspect-video">
              <iframe
                title={`${name} Location`}
                src={`https://www.google.com/maps?q=${location.latitude},${location.longitude}&z=15&output=embed`}
                loading="lazy"
                className="h-full w-full border-0"
              />
            </div>

            {/* DIRECTIONS CTA */}
            <GetDirectionsButton />
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-20 border-t border-slate-100 pt-10 flex flex-col md:flex-row items-center justify-between text-[10px] font-bold uppercase tracking-widest text-slate-400">
          <p>
            © {currentYear} {name}, {city}
          </p>
          <div className="flex gap-8 mt-6 md:mt-0">
            <Link href="/privacy" className="hover:text-accent">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-accent">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
