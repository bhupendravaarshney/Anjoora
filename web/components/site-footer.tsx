import Link from "next/link";

import { BrandSignature } from "@/components/brand-mark";

export function SiteFooter() {
  return (
    <footer className="apothecary-wood px-5 pb-28 pt-16 text-[#fffaf0] sm:px-8 md:pb-8 lg:px-14">
      <div className="mx-auto max-w-[1320px]">
        <div className="grid gap-12 border-b border-white/12 pb-12 md:grid-cols-2 lg:grid-cols-[1.4fr_.7fr_.7fr]">
          <div>
            <BrandSignature />
            <p className="mt-5 max-w-md leading-7 text-[#fffaf0]/60">
              A living apothecary where your story becomes a human-reviewed wellness ritual—explained before it is offered.
            </p>
          </div>
          <div>
            <p className="eyebrow text-[#d4a55f]">Explore</p>
            <div className="mt-5 flex flex-col gap-3 text-[#fffaf0]/70">
              <Link href="/apothecary" className="hover:text-[#fffaf0]">The apothecary</Link>
              <Link href="/how-it-works" className="hover:text-[#fffaf0]">The making journey</Link>
              <Link href="/assessment" className="hover:text-[#fffaf0]">Consultation folio</Link>
            </div>
          </div>
          <div>
            <p className="eyebrow text-[#d4a55f]">Trust</p>
            <div className="mt-5 flex flex-col gap-3 text-[#fffaf0]/70">
              <Link href="/standards" className="hover:text-[#fffaf0]">Our wellness standard</Link>
              <a href="mailto:care@anjoora.com" className="hover:text-[#fffaf0]">care@anjoora.com</a>
              <span>Privacy & terms</span>
            </div>
          </div>
        </div>
        <div className="mt-7 flex flex-col gap-4 text-sm leading-6 text-[#fffaf0]/46 md:flex-row md:justify-between">
          <p>© 2026 ANJOORA. All rights reserved.</p>
          <p className="max-w-3xl">
            ANJOORA supports everyday wellness and does not diagnose, treat or replace medical care. The website creates a connection; recommendations, payment and confirmation continue through an authorized WhatsApp channel.
          </p>
        </div>
      </div>
    </footer>
  );
}
