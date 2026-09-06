export const concerns = [
  {
    name: "Calm",
    short: "A steadier everyday rhythm",
    formula: "Calm Within",
    support: "a calmer daily rhythm and a more intentional pause",
    focus: ["Quiet a busy mind", "Feel less tense", "Unwind after work", "Stay steady through the day"],
  },
  {
    name: "Sleep",
    short: "A gentler wind-down",
    formula: "Night Rhythm",
    support: "a consistent wind-down and more restorative sleep routine",
    focus: ["Fall asleep more easily", "Stay asleep", "Wake feeling restored", "Create a better bedtime routine"],
  },
  {
    name: "Focus",
    short: "Clarity without the rush",
    formula: "Clear Mind",
    support: "clearer attention and sustainable mental rhythm",
    focus: ["Begin tasks with ease", "Stay with one task", "Reduce afternoon fog", "Support study or deep work"],
  },
  {
    name: "Energy",
    short: "Sustainable daily momentum",
    formula: "Daily Spark",
    support: "steady energy and a more sustainable daily pace",
    focus: ["Start the morning better", "Avoid the afternoon dip", "Support an active day", "Recover from a busy week"],
  },
  {
    name: "Digestion",
    short: "Simpler everyday comfort",
    formula: "Gentle Gut",
    support: "everyday digestive comfort and a settled mealtime rhythm",
    focus: ["Feel lighter after meals", "Build a regular routine", "Reduce occasional heaviness", "Support mindful eating"],
  },
  {
    name: "Skin",
    short: "Care from routine to ritual",
    formula: "Daily Radiance",
    support: "a consistent inside-out skin wellness ritual",
    focus: ["Support everyday glow", "Build a consistent routine", "Care for seasonal dryness", "Support skin through busy periods"],
  },
  {
    name: "Hair",
    short: "A nourishing root-care ritual",
    formula: "Root & Ritual",
    support: "a consistent, nourishing hair wellness routine",
    focus: ["Support everyday strength", "Care for a dry scalp", "Build a root-care routine", "Support hair during stressful periods"],
  },
  {
    name: "Body Comfort",
    short: "Move through the day with ease",
    formula: "Ease & Flow",
    support: "everyday comfort, mobility and recovery rituals",
    focus: ["Ease after a long day", "Support morning mobility", "Recover after activity", "Build a comfort routine"],
  },
  {
    name: "Women’s Wellness",
    short: "Support for a changing rhythm",
    formula: "Her Rhythm",
    support: "everyday comfort and a more supported monthly rhythm",
    focus: ["Support my monthly routine", "Feel steadier through changes", "Build an everyday self-care ritual", "Support restful evenings"],
  },
  {
    name: "Home & Aroma",
    short: "Shape how your space feels",
    formula: "Sanctuary Ritual",
    support: "an intentional atmosphere for rest, focus or reset",
    focus: ["Create a calmer room", "Set a focus atmosphere", "Refresh my space", "Build an evening aroma ritual"],
  },
  {
    name: "Child Care",
    short: "Thoughtful little routines",
    formula: "Little Rituals",
    support: "a simple age-appropriate everyday wellness ritual",
    focus: ["Support a bedtime routine", "Create a calmer evening", "Build a seasonal care routine", "Support everyday nourishment"],
  },
] as const;

export type ConcernName = (typeof concerns)[number]["name"];

export function getConcern(name: string) {
  return concerns.find((concern) => concern.name === name);
}
