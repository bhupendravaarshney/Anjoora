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
  PackageCheck,
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
  description:
      "Explore the ANJOORA Apothecary: thoughtful wellness preparations, clear product information and context-aware human review where needed.",
};

const apothecaryFormats = [
  {
    number: "01",
    title: "Botanical infusions",
    copy:
        "Warm preparations designed around a simple daily ritual. Suitability, ingredients and directions should remain clear and easy to follow.",
  },
  {
    number: "02",
    title: "Concentrated drops",
    copy:
        "A compact format where appropriate, with defined directions, quantity, cautions and a clear review period.",
  },
  {
    number: "03",
    title: "Capsule formats",
    copy:
        "A familiar, flavour-free option when the reviewed preparation and product category make this format appropriate.",
  },
  {
    number: "04",
    title: "Guided selection",
    copy:
        "Not sure which format fits? Begin with your needs and routine. The format can be refined during human review.",
  },
];

const preparationStandards = [
  {
    title: "Identity",
    copy:
        "You should know exactly what preparation or product is being offered and what category it belongs to.",
  },
  {
    title: "Ingredients",
    copy:
        "The relevant ingredients and formulation should be understandable rather than hidden behind vague wellness language.",
  },
  {
    title: "Purpose",
    copy:
        "Every item should have a clear reason for being considered. More products do not automatically mean better support.",
  },
  {
    title: "Directions",
    copy:
        "Format, timing, amount and intended period of use should be explained before you begin.",
  },
  {
    title: "Safety",
    copy:
        "Relevant cautions, allergies, medicine considerations, special situations and pause guidance should be visible.",
  },
  {
    title: "Traceability",
    copy:
        "Where applicable, batch, manufacturing, expiry and other product information should remain identifiable.",
  },
];

const personalisationLayers = [
  [
    "Selection",
    "Which suitable preparation best matches the reviewed need—and which options are unnecessary.",
  ],
  [
    "Combination",
    "Whether one item is enough or whether a small, purposeful combination makes more sense.",
  ],
  [
    "Format",
    "Whether an infusion, drops, capsule or another appropriate approved format is practical.",
  ],
  [
    "Rhythm",
    "How a preparation fits around meals, sleep, work, movement and the routines you can realistically maintain.",
  ],
  [
    "Quantity",
    "How much is appropriate for the intended review period rather than supplying an unexplained long-term quantity.",
  ],
  [
    "Guidance",
    "Why it was selected, how to use it, what to watch for and when to pause, review or ask for help.",
  ],
];

const reviewReasons = [
  {
    icon: ShieldCheck,
    title: "Medicines",
    copy:
        "Regular medicines may require interaction, duplication or timing review before a wellness preparation is suggested.",
  },
  {
    icon: HeartHandshake,
    title: "Special situations",
    copy:
        "Pregnancy, breastfeeding, childhood, allergies and other situations may need additional clarification.",
  },
  {
    icon: Scale,
    title: "Multiple needs",
    copy:
        "Several concerns do not automatically justify several products. The reviewer should decide what deserves attention first.",
  },
  {
    icon: Clock3,
    title: "Symptoms needing care",
    copy:
        "Some symptoms belong with medical assessment rather than an Apothecary recommendation.",
  },
];

const productInformation = [
  "Preparation or product name",
  "Product category and format",
  "Relevant ingredients",
  "Why it is being considered",
  "How and when to use it",
  "Suggested review period",
  "Relevant cautions and pause guidance",
  "Quantity",
  "Batch, expiry or traceability information where applicable",
  "Price before acceptance",
];

