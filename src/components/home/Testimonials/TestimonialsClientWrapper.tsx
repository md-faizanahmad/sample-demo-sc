"use client";

import Image from "next/image";
import { Testimonial } from "./TestimonialsGlow";
import { useEffect, useRef, useState } from "react";

export function TestimonialsClientWrapper({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateActiveIndex = () => {
      const cards = Array.from(container.children) as HTMLElement[];

      if (!cards.length) return;

      const containerCenter =
        container.getBoundingClientRect().left + container.clientWidth / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;

      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.left + rect.width / 2;
        const distance = Math.abs(cardCenter - containerCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIdx(closestIndex);
    };

    container.addEventListener("scroll", updateActiveIndex, {
      passive: true,
    });

    updateActiveIndex();

    return () => {
      container.removeEventListener("scroll", updateActiveIndex);
    };
  }, [testimonials.length]);

  const scrollToCard = (index: number) => {
    const container = containerRef.current;
    const card = container?.children[index] as HTMLElement | undefined;

    if (!container || !card) return;

    container.scrollTo({
      left: card.offsetLeft - (container.clientWidth - card.clientWidth) / 2,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full">
      <div
        ref={containerRef}
        className="
          flex gap-4 overflow-x-auto
          snap-x snap-mandatory scroll-smooth
          px-[7.5vw] pb-2
          sm:px-[15vw]
          md:grid md:grid-cols-2 md:gap-5
          md:overflow-visible md:snap-none md:px-6
          lg:grid-cols-3
          [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden
        "
      >
        {testimonials.map((t) => (
          <blockquote
            key={t.id}
            className="
              flex w-[85vw] shrink-0 snap-center
              flex-col justify-between
              border border-slate-200
              bg-white p-4
              sm:w-[70vw] sm:p-5
              md:w-auto md:p-5
            "
          >
            <div>
              <span
                aria-hidden="true"
                className="mb-2 block text-2xl leading-none text-slate-300"
              >
                “
              </span>

              <p className="text-sm leading-6 text-slate-700 md:text-[15px]">
                {t.quote}
              </p>
            </div>

            <footer className="mt-4 flex items-center gap-3 border-t border-slate-100 pt-3">
              <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-slate-100">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>

              <div className="min-w-0">
                <cite className="block truncate text-sm font-semibold not-italic text-slate-900">
                  {t.name}
                </cite>

                <span className="mt-0.5 block text-xs text-slate-500">
                  {t.role}
                </span>
              </div>
            </footer>
          </blockquote>
        ))}
      </div>

      {testimonials.length > 1 && (
        <div className="mt-3 flex justify-center gap-2 md:hidden">
          {testimonials.map((t, index) => (
            <button
              key={t.id}
              type="button"
              onClick={() => scrollToCard(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              aria-current={index === activeIdx ? "true" : undefined}
              className={`
                h-1.5 transition-all duration-200
                ${
                  index === activeIdx
                    ? "w-5 bg-slate-800"
                    : "w-1.5 bg-slate-300"
                }
              `}
            />
          ))}
        </div>
      )}
    </section>
  );
}
