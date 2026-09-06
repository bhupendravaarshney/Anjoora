"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  ChevronLeft,
  Clock3,
  HeartHandshake,
  Leaf,
  LockKeyhole,
  ShieldCheck,
} from "lucide-react";

import { BrandMark } from "@/components/brand-mark";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { concerns, getConcern } from "@/lib/anjoora-data";

const durationOptions = [
  { value: "recent", label: "Recently", note: "Less than 4 weeks" },
  { value: "one-three", label: "For a little while", note: "1–3 months" },
  { value: "three-twelve", label: "For several months", note: "3–12 months" },
  { value: "long-term", label: "It is an ongoing pattern", note: "More than a year" },
];

const impactOptions = [
  { value: "light", label: "A small nudge", note: "I notice it, but it rarely interrupts my day." },
  { value: "moderate", label: "Meaningful support", note: "It affects parts of my routine most weeks." },
  { value: "high", label: "A real priority", note: "It regularly shapes how I feel or function." },
];

const appetiteOptions = [
  { value: "steady", label: "Regular and comfortable" },
  { value: "variable", label: "Changes with stress or schedule" },
  { value: "slow", label: "Slow, with occasional heaviness" },
  { value: "sharp", label: "Strong hunger; delayed meals affect me" },
];

const climateOptions = [
  { value: "cool", label: "I usually seek warmth" },
  { value: "balanced", label: "Mostly comfortable" },
  { value: "warm", label: "I often feel warm" },
  { value: "changeable", label: "Changes easily with weather" },
];

const energyPatternOptions = [
  { value: "quick-dip", label: "Quick and active, then I dip" },
  { value: "routine-led", label: "Steady when my routine is regular" },
  { value: "slow-steady", label: "Slow to start, then good endurance" },
  { value: "unpredictable", label: "Unpredictable across the day" },
];

const dietPatternOptions = [
  { value: "regular", label: "Meals are mostly on time" },
  { value: "variable", label: "Meal times often vary" },
  { value: "skipped", label: "I frequently skip or delay meals" },
  { value: "outside", label: "I eat outside or packaged foods often" },
];

const sleepPatternOptions = [
  { value: "regular", label: "Regular and generally refreshing" },
  { value: "late", label: "Late or irregular timing" },
  { value: "light", label: "Light or interrupted" },
  { value: "shifting", label: "Changes with work, travel or weekends" },
];

const ritualOptions = [
  "A 2-minute morning ritual",
  "Breathing or a quiet pause",
  "A practical meal-based change",
  "An evening wind-down",
  "A simple movement practice",
  "A weekly reset ritual",
];

const stressResponseOptions = [
  { value: "overthink", label: "My thoughts speed up or loop" },
  { value: "irritable", label: "I become irritable or impatient" },
  { value: "withdraw", label: "I withdraw or become quiet" },
  { value: "comfort", label: "I seek comfort in food or screens" },
  { value: "tense", label: "My body feels tense or restless" },
];

const emotionalNeedOptions = [
  { value: "grounding", label: "Calm and grounding" },
  { value: "structure", label: "Motivation and structure" },
  { value: "space", label: "Space to process" },
  { value: "clarity", label: "Confidence and clarity" },
  { value: "accountability", label: "Gentle accountability" },
];

const changeStyleOptions = [
  { value: "small", label: "One small change at a time" },
  { value: "plan", label: "A clear daily plan" },
  { value: "reminders", label: "Reminders and follow-up" },
  { value: "flexible", label: "Flexible options I can choose from" },
];

const formatOptions = [
  { value: "infusion", label: "Botanical infusion", note: "A warm, mindful ritual" },
  { value: "drops", label: "Concentrated drops", note: "Simple and easy to carry" },
  { value: "capsules", label: "Capsules", note: "Familiar and flavour-free" },
  { value: "guide", label: "Help me choose", note: "Recommend the easiest fit" },
];

const safetyOptions = [
  { value: "medication", label: "I take prescription medicines regularly", urgent: false },
  { value: "pregnancy", label: "I am pregnant, breastfeeding or trying to conceive", urgent: false },
  { value: "allergy", label: "I have a known herb, food or fragrance allergy", urgent: false },
  { value: "child", label: "This plan is for a child", urgent: false },
  { value: "urgent-chest", label: "New chest pain, severe breathlessness or fainting", urgent: true },
  { value: "urgent-neuro", label: "Sudden weakness, confusion or difficulty speaking", urgent: true },
  { value: "urgent-bleeding", label: "Vomiting blood, black stools or uncontrolled bleeding", urgent: true },
  { value: "none", label: "None of these apply", urgent: false },
];

const stepTitles = [
  "What should your ritual support?",
  "Describe the pattern you notice now",
  "How does your body usually respond?",
  "What rhythm do you live in?",
  "How do pressure and emotion show up?",
  "What preparation feels practical—and safe?",
];

const consultationChapters = [
  { title: "Concerns", note: "What matters now" },
  { title: "Present pattern", note: "Goal, duration, effect" },
  { title: "Body tendencies", note: "Ayurveda-informed context" },
  { title: "Daily rhythm", note: "Food, sleep, rituals" },
  { title: "Inner climate", note: "Emotion and change style" },
  { title: "Preparation", note: "Format and safety" },
];

const CONSULTATION_DRAFT_KEY = "anjoora-consultation-draft-v1";

type ConsultationDraft = {
  step: number;
  selectedConcerns: string[];
  concernName: string;
  focus: string;
  duration: string;
  impact: string;
  appetite: string;
  climate: string;
  energyPattern: string;
  dietPattern: string;
  sleepPattern: string;
  rituals: string[];
  stressResponse: string;
  emotionalNeed: string;
  changeStyle: string;
  format: string;
  safety: string[];
  name: string;
  phone: string;
  consent: boolean;
  updatedAt: number;
};

