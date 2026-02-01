"use client";

import Link from "next/link";
import {
  Home,
  GraduationCap,
  Users,
  Image as ImageIcon,
  Wallet,
  MessageCircle,
} from "lucide-react";
import { HeaderClientWrapper } from "./HeaderClientWrapper";
import AdmissionButton from "../ui/AdmissionButton";
import SocialBanner from "../ui/SocialBanner";

export default function Header() {
  const navLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "About", href: "/about", icon: Users },
    { name: "Faculty", href: "/faculty", icon: Users },
    { name: "Fees", href: "/fees", icon: Wallet },
    { name: "Gallery", href: "/gallery", icon: ImageIcon },
    { name: "Contact", href: "/contact", icon: MessageCircle },
  ];

  return (
    <>
      {/* 1. TOP BRANDING BAR (Fixed Top) */}
      <header className="fixed top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md">
        <SocialBanner />
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="h-8 w-8 rounded-lg bg-blue-900 flex items-center justify-center transition-transform group-hover:rotate-6">
              <GraduationCap className="text-white" size={20} />
            </div>
            <div className="flex flex-col">
              <h1 className="text-md font-black tracking-tighter text-blue-950 uppercase leading-none">
                Hansraj <span className="text-accent">Public </span>
              </h1>
              <span className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">
                School
              </span>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION (Hidden on Mobile) */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <HeaderClientWrapper
                    href={link.href}
                    label={link.name}
                    type="desktop"
                  />
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Button (Desktop Only) */}
          <div>
            <AdmissionButton
              px="px-4"
              py="py-2"
              fontSize="text-[10px]"
              isPulse={false}
            />
          </div>
        </div>
      </header>

      {/* 2. BOTTOM MOBILE NAV (Instagram Style) */}
      <nav className="fixed bottom-0 left-0 z-50 w-full border-t border-slate-100 bg-white/90 backdrop-blur-xl md:hidden pb-safe">
        <ul className="flex h-17 mb-2 items-center justify-around px-2">
          {navLinks.map((link) => (
            <li key={link.href} className="w-full">
              <HeaderClientWrapper
                href={link.href}
                label={link.name}
                icon={link.icon}
                type="mobile"
              />
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
