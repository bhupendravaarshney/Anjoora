"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";

import { BrandMark } from "@/components/brand-mark";
import { InstallAppButton } from "@/components/pwa-provider";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const links = [
  { href: "/apothecary", label: "The apothecary" },
  { href: "/how-it-works", label: "The journey" },
  { href: "/standards", label: "Our standard" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="app-safe-header sticky top-0 z-40 border-b border-[#6b4b2e]/25 bg-[#f1e5ce]/95 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-14">
        <BrandMark expanded />
        <nav aria-label="Primary navigation" className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
              className={`border-b py-1 text-sm font-medium transition ${pathname === link.href ? "border-[#8b432d] text-[#8b432d]" : "border-transparent text-[#465a4e] hover:text-[#8b432d]"}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Button asChild className="h-11 rounded-sm bg-[#263f32] px-6 hover:bg-[#345241]">
            <Link href="/assessment">Open consultation</Link>
          </Button>
        </div>
        <div className="flex items-center gap-1.5 lg:hidden">
          <InstallAppButton />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open navigation" className="rounded-full">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[88%] border-[#6b4b2e]/20 bg-[#f1e5ce] sm:max-w-md">
            <SheetHeader className="border-b border-[#6b4b2e]/20 px-6 py-6 text-left">
              <SheetTitle><BrandMark expanded /></SheetTitle>
              <SheetDescription className="text-[#6c685d]">
                Traditional attentiveness, shaped around your modern life.
              </SheetDescription>
            </SheetHeader>
            <nav className="flex flex-1 flex-col px-6 py-5" aria-label="Mobile navigation">
              {links.map((link) => (
                <SheetClose asChild key={link.href}>
                  <Link href={link.href} aria-current={pathname === link.href ? "page" : undefined} className={`border-b border-[#6b4b2e]/18 py-5 font-display text-3xl ${pathname === link.href ? "text-[#8b432d]" : "text-[#20352a]"}`}>
                    {link.label}
                  </Link>
                </SheetClose>
              ))}
              <SheetClose asChild>
                <Button asChild size="lg" className="mt-8 h-14 rounded-sm">
                  <Link href="/assessment">Open my consultation</Link>
                </Button>
              </SheetClose>
            </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
