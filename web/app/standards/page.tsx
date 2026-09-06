import type { Metadata } from "next";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BadgeCheck,
  BookOpenCheck,
  Check,
  ClipboardCheck,
  Eye,
  HeartHandshake,
  Leaf,
  LockKeyhole,
  PackageCheck,
  Scale,
  ShieldAlert,
  Stamp,
} from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Our Apothecary Standard",
  description: "The safety, review, sourcing, preparation, quality, payment, traceability and follow-up standards behind ANJOORA.",
};

type Standard = {
  number: string;
  icon: LucideIcon;
  title: string;
  copy: string;
};

const standards: Standard[] = [
  { number: "01", icon: HeartHandshake, title: "Person before product", copy: "The process begins with the customer’s priorities, daily life and preferences—not with a product catalogue." },
  { number: "02", icon: ShieldAlert, title: "Safety before recommendation", copy: "Age, pregnancy, medicines, allergies and urgent symptoms are considered before an item is suggested." },
  { number: "03", icon: BadgeCheck, title: "Qualified human review", copy: "The final recommendation is made by an appropriately qualified reviewer working within their role and scope." },
  { number: "04", icon: Scale, title: "Personalisation with a reason", copy: "Every selected item, format, timing and quantity must connect to information in the reviewed folio." },
  { number: "05", icon: Leaf, title: "Approved inputs and products", copy: "Ingredients, suppliers and finished products must meet the applicable identity, quality and sourcing requirements." },
  { number: "06", icon: ClipboardCheck, title: "Controlled preparation", copy: "Making or compounding occurs only when legally permitted, in an authorised facility and under an approved procedure." },
  { number: "07", icon: PackageCheck, title: "Quality before release", copy: "The product, batch or preparation record, quantity, condition, label and required checks are verified before dispatch." },
  { number: "08", icon: Eye, title: "Transparent recommendation", copy: "The customer sees the purpose, directions, duration, cautions, quantity and complete amount before accepting." },
  { number: "09", icon: Stamp, title: "Consent before payment", copy: "A payment link is sent only after the recommendation has been reviewed and accepted on WhatsApp." },
  { number: "10", icon: LockKeyhole, title: "Privacy and traceability", copy: "Only necessary customer information is collected, while the review, payment, fulfilment and follow-up retain an accountable record." },
];

const releaseGates = [
  {
    stage: "Before recommendation",
    owner: "Vaidya / qualified reviewer",
    checks: ["Folio is complete enough", "Safety context has been reviewed", "Recommendation is within scope", "Each item has a documented reason"],
    outcome: "Recommendation may be shared—or held for clarification or referral.",
  },
  {
    stage: "Before payment",
    owner: "Customer-care team",
    checks: ["Customer received the complete product list", "Directions and cautions were explained", "Quantity and total amount are visible", "Customer accepted the current version"],
    outcome: "Secure payment link may be issued—or the plan returns for revision.",
  },
  {
    stage: "Before making",
    owner: "Authorised fulfilment team",
    checks: ["Payment is confirmed", "Approved recommendation matches the request", "Category and facility permit the process", "Required inputs or batch are available"],
    outcome: "Preparation or approved stock allocation may begin.",
  },
  {
    stage: "Before dispatch",
    owner: "Quality / release role",
    checks: ["Correct item and quantity", "Batch or preparation record complete", "Label and directions verified", "Pack condition and delivery details checked"],
    outcome: "Package may be released—or returned for correction.",
  },
];

