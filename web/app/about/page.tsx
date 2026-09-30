import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  HeartHandshake,
  Leaf,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  UserRoundCheck,
} from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "About ANJOORA | Personal, Coordinated, Whole-Person Care",
  description:
    "Learn why ANJOORA was created, what it believes, and how it connects modern healthcare, traditional wisdom, the modern Vaidya and the Apothecary around one person.",
};

const story = [
  {
    number: "01",
    eyebrow: "THE PERSON",
    title: "Care should begin with the individual.",
    body:
      "A diagnosis matters, but so do the medicines already being taken, daily routines, food, sleep, stress, priorities, preferences and the person’s own experience of illness and wellbeing.",
    icon: UserRoundCheck,
  },
  {
    number: "02",
    eyebrow: "THE CONTEXT",
    title: "Different kinds of knowledge need context.",
    body:
      "Modern medicine, Ayurveda, nutrition, lifestyle support and carefully prepared wellness products can each contribute something different. Their value depends on using them for a clear reason and within appropriate boundaries.",
    icon: Stethoscope,
  },
  {
    number: "03",
    eyebrow: "THE COORDINATION",
    title: "The pieces should make sense together.",
    body:
      "ANJOORA is being built to organise the relevant story, protect necessary medical care, support qualified human review and help the person understand what should happen next.",
    icon: HeartHandshake,
  },
];

const beliefs = [
  {
    title: "Person before product",
    copy:
      "We do not want the starting question to be “What should we sell?” The starting question is “What is happening for this person, and what actually deserves attention?”",
  },
  {
    title: "Safety before novelty",
    copy:
      "New does not automatically mean better. Necessary medical assessment and treatment should never be displaced by an unnecessary wellness intervention.",
  },
  {
    title: "Context before recommendation",
    copy:
      "Symptoms, diagnoses, medicines, allergies, routines, goals and current treatment can all change what is appropriate.",
  },
  {
    title: "Selective integration",
    copy:
      "Integration is not the accumulation of modalities. It means choosing only the contribution that has a clear purpose for the person in front of us.",
  },
  {
    title: "Evidence with honesty",
    copy:
      "Established evidence, traditional use, emerging research and hypothesis should be described as different forms of knowledge—not blurred into one claim.",
  },
  {
    title: "Follow-through",
    copy:
      "A recommendation should not disappear after it is given. Responsibility, review and the next step should remain clear.",
  },
];

const model = [
  {
    number: "01",
    label: "Modern healthcare",
    title: "Protect what must not be missed.",
    body:
      "Diagnosis, investigations, medicines, specialist care, acute treatment and disease monitoring remain foundational when they are needed.",
  },
  {
    number: "02",
    label: "Modern Vaidya",
    title: "Bring traditional reasoning into contemporary context.",
    body:
      "Ayurvedic reasoning can consider the person’s broader patterns while remaining aware of current diagnoses, medicines, investigations and the need for referral when appropriate.",
  },
  {
    number: "03",
    label: "The Apothecary",
    title: "Turn a justified decision into a responsible preparation.",
    body:
      "When a preparation has a clear role, identity, formulation, quality, traceability, directions, cautions and review should travel with it.",
  },
  {
    number: "04",
    label: "ANJOORA",
    title: "Connect the decisions around one person.",
    body:
      "ANJOORA acts as the coordination layer: organise the relevant context, clarify what should lead, integrate selectively and make the next step understandable.",
  },
];

const whatWeAreNot = [
  "A symptom-to-product search engine.",
  "A replacement for a physician, hospital or necessary medical treatment.",
  "A system where AI automatically prescribes a remedy.",
  "A belief that traditional automatically means safe.",
  "A belief that more therapies mean better care.",
  "A requirement that modern medicine and Ayurveda explain health in the same way.",
];

