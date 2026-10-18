import { getNotices } from "@/lib/getNotices";
import { Bell, CalendarDays } from "lucide-react";

interface Props {
  height?: string;
}

export default async function NoticeAside({
  height = "h-[340px] sm:h-[400px]",
}: Props) {
  const notices = await getNotices();

  if (notices.length === 0) return null;

  return (
    <aside className="flex w-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-200 px-4 py-4 sm:px-5">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/5">
            <Bell size={18} className="text-primary" strokeWidth={1.8} />
          </div>

          <div>
            <h2 className="text-base font-bold tracking-tight text-primary">
              Notice Board
            </h2>
            <p className="mt-0.5 text-xs text-slate-500">
              Updates and announcements
            </p>
          </div>
        </div>

        <span className="rounded-md border border-slate-200 bg-slate-50 px-2 py-1 text-xs font-medium text-slate-600">
          {notices.length} {notices.length === 1 ? "notice" : "notices"}
        </span>
      </div>

      {/* Scrollable Notices */}
      <div className={`overflow-y-auto overscroll-contain ${height}`}>
        <ul className="divide-y divide-slate-100">
          {notices.map((notice, index) => {
            const date = new Date(notice.date);
            const isValidDate = !Number.isNaN(date.getTime());

            return (
              <li
                key={`${notice.date}-${notice.title}-${index}`}
                className="group px-4 py-4 transition-colors hover:bg-slate-50/70 sm:px-5"
              >
                <article className="flex items-start gap-3">
                  {/* Date */}
                  <div className="flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-lg border border-slate-200 bg-white">
                    {isValidDate ? (
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
                      <CalendarDays size={18} className="text-slate-400" />
                    )}
                  </div>

                  {/* Notice Details */}
                  <div className="min-w-0 flex-1 pt-0.5">
                    <div className="mb-1.5 flex flex-wrap items-center gap-2">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                        School Announcement
                      </span>

                      {notice.isNew && (
                        <span className="rounded-sm bg-emerald-50 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-700">
                          New
                        </span>
                      )}
                    </div>

                    <p className="text-sm font-medium leading-relaxed text-slate-800 transition-colors group-hover:text-primary">
                      {notice.title}
                    </p>

                    {isValidDate && (
                      <p className="mt-1.5 text-xs text-slate-400">
                        {date.toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </p>
                    )}
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Footer */}
      <div className="border-t border-slate-200 bg-slate-50/70 px-4 py-3 sm:px-5">
        <p className="text-xs leading-relaxed text-slate-500">
          Please check regularly for important school updates.
        </p>
      </div>
    </aside>
  );
}
