import type { Metadata } from "next";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowDown,
  ArrowRight,
  ClipboardCheck,
  ClipboardList,
  CreditCard,
  FileCheck2,
  HeartHandshake,
  Leaf,
  MessageCircle,
  PackageCheck,
  RotateCcw,
  Scale,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Truck,
  UserRoundCheck,
} from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "How ANJOORA Works",
  description:
    "See how ANJOORA organises the whole-person context, protects medical priorities, supports qualified Vaidya review, integrates selectively and follows through.",
};

type FlowStep = {
  code: string;
  title: string;
  copy: string;
  icon: LucideIcon;
};

type PathwayTone = "medical" | "coordinate" | "ayurveda" | "apothecary" | "none";

const phases = [
  ["I", "Build the folio", "Website"],
  ["II", "Safety & context", "Review"],
  ["III", "Choose the pathway", "Human decision"],
  ["IV", "Act selectively", "Care / Apothecary"],
  ["V", "Review & follow-up", "Ongoing"],
];

const folioSteps: FlowStep[] = [
  {
    code: "01",
    title: "Start with what matters now",
    copy:
      "Choose the concerns you want considered and identify the one priority that matters most right now.",
    icon: ClipboardList,
  },
  {
    code: "02",
    title: "Complete one guided folio",
    copy:
      "Six grouped sections organise your present pattern, body tendencies, daily rhythm, inner context, preferred format and safety information.",
    icon: FileCheck2,
  },
  {
    code: "03",
    title: "Add existing-care context",
    copy:
      "Tell us whether prescription medicines, allergies, pregnancy or breastfeeding, childhood, or urgent symptoms apply so the next step can be reviewed more safely.",
    icon: ShieldCheck,
  },
  {
    code: "04",
    title: "The website organises—not prescribes",
    copy:
      "Your answers become one readable ANJOORA folio. The website does not diagnose, prescribe, select treatment or automatically create a product list.",
    icon: Sparkles,
  },
];

const reviewSteps: FlowStep[] = [
  {
    code: "05",
    title: "Completeness check",
    copy:
      "The team checks whether the folio and contact information are complete enough for responsible human review.",
    icon: ClipboardCheck,
  },
  {
    code: "06",
    title: "Read the whole context",
    copy:
      "The reviewer considers the primary concern alongside linked concerns, current pattern, body context, daily life, safety information and patient preferences.",
    icon: UserRoundCheck,
  },
  {
    code: "07",
    title: "Protect medical priorities",
    copy:
      "The reviewer checks whether the situation needs clarification, medical assessment, continued medical treatment, referral or another professional to lead first.",
    icon: Scale,
  },
  {
    code: "08",
    title: "Decide what should lead next",
    copy:
      "The outcome is not automatically a product. The next step may be medical review, coordinated support, Ayurveda-guided routine changes, an Apothecary preparation, or no additional intervention.",
    icon: HeartHandshake,
  },
];

const pathways: {
  code: string;
  title: string;
  copy: string;
  tone: PathwayTone;
  icon: LucideIcon;
}[] = [
  {
    code: "A",
    title: "Medical assessment first",
    copy:
      "When symptoms, uncertainty or risk require diagnosis, investigation or urgent care, the medical pathway leads before an Apothecary decision.",
    tone: "medical",
    icon: Stethoscope,
  },
  {
    code: "B",
    title: "Continue medical care + coordinate",
    copy:
      "Existing treatment remains foundational while an appropriate supportive contribution is considered around it.",
    tone: "coordinate",
    icon: HeartHandshake,
  },
  {
    code: "C",
    title: "Ayurveda-guided routine support",
    copy:
      "Diet, sleep, daily rhythm, movement or another non-product intervention may be the most useful next step.",
    tone: "ayurveda",
    icon: Leaf,
  },
  {
    code: "D",
    title: "Apothecary preparation",
    copy:
      "A preparation may be considered when there is a defined purpose, acceptable safety context and a clear plan for use and review.",
    tone: "apothecary",
    icon: PackageCheck,
  },
  {
    code: "E",
    title: "Nothing additional now",
    copy:
      "Sometimes the responsible decision is not to add another therapy, product or ritual at this stage.",
    tone: "none",
    icon: ShieldCheck,
  },
];

