import type { AboutConfiguration, BusinessHours } from "./types";

/**
 * Section 01 — facility / training-floor story content.
 *
 * Customizable per gym (labels, image, attributes, headline). The narrative
 * paragraph is deliberately NOT duplicated here: Section 01 renders
 * `business.description`, so the facility description has exactly one source
 * of truth.
 *
 * Source-First rules that apply to this file:
 * - A zone or attribute with `verified: false` does not render. Leave it in
 *   the file as documentation of what was checked and found absent.
 * - Never add a claim, statistic, equipment count, award or superlative here
 *   to make the section look fuller. The composition carries the density.
 *
 * URBAZ FITNESS CENTRE — populated from docs/gym-research.md (ABOUT.zones,
 * ABOUT.attributes). Everything below is PUBLICLY_REPORTED (directory
 * listings / Google Business Profile screenshot described in the research).
 * Owner verification is required before final-client production.
 *
 * Not rendered (checked, not verifiable):
 *   - A dedicated cardio zone: cardio training is a listed service, but a
 *     separate cardio zone is not specifically confirmed (research ABOUT.zones).
 *   - "Clean and welcoming": derived from review themes (INFERRED), not a
 *     documented facility fact.
 * No station counts, floor counts or equipment inventories are stated
 * because the research supplies none.
 */
export const aboutConfiguration: AboutConfiguration = {
  index: "01",
  eyebrow: "About the gym",
  headlineLines: ["The floor behind", "the brand."],
  accentLastLine: true,
  image: {
    src: "/assets/about/urbaz-fitness-vijaya-nagar-gym-interior.jpg",
    alt: "Urbaz Fitness Centre training floor in Vijaya Nagar Colony, Hyderabad",
  },
  imageLabel: "Training floor",
  frameLabel: "Facility",
  zonesLabel: "Training environment",
  attributesLabel: "Floor & support",
  scheduleLabel: "Opening schedule",
  zones: [
    {
      id: "strength-free-weights",
      label: "Strength and free weights",
      detail: "Racks and heavy equipment on the training floor.",
      icon: "strength",
      verified: true,
    },
    {
      id: "functional-training",
      label: "Functional training",
      detail: "A ceiling-mounted climbing rope for functional and CrossFit-style work.",
      icon: "equipment",
      verified: true,
    },
    // Cardio is a listed service, but a dedicated cardio zone is not
    // confirmed in the research — kept as the record, never rendered.
    {
      id: "cardio",
      label: "Cardio",
      detail: "Cardio training is listed as a service.",
      icon: "cardio",
      verified: false,
    },
  ],
  attributes: [
    { id: "workout-assistance", label: "On-floor workout assistance", verified: true },
    {
      id: "heavy-equipment",
      label: "Heavy equipment, including heavy bags and lifting accessories",
      verified: true,
    },
    { id: "wifi", label: "Free Wi-Fi", verified: true },
    { id: "restrooms", label: "Restrooms", verified: true },
    // INFERRED from repeated review themes, not a documented facility fact —
    // kept as the record of what was checked, never rendered.
    { id: "clean", label: "Clean, welcoming environment", verified: false },
  ],
  showSchedule: true,
};

/** One grouped opening window, e.g. `Mon–Fri / 05:00 AM – 11:00 PM`. */
export interface ScheduleWindow {
  label: string;
  value: string;
}

/**
 * Beyond this many distinct windows the readout stops being a compact
 * technical module and starts being a timetable, so Section 01 renders
 * nothing and the full hours stay with the location section instead.
 */
const MAX_SCHEDULE_GROUPS = 3;

function shortDay(day: string): string {
  return day.trim().slice(0, 3);
}

/**
 * Collapse a week of opening hours into consecutive day ranges that share the
 * same open/close window. Derived, never authored: the caller passes
 * `business.hours`, so Section 01 can only ever show hours that already exist
 * in lib/business.ts (and therefore in the LocalBusiness structured data) —
 * it cannot invent a schedule. Hours are taken as an explicit argument rather
 * than imported here so this module stays pure and directly testable.
 */
export function scheduleWindows(hours: BusinessHours[]): ScheduleWindow[] {
  if (hours.length === 0) return [];

  const groups: { days: string[]; open: string; close: string }[] = [];

  for (const entry of hours) {
    if (!entry.day || !entry.open || !entry.close) return [];
    const current = groups[groups.length - 1];
    if (current && current.open === entry.open && current.close === entry.close) {
      current.days.push(entry.day);
    } else {
      groups.push({ days: [entry.day], open: entry.open, close: entry.close });
    }
  }

  if (groups.length > MAX_SCHEDULE_GROUPS) return [];

  return groups.map((group) => ({
    label:
      group.days.length === 1
        ? shortDay(group.days[0])
        : `${shortDay(group.days[0])}\u2013${shortDay(group.days[group.days.length - 1])}`,
    value: `${group.open} \u2013 ${group.close}`,
  }));
}
