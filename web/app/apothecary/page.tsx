import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Beaker,
  Check,
  HeartHandshake,
  Leaf,
  ShieldAlert,
  ShieldCheck,
  Stethoscope,
  UserRoundCheck,
} from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "The Apothecary",
  description:
    "Understand how ANJOORA connects the Apothecary, the modern Vaidya and contemporary medical care around one person.",
};

const threeRoles = [
  {
    icon: Stethoscope,
    label: "Modern medicine",
    title: "Diagnose. Treat. Monitor.",
    copy:
      "Modern medicine brings diagnosis, investigations, pharmacology, procedures, acute care and disease-specific monitoring.",
    question: "What must be diagnosed, treated or not missed?",
  },
  {
    icon: UserRoundCheck,
    label: "Modern Vaidya",
    title: "Interpret the person in context.",
    copy:
      "The modern Vaidya applies Ayurvedic clinical reasoning while remaining aware of current diagnoses, medicines, investigations and specialist care.",
    question: "What traditional contribution is appropriate for this person?",
  },
  {
    icon: Beaker,
    label: "Apothecary",
    title: "Prepare with identity and purpose.",
    copy:
      "The Apothecary translates a justified decision into an identifiable preparation with attention to formulation, quality, traceability and guidance.",
    question: "How can the selected preparation be delivered responsibly?",
  },
];

const modernVaidyaPrinciples = [
  {
    title: "Classical reasoning",
    copy:
      "Ayurvedic assessment may consider constitution, digestion, diet, sleep, daily rhythm, season, behaviour and the wider presentation of the person.",
  },
  {
    title: "Modern clinical context",
    copy:
      "Existing diagnoses, medicines, investigations, allergies, procedures and specialist advice remain visible to the decision.",
  },
  {
    title: "Evidence awareness",
    copy:
      "Traditional use, proposed mechanisms, emerging research and established clinical evidence are not presented as though they mean the same thing.",
  },
  {
    title: "Safety and referral",
    copy:
      "Interactions, contraindications, duplication and situations requiring medical review are considered before another intervention is added.",
  },
];

const gaps = [
  {
    title: "Fragmented information",
    copy:
      "The physician may know the diagnosis. The Vaidya may know the Ayurvedic assessment. The Apothecary may know the preparation. The patient is often left carrying information between them.",
  },
  {
    title: "Unclear responsibility",
    copy:
      "When several systems are involved, it may be unclear who is responsible for medicines, investigations, traditional preparations, monitoring and follow-up.",
  },
  {
    title: "Therapy accumulation",
    copy:
      "Adding more products or therapies can look like integration even when their purpose, compatibility and review criteria have not been made clear.",
  },
  {
    title: "Lost context",
    copy:
      "A symptom can be separated from the person's diagnoses, medicines, routines, goals and circumstances, even though those details can change the safest next step.",
  },
];

const bridgeSteps = [
  {
    number: "01",
    title: "Bring the story together",
    copy:
      "Relevant symptoms, diagnoses, medicines, reports, routines, priorities and current treatment are organised into one understandable context.",
  },
  {
    number: "02",
    title: "Let the right discipline lead",
    copy:
      "Modern medical care leads where diagnosis, investigation, acute treatment or disease monitoring is required. Ayurvedic reasoning contributes where it is appropriate.",
  },
  {
    number: "03",
    title: "Check before adding",
    copy:
      "Potential duplication, medicine interactions, contraindications, red flags and the risk of delaying necessary care are considered before another preparation enters the plan.",
  },
  {
    number: "04",
    title: "Prepare with purpose",
    copy:
      "If an Apothecary preparation has a justified role, its identity, format, directions, cautions, quality and traceability should be clear.",
  },
  {
    number: "05",
    title: "Review what happens next",
    copy:
      "The plan should state what is being reviewed and when to continue, modify, pause, stop or return to medical care.",
  },
];

const apothecaryStandards = [
  ["Identity", "What exactly is the ingredient, formulation or finished product?"],
  ["Purpose", "Why is this preparation being considered for this person?"],
  ["Quality", "What preparation, storage and quality controls apply?"],
  ["Traceability", "Can the source or batch be identified where applicable?"],
  ["Compatibility", "What medicines, therapies or special situations may change its suitability?"],
  ["Guidance", "How should it be used, reviewed and stopped if necessary?"],
];