export default function AboutPage() {
  return (
    <main className="overflow-x-hidden bg-[#f5eddc] text-[#24372b]">
      <SiteHeader />

      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative isolate overflow-hidden border-b border-[#b89a61]/25">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_18%,rgba(186,153,94,0.13),transparent_34%),linear-gradient(180deg,#f8f1e3_0%,#f4ead6_100%)]"
        />

        <div className="absolute right-0 top-0 -z-10 hidden h-56 w-56 opacity-20 md:block">
          <Image
            src="/about/07-mortar-botanical-line-art.webp"
            alt=""
            fill
            aria-hidden="true"
            className="object-contain object-top-right"
          />
        </div>

        <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:min-h-[680px] lg:grid-cols-[0.92fr_1.08fr] lg:px-12 lg:py-20 xl:px-16">
          <div className="max-w-[680px]">
            <p className="mb-5 text-xs font-semibold tracking-[0.28em] text-[#a27c39]">
              ABOUT ANJOORA
            </p>

            <h1 className="font-serif text-[clamp(2.85rem,6.2vw,6.35rem)] leading-[0.92] tracking-[-0.04em] text-[#173d2c]">
              Care should make sense around the person.
            </h1>

            <p className="mt-8 max-w-[630px] font-serif text-[clamp(1.3rem,2.1vw,2rem)] leading-[1.32] text-[#3a3a30]">
              Modern medicine. Traditional wisdom. Thoughtful preparation.
              One connected story.
            </p>

            <p className="mt-4 max-w-[650px] text-base leading-8 text-[#696358] sm:text-lg">
              ANJOORA is being built around a simple idea: before another
              treatment, product or wellness intervention is added, the relevant
              context should be understood and the next step should have a clear
              reason.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/assessment"
                className="inline-flex min-h-12 items-center justify-center gap-2 border border-[#173d2c] bg-[#173d2c] px-6 py-3 text-sm font-semibold tracking-wide text-[#fffaf0] transition hover:bg-[#214e38] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a27c39] focus-visible:ring-offset-2"
              >
                Create My ANJOORA Folio
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/how-it-works"
                className="inline-flex min-h-12 items-center justify-center border border-[#987d4d]/45 bg-[#fffaf0]/55 px-6 py-3 text-sm font-semibold tracking-wide text-[#294437] transition hover:bg-[#fffaf0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a27c39] focus-visible:ring-offset-2"
              >
                How ANJOORA Works
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[680px]">
            <div
              aria-hidden="true"
              className="absolute -left-4 -top-4 h-full w-full border border-[#a27c39]/40"
            />
            <div className="relative aspect-[4/3] overflow-hidden border border-[#7b6a48]/30 bg-[#d9c5a1] shadow-[0_24px_70px_rgba(56,45,25,0.16)] lg:aspect-[1.08/1]">
              <Image
                src="/about/01-hero-vaidya-and-products.webp"
                alt="ANJOORA whole-person care concept with Vaidya and carefully prepared wellness products"
                fill
                priority
                sizes="(max-width: 1024px) 92vw, 54vw"
                className="object-cover object-[center_62%]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#173d2c]/28 via-transparent to-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY ANJOORA EXISTS
      ========================================================== */}
      <section className="border-b border-[#b89a61]/25 py-16 sm:py-24">
        <div className="mx-auto grid max-w-[1240px] gap-10 px-5 sm:px-8 lg:grid-cols-[.72fr_1.28fr] lg:px-12">
          <div>
            <p className="text-xs font-semibold tracking-[0.28em] text-[#a27c39]">
              WHY ANJOORA EXISTS
            </p>

            <h2 className="mt-4 font-serif text-[clamp(2.7rem,5vw,5rem)] leading-[1] tracking-[-0.035em] text-[#173d2c]">
              The problem is no longer lack of options. It is lack of connection.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-[#686257] sm:text-lg">
            <p>
              A person may have a physician, specialist reports, prescription
              medicines, a Vaidya, wellness products and advice from several
              different places—and still be unsure how the pieces fit together.
            </p>

            <p>
              ANJOORA was created around a different starting point: understand
              the relevant story first, protect what must not be missed, and
              only then decide what deserves to be added.
            </p>

            <div className="border-l-2 border-[#a27c39] bg-[#efe2ca]/65 px-6 py-5">
              <p className="font-serif text-3xl leading-tight text-[#274735]">
                Begin with the person. Not the product. Not the modality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          OUR STORY
      ========================================================== */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-[820px] text-center">
            <p className="text-xs font-semibold tracking-[0.28em] text-[#a27c39]">
              THE ANJOORA STORY
            </p>
            <h2 className="mt-4 font-serif text-[clamp(2.5rem,5vw,4.8rem)] leading-[1] tracking-[-0.03em] text-[#173d2c]">
              From separated decisions to coordinated care.
            </h2>

            <p className="mx-auto mt-6 max-w-[720px] text-base leading-8 text-[#6b665a] sm:text-lg">
              ANJOORA is not an attempt to turn different healthcare traditions
              into one system. It is an attempt to make their roles, limits and
              connections clearer around the person.
            </p>
          </div>

          <div className="mt-12 grid border-l border-t border-[#b49a68]/30 md:grid-cols-3">
            {story.map(({ number, eyebrow, title, body, icon: Icon }) => (
              <article
                key={number}
                className="min-h-72 border-b border-r border-[#b49a68]/30 bg-[#fbf6ea]/60 p-7 sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-14 w-14 place-items-center rounded-full border border-[#a27c39]/50 font-serif text-lg text-[#a27c39]">
                    {number}
                  </span>
                  <Icon className="h-6 w-6 text-[#31513e]" />
                </div>

                <p className="mt-7 text-[11px] font-bold tracking-[0.22em] text-[#a27c39]">
                  {eyebrow}
                </p>

                <h3 className="mt-3 font-serif text-3xl leading-tight text-[#234434]">
                  {title}
                </h3>

                <p className="mt-4 leading-7 text-[#6b665a]">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          WHAT WE BELIEVE
      ========================================================== */}
      <section className="border-y border-[#b89a61]/25 bg-[#efe2ca] py-16 sm:py-24">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[.72fr_1.28fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold tracking-[0.28em] text-[#9a7436]">
                WHAT WE BELIEVE
              </p>
              <h2 className="mt-4 font-serif text-[clamp(2.8rem,5vw,5rem)] leading-[0.98] tracking-[-0.035em] text-[#173d2c]">
                Principles before products.
              </h2>
            </div>

            <p className="max-w-[660px] text-lg leading-8 text-[#5f5b50] lg:justify-self-end">
              These principles shape how ANJOORA should assess, communicate,
              integrate and follow through.
            </p>
          </div>

          <div className="mt-10 grid border-l border-t border-[#9d8356]/25 sm:grid-cols-2 lg:grid-cols-3">
            {beliefs.map((item, index) => (
              <article
                key={item.title}
                className="min-h-56 border-b border-r border-[#9d8356]/25 bg-[#f6ead6]/65 p-6"
              >
                <span className="font-serif text-lg text-[#9a7436]">
                  0{index + 1}
                </span>
                <h3 className="mt-5 font-serif text-3xl text-[#234434]">
                  {item.title}
                </h3>
                <p className="mt-3 leading-7 text-[#665f52]">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          OUR MODEL
      ========================================================== */}
      <section className="py-16 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[.78fr_1.22fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold tracking-[0.28em] text-[#a27c39]">
                HOW WE THINK ABOUT CARE
              </p>

              <h2 className="mt-4 font-serif text-[clamp(2.8rem,5vw,5.2rem)] leading-[0.98] tracking-[-0.035em] text-[#173d2c]">
                Different strengths. One coordinated direction.
              </h2>
            </div>

            <p className="max-w-[690px] text-lg leading-8 text-[#655f54] lg:justify-self-end">
              ANJOORA does not ask modern medicine, Ayurveda and the Apothecary
              to become the same thing. Each keeps a distinct role. The work is
              to understand how those roles affect one another for the person in
              front of us.
            </p>
          </div>

          <div className="mt-10 grid border-l border-t border-[#b49a68]/30 md:grid-cols-2 lg:grid-cols-4">
            {model.map((item) => (
              <article
                key={item.number}
                className="min-h-72 border-b border-r border-[#b49a68]/30 bg-[#fbf6ea]/60 p-6"
              >
                <span className="font-serif text-lg text-[#a27c39]">
                  {item.number}
                </span>
                <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.18em] text-[#a27c39]">
                  {item.label}
                </p>
                <h3 className="mt-3 font-serif text-3xl leading-tight text-[#234434]">
                  {item.title}
                </h3>
                <p className="mt-4 leading-7 text-[#6b665a]">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          APOTHECARY / TRADITION AS PART OF THE STORY
      ========================================================== */}
      <section className="border-y border-[#b89a61]/25 bg-[#173d2c] py-16 text-[#fffaf0] sm:py-24">
        <div className="mx-auto grid max-w-[1320px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[.9fr_1.1fr] lg:px-12">
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden border border-[#d4a55f]/30 sm:aspect-[5/4]">
              <Image
                src="/about/05-vaidya-preparing-herbs.webp"
                alt="Vaidya preparing traditional herbs"
                fill
                sizes="(max-width: 1024px) 92vw, 42vw"
                className="object-cover object-[center_28%]"
              />
            </div>
          </div>

          <div className="max-w-[720px] lg:pl-6">
            <p className="text-xs font-semibold tracking-[0.28em] text-[#d4a55f]">
              TRADITION IN CONTEXT
            </p>

            <h2 className="mt-4 font-serif text-[clamp(2.8rem,5vw,5.2rem)] leading-[0.98] tracking-[-0.035em]">
              We value traditional knowledge without asking it to replace modern care.
            </h2>

            <div className="mt-8 space-y-5 text-base leading-8 text-[#fffaf0]/68 sm:text-lg">
              <p>
                The traditional consultation reminds us that care can look
                beyond a single symptom and pay attention to food, routines,
                environment, digestion, sleep and the wider experience of the
                person.
              </p>

              <p>
                Modern healthcare contributes something different: diagnosis,
                investigations, pharmacology, procedures, acute care and
                disease-specific monitoring.
              </p>

              <p>
                ANJOORA&apos;s role is not to declare one worldview superior.
                It is to help the appropriate contribution happen in the right
                place, with the relevant context visible.
              </p>
            </div>

            <Link
              href="/apothecary"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#f0d49f] underline decoration-[#d4a55f]/45 underline-offset-4 transition hover:decoration-[#d4a55f]"
            >
              Understand the ANJOORA Apothecary
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHAT ANJOORA IS / IS NOT
      ========================================================== */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-[1180px] gap-10 px-5 sm:px-8 lg:grid-cols-[.72fr_1.28fr] lg:px-12">
          <div>
            <p className="text-xs font-semibold tracking-[0.28em] text-[#a27c39]">
              DEFINING THE BRAND
            </p>
            <h2 className="mt-4 font-serif text-[clamp(2.7rem,5vw,4.9rem)] leading-[1] tracking-[-0.035em] text-[#173d2c]">
              ANJOORA is not “more treatment.”
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-[#686257]">
              ANJOORA is a structured way to make the relevant pieces of care
              clearer around the person.
            </p>

            <div className="mt-7 divide-y divide-[#b89a61]/25 border-y border-[#b89a61]/25">
              {whatWeAreNot.map((item) => (
                <p
                  key={item}
                  className="flex items-start gap-3 py-4 text-[#625f55]"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a27c39]" />
                  {item}
                </p>
              ))}
            </div>

            <div className="mt-8 border-l-2 border-[#173d2c] bg-[#efe2ca]/55 px-6 py-6">
              <p className="font-serif text-3xl leading-tight text-[#274735]">
                What we are building is coordinated clarity: understand the
                person, protect necessary care, integrate selectively and keep
                responsibility visible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FOUNDING IDEA
      ========================================================== */}
      <section className="border-y border-[#b89a61]/25 bg-[#efe2ca] py-16 sm:py-24">
        <div className="mx-auto max-w-[1000px] px-5 text-center sm:px-8">
          <p className="text-xs font-semibold tracking-[0.28em] text-[#9a7436]">
            THE FOUNDING IDEA
          </p>

          <h2 className="mt-4 font-serif text-[clamp(2.8rem,5vw,5.1rem)] leading-[1] tracking-[-0.035em] text-[#173d2c]">
            A better question before adding anything new.
          </h2>

          <p className="mx-auto mt-8 max-w-[820px] text-lg leading-8 text-[#5f5b50]">
            ANJOORA began from a simple concern: people can receive more advice,
            more products and more interventions while becoming less certain
            about what actually matters.
          </p>

          <p className="mx-auto mt-5 max-w-[820px] font-serif text-3xl leading-[1.25] text-[#274735] sm:text-4xl">
            What if the first task was not to add another option—but to make the
            existing story understandable?
          </p>
        </div>
      </section>

      {/* =========================================================
          CLOSING CTA
      ========================================================== */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-[1180px] items-center gap-8 px-5 sm:px-8 lg:grid-cols-[1fr_auto] lg:px-12">
          <div>
            <p className="text-xs font-semibold tracking-[0.28em] text-[#a27c39]">
              EXPERIENCE ANJOORA
            </p>
            <h2 className="mt-4 max-w-[760px] font-serif text-[clamp(2.7rem,5vw,4.8rem)] leading-[1] tracking-[-0.035em] text-[#173d2c]">
              Start with your context—not with a product.
            </h2>
          </div>

          <div className="flex flex-col gap-3">
            <Link
              href="/assessment"
              className="inline-flex min-h-12 items-center justify-center gap-2 border border-[#173d2c] bg-[#173d2c] px-6 py-3 text-sm font-semibold tracking-wide text-[#fffaf0] transition hover:bg-[#214e38]"
            >
              Create My ANJOORA Folio
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/how-it-works"
              className="inline-flex min-h-12 items-center justify-center border border-[#987d4d]/45 bg-[#fffaf0]/55 px-6 py-3 text-sm font-semibold tracking-wide text-[#294437] transition hover:bg-[#fffaf0]"
            >
              See How ANJOORA Works
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
