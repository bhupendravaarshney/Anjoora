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
  PackageOpen,
  RotateCcw,
  Scale,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Stamp,
  Truck,
  UserRoundCheck,
} from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "The Complete Journey",
  description: "Follow the complete ANJOORA flow from digital consultation and Vaidya review to WhatsApp acceptance, secure payment, preparation, dispatch and follow-up.",
};

type FlowStep = {
  code: string;
  title: string;
  copy: string;
  icon: LucideIcon;
};

const phases = [
  ["I", "Digital folio", "Website"],
  ["II", "Vaidya review", "Human review"],
  ["III", "Recommendation", "WhatsApp"],
  ["IV", "Payment & making", "WhatsApp + apothecary"],
  ["V", "Delivery & care", "WhatsApp"],
];

const digitalSteps: FlowStep[] = [
  { code: "01", title: "Choose concerns", copy: "Select up to four concerns and identify the one priority that matters most now.", icon: ClipboardList },
  { code: "02", title: "Complete six grouped folios", copy: "Add the current pattern, body tendencies, diet, lifestyle rituals, emotions, psychology and preferred format.", icon: FileCheck2 },
  { code: "03", title: "Complete the safety screen", copy: "Share medicines, allergies, pregnancy, age and any urgent or concerning symptoms.", icon: ShieldCheck },
  { code: "04", title: "Receive your apothecary brief", copy: "The website organises your answers into one readable record; it does not prescribe or place an order.", icon: Sparkles },
];

const reviewSteps: FlowStep[] = [
  { code: "05", title: "Folio completeness check", copy: "The team confirms that the answers and WhatsApp contact details are complete enough for review.", icon: ClipboardCheck },
  { code: "06", title: "Vaidya reads the whole pattern", copy: "The primary concern is reviewed alongside linked concerns, body rhythm, daily life, emotional context and format preference.", icon: UserRoundCheck },
  { code: "07", title: "Suitability and safety check", copy: "The reviewer checks whether a wellness recommendation is appropriate or whether clarification, medical review or referral should come first.", icon: Scale },
  { code: "08", title: "Recommendation is prepared", copy: "Only suitable products or preparations are selected, with a purpose, directions, quantity, cautions and review period.", icon: Leaf },
];

const whatsappSteps: FlowStep[] = [
  { code: "09", title: "Recommendation reaches WhatsApp", copy: "The customer receives the reviewed product list, why each item was selected, directions, quantity and total amount.", icon: MessageCircle },
  { code: "10", title: "Customer asks, changes or accepts", copy: "The customer can ask questions, request a revision, accept the plan or decline without placing an order.", icon: HeartHandshake },
  { code: "11", title: "Secure payment link is issued", copy: "Only an accepted recommendation receives the approved payment link. Payment details are never collected in the consultation form.", icon: CreditCard },
  { code: "12", title: "Payment is confirmed", copy: "A successful payment creates the confirmed request and a reference number. An unsuccessful payment does not release making or dispatch.", icon: Stamp },
];

const makingSteps: FlowStep[] = [
  { code: "13", title: "The paid request is released", copy: "The confirmed recommendation, quantity, customer details and delivery instructions move to the authorised fulfilment team.", icon: PackageOpen },
  { code: "14", title: "Preparation or allocation begins", copy: "The approved item is prepared where lawful and licensed, or allocated from an approved finished-product batch according to its category.", icon: Leaf },
  { code: "15", title: "Quality and identity are checked", copy: "The team verifies the correct item, batch or preparation record, quantity, condition, label details and applicable quality checks.", icon: PackageCheck },
  { code: "16", title: "Label, pack and release", copy: "Directions, cautions, customer reference and traceability details are checked before the package is sealed for dispatch.", icon: ShieldCheck },
  { code: "17", title: "Dispatch update is shared", copy: "The customer receives the dispatch status and available tracking information through WhatsApp.", icon: Truck },
];