const apothecarySteps: FlowStep[] = [
  {
    code: "09",
    title: "The reviewed proposal is explained",
    copy:
      "If a preparation is appropriate, the person receives what is proposed, why it is being considered, how to use it, relevant cautions, quantity, review period and price.",
    icon: MessageCircle,
  },
  {
    code: "10",
    title: "Ask, change, accept or decline",
    copy:
      "The person can ask questions, request a revision, accept the proposal, decline it or decide later. No order is created simply because a recommendation exists.",
    icon: HeartHandshake,
  },
  {
    code: "11",
    title: "Payment follows acceptance",
    copy:
      "A secure payment link is issued only when an accepted paid preparation or service requires payment. Payment details are not collected in the consultation form.",
    icon: CreditCard,
  },
  {
    code: "12",
    title: "Preparation and quality release",
    copy:
      "The approved item is prepared where lawful and licensed, or allocated from approved stock, then checked for identity, quantity, label details, traceability and applicable quality requirements.",
    icon: PackageCheck,
  },
  {
    code: "13",
    title: "Dispatch and guidance",
    copy:
      "Where a physical product is supplied, dispatch information and clear use guidance are shared through the agreed communication channel.",
    icon: Truck,
  },
];

const followUpSteps: FlowStep[] = [
  {
    code: "14",
    title: "Check what actually happened",
    copy:
      "Follow-up records whether the plan was practical, used as intended, tolerated and still relevant to the original goal.",
    icon: ClipboardCheck,
  },
  {
    code: "15",
    title: "Review the response",
    copy:
      "Questions, changes, unexpected effects, adherence and the need for further assessment are considered rather than assuming the original plan should continue.",
    icon: RotateCcw,
  },
  {
    code: "16",
    title: "Continue, change, pause or escalate",
    copy:
      "The next decision may be to continue, modify, stop, seek medical review or move to another appropriate professional pathway.",
    icon: ShieldCheck,
  },
];

const controlPoints = [
  "Safety before integration",
  "Clear responsibility for every decision",
  "A defined reason before adding an intervention",
  "Understanding before acceptance",
  "Review after intervention",
];

