/**
 * Instagram configuration — official embed mode.
 *
 * PURE FRONTEND TEMPLATE: no Instagram API, no OAuth, no Meta tokens.
 * This is the default manual embed mode using public Instagram Reel URLs
 * and the official Instagram embed script.
 *
 * FUTURE CLIENT WORKFLOW:
 * - Clone template
 * - Edit this file only
 * - Replace profileUrl, handle, and Reel URLs with client's content
 * - Website updated
 *
 * No component modification required for standard customization.
 */

export interface InstagramReel {
  /** Stable identifier for React keys */
  id: string;
  /** Full Instagram Reel URL for official embed */
  url: string;
  /** Content type - future-proofed for potential post support */
  type: "reel";
}

export interface InstagramConfiguration {
  /**
   * Full Instagram profile URL. OPTIONAL: when a gym's official profile has
   * not been verified, leave it unset — the profile CTA and footer link are
   * then omitted rather than pointing at an invented or wrong account.
   */
  profileUrl?: string;
  /** Display handle with @ prefix. Optional for the same reason. */
  handle?: string;
  /** Reel embeds - render all supplied items, no artificial limit */
  items: InstagramReel[];
}

/**
 * URBAZ FITNESS CENTRE Instagram configuration.
 *
 * docs/gym-research.md INSTAGRAM.handle = "@urban_fitness_centre_"
 * (PUBLICLY_REPORTED). INSTAGRAM.profile_url is NOT_FOUND, so `profileUrl` is
 * the plain https://www.instagram.com/<handle>/ form of that documented
 * handle — no other account is guessed. OWNER QUESTION: the handle's "Urban"
 * spelling differs from the Google Business Profile name "Urbaz"; confirm it
 * is the official account.
 *
 * INSTAGRAM.items supplies 3 Reel URLs, each `status: VERIFIED_OFFICIAL`
 * (source "Official Instagram"), wired below exactly as supplied.
 *   1. Strength training session inside the gym
 *   2. Gym interior and equipment walkthrough
 *   3. Gym interior and equipment walkthrough
 */
export const instagramConfig: InstagramConfiguration = {
  profileUrl: "https://www.instagram.com/urban_fitness_centre_/",
  handle: "@urban_fitness_centre_",
  items: [
    {
      id: "reel-01",
      type: "reel",
      url: "https://www.instagram.com/reel/DC7GmlRzSb0/?utm_source=ig_web_copy_link&mdxt=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==",
    },
    {
      id: "reel-02",
      type: "reel",
      url: "https://www.instagram.com/reel/DC4L8WbzOfY/?utm_source=ig_web_copy_link&dlrf=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==",
    },
    {
      id: "reel-03",
      type: "reel",
      url: "https://www.instagram.com/reel/DC1O91kTT4Y/?utm_source=ig_web_copy_link&cplk=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==",
    },
  ],
};