const careSteps: FlowStep[] = [
  { code: "18", title: "Delivery is confirmed", copy: "The customer can report a delivery problem, damaged pack or mismatch before beginning the ritual.", icon: PackageCheck },
  { code: "19", title: "Use guidance is reinforced", copy: "WhatsApp guidance repeats how and when to use the product, what to avoid and when to pause.", icon: MessageCircle },
  { code: "20", title: "Follow-up closes the loop", copy: "A planned check-in records experience, adherence, questions and any need to continue, revise, pause or seek medical review.", icon: RotateCcw },
];

export default function HowItWorksPage() {
  return (
    <main>
      <SiteHeader />

      <section className="apothecary-wood px-5 py-18 text-[#fffaf0] sm:px-8 lg:px-14 lg:py-26">
        <div className="mx-auto max-w-[1260px]">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
            <div>
              <p className="eyebrow text-[#d4a55f]">The complete ANJOORA journey</p>
              <h1 className="font-display mt-6 max-w-5xl text-[clamp(3.6rem,7vw,7.4rem)] leading-[.86] tracking-[-.052em]">
                From your first answer to the final follow-up.
              </h1>
            </div>
            <div className="border-l border-[#d4a55f]/35 pl-6 sm:pl-8">
              <p className="text-lg leading-8 text-[#fffaf0]/68">The website creates the folio. The Vaidya creates the recommendation. WhatsApp carries consent and payment. Making begins only after payment confirmation.</p>
              <Button asChild size="lg" className="mt-7 h-14 rounded-sm bg-[#c3914c] px-7 text-[#1d1711] hover:bg-[#d2a45f]">
                <Link href="/assessment">Begin my consultation <ArrowRight /></Link>
              </Button>
            </div>
          </div>

          <div className="mt-12 grid border-l border-t border-[#d4a55f]/24 sm:grid-cols-2 lg:grid-cols-5">
            {phases.map(([number, title, channel]) => (
              <div key={number} className="border-b border-r border-[#d4a55f]/24 bg-[#fffaf0]/[.03] p-5">
                <div className="flex items-center justify-between">
                  <span className="font-display text-xl text-[#d4a55f]">{number}</span>
                  <span className="text-xs font-bold uppercase tracking-[.12em] text-[#fffaf0]/38">{channel}</span>
                </div>
                <p className="font-display mt-6 text-2xl">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="apothecary-paper px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <SectionIntro eyebrow="Phase I · Website" title="Your answers become one organised folio." copy="The customer completes six grouped screens—not a long chain of isolated questions. The website collects context and checks safety; it never creates the final product list." />
          <FlowPhase steps={digitalSteps} />

          <FlowConnector label="Safety decision" />
          <div className="grid gap-3 md:grid-cols-3">
            <BranchCard tone="stop" title="Urgent symptom" copy="Stop the wellness flow and direct the person to appropriate urgent medical assessment." />
            <BranchCard tone="hold" title="Medication or special situation" copy="Hold the product decision for qualified review, clarification or medical coordination." />
            <BranchCard tone="continue" title="Everyday wellness context" copy="Complete the apothecary brief and continue to Vaidya review." />
          </div>

          <FlowConnector label="Qualified human review" />
          <SectionIntro eyebrow="Phase II · Vaidya review" title="The product suggestion begins only here." copy="The reviewer reads the complete picture, checks whether a recommendation is appropriate and documents why each item belongs in the plan." />
          <FlowPhase steps={reviewSteps} />

          <FlowConnector label="Reviewed recommendation" />
          <RecommendationPreview />

          <FlowConnector label="Customer conversation" />
          <SectionIntro eyebrow="Phase III · WhatsApp" title="Understand first. Accept second. Pay third." copy="WhatsApp is the discussion and agreement layer. The customer sees the recommendation and total amount before a payment link is issued." />
          <FlowPhase steps={whatsappSteps} />

          <div className="mt-7 grid gap-3 md:grid-cols-3">
            <BranchCard tone="continue" title="Accept" copy="The secure payment link is issued for the accepted recommendation." />
            <BranchCard tone="hold" title="Request a change" copy="The request returns to the reviewer; the updated recommendation is shared again before payment." />
            <BranchCard tone="neutral" title="Decline or decide later" copy="The conversation closes or pauses. No payment, making or order is created." />
          </div>

          <FlowConnector label="Payment confirmed" />
          <SectionIntro eyebrow="Phase IV · Apothecary operations" title="Making begins only after a confirmed request." copy="A paid request moves through preparation or approved stock allocation, verification, labelling, packing and dispatch. The path depends on the product’s regulatory category." />
          <FlowPhase steps={makingSteps} columns="five" />

          <div className="mt-7 border border-[#8b432d]/25 bg-[#fff4df] p-5 sm:p-6">
            <p className="flex items-start gap-3 text-sm leading-6 text-[#625f55]"><ShieldAlert className="mt-0.5 size-5 shrink-0 text-[#8b432d]" /> “Personalised” may mean selecting the right approved product, combination, format, timing and quantity. Custom manufacture or compounding must occur only where the product category, licence, facility and approved procedure permit it.</p>
          </div>

          <FlowConnector label="Package delivered" />
          <SectionIntro eyebrow="Phase V · Continued care" title="The journey does not end at dispatch." copy="Delivery support, clear use guidance and a planned follow-up help the customer use the ritual correctly and know when to pause or seek help." />
          <FlowPhase steps={careSteps} />
        </div>
      </section>

      <section className="bg-[#e7d8bd] px-5 py-20 sm:px-8 lg:px-14 lg:py-24">
        <div className="mx-auto grid max-w-[1180px] gap-8 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <p className="eyebrow text-[#8b432d]">Control points</p>
            <h2 className="font-display mt-4 text-5xl leading-[.94] tracking-[-.04em] text-[#20352a]">Five things must never be skipped.</h2>
          </div>
          <div className="divide-y divide-[#6b4b2e]/20 border-y border-[#6b4b2e]/20">
            {["Safety review before recommendation", "Customer acceptance before payment link", "Payment confirmation before making", "Quality release before dispatch", "Clear pause and escalation guidance after delivery"].map((item, index) => (
              <p key={item} className="grid grid-cols-[2rem_1fr] gap-4 py-4 text-[#555d52]"><span className="font-display text-[#8b432d]">0{index + 1}</span>{item}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#8b432d] px-5 py-16 text-[#fffaf0] sm:px-8 lg:px-14 lg:py-20">
        <div className="mx-auto grid max-w-[1180px] gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="eyebrow text-[#e3bd7d]">Explore the complete system</p>
            <h2 className="font-display mt-4 text-5xl leading-[.94] tracking-[-.04em] sm:text-6xl">See what guides every recommendation and preparation.</h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Button asChild size="lg" className="h-14 rounded-sm bg-[#f0d49f] px-7 text-[#251a12] hover:bg-[#f7e1b8]">
              <Link href="/standards">Read our standard <ArrowRight /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-14 rounded-sm border-[#f0d49f]/40 bg-transparent px-7 text-[#fffaf0] hover:bg-[#fffaf0]/8 hover:text-[#fffaf0]">
              <Link href="/apothecary">Explore the apothecary</Link>
            </Button>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

function SectionIntro({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return (
    <div className="grid gap-5 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
      <div>
        <p className="eyebrow text-[#8b432d]">{eyebrow}</p>
        <h2 className="font-display mt-4 text-4xl leading-[.96] tracking-[-.04em] text-[#20352a] sm:text-5xl">{title}</h2>
      </div>
      <p className="max-w-2xl text-lg leading-8 text-[#66645a] lg:justify-self-end">{copy}</p>
    </div>
  );
}

function FlowPhase({ steps, columns = "four" }: { steps: FlowStep[]; columns?: "four" | "five" }) {
  return (
    <div className={`mt-8 grid border-l border-t border-[#6b4b2e]/20 sm:grid-cols-2 ${columns === "five" ? "xl:grid-cols-5" : "lg:grid-cols-4"}`}>
      {steps.map((step, index) => {
        const Icon = step.icon;
        return (
          <article key={step.code} className="relative min-h-64 border-b border-r border-[#6b4b2e]/20 bg-[#fbf5e7]/72 p-6">
            <div className="flex items-center justify-between">
              <span className="font-display text-xl text-[#8b432d]">{step.code}</span>
              <Icon className="size-5 text-[#31513e]" />
            </div>
            <h3 className="font-display mt-8 text-3xl leading-[1.02] tracking-[-.025em] text-[#20352a]">{step.title}</h3>
            <p className="mt-3 leading-7 text-[#69675d]">{step.copy}</p>
            {index < steps.length - 1 && <ArrowRight className={`absolute -right-3 top-7 z-10 hidden size-6 bg-[#f2e8d2] p-1 text-[#8b432d] ${columns === "five" ? "xl:block" : "lg:block"}`} />}
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

function BranchCard({ tone, title, copy }: { tone: "stop" | "hold" | "continue" | "neutral"; title: string; copy: string }) {
  const styles = {
    stop: "border-[#b83f37]/35 bg-[#fff1ec]",
    hold: "border-[#b78035]/35 bg-[#fff4df]",
    continue: "border-[#31513e]/30 bg-[#e8eee4]",
    neutral: "border-[#6b4b2e]/20 bg-[#fbf5e7]",
  };

  return (
    <article className={`border p-5 ${styles[tone]}`}>
      <div className="flex items-start gap-3">
        <span className={`mt-1 size-2.5 shrink-0 rounded-full ${tone === "stop" ? "bg-[#b83f37]" : tone === "hold" ? "bg-[#b78035]" : tone === "continue" ? "bg-[#31513e]" : "bg-[#847766]"}`} />
        <div>
          <h3 className="font-display text-2xl text-[#20352a]">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-[#69675d]">{copy}</p>
        </div>
      </div>
    </article>
  );
}

function RecommendationPreview() {
  return (
    <section className="folio-frame bg-[#ead9bb] p-6 sm:p-9">
      <div className="relative z-10 grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <p className="eyebrow text-[#8b432d]">WhatsApp recommendation format</p>
          <h2 className="font-display mt-4 text-4xl leading-[.98] tracking-[-.035em] text-[#20352a] sm:text-5xl">A suggestion should answer every practical question.</h2>
          <p className="mt-5 leading-7 text-[#66645a]">This is the structure—not an automatic recommendation. The actual items appear only after Vaidya review.</p>
        </div>
        <div className="border border-[#6b4b2e]/22 bg-[#fffaf0] p-5 sm:p-6">
          <div className="flex items-center justify-between border-b border-[#6b4b2e]/18 pb-4">
            <div>
              <p className="eyebrow text-[#8b432d]">Your reviewed plan</p>
              <p className="font-display mt-1 text-2xl text-[#20352a]">Recommendation 01</p>
            </div>
            <MessageCircle className="size-6 text-[#31513e]" />
          </div>
          <div className="divide-y divide-[#6b4b2e]/15">
            {[["Selected item", "Named after review"], ["Why it fits", "Linked to your stated concern and context"], ["How to use", "Format · timing · directions · duration"], ["Safety", "Relevant cautions and pause rules"], ["Quantity", "Amount required for the review period"], ["Price", "Item amount and complete total"]].map(([label, value]) => (
              <div key={label} className="grid grid-cols-[7rem_1fr] gap-3 py-3 text-sm">
                <span className="font-semibold text-[#294738]">{label}</span>
                <span className="text-[#6c685e]">{value}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 grid gap-2 sm:grid-cols-3">
            <span className="bg-[#263f32] px-3 py-2 text-center text-sm font-semibold text-[#fffaf0]">Accept</span>
            <span className="border border-[#6b4b2e]/25 px-3 py-2 text-center text-sm font-semibold text-[#294738]">Ask a question</span>
            <span className="border border-[#6b4b2e]/25 px-3 py-2 text-center text-sm font-semibold text-[#294738]">Not now</span>
          </div>
        </div>
      </div>
    </section>
  );
}
