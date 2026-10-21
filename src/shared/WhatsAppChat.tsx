"use client";

import { useState } from "react";
import Link from "next/link";
import { MessageCircle, X, ArrowUpRight } from "lucide-react";
import { SCHOOL_CONFIG } from "@/config/school";

export default function WhatsAppChat() {
  const [open, setOpen] = useState(false);

  const { phoneRaw, whatsapp, name } = SCHOOL_CONFIG;

  if (!whatsapp.enabled || !phoneRaw) return null;

  const whatsappUrl = `https://wa.me/91${phoneRaw}?text=${encodeURIComponent(
    whatsapp.message,
  )}`;

  return (
    <div
      className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3
                 sm:bottom-5 sm:right-5
                 md:bottom-6 md:right-6"
    >
      {/* CHAT PANEL */}

      <div
        id="whatsapp-chat-panel"
        aria-hidden={!open}
        className={`absolute bottom-[calc(100%+12px)] right-0
    w-[320px] max-w-[calc(100vw-32px)]
    max-h-[min(420px,calc(100dvh-100px))]
    overflow-y-auto overscroll-contain
    rounded-sm border border-slate-200
    bg-white shadow-xl origin-bottom-right
    transition-[opacity,transform,visibility]
    duration-200 ease-out
    ${
      open
        ? "visible translate-y-0 scale-100 opacity-100"
        : "invisible translate-y-2 scale-95 opacity-0 pointer-events-none"
    }`}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between gap-3 bg-green-700 px-4 py-2 text-white sm:px-5">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center ">
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
            </div>

            <div className="min-w-0">
              <p className="truncate text-sm font-semibold">{name}</p>
              <p className="mt-0.5 text-xs text-green-100">WhatsApp support</p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close WhatsApp chat"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg
                       text-white transition-colors hover:bg-white/15
                       focus-visible:outline-none focus-visible:ring-2
                       focus-visible:ring-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* BODY */}
        <div className="p-2">
          <div className="rounded-lg bg-slate-50 p-3.5 sm:p-4">
            <p className="text-sm font-semibold text-slate-900">Hello! 👋</p>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
              Have questions about admissions or our school? We&apos;re happy to
              help you.
            </p>
          </div>

          <div className="mt-4 flex justify-center">
            <Link
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 w-fit items-center justify-center
               gap-2 rounded-lg bg-green-700 px-5 py-3
               text-sm font-semibold text-white
               transition-colors hover:bg-green-800
               active:bg-green-900
               focus-visible:outline-none focus-visible:ring-2
               focus-visible:ring-green-700 focus-visible:ring-offset-2"
            >
              Start
            </Link>
          </div>

          <p className="mt-3 text-center text-xs text-slate-500">
            Opens WhatsApp in a new window
          </p>
        </div>
      </div>

      {/* FIXED FLOATING BUTTON */}
      <button
        type="button"
        onClick={() => setOpen((previous) => !previous)}
        aria-label={open ? "Close WhatsApp chat" : "Open WhatsApp chat"}
        aria-expanded={open}
        aria-controls="whatsapp-chat-panel"
        className="relative flex shrink-0 items-center justify-center
                   h-12 w-12 sm:h-14 sm:w-14 md:h-14 md:w-14
                   rounded-full bg-green-700 text-white
                   shadow-lg shadow-green-900/20
                   transition-[background-color,box-shadow,transform]
                   duration-200
                   hover:bg-green-800 hover:shadow-xl
                   active:scale-95
                   focus-visible:outline-none focus-visible:ring-2
                   focus-visible:ring-green-700 focus-visible:ring-offset-2"
      >
        <span
          className={`absolute inset-0 flex items-center justify-center
            transition-[opacity,transform] duration-200
            ${open ? "rotate-90 scale-75 opacity-0" : "rotate-0 scale-100 opacity-100"}`}
          aria-hidden="true"
        >
          <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 md:h-6 md:w-6" />
        </span>

        <span
          className={`absolute inset-0 flex items-center justify-center
            transition-[opacity,transform] duration-200
            ${open ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-75 opacity-0"}`}
          aria-hidden="true"
        >
          <X className="h-5 w-5 sm:h-6 sm:w-6 md:h-6 md:w-6" />
        </span>
      </button>
    </div>
  );
}
