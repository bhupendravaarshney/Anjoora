import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Beaker,
  Check,
  ClipboardCheck,
  HeartHandshake,
  Leaf,
  Microscope,
  PackageCheck,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  UserRoundCheck,
} from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "The Apothecary | ANJOORA",
  description:
      "Discover how ANJOORA connects the Apothecary, the modern Vaidya and contemporary medical care around one person.",
};

const threeWorlds = [
  {
    icon: Beaker,
    eyebrow: "Preparation with purpose",
    title: "Apothecary",
    copy:
        "Materia medica, formulation, quality, traceability, storage and clear directions turn a justified therapeutic decision into an identifiable preparation.",
  },
  {
    icon: UserRoundCheck,
    eyebrow: "Traditional wisdom · Modern context",
    title: "Modern Vaidya",
    copy:
        "Ayurvedic reasoning is applied with awareness of current diagnoses, medicines, investigations, specialist care and the realities of modern life.",
  },
  {
    icon: Stethoscope,
    eyebrow: "Diagnosis · Treatment · Safety",
    title: "Modern Medicine",
    copy:
        "Diagnosis, investigations, pharmacology, procedures, acute care and disease monitoring remain essential where biomedical care needs to lead.",
  },
];

const anjooraAdds = [
  {
    title: "One complete context",
    copy:
        "Medicines, reports, symptoms, routines, priorities and current treatment are considered together.",
  },
  {
    title: "Clear professional roles",
    copy:
        "The physician, Vaidya and Apothecary remain distinct. Each contributes where their responsibility belongs.",
  },
  {
    title: "Safety before addition",
    copy:
        "Interactions, duplication, red flags and the risk of delaying necessary care are considered before something new is added.",
  },
  {
    title: "Evidence with honesty",
    copy:
        "Traditional use, emerging research, established evidence and uncertainty are described as different things.",
  },
  {
    title: "Selective integration",
    copy:
        "Integration means using only what has a clear purpose—not accumulating therapies.",
  },
  {
    title: "Follow-up",
    copy:
        "Every recommendation should have a purpose, review period and clear next steps.",
  },
];

const modernVaidya = [
  [
    "Classical reasoning",
    "Ayurvedic assessment may consider constitution, digestion, diet, sleep, daily rhythm, season, behaviour and the wider presentation of the person.",
  ],
  [
    "Medical context",
    "Existing diagnoses, medicines, investigations, allergies, procedures and specialist care remain visible to the decision.",
  ],
  [
    "Evidence awareness",
    "Traditional use, proposed mechanisms, emerging research and established clinical evidence are not treated as equivalent.",
  ],
  [
    "Safety awareness",
    "Interactions, contraindications, duplication and situations requiring another professional are considered before recommending an intervention.",
  ],
  [
    "Referral awareness",
    "Sometimes the correct Ayurvedic decision is to seek medical investigation or urgent assessment first.",
  ],
  [
    "Review discipline",
    "A recommendation needs a reason to continue, change, pause, stop or escalate.",
  ],
];

const careFlow = [
  ["01", "Listen", "What is troubling the person and what matters most now?"],
  ["02", "Understand", "Which diagnoses, medicines, investigations and daily circumstances change the decision?"],
  ["03", "Assess", "What does appropriate professional reasoning suggest, and what remains uncertain?"],
  ["04", "Check", "Is the proposed intervention suitable alongside existing care, or is clarification or referral needed first?"],
  ["05", "Select", "Is an Apothecary preparation actually required? If yes, for what defined purpose?"],
  ["06", "Prepare", "The selected formulation or approved product is prepared or allocated under the applicable standards."],
  ["07", "Explain", "Purpose, directions, cautions, traceability and review period are made understandable."],
  ["08", "Review", "Continue, modify, pause, stop or escalate according to response and clinical context."],
];

const governance = [
  ["Identity", "What exactly is the ingredient, formulation or finished product?"],
  ["Quality", "What preparation, storage and quality standards apply?"],
  ["Traceability", "Can the source, preparation or batch be identified where applicable?"],
  ["Compatibility", "What else is the person already taking or receiving?"],
  ["Guidance", "How should it be used and what should the person understand before starting?"],
  ["Monitoring", "What should prompt review, pause, withdrawal or medical escalation?"],
];