function parseConsultationDraft(raw: string): ConsultationDraft | null {
  const value = JSON.parse(raw) as Record<string, unknown>;
  if (!value || typeof value !== "object") return null;

  const asString = (item: unknown) => typeof item === "string" ? item : "";
  const asList = (item: unknown) => Array.isArray(item) ? item.filter((entry): entry is string => typeof entry === "string") : [];
  const selectedConcerns = asList(value.selectedConcerns)
    .filter((item) => Boolean(getConcern(item)))
    .slice(0, 4);
  const requestedPrimary = asString(value.concernName);
  const concernName = selectedConcerns.includes(requestedPrimary) ? requestedPrimary : selectedConcerns[0] ?? "";
  const rawStep = typeof value.step === "number" ? value.step : 0;
  const step = selectedConcerns.length > 0 ? Math.min(6, Math.max(0, Math.floor(rawStep))) : 0;

  return {
    step,
    selectedConcerns,
    concernName,
    focus: asString(value.focus),
    duration: asString(value.duration),
    impact: asString(value.impact),
    appetite: asString(value.appetite),
    climate: asString(value.climate),
    energyPattern: asString(value.energyPattern),
    dietPattern: asString(value.dietPattern),
    sleepPattern: asString(value.sleepPattern),
    rituals: asList(value.rituals),
    stressResponse: asString(value.stressResponse),
    emotionalNeed: asString(value.emotionalNeed),
    changeStyle: asString(value.changeStyle),
    format: asString(value.format),
    safety: asList(value.safety),
    name: asString(value.name),
    phone: asString(value.phone),
    consent: value.consent === true,
    updatedAt: typeof value.updatedAt === "number" ? value.updatedAt : Date.now(),
  };
}

