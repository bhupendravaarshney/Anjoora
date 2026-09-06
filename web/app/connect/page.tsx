"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ClipboardCheck,
  CreditCard,
  Leaf,
  MessageCircle,
  PackageCheck,
  PackageOpen,
  ShieldCheck,
  UserRoundCheck,
} from "lucide-react";

import { BrandMark } from "@/components/brand-mark";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

type WellnessPlan = {
  concern?: string;
  concerns?: string[];
  formula?: string;
  support?: string;
  focus?: string;
  duration?: string;
  impact?: string;
  format?: string;
  name?: string;
  phone?: string;
  ayurveda?: {
    appetite?: string;
    climate?: string;
    energyPattern?: string;
  };
  dietLifestyle?: {
    dietPattern?: string;
    sleepPattern?: string;
    rituals?: string[];
  };
  emotions?: {
    stressResponse?: string;
    emotionalNeed?: string;
    changeStyle?: string;
  };
};

const ANJOORA_WHATSAPP_NUMBER = "918791248179";

const folioLabels: Record<string, string> = {
  recent: "Recently (less than 4 weeks)",
  "one-three": "For a little while (1–3 months)",
  "three-twelve": "For several months (3–12 months)",
  "long-term": "An ongoing pattern (more than a year)",
  light: "A small nudge",
  moderate: "Meaningful support",
  priority: "A real priority",
  variable: "Variable",
  steady: "Steady",
  strong: "Strong",
  sensitive: "Sensitive",
  warm: "Usually warm",
  cool: "Usually cool",
  balanced: "Generally balanced",
  fluctuating: "Fluctuating",
  morning: "Best in the morning",
  afternoon: "Best in the afternoon",
  evening: "Best in the evening",
  irregular: "Irregular",
  regular: "Regular",
  early: "Earlier rhythm",
  late: "Later rhythm",
  interrupted: "Interrupted",
  tense: "Tension builds",
  restless: "Restlessness",
  withdrawn: "I withdraw",
  overwhelmed: "I feel overwhelmed",
  grounding: "Grounding",
  calm: "Calm",
  clarity: "Clarity",
  encouragement: "Encouragement",
  gradual: "Small gradual changes",
  structured: "A clear structured plan",
  flexible: "Flexible guidance",
  tea: "Herbal tea or infusion",
  powder: "Powder or blend",
  capsule: "Capsule or tablet",
  topical: "Oil, balm or topical ritual",
  guide: "Help me choose",
};

const handoverSteps = [
  {
    icon: UserRoundCheck,
    title: "The Vaidya studies your folio",
    copy: "Your concerns, body tendencies, daily rhythm, emotional context and safety answers are read together.",
  },
  {
    icon: ClipboardCheck,
    title: "Your recommendation is prepared",
    copy: "The final product selection, purpose, directions, quantity and total amount are prepared for you.",
  },
  {
    icon: CreditCard,
    title: "You review it on WhatsApp",
    copy: "You can see the thinking, ask questions and accept the recommendation before payment is requested.",
  },
  {
    icon: PackageOpen,
    title: "Payment link and confirmation",
    copy: "A secure payment link is sent only after acceptance. Successful payment creates the confirmed request.",
  },
  {
    icon: Leaf,
    title: "Preparation and quality check",
    copy: "The approved item is prepared where permitted, or allocated from approved stock, then checked and labelled.",
  },
  {
    icon: PackageCheck,
    title: "Dispatch and follow-up",
    copy: "Tracking, delivery support, use guidance and the planned follow-up continue through WhatsApp.",
  },
];

