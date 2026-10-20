import type { SocialConfiguration } from "./types";

/**
 * Master social/Instagram data. Curated content only — no live authenticated
 * Instagram API dependency in Factory v1. An empty posts array is valid and
 * renders a "Follow us on Instagram" fallback CTA, never a broken widget.
 *
 * NOTE: `social` below is not currently imported by any component — the live
 * Instagram section (components/sections/Instagram.tsx) reads from
 * lib/instagram.ts. See docs/gym-customization-manifest.md §9.1
 * ("lib/social.ts is orphaned"). Left in sync with lib/instagram.ts for data
 * consistency in case a future section consumes this module; not a live
 * rendering path. `socialLinks` further down IS live (footer icons).
 *
 * URBAZ FITNESS CENTRE — docs/gym-research.md INSTAGRAM.handle is
 * "@urban_fitness_centre_" (PUBLICLY_REPORTED); the profile URL is the plain
 * instagram.com form of that handle (see lib/instagram.ts).
 */
export const social: SocialConfiguration = {
  instagramHandle: "@urban_fitness_centre_",
  instagramUrl: "https://www.instagram.com/urban_fitness_centre_/",
  posts: [],
};

/**
 * Footer social icons (Facebook, Justdial, X) shown next to Instagram.
 *
 * SOURCE-FIRST: no handle or username is invented.
 *  - Justdial: docs/gym-research.md SOURCE_LOG documents this gym's Justdial
 *    listing (under the alternative name "Urban Fitness Centre"), so that
 *    exact URL is used.
 *  - Facebook: CONTACT.facebook_url is NOT_FOUND — the icon keeps the
 *    network homepage until the owner confirms the official page.
 *  - X: no profile supplied; network homepage.
 *
 * Instagram is configured separately in lib/instagram.ts (it also drives the
 * Reel embeds) and is not repeated here.
 */
export interface SocialLink {
  id: "facebook" | "justdial" | "x";
  /** Accessible name for the icon, e.g. "Facebook". */
  label: string;
  /** Profile URL. Defaults to the network homepage until the gym's own is set. */
  href: string;
}

export const socialLinks: SocialLink[] = [
  { id: "facebook", label: "Facebook", href: "https://www.facebook.com" },
  { id: "justdial", label: "Justdial", href: "https://www.justdial.com/Hyderabad/Urban-Fitness-Centre-Above-Axis-Bank-Viency-Centre-Vijay-Nagar-Colony/040PXX40-XX40-220106193940-D7U2_BZDET" },
  { id: "x", label: "X", href: "https://x.com" },
];
