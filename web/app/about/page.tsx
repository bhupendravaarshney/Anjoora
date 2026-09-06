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

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

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
            <div className="max-w-[660px]">
              <p className="mb-5 text-xs font-semibold tracking-[0.28em] text-[#a27c39]">
                OUR STORY
              </p>

              <h3 className="font-serif text-[clamp(2.85rem,6.2vw,6.5rem)] leading-[0.92] tracking-[-0.04em] text-[#173d2c]">
                The Return of the Personal Vaidya
              </h3>

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
                    href="/assessment"
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

            <div className="relative mx-auto w-full max-w-[680px]">
              <div
                  aria-hidden="true"
                  className="absolute -left-4 -top-4 h-full w-full border border-[#a27c39]/40"
              />
              <div className="relative aspect-[4/3] overflow-hidden border border-[#7b6a48]/30 bg-[#d9c5a1] shadow-[0_24px_70px_rgba(56,45,25,0.16)] lg:aspect-[1.08/1]">
                <Image
                    src="/about/01-hero-vaidya-and-products.webp"
                    alt="Vaidya preparing a personalised herbal formulation beside ANJOORA products"
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
          STORY TIMELINE
      ========================================================== */}
        <section className="border-b border-[#b89a61]/25 py-16 sm:py-24">
          <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-[800px] text-center">
              <p className="text-xs font-semibold tracking-[0.28em] text-[#a27c39]">
                THE ANJOORA STORY
              </p>
              <h2 className="mt-4 font-serif text-[clamp(2.5rem,5vw,4.8rem)] leading-[1] tracking-[-0.03em] text-[#173d2c]">
                From personal tradition to personal wellness.
              </h2>
            </div>

            <div className="relative mt-10 grid gap-5 sm:mt-14 lg:grid-cols-3">
              <div
                  aria-hidden="true"
                  className="absolute left-[16.5%] right-[16.5%] top-[27px] hidden border-t border-[#a27c39]/40 lg:block"
              />

              {timeline.map((item) => (
                  <article
                      key={item.number}
                      className="relative overflow-hidden border border-[#b49a68]/30 bg-[#fbf6ea]/60"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                          src={item.image}
                          alt={item.alt}
                          fill
                          sizes="(max-width: 1024px) 92vw, 31vw"
                          className="object-cover object-center"
                      />
                      <div
                          aria-hidden="true"
                          className="absolute inset-0 bg-gradient-to-t from-[#173d2c]/30 via-transparent to-transparent"
                      />
                    </div>

                    <div className="p-6 sm:p-8">
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

                      <p className="mt-4 text-base leading-7 text-[#6b665a]">
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
        <section className="py-16 sm:py-24 lg:py-28">
          <div className="mx-auto grid max-w-[1320px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden border border-[#8e764d]/30 sm:aspect-[5/4] lg:aspect-[4/5]">
                <Image
                    src="/about/05-vaidya-preparing-herbs.webp"
                    alt="Vaidya preparing herbs in a traditional apothecary setting"
                    fill
                    sizes="(max-width: 1024px) 92vw, 42vw"
                    className="object-cover object-[center_28%]"
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
        <section className="border-y border-[#b89a61]/25 bg-[#efe2ca] py-16 sm:py-24">
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

            <div className="relative aspect-[4/3] overflow-hidden border border-[#9d8356]/30 lg:aspect-[4/5]">
              <Image
                  src="/about/06-botanical-apothecary-detail.webp"
                  alt="Botanical apothecary detail with traditional preparation elements"
                  fill
                  sizes="(max-width: 1024px) 92vw, 42vw"
                  className="object-cover object-bottom"
              />
            </div>
          </div>
        </section>

        {/* =========================================================
          WHY ANJOORA EXISTS
      ========================================================== */}
        <section className="py-16 sm:py-24">
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
        <SiteFooter />
      </main>
  );
}