export default function ConnectPage() {
  const [plan, setPlan] = useState<WellnessPlan>({});
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [language, setLanguage] = useState("hinglish");
  const [contactTime, setContactTime] = useState("afternoon");
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("anjoora-plan");
    if (!stored) return;
    try {
      const parsed = JSON.parse(stored) as WellnessPlan;
      const timer = window.setTimeout(() => {
        setPlan(parsed);
        setName(parsed.name ?? "");
        setPhone(parsed.phone ?? "");
      }, 0);
      return () => window.clearTimeout(timer);
    } catch {
      window.localStorage.removeItem("anjoora-plan");
    }
  }, []);

  const ready =
    name.trim().length >= 2 &&
    phone.replace(/\D/g, "").length >= 10 &&
    city.trim().length >= 2 &&
    consent;

  const openWhatsAppHandover = () => {
    if (!ready) return;

    const selectedConcerns = plan.concerns?.length
      ? plan.concerns.join(", ")
      : plan.concern ?? "Not provided";
    const lines = [
      "*ANJOORA · PERSONAL CONSULTATION FOLIO*",
      "_For human Vaidya review_",
      "",
      "Hello ANJOORA, I have completed my consultation and would like my folio to be reviewed.",
      "",
      "*PERSONAL DETAILS*",
      `• Name: ${name.trim()}`,
      `• WhatsApp: ${phone.trim()}`,
      `• City: ${city.trim()}`,
      `• Language: ${languageLabel(language)}`,
      `• Best time to message: ${sentenceCase(contactTime)}`,
      "",
      "*WHAT MATTERS NOW*",
      `• Concerns: ${selectedConcerns}`,
      `• Main goal: ${plan.focus || "Not provided"}`,
      `• Duration: ${folioLabel(plan.duration)}`,
      `• Daily effect: ${folioLabel(plan.impact)}`,
      "",
      "*BODY & DAILY RHYTHM*",
      `• Appetite and digestion: ${folioLabel(plan.ayurveda?.appetite)}`,
      `• Body climate: ${folioLabel(plan.ayurveda?.climate)}`,
      `• Energy pattern: ${folioLabel(plan.ayurveda?.energyPattern)}`,
      `• Meal rhythm: ${folioLabel(plan.dietLifestyle?.dietPattern)}`,
      `• Sleep rhythm: ${folioLabel(plan.dietLifestyle?.sleepPattern)}`,
      `• Realistic rituals: ${plan.dietLifestyle?.rituals?.join(", ") || "Not provided"}`,
      "",
      "*INNER CLIMATE & PREPARATION*",
      `• Stress response: ${folioLabel(plan.emotions?.stressResponse)}`,
      `• Emotional support: ${folioLabel(plan.emotions?.emotionalNeed)}`,
      `• Change style: ${folioLabel(plan.emotions?.changeStyle)}`,
      `• Preferred format: ${folioLabel(plan.format, "Team to recommend")}`,
      "",
      "*NEXT STEP*",
      "Please review this context and let me know if you need any clarification before preparing a recommendation.",
      "",
      "_I consent to ANJOORA using these details to contact me on WhatsApp for review, recommendations and payment communication. I understand that this message does not place an order or make a payment._",
    ];
    const url = `https://wa.me/${ANJOORA_WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;

    setSubmitted(true);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  if (submitted) {
    return (
      <main className="min-h-screen bg-[#f2e8d2]">
        <SimpleHeader />
        <section className="apothecary-paper px-5 py-12 sm:px-8 lg:py-20">
          <div className="folio-frame animate-rise mx-auto max-w-2xl bg-[#fbf5e7] p-7 text-center sm:p-12">
            <span className="mx-auto grid size-20 place-items-center rounded-full border border-[#d4a55f]/45 bg-[#263f32] text-[#e3bd7d]">
              <MessageCircle className="size-9" />
            </span>
            <p className="eyebrow mt-7 text-[#8b432d]">Your folio is ready for handover</p>
            <h1 className="font-display mt-4 text-5xl leading-[.95] tracking-[-.045em] text-[#20352a] sm:text-6xl">
              The digital folio closes here. The Vaidya’s review begins next.
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-[#66655b]">
              In the live service, your apothecary brief will open with ANJOORA’s official WhatsApp account. The Vaidya reviews it before products and pricing are shared. A payment link follows only after you accept; making begins only after payment confirmation.
            </p>
            <div className="mt-8 border border-[#6b4b2e]/18 bg-[#ead9bb] p-5 text-left">
              <p className="font-semibold text-[#294738]">Folio handover</p>
              <p className="mt-2 leading-7 text-[#66645a]">
                {name} · {phone}<br />
                {city} · {languageLabel(language)} · Best time: {contactTime}
              </p>
            </div>
            <div className="mt-8 border border-[#bd8a45]/40 bg-[#fff5df] p-5 text-left">
              <p className="font-semibold text-[#294738]">Complete the handover in WhatsApp</p>
              <p className="mt-2 text-sm leading-6 text-[#6d695e]">
                WhatsApp should have opened with your folio addressed to +91 87912 48179. The message is sent only after you press Send in WhatsApp.
              </p>
            </div>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-13 rounded-sm px-7">
                <Link href="/">Return home</Link>
              </Button>
              <Button variant="outline" size="lg" className="h-13 rounded-sm border-[#20352a]/25 px-7" onClick={openWhatsAppHandover}>
                Open WhatsApp again
              </Button>
              <Button variant="outline" size="lg" className="h-13 rounded-sm border-[#20352a]/25 px-7" onClick={() => setSubmitted(false)}>
                Edit request
              </Button>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f2e8d2]">
      <SimpleHeader />
      <section className="apothecary-paper px-5 py-10 sm:px-8 lg:py-16">
        <div className="mx-auto max-w-[1180px]">
          <div className="grid gap-7 lg:grid-cols-[1fr_.85fr] lg:items-end">
            <div>
              <p className="eyebrow text-[#8b432d]">From digital folio to Vaidya</p>
              <h1 className="font-display mt-4 max-w-3xl text-[clamp(3rem,6vw,5.8rem)] leading-[.92] tracking-[-.05em] text-[#20352a]">
                Your story is ready for the apothecary table.
              </h1>
            </div>
            <p className="text-lg leading-8 text-[#66655b]">
              The website creates the connection—it does not sell the product. The Vaidya-led review, recommendation, amount and secure payment link continue through WhatsApp.
            </p>
          </div>

          <div className="mt-10 grid gap-7 lg:grid-cols-[1fr_24rem] lg:items-start">
            <div className="folio-frame bg-[#fbf5e7] p-6 sm:p-8">
              <p className="eyebrow relative z-10 text-[#8b432d]">What happens after the folio</p>
              <div className="relative z-10 mt-6 grid gap-3 sm:grid-cols-2">
                {handoverSteps.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <article key={item.title} className="border border-[#6b4b2e]/18 bg-[#f1e5ce] p-5">
                      <div className="flex items-center justify-between">
                        <span className="grid size-10 place-items-center rounded-full bg-[#263f32] text-[#e3bd7d]"><Icon className="size-5" /></span>
                        <span className="font-display text-xl text-[#8b432d]">0{index + 1}</span>
                      </div>
                      <h2 className="font-display mt-6 text-2xl tracking-[-.025em] text-[#20352a]">{item.title}</h2>
                      <p className="mt-2 text-sm leading-6 text-[#6b685e]">{item.copy}</p>
                    </article>
                  );
                })}
              </div>
              <Link href="/how-it-works" className="relative z-10 mt-5 inline-flex items-center gap-2 border-b border-[#8b432d]/35 pb-1 text-sm font-semibold text-[#70422c] hover:border-[#8b432d] hover:text-[#8b432d]">
                See the complete payment, making and follow-up flow <ArrowRight className="size-4" />
              </Link>

              <div className="relative z-10 mt-8 border border-[#6b4b2e]/18 bg-[#ead9bb] p-5 sm:p-6">
                <div className="flex items-start justify-between gap-5 border-b border-[#6b4b2e]/18 pb-4">
                  <div>
                    <p className="eyebrow text-[#8b432d]">Your reviewed WhatsApp suggestion</p>
                    <h2 className="font-display mt-2 text-3xl tracking-[-.03em] text-[#20352a]">What you will see before paying</h2>
                  </div>
                  <MessageCircle className="mt-1 size-6 shrink-0 text-[#31513e]" />
                </div>
                <div className="mt-2 divide-y divide-[#6b4b2e]/15">
                  {[
                    ["Selected product", "Name and approved format"],
                    ["Reason", "Why it was selected for your reviewed context"],
                    ["Use", "Directions, timing, duration and pause guidance"],
                    ["Supply", "Quantity for the agreed review period"],
                    ["Amount", "Item price and complete total"],
                  ].map(([label, value]) => (
                    <div key={label} className="grid grid-cols-[7rem_1fr] gap-3 py-3 text-sm">
                      <span className="font-semibold text-[#294738]">{label}</span>
                      <span className="text-[#69675d]">{value}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 flex items-start gap-3 border-t border-[#6b4b2e]/18 pt-4 text-sm leading-6 text-[#625f55]"><ShieldCheck className="mt-0.5 size-4 shrink-0 text-[#8b432d]" /> Your actual products are selected only after Vaidya review. You can accept, ask for a change or decline. The payment link appears only after acceptance.</p>
              </div>

              <div className="relative z-10 mt-8 border border-[#6b4b2e]/18 bg-[#fffaf0]/50 p-5 sm:p-6">
                <h2 className="font-display text-3xl tracking-[-.03em] text-[#20352a]">Seal your WhatsApp handover</h2>
                <p className="mt-2 text-sm leading-6 text-[#706b5f]">No delivery or payment details are requested on this website.</p>

                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  <Field label="Full name" id="connect-name">
                    <Input id="connect-name" autoComplete="name" value={name} onChange={(event) => setName(event.target.value)} placeholder="Your full name" className="h-12 rounded-sm bg-[#fffaf0] px-4" />
                  </Field>
                  <Field label="WhatsApp number" id="connect-phone">
                    <Input id="connect-phone" type="tel" inputMode="numeric" autoComplete="tel" value={phone} onChange={(event) => setPhone(event.target.value)} placeholder="+91 98765 43210" className="h-12 rounded-sm bg-[#fffaf0] px-4" />
                  </Field>
                  <Field label="City" id="connect-city">
                    <Input id="connect-city" autoComplete="address-level2" value={city} onChange={(event) => setCity(event.target.value)} placeholder="Your city" className="h-12 rounded-sm bg-[#fffaf0] px-4" />
                  </Field>
                </div>

                <div className="mt-6">
                  <p className="mb-3 text-sm font-semibold text-[#294d40]">Preferred language</p>
                  <RadioGroup value={language} onValueChange={setLanguage} className="grid gap-2 sm:grid-cols-3">
                    <MiniOption group="language" value="english" selected={language === "english"} label="English" />
                    <MiniOption group="language" value="hindi" selected={language === "hindi"} label="Hindi" />
                    <MiniOption group="language" value="hinglish" selected={language === "hinglish"} label="Hinglish" />
                  </RadioGroup>
                </div>

                <div className="mt-6">
                  <p className="mb-3 text-sm font-semibold text-[#294d40]">Best time to message</p>
                  <RadioGroup value={contactTime} onValueChange={setContactTime} className="grid gap-2 sm:grid-cols-3">
                    <MiniOption group="time" value="morning" selected={contactTime === "morning"} label="Morning" />
                    <MiniOption group="time" value="afternoon" selected={contactTime === "afternoon"} label="Afternoon" />
                    <MiniOption group="time" value="evening" selected={contactTime === "evening"} label="Evening" />
                  </RadioGroup>
                </div>

                <label htmlFor="connect-consent" className="mt-6 flex cursor-pointer items-start gap-3 text-sm leading-6 text-[#5d7169]">
                  <Checkbox id="connect-consent" checked={consent} onCheckedChange={(checked) => setConsent(checked === true)} className="mt-1" />
                  <span>I agree that ANJOORA may use my wellness-profile answers and contact me on WhatsApp for review, recommendations and payment communication.</span>
                </label>

                <Button size="lg" className="mt-6 h-13 w-full rounded-sm bg-[#263f32] hover:bg-[#345241]" disabled={!ready} onClick={openWhatsAppHandover}>
                  Send my folio for Vaidya review <ArrowRight />
                </Button>
                <p className="mt-3 flex items-center justify-center gap-2 text-xs text-[#6b7d75]">
                  <ShieldCheck className="size-4" /> No order is placed and no payment is collected here
                </p>
              </div>
            </div>

            <ProfileSummary plan={plan} />
          </div>
        </div>
      </section>
    </main>
  );
}

function SimpleHeader() {
  return (
    <header className="app-safe-header border-b border-[#6b4b2e]/22 bg-[#f1e5ce]">
      <div className="mx-auto flex h-20 max-w-[1220px] items-center justify-between px-5 sm:px-8">
        <BrandMark />
        <Link href="/assessment" className="inline-flex items-center gap-2 text-sm font-medium text-[#62645b] hover:text-[#20352a]">
          <ArrowLeft className="size-4" /> Back to my folio
        </Link>
      </div>
    </header>
  );
}

function Field({ label, id, children }: { label: string; id: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-[#294738]">{label}</label>
      {children}
    </div>
  );
}

function MiniOption({
  group,
  value,
  selected,
  label,
}: {
  group: string;
  value: string;
  selected: boolean;
  label: string;
}) {
  return (
    <label htmlFor={`${group}-${value}`} className={`flex cursor-pointer items-center gap-3 rounded-sm border px-4 py-3 transition ${selected ? "border-[#8b432d] bg-[#ead9bb]" : "border-[#6b4b2e]/18 bg-[#fffaf0] hover:border-[#8b432d]/55"}`}>
      <RadioGroupItem id={`${group}-${value}`} value={value} />
      <span className="font-medium text-[#294738]">{label}</span>
    </label>
  );
}

function ProfileSummary({ plan }: { plan: WellnessPlan }) {
  const selected = plan.concerns?.length ? plan.concerns : plan.concern ? [plan.concern] : [];
  return (
    <aside className="apothecary-wood border border-[#d4a55f]/28 p-6 text-[#fffaf0] lg:sticky lg:top-8">
      <p className="eyebrow text-[#d4a55f]">Apothecary folio being shared</p>
      <h2 className="font-display mt-4 text-3xl tracking-[-.03em]">{plan.formula ?? "Personal wellness direction"}</h2>
      <p className="mt-3 leading-7 text-[#fffaf0]/65">{plan.focus ?? "Complete the consultation to add your personal apothecary brief."}</p>

      <div className="mt-6 space-y-4 border-y border-[#d4a55f]/22 py-6 text-sm">
        <SummaryRow label="Concerns" value={selected.join(", ") || "Not selected"} />
        <SummaryRow label="Ayurvedic context" value={plan.ayurveda ? "Appetite, climate and energy captured" : "Not yet captured"} />
        <SummaryRow label="Daily rhythm" value={plan.dietLifestyle ? "Meals, sleep and rituals captured" : "Not yet captured"} />
        <SummaryRow label="Emotional pattern" value={plan.emotions ? "Stress response and change style captured" : "Not yet captured"} />
        <SummaryRow label="Format preference" value={plan.format ?? "Team to recommend"} />
      </div>

      <div className="mt-6 border border-[#d4a55f]/20 bg-[#fffaf0]/[.04] p-4">
        <p className="flex items-start gap-3 text-sm leading-6 text-[#fffaf0]/65">
          <Check className="mt-1 size-4 shrink-0 text-[#d4a55f]" />
          Exact products and pricing are intentionally not generated by the website.
        </p>
      </div>
    </aside>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-[.12em] text-[#d4a55f]">{label}</p>
      <p className="mt-1 capitalize leading-6 text-[#fffaf0]/70">{value}</p>
    </div>
  );
}

function languageLabel(value: string) {
  if (value === "english") return "English";
  if (value === "hindi") return "Hindi";
  return "Hinglish";
}

function sentenceCase(value: string) {
  return value ? `${value.charAt(0).toUpperCase()}${value.slice(1)}` : "Not provided";
}

function folioLabel(value?: string, fallback = "Not provided") {
  if (!value) return fallback;
  return folioLabels[value] ?? value;
}
