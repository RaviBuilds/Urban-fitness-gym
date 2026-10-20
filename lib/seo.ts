import type { SEOConfiguration } from "./types";

/**
 * Master SEO configuration. Consumed once, centrally, by app/layout.tsx's
 * Metadata API. Never duplicate these values inside page/section
 * components.
 *
 * URBAZ FITNESS CENTRE SEO configuration, from docs/gym-research.md
 * (SEO.title_candidate / description_candidate — INFERRED from verified
 * business data and public service listings; factual wording, no ranking
 * claims).
 *
 * canonical is a placeholder domain pending the client's real production
 * URL: the research found NO website for this business.
 */
export const seo: SEOConfiguration = {
  title: "Urbaz Fitness Centre | Gym in Vijaya Nagar Colony, Hyderabad",
  description:
    "Explore personal training, HIIT, CrossFit-style training, aerobics, strength training and cardio at Urbaz Fitness Centre in Vijaya Nagar Colony, Hyderabad. Contact the gym to confirm current hours and membership pricing.",
  canonical: "https://example.com",
  ogImage: undefined,
  robots: "index, follow",
};
