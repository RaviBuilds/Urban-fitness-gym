import type { Service } from "./types";

/**
 * Master services data. Only services with verified:true render on the live
 * site. A service can exist here and remain disabled — this is the direct
 * mechanism that prevents an unverified/discontinued program from silently
 * appearing on a gym website.
 *
 * URBAZ FITNESS CENTRE — all 7 programs from docs/gym-research.md
 * (PROGRAMS.*). Every entry is PUBLICLY_REPORTED (APTS Health / LyfSkills
 * listings); owner verification of current availability is required before
 * final-client production. No schedule, trainer, outcome or health claim is
 * added. "CrossFit-style" is deliberately worded: no official CrossFit
 * affiliation is implied.
 *
 * STABLE IDs: `strength-training`, `conditioning` and `personal-training`
 * are cross-referenced by id from the frozen educational module
 * lib/training-intelligence.ts (`programId`). They must not be renamed.
 * Here `conditioning` is carried by HIIT.
 *
 * Images are placeholders occupying their final filenames
 * (docs/MASTER-GYM-ASSET-CONTRACT.md); the operator replaces the files
 * in place with real Urbaz Fitness Centre photography — no code change.
 */
const ASSET = "/assets/programs/urbaz-fitness-vijaya-nagar-program";

export const services: Service[] = [
  {
    id: "strength-training",
    name: "Strength and Weight Training",
    description:
      "Strength, weight and bodybuilding training on racks and heavy equipment.",
    icon: "strength",
    image: `${ASSET}-strength-weight-training.jpg`,
    verified: true,
    ctaLabel: "Ask about strength training",
    ctaHref: undefined,
  },
  {
    id: "personal-training",
    name: "Personal Training",
    description:
      "One-to-one training with your own trainer, built around your goals.",
    icon: "coaching",
    image: `${ASSET}-personal-training.jpg`,
    verified: true,
    ctaLabel: "Ask about personal training",
    ctaHref: undefined,
  },
  {
    id: "conditioning",
    name: "High-Intensity Interval Training (HIIT)",
    description: "HIIT exercise classes for conditioning. Ask the gym for current timings.",
    icon: "equipment",
    image: `${ASSET}-hiit.jpg`,
    verified: true,
    ctaLabel: "Ask about HIIT",
    ctaHref: undefined,
  },
  {
    id: "crossfit-style",
    name: "CrossFit-style Training",
    description: "Functional, CrossFit-style training sessions for strength and conditioning.",
    icon: "equipment",
    image: `${ASSET}-crossfit-style.jpg`,
    verified: true,
    ctaLabel: "Ask about functional training",
    ctaHref: undefined,
  },
  {
    id: "aerobics",
    name: "Aerobics",
    description: "Group aerobics for general conditioning. Ask the gym for class timings.",
    icon: "cardio",
    image: `${ASSET}-aerobics.jpg`,
    verified: true,
    ctaLabel: "Ask about aerobics",
    ctaHref: undefined,
  },
  {
    id: "cardio-training",
    name: "Cardio Training",
    description: "Cardio training alongside strength work on the gym floor.",
    icon: "cardio",
    image: `${ASSET}-cardio-training.jpg`,
    verified: true,
    ctaLabel: "Ask about cardio training",
    ctaHref: undefined,
  },
  {
    id: "weight-loss",
    name: "Weight-Loss Programs / Fat to Fit",
    description: "Weight-loss and fat-loss programs, listed publicly as Fat to Fit.",
    icon: "coaching",
    image: `${ASSET}-weight-loss.jpg`,
    verified: true,
    ctaLabel: "Ask about weight-loss programs",
    ctaHref: undefined,
  },
];
