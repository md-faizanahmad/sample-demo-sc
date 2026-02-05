// src/components/sections/NoticeAside.tsx

import { getNotices } from "@/lib/getNotices";
import { Bell } from "lucide-react";

interface Props {
  height?: string; // e.g., "h-[400px]"
}

export default async function NoticeAside({ height = "h-[450px]" }: Props) {
  const notices = await getNotices();

  if (notices.length === 0) return null;
  return (
    <aside className="w-full flex flex-col rounded-[2.5rem] bg-white border border-slate-100 shadow-sm overflow-hidden h-full">
      {/* 1. Header with Pulse Indicator */}
      <div className="px-6 py-5 border-b border-slate-50 bg-slate-50/50 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Bell size={18} className="text-primary" />
            <span className="absolute -top-1 -right-1 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
          </div>
          <h3 className="text-sm font-black uppercase tracking-widest text-primary">
            Notice Board
          </h3>
        </div>
        <button className="text-[10px] font-bold text-accent hover:underline uppercase tracking-tighter">
          View All
        </button>
      </div>

      {/* 2. Marquee Container with Glass Blur Fade */}
      <div className={`relative ${height} overflow-hidden group`}>
        {/* Top/Bottom Fade for Smooth Entry/Exit */}
        <div className="absolute inset-x-0 top-0 h-10 bg-linear-to-b from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-10 bg-linear-to-t from-white to-transparent z-10 pointer-events-none" />

        <div className="absolute inset-0 animate-vertical-marquee group-hover:[animation-play-state:paused] py-4">
          {/* Duplicate the list to create a seamless infinite loop */}
          {[...notices, ...notices].map((notice, idx) => {
            // Last 7 days

            return (
              <div
                key={idx}
                className="px-6 py-4 border-b border-slate-50 last:border-0 hover:bg-slate-50/50 transition-colors cursor-pointer"
              >
                <div className="flex items-start gap-3">
                  <div className="flex flex-col items-center justify-center min-w-11.25 h-11.25 rounded-xl bg-primary/5 text-primary border border-primary/5">
                    <span className="text-[10px] font-black uppercase tracking-tighter">
                      {new Date(notice.date).toLocaleDateString("en-IN", {
                        month: "short",
                      })}
                    </span>
                    <span className="text-sm font-black leading-none">
                      {new Date(notice.date).toLocaleDateString("en-IN", {
                        day: "numeric",
                      })}
                    </span>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      {notice.isNew && (
                        <span className="text-[8px] font-black bg-accent text-primary px-1.5 py-0.5 rounded uppercase">
                          New
                        </span>
                      )}

                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                        Admissions
                      </span>
                    </div>
                    <p className="text-sm font-bold text-primary leading-snug group-hover:text-accent transition-colors">
                      {notice.title}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
