import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpenText,
  HeartHandshake,
  Leaf,
  ShieldCheck,
  Sparkles,
  Sprout,
  UserRound,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About ANJOORA | The Return of the Personal Vaidya",
  description:
      "Discover ANJOORA — a personalised wellness approach inspired by Ayurvedic tradition, structured consultation and human Vaidya review.",
};

const timeline = [
  {
    number: "01",
    era: "THEN",
    label: "Ancient India",
    title: "Care began with the individual.",
    body:
        "Vaidyas listened, observed and understood the person before preparing a remedy.",
    image: "/about/02-ancient-vaidya-consultation.webp",
    alt: "Traditional Vaidya consulting an individual",
  },
  {
    number: "02",
    era: "THEN",
    label: "The Apothecary Tradition",
    title: "Formulations were prepared with purpose.",
    body:
        "Apothecaries carried forward the tradition of selecting, combining and preparing natural ingredients around individual needs.",
    image: "/about/03-apothecary-preparation.webp",
    alt: "Apothecary preparing herbs and formulations",
  },
  {
    number: "03",
    era: "NOW",
    label: "ANJOORA Today",
    title: "Ancient wisdom. Modern understanding.",
    body:
        "ANJOORA carries that philosophy forward through structured consultation, thoughtful personalisation and human Vaidya review.",
    image: "/about/04-modern-anjoora-products.webp",
    alt: "Modern ANJOORA personalised herbal wellness products",
  },
];

const consultationSteps = [
  ["01", "Concerns", "What matters now"],
  ["02", "Present Pattern", "Goal, duration and effect"],
  ["03", "Body Tendencies", "Ayurveda-informed context"],
  ["04", "Daily Rhythm", "Food, sleep and rituals"],
  ["05", "Inner Climate", "Emotion and change style"],
  ["06", "Preparation", "Format and safety"],
];

const philosophy = [
  {
    icon: UserRound,
    title: "No One-Size-Fits-All",
    body:
        "Individual context matters. We begin by understanding the person rather than starting with a shelf of products.",
  },
  {
    icon: Leaf,
    title: "Purposeful Ingredients",
    body:
        "Ingredients are considered for the intended formulation, format and wellness context — not added simply to make a longer label.",
  },
  {
    icon: Sparkles,
    title: "Thoughtful Preparation",
    body:
        "Formulations are developed with attention to combination, preparation, format and the practical way they fit into daily life.",
  },
  {
    icon: HeartHandshake,
    title: "Human-Led Personalisation",
    body:
        "Technology helps organise the consultation. Human Vaidya judgement remains central to the recommendation.",
  },
];

const pillars = [
  { icon: BookOpenText, label: "Ancient Ayurvedic Wisdom" },
  { icon: Sprout, label: "Time-Tested Traditions" },
  { icon: Leaf, label: "Natural Ingredients" },
  { icon: UserRound, label: "Personalised for You" },
  { icon: HeartHandshake, label: "Care for Body, Mind & Daily Life" },
];

