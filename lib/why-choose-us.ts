import type { WhyChooseUsConfiguration, WhyChooseUsItem } from "./types";

/**
 * Why Choose Us reasons. Mandatory section — always present.
 *
 * CONTENT RULE: this file states REASONS — method, support, how the services
 * connect. It never repeats facility metrics, amenities, opening hours or
 * program names. Those facts have an owner already:
 *   - Section 01 (lib/about.ts) owns equipment, amenities and hours;
 *   - Section 02 (lib/services.ts) owns individual programs and classes.
 * Repeating them here would make three sections say the same thing.
 *
 * URBAZ FITNESS CENTRE — from docs/gym-research.md (WHY_CHOOSE_US.*).
 * Both reasons are PUBLICLY_REPORTED (APTS Health / LyfSkills directory
 * descriptions), not owner-approved claims; owner verification is required
 * before final-client production.
 *
 * Not used: "Clean and welcoming environment" is INFERRED from review themes
 * (not a documented facility fact), and the equipment point is already owned
 * by Section 01.
 */
export const whyChooseUs: WhyChooseUsItem[] = [
  {
    title: "Support on the floor",
    description:
      "Staff workout assistance is reported beyond one-to-one personal-training sessions.",
  },
  {
    title: "More than one way to train",
    description:
      "Coached sessions, group formats and independent strength work are offered side by side.",
  },
];

/**
 * Section 03 composition data — "The Roof".
 *
 * A single accent-colour poster: the eyebrow, one headline, and the reasons
 * above as equal columns. The headline is built only from the verified
 * reasons; it is never a superlative. A clone edits this object and the
 * array, never the composition.
 */
export const whyChooseUsConfiguration: WhyChooseUsConfiguration = {
  eyebrow: "Why choose us",
  headline: "Floor support and coached training. Under one roof.",
};
