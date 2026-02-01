import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from "lucide-react";
import React from "react";

export default function ContactPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* 1. HEADER */}
      <section className="bg-slate-50 pt-32 pb-16 md:pt-40 md:pb-24 px-6 border-b border-slate-100 text-center">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-serif text-slate-900 leading-tight mb-6">
            Get in{" "}
            <span className="italic text-blue-600 font-medium">Touch.</span>
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed font-medium">
            Whether you have a question about admissions, academics, or campus
            tours, our administration team is here to assist you.
          </p>
        </div>
      </section>

      {/* 2. CONTACT GRID */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: Contact Information */}
            <div className="space-y-12">
              <div className="grid sm:grid-cols-2 gap-8">
                <ContactInfoCard
                  icon={<MapPin size={24} />}
                  title="Visit Our Campus"
                  detail="Gaya, Bihar - 824208"
                  subDetail="+91 00000 00000"
                />
                <ContactInfoCard
                  icon={<Phone size={24} />}
                  title="Call Support"
                  detail="+91 98765 43210"
                  subDetail="+91 00000 00000"
                />
                <ContactInfoCard
                  icon={<Mail size={24} />}
                  title="Email Address"
                  detail="info@abcschoolgaya.edu"
                  subDetail="admissions@abcschoolgaya.edu"
                />
                <ContactInfoCard
                  icon={<Clock size={24} />}
                  title="Office Hours"
                  detail="Mon - Sat: 8:00 AM - 3:00 PM"
                  subDetail="Sunday: Closed"
                />
              </div>

              {/* Quick WhatsApp Action (High Conversion) */}
              <div className="bg-emerald-50 p-8 rounded-[2rem] border border-emerald-100 flex items-center justify-between">
                <div>
                  <h3 className="text-emerald-900 font-bold text-lg">
                    Chat with us on WhatsApp
                  </h3>
                  <p className="text-emerald-700 text-sm">
                    Instant response for general enquiries.
                  </p>
                </div>
                <button className="h-14 w-14 rounded-full bg-emerald-500 text-white flex items-center justify-center hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-200">
                  <MessageCircle size={28} />
                </button>
              </div>
            </div>

            {/* Right: Embedded Map (Google Maps Placeholder) */}
            <div className="relative w-full h-125 lg:h-full min-h-100 rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl bg-slate-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14457.433221980838!2d84.80165755!3d24.88574365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f3333333333333%3A0x0!2zR2F5YSwgQmloYXI!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="absolute inset-0 w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. QUICK ENQUIRY FORM (Simplified) */}
      <section className="bg-blue-900 py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif text-white mb-4">
              Send a Quick Message
            </h2>
            <p className="text-blue-200 text-sm">
              We usually respond within 24 business hours.
            </p>
          </div>

          <form className="grid gap-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="bg-blue-950 border border-blue-800 text-white px-6 py-4 rounded-2xl outline-none focus:border-yellow-500 transition-all"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="bg-blue-950 border border-blue-800 text-white px-6 py-4 rounded-2xl outline-none focus:border-yellow-500 transition-all"
              />
            </div>
            <textarea
              placeholder="How can we help you?"
              rows={5}
              className="bg-blue-950 border border-blue-800 text-white px-6 py-4 rounded-2xl outline-none focus:border-yellow-500 transition-all"
            />
            <button className="bg-yellow-500 text-blue-950 py-4 rounded-full font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2 hover:bg-yellow-400 transition-all shadow-xl">
              <Send size={18} /> Send Message
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
    <div className="space-y-3">
      <div className="h-12 w-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shadow-sm">
        {icon}
      </div>
      <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest">
        {title}
      </h3>
      <p className="text-slate-600 text-sm leading-relaxed">
        {detail}
        {subDetail && (
          <>
            <br />
            {subDetail}
          </>
        )}
      </p>
    </div>
  );
}