export default function ApothecaryPage() {
  return (
    <main className="overflow-x-clip">
      <SiteHeader />

      {/* HERO */}
      <section className="apothecary-wood px-5 py-16 text-[#fffaf0] sm:px-8 lg:px-14 lg:py-24">
        <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[1.02fr_.98fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-3 border-y border-[#d4a55f]/35 py-2 text-[#d4a55f]">
              <Leaf className="size-4" />
              <span className="eyebrow">The ANJOORA Apothecary</span>
            </div>

            <h1 className="font-display mt-7 max-w-4xl text-[clamp(3.5rem,6.6vw,6.8rem)] leading-[.88] tracking-[-.05em]">
              Old knowledge.
              <br />
              Modern responsibility.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#fffaf0]/70 sm:text-xl">
              ANJOORA reimagines the Apothecary for a patient who may already
              have diagnoses, prescriptions, investigations and specialist
              care—while still wanting to explore Ayurveda responsibly.
            </p>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#fffaf0]/62">
              The aim is not to make modern medicine, Ayurveda and the
              Apothecary identical. It is to help each contribute where it
              belongs, around one complete patient story.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="h-14 rounded-sm bg-[#c3914c] px-7 text-base text-[#1d1711] hover:bg-[#d2a45f]"
              >
                <Link href="#anjoora-bridge">
                  See how ANJOORA connects them <ArrowRight />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-14 rounded-sm border-[#d4a55f]/40 bg-transparent px-7 text-[#fffaf0] hover:bg-[#fffaf0]/8 hover:text-[#fffaf0]"
              >
                <Link href="/how-it-works">How ANJOORA works</Link>
              </Button>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden border border-[#d4a55f]/25 bg-[#173f31]">
            <Image
              src="/about/01-hero-vaidya-and-products.webp"
              alt="A Vaidya with traditional preparations in a contemporary ANJOORA setting"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 48vw"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0b291f]/90 via-[#0b291f]/45 to-transparent p-6 pt-20 sm:p-8 sm:pt-24">
              <p className="eyebrow text-[#d4a55f]">The ANJOORA question</p>
              <p className="font-display mt-2 max-w-xl text-3xl leading-tight">
                What belongs in this person&apos;s care—and how should it coexist
                with everything already happening?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS AN APOTHECARY */}
      <section className="apothecary-paper px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
        <div className="mx-auto grid max-w-[1220px] gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <div>
            <p className="eyebrow text-[#8b432d]">First, the meaning</p>
            <h2 className="font-display mt-4 text-5xl leading-[.94] tracking-[-.043em] text-[#20352a] sm:text-6xl">
              What is an Apothecary?
            </h2>

            <div className="mt-6 space-y-4 text-lg leading-8 text-[#66645a]">
              <p>
                Historically, an apothecary worked close to the meeting point
                between the healer, medicinal substances and the person
                receiving care.
              </p>

              <p>
                Its practical work included materia medica, preservation,
                preparation and dispensing. Modern healthcare later separated
                many of these functions into pharmacy, manufacturing and
                clinical professions.
              </p>

              <p>
                ANJOORA uses <strong>Apothecary</strong> as a contemporary
                concept: the governed preparation layer that connects an
                appropriate therapeutic decision with formulation, quality,
                traceability and understandable guidance.
              </p>
            </div>

            <div className="mt-7 flex items-start gap-3 border-l-2 border-[#bd8a45] bg-[#ead9bb]/60 px-5 py-4 text-sm leading-6 text-[#555d52]">
              <ShieldCheck className="mt-0.5 size-5 shrink-0 text-[#31513e]" />
              <p>
                The Apothecary is not the diagnosing clinician. Its role begins
                after a preparation has a justified reason to be considered.
              </p>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden border border-[#6b4b2e]/18 bg-[#e7d8bd]">
            <Image
              src="/about/03-apothecary-preparation.webp"
              alt="Traditional Apothecary preparation using botanical materia medica"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 52vw"
            />
          </div>
        </div>
      </section>

      {/* FROM TRADITIONAL TO MODERN VAIDYA */}
      <section className="bg-[#e7d8bd] px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-[1260px]">
          <div className="grid gap-8 lg:grid-cols-[.78fr_1.22fr] lg:items-end">
            <div>
              <p className="eyebrow text-[#8b432d]">
                From traditional Vaidya to modern Vaidya
              </p>
              <h2 className="font-display mt-4 text-5xl leading-[.94] tracking-[-.043em] text-[#20352a] sm:text-6xl">
                The patient changed. The responsibility expanded.
              </h2>
            </div>

            <p className="max-w-xl text-lg leading-8 text-[#62645a] lg:justify-self-end">
              Today&apos;s Vaidya may see a patient who already has laboratory
              reports, imaging, several diagnoses, prescription medicines and
              specialist follow-up. Ayurvedic reasoning has to operate within
              that real-world context.
            </p>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            <article className="overflow-hidden border border-[#6b4b2e]/18 bg-[#f4e8d0]">
              <div className="relative aspect-[16/10]">
                <Image
                  src="/about/02-ancient-vaidya-consultation.webp"
                  alt="Traditional Vaidya consultation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <p className="eyebrow text-[#8b432d]">Traditional foundation</p>
                <h3 className="font-display mt-3 text-3xl text-[#20352a]">
                  Deep observation of the person.
                </h3>
                <p className="mt-3 leading-7 text-[#69675d]">
                  Classical Ayurvedic reasoning considers the person, diet,
                  digestion, daily rhythm, season, behaviour and other patterns
                  within its own clinical framework.
                </p>
              </div>
            </article>

            <article className="overflow-hidden border border-[#6b4b2e]/18 bg-[#f4e8d0]">
              <div className="relative aspect-[16/10]">
                <Image
                  src="/anjoora-modern-day-vaidyas.png"
                  alt="Modern-day Vaidyas working in a contemporary healthcare setting"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <p className="eyebrow text-[#8b432d]">Contemporary responsibility</p>
                <h3 className="font-display mt-3 text-3xl text-[#20352a]">
                  Traditional reasoning with modern context visible.
                </h3>
                <p className="mt-3 leading-7 text-[#69675d]">
                  The modern Vaidya should know what the patient is already
                  taking, what has been diagnosed, what is being investigated
                  and when biomedical assessment needs to lead.
                </p>
              </div>
            </article>
          </div>

          <div className="mt-4 grid border-l border-t border-[#6b4b2e]/18 sm:grid-cols-2 lg:grid-cols-4">
            {modernVaidyaPrinciples.map((item, index) => (
              <article
                key={item.title}
                className="min-h-52 border-b border-r border-[#6b4b2e]/18 bg-[#f7ecd7] p-6"
              >
                <span className="font-display text-lg text-[#8b432d]">
                  0{index + 1}
                </span>
                <h3 className="font-display mt-5 text-2xl text-[#20352a]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#69675d]">
                  {item.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* THREE ROLES */}
      <section className="bg-[#f8f0df] px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-[1260px]">
          <div className="text-center">
            <p className="eyebrow text-[#8b432d]">Three roles. Three strengths.</p>
            <h2 className="font-display mx-auto mt-4 max-w-4xl text-5xl leading-[.94] tracking-[-.043em] text-[#20352a] sm:text-6xl">
              They should connect without becoming the same thing.
            </h2>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {threeRoles.map(({ icon: Icon, label, title, copy, question }) => (
              <article
                key={label}
                className="border border-[#6b4b2e]/18 bg-[#fbf5e7] p-6 sm:p-7"
              >
                <div className="flex size-14 items-center justify-center rounded-full bg-[#e4eadf]">
                  <Icon className="size-6 text-[#31513e]" />
                </div>
                <p className="eyebrow mt-7 text-[#8b432d]">{label}</p>
                <h3 className="font-display mt-3 text-3xl leading-tight text-[#20352a]">
                  {title}
                </h3>
                <p className="mt-4 leading-7 text-[#69675d]">{copy}</p>

                <div className="mt-7 border-t border-[#6b4b2e]/16 pt-5">
                  <p className="text-sm font-semibold leading-6 text-[#31513e]">
                    {question}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* THE GAP */}
      <section className="apothecary-wood px-5 py-20 text-[#fffaf0] sm:px-8 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-[1260px]">
          <div className="grid gap-8 lg:grid-cols-[.75fr_1.25fr] lg:items-end">
            <div>
              <p className="eyebrow text-[#d4a55f]">The gap ANJOORA addresses</p>
              <h2 className="font-display mt-4 text-5xl leading-[.94] tracking-[-.043em] sm:text-6xl">
                The patient is often left to connect the systems alone.
              </h2>
            </div>

            <p className="max-w-xl text-lg leading-8 text-[#fffaf0]/65 lg:justify-self-end">
              The challenge is not simply choosing between “modern” and
              “traditional” care. It is deciding what belongs together, what
              should remain separate and who is responsible for the next step.
            </p>
          </div>

          <div className="mt-10 grid border-l border-t border-[#d4a55f]/22 sm:grid-cols-2 lg:grid-cols-4">
            {gaps.map((item, index) => (
              <article
                key={item.title}
                className="min-h-60 border-b border-r border-[#d4a55f]/22 bg-[#fffaf0]/[.025] p-6"
              >
                <span className="font-display text-[#d4a55f]">0{index + 1}</span>
                <h3 className="font-display mt-6 text-3xl">{item.title}</h3>
                <p className="mt-3 leading-7 text-[#fffaf0]/58">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ANJOORA BRIDGE */}
      <section
        id="anjoora-bridge"
        className="apothecary-paper px-5 py-20 sm:px-8 lg:px-14 lg:py-28"
      >
        <div className="mx-auto max-w-[1260px]">
          <div className="text-center">
            <p className="eyebrow text-[#8b432d]">The ANJOORA bridge</p>
            <h2 className="font-display mx-auto mt-4 max-w-4xl text-5xl leading-[.94] tracking-[-.043em] text-[#20352a] sm:text-6xl">
              One patient. Different disciplines. One coordinated direction.
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#66645a]">
              ANJOORA does not ask Ayurveda to become modern medicine or modern
              medicine to become Ayurveda. It creates a coordination layer in
              which the relevant information, responsibilities and boundaries
              remain visible.
            </p>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-[1fr_auto_1.1fr_auto_1fr] lg:items-stretch">
            <BridgeRole
              icon={Stethoscope}
              label="Modern medicine"
              title="Protect what must not be missed"
              items={[
                "Diagnosis",
                "Investigations",
                "Necessary treatment",
                "Acute care",
                "Disease monitoring",
              ]}
            />

            <div className="hidden items-center lg:flex">
              <ArrowRight className="size-6 text-[#8b432d]" />
            </div>

            <article className="border border-[#31513e]/25 bg-[#263f32] p-6 text-[#fffaf0] sm:p-8">
              <HeartHandshake className="size-7 text-[#d4a55f]" />
              <p className="eyebrow mt-7 text-[#d4a55f]">ANJOORA</p>
              <h3 className="font-display mt-3 text-4xl leading-tight">
                Coordinate around the person
              </h3>
              <p className="mt-5 leading-7 text-[#fffaf0]/65">
                Bring the medical context, Ayurvedic reasoning, preparation
                decision and follow-up plan into one understandable story.
              </p>
              <div className="mt-6 border-t border-[#d4a55f]/22 pt-5 text-sm leading-6 text-[#fffaf0]/70">
                The goal is not maximum integration. It is the{" "}
                <strong className="text-[#fffaf0]">minimum necessary, clearly justified integration</strong>.
              </div>
            </article>

            <div className="hidden items-center lg:flex">
              <ArrowRight className="size-6 text-[#8b432d]" />
            </div>

            <BridgeRole
              icon={UserRoundCheck}
              label="Vaidya + Apothecary"
              title="Add only what has a reason to be there"
              items={[
                "Ayurvedic reasoning",
                "Appropriate selection",
                "Preparation",
                "Clear guidance",
                "Review",
              ]}
            />
          </div>

          <div className="mt-10 grid border-l border-t border-[#6b4b2e]/18 md:grid-cols-5">
            {bridgeSteps.map((step) => (
              <article
                key={step.number}
                className="min-h-60 border-b border-r border-[#6b4b2e]/18 bg-[#fbf5e7] p-5"
              >
                <span className="font-display text-lg text-[#8b432d]">
                  {step.number}
                </span>
                <h3 className="font-display mt-5 text-2xl leading-tight text-[#20352a]">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#69675d]">
                  {step.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* APOTHECARY GOVERNANCE */}
      <section className="bg-[#e7d8bd] px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
        <div className="mx-auto grid max-w-[1260px] gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
          <div>
            <p className="eyebrow text-[#8b432d]">The modern Apothecary</p>
            <h2 className="font-display mt-4 text-5xl leading-[.94] tracking-[-.043em] text-[#20352a] sm:text-6xl">
              Tradition deserves modern governance.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#62645a]">
              Respecting traditional knowledge does not mean lowering the
              standard for identity, quality, safety, traceability or honest
              communication.
            </p>

            <div className="relative mt-8 aspect-[4/3] overflow-hidden border border-[#6b4b2e]/18">
              <Image
                src="/about/06-botanical-apothecary-detail.webp"
                alt="Botanical ingredients and Apothecary preparation"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>

          <div className="grid border-l border-t border-[#6b4b2e]/18 sm:grid-cols-2">
            {apothecaryStandards.map(([title, copy], index) => (
              <article
                key={title}
                className="min-h-48 border-b border-r border-[#6b4b2e]/18 bg-[#f4e8d0]/72 p-6"
              >
                <span className="font-display text-[#8b432d]">0{index + 1}</span>
                <h3 className="font-display mt-5 text-3xl text-[#20352a]">
                  {title}
                </h3>
                <p className="mt-3 leading-7 text-[#69675d]">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BOUNDARY */}
      <section className="bg-[#f8f0df] px-5 py-20 sm:px-8 lg:px-14 lg:py-24">
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[.72fr_1.28fr]">
          <div>
            <p className="eyebrow text-[#8b432d]">A necessary boundary</p>
            <h2 className="font-display mt-4 text-5xl leading-[.94] tracking-[-.043em] text-[#20352a]">
              Sometimes modern medicine must lead.
            </h2>
          </div>

          <div>
            <div className="flex items-start gap-4 border border-[#b83f37]/25 bg-[#fff1ec] p-6">
              <ShieldAlert className="mt-1 size-6 shrink-0 text-[#a94d42]" />
              <div>
                <h3 className="font-display text-3xl text-[#20352a]">
                  The Apothecary should never delay necessary medical assessment.
                </h3>
                <p className="mt-4 leading-7 text-[#69675d]">
                  Severe breathlessness, chest pain, fainting, stroke-like
                  symptoms, significant bleeding, severe infection, acute
                  deterioration and other concerning presentations require the
                  appropriate medical pathway first.
                </p>
              </div>
            </div>

            <p className="mt-6 text-lg leading-8 text-[#62645a]">
              Responsible integration is not defined by using several systems
              at the same time. It is defined by knowing which system needs to
              lead now, what can safely coexist and what should wait.
            </p>
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="apothecary-paper px-5 py-20 text-center sm:px-8 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-[980px]">
          <p className="eyebrow text-[#8b432d]">The ANJOORA principle</p>
          <h2 className="font-display mt-4 text-5xl leading-[.94] tracking-[-.043em] text-[#20352a] sm:text-6xl">
            Patient before modality.
          </h2>
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-[#66645a]">
            ANJOORA is not designed to prove that one system is superior to
            another. It is designed to make the relevant contributions of each
            system safer, clearer and more coordinated around the person.
          </p>

          <div className="mx-auto mt-8 max-w-3xl border-y border-[#6b4b2e]/18 py-6">
            <p className="font-display text-3xl leading-tight text-[#20352a]">
              The Vaidya decides what may belong in care.
              <br />
              The Apothecary makes that decision tangible.
              <br />
              Modern medicine protects what must not be missed.
              <br />
              <span className="text-[#8b432d]">
                ANJOORA helps them remain connected around the person.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#8b432d] px-5 py-16 text-[#fffaf0] sm:px-8 lg:px-14 lg:py-20">
        <div className="mx-auto grid max-w-[1180px] gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="eyebrow text-[#e3bd7d]">
              Already receiving modern treatment?
            </p>
            <h2 className="font-display mt-4 max-w-4xl text-5xl leading-[.94] tracking-[-.04em] sm:text-6xl">
              Bring the complete context before adding anything new.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#fffaf0]/68">
              Tell ANJOORA what you are already taking, what matters to you and
              what you want to explore. The next decision should begin with
              context—not with a product.
            </p>
          </div>

          <div className="flex flex-col gap-3">
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
              <Link href="/how-it-works">See the complete journey</Link>
            </Button>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

function BridgeRole({
  icon: Icon,
  label,
  title,
  items,
}: {
  icon: typeof Stethoscope;
  label: string;
  title: string;
  items: string[];
}) {
  return (
    <article className="border border-[#6b4b2e]/18 bg-[#fbf5e7] p-6 sm:p-7">
      <Icon className="size-6 text-[#31513e]" />
      <p className="eyebrow mt-7 text-[#8b432d]">{label}</p>
      <h3 className="font-display mt-3 text-3xl leading-tight text-[#20352a]">
        {title}
      </h3>

      <div className="mt-6 divide-y divide-[#6b4b2e]/14 border-y border-[#6b4b2e]/14">
        {items.map((item) => (
          <p
            key={item}
            className="flex items-center gap-3 py-3 text-sm text-[#62655b]"
          >
            <Check className="size-4 shrink-0 text-[#8b432d]" />
            {item}
          </p>
        ))}
      </div>
    </article>
  );
}
