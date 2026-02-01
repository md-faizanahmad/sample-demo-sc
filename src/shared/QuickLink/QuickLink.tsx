import { ClipboardList, BookOpen, Monitor, HeartHandshake } from "lucide-react";
import Link from "next/link";

export default function QuickLinks() {
  const links = [
    {
      label: "Enrollment Info",
      icon: <ClipboardList size={20} />,
      href: "/admission",
      color: "bg-blue-50 text-blue-700",
    },
    {
      label: "Academics",
      icon: <BookOpen size={20} />,
      href: "/academics",
      color: "bg-emerald-50 text-emerald-700",
    },
    {
      label: "Smart Class",
      icon: <Monitor size={20} />,
      href: "/about",
      color: "bg-purple-50 text-purple-700",
    },
    {
      label: "Giving Support",
      icon: <HeartHandshake size={20} />,
      href: "/contact",
      color: "bg-rose-50 text-rose-700",
    },
  ];

  return (
    <section className="relative z-20 -mt-10 md:-mt-14 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="bg-white/70 backdrop-blur-2xl border border-white shadow-[0_8px_32px_rgba(0,0,0,0.08)] rounded-[2rem] p-2 md:rounded-full">
          <div className="grid grid-cols-2 md:flex md:items-center justify-between gap-2">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="group flex items-center gap-3 p-3 md:px-6 md:py-3 rounded-2xl md:rounded-full hover:bg-white hover:shadow-sm transition-all duration-300"
              >
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl md:rounded-full transition-transform group-hover:scale-110 ${link.color}`}
                >
                  {link.icon}
                </div>
                <span className="text-sm font-bold text-slate-700 tracking-tight whitespace-nowrap">
                  {link.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
