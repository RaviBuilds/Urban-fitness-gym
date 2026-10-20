import type { GoogleReviews } from "./types";

/**
 * Master Google Reviews data. Manually curated, never scraped at runtime.
 * Do not invent review content, reviewer names, ratings, or counts.
 *
 * URBAZ FITNESS CENTRE — rating/reviewCount are PUBLICLY_REPORTED (Google
 * Business Profile screenshot described in docs/gym-research.md REVIEWS:
 * 4.8 / 68 reviews, read October 2026). Owner / operator should re-read the
 * live Google count before launch.
 *
 * The three reviews below are REVIEWS.selected_reviews, PUBLICLY_REPORTED,
 * reproduced exactly as supplied. The research states they are AGGREGATED
 * review wording: the original reviewer names and review URLs were NOT
 * supplied. No reviewer name is invented, so each is attributed neutrally
 * ("Public review"), and none carries a star rating. OWNER / SOURCE-PLATFORM
 * VERIFICATION AND CONSENT REQUIRED before final-client production.
 *
 * `tagline` restates the research's sentiment themes (trainer support,
 * cleanliness, equipment) — it is not a quotation.
 *
 * REVIEWS.google_profile_url is NOT_FOUND — never invent one and never
 * substitute a directory URL for the Google review CTA.
 * googleBusinessProfileUrl uses a Google Maps search-by-name-and-address query
 * (the same safe fallback as lib/business.ts mapUrl). No Place ID or profile
 * slug is invented.
 */
export const googleReviews: GoogleReviews = {
  rating: 4.8,
  reviewCount: 68,
  tagline:
    "Reviewers mention trainer support, cleanliness and equipment.",
  googleBusinessProfileUrl:
    "https://www.google.com/maps/search/?api=1&query=Urbaz+Fitness+Centre+Viency+Centre+Above+Axis+Bank+Vijaya+Nagar+Colony+Hyderabad+500057",
  // Fill these two once the owner supplies the Google "write a review" link
  // (Google Business Profile -> Get more reviews -> share link). The footer
  // trust card then adds a "Write a review" link and, if reviewQrSrc points at
  // a QR image of that link, the scan-to-review QR. Left unset = not rendered.
  reviewUrl: undefined,
  reviewQrSrc: undefined,
  reviews: [
    {
      name: "Sandeep Mahindraker",
      text: "Excellent gym and superb trainer Akram sir with all his dedication and help I have lost 8 kgs in a month Akram sir's training is next level and very friendly nature and humble person and it's worth every penny every one should must visit this gym 🏋🚴💪",
    },
    {
      name: "Haniya Fatima",
      text: "Gym is very nice n very well maintained, if u r a beginner then its even more good , trainer guides u very well, soo friendly n humble nature . After joining guaranteed u may see results , best gym fr ladies especially around mallepally n masab tank",
    },
    {
      name: "Tareesh Muluguru",
      text: "It is a goood fitness centre and gym and the trainers are also well experienced and help us throughout the workout and the prices for the packages are at a reasonable rate too.",
    },
     {
      name: "Mohd Ghouse",
      text: "Best trainer SYED ABRAR💪With very well knowledge✴️ Very friendly and humble. You ll go again once you visit URBAN FITNESS CENTRE. You're search of good gym ll end here",
    },
  ],
};
