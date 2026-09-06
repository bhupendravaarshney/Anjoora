"use client";

import Image from "next/image";
import Link from "next/link";
import { BookOpenText, ClipboardList, Route } from "lucide-react";
import { usePathname } from "next/navigation";

const items = [
  { href: "/", label: "Home", icon: "mark" },
  { href: "/apothecary", label: "Apothecary", icon: BookOpenText },
  { href: "/how-it-works", label: "Journey", icon: Route },
  { href: "/assessment", label: "My folio", icon: ClipboardList },
] as const;

export function MobileAppNav() {
  const pathname = usePathname();
  if (["/assessment", "/connect", "/checkout"].some((path) => pathname.startsWith(path))) return null;

  return (
    <nav
      aria-label="ANJOORA app navigation"
      className="fixed inset-x-3 bottom-[calc(.55rem+env(safe-area-inset-bottom))] z-50 grid grid-cols-4 overflow-hidden rounded-xl border border-[#d4a55f]/45 bg-[#17352b]/96 px-1 py-1.5 text-[#fffaf0] shadow-[0_16px_42px_rgba(13,25,19,.35)] backdrop-blur-xl md:hidden"
    >
      {items.map((item) => {
        const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
        const Icon = item.icon === "mark" ? null : item.icon;
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={`flex min-h-14 flex-col items-center justify-center gap-1 rounded-lg px-1 text-xs font-semibold transition ${active ? "bg-[#f2e8d2] text-[#173f33]" : "text-[#fffaf0]/68 hover:bg-white/8 hover:text-[#fffaf0]"}`}
          >
            {Icon ? <Icon className="size-5" /> : <Image src="/anjoora-logo-mark.svg" alt="" width={20} height={20} unoptimized className="size-5" />}
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