const faqs = [
  [
    "Do I need a consultation before using the Apothecary?",
    "Not every exploration needs to begin as a consultation. You may first browse ANJOORA’s wellness pathways and formats. When selection depends on your medicines, health context, age, allergies, pregnancy, childhood or other relevant factors, the decision should move to qualified review.",
  ],
  [
    "Is every ANJOORA preparation personalised?",
    "No. Personalisation may mean choosing among suitable existing products, deciding whether a combination is necessary, refining the format, timing, quantity or guidance. It should not automatically mean custom manufacturing.",
  ],
  [
    "Can I choose more than one wellness concern?",
    "Yes. The ANJOORA folio can keep several concerns visible, but one priority guides the first review. Multiple concerns do not automatically lead to multiple preparations.",
  ],
  [
    "What if I take prescription medicines?",
    "Declare this during the safety screen. The preparation decision may be held for further clarification or review before anything is recommended.",
  ],
  [
    "What if I am pregnant, breastfeeding or choosing something for a child?",
    "These situations require additional care. Suitability depends on the exact product, ingredients, regulatory category and individual context, so a generic wellness recommendation should not be assumed to be appropriate.",
  ],
  [
    "What if I am not sure which format I prefer?",
    "Choose “Help me choose” in the folio. Format should be practical for your routine as well as suitable for the intended preparation.",
  ],
];

