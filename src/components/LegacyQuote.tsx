import Image from "next/image";

export default function LegacyQuote() {
  return (
    <section className="container mx-auto px-4 py-8 sm:px-6 sm:py-10">
      <div className="relative isolate flex min-h-70 w-full items-center justify-center overflow-hidden  sm:min-h-80  md:min-h-87.5">
        {/* Background Image */}
        <div className="absolute inset-0 -z-20">
          <Image
            src="/M_Gandhi.jpg"
            alt="Mahatma Gandhi"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
            className="object-cover object-center grayscale"
          />
        </div>

        {/* Brand Overlay */}
        <div className="absolute inset-0 -z-10 bg-primary/55" />

        {/* Quote Content */}
        <div className="w-full max-w-2xl px-5 py-8 text-center sm:px-8 sm:py-10 md:px-12">
          <div className="mb-5 flex items-center justify-center gap-3 sm:mb-6">
            <span className="h-px w-7 bg-accent sm:w-10" />
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-accent sm:text-xs sm:tracking-[0.35em]">
              Inspiration
            </span>
            <span className="h-px w-7 bg-accent sm:w-10" />
          </div>

          <blockquote>
            <p className="text-xl font-bold leading-snug tracking-tight text-white sm:text-2xl md:text-3xl md:leading-tight">
              &ldquo;What is really needed to make democracy function is not
              knowledge of facts,
              <span className="text-accent italic">
                {" "}
                but right education.&rdquo;
              </span>
            </p>

            <footer className="mt-6 sm:mt-7">
              <cite className="not-italic">
                <span className="block text-xs font-bold uppercase tracking-wider text-white sm:text-sm sm:tracking-widest">
                  — Mahatma Gandhi
                </span>
                <span className="mt-1 block text-[10px] font-medium uppercase tracking-wider text-white/70 sm:text-xs">
                  Father of the Nation
                </span>
              </cite>
            </footer>
          </blockquote>
        </div>

        {/* Decorative Identity */}
        <div className="pointer-events-none absolute bottom-4 right-6 z-0 hidden select-none text-2xl font-black uppercase text-white/10 lg:block">
          Gaya
        </div>
      </div>
    </section>
  );
}