export default function AboutPage() {
  return (
      <main className="overflow-x-hidden bg-[#f5eddc] text-[#24372b]">
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

          <div className="mx-auto grid min-h-[730px] max-w-[1440px] items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12 lg:py-20 xl:px-16">
            <div className="max-w-[660px]">
              <p className="mb-5 text-xs font-semibold tracking-[0.28em] text-[#a27c39]">
                OUR STORY
              </p>

              <h1 className="font-serif text-[clamp(3.25rem,6.5vw,7rem)] leading-[0.92] tracking-[-0.04em] text-[#173d2c]">
                The Return of the Personal Vaidya
              </h1>

              <p className="mt-8 max-w-[610px] font-serif text-[clamp(1.3rem,2.1vw,2rem)] leading-[1.32] text-[#3a3a30]">
                Healing was never meant to be one-size-fits-all.
              </p>

              <p className="mt-3 max-w-[620px] text-base leading-8 text-[#696358] sm:text-lg">
                It was meant to be personal, intentional and created around you.
                ANJOORA brings the spirit of the personal Vaidya into a modern,
                structured wellness experience.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                    href="/consultation"
                    className="inline-flex min-h-12 items-center justify-center gap-2 border border-[#173d2c] bg-[#173d2c] px-6 py-3 text-sm font-semibold tracking-wide text-[#fffaf0] transition hover:bg-[#214e38] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a27c39] focus-visible:ring-offset-2"
                >
                  Begin Your Consultation
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <a
                    href="#how-anjoora-works"
                    className="inline-flex min-h-12 items-center justify-center border border-[#987d4d]/45 bg-[#fffaf0]/55 px-6 py-3 text-sm font-semibold tracking-wide text-[#294437] transition hover:bg-[#fffaf0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a27c39] focus-visible:ring-offset-2"
                >
                  How ANJOORA Works
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[760px]">
              <div
                  aria-hidden="true"
                  className="absolute -left-4 -top-4 h-full w-full border border-[#a27c39]/40"
              />
              <div className="relative aspect-[1.03/1] overflow-hidden border border-[#7b6a48]/30 bg-[#d9c5a1] shadow-[0_24px_70px_rgba(56,45,25,0.16)]">
                <Image
                    src="/about/01-hero-vaidya-and-products.webp"
                    alt="Vaidya preparing a personalised herbal formulation beside ANJOORA products"
                    fill
                    priority
                    sizes="(max-width: 1024px) 92vw, 54vw"
                    className="object-cover"
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
          STORY TIMELINE
      ========================================================== */}
        <section className="border-b border-[#b89a61]/25 py-20 sm:py-24">
          <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-[800px] text-center">
              <p className="text-xs font-semibold tracking-[0.28em] text-[#a27c39]">
                THE ANJOORA STORY
              </p>
              <h2 className="mt-4 font-serif text-[clamp(2.5rem,5vw,4.8rem)] leading-[1] tracking-[-0.03em] text-[#173d2c]">
                From personal tradition to personal wellness.
              </h2>
            </div>

            <div className="relative mt-14 grid gap-5 lg:grid-cols-3">
              <div
                  aria-hidden="true"
                  className="absolute left-[16.5%] right-[16.5%] top-[27px] hidden border-t border-[#a27c39]/40 lg:block"
              />

              {timeline.map((item) => (
                  <article
                      key={item.number}
                      className="relative overflow-hidden border border-[#b49a68]/30 bg-[#fbf6ea]/60"
                  >
                    <div className="relative aspect-[1.3/1] overflow-hidden">
                      <Image
                          src={item.image}
                          alt={item.alt}
                          fill
                          sizes="(max-width: 1024px) 92vw, 31vw"
                          className="object-cover"
                      />
                      <div
                          aria-hidden="true"
                          className="absolute inset-0 bg-gradient-to-t from-[#173d2c]/30 via-transparent to-transparent"
                      />
                    </div>

                    <div className="p-7 sm:p-8">
                      <div className="relative z-10 flex items-center gap-4">
                    <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-[#a27c39]/65 bg-[#f5eddc] font-serif text-lg text-[#a27c39]">
                      {item.number}
                    </span>
                        <div>
                          <p className="text-[11px] font-bold tracking-[0.22em] text-[#a27c39]">
                            {item.era}
                          </p>
                          <p className="mt-1 text-sm text-[#6e6859]">{item.label}</p>
                        </div>
                      </div>

                      <h3 className="mt-7 font-serif text-3xl leading-tight text-[#234434]">
                        {item.title}
                      </h3>

                      <p className="mt-4 text-[15px] leading-7 text-[#6b665a]">
                        {item.body}
                      </p>
                    </div>
                  </article>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
          HEALING HAD A FACE
      ========================================================== */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto grid max-w-[1320px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
            <div className="relative">
              <div className="relative aspect-[0.78/1] overflow-hidden border border-[#8e764d]/30">
                <Image
                    src="/about/05-vaidya-preparing-herbs.webp"
                    alt="Vaidya preparing herbs in a traditional apothecary setting"
                    fill
                    sizes="(max-width: 1024px) 92vw, 42vw"
                    className="object-cover"
                />
              </div>

              <div className="absolute -bottom-6 -right-3 hidden w-[62%] border border-[#a27c39]/35 bg-[#173d2c] p-6 text-[#fff5df] md:block">
                <p className="font-serif text-2xl leading-tight">
                  “Begin with the individual, not the product.”
                </p>
              </div>
            </div>

            <div className="max-w-[700px] lg:pl-8">
              <p className="text-xs font-semibold tracking-[0.28em] text-[#a27c39]">
                THE BEGINNING
              </p>

              <h2 className="mt-4 font-serif text-[clamp(2.8rem,5vw,5.2rem)] leading-[0.98] tracking-[-0.035em] text-[#173d2c]">
                Thousands of years ago, healing had a face.
              </h2>

              <div className="mt-8 space-y-5 text-base leading-8 text-[#655f54] sm:text-lg">
                <p>The Vaidya knew more than a symptom.</p>
                <p>
                  They understood food, routine, environment, constitution, life
                  stage and the person behind the concern.
                </p>
                <p>
                  ANJOORA is built around that same principle:{" "}
                  <strong className="font-semibold text-[#2d4638]">
                    begin with the individual, not the product.
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
          EVERY REMEDY WAS PERSONAL
      ========================================================== */}
        <section className="border-y border-[#b89a61]/25 bg-[#efe2ca] py-20 sm:py-24">
          <div className="mx-auto grid max-w-[1320px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-12">
            <div>
              <p className="text-xs font-semibold tracking-[0.28em] text-[#9a7436]">
                PERSONAL BY PRINCIPLE
              </p>

              <h2 className="mt-4 max-w-[650px] font-serif text-[clamp(2.8rem,5vw,5rem)] leading-[0.98] tracking-[-0.035em] text-[#173d2c]">
                Every remedy was personal.
              </h2>

              <p className="mt-7 max-w-[710px] text-lg leading-8 text-[#5f5b50]">
                Herbs were selected with intention. Formulations were prepared
                for a particular person and a particular context — not for an
                anonymous market.
              </p>

              <p className="mt-8 max-w-[680px] font-serif text-3xl leading-[1.2] text-[#274735] sm:text-4xl">
                One person. One context. One thoughtfully prepared plan.
              </p>
            </div>

            <div className="relative min-h-[360px] overflow-hidden border border-[#9d8356]/30 lg:min-h-[470px]">
              <Image
                  src="/about/06-botanical-apothecary-detail.webp"
                  alt="Botanical apothecary detail with traditional preparation elements"
                  fill
                  sizes="(max-width: 1024px) 92vw, 42vw"
                  className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* =========================================================
          WHY ANJOORA EXISTS
      ========================================================== */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-[980px] px-5 text-center sm:px-8">
            <p className="text-xs font-semibold tracking-[0.28em] text-[#a27c39]">
              WHY ANJOORA EXISTS
            </p>

            <h2 className="mt-4 font-serif text-[clamp(2.7rem,5vw,5.2rem)] leading-[1] tracking-[-0.035em] text-[#173d2c]">
              Somewhere along the way, wellness became standardised.
            </h2>

            <p className="mx-auto mt-8 max-w-[820px] text-base leading-8 text-[#686257] sm:text-lg">
              Shelves became larger. Choices became endless. Yet the individual
              often disappeared from the process.
            </p>

            <p className="mx-auto mt-5 max-w-[820px] text-base leading-8 text-[#686257] sm:text-lg">
              ANJOORA takes a different approach. We first understand your
              concerns, routines, preferences and wellness context. Only then do
              we determine what may be appropriate for you.
            </p>
          </div>
        </section>

        {/* =========================================================
          MODERN DAY VAIDYA
      ========================================================== */}
        <section className="relative overflow-hidden bg-[#123b2a] py-20 text-[#f9efd9] sm:py-28">
          <div
              aria-hidden="true"
              className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_15%_15%,rgba(196,157,86,0.22),transparent_32%),radial-gradient(circle_at_85%_90%,rgba(196,157,86,0.14),transparent_30%)]"
          />

          <div className="relative mx-auto grid max-w-[1320px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:px-12">
            <div>
              <p className="text-xs font-semibold tracking-[0.28em] text-[#d2ad64]">
                ANCIENT WISDOM · CONTEMPORARY CARE
              </p>

              <h2 className="mt-4 font-serif text-[clamp(3rem,6vw,6rem)] leading-[0.95] tracking-[-0.035em]">
                The Modern-Day Vaidya
              </h2>

              <p className="mt-7 max-w-[700px] text-base leading-8 text-[#e7dcc6]/90 sm:text-lg">
                ANJOORA combines traditional Ayurvedic thinking with structured
                modern consultation to help a Vaidya understand the person more
                completely and prepare an individual wellness recommendation.
              </p>

              <div className="mt-10 grid gap-px overflow-hidden border border-[#d2ad64]/35 bg-[#d2ad64]/25 sm:grid-cols-2">
                {[
                  ["We Listen", "Your concerns, goals and priorities."],
                  [
                    "We Understand",
                    "Your tendencies, routines and lifestyle context.",
                  ],
                  [
                    "We Personalise",
                    "The recommendation is shaped around what you actually need.",
                  ],
                  [
                    "A Vaidya Reviews",
                    "Human judgement remains central to the process.",
                  ],
                ].map(([title, body]) => (
                    <article key={title} className="bg-[#123b2a] p-6 sm:p-7">
                      <div className="mb-5 h-px w-10 bg-[#d2ad64]" />
                      <h3 className="font-serif text-2xl text-[#f7e9cb]">{title}</h3>
                      <p className="mt-3 text-sm leading-7 text-[#e4d6bb]/80">
                        {body}
                      </p>
                    </article>
                ))}
              </div>
            </div>

            <div className="relative min-h-[540px] overflow-hidden border border-[#d2ad64]/35 lg:min-h-[680px]">
              <Image
                  src="/about/05-vaidya-preparing-herbs.webp"
                  alt="Vaidya preparing herbs for a personalised wellness formulation"
                  fill
                  sizes="(max-width: 1024px) 92vw, 47vw"
                  className="object-cover"
              />
              <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#123b2a]/45 via-transparent to-transparent"
              />
            </div>
          </div>
        </section>

        {/* =========================================================
          HOW ANJOORA WORKS
      ========================================================== */}
        <section
            id="how-anjoora-works"
            className="scroll-mt-24 py-20 sm:py-28"
        >
          <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-[840px] text-center">
              <p className="text-xs font-semibold tracking-[0.28em] text-[#a27c39]">
                YOUR CONSULTATION JOURNEY
              </p>

              <h2 className="mt-4 font-serif text-[clamp(2.7rem,5vw,5.1rem)] leading-[1] tracking-[-0.035em] text-[#173d2c]">
                We begin with you. Not with products.
              </h2>

              <p className="mx-auto mt-6 max-w-[720px] text-base leading-8 text-[#686257]">
                A structured consultation helps build context step by step before
                any personalised recommendation is considered.
              </p>
            </div>

            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {consultationSteps.map(([number, title, body]) => (
                  <article
                      key={number}
                      className="border border-[#b39767]/30 bg-[#fbf6ea]/65 p-6 transition hover:border-[#a27c39]/55"
                  >
                    <p className="text-xs font-bold tracking-[0.2em] text-[#a27c39]">
                      {number}
                    </p>
                    <h3 className="mt-4 font-serif text-2xl text-[#234434]">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[#6d685d]">{body}</p>
                  </article>
              ))}
            </div>

            <div className="mt-6 grid items-stretch gap-4 lg:grid-cols-[1fr_auto_1fr]">
              <div className="border border-[#a27c39]/45 bg-[#efe2ca] p-7 text-center">
                <ShieldCheck className="mx-auto h-7 w-7 stroke-[1.4] text-[#87692f]" />
                <p className="mt-3 text-xs font-bold tracking-[0.2em] text-[#87692f]">
                  HUMAN REVIEW
                </p>
                <h3 className="mt-2 font-serif text-2xl text-[#244536]">
                  Vaidya Review
                </h3>
              </div>

              <div className="hidden items-center justify-center lg:flex">
                <ArrowRight className="h-6 w-6 text-[#a27c39]" />
              </div>

              <div className="border border-[#173d2c] bg-[#173d2c] p-7 text-center text-[#f8ecd2]">
                <Sparkles className="mx-auto h-7 w-7 stroke-[1.4] text-[#d2ad64]" />
                <p className="mt-3 text-xs font-bold tracking-[0.2em] text-[#d2ad64]">
                  PERSONALISED
                </p>
                <h3 className="mt-2 font-serif text-2xl">
                  Wellness Recommendation
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
          PHILOSOPHY
      ========================================================== */}
        <section className="relative overflow-hidden border-y border-[#b89a61]/25 bg-[#eadbc0] py-20 sm:py-28">
          <div className="absolute bottom-0 right-0 hidden h-64 w-64 opacity-10 md:block">
            <Image
                src="/about/07-mortar-botanical-line-art.webp"
                alt=""
                fill
                aria-hidden="true"
                className="object-contain object-bottom-right"
            />
          </div>

          <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
            <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-14">
              <div>
                <p className="text-xs font-semibold tracking-[0.28em] text-[#8d6b31]">
                  OUR PHILOSOPHY
                </p>

                <h2 className="mt-4 font-serif text-[clamp(2.8rem,5vw,5rem)] leading-[0.98] tracking-[-0.035em] text-[#173d2c]">
                  Not mass selected. Personally considered.
                </h2>

                <p className="mt-6 max-w-[520px] font-serif text-2xl leading-snug text-[#605744]">
                  Because nature never made two people exactly alike.
                </p>
              </div>

              <div className="grid gap-px overflow-hidden border border-[#9c7c41]/35 bg-[#9c7c41]/25 sm:grid-cols-2">
                {philosophy.map(({ icon: Icon, title, body }) => (
                    <article key={title} className="bg-[#f3e8d3] p-7">
                      <Icon className="h-8 w-8 stroke-[1.4] text-[#8a692f]" />
                      <h3 className="mt-5 font-serif text-2xl text-[#234434]">
                        {title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-[#655f54]">
                        {body}
                      </p>
                    </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
          BRAND PILLARS
      ========================================================== */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-2 gap-px overflow-hidden border border-[#b49a68]/30 bg-[#b49a68]/25 md:grid-cols-5">
              {pillars.map(({ icon: Icon, label }) => (
                  <div
                      key={label}
                      className="flex min-h-[165px] flex-col items-center justify-center bg-[#f7f0e1] p-5 text-center"
                  >
                    <div className="grid h-12 w-12 place-items-center rounded-full border border-[#94743b]/45">
                      <Icon className="h-6 w-6 stroke-[1.4] text-[#795e2f]" />
                    </div>
                    <p className="mt-4 max-w-[180px] font-serif text-lg leading-snug text-[#294437]">
                      {label}
                    </p>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
          CLOSING CTA
      ========================================================== */}
        <section className="relative overflow-hidden bg-[#103724] px-5 py-20 text-center text-[#faefd8] sm:px-8 sm:py-24">
          <div
              aria-hidden="true"
              className="absolute inset-0 opacity-15 [background-image:radial-gradient(circle_at_50%_0%,rgba(213,174,100,0.3),transparent_44%)]"
          />

          <div className="relative mx-auto max-w-[920px]">
            <Leaf className="mx-auto h-8 w-8 stroke-[1.3] text-[#d3ad62]" />

            <h2 className="mt-5 font-serif text-[clamp(2.9rem,5.6vw,5.8rem)] leading-[0.96] tracking-[-0.035em]">
              Rooted in tradition. Designed for today.
            </h2>

            <p className="mx-auto mt-6 max-w-[640px] text-base leading-8 text-[#eadcc2]/85 sm:text-lg">
              Ancient wisdom. Modern care. Personalised always.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                  href="/consultation"
                  className="inline-flex min-h-12 items-center justify-center gap-2 border border-[#d3ad62] bg-[#d3ad62] px-6 py-3 text-sm font-semibold text-[#173323] transition hover:bg-[#e0bd79] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f6e2bb] focus-visible:ring-offset-2 focus-visible:ring-offset-[#103724]"
              >
                Begin Your ANJOORA Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                  href="/"
                  className="inline-flex min-h-12 items-center justify-center border border-[#f0dfbd]/35 px-6 py-3 text-sm font-semibold text-[#f6e8cd] transition hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f6e2bb] focus-visible:ring-offset-2 focus-visible:ring-offset-[#103724]"
              >
                Return Home
              </Link>
            </div>
          </div>
        </section>
      </main>
  );
}
