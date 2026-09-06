import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Check,
  ChevronRight,
  Clock3,
  HeartHandshake,
  Leaf,
  Scale,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { concerns } from "@/lib/anjoora-data";

export const metadata: Metadata = {
  title: "The Apothecary",
  description: "Explore how ANJOORA turns whole-person context into a clear, human-reviewed personal apothecary brief.",
};

const folioDimensions = [
  ["01", "Your priorities", "One primary concern and up to three linked concerns."],
  ["02", "Present pattern", "Your goal, how long it has been present and its effect on daily life."],
  ["03", "Body tendencies", "Ayurveda-informed observations about appetite, body climate and energy."],
  ["04", "Daily rhythm", "Meals, sleep, movement and rituals you could realistically continue."],
  ["05", "Inner climate", "Stress response, emotional need and preferred style of change."],
  ["06", "Safety context", "Medicines, allergies, pregnancy, age and symptoms needing medical care."],
];

const personalisationLayers = [
  ["Selection", "Which suitable wellness product or preparation best fits the reviewed need."],
  ["Combination", "Whether one item is sufficient or a small coordinated set is more practical."],
  ["Format", "Infusion, drops, capsule, powder, oil or another approved format where available."],
  ["Rhythm", "When and how the product fits alongside meals, sleep and existing routines."],
  ["Quantity", "The review period and quantity required for the agreed ritual."],
  ["Guidance", "Clear purpose, directions, cautions, pause rules and follow-up."],
];

const reviewGates = [
  { icon: ShieldCheck, title: "Suitable", copy: "Does it fit the person’s age, context and stated goal?" },
  { icon: Scale, title: "Safe", copy: "Do medicines, allergies or special situations require a pause or referral?" },
  { icon: Clock3, title: "Practical", copy: "Can this ritual realistically fit the person’s day and preferences?" },
  { icon: HeartHandshake, title: "Explainable", copy: "Can every suggested item be explained in plain language?" },
];