export default function ApothecaryPage() {
  return (
      <main className="overflow-x-clip">
        <SiteHeader />

        {/* HERO */}
        <section className="bg-[#f4efe5] px-5 py-14 sm:px-8 lg:px-14 lg:py-18">
          <div className="mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-[.92fr_1.08fr] lg:items-center">
            <div>
              <p className="eyebrow text-[#31513e]">The ANJOORA Apothecary</p>

              <h1 className="font-display mt-5 max-w-4xl text-[clamp(3.5rem,6.8vw,7rem)] leading-[.88] tracking-[-.052em] text-[#17332b]">
                Where traditional preparation meets modern clinical context.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5f6259] sm:text-xl">
                The Apothecary has always connected knowledge of medicinal substances
                with the people who use them. ANJOORA brings that idea forward by
                connecting the Apothecary, the modern Vaidya and contemporary
                medical care around one person.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                    asChild
                    size="lg"
                    className="h-14 rounded-full bg-[#214c3d] px-7 text-[#fffaf0] hover:bg-[#2d5d4d]"
                >
                  <Link href="#three-worlds">
                    Explore the ANJOORA approach <ArrowRight />
                  </Link>
                </Button>

                <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="h-14 rounded-full border-[#31513e]/25 bg-transparent px-7 text-[#31513e]"
                >
                  <Link href="/how-it-works">How ANJOORA works</Link>
                </Button>
              </div>

              <div className="mt-8 flex items-center gap-4 text-xs font-bold uppercase tracking-[.18em] text-[#7b6f60]">
                <span className="h-px w-8 bg-[#31513e]/45" />
                Old knowledge. Modern responsibility.
              </div>
            </div>

            <div className="relative aspect-[1.28/1] overflow-hidden rounded-sm border border-[#31513e]/12 bg-[#dfd5c1]">
              <Image
                  src="/anjoora-apothecary-hero-concept.png"
                  alt="ANJOORA Apothecary connecting traditional preparations and modern clinical care"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </div>
          </div>
        </section>

        {/* THREE FOUNDATIONAL ROLES */}
        <section
            id="three-worlds"
            className="bg-[#faf7f0] px-5 py-8 sm:px-8 lg:px-14 lg:py-10"
        >
          <div className="mx-auto grid max-w-[1320px] border-l border-t border-[#31513e]/12 md:grid-cols-3">
            {threeWorlds.map(({ icon: Icon, eyebrow, title, copy }) => (
                <article
                    key={title}
                    className="min-h-72 border-b border-r border-[#31513e]/12 bg-[#f7f3e9] p-7 text-center"
                >
                  <div className="mx-auto flex size-20 items-center justify-center rounded-full bg-[#e7eadf]">
                    <Icon className="size-8 text-[#31513e]" />
                  </div>
                  <h2 className="font-display mt-6 text-4xl text-[#17332b]">{title}</h2>
                  <p className="mt-2 text-xs font-bold uppercase tracking-[.16em] text-[#74695c]">
                    {eyebrow}
                  </p>
                  <p className="mx-auto mt-4 max-w-sm leading-7 text-[#62655c]">{copy}</p>
                </article>
            ))}
          </div>
        </section>

        {/* WHAT IS APOTHECARY */}
        <section className="bg-[#fbf8f1] px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
          <div className="mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
            <div>
              <p className="eyebrow text-[#31513e]">What is an Apothecary?</p>
              <h2 className="font-display mt-4 text-5xl leading-[.94] tracking-[-.043em] text-[#17332b] sm:text-6xl">
                More than a place where remedies are stored.
              </h2>

              <div className="mt-6 space-y-4 text-lg leading-8 text-[#62655c]">
                <p>
                  Historically, apothecaries prepared, preserved and dispensed
                  medicinal substances, working close to healers and the people
                  they served.
                </p>
                <p>
                  Over time, those responsibilities evolved into specialised modern
                  roles across pharmacy, manufacturing and clinical practice.
                </p>
                <p>
                  At ANJOORA, the Apothecary is a carefully governed preparation
                  layer where traditional preparation knowledge, product quality,
                  patient context and professional guidance come together.
                </p>
              </div>

              <div className="mt-7 flex items-start gap-3 rounded-sm bg-[#e8ede3] p-5 text-sm leading-6 text-[#4e5c53]">
                <ShieldCheck className="mt-0.5 size-5 shrink-0 text-[#31513e]" />
                <p>
                  The Apothecary does not diagnose or replace a doctor. It helps a
                  justified preparation become safe, traceable and understandable.
                </p>
              </div>
            </div>

            <div className="relative aspect-[1.28/1] overflow-hidden border border-[#31513e]/12 bg-[#e7d8bd]">
              <Image
                  src="/about/03-apothecary-preparation.webp"
                  alt="Traditional preparation and botanical materials"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 52vw"
              />
            </div>
          </div>
        </section>

        {/* MODERN VAIDYA */}
        <section className="bg-[#eee4d4] px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
          <div className="mx-auto max-w-[1260px]">
            <div className="grid gap-8 lg:grid-cols-[.78fr_1.22fr] lg:items-end">
              <div>
                <p className="eyebrow text-[#8b5b36]">
                  Traditional reasoning in a contemporary healthcare environment
                </p>
                <h2 className="font-display mt-4 text-5xl leading-[.94] tracking-[-.043em] text-[#17332b] sm:text-6xl">
                  Who is the modern Vaidya?
                </h2>
              </div>

              <p className="max-w-xl text-lg leading-8 text-[#62655c] lg:justify-self-end">
                A modern Vaidya does not simply reproduce an ancient prescription
                in a modern bottle. Ayurvedic reasoning must meet the realities of
                today&apos;s patient—diagnoses, medicines, investigations, specialists
                and changing daily life.
              </p>
            </div>

            <div className="mt-10 grid border-l border-t border-[#6b4b2e]/16 md:grid-cols-2 lg:grid-cols-3">
              {modernVaidya.map(([title, copy], index) => (
                  <article
                      key={title}
                      className="min-h-56 border-b border-r border-[#6b4b2e]/16 bg-[#f8f1e5]/80 p-6"
                  >
                <span className="font-display text-lg text-[#8b5b36]">
                  0{index + 1}
                </span>
                    <h3 className="font-display mt-6 text-3xl text-[#17332b]">
                      {title}
                    </h3>
                    <p className="mt-3 leading-7 text-[#69675d]">{copy}</p>
                  </article>
              ))}
            </div>
          </div>
        </section>

        {/* THREE WORLDS / ANJOORA */}
        <section className="bg-[#f8f5ed] px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
          <div className="mx-auto max-w-[1260px]">
            <div className="grid gap-10 lg:grid-cols-[.65fr_1.35fr] lg:items-center">
              <div>
                <p className="eyebrow text-[#31513e]">The three worlds, one you</p>
                <h2 className="font-display mt-4 text-5xl leading-[.94] tracking-[-.043em] text-[#17332b] sm:text-6xl">
                  Different strengths. Greater clarity together.
                </h2>
                <p className="mt-6 text-lg leading-8 text-[#62655c]">
                  ANJOORA does not force different disciplines into one indistinct
                  system. It makes their boundaries and connections clearer so each
                  can contribute where it is appropriate.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <WorldCard
                    icon={Stethoscope}
                    title="Modern Medicine"
                    points={["Diagnosis", "Investigations", "Treatment", "Acute care", "Monitoring"]}
                    tone="blue"
                />
                <WorldCard
                    icon={UserRoundCheck}
                    title="Modern Vaidya"
                    points={["Ayurvedic assessment", "Individual context", "Diet & lifestyle", "Traditional reasoning", "Longitudinal care"]}
                    tone="gold"
                />
                <WorldCard
                    icon={Beaker}
                    title="Apothecary"
                    points={["Materia medica", "Preparation", "Quality & safety", "Traceability", "Clear guidance"]}
                    tone="green"
                />
              </div>
            </div>

            <div className="mt-8 grid gap-4 border border-[#31513e]/14 bg-[#f0ede4] p-6 sm:p-8 lg:grid-cols-[1fr_.7fr] lg:items-center">
              <div>
                <p className="eyebrow text-[#31513e]">ANJOORA</p>
                <h3 className="font-display mt-3 text-4xl text-[#17332b]">
                  The coordination layer
                </h3>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-[#62655c]">
                  We connect the dots between traditional knowledge, modern
                  expertise and the person&apos;s complete context so that the next
                  decision is clearer, safer and easier to understand.
                </p>
              </div>

              <div className="border-l border-[#31513e]/18 pl-0 lg:pl-8">
                <p className="font-display text-3xl leading-tight text-[#17332b]">
                  The Vaidya asks: what may belong in care?
                </p>
                <p className="font-display mt-4 text-3xl leading-tight text-[#17332b]">
                  The Apothecary asks: how can it be delivered responsibly?
                </p>
                <p className="font-display mt-4 text-3xl leading-tight text-[#17332b]">
                  Modern medicine asks: what must not be missed?
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT ANJOORA ADDS */}
        <section className="bg-[#fbf8f1] px-5 py-20 sm:px-8 lg:px-14 lg:py-24">
          <div className="mx-auto max-w-[1260px]">
            <div className="text-center">
              <p className="eyebrow text-[#31513e]">What ANJOORA adds</p>
              <h2 className="font-display mx-auto mt-4 max-w-4xl text-5xl leading-[.94] tracking-[-.04em] text-[#17332b] sm:text-6xl">
                A more connected approach to care.
              </h2>
            </div>

            <div className="mt-10 grid border-l border-t border-[#31513e]/12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
              {anjooraAdds.map((item, index) => (
                  <article
                      key={item.title}
                      className="min-h-56 border-b border-r border-[#31513e]/12 bg-[#faf7f0] p-5 text-center"
                  >
                    <div className="mx-auto flex size-12 items-center justify-center rounded-full border border-[#31513e]/18">
                      <span className="font-display text-[#31513e]">0{index + 1}</span>
                    </div>
                    <h3 className="font-display mt-5 text-2xl leading-tight text-[#17332b]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[#686a62]">{item.copy}</p>
                  </article>
              ))}
            </div>
          </div>
        </section>

        {/* FROM VAIDYA TO APOTHECARY */}
        <section className="bg-[#203f34] px-5 py-20 text-[#fffaf0] sm:px-8 lg:px-14 lg:py-28">
          <div className="mx-auto max-w-[1260px]">
            <div className="grid gap-8 lg:grid-cols-[.76fr_1.24fr] lg:items-end">
              <div>
                <p className="eyebrow text-[#d4a55f]">From Vaidya to Apothecary</p>
                <h2 className="font-display mt-4 text-5xl leading-[.94] tracking-[-.043em] sm:text-6xl">
                  The preparation comes after the reasoning.
                </h2>
              </div>
              <p className="max-w-xl text-lg leading-8 text-[#fffaf0]/66 lg:justify-self-end">
                ANJOORA should not begin with “Which product should we sell?” It
                begins with understanding, then assessment, then a reasoned decision
                about whether an Apothecary preparation belongs at all.
              </p>
            </div>

            <div className="mt-10 grid border-l border-t border-[#d4a55f]/22 sm:grid-cols-2 lg:grid-cols-4">
              {careFlow.map(([number, title, copy]) => (
                  <article
                      key={number}
                      className="min-h-56 border-b border-r border-[#d4a55f]/22 bg-[#fffaf0]/[.025] p-6"
                  >
                    <span className="font-display text-[#d4a55f]">{number}</span>
                    <h3 className="font-display mt-6 text-3xl">{title}</h3>
                    <p className="mt-3 leading-7 text-[#fffaf0]/58">{copy}</p>
                  </article>
              ))}
            </div>
          </div>
        </section>

        {/* BOUNDARIES */}
        <section className="bg-[#f8f1e6] px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
          <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[.75fr_1.25fr]">
            <div>
              <p className="eyebrow text-[#8b5b36]">Integration has boundaries</p>
              <h2 className="font-display mt-4 text-5xl leading-[.94] tracking-[-.043em] text-[#17332b]">
                Some problems should not begin in the Apothecary.
              </h2>
            </div>

            <div>
              <div className="flex items-start gap-4 border border-[#b55b42]/22 bg-[#fff0ea] p-6">
                <ShieldAlert className="mt-1 size-6 shrink-0 text-[#9b4937]" />
                <div>
                  <h3 className="font-display text-3xl text-[#17332b]">
                    Modern medical assessment leads when the situation demands it.
                  </h3>
                  <p className="mt-4 leading-7 text-[#69675d]">
                    Severe breathlessness, chest pain, fainting, stroke-like
                    symptoms, significant bleeding, severe infection, acute
                    deterioration and other concerning presentations should not be
                    delayed by a wellness or traditional-care pathway.
                  </p>
                </div>
              </div>

              <p className="mt-6 text-lg leading-8 text-[#62655c]">
                Responsible integration is not defined by using several systems at
                the same time. It is defined by knowing which system should lead,
                what can safely coexist and what should wait.
              </p>
            </div>
          </div>
        </section>

        {/* GOVERNANCE */}
        <section className="bg-[#eee4d4] px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
          <div className="mx-auto grid max-w-[1260px] gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
            <div>
              <p className="eyebrow text-[#8b5b36]">Modern governance</p>
              <h2 className="font-display mt-4 text-5xl leading-[.94] tracking-[-.043em] text-[#17332b] sm:text-6xl">
                Tradition deserves modern responsibility.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-[#62655c]">
                Respect for traditional knowledge does not mean lowering the
                standard for identity, quality, safety, traceability or honest
                communication.
              </p>

              <div className="relative mt-8 aspect-[4/3] overflow-hidden border border-[#31513e]/12">
                <Image
                    src="/about/06-botanical-apothecary-detail.webp"
                    alt="Botanical materia medica and Apothecary preparation"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>

            <div className="grid border-l border-t border-[#6b4b2e]/16 sm:grid-cols-2">
              {governance.map(([title, copy], index) => (
                  <article
                      key={title}
                      className="min-h-48 border-b border-r border-[#6b4b2e]/16 bg-[#f8f1e5]/80 p-6"
                  >
                    <span className="font-display text-[#8b5b36]">0{index + 1}</span>
                    <h3 className="font-display mt-5 text-3xl text-[#17332b]">
                      {title}
                    </h3>
                    <p className="mt-3 leading-7 text-[#69675d]">{copy}</p>
                  </article>
              ))}
            </div>
          </div>
        </section>

        {/* CLOSING */}
        <section className="bg-[#fbf8f1] px-5 py-20 text-center sm:px-8 lg:px-14 lg:py-28">
          <div className="mx-auto max-w-[980px]">
            <p className="eyebrow text-[#31513e]">The ANJOORA principle</p>
            <h2 className="font-display mt-4 text-5xl leading-[.94] tracking-[-.043em] text-[#17332b] sm:text-6xl">
              Old knowledge. Modern responsibility. One person at the centre.
            </h2>
            <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-[#62655c]">
              Tradition does not need to be discarded because medicine has
              advanced. But ancient use alone does not prove that an intervention
              is right for a person today. Responsible integrative care requires
              respect for knowledge, evidence, professional boundaries and the
              person receiving care.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#8b4a32] px-5 py-16 text-[#fffaf0] sm:px-8 lg:px-14 lg:py-20">
          <div className="mx-auto grid max-w-[1180px] gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="eyebrow text-[#f0d49f]">Have modern treatment already?</p>
              <h2 className="font-display mt-4 max-w-4xl text-5xl leading-[.94] tracking-[-.04em] sm:text-6xl">
                Bring the complete context before adding anything new.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#fffaf0]/68">
                Tell ANJOORA what you are already taking, what matters to you and
                what you want to explore. The next step should begin with context,
                not with a product.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <Button
                  asChild
                  size="lg"
                  className="h-14 rounded-full bg-[#f0d49f] px-7 text-[#251a12] hover:bg-[#f7e1b8]"
              >
                <Link href="/assessment">
                  Create my ANJOORA folio <ArrowRight />
                </Link>
              </Button>

              <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-14 rounded-full border-[#f0d49f]/40 bg-transparent px-7 text-[#fffaf0] hover:bg-[#fffaf0]/8 hover:text-[#fffaf0]"
              >
                <Link href="/how-it-works">See the complete journey</Link>
              </Button>
            </div>
          </div>
        </section>

        <SiteFooter />
      </main>
  );
}

function WorldCard({
                     icon: Icon,
                     title,
                     points,
                     tone,
                   }: {
  icon: typeof Stethoscope;
  title: string;
  points: string[];
  tone: "blue" | "gold" | "green";
}) {
  const toneClass = {
    blue: "bg-[#e1ebec]",
    gold: "bg-[#efe0c8]",
    green: "bg-[#dfe7d8]",
  }[tone];

  return (
      <article className={`rounded-full px-7 py-9 text-center ${toneClass}`}>
        <Icon className="mx-auto size-6 text-[#31513e]" />
        <h3 className="font-display mt-4 text-3xl leading-tight text-[#17332b]">
          {title}
        </h3>
        <div className="mt-5 space-y-1 text-sm leading-6 text-[#5d625a]">
          {points.map((point) => (
              <p key={point}>{point}</p>
          ))}
        </div>
      </article>
  );
}
