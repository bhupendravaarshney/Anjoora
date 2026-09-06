import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, HeartHandshake, Leaf, MessagesSquare, PackageCheck, Sparkles } from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About Us",
  description: "The ANJOORA story: ancient Ayurvedic attentiveness, modern understanding and wellness shaped around the individual.",
};

const principles = [
  { title: "We listen", copy: "Your symptoms, rhythms, lifestyle and goals begin the conversation.", icon: MessagesSquare },
  { title: "We understand", copy: "The whole pattern matters because no two people arrive with the same story.", icon: HeartHandshake },
  { title: "We customise", copy: "Only relevant ingredients and formats are considered for your individual needs.", icon: Leaf },
  { title: "We craft", copy: "Every suitable formulation is approached with purpose, care and human review.", icon: PackageCheck },
];

export default function AboutPage() {
  return (
    <main>
      <SiteHeader />

      <section className="apothecary-wood overflow-hidden px-5 py-20 text-[#fffaf0] sm:px-8 lg:px-14 lg:py-28">
        <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <div>
            <p className="eyebrow text-[#d4b574]">The ANJOORA story</p>
            <h1 className="font-display mt-6 text-[clamp(3.7rem,7.4vw,7.5rem)] leading-[.86] tracking-[-.052em]">
              The return of the personal Vaidya.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#fffaf0]/72 sm:text-xl">
              Healing was never meant to be one-size-fits-all. ANJOORA carries ancient Ayurvedic attentiveness into modern life—with understanding, intention and care shaped around you.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-14 rounded-sm bg-[#c9a35f] px-7 text-[#10271e] hover:bg-[#dab978]">
                <Link href="/assessment">Begin your consultation <ArrowRight /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-14 rounded-sm border-[#d4b574]/40 bg-white/5 px-7 text-[#fffaf0] hover:bg-white/10 hover:text-white">
                <Link href="/how-it-works">See the complete journey</Link>
              </Button>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[34rem] overflow-hidden border border-[#d4b574]/35 bg-[#efe2c8] p-2 shadow-[0_30px_90px_rgba(0,0,0,.3)]">
            <Image src="/anjoora-story.png" alt="The ANJOORA story from ancient personal Vaidyas through traditional apothecaries to modern personalised herbal care" width={1024} height={1536} priority className="h-auto w-full" />
          </div>
        </div>
      </section>

      <section className="apothecary-paper px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <div>
              <p className="eyebrow text-[#37624d]">Then, then, and now</p>
              <h2 className="font-display mt-5 text-5xl leading-[.92] tracking-[-.043em] text-[#173f31] sm:text-6xl">A timeless way of caring, brought forward.</h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-[#5f675f] lg:justify-self-end">
              In ancient India, Vaidyas studied the individual and prepared remedies for that person and family. Apothecaries continued the practice by listening and customising natural solutions. ANJOORA brings that same human attention into a modern, understandable experience.
            </p>
          </div>

          <div className="mt-12 grid border-l border-t border-[#315b48]/20 md:grid-cols-3">
            {[
              ["Then", "Ancient India", "A person was known, understood and cared for as an individual."],
              ["Then", "The apothecary", "Natural preparations were selected around particular symptoms and needs."],
              ["Now", "ANJOORA", "Traditional wisdom meets modern context to create a personal wellness direction."],
            ].map(([era, title, copy]) => (
              <article key={title} className="border-b border-r border-[#315b48]/20 bg-[#f8eedb]/70 p-7 sm:p-9">
                <p className="eyebrow text-[#9a7339]">{era}</p>
                <h3 className="font-display mt-4 text-3xl text-[#173f31]">{title}</h3>
                <p className="mt-4 leading-7 text-[#62685f]">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="apothecary-wood px-5 py-20 text-[#fffaf0] sm:px-8 lg:px-14 lg:py-28">
        <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[.92fr_1.08fr] lg:items-center">
          <div className="order-2 lg:order-1">
            <p className="eyebrow text-[#d4b574]">Modern-day apothecaries</p>
            <h2 className="font-display mt-5 text-5xl leading-[.92] tracking-[-.043em] sm:text-6xl">We do not start with products. We start with you.</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#fffaf0]/68">
              Your concerns, body, daily life and goals create the context. Only then can a thoughtful, human-reviewed wellness direction begin to take shape.
            </p>
            <div className="mt-9 grid gap-3 sm:grid-cols-2">
              {principles.map(({ title, copy, icon: Icon }) => (
                <article key={title} className="border border-[#d4b574]/24 bg-white/[.035] p-5">
                  <Icon className="size-6 text-[#d4b574]" />
                  <h3 className="font-display mt-4 text-2xl">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#fffaf0]/60">{copy}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="order-1 mx-auto w-full max-w-[36rem] border border-[#d4b574]/35 bg-[#efe2c8] p-2 shadow-[0_30px_90px_rgba(0,0,0,.3)] lg:order-2">
            <Image src="/anjoora-modern-day-vaidyas.png" alt="ANJOORA's modern-day Vaidya philosophy: personal care, purposeful herbs and individually crafted wellness" width={1024} height={1536} className="h-auto w-full" />
          </div>
        </div>
      </section>

      <section className="bg-[#e8dcc4] px-5 py-20 text-center sm:px-8 lg:px-14 lg:py-24">
        <Sparkles className="mx-auto size-7 text-[#9a7339]" />
        <p className="eyebrow mt-5 text-[#37624d]">Our philosophy</p>
        <h2 className="font-display mx-auto mt-5 max-w-4xl text-5xl leading-[.94] tracking-[-.043em] text-[#173f31] sm:text-6xl">Not mass produced. Personally considered.</h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#60675f]">Rooted in nature, backed by timeless wisdom and designed for the reality of modern life—because nature never made two people alike.</p>
      </section>

      <SiteFooter />
    </main>
  );
}