export default function HowItWorksPage() {
  return (
    <main>
      <SiteHeader />

      {/* HERO */}
      <section className="apothecary-wood px-5 py-18 text-[#fffaf0] sm:px-8 lg:px-14 lg:py-26">
        <div className="mx-auto max-w-[1260px]">
          <div className="grid gap-10 lg:grid-cols-[1.08fr_.92fr] lg:items-end">
            <div>
              <p className="eyebrow text-[#d4a55f]">How ANJOORA works</p>
              <h1 className="font-display mt-6 max-w-5xl text-[clamp(3.6rem,7vw,7.2rem)] leading-[.86] tracking-[-.052em]">
                One person. One complete context. The right next step.
              </h1>
            </div>

            <div className="border-l border-[#d4a55f]/35 pl-6 sm:pl-8">
              <p className="text-lg leading-8 text-[#fffaf0]/68">
                ANJOORA organises the story, protects medical priorities,
                supports qualified human reasoning and integrates selectively.
                The destination is not automatically a product.
              </p>

              <div className="mt-6 space-y-2 text-sm font-semibold text-[#fffaf0]/72">
                <p>Understand first.</p>
                <p>Decide second.</p>
                <p>Integrate only when there is a reason.</p>
                <p>Follow through.</p>
              </div>

              <Button
                asChild
                size="lg"
                className="mt-7 h-14 rounded-sm bg-[#c3914c] px-7 text-[#1d1711] hover:bg-[#d2a45f]"
              >
                <Link href="/assessment">
                  Create my ANJOORA folio <ArrowRight />
                </Link>
              </Button>
            </div>
          </div>

          <div className="mt-12 grid border-l border-t border-[#d4a55f]/24 sm:grid-cols-2 lg:grid-cols-5">
            {phases.map(([number, title, channel]) => (
              <div
                key={number}
                className="border-b border-r border-[#d4a55f]/24 bg-[#fffaf0]/[.03] p-5"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-xl text-[#d4a55f]">
                    {number}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-[.12em] text-[#fffaf0]/38">
                    {channel}
                  </span>
                </div>
                <p className="font-display mt-6 text-2xl">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PERSON FIRST */}
      <section className="bg-[#e7d8bd] px-5 py-20 sm:px-8 lg:px-14 lg:py-24">
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[.76fr_1.24fr]">
          <div>
            <p className="eyebrow text-[#8b432d]">Before the pathway</p>
            <h2 className="font-display mt-4 text-5xl leading-[.94] tracking-[-.04em] text-[#20352a]">
              The journey starts with the person—not with a modality.
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-[#62645a]">
            <p>
              People rarely arrive as a blank page. They may already have
              diagnoses, reports, prescription medicines, specialist advice,
              previous treatment, daily-life constraints and their own ideas
              about what they want to explore.
            </p>
            <p>
              ANJOORA begins by organising that relevant context before asking
              whether modern medicine, Ayurveda, an Apothecary preparation,
              another supportive approach—or no additional intervention—should
              come next.
            </p>

            <div className="border-l-2 border-[#31513e] bg-[#f7ecd7] px-6 py-5">
              <p className="font-display text-3xl leading-tight text-[#20352a]">
                Patient before modality. Context before addition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PHASE I */}
      <section className="apothecary-paper px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <SectionIntro
            eyebrow="Phase I · Build the ANJOORA folio"
            title="One folio. Six guided sections. One readable context."
            copy="The website helps organise information into a structured record for human review. It does not diagnose, prescribe or decide treatment."
          />
          <FlowPhase steps={folioSteps} />

          <FlowConnector label="Safety and context review" />

          <div className="grid gap-3 md:grid-cols-3">
            <BranchCard
              tone="stop"
              title="Concerning or urgent symptom"
              copy="The wellness pathway stops. Appropriate medical assessment should lead."
            />
            <BranchCard
              tone="hold"
              title="Medicines or special situation"
              copy="The decision is held for clarification, qualified review or medical coordination before anything new is added."
            />
            <BranchCard
              tone="continue"
              title="Suitable for further review"
              copy="The folio continues to qualified human review. This still does not guarantee that a product will be recommended."
            />
          </div>
        </div>
      </section>

      {/* PHASE II */}
      <section className="bg-[#f8f0df] px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <SectionIntro
            eyebrow="Phase II · Human review"
            title="The decision begins here—not the product."
            copy="The reviewer looks at the whole available context, protects medical priorities and decides what deserves attention first."
          />
          <FlowPhase steps={reviewSteps} />
        </div>
      </section>

      {/* PHASE III: PATHWAYS */}
      <section className="bg-[#e7d8bd] px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-[1260px]">
          <div className="text-center">
            <p className="eyebrow text-[#8b432d]">Phase III · Choose the pathway</p>
            <h2 className="font-display mx-auto mt-4 max-w-4xl text-5xl leading-[.94] tracking-[-.043em] text-[#20352a] sm:text-6xl">
              A responsible review can lead to different outcomes.
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#62645a]">
              ANJOORA should not behave like a funnel in which every person ends
              with a product. The right pathway depends on what the context
              actually shows.
            </p>
          </div>

          <div className="mt-10 grid gap-3 md:grid-cols-2 xl:grid-cols-5">
            {pathways.map((pathway) => (
              <PathwayCard key={pathway.code} {...pathway} />
            ))}
          </div>
        </div>
      </section>

      {/* COORDINATED PLAN */}
      <section className="apothecary-wood px-5 py-20 text-[#fffaf0] sm:px-8 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-[1180px]">
          <p className="eyebrow text-[#d4a55f]">The ANJOORA decision layer</p>
          <h2 className="font-display mt-4 max-w-5xl text-5xl leading-[.94] tracking-[-.043em] sm:text-6xl">
            The aim is not maximum integration. It is the minimum necessary,
            clearly justified integration.
          </h2>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            <PrincipleCard
              title="What must continue?"
              copy="Necessary medical treatment, investigations and monitoring remain protected."
            />
            <PrincipleCard
              title="What may be added?"
              copy="Only an intervention with a defined purpose, appropriate scope and acceptable safety context should enter the plan."
            />
            <PrincipleCard
              title="Who owns the next step?"
              copy="The person should understand which professional is responsible, what happens next and when the plan will be reviewed."
            />
          </div>
        </div>
      </section>

      {/* PHASE IV: APOTHECARY ONLY IF APPROPRIATE */}
      <section className="apothecary-paper px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <SectionIntro
            eyebrow="Phase IV · If an Apothecary preparation is appropriate"
            title="The Apothecary follows the decision."
            copy="Only after a preparation has a defined reason to be considered should the process move into explanation, acceptance, payment and fulfilment."
          />

          <FlowPhase steps={apothecarySteps} columns="five" />

          <div className="mt-7 border border-[#8b432d]/25 bg-[#fff4df] p-5 sm:p-6">
            <p className="flex items-start gap-3 text-sm leading-6 text-[#625f55]">
              <ShieldAlert className="mt-0.5 size-5 shrink-0 text-[#8b432d]" />
              “Personalised” may mean selecting the most appropriate approved
              product, combination, format, timing, quantity or guidance.
              Custom manufacture or compounding should occur only where the
              product category, licence, facility and approved procedure permit
              it.
            </p>
          </div>

          <div className="mt-8 grid gap-3 md:grid-cols-4">
            <DecisionChip title="Accept" copy="Proceed to the agreed next step." />
            <DecisionChip title="Ask" copy="Clarify purpose, use, cautions or alternatives." />
            <DecisionChip title="Request a change" copy="Return the proposal for review before payment." />
            <DecisionChip title="Decline / not now" copy="No order is created." />
          </div>
        </div>
      </section>

      {/* PHASE V */}
      <section className="bg-[#f8f0df] px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <SectionIntro
            eyebrow="Phase V · Review and follow-up"
            title="The journey does not end when a recommendation is made."
            copy="Follow-up checks what actually happened and whether the original plan still deserves to continue."
          />

          <FlowPhase steps={followUpSteps} />

          <div className="mt-10 border-l-2 border-[#31513e] bg-[#e8eee4] px-6 py-5">
            <p className="font-display text-3xl leading-tight text-[#20352a]">
              Review is part of the intervention—not an optional afterthought.
            </p>
          </div>
        </div>
      </section>

      {/* CONTROL POINTS */}
      <section className="bg-[#e7d8bd] px-5 py-20 sm:px-8 lg:px-14 lg:py-24">
        <div className="mx-auto grid max-w-[1180px] gap-8 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <p className="eyebrow text-[#8b432d]">Five control points</p>
            <h2 className="font-display mt-4 text-5xl leading-[.94] tracking-[-.04em] text-[#20352a]">
              Five things ANJOORA should never skip.
            </h2>
          </div>

          <div className="divide-y divide-[#6b4b2e]/20 border-y border-[#6b4b2e]/20">
            {controlPoints.map((item, index) => (
              <p
                key={item}
                className="grid grid-cols-[2rem_1fr] gap-4 py-4 text-[#555d52]"
              >
                <span className="font-display text-[#8b432d]">
                  0{index + 1}
                </span>
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#8b432d] px-5 py-16 text-[#fffaf0] sm:px-8 lg:px-14 lg:py-20">
        <div className="mx-auto grid max-w-[1180px] gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="eyebrow text-[#e3bd7d]">Begin with your complete context</p>
            <h2 className="font-display mt-4 max-w-4xl text-5xl leading-[.94] tracking-[-.04em] sm:text-6xl">
              The next step should begin with understanding—not with a product.
            </h2>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Button
              asChild
              size="lg"
              className="h-14 rounded-sm bg-[#f0d49f] px-7 text-[#251a12] hover:bg-[#f7e1b8]"
            >
              <Link href="/assessment">
                Create my ANJOORA folio <ArrowRight />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-14 rounded-sm border-[#f0d49f]/40 bg-transparent px-7 text-[#fffaf0] hover:bg-[#fffaf0]/8 hover:text-[#fffaf0]"
            >
              <Link href="/apothecary">Understand the Apothecary</Link>
            </Button>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

function SectionIntro({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <div className="grid gap-5 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
      <div>
        <p className="eyebrow text-[#8b432d]">{eyebrow}</p>
        <h2 className="font-display mt-4 text-4xl leading-[.96] tracking-[-.04em] text-[#20352a] sm:text-5xl">
          {title}
        </h2>
      </div>
      <p className="max-w-2xl text-lg leading-8 text-[#66645a] lg:justify-self-end">
        {copy}
      </p>
    </div>
  );
}

function FlowPhase({
  steps,
  columns = "four",
}: {
  steps: FlowStep[];
  columns?: "four" | "five";
}) {
  return (
    <div
      className={`mt-8 grid border-l border-t border-[#6b4b2e]/20 sm:grid-cols-2 ${
        columns === "five" ? "xl:grid-cols-5" : "lg:grid-cols-4"
      }`}
    >
      {steps.map((step, index) => {
        const Icon = step.icon;

        return (
          <article
            key={step.code}
            className="relative min-h-64 border-b border-r border-[#6b4b2e]/20 bg-[#fbf5e7]/72 p-6"
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-xl text-[#8b432d]">
                {step.code}
              </span>
              <Icon className="size-5 text-[#31513e]" />
            </div>

            <h3 className="font-display mt-8 text-3xl leading-[1.02] tracking-[-.025em] text-[#20352a]">
              {step.title}
            </h3>
            <p className="mt-3 leading-7 text-[#69675d]">{step.copy}</p>

            {index < steps.length - 1 && (
              <ArrowRight
                className={`absolute -right-3 top-7 z-10 hidden size-6 bg-[#f2e8d2] p-1 text-[#8b432d] ${
                  columns === "five" ? "xl:block" : "lg:block"
                }`}
              />
            )}
          </article>
        );
      })}
    </div>
  );
}

function FlowConnector({ label }: { label: string }) {
  return (
    <div className="flex min-h-24 flex-col items-center justify-center text-[#8b432d]">
      <ArrowDown className="size-6" />
      <span className="eyebrow mt-2 text-[.65rem]">{label}</span>
    </div>
  );
}

function BranchCard({
  tone,
  title,
  copy,
}: {
  tone: "stop" | "hold" | "continue";
  title: string;
  copy: string;
}) {
  const styles = {
    stop: "border-[#b83f37]/35 bg-[#fff1ec]",
    hold: "border-[#b78035]/35 bg-[#fff4df]",
    continue: "border-[#31513e]/30 bg-[#e8eee4]",
  };

  const dotStyles = {
    stop: "bg-[#b83f37]",
    hold: "bg-[#b78035]",
    continue: "bg-[#31513e]",
  };

  return (
    <article className={`border p-5 ${styles[tone]}`}>
      <div className="flex items-start gap-3">
        <span
          className={`mt-1 size-2.5 shrink-0 rounded-full ${dotStyles[tone]}`}
        />
        <div>
          <h3 className="font-display text-2xl text-[#20352a]">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-[#69675d]">{copy}</p>
        </div>
      </div>
    </article>
  );
}

function PathwayCard({
  code,
  title,
  copy,
  tone,
  icon: Icon,
}: {
  code: string;
  title: string;
  copy: string;
  tone: PathwayTone;
  icon: LucideIcon;
}) {
  const styles: Record<PathwayTone, string> = {
    medical: "border-[#b83f37]/25 bg-[#fff1ec]",
    coordinate: "border-[#31513e]/25 bg-[#e8eee4]",
    ayurveda: "border-[#8b432d]/20 bg-[#f4e8d0]",
    apothecary: "border-[#b78035]/28 bg-[#fff4df]",
    none: "border-[#6b4b2e]/18 bg-[#fbf5e7]",
  };

  return (
    <article className={`min-h-64 border p-6 ${styles[tone]}`}>
      <div className="flex items-center justify-between">
        <span className="font-display text-xl text-[#8b432d]">{code}</span>
        <Icon className="size-5 text-[#31513e]" />
      </div>

      <h3 className="font-display mt-7 text-3xl leading-tight text-[#20352a]">
        {title}
      </h3>
      <p className="mt-4 leading-7 text-[#69675d]">{copy}</p>
    </article>
  );
}

function PrincipleCard({ title, copy }: { title: string; copy: string }) {
  return (
    <article className="border border-[#d4a55f]/24 bg-[#fffaf0]/[.03] p-6">
      <h3 className="font-display text-3xl">{title}</h3>
      <p className="mt-3 leading-7 text-[#fffaf0]/60">{copy}</p>
    </article>
  );
}

function DecisionChip({ title, copy }: { title: string; copy: string }) {
  return (
    <article className="border border-[#6b4b2e]/18 bg-[#fbf5e7] p-5">
      <h3 className="font-display text-2xl text-[#20352a]">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-[#69675d]">{copy}</p>
    </article>
  );
}