export default function ApothecaryPage() {
  return (
    <main>
      <SiteHeader />

      <section className="apothecary-wood px-5 py-18 text-[#fffaf0] sm:px-8 lg:px-14 lg:py-26">
        <div className="mx-auto grid max-w-[1260px] gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-3 border-y border-[#d4a55f]/40 py-2 text-[#d4a55f]">
              <Leaf className="size-4" />
              <span className="eyebrow">The ANJOORA apothecary</span>
            </div>
            <h1 className="font-display mt-7 max-w-4xl text-[clamp(3.7rem,7vw,7.3rem)] leading-[.86] tracking-[-.05em]">
              Your story comes before the preparation.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#fffaf0]/68 sm:text-xl">
              The digital apothecary does not guess a product from one symptom. It prepares a structured folio for a Vaidya to read, question and refine before anything is recommended.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-14 rounded-sm bg-[#c3914c] px-7 text-base text-[#1d1711] hover:bg-[#d2a45f]">
                <Link href="/assessment">Open my personal folio <ArrowRight /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-14 rounded-sm border-[#d4a55f]/40 bg-transparent px-7 text-[#fffaf0] hover:bg-[#fffaf0]/8 hover:text-[#fffaf0]">
                <Link href="/how-it-works">Follow the complete journey</Link>
              </Button>
            </div>
          </div>

          <aside className="border border-[#d4a55f]/28 bg-[#fffaf0]/[.035] p-6 sm:p-8">
            <div className="flex items-center justify-between border-b border-[#d4a55f]/22 pb-5">
              <div>
                <p className="eyebrow text-[#d4a55f]">The first principle</p>
                <p className="font-display mt-2 text-3xl">Listen before selecting</p>
              </div>
              <BookOpen className="size-7 text-[#d4a55f]" />
            </div>
            <div className="mt-2 divide-y divide-[#d4a55f]/18">
              {["What matters to you?", "What pattern does your body show?", "What can safely fit your life?", "What needs a qualified review?"].map((question, index) => (
                <div key={question} className="grid grid-cols-[2rem_1fr] gap-3 py-4">
                  <span className="font-display text-[#d4a55f]">0{index + 1}</span>
                  <p className="text-[#fffaf0]/68">{question}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="apothecary-paper px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-[1260px]">
          <div className="grid gap-8 border-b border-[#6b4b2e]/22 pb-9 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <div>
              <p className="eyebrow text-[#8b432d]">What the Vaidya receives</p>
              <h2 className="font-display mt-4 text-5xl leading-[.94] tracking-[-.043em] text-[#20352a] sm:text-6xl">A six-part whole-person folio.</h2>
            </div>
            <p className="max-w-xl text-lg leading-8 text-[#66645a] lg:justify-self-end">
              Related questions remain grouped so the customer can finish comfortably while the reviewer still receives enough context to make a reasoned decision.
            </p>
          </div>

          <div className="mt-8 grid border-l border-t border-[#6b4b2e]/18 md:grid-cols-2 lg:grid-cols-3">
            {folioDimensions.map(([number, title, copy]) => (
              <article key={number} className="min-h-56 border-b border-r border-[#6b4b2e]/18 bg-[#fbf5e7]/68 p-6">
                <span className="font-display text-xl text-[#8b432d]">{number}</span>
                <h3 className="font-display mt-8 text-3xl tracking-[-.03em] text-[#20352a]">{title}</h3>
                <p className="mt-3 leading-7 text-[#69675d]">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#e7d8bd] px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
            <div>
              <p className="eyebrow text-[#8b432d]">The concern cabinet</p>
              <h2 className="font-display mt-4 text-5xl leading-[.94] tracking-[-.043em] text-[#20352a] sm:text-6xl">Begin with what you want supported.</h2>
            </div>
            <p className="max-w-xl text-lg leading-8 text-[#62645a] lg:justify-self-end">You may select up to four concerns. One becomes the primary direction; the others remain visible to the reviewer.</p>
          </div>

          <div className="mt-10 grid border-l border-t border-[#6b4b2e]/20 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {concerns.map((concern, index) => (
              <Link
                key={concern.name}
                href={`/assessment?concern=${encodeURIComponent(concern.name)}`}
                className="group min-h-44 border-b border-r border-[#6b4b2e]/20 bg-[#f4e8d0]/72 p-5 transition hover:relative hover:z-10 hover:bg-[#fbf5e7] hover:shadow-[0_18px_45px_rgba(62,40,23,.12)] focus-visible:relative focus-visible:z-10 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#8b432d]/25"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-sm text-[#8b432d]">A–{String(index + 1).padStart(2, "0")}</span>
                  <ChevronRight className="size-4 text-[#8b432d] transition group-hover:translate-x-1" />
                </div>
                <h3 className="font-display mt-9 text-3xl text-[#20352a]">{concern.name}</h3>
                <p className="mt-2 text-sm leading-6 text-[#6c685e]">{concern.short}</p>
              </Link>
            ))}
            <Link href="/assessment" className="group flex min-h-44 flex-col justify-between border-b border-r border-[#6b4b2e]/20 bg-[#263f32] p-5 text-[#fffaf0] transition hover:bg-[#345241]">
              <Sparkles className="size-5 text-[#d4a55f]" />
              <div>
                <h3 className="font-display text-3xl">Help me choose</h3>
                <p className="mt-2 flex items-center justify-between text-sm text-[#fffaf0]/62">Open the guided folio <ArrowRight className="size-4 transition group-hover:translate-x-1" /></p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="apothecary-wood px-5 py-20 text-[#fffaf0] sm:px-8 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-[1260px]">
          <div className="grid gap-9 lg:grid-cols-[.75fr_1.25fr]">
            <div>
              <p className="eyebrow text-[#d4a55f]">Personalisation with boundaries</p>
              <h2 className="font-display mt-4 text-5xl leading-[.94] tracking-[-.043em] sm:text-6xl">What may be shaped around you.</h2>
              <p className="mt-6 text-lg leading-8 text-[#fffaf0]/62">Personalisation is a reasoned selection and ritual—not an unexplained mixture of everything.</p>
            </div>
            <div className="grid border-l border-t border-[#d4a55f]/24 sm:grid-cols-2">
              {personalisationLayers.map(([title, copy], index) => (
                <article key={title} className="border-b border-r border-[#d4a55f]/24 bg-[#fffaf0]/[.03] p-6">
                  <span className="font-display text-[#d4a55f]">0{index + 1}</span>
                  <h3 className="font-display mt-6 text-3xl">{title}</h3>
                  <p className="mt-3 leading-7 text-[#fffaf0]/58">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f0df] px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-[1260px]">
          <div className="text-center">
            <p className="eyebrow text-[#8b432d]">Four review gates</p>
            <h2 className="font-display mx-auto mt-4 max-w-4xl text-5xl leading-[.94] tracking-[-.043em] text-[#20352a] sm:text-6xl">Nothing becomes a suggestion until it passes all four.</h2>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {reviewGates.map(({ icon: Icon, title, copy }) => (
              <article key={title} className="folio-frame bg-[#fbf5e7] p-6">
                <Icon className="relative z-10 size-6 text-[#8b432d]" />
                <h3 className="font-display relative z-10 mt-8 text-3xl text-[#20352a]">{title}</h3>
                <p className="relative z-10 mt-3 leading-7 text-[#69675d]">{copy}</p>
              </article>
            ))}
          </div>

          <div className="folio-frame mt-10 grid bg-[#ead9bb] p-7 sm:p-9 lg:grid-cols-[.8fr_1.2fr] lg:gap-10">
            <div className="relative z-10">
              <p className="eyebrow text-[#8b432d]">What arrives on WhatsApp</p>
              <h3 className="font-display mt-4 text-4xl leading-tight text-[#20352a]">A recommendation you can understand before you accept.</h3>
            </div>
            <div className="relative z-10 mt-7 divide-y divide-[#6b4b2e]/18 border-y border-[#6b4b2e]/18 lg:mt-0">
              {["Product or preparation name", "Why it was selected", "Format, directions and duration", "Relevant cautions and pause rules", "Quantity and total amount", "Accept, ask for a change, or decline"].map((item) => (
                <p key={item} className="flex items-center gap-3 py-3 text-[#555d52]"><Check className="size-4 shrink-0 text-[#8b432d]" /> {item}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#8b432d] px-5 py-16 text-[#fffaf0] sm:px-8 lg:px-14 lg:py-20">
        <div className="mx-auto grid max-w-[1180px] gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="eyebrow text-[#e3bd7d]">Continue through the apothecary</p>
            <h2 className="font-display mt-4 text-5xl leading-[.94] tracking-[-.04em] sm:text-6xl">See what happens after the Vaidya reviews your folio.</h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Button asChild size="lg" className="h-14 rounded-sm bg-[#f0d49f] px-7 text-[#251a12] hover:bg-[#f7e1b8]">
              <Link href="/how-it-works">See the complete journey <ArrowRight /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-14 rounded-sm border-[#f0d49f]/40 bg-transparent px-7 text-[#fffaf0] hover:bg-[#fffaf0]/8 hover:text-[#fffaf0]">
              <Link href="/standards">Read our standard</Link>
            </Button>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
