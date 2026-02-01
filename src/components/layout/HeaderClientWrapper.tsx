"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LucideIcon } from "lucide-react";
import { clsx } from "clsx";

interface NavProps {
  href: string;
  label: string;
  icon?: LucideIcon;
  type: "desktop" | "mobile";
}

export function HeaderClientWrapper({
  href,
  label,
  icon: Icon,
  type,
}: NavProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  if (type === "desktop") {
    return (
      <Link
        href={href}
        className={clsx(
          "px-4 py-2 text-sm font-semibold transition-all rounded-full",
          isActive
            ? "text-blue-700 bg-blue-50"
            : "text-slate-600 hover:text-blue-600 hover:bg-slate-50",
        )}
      >
        {label}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={clsx(
        "flex flex-col items-center justify-center gap-1 transition-all duration-300 h-full",
        isActive ? "text-blue-900" : "text-slate-400",
      )}
    >
      <div
        className={clsx(
          "p-1.5 rounded-xl transition-all",
          isActive &&
            "bg-accent text-white scale-110 shadow-lg shadow-blue-100",
        )}
      >
        {Icon && <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />}
      </div>
      <span
        className={clsx(
          "text-[10px] font-bold tracking-tight uppercase transition-opacity",
          isActive ? "opacity-100" : "opacity-70",
        )}
      >
        {label}
      </span>
    </Link>
  );
}
