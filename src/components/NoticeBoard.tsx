import { getNotices } from "@/lib/getNotices";

interface Props {
  height?: string; // tailwind height like h-64
}

export default async function NoticeAside({ height = "h-24" }: Props) {
  const notices = await getNotices();

  if (notices.length === 0) return null;

  return (
    <aside className="w-full max-w-sm border border-gray-200 rounded-xl bg-white overflow-hidden">
      {/* Header */}
      <div className="px-4 py-3 border-b bg-gray-50">
        <h3 className="text-sm font-semibold text-gray-900">Notice Board</h3>
      </div>

      {/* Marquee Container */}
      <div className={`relative ${height} overflow-hidden`}>
        <div className="absolute inset-0 animate-vertical-marquee hover:[animation-play-state:paused]">
          <ul className="divide-y divide-gray-200">
            {notices.map((notice, idx) => (
              <li key={idx} className="px-4 py-3">
                <p className="text-sm text-gray-800 leading-snug">
                  {notice.title}
                </p>
                <span className="mt-1 block text-xs text-gray-500">
                  {new Date(notice.date).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}
