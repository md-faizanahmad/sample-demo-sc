import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from "lucide-react";
import React from "react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* HEADER */}
      <section className="border-b border-slate-200 bg-slate-50 px-4 pb-8 pt-24 text-center sm:px-6 sm:pb-10 sm:pt-28 lg:pb-14 lg:pt-32">
        <div className="mx-auto w-full max-w-3xl">
          <h1 className="mb-4 text-4xl font-serif leading-tight text-slate-900 sm:text-5xl lg:mb-5 lg:text-6xl">
            Get in{" "}
            <span className="font-medium italic text-primary">Touch.</span>
          </h1>

          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base lg:text-lg">
            Whether you have a question about admissions, academics, or campus
            tours, our administration team is here to assist you.
          </p>
        </div>
      </section>

      {/* CONTACT INFORMATION & MAP */}
      <section className="px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
            {/* CONTACT INFORMATION */}
            <div className="min-w-0 space-y-7 sm:space-y-9">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-8">
                <ContactInfoCard
                  icon={<MapPin size={21} />}
                  title="Visit Our Campus"
                  detail="Gaya, Bihar - 824208"
                  subDetail="+91 00000 00000"
                />

                <ContactInfoCard
                  icon={<Phone size={21} />}
                  title="Call Support"
                  detail="+91 98765 43210"
                  subDetail="+91 00000 00000"
                />

                <ContactInfoCard
                  icon={<Mail size={21} />}
                  title="Email Address"
                  detail="info@abcschoolgaya.edu"
                  subDetail="admissions@abcschoolgaya.edu"
                />

                <ContactInfoCard
                  icon={<Clock size={21} />}
                  title="Office Hours"
                  detail="Mon - Sat: 8:00 AM - 3:00 PM"
                  subDetail="Sunday: Closed"
                />
              </div>

              {/* WHATSAPP CONTACT */}
              <div className="flex items-center justify-between gap-4 border border-emerald-200 bg-emerald-50 p-4 sm:p-5">
                <div className="min-w-0">
                  <h3 className="text-sm font-bold leading-snug text-emerald-950 sm:text-base">
                    Chat with us on WhatsApp
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-emerald-800 sm:text-sm">
                    Quick assistance for general enquiries.
                  </p>
                </div>

                <button
                  type="button"
                  aria-label="WhatsApp contact"
                  className="flex h-11 w-11 shrink-0 items-center justify-center bg-emerald-600 text-white transition-colors hover:bg-emerald-700 sm:h-12 sm:w-12"
                >
                  <MessageCircle size={22} />
                </button>
              </div>
            </div>

            {/* GOOGLE MAP */}
            <div className="relative h-70 min-w-0 overflow-hidden border border-slate-200 bg-slate-100 sm:h-90 lg:h-120 xl:h-130">
              <iframe
                title="School location in Gaya, Bihar"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14457.433221980838!2d84.80165755!3d24.88574365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f3333333333333%3A0x0!2zR2F5YSwgQmloYXI!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="absolute inset-0 h-full w-full border-0 grayscale transition-[filter] duration-500 hover:grayscale-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* QUICK ENQUIRY FORM */}
      <section className="bg-primary px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto w-full max-w-4xl">
          <div className="mb-7 text-center sm:mb-9 lg:mb-10">
            <h2 className="mb-3 text-2xl font-serif leading-tight text-white sm:text-3xl lg:text-4xl">
              Send a Quick Message
            </h2>

            <p className="text-sm leading-relaxed text-white/80 sm:text-base">
              We usually respond within 24 business hours.
            </p>
          </div>

          <form className="grid gap-4 sm:gap-5">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-medium text-white"
                >
                  Your Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  autoComplete="name"
                  required
                  className="min-h-12 w-full rounded-sm border border-white/25 bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-white/60 focus:border-accent focus:ring-1 focus:ring-accent"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-medium text-white"
                >
                  Email Address
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  autoComplete="email"
                  required
                  className="min-h-12 w-full rounded-sm border border-white/25 bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-white/60 focus:border-accent focus:ring-1 focus:ring-accent"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="mb-2 block text-sm font-medium text-white"
              >
                Your Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="How can we help you?"
                rows={4}
                required
                className="w-full resize-y rounded-sm border border-white/25 bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-white/60 focus:border-accent focus:ring-1 focus:ring-accent sm:rows-5"
              />
            </div>

            <button
              type="submit"
              className="flex min-h-12 w-full items-center justify-center gap-2 bg-accent px-6 py-3 text-sm font-bold uppercase tracking-wider text-primary transition-opacity hover:opacity-90 sm:w-auto sm:justify-self-start sm:px-8"
            >
              <Send size={17} />
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

interface ContactInfoCardProp {
  icon: React.ReactElement;
  title: string;
  detail: string;
  subDetail: string;
}

function ContactInfoCard({
  icon,
  title,
  detail,
  subDetail,
}: ContactInfoCardProp) {
  return (
    <div className="min-w-0">
      <div className="mb-3 flex h-10 w-10 items-center justify-center bg-slate-100 text-primary sm:mb-4 sm:h-11 sm:w-11">
        {icon}
      </div>

      <h3 className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-900 sm:text-sm">
        {title}
      </h3>

      <p className="wrap-break-word text-sm leading-relaxed text-slate-700">
        {detail}
        {subDetail && (
          <>
            <br />
            <span className="text-slate-600">{subDetail}</span>
          </>
        )}
      </p>
    </div>
  );
}