export default function StandardsPage() {
  return (
    <main>
      <SiteHeader />

      <section className="apothecary-paper px-5 py-18 sm:px-8 lg:px-14 lg:py-26">
        <div className="mx-auto grid max-w-[1260px] gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
          <div>
            <p className="eyebrow text-[#8b432d]">The standard behind the apothecary</p>
            <h1 className="font-display mt-6 text-[clamp(3.7rem,7vw,7.3rem)] leading-[.86] tracking-[-.052em] text-[#20352a]">Careful at every handover.</h1>
          </div>
          <div className="border-l border-[#8b432d]/28 pl-6 sm:pl-8">
            <p className="text-xl leading-9 text-[#62645a]">The ANJOORA standard follows the complete journey—from the first answer and Vaidya review to recommendation, payment, preparation, release and follow-up.</p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-[#3c5749]">
              <span className="flex items-center gap-2"><Check className="size-4 text-[#8b432d]" /> Human-reviewed</span>
              <span className="flex items-center gap-2"><Check className="size-4 text-[#8b432d]" /> Consent-led</span>
              <span className="flex items-center gap-2"><Check className="size-4 text-[#8b432d]" /> Traceable</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#e7d8bd] px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-[1260px]">
          <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <div>
              <p className="eyebrow text-[#8b432d]">Ten operating principles</p>
              <h2 className="font-display mt-4 text-5xl leading-[.94] tracking-[-.043em] text-[#20352a] sm:text-6xl">A beautiful ritual needs a disciplined system.</h2>
            </div>
            <p className="max-w-xl text-lg leading-8 text-[#62645a] lg:justify-self-end">Personalisation is meaningful only when the decision, the product and every handover can be understood and checked.</p>
          </div>

          <div className="mt-10 grid border-l border-t border-[#6b4b2e]/20 md:grid-cols-2">
            {standards.map(({ number, icon: Icon, title, copy }, index) => (
              <article key={number} className={`grid gap-6 border-b border-r border-[#6b4b2e]/20 p-6 sm:grid-cols-[4rem_1fr] sm:p-8 ${index === 0 ? "apothecary-wood text-[#fffaf0]" : "bg-[#fbf5e7]/72"}`}>
                <div>
                  <span className={`font-display text-xl ${index === 0 ? "text-[#d4a55f]" : "text-[#8b432d]"}`}>{number}</span>
                  <Icon className={`mt-5 size-6 ${index === 0 ? "text-[#d4a55f]" : "text-[#31513e]"}`} />
                </div>
                <div>
                  <h3 className={`font-display text-3xl tracking-[-.025em] ${index === 0 ? "text-[#fffaf0]" : "text-[#20352a]"}`}>{title}</h3>
                  <p className={`mt-3 leading-7 ${index === 0 ? "text-[#fffaf0]/62" : "text-[#69675d]"}`}>{copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="apothecary-wood px-5 py-20 text-[#fffaf0] sm:px-8 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-[1260px]">
          <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <div>
              <p className="eyebrow text-[#d4a55f]">Four release gates</p>
              <h2 className="font-display mt-4 text-5xl leading-[.94] tracking-[-.043em] sm:text-6xl">A named person owns every decision.</h2>
            </div>
            <p className="max-w-xl text-lg leading-8 text-[#fffaf0]/62 lg:justify-self-end">A step does not move forward simply because the previous screen was completed. Its required checks and responsible role must also be clear.</p>
          </div>

          <div className="mt-10 space-y-3">
            {releaseGates.map((gate, index) => (
              <article key={gate.stage} className="grid gap-6 border border-[#d4a55f]/24 bg-[#fffaf0]/[.035] p-6 sm:p-8 lg:grid-cols-[12rem_12rem_1fr]">
                <div>
                  <span className="font-display text-xl text-[#d4a55f]">Gate 0{index + 1}</span>
                  <h3 className="font-display mt-3 text-3xl">{gate.stage}</h3>
                </div>
                <div className="border-t border-[#d4a55f]/18 pt-4 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
                  <p className="eyebrow text-[#d4a55f]">Decision owner</p>
                  <p className="mt-3 text-[#fffaf0]/70">{gate.owner}</p>
                </div>
                <div className="border-t border-[#d4a55f]/18 pt-4 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
                  <div className="grid gap-2 sm:grid-cols-2">
                    {gate.checks.map((item) => <p key={item} className="flex items-start gap-2 text-sm leading-6 text-[#fffaf0]/62"><Check className="mt-1 size-4 shrink-0 text-[#d4a55f]" />{item}</p>)}
                  </div>
                  <p className="mt-5 border-t border-[#d4a55f]/18 pt-4 text-sm font-semibold text-[#e3bd7d]">{gate.outcome}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8f0df] px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-[1260px]">
          <div className="grid gap-10 lg:grid-cols-[.78fr_1.22fr]">
            <div>
              <p className="eyebrow text-[#8b432d]">Product and preparation boundary</p>
              <h2 className="font-display mt-4 text-5xl leading-[.94] tracking-[-.043em] text-[#20352a]">Personalised does not mean uncontrolled.</h2>
              <p className="mt-6 text-lg leading-8 text-[#66645a]">The form of personalisation depends on what the product legally is and how it may be supplied.</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <BoundaryCard icon={BadgeCheck} title="Approved finished product" copy="The Vaidya personalises selection, combination, timing, quantity and ritual guidance. The approved formula itself is not casually altered." />
              <BoundaryCard icon={ClipboardCheck} title="Permitted custom preparation" copy="Any custom preparation must have a lawful category, authorised facility, approved formula or procedure, documented inputs and traceable record." />
              <BoundaryCard icon={BookOpenCheck} title="Wellness guidance" copy="Diet, sleep, breathwork, movement and lifestyle rituals are clearly separated from medicinal claims and medical treatment." />
              <BoundaryCard icon={ShieldAlert} title="Medical concern" copy="Urgent symptoms, diagnosis, treatment changes and prescription decisions remain outside the consumer wellness flow and require appropriate medical care." />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#e7d8bd] px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
        <div className="mx-auto grid max-w-[1260px] gap-10 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <p className="eyebrow text-[#8b432d]">Clear boundaries</p>
            <h2 className="font-display mt-4 text-5xl leading-[.94] tracking-[-.043em] text-[#20352a]">What ANJOORA is—and is not.</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <article className="folio-frame bg-[#fbf5e7] p-7">
              <h3 className="font-display relative z-10 text-3xl text-[#20352a]">ANJOORA is</h3>
              <div className="relative z-10 mt-5 space-y-4">
                {["Everyday wellness support", "A human-reviewed recommendation", "A safety-conscious apothecary journey", "Transparent consent and payment", "Traceable preparation and follow-up"].map((item) => <p key={item} className="flex gap-3 text-[#62645a]"><Check className="mt-1 size-4 shrink-0 text-[#8b432d]" />{item}</p>)}
              </div>
            </article>
            <article className="apothecary-wood border border-[#d4a55f]/25 p-7 text-[#fffaf0]">
              <h3 className="font-display text-3xl">ANJOORA is not</h3>
              <div className="mt-5 space-y-4 text-[#fffaf0]/66">
                {["A medical diagnosis", "Emergency or acute care", "A replacement for prescribed treatment", "Unlicensed custom medicine making", "A promise of cure or guaranteed result"].map((item) => <p key={item} className="flex gap-3"><span className="mt-2 block size-2 shrink-0 rounded-full bg-[#d4a55f]" />{item}</p>)}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-[#8b432d] px-5 py-16 text-[#fffaf0] sm:px-8 lg:px-14 lg:py-20">
        <div className="mx-auto grid max-w-[1180px] gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="eyebrow text-[#e3bd7d]">See the standard in motion</p>
            <h2 className="font-display mt-4 text-5xl leading-[.94] tracking-[-.04em] sm:text-6xl">Follow every gate from folio to follow-up.</h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Button asChild size="lg" className="h-14 rounded-sm bg-[#f0d49f] px-7 text-[#251a12] hover:bg-[#f7e1b8]">
              <Link href="/how-it-works">See the complete journey <ArrowRight /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-14 rounded-sm border-[#f0d49f]/40 bg-transparent px-7 text-[#fffaf0] hover:bg-[#fffaf0]/8 hover:text-[#fffaf0]">
              <Link href="/assessment">Open my consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

function BoundaryCard({ icon: Icon, title, copy }: { icon: LucideIcon; title: string; copy: string }) {
  return (
    <article className="folio-frame bg-[#fbf5e7] p-6">
      <Icon className="relative z-10 size-6 text-[#8b432d]" />
      <h3 className="font-display relative z-10 mt-7 text-3xl text-[#20352a]">{title}</h3>
      <p className="relative z-10 mt-3 leading-7 text-[#69675d]">{copy}</p>
    </article>
  );
}
