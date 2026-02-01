// src/components/sections/SocialBanner.tsx
import { Youtube, Instagram, Facebook, Phone } from "lucide-react";
import Link from "next/link";

export default function SocialBanner() {
  const socialLinks = [
    {
      id: "fb",
      icon: <Facebook size={14} />,
      href: "#",
      color: "hover:text-blue-500",
    },
    {
      id: "ig",
      icon: <Instagram size={14} />,
      href: "#",
      color: "hover:text-pink-500",
    },
    {
      id: "yt",
      icon: <Youtube size={14} />,
      href: "#",
      color: "hover:text-red-500",
    },
  ];

  return (
    /* Change: Ensure relative and a z-index higher than the Header */
    <div className="relative z-60 w-full bg-primary text-white py-2.5 border-b border-white/10">
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Left: Phone */}
        <div className="flex items-center gap-4">
          <Link
            href="tel:+919876543210"
            className="flex items-center gap-2 text-[10px] md:text-xs font-bold tracking-widest hover:text-accent transition-colors"
          >
            <Phone size={12} className="text-accent" />
            <span className="hidden sm:inline">+91 98765 43210</span>
          </Link>
        </div>

        {/* Right: Socials */}
        <div className="flex items-center gap-4">
          {socialLinks.map((social) => (
            <Link
              key={social.id}
              href={social.href}
              className={`transition-transform hover:scale-125 ${social.color}`}
            >
              {social.icon}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
