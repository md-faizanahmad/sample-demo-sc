"use client";

import { useEffect, useRef, useState } from "react";
import { Bell, CalendarDays, X, ChevronRight } from "lucide-react";

interface Notice {
  title: string;
  date: string | Date;
  isNew?: boolean;
}

interface NoticeBellProps {
  notices: Notice[];
}

export default function NoticeBell({ notices }: NoticeBellProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const newCount = notices.filter((notice) => notice.isNew).length;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen && !dialog.open) {
      dialog.showModal();
    } else if (!isOpen && dialog.open) {
      dialog.close();
    }
  }, [isOpen]);

  function closeDialog() {
    setIsOpen(false);
  }

  return (
    <>
      {/* Notification Bell */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label={`Open school notices${newCount ? `, ${newCount} new` : ""}`}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        className="relative inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-primary shadow-sm transition-colors hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      >
        <Bell size={20} strokeWidth={1.8} />

        {newCount > 0 && (
          <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-white bg-red-600 px-1 text-[10px] font-bold leading-none text-white">
            {newCount > 9 ? "9+" : newCount}
          </span>
        )}
      </button>

      {/* Responsive Notice Modal */}
      <dialog
        ref={dialogRef}
        aria-labelledby="notice-dialog-title"
        onClose={closeDialog}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            closeDialog();
          }
        }}
        className="fixed inset-0 m-0 h-dvh w-screen max-h-none max-w-none overflow-hidden bg-transparent p-0 text-slate-900 backdrop:bg-slate-950/50 backdrop:backdrop-blur-[3px] sm:inset-auto sm:m-auto sm:h-auto sm:max-h-[85dvh] sm:w-[calc(100%-2rem)] sm:max-w-xl sm:rounded-2xl"
      >
        <div className="flex h-full min-h-0 flex-col overflow-hidden bg-white sm:max-h-[85dvh] sm:rounded-2xl sm:shadow-2xl">
          {/* Header */}
          <header className="flex shrink-0 items-center justify-between border-b border-slate-200 px-5 py-4 sm:px-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/5 text-primary">
                <Bell size={20} strokeWidth={1.8} />
              </div>

              <div>
                <h2
                  id="notice-dialog-title"
                  className="text-lg font-bold tracking-tight text-primary"
                >
                  Notice Board
                </h2>
                <p className="mt-0.5 text-xs text-slate-500">
                  School updates and announcements
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={closeDialog}
              aria-label="Close notices"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <X size={20} />
            </button>
          </header>

          {/* Summary */}
          <div className="flex shrink-0 items-center justify-between border-b border-slate-100 bg-slate-50/70 px-5 py-3 sm:px-6">
            <span className="text-sm font-medium text-slate-700">
              Recent announcements
            </span>
            <span className="text-xs text-slate-500">
              {notices.length} {notices.length === 1 ? "notice" : "notices"}
            </span>
          </div>

          {/* Notice List */}
          <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
            <ul className="divide-y divide-slate-100">
              {notices.map((notice, index) => {
                const date = new Date(notice.date);
                const validDate = !Number.isNaN(date.getTime());

                return (
                  <li key={`${notice.title}-${notice.date}-${index}`}>
                    <article className="flex gap-3 px-5 py-4 transition-colors hover:bg-slate-50/70 sm:gap-4 sm:px-6 sm:py-5">
                      {/* Date */}
                      <div className="flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-lg border border-slate-200 bg-white">
                        {validDate ? (
                          <>
                            <span className="text-[10px] font-semibold uppercase tracking-wide text-slate-500">
                              {date.toLocaleDateString("en-IN", {
                                month: "short",
                              })}
                            </span>
                            <span className="text-lg font-bold leading-tight text-primary">
                              {date.toLocaleDateString("en-IN", {
                                day: "numeric",
                              })}
                            </span>
                          </>
                        ) : (
                          <CalendarDays size={19} className="text-slate-400" />
                        )}
                      </div>

                      {/* Notice Details */}
                      <div className="min-w-0 flex-1">
                        <div className="mb-1.5 flex flex-wrap items-center gap-2">
                          <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                            Announcement
                          </span>

                          {notice.isNew && (
                            <span className="rounded-sm bg-emerald-50 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-700">
                              New
                            </span>
                          )}
                        </div>

                        <p className="wrap-break-word text-sm font-medium leading-relaxed text-slate-800 sm:text-[15px]">
                          {notice.title}
                        </p>

                        {validDate && (
                          <p className="mt-2 text-xs text-slate-400">
                            {date.toLocaleDateString("en-IN", {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            })}
                          </p>
                        )}
                      </div>

                      <ChevronRight
                        size={16}
                        className="mt-1 shrink-0 text-slate-300"
                        aria-hidden="true"
                      />
                    </article>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Footer */}
          <footer className="shrink-0 border-t border-slate-200 bg-white px-5 py-3 sm:px-6">
            <p className="text-center text-xs leading-relaxed text-slate-500">
              Please check regularly for important school updates.
            </p>
          </footer>
        </div>
      </dialog>
    </>
  );
}
