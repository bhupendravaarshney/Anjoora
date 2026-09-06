import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Check,
  ChevronRight,
  CircleDot,
  Flower2,
  Heart,
  Leaf,
  MessageCircle,
  MoonStar,
  Scale,
  ShieldCheck,
  Sparkles,
  Sun,
  Wind,
} from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";

const concerns = [
  { code: "A–01", name: "Calm", note: "A steadier everyday rhythm", icon: Wind },
  { code: "A–02", name: "Sleep", note: "A gentler evening ritual", icon: MoonStar },
  { code: "A–03", name: "Focus", note: "Clarity without the rush", icon: CircleDot },
  { code: "A–04", name: "Energy", note: "More sustainable momentum", icon: Sun },
  { code: "A–05", name: "Digestion", note: "Daily digestive comfort", icon: Leaf },
  { code: "A–06", name: "Skin", note: "Care from routine to ritual", icon: Sparkles },
  { code: "A–07", name: "Hair", note: "A considered root-care routine", icon: Flower2 },
  { code: "A–08", name: "Body Comfort", note: "Greater ease through the day", icon: Sun },
  { code: "A–09", name: "Women’s Wellness", note: "Support for changing rhythms", icon: Flower2 },
  { code: "A–10", name: "Home & Aroma", note: "A space that feels intentional", icon: Wind },
  { code: "A–11", name: "Child Care", note: "Thoughtful family routines", icon: Heart },
];

const makingStages = [
  {
    number: "I",
    title: "Your story is opened",
    copy: "You choose up to four concerns and name the one that matters most now.",
  },
  {
    number: "II",
    title: "Your pattern is read",
    copy: "Six grouped screens capture body tendencies, diet, rhythm, emotions and safety.",
  },
  {
    number: "III",
    title: "Your brief reaches the Vaidya",
    copy: "A person reviews the full context before selecting a product or shaping a ritual.",
  },
  {
    number: "IV",
    title: "The suggestion reaches WhatsApp",
    copy: "Products, reasons, directions, quantity and the complete amount are shared for your review.",
  },
  {
    number: "V",
    title: "You accept before paying",
    copy: "Ask questions or request a change. A secure payment link appears only after acceptance.",
  },
  {
    number: "VI",
    title: "Making begins after confirmation",
    copy: "The approved request moves through preparation or allocation, quality check, packing, dispatch and follow-up.",
  },
];