export default function AssessmentPage() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [selectedConcerns, setSelectedConcerns] = useState<string[]>([]);
  const [concernName, setConcernName] = useState("");
  const [focus, setFocus] = useState("");
  const [duration, setDuration] = useState("");
  const [impact, setImpact] = useState("");
  const [appetite, setAppetite] = useState("");
  const [climate, setClimate] = useState("");
  const [energyPattern, setEnergyPattern] = useState("");
  const [dietPattern, setDietPattern] = useState("");
  const [sleepPattern, setSleepPattern] = useState("");
  const [rituals, setRituals] = useState<string[]>([]);
  const [stressResponse, setStressResponse] = useState("");
  const [emotionalNeed, setEmotionalNeed] = useState("");
  const [changeStyle, setChangeStyle] = useState("");
  const [format, setFormat] = useState("");
  const [safety, setSafety] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [consent, setConsent] = useState(false);
  const [draftReady, setDraftReady] = useState(false);
  const [draftStatus, setDraftStatus] = useState<"idle" | "restored" | "saved">("idle");
  const [showValidation, setShowValidation] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const requested = new URLSearchParams(window.location.search).get("concern");
      if (requested && getConcern(requested)) {
        window.localStorage.removeItem(CONSULTATION_DRAFT_KEY);
        setSelectedConcerns([requested]);
        setConcernName(requested);
        setDraftReady(true);
        return;
      }

      try {
        const raw = window.localStorage.getItem(CONSULTATION_DRAFT_KEY);
        const draft = raw ? parseConsultationDraft(raw) : null;
        if (draft) {
          setStep(draft.step);
          setSelectedConcerns(draft.selectedConcerns);
          setConcernName(draft.concernName);
          setFocus(draft.focus);
          setDuration(draft.duration);
          setImpact(draft.impact);
          setAppetite(draft.appetite);
          setClimate(draft.climate);
          setEnergyPattern(draft.energyPattern);
          setDietPattern(draft.dietPattern);
          setSleepPattern(draft.sleepPattern);
          setRituals(draft.rituals);
          setStressResponse(draft.stressResponse);
          setEmotionalNeed(draft.emotionalNeed);
          setChangeStyle(draft.changeStyle);
          setFormat(draft.format);
          setSafety(draft.safety);
          setName(draft.name);
          setPhone(draft.phone);
          setConsent(draft.consent);
          setDraftStatus("restored");
        }
      } catch {
        window.localStorage.removeItem(CONSULTATION_DRAFT_KEY);
      }
      setDraftReady(true);
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!draftReady) return;

    const timer = window.setTimeout(() => {
      const hasProgress = step > 0 || selectedConcerns.length > 0 || name.trim().length > 0 || phone.trim().length > 0;
      if (!hasProgress) {
        window.localStorage.removeItem(CONSULTATION_DRAFT_KEY);
        setDraftStatus("idle");
        return;
      }

      const draft: ConsultationDraft = {
        step,
        selectedConcerns,
        concernName,
        focus,
        duration,
        impact,
        appetite,
        climate,
        energyPattern,
        dietPattern,
        sleepPattern,
        rituals,
        stressResponse,
        emotionalNeed,
        changeStyle,
        format,
        safety,
        name,
        phone,
        consent,
        updatedAt: Date.now(),
      };
      window.localStorage.setItem(CONSULTATION_DRAFT_KEY, JSON.stringify(draft));
      setDraftStatus("saved");
    }, 300);

    return () => window.clearTimeout(timer);
  }, [
    appetite,
    changeStyle,
    climate,
    concernName,
    consent,
    dietPattern,
    draftReady,
    duration,
    emotionalNeed,
    energyPattern,
    focus,
    format,
    impact,
    name,
    phone,
    rituals,
    safety,
    selectedConcerns,
    sleepPattern,
    step,
    stressResponse,
  ]);

  const concern = useMemo(() => getConcern(concernName), [concernName]);
  const urgent = safety.some((value) => safetyOptions.find((item) => item.value === value)?.urgent);
  const needsReview = safety.some((value) => ["medication", "pregnancy", "allergy", "child"].includes(value));
  const isResult = step === 6;
  const progress = isResult ? 100 : Math.max(8, ((step + 1) / 6) * 100);

  const canContinue = () => {
    if (step === 0) return selectedConcerns.length > 0 && Boolean(concernName);
    if (step === 1) return Boolean(focus && duration && impact);
    if (step === 2) return Boolean(appetite && climate && energyPattern);
    if (step === 3) return Boolean(dietPattern && sleepPattern && rituals.length > 0);
    if (step === 4) return Boolean(stressResponse && emotionalNeed && changeStyle);
    if (step === 5) return Boolean(format && safety.length > 0);
    return false;
  };

  const goBack = () => {
    setShowValidation(false);
    setStep(Math.max(0, step - 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goForward = () => {
    if (!canContinue()) {
      setShowValidation(true);
      window.requestAnimationFrame(() => {
        document.querySelector<HTMLElement>("[data-question-missing='true']")?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      });
      return;
    }

    setShowValidation(false);
    setStep(step + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleList = (value: string, current: string[], setter: (next: string[]) => void) => {
    if (value === "none") {
      setter(current.includes("none") ? [] : ["none"]);
      return;
    }
    const withoutNone = current.filter((item) => item !== "none");
    setter(withoutNone.includes(value) ? withoutNone.filter((item) => item !== value) : [...withoutNone, value]);
  };

  const toggleConcern = (value: string) => {
    if (selectedConcerns.includes(value)) {
      const next = selectedConcerns.filter((item) => item !== value);
      setSelectedConcerns(next);
      if (concernName === value) {
        setConcernName(next[0] ?? "");
        setFocus("");
      }
      return;
    }

    if (selectedConcerns.length >= 4) return;
    const next = [...selectedConcerns, value];
    setSelectedConcerns(next);
    if (!concernName) setConcernName(value);
  };

  const choosePrimaryConcern = (value: string) => {
    if (value === concernName) return;
    setConcernName(value);
    setFocus("");
  };

  const savePlan = () => {
    if (!concern) return;
    const plan = {
      concern: concern.name,
      concerns: selectedConcerns,
      formula: concern.formula,
      support: concern.support,
      focus,
      duration,
      impact,
      ayurveda: { appetite, climate, energyPattern },
      dietLifestyle: { dietPattern, sleepPattern, rituals },
      emotions: { stressResponse, emotionalNeed, changeStyle },
      format,
      name,
      phone,
    };
    window.localStorage.setItem("anjoora-plan", JSON.stringify(plan));
    window.localStorage.removeItem(CONSULTATION_DRAFT_KEY);
    setDraftStatus("idle");
    router.push("/connect");
  };

  const contactReady = name.trim().length >= 2 && phone.replace(/\D/g, "").length >= 10 && consent;

  return (
    <main className="min-h-screen overflow-x-clip bg-[#f2e8d2]">
      <header className="app-safe-header border-b border-[#6b4b2e]/22 bg-[#f1e5ce]">
        <div className="mx-auto flex h-20 max-w-[1220px] items-center justify-between px-5 sm:px-8">
          <BrandMark />
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-[#62645b] hover:text-[#20352a]">
            <ArrowLeft className="size-4" /> Exit consultation
          </Link>
        </div>
      </header>

      <div className="hidden border-b border-[#6b4b2e]/18 bg-[#fbf5e7] lg:block">
        <div className="mx-auto flex max-w-[1220px] items-center gap-4 px-5 py-4 sm:px-8">
          <div className="flex-1">
            <Progress value={progress} className="h-1.5 bg-[#ded0b4] [&_[data-slot=progress-indicator]]:bg-[#9b5b37]" />
            {draftStatus !== "idle" && (
              <p className="mt-2 flex items-center gap-1.5 text-xs font-medium text-[#6b675d]">
                <ShieldCheck className="size-3.5 text-[#496d5b]" />
                {draftStatus === "restored" ? "Folio restored on this device" : "Saved privately on this device"}
              </p>
            )}
          </div>
          <span className="min-w-24 text-right text-sm font-medium text-[#6b675d]">
            {isResult ? "Your folio" : `Folio ${step + 1} of 6`}
          </span>
        </div>
      </div>

      <section className="apothecary-paper px-5 pb-8 pt-6 sm:px-8 sm:pb-10 sm:pt-10 lg:py-14">
        <div className={`mx-auto ${isResult ? "max-w-[960px]" : "max-w-[1180px] lg:grid lg:grid-cols-[15.5rem_minmax(0,1fr)] lg:gap-10"}`}>
          {!isResult && (
            <div className="mb-7 border-y border-[#6b4b2e]/18 bg-[#fbf5e7]/80 py-4 lg:hidden">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="eyebrow text-[#8b432d]">0{step + 1} / 06</p>
                  <p className="font-display mt-1 text-2xl leading-tight text-[#20352a]">{consultationChapters[step].title}</p>
                  <p className="mt-0.5 text-sm text-[#6b675d]">{consultationChapters[step].note.replaceAll(", ", " · ")}</p>
                </div>
                <span className="text-xs font-semibold uppercase tracking-[.12em] text-[#8b432d]">Consultation</span>
              </div>
              <div className="mt-4 h-px overflow-hidden bg-[#d8c9ab]" aria-hidden="true">
                <div className="h-full bg-[#bd8a45] transition-[width] duration-300" style={{ width: `${progress}%` }} />
              </div>
            </div>
          )}
          {!isResult && (
            <aside className="hidden lg:block">
              <div className="apothecary-wood border border-[#a9804c]/30 p-5 text-[#fffaf0] lg:sticky lg:top-28 lg:p-6">
                <p className="eyebrow text-[#d4a55f]">Consultation folio</p>
                <h2 className="font-display mt-3 text-3xl leading-tight">Your brief is taking shape.</h2>
                <p className="mt-3 text-sm leading-6 text-[#fffaf0]/56">Each answer adds context for the Vaidya’s human review.</p>
                <ol className="mt-6 hidden border-t border-[#d4a55f]/25 lg:block">
                  {consultationChapters.map((chapter, index) => (
                    <li key={chapter.title} aria-current={index === step ? "step" : undefined} className={`relative grid grid-cols-[1.6rem_1fr] gap-3 border-b border-[#d4a55f]/18 py-4 ${index === step ? "bg-[#fffaf0]/[.035] pl-3" : ""}`}>
                      {index === step && <span className="absolute inset-y-3 left-0 w-px bg-[#d4a55f]" aria-hidden="true" />}
                      <span className={`font-display ${index === step ? "text-[#e2b76f]" : index < step ? "text-[#fffaf0]/65" : "text-[#fffaf0]/58"}`}>0{index + 1}</span>
                      <span>
                        <span className={`block text-sm font-semibold ${index === step ? "text-[#fffaf0]" : index < step ? "text-[#fffaf0]/78" : "text-[#fffaf0]/62"}`}>{chapter.title}</span>
                        <span className={`mt-0.5 block text-xs leading-5 ${index === step ? "text-[#fffaf0]/62" : index < step ? "text-[#fffaf0]/52" : "text-[#fffaf0]/46"}`}>{chapter.note}</span>
                      </span>
                    </li>
                  ))}
                </ol>
                <div className="mt-5 flex items-center justify-between border-t border-[#d4a55f]/25 pt-4 text-sm lg:hidden">
                  <span className="font-semibold">{consultationChapters[step].title}</span>
                  <span className="text-[#e2b76f]">0{step + 1} / 06</span>
                </div>
              </div>
            </aside>
          )}
          <div className="min-w-0">
          {!isResult ? (
            <div className="animate-rise">
              <div className="mx-auto max-w-2xl text-left sm:text-center">
                <p className="eyebrow text-[#8b432d]">
                  0{step + 1} · {consultationChapters[step].title}
                </p>
                <h1 className="font-display mt-3 text-[clamp(2.35rem,5vw,4.25rem)] leading-[.96] tracking-[-.04em] text-[#20352a]">
                  {stepTitles[step]}
                </h1>
                <p className="mx-auto mt-3 max-w-xl text-base leading-7 text-[#66655b] sm:text-lg sm:leading-8">
                  {step === 0 && "Choose everything you want us to consider. Select up to four, then identify the one that matters most right now."}
                  {step === 1 && "Three quick answers help the Vaidya understand the present pattern without stretching the consultation into separate slides."}
                  {step === 2 && "These Ayurveda-informed observations describe tendencies only; they are not a dosha diagnosis."}
                  {step === 3 && "Your food, sleep and realistic rituals show what could genuinely fit your everyday life."}
                  {step === 4 && "Emotional patterns and change preferences help shape how your ritual should feel—not just what it may contain."}
                  {step === 5 && "Choose a practical format, then complete one safety screen before your apothecary brief is prepared."}
                </p>
                <div className="mx-auto mt-5 max-w-xl" aria-label={`Consultation step ${step + 1} of 6`}>
                  <div className="flex items-center justify-between text-[.68rem] font-bold uppercase tracking-[.16em] text-[#7c684e]">
                    <span>Step {step + 1} of 6</span>
                    <span>{consultationChapters[step].title}</span>
                  </div>
                  <div className="mt-2 h-px overflow-hidden bg-[#d8c9ab]">
                    <div className="h-full bg-[#bd8a45] transition-[width] duration-300" style={{ width: `${progress}%` }} />
                  </div>
                </div>
              </div>

              <div className="mt-7 sm:mt-8">
                {step === 0 && (
                  <>
                    <div data-question-missing={showValidation && (!selectedConcerns.length || !concernName) ? "true" : undefined} className={`grid gap-3 sm:grid-cols-2 ${showValidation && (!selectedConcerns.length || !concernName) ? "outline outline-1 outline-offset-4 outline-[#a66035]/65" : ""}`}>
                      {concerns.map((item, index) => {
                        const selected = selectedConcerns.includes(item.name);
                        const unavailable = !selected && selectedConcerns.length >= 4;
                        return (
                          <label
                            key={item.name}
                            htmlFor={`concern-${index}`}
                            className={`relative min-h-16 rounded-[2rem] border px-5 py-4 transition-[border-color,background-color] duration-150 focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-[#35654f] ${selected ? "cursor-pointer border-[#47765f] bg-[#dbe8dc]" : unavailable ? "cursor-not-allowed border-[#315b48]/10 bg-[#fbf5e7]/55 opacity-55" : "cursor-pointer border-[#315b48]/20 bg-[#fbf5e7] hover:border-[#35654f]/60 hover:bg-[#edf4ec]"}`}
                          >
                            <div className="flex items-start gap-4">
                              <Checkbox
                                id={`concern-${index}`}
                                checked={selected}
                                disabled={unavailable}
                                onCheckedChange={() => toggleConcern(item.name)}
                                className="mt-1"
                              />
                              <span className="min-w-0 flex-1">
                                <span className="flex flex-wrap items-center gap-2">
                                  <span className="font-display block text-2xl tracking-[-.025em] text-[#20352a]">{item.name}</span>
                                  {selected && concernName === item.name && (
                                    <span className="rounded-sm bg-[#263f32] px-2.5 py-1 text-[.68rem] font-bold uppercase tracking-[.12em] text-[#e3bd7d]">Primary</span>
                                  )}
                                </span>
                                <span className="mt-1 block text-sm leading-6 text-[#6c685e]">{item.short}</span>
                              </span>
                            </div>
                          </label>
                        );
                      })}
                    </div>
                    {showValidation && (!selectedConcerns.length || !concernName) && (
                      <p role="alert" className="mt-4 text-sm font-semibold text-[#8b432d]">Please select at least one concern before continuing.</p>
                    )}

                    {selectedConcerns.length > 0 && (
                      <div className="folio-frame mt-6 bg-[#f8edd8] p-5 sm:p-6">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <div>
                            <p className="font-semibold text-[#294738]">
                              {selectedConcerns.length} {selectedConcerns.length === 1 ? "concern" : "concerns"} selected
                            </p>
                            <p className="mt-1 text-sm leading-6 text-[#706b5f]">
                              {selectedConcerns.length === 1
                                ? "You can add more concerns, or continue with this priority."
                                : "Which concern should guide the first recommendation?"}
                            </p>
                          </div>
                          <span className="rounded-sm border border-[#8b432d]/20 bg-[#ead9bb] px-3 py-1.5 text-xs font-semibold text-[#70422c]">
                            Up to 4
                          </span>
                        </div>

                        {selectedConcerns.length > 1 && (
                          <RadioGroup value={concernName} onValueChange={choosePrimaryConcern} className="mt-5 grid gap-2 sm:grid-cols-2">
                            {selectedConcerns.map((name, index) => (
                              <label
                                key={name}
                                htmlFor={`primary-concern-${index}`}
                                className={`flex min-h-14 cursor-pointer items-center gap-3 rounded-full border px-5 py-3 transition-[border-color,background-color] duration-150 focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-[#35654f] ${concernName === name ? "border-[#47765f] bg-[#dbe8dc]" : "border-[#315b48]/18 bg-[#fbf5e7] hover:border-[#35654f]/55 hover:bg-[#edf4ec]"}`}
                              >
                                <RadioGroupItem id={`primary-concern-${index}`} value={name} />
                                <span className="font-medium text-[#294738]">{name}</span>
                              </label>
                            ))}
                          </RadioGroup>
                        )}
                      </div>
                    )}

                    {selectedConcerns.length >= 4 && (
                      <p className="mt-4 text-center text-sm font-medium text-[#8b432d]">
                        Four concerns selected. You can remove one to choose another.
                      </p>
                    )}
                  </>
                )}

                {step === 1 && concern && (
                  <div className="space-y-4">
                    <QuestionBlock title="Your main goal" note="What would make the biggest difference?" invalid={showValidation && !focus}>
                      <CompactOptionGroup value={focus} onChange={setFocus} name="focus" options={concern.focus.map((label) => ({ value: label, label }))} />
                    </QuestionBlock>
                    <QuestionBlock title="Duration" note="How long have you noticed this pattern?" invalid={showValidation && !duration}>
                      <CompactOptionGroup value={duration} onChange={setDuration} name="duration" options={durationOptions} />
                    </QuestionBlock>
                    <QuestionBlock title="Daily effect" note="How much support are you looking for?" invalid={showValidation && !impact}>
                      <CompactOptionGroup value={impact} onChange={setImpact} name="impact" options={impactOptions} />
                    </QuestionBlock>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-4">
                    <QuestionBlock title="Appetite and digestion" note="Which feels closest most weeks?" invalid={showValidation && !appetite}>
                      <CompactOptionGroup value={appetite} onChange={setAppetite} name="appetite" options={appetiteOptions} />
                    </QuestionBlock>
                    <QuestionBlock title="Body climate" note="How do you usually experience temperature?" invalid={showValidation && !climate}>
                      <CompactOptionGroup value={climate} onChange={setClimate} name="climate" options={climateOptions} />
                    </QuestionBlock>
                    <QuestionBlock title="Energy pattern" note="Think about the shape of your usual day." invalid={showValidation && !energyPattern}>
                      <CompactOptionGroup value={energyPattern} onChange={setEnergyPattern} name="energy" options={energyPatternOptions} />
                    </QuestionBlock>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-4">
                    <QuestionBlock title="Meal rhythm" note="Choose the pattern that is most typical." invalid={showValidation && !dietPattern}>
                      <CompactOptionGroup value={dietPattern} onChange={setDietPattern} name="diet" options={dietPatternOptions} />
                    </QuestionBlock>
                    <QuestionBlock title="Sleep rhythm" note="Think about timing as well as quality." invalid={showValidation && !sleepPattern}>
                      <CompactOptionGroup value={sleepPattern} onChange={setSleepPattern} name="sleep" options={sleepPatternOptions} />
                    </QuestionBlock>
                    <QuestionBlock title="Rituals you would realistically follow" note="Select one or more." invalid={showValidation && rituals.length === 0}>
                      <div className="grid gap-2 sm:grid-cols-2">
                        {ritualOptions.map((item, index) => (
                          <label key={item} htmlFor={`ritual-${index}`} className={`flex min-h-16 cursor-pointer items-center gap-3 rounded-full border px-5 py-3 transition-[border-color,background-color] duration-150 focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-[#35654f] ${rituals.includes(item) ? "border-[#47765f] bg-[#dbe8dc]" : "border-[#315b48]/18 bg-[#fffaf0] hover:border-[#35654f]/55 hover:bg-[#edf4ec]"}`}>
                            <Checkbox id={`ritual-${index}`} checked={rituals.includes(item)} onCheckedChange={() => toggleList(item, rituals, setRituals)} />
                            <span className="font-medium leading-6 text-[#294738]">{item}</span>
                          </label>
                        ))}
                      </div>
                    </QuestionBlock>
                  </div>
                )}

                {step === 4 && (
                  <div className="space-y-4">
                    <QuestionBlock title="Your usual stress response" note="What tends to happen first?" invalid={showValidation && !stressResponse}>
                      <CompactOptionGroup value={stressResponse} onChange={setStressResponse} name="stress" options={stressResponseOptions} />
                    </QuestionBlock>
                    <QuestionBlock title="What you need emotionally" note="Choose the support that feels most useful now." invalid={showValidation && !emotionalNeed}>
                      <CompactOptionGroup value={emotionalNeed} onChange={setEmotionalNeed} name="emotion" options={emotionalNeedOptions} />
                    </QuestionBlock>
                    <QuestionBlock title="Your change style" note="How are you most likely to stay consistent?" invalid={showValidation && !changeStyle}>
                      <CompactOptionGroup value={changeStyle} onChange={setChangeStyle} name="change" options={changeStyleOptions} />
                    </QuestionBlock>
                  </div>
                )}

                {step === 5 && (
                  <div className="space-y-4">
                    <QuestionBlock title="Preferred product format" note="The team may refine this after reviewing your full profile." invalid={showValidation && !format}>
                      <CompactOptionGroup value={format} onChange={setFormat} name="format" options={formatOptions} />
                    </QuestionBlock>
                    <QuestionBlock title="Safety check" note="Select everything that applies." invalid={showValidation && safety.length === 0}>
                      <div className="space-y-2">
                        {safetyOptions.map((item) => (
                          <label key={item.value} htmlFor={`safety-${item.value}`} className={`flex min-h-14 cursor-pointer items-start gap-4 rounded-[2rem] border px-5 py-3 transition-[border-color,background-color] duration-150 focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-[#35654f] ${safety.includes(item.value) ? (item.urgent ? "border-[#b83f37] bg-[#fff0ec]" : "border-[#47765f] bg-[#dbe8dc]") : "border-[#315b48]/18 bg-[#fffaf0] hover:border-[#35654f]/55 hover:bg-[#edf4ec]"}`}>
                            <Checkbox id={`safety-${item.value}`} checked={safety.includes(item.value)} onCheckedChange={() => toggleList(item.value, safety, setSafety)} className="mt-1" />
                            <span className="leading-7 text-[#294738]">{item.label}</span>
                          </label>
                        ))}
                      </div>
                      <p className="flex items-start gap-2 pt-4 text-sm leading-6 text-[#716c61]">
                        <LockKeyhole className="mt-1 size-4 shrink-0" /> This information guides review and the safest next step.
                      </p>
                    </QuestionBlock>
                  </div>
                )}
              </div>

              <div className="sticky bottom-0 z-30 mt-8 border-t border-[#6b4b2e]/22 bg-[#fbf5e7]/96 shadow-[0_-8px_24px_rgba(42,29,19,.06)] backdrop-blur-sm [padding-bottom:env(safe-area-inset-bottom)]">
                <div className="flex items-center justify-between gap-3 px-3 py-3 sm:px-5">
                <Button variant="ghost" size="lg" className="h-12 rounded-sm px-3 text-[#62655b]" onClick={goBack} disabled={step === 0}>
                  <ChevronLeft /> Back
                </Button>
                <Button size="lg" aria-disabled={!canContinue()} className={`h-12 rounded-sm bg-[#263f32] px-5 text-[#fffaf0] hover:bg-[#345241] sm:px-7 ${!canContinue() ? "opacity-65" : ""}`} onClick={goForward}>
                  <span className="sm:hidden">{step === 5 ? "Prepare folio" : "Continue"}</span>
                  <span className="hidden sm:inline">{step === 5 ? "Prepare my apothecary brief" : `Continue to ${consultationChapters[step + 1].title}`}</span>
                  <ArrowRight />
                </Button>
                </div>
              </div>
            </div>
          ) : (
            <Result
              concern={concern}
              additionalConcerns={selectedConcerns.filter((item) => item !== concernName)}
              focus={focus}
              appetite={appetite}
              climate={climate}
              energyPattern={energyPattern}
              dietPattern={dietPattern}
              sleepPattern={sleepPattern}
              rituals={rituals}
              stressResponse={stressResponse}
              emotionalNeed={emotionalNeed}
              changeStyle={changeStyle}
              format={format}
              urgent={urgent}
              needsReview={needsReview}
              name={name}
              setName={setName}
              phone={phone}
              setPhone={setPhone}
              consent={consent}
              setConsent={setConsent}
              contactReady={contactReady}
              savePlan={savePlan}
              restart={() => setStep(5)}
            />
          )}
          </div>
        </div>
      </section>
    </main>
  );
}

function QuestionBlock({
  title,
  note,
  invalid = false,
  children,
}: {
  title: string;
  note: string;
  invalid?: boolean;
  children: React.ReactNode;
}) {
  const descriptionId = `question-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-description`;
  return (
    <fieldset data-question-missing={invalid ? "true" : undefined} aria-describedby={descriptionId} className={`folio-frame bg-[#fbf5e7] p-5 transition-[border-color,background-color] duration-150 sm:p-6 ${invalid ? "border-[#a66035] bg-[#fff8e9]" : ""}`}>
      <legend className="sr-only">{title}</legend>
      <h2 className="font-display relative z-10 text-2xl tracking-[-.025em] text-[#20352a] sm:text-3xl">{title}</h2>
      <p id={descriptionId} className="relative z-10 mt-1 text-sm leading-6 text-[#706b5f]">{note}</p>
      <div className="relative z-10 mt-5">{children}</div>
      {invalid && <p role="alert" className="relative z-10 mt-4 text-sm font-semibold text-[#8b432d]">Please select an answer before continuing.</p>}
    </fieldset>
  );
}

function CompactOptionGroup({
  value,
  onChange,
  name,
  options,
}: {
  value: string;
  onChange: (value: string) => void;
  name: string;
  options: readonly { value: string; label: string; note?: string }[];
}) {
  return (
    <RadioGroup value={value} onValueChange={onChange} className="grid gap-2 sm:grid-cols-2">
      {options.map((option, index) => (
        <label key={option.value} htmlFor={`${name}-${index}`} className={`flex min-h-16 cursor-pointer items-start gap-3 rounded-[2rem] border px-5 py-3 transition-[border-color,background-color] duration-150 focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-[#35654f] ${value === option.value ? "border-[#47765f] bg-[#dbe8dc]" : "border-[#315b48]/22 bg-[#fffaf0] hover:border-[#35654f]/60 hover:bg-[#edf4ec]"}`}>
          <RadioGroupItem id={`${name}-${index}`} value={option.value} className="mt-1 border-[#9b7444] text-[#263f32] data-[state=checked]:border-[#a8793f] data-[state=checked]:bg-[#f4e5c8]" />
          <span>
            <span className={`block leading-6 text-[#294738] ${value === option.value ? "font-semibold" : "font-medium"}`}>{option.label}</span>
            {option.note && <span className="mt-1 block text-sm leading-6 text-[#706b5f]">{option.note}</span>}
          </span>
        </label>
      ))}
    </RadioGroup>
  );
}

function Result({
  concern,
  additionalConcerns,
  focus,
  appetite,
  climate,
  energyPattern,
  dietPattern,
  sleepPattern,
  rituals,
  stressResponse,
  emotionalNeed,
  changeStyle,
  format,
  urgent,
  needsReview,
  name,
  setName,
  phone,
  setPhone,
  consent,
  setConsent,
  contactReady,
  savePlan,
  restart,
}: {
  concern: ReturnType<typeof getConcern>;
  additionalConcerns: string[];
  focus: string;
  appetite: string;
  climate: string;
  energyPattern: string;
  dietPattern: string;
  sleepPattern: string;
  rituals: string[];
  stressResponse: string;
  emotionalNeed: string;
  changeStyle: string;
  format: string;
  urgent: boolean;
  needsReview: boolean;
  name: string;
  setName: (value: string) => void;
  phone: string;
  setPhone: (value: string) => void;
  consent: boolean;
  setConsent: (value: boolean) => void;
  contactReady: boolean;
  savePlan: () => void;
  restart: () => void;
}) {
  if (urgent) {
    return (
      <div className="animate-rise border border-[#b83f37]/25 bg-[#fff8f4] p-7 text-center shadow-[0_24px_70px_rgba(42,29,19,.1)] sm:p-12">
        <span className="mx-auto grid size-16 place-items-center rounded-full bg-[#b83f37] text-white"><AlertTriangle className="size-7" /></span>
        <p className="eyebrow mt-7 text-[#a5332d]">Please pause this wellness consultation</p>
        <h1 className="font-display mx-auto mt-4 max-w-2xl text-5xl leading-[.96] tracking-[-.045em] text-[#20352a]">Your answer needs timely medical attention.</h1>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-[#5d6f68]">
          ANJOORA should not recommend a wellness product for the symptom you selected. If the symptom is current or severe, contact local emergency services or seek urgent medical assessment now.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" className="h-13 rounded-sm px-7"><a href="tel:112">Call emergency services: 112</a></Button>
          <Button variant="outline" size="lg" className="h-13 rounded-sm border-[#20352a]/25 px-7" onClick={restart}>Review my answer</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-rise">
      <div className="text-center">
        <span className="mx-auto grid size-14 place-items-center rounded-full border border-[#8b432d]/40 bg-[#ead9bb] text-[#8b432d]"><BookOpen className="size-6" /></span>
        <p className="eyebrow mt-6 text-[#8b432d]">Your apothecary brief</p>
        <h1 className="font-display mt-4 text-[clamp(3rem,7vw,5.6rem)] leading-[.9] tracking-[-.052em] text-[#20352a]">
          {concern?.formula}
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-[#66655b]">
          A preliminary direction for supporting {concern?.support}, ready for the Vaidya’s review.
        </p>
        {additionalConcerns.length > 0 && (
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#706b5f]">
            We’ll begin with {concern?.name}, while keeping {formatConcernList(additionalConcerns)} in view as {additionalConcerns.length === 1 ? "a linked concern" : "linked concerns"}.
          </p>
        )}
      </div>

      <div className="mt-9 overflow-hidden border border-[#6b4b2e]/25 bg-[#fbf5e7] shadow-[0_25px_70px_rgba(42,29,19,.1)]">
        <div className="apothecary-wood grid p-7 text-[#fffaf0] sm:grid-cols-[1fr_auto] sm:items-end sm:p-9">
          <div>
            <p className="eyebrow text-[#d4a55f]">The Vaidya’s reading starts here</p>
            <h2 className="font-display mt-3 text-3xl tracking-[-.03em] sm:text-4xl">A complete brief around your {concern?.name.toLowerCase()} priority</h2>
          </div>
          <span className="mt-5 inline-flex w-fit items-center gap-2 border border-[#d4a55f]/28 bg-[#fffaf0]/5 px-4 py-2 text-sm text-[#fffaf0]/70 sm:mt-0"><Clock3 className="size-4" /> Human-reviewed next</span>
        </div>
        <div className="grid gap-8 p-7 sm:p-9 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <div className="grid gap-3 sm:grid-cols-2">
              <ProfileCard
                title="Wellness priority"
                copy={`${focus}${additionalConcerns.length > 0 ? ` · Also: ${formatConcernList(additionalConcerns)}` : ""}`}
              />
              <ProfileCard
                title="Ayurveda-informed tendencies"
                copy={`${findOptionLabel(appetiteOptions, appetite)} · ${findOptionLabel(climateOptions, climate)} · ${findOptionLabel(energyPatternOptions, energyPattern)}`}
              />
              <ProfileCard
                title="Diet, lifestyle & rituals"
                copy={`${findOptionLabel(dietPatternOptions, dietPattern)} · ${findOptionLabel(sleepPatternOptions, sleepPattern)} · ${rituals.length} preferred ${rituals.length === 1 ? "ritual" : "rituals"} · Format: ${format === "guide" ? "team to recommend" : format}`}
              />
              <ProfileCard
                title="Emotions & psychology"
                copy={`${findOptionLabel(stressResponseOptions, stressResponse)} · Needs ${findOptionLabel(emotionalNeedOptions, emotionalNeed).toLowerCase()} · Prefers ${findOptionLabel(changeStyleOptions, changeStyle).toLowerCase()}`}
              />
            </div>
            <div className="mt-7 border border-[#6b4b2e]/16 bg-[#ead9bb] p-5">
              <div className="flex items-start gap-3">
                <Leaf className="mt-1 size-5 shrink-0 text-[#8b432d]" />
                <div>
                  <p className="font-semibold text-[#294738]">What happens at the next table</p>
                  <p className="mt-1 text-sm leading-6 text-[#69675d]">
                    The Vaidya reviews this folio, then shares the product list, purpose, directions, quantity and total amount on WhatsApp. A payment link follows only after you accept; preparation begins only after payment confirmation.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="border border-[#6b4b2e]/20 bg-[#f1e5ce] p-6">
            <p className="eyebrow text-[#8b432d]">Send the folio for review</p>
            <p className="mt-3 leading-7 text-[#66645a]">
              {needsReview
                ? "Your safety context needs human review before any product list or payment link is shared."
                : "Add your details so the ANJOORA team can review this profile and continue the conversation."}
            </p>
            <div className="mt-5 space-y-4">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-semibold text-[#294738]">First name</label>
                <Input id="name" autoComplete="given-name" value={name} onChange={(event) => setName(event.target.value)} placeholder="Your name" className="h-12 rounded-sm border-[#6b4b2e]/25 bg-[#fffaf0] px-4" />
              </div>
              <div>
                <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-[#294738]">Mobile number</label>
                <Input id="phone" type="tel" inputMode="numeric" autoComplete="tel" value={phone} onChange={(event) => setPhone(event.target.value)} placeholder="+91 98765 43210" className="h-12 rounded-sm border-[#6b4b2e]/25 bg-[#fffaf0] px-4" />
              </div>
              <label htmlFor="consent" className="flex cursor-pointer items-start gap-3 text-sm leading-6 text-[#5d7169]">
                <Checkbox id="consent" checked={consent} onCheckedChange={(checked) => setConsent(checked === true)} className="mt-1" />
                <span>I agree that ANJOORA may use these answers and contact me on WhatsApp about this apothecary brief.</span>
              </label>
              <Button size="lg" className="h-13 w-full rounded-sm bg-[#263f32] hover:bg-[#345241]" disabled={!contactReady} onClick={savePlan}>
                {needsReview ? "Send for Vaidya safety review" : "Send my brief for Vaidya review"} <ArrowRight />
              </Button>
              <p className="flex items-center justify-center gap-2 text-xs text-[#6b7d75]"><ShieldCheck className="size-4" /> No purchase or payment on the website</p>
            </div>
          </div>
        </div>
      </div>

      <button type="button" onClick={restart} className="mx-auto mt-7 flex items-center gap-2 text-sm font-medium text-[#69675e] hover:text-[#20352a]"><ChevronLeft className="size-4" /> Review safety answers</button>
      <p className="mx-auto mt-5 flex max-w-2xl items-start justify-center gap-2 text-center text-sm leading-6 text-[#6c7d76]"><HeartHandshake className="mt-1 size-4 shrink-0" /> This is a wellness direction, not a diagnosis or treatment plan.</p>
    </div>
  );
}

function formatConcernList(items: string[]) {
  if (items.length <= 1) return items[0] ?? "";
  if (items.length === 2) return `${items[0]} and ${items[1]}`;
  return `${items.slice(0, -1).join(", ")} and ${items.at(-1)}`;
}

function findOptionLabel(
  options: readonly { value: string; label: string }[],
  value: string,
) {
  return options.find((option) => option.value === value)?.label ?? value;
}

function ProfileCard({ title, copy }: { title: string; copy: string }) {
  return (
    <div className="border border-[#6b4b2e]/16 bg-[#fffaf0] p-4">
      <p className="text-xs font-bold uppercase tracking-[.12em] text-[#8b432d]">{title}</p>
      <p className="mt-2 text-sm leading-6 text-[#62645a]">{copy}</p>
    </div>
  );
}