export default function ApothecaryPage() {
  return (
      <main>
        <SiteHeader />

        {/* HERO */}
        <section className="apothecary-wood px-5 py-18 text-[#fffaf0] sm:px-8 lg:px-14 lg:py-26">
          <div className="mx-auto grid max-w-[1260px] gap-12 lg:grid-cols-[1.08fr_.92fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-3 border-y border-[#d4a55f]/40 py-2 text-[#d4a55f]">
                <Leaf className="size-4" />
                <span className="eyebrow">The ANJOORA Apothecary</span>
              </div>

              <h1 className="font-display mt-7 max-w-4xl text-[clamp(3.7rem,7vw,7.2rem)] leading-[.87] tracking-[-.05em]">
                Thoughtful preparations.
                <br />
                Selected with context.
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#fffaf0]/68 sm:text-xl">
                ANJOORA brings wellness preparations, everyday ritual and
                responsible human review into one clear Apothecary experience.
                Explore what may fit your needs—or ask for help choosing.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button
                    asChild
                    size="lg"
                    className="h-14 rounded-sm bg-[#c3914c] px-7 text-base text-[#1d1711] hover:bg-[#d2a45f]"
                >
                  <Link href="#explore">
                    Explore the Apothecary <ArrowRight />
                  </Link>
                </Button>

                <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="h-14 rounded-sm border-[#d4a55f]/40 bg-transparent px-7 text-[#fffaf0] hover:bg-[#fffaf0]/8 hover:text-[#fffaf0]"
                >
                  <Link href="/assessment">Help me choose</Link>
                </Button>
              </div>
            </div>

            <aside className="border border-[#d4a55f]/28 bg-[#fffaf0]/[.035] p-6 sm:p-8">
              <div className="flex items-center justify-between border-b border-[#d4a55f]/22 pb-5">
                <div>
                  <p className="eyebrow text-[#d4a55f]">The Apothecary principle</p>
                  <p className="font-display mt-2 text-3xl">
                    Purpose before product
                  </p>
                </div>
                <BookOpen className="size-7 text-[#d4a55f]" />
              </div>

              <div className="mt-2 divide-y divide-[#d4a55f]/18">
                {[
                  "What are you actually trying to support?",
                  "Is a product necessary at all?",
                  "Which format can realistically fit your routine?",
                  "What needs safety or professional review first?",
                ].map((question, index) => (
                    <div
                        key={question}
                        className="grid grid-cols-[2rem_1fr] gap-3 py-4"
                    >
                  <span className="font-display text-[#d4a55f]">
                    0{index + 1}
                  </span>
                      <p className="text-[#fffaf0]/68">{question}</p>
                    </div>
                ))}
              </div>
            </aside>
          </div>
        </section>

        {/* WHAT IT IS */}
        <section className="apothecary-paper px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
          <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[.82fr_1.18fr]">
            <div>
              <p className="eyebrow text-[#8b432d]">What the Apothecary is</p>
              <h2 className="font-display mt-4 text-5xl leading-[.94] tracking-[-.043em] text-[#20352a] sm:text-6xl">
                More than a shelf of products.
              </h2>
            </div>

            <div className="space-y-5 text-lg leading-8 text-[#64665c]">
              <p>
                The ANJOORA Apothecary is the product and preparation layer of the
                ANJOORA experience. It brings together suitable wellness formats,
                clear guidance and a structured way to decide what may—or may
                not—belong in your routine.
              </p>

              <p>
                It is not designed as a symptom-to-product shortcut. A concern
                such as sleep, digestion or energy can have many contexts, and
                the same preparation may not be suitable for every person.
              </p>

              <p>
                When the choice is straightforward, the Apothecary should remain
                simple. When medicines, allergies, special situations, several
                linked concerns or concerning symptoms change the decision, the
                process moves to human review.
              </p>

              <div className="border-l-2 border-[#bd8a45] bg-[#ead9bb]/60 px-5 py-4 text-base leading-7 text-[#555d52]">
                ANJOORA does not treat the number of products selected as a
                measure of quality. A useful recommendation may be one item, a
                small coordinated set—or no Apothecary product at that moment.
              </div>
            </div>
          </div>
        </section>

        {/* FORMATS */}
        <section
            id="explore"
            className="bg-[#e7d8bd] px-5 py-20 sm:px-8 lg:px-14 lg:py-28"
        >
          <div className="mx-auto max-w-[1260px]">
            <div className="grid gap-8 border-b border-[#6b4b2e]/22 pb-9 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
              <div>
                <p className="eyebrow text-[#8b432d]">Explore the Apothecary</p>
                <h2 className="font-display mt-4 text-5xl leading-[.94] tracking-[-.043em] text-[#20352a] sm:text-6xl">
                  Begin with a format that can fit real life.
                </h2>
              </div>

              <p className="max-w-xl text-lg leading-8 text-[#62645a] lg:justify-self-end">
                The final format still depends on the exact preparation,
                suitability and applicable product standards.
              </p>
            </div>

            <div className="mt-8 grid border-l border-t border-[#6b4b2e]/20 md:grid-cols-2 lg:grid-cols-4">
              {apothecaryFormats.map((item) => (
                  <article
                      key={item.number}
                      className="min-h-64 border-b border-r border-[#6b4b2e]/20 bg-[#f4e8d0]/72 p-6"
                  >
                <span className="font-display text-xl text-[#8b432d]">
                  {item.number}
                </span>
                    <h3 className="font-display mt-8 text-3xl leading-tight tracking-[-.03em] text-[#20352a]">
                      {item.title}
                    </h3>
                    <p className="mt-4 leading-7 text-[#69675d]">{item.copy}</p>
                  </article>
              ))}
            </div>
          </div>
        </section>

        {/* WELLNESS NEEDS */}
        <section className="apothecary-paper px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
          <div className="mx-auto max-w-[1320px]">
            <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
              <div>
                <p className="eyebrow text-[#8b432d]">
                  Explore by wellness need
                </p>
                <h2 className="font-display mt-4 text-5xl leading-[.94] tracking-[-.043em] text-[#20352a] sm:text-6xl">
                  Start with what matters to you.
                </h2>
              </div>

              <div className="max-w-xl lg:justify-self-end">
                <p className="text-lg leading-8 text-[#62645a]">
                  These are wellness pathways, not diagnoses. Choose a starting
                  point and ANJOORA can carry that context into your personal
                  folio if you want guidance.
                </p>
              </div>
            </div>

            <div className="mt-10 grid border-l border-t border-[#6b4b2e]/20 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {concerns.map((concern, index) => (
                  <Link
                      key={concern.name}
                      href={`/assessment?concern=${encodeURIComponent(concern.name)}`}
                      className="group min-h-44 border-b border-r border-[#6b4b2e]/20 bg-[#fbf5e7]/75 p-5 transition hover:relative hover:z-10 hover:bg-[#fffaf0] hover:shadow-[0_18px_45px_rgba(62,40,23,.12)] focus-visible:relative focus-visible:z-10 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#8b432d]/25"
                  >
                    <div className="flex items-center justify-between">
                  <span className="font-display text-sm text-[#8b432d]">
                    W–{String(index + 1).padStart(2, "0")}
                  </span>
                      <ChevronRight className="size-4 text-[#8b432d] transition group-hover:translate-x-1" />
                    </div>

                    <h3 className="font-display mt-9 text-3xl text-[#20352a]">
                      {concern.name}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[#6c685e]">
                      {concern.short}
                    </p>
                  </Link>
              ))}

              <Link
                  href="/assessment"
                  className="group flex min-h-44 flex-col justify-between border-b border-r border-[#6b4b2e]/20 bg-[#263f32] p-5 text-[#fffaf0] transition hover:bg-[#345241]"
              >
                <Sparkles className="size-5 text-[#d4a55f]" />

                <div>
                  <h3 className="font-display text-3xl">Help me choose</h3>
                  <p className="mt-2 flex items-center justify-between text-sm text-[#fffaf0]/62">
                    Create my personal folio
                    <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                  </p>
                </div>
              </Link>
            </div>

            <p className="mt-5 max-w-3xl text-sm leading-6 text-[#777267]">
              Selecting a wellness need does not mean that a particular product
              is appropriate or required. Suitability depends on the actual
              preparation and relevant personal context.
            </p>
          </div>
        </section>

        {/* PREPARATION STANDARD */}
        <section className="bg-[#e7d8bd] px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
          <div className="mx-auto max-w-[1260px]">
            <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
              <div>
                <p className="eyebrow text-[#8b432d]">
                  What makes an ANJOORA preparation
                </p>
                <h2 className="font-display mt-4 text-5xl leading-[.94] tracking-[-.043em] text-[#20352a] sm:text-6xl">
                  Clarity should travel with the product.
                </h2>
              </div>

              <p className="max-w-xl text-lg leading-8 text-[#62645a] lg:justify-self-end">
                Beautiful packaging is not enough. The person should be able to
                understand what they are receiving, why it is being considered
                and how it should be used.
              </p>
            </div>

            <div className="mt-10 grid border-l border-t border-[#6b4b2e]/20 md:grid-cols-2 lg:grid-cols-3">
              {preparationStandards.map((item, index) => (
                  <article
                      key={item.title}
                      className="min-h-56 border-b border-r border-[#6b4b2e]/20 bg-[#f4e8d0]/72 p-6"
                  >
                <span className="font-display text-lg text-[#8b432d]">
                  0{index + 1}
                </span>
                    <h3 className="font-display mt-7 text-3xl text-[#20352a]">
                      {item.title}
                    </h3>
                    <p className="mt-3 leading-7 text-[#69675d]">{item.copy}</p>
                  </article>
              ))}
            </div>
          </div>
        </section>

        {/* PERSONALISATION */}
        <section className="apothecary-wood px-5 py-20 text-[#fffaf0] sm:px-8 lg:px-14 lg:py-28">
          <div className="mx-auto max-w-[1260px]">
            <div className="grid gap-9 lg:grid-cols-[.75fr_1.25fr]">
              <div>
                <p className="eyebrow text-[#d4a55f]">
                  Personalisation with boundaries
                </p>

                <h2 className="font-display mt-4 text-5xl leading-[.94] tracking-[-.043em] sm:text-6xl">
                  What personalisation actually means.
                </h2>

                <p className="mt-6 text-lg leading-8 text-[#fffaf0]/62">
                  Personalisation should make a recommendation more deliberate,
                  not more complicated. It may change the selection, format,
                  timing or guidance without creating an unnecessary mixture of
                  everything.
                </p>
              </div>

              <div className="grid border-l border-t border-[#d4a55f]/24 sm:grid-cols-2">
                {personalisationLayers.map(([title, copy], index) => (
                    <article
                        key={title}
                        className="border-b border-r border-[#d4a55f]/24 bg-[#fffaf0]/[.03] p-6"
                    >
                  <span className="font-display text-[#d4a55f]">
                    0{index + 1}
                  </span>
                      <h3 className="font-display mt-6 text-3xl">{title}</h3>
                      <p className="mt-3 leading-7 text-[#fffaf0]/58">{copy}</p>
                    </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* HUMAN REVIEW */}
        <section className="bg-[#f8f0df] px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
          <div className="mx-auto max-w-[1260px]">
            <div className="text-center">
              <p className="eyebrow text-[#8b432d]">
                When human review matters
              </p>
              <h2 className="font-display mx-auto mt-4 max-w-4xl text-5xl leading-[.94] tracking-[-.043em] text-[#20352a] sm:text-6xl">
                Some decisions should not be made from one concern alone.
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#66645a]">
                ANJOORA can hold a product decision for clarification or
                qualified review when the context changes what is safe,
                appropriate or useful.
              </p>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {reviewReasons.map(({ icon: Icon, title, copy }) => (
                  <article key={title} className="folio-frame bg-[#fbf5e7] p-6">
                    <Icon className="relative z-10 size-6 text-[#8b432d]" />

                    <h3 className="font-display relative z-10 mt-8 text-3xl text-[#20352a]">
                      {title}
                    </h3>

                    <p className="relative z-10 mt-3 leading-7 text-[#69675d]">
                      {copy}
                    </p>
                  </article>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                  href="/how-it-works"
                  className="inline-flex items-center gap-2 font-semibold text-[#31513e] underline decoration-[#bd8a45]/50 underline-offset-4 hover:decoration-[#bd8a45]"
              >
                See the complete ANJOORA review journey
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* PRODUCT TRANSPARENCY */}
        <section className="apothecary-paper px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
          <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="eyebrow text-[#8b432d]">Product transparency</p>
              <h2 className="font-display mt-4 text-5xl leading-[.94] tracking-[-.043em] text-[#20352a] sm:text-6xl">
                Understand it before you accept it.
              </h2>

              <p className="mt-6 max-w-lg text-lg leading-8 text-[#66645a]">
                A product card or reviewed recommendation should answer the
                practical questions a person needs before making a decision.
              </p>
            </div>

            <div className="folio-frame bg-[#ead9bb] p-6 sm:p-8">
              <div className="relative z-10 flex items-center justify-between border-b border-[#6b4b2e]/20 pb-5">
                <div>
                  <p className="eyebrow text-[#8b432d]">
                    ANJOORA product information
                  </p>
                  <h3 className="font-display mt-2 text-3xl text-[#20352a]">
                    What should be visible
                  </h3>
                </div>
                <PackageCheck className="size-7 text-[#31513e]" />
              </div>

              <div className="relative z-10 mt-3 divide-y divide-[#6b4b2e]/18">
                {productInformation.map((item) => (
                    <p
                        key={item}
                        className="flex items-start gap-3 py-3.5 text-[#555d52]"
                    >
                      <Check className="mt-1 size-4 shrink-0 text-[#8b432d]" />
                      {item}
                    </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* TWO ROUTES */}
        <section className="bg-[#e7d8bd] px-5 py-20 sm:px-8 lg:px-14 lg:py-24">
          <div className="mx-auto max-w-[1180px]">
            <div className="text-center">
              <p className="eyebrow text-[#8b432d]">Choose your route</p>
              <h2 className="font-display mx-auto mt-4 max-w-4xl text-5xl leading-[.94] tracking-[-.04em] text-[#20352a] sm:text-6xl">
                Explore independently—or ask ANJOORA to organise the context.
              </h2>
            </div>

            <div className="mt-10 grid gap-4 lg:grid-cols-2">
              <article className="border border-[#6b4b2e]/22 bg-[#fbf5e7] p-7 sm:p-9">
                <Leaf className="size-6 text-[#8b432d]" />
                <p className="eyebrow mt-7 text-[#8b432d]">Route one</p>
                <h3 className="font-display mt-3 text-4xl text-[#20352a]">
                  I want to explore.
                </h3>
                <p className="mt-4 max-w-lg leading-7 text-[#69675d]">
                  Browse the wellness pathways and understand how ANJOORA thinks
                  about formats, product information and responsible use.
                </p>
                <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="mt-7 h-13 rounded-sm border-[#31513e]/30 bg-transparent text-[#294738]"
                >
                  <Link href="#explore">
                    Explore the Apothecary <ArrowRight />
                  </Link>
                </Button>
              </article>

              <article className="border border-[#31513e]/25 bg-[#263f32] p-7 text-[#fffaf0] sm:p-9">
                <Sparkles className="size-6 text-[#d4a55f]" />
                <p className="eyebrow mt-7 text-[#d4a55f]">Route two</p>
                <h3 className="font-display mt-3 text-4xl">
                  I want help choosing.
                </h3>
                <p className="mt-4 max-w-lg leading-7 text-[#fffaf0]/62">
                  Create a short personal folio so your priorities, routine and
                  safety context can be considered together before a
                  recommendation is made.
                </p>

                <Button
                    asChild
                    size="lg"
                    className="mt-7 h-13 rounded-sm bg-[#f0d49f] px-6 text-[#251a12] hover:bg-[#f7e1b8]"
                >
                  <Link href="/assessment">
                    Create my folio <ArrowRight />
                  </Link>
                </Button>
              </article>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-[#f8f0df] px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
          <div className="mx-auto max-w-[1100px]">
            <div className="grid gap-8 lg:grid-cols-[.65fr_1.35fr]">
              <div>
                <p className="eyebrow text-[#8b432d]">Common questions</p>
                <h2 className="font-display mt-4 text-5xl leading-[.94] tracking-[-.04em] text-[#20352a]">
                  Before you begin.
                </h2>
              </div>

              <div className="divide-y divide-[#6b4b2e]/20 border-y border-[#6b4b2e]/20">
                {faqs.map(([question, answer], index) => (
                    <article key={question} className="py-6">
                      <div className="grid grid-cols-[2rem_1fr] gap-4">
                    <span className="font-display text-[#8b432d]">
                      0{index + 1}
                    </span>

                        <div>
                          <h3 className="font-display text-2xl leading-tight text-[#20352a]">
                            {question}
                          </h3>
                          <p className="mt-3 leading-7 text-[#69675d]">{answer}</p>
                        </div>
                      </div>
                    </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SAFETY NOTE */}
        <section className="apothecary-wood px-5 py-12 text-[#fffaf0] sm:px-8 lg:px-14">
          <div className="mx-auto flex max-w-[1120px] items-start gap-4 border border-[#d4a55f]/25 bg-[#fffaf0]/[.035] p-5 sm:p-6">
            <ShieldCheck className="mt-1 size-5 shrink-0 text-[#d4a55f]" />

            <p className="text-sm leading-6 text-[#fffaf0]/65">
              The ANJOORA Apothecary is intended for responsible wellness support.
              It does not replace urgent medical assessment, diagnosis or
              necessary treatment. Product suitability depends on the exact
              ingredients, product category and individual context.
            </p>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-[#8b432d] px-5 py-16 text-[#fffaf0] sm:px-8 lg:px-14 lg:py-20">
          <div className="mx-auto grid max-w-[1180px] gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="eyebrow text-[#e3bd7d]">
                Not sure where to begin?
              </p>

              <h2 className="font-display mt-4 max-w-4xl text-5xl leading-[.94] tracking-[-.04em] sm:text-6xl">
                Tell us what matters to you.
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#fffaf0]/68">
                ANJOORA will organise your answers into a concise personal folio
                so the next decision can begin with context rather than guesswork.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Button
                  asChild
                  size="lg"
                  className="h-14 rounded-sm bg-[#f0d49f] px-7 text-[#251a12] hover:bg-[#f7e1b8]"
              >
                <Link href="/assessment">
                  Begin my folio <ArrowRight />
                </Link>
              </Button>

              <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-14 rounded-sm border-[#f0d49f]/40 bg-transparent px-7 text-[#fffaf0] hover:bg-[#fffaf0]/8 hover:text-[#fffaf0]"
              >
                <Link href="/standards">Read our standards</Link>
              </Button>
            </div>
          </div>
        </section>

        <SiteFooter />
      </main>
  );
}