const profileLines = [
  ["Concern", "What asks for support now"],
  ["Tendency", "Appetite, climate and energy"],
  ["Rhythm", "Meals, sleep and daily rituals"],
  ["Inner climate", "Stress, emotion and change style"],
];

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="relative min-h-[calc(100svh-5rem)] overflow-hidden bg-[#17140f] text-[#fffaf0]">
        <Image
          src="/anjoora-apothecary-hero.png"
          alt="An experienced Indian Vaidya preparing a personalised botanical blend while a client experiences the ingredients"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-[68%_center] sm:object-[64%_center]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,24,19,.98)_0%,rgba(15,24,19,.94)_32%,rgba(15,24,19,.48)_57%,rgba(15,24,19,.06)_86%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#17140f]/80 to-transparent" />

        <div className="relative mx-auto flex min-h-[calc(100svh-5rem)] max-w-[1440px] items-center px-5 py-16 sm:px-8 lg:px-14">
          <div className="max-w-[42rem]">
            <div className="inline-flex items-center gap-3 border-y border-[#c79550]/50 py-2 text-[#e9c98f]">
              <Leaf className="size-4" />
              <span className="eyebrow">The ANJOORA living apothecary</span>
            </div>
            <h1 className="font-display mt-7 text-[clamp(3.6rem,7.7vw,7.8rem)] leading-[.84] tracking-[-.052em]">
              Prepared for one person. You.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[#fffaf0]/76 sm:text-xl">
              Your concerns, body rhythms, daily life and emotional patterns become a thoughtful apothecary brief—then an experienced Vaidya reviews what should be selected for you.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-14 rounded-sm bg-[#c3914c] px-7 text-base text-[#1d1711] shadow-[0_16px_40px_rgba(0,0,0,.25)] hover:bg-[#d2a45f]">
                <Link href="/assessment">Begin my consultation <ArrowRight /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-14 rounded-sm border-[#e9c98f]/45 bg-[#fffaf0]/5 px-7 text-base text-[#fffaf0] backdrop-blur-sm hover:bg-[#fffaf0]/12 hover:text-white">
                <Link href="#making">See how it is prepared</Link>
              </Button>
            </div>
            <div className="mt-8 grid max-w-xl gap-3 border-t border-[#e9c98f]/24 pt-5 text-sm text-[#fffaf0]/68 sm:grid-cols-3">
              <span className="flex items-center gap-2"><Check className="size-4 text-[#d8aa62]" /> Six short screens</span>
              <span className="flex items-center gap-2"><Check className="size-4 text-[#d8aa62]" /> Human-reviewed</span>
              <span className="flex items-center gap-2"><Check className="size-4 text-[#d8aa62]" /> No website payment</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 right-8 hidden max-w-[19rem] border border-[#e9c98f]/30 bg-[#17140f]/72 p-5 backdrop-blur-md xl:block">
          <p className="eyebrow text-[#d8aa62]">At the making table</p>
          <p className="font-display mt-3 text-2xl leading-tight">You see the thinking behind the ritual—not merely the finished product.</p>
        </div>
      </section>

      <section className="apothecary-paper px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
        <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
          <div>
            <p className="eyebrow text-[#8b432d]">An old wisdom, made understandable</p>
            <h2 className="font-display mt-5 text-5xl leading-[.93] tracking-[-.043em] text-[#20352a] sm:text-6xl">
              Not a shelf of products. A conversation at the apothecary table.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#5f6258]">
              ANJOORA brings the attentiveness of the traditional Vaidya into a modern digital experience. You are present in the process: what you share becomes the brief, what is considered is explained, and nothing is purchased before you understand it.
            </p>
            <Link href="/apothecary" className="mt-6 inline-flex items-center gap-2 border-b border-[#8b432d]/35 pb-1 font-semibold text-[#70422c] transition hover:border-[#8b432d] hover:text-[#8b432d]">
              Explore the complete apothecary <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="folio-frame bg-[#f8edd8] p-7 sm:p-10">
            <div className="relative z-10 flex items-center justify-between border-b border-[#745636]/25 pb-5">
              <div>
                <p className="eyebrow text-[#8b432d]">Personal apothecary folio</p>
                <p className="font-display mt-2 text-3xl text-[#20352a]">Your brief takes shape</p>
              </div>
              <span className="grid size-14 place-items-center rounded-full border border-[#9b713d]/45 text-[#8b432d]"><BookOpen className="size-6" /></span>
            </div>
            <div className="relative z-10 divide-y divide-[#745636]/18">
              {profileLines.map(([label, copy], index) => (
                <div key={label} className="grid grid-cols-[2rem_7rem_1fr] gap-3 py-4 text-sm sm:grid-cols-[2rem_9rem_1fr]">
                  <span className="font-display text-[#a16a36]">0{index + 1}</span>
                  <span className="font-semibold text-[#274333]">{label}</span>
                  <span className="text-[#6b665a]">{copy}</span>
                </div>
              ))}
            </div>
            <div className="relative z-10 mt-3 border-t border-[#745636]/25 pt-5">
              <p className="flex items-start gap-3 text-sm leading-6 text-[#656155]"><Scale className="mt-0.5 size-4 shrink-0 text-[#8b432d]" /> Selection remains provisional until a qualified person reviews suitability and safety.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="apothecary-wood px-5 py-20 text-[#fffaf0] sm:px-8 lg:px-14 lg:py-28">
        <div className="mx-auto grid max-w-[1180px] gap-12 lg:grid-cols-[1.02fr_.98fr] lg:items-center lg:gap-20">
          <div className="relative aspect-[4/5] overflow-hidden border border-[#d4a55f]/35 shadow-[0_26px_70px_rgba(0,0,0,.28)]">
            <Image
              src="/anjoora-herbal-tea-ritual.webp"
              alt="A woman seated in the apothecary and peacefully enjoying her warm herbal tea"
              fill
              unoptimized
              sizes="(max-width: 1023px) 100vw, 48vw"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#17140f]/82 to-transparent" />
            <p className="eyebrow absolute bottom-6 left-6 text-[#e5c17f] sm:bottom-8 sm:left-8">The received ritual</p>
          </div>

          <div>
            <p className="eyebrow text-[#d4a55f]">After the making table</p>
            <h2 className="font-display mt-5 text-5xl leading-[.93] tracking-[-.043em] sm:text-6xl">
              Prepared thoughtfully. Experienced personally.
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[#fffaf0]/68">
              The story continues after preparation. The receiver sits with her herbal tea—experiencing its warmth, aroma and taste as a considered part of her day, with its purpose and use already explained.
            </p>
            <div className="mt-9 border-y border-[#d4a55f]/25 py-5 font-display text-2xl leading-relaxed text-[#e8cc99]">
              A personal preparation becomes a personal ritual.
            </div>
          </div>
        </div>
      </section>

      <section id="concerns" className="scroll-mt-24 bg-[#e7d8bd] px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid gap-8 border-b border-[#5f4329]/25 pb-9 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
            <div>
              <p className="eyebrow text-[#8b432d]">Open your consultation</p>
              <h2 className="font-display mt-4 max-w-2xl text-5xl leading-[.94] tracking-[-.043em] text-[#20352a] sm:text-6xl">
                What should your personal ritual support?
              </h2>
            </div>
            <p className="max-w-xl text-lg leading-8 text-[#5c6055] lg:justify-self-end">
              Select up to four concerns and choose one primary priority. The Vaidya’s brief keeps the whole picture together without making you answer fifteen separate screens.
            </p>
          </div>

          <div className="mt-8 grid border-l border-t border-[#65492f]/22 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {concerns.map((concern) => {
              const Icon = concern.icon;
              return (
                <Link
                  href={`/assessment?concern=${encodeURIComponent(concern.name)}`}
                  key={concern.name}
                  className="group min-h-48 border-b border-r border-[#65492f]/22 bg-[#f4e8d0]/64 p-6 transition duration-300 hover:relative hover:z-10 hover:bg-[#fbf5e7] hover:shadow-[0_20px_50px_rgba(62,40,23,.14)] focus-visible:relative focus-visible:z-10 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#9a5a35]/35"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display text-sm text-[#8b432d]">{concern.code}</span>
                    <Icon className="size-5 text-[#31513e]" />
                  </div>
                  <h3 className="font-display mt-12 text-3xl tracking-[-.03em] text-[#20352a]">{concern.name}</h3>
                  <div className="mt-3 flex items-center justify-between gap-4">
                    <p className="text-sm leading-6 text-[#67665c]">{concern.note}</p>
                    <ChevronRight className="size-4 shrink-0 text-[#8b432d] transition group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
            <Link href="/assessment" className="group flex min-h-48 flex-col justify-between border-b border-r border-[#65492f]/22 bg-[#22382d] p-6 text-[#fffaf0] transition hover:bg-[#2c4839] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#c3914c]/45">
              <span className="font-display text-sm text-[#d8aa62]">Open folio</span>
              <div>
                <h3 className="font-display text-3xl tracking-[-.03em]">Not sure yet?</h3>
                <p className="mt-2 flex items-center justify-between text-sm text-[#fffaf0]/68">We will help you choose <ArrowRight className="size-4 transition group-hover:translate-x-1" /></p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section id="making" className="apothecary-wood scroll-mt-24 px-5 py-20 text-[#fffaf0] sm:px-8 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-[1260px]">
          <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <div>
              <p className="eyebrow text-[#d4a55f]">The personal making journey</p>
              <h2 className="font-display mt-5 text-5xl leading-[.94] tracking-[-.043em] sm:text-6xl">You remain part of every decision.</h2>
            </div>
            <p className="max-w-xl text-lg leading-8 text-[#fffaf0]/65 lg:justify-self-end">
              The website gathers your context. The Vaidya interprets it. WhatsApp lets you see and accept the recommendation before any payment is requested.
            </p>
          </div>

          <div className="mt-12 grid border-l border-t border-[#d4a55f]/28 md:grid-cols-2 lg:grid-cols-3">
            {makingStages.map((stage, index) => (
              <article key={stage.number} className="relative min-h-72 border-b border-r border-[#d4a55f]/28 bg-[#fffaf0]/[.035] p-7">
                <span className="font-display text-3xl text-[#d4a55f]">{stage.number}</span>
                <h3 className="font-display mt-12 text-3xl leading-[1.04] tracking-[-.025em]">{stage.title}</h3>
                <p className="mt-4 leading-7 text-[#fffaf0]/62">{stage.copy}</p>
                {index < makingStages.length - 1 && (index + 1) % 3 !== 0 && <ArrowRight className="absolute -right-3 top-7 z-10 hidden size-6 bg-[#241b15] p-1 text-[#d4a55f] lg:block" />}
              </article>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Button asChild variant="outline" size="lg" className="h-13 rounded-sm border-[#d4a55f]/38 bg-transparent px-7 text-[#fffaf0] hover:bg-[#fffaf0]/8 hover:text-[#fffaf0]">
              <Link href="/how-it-works">Follow the complete 20-step journey <ArrowRight /></Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f0df] px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
        <div className="mx-auto grid max-w-[1220px] gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <div className="border-l-2 border-[#9c6038] pl-6 sm:pl-9">
            <p className="eyebrow text-[#8b432d]">Craft with clear boundaries</p>
            <h2 className="font-display mt-4 max-w-3xl text-5xl leading-[.95] tracking-[-.043em] text-[#20352a] sm:text-6xl">
              Traditional attentiveness. Modern responsibility.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5f6359]">
              The apothecary feeling should create trust, not exaggeration. ANJOORA screens medication, allergies, pregnancy, age and urgent symptoms; it does not replace diagnosis, prescribed care or emergency assessment.
            </p>
          </div>
          <div className="folio-frame bg-[#ead9bb] p-7 sm:p-9">
            <ShieldCheck className="relative z-10 size-8 text-[#8b432d]" />
            <p className="font-display relative z-10 mt-5 text-3xl text-[#20352a]">The promise at our table</p>
            <div className="relative z-10 mt-6 space-y-4">
              {["Every ingredient has a stated purpose", "Special situations receive human review", "The price appears before the payment link", "You can pause without placing an order"].map((item) => (
                <p key={item} className="flex items-start gap-3 border-t border-[#6c4c2e]/18 pt-4 text-[#555c52]"><Check className="mt-1 size-4 shrink-0 text-[#8b432d]" /> {item}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#8b432d] px-5 py-18 text-[#fffaf0] sm:px-8 lg:px-14 lg:py-22">
        <div className="mx-auto flex max-w-[1100px] flex-col items-center text-center">
          <MessageCircle className="size-8 text-[#e3bd7d]" />
          <p className="eyebrow mt-5 text-[#e3bd7d]">Begin the conversation</p>
          <h2 className="font-display mt-4 text-5xl leading-[.92] tracking-[-.045em] sm:text-7xl">Let your ritual begin with your story.</h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-[#fffaf0]/72">Six thoughtful screens. One human-reviewed apothecary brief. No order is placed on the website.</p>
          <Button asChild size="lg" className="mt-8 h-14 rounded-sm bg-[#f0d49f] px-8 text-base text-[#251a12] hover:bg-[#f7e1b8]">
            <Link href="/assessment">Open my consultation folio <ArrowRight /></Link>
          </Button>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
