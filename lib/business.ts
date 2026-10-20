import type { Business } from "./types";

/**
 * Master business data. Public business information only — never put API
 * keys, tokens, or server credentials here.
 *
 * URBAZ FITNESS CENTRE (Vijaya Nagar Colony, Hyderabad) — populated from
 * docs/gym-research.md. VERIFIED_OFFICIAL: name, locality, city, state.
 * PUBLICLY_REPORTED (owner verification required before final-client
 * production): phone, address line, landmark, postal code, description.
 * INFERRED: WhatsApp capability on the listed mobile number.
 *
 * NAME: Google Business Profile says "Urbaz Fitness Centre"; Justdial and the
 * Instagram handle say "Urban". The GBP spelling is used as the working
 * canonical name. The supplied logo reads "Urban Fitness Centre" and is kept
 * exactly as supplied. OWNER MUST CONFIRM THE OFFICIAL SPELLING.
 *
 * TAGLINE: NOT_FOUND in research. The line below is composed only from the
 * publicly listed service categories (strength, cardio, coaching); it is not
 * a claim. Replace if the owner supplies an official tagline.
 *
 * HOURS — DOCUMENTED SOURCE CONFLICT (not silently resolved):
 *   APTS Health and LyfSkills report Mon–Sat 5:00 AM – 11:00 PM; Justdial
 *   reports 6:00 AM – 10:30 PM. The research's provisional default
 *   (05:00 AM – 11:00 PM) is applied. Sunday is reported closed (empty
 *   open/close renders "Closed"). Gym management must confirm.
 *
 * EMAIL / WEBSITE: not found. `email` is omitted.
 *
 * mapUrl: no verified Google Maps / Place URL exists in the research. This is
 * a standard Google Maps search-by-name-and-address URL built from the
 * researched address text. No latitude, longitude or Place ID is invented.
 */
export const business: Business = {
  name: "Urbaz Fitness Centre",
  tagline: "Strength, cardio and coaching.",
  description:
    "Urbaz Fitness Centre is a single-location gym in Vijaya Nagar Colony, Hyderabad, listed for strength and weight training, cardio, personal training, HIIT, CrossFit-style training, aerobics and weight-loss programs.",
  phone: "+919398822384",
  whatsapp: {
    number: "+919398822384",
    message: "Hi, I'd like to know more about membership and training at Urbaz Fitness Centre, Vijaya Nagar Colony.",
  },
  email: undefined,
  address: {
    addressLine: "Viency Centre, 1st Floor",
    locality: "Vijaya Nagar Colony",
    city: "Hyderabad",
    state: "Telangana",
    postalCode: "500057",
    landmark: "Above Axis Bank",
  },
  hours: [
    { day: "Monday", open: "05:00 AM", close: "11:00 PM" },
    { day: "Tuesday", open: "05:00 AM", close: "11:00 PM" },
    { day: "Wednesday", open: "05:00 AM", close: "11:00 PM" },
    { day: "Thursday", open: "05:00 AM", close: "11:00 PM" },
    { day: "Friday", open: "05:00 AM", close: "11:00 PM" },
    { day: "Saturday", open: "05:00 AM", close: "11:00 PM" },
    { day: "Sunday", open: "", close: "" },
  ],
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=Urbaz+Fitness+Centre+Viency+Centre+Above+Axis+Bank+Vijaya+Nagar+Colony+Hyderabad+500057",
  // Prompt A — PRIMARY brand colour "Athletic Red" #F21D24 (action / energy /
  // major brand signal), logo-extracted. Entered here exactly once; every
  // variant (hover, active, soft, border, UI fill) is derived in
  // app/globals.css. White on the derived UI fill clears WCAG AA.
  accentColor: "#F21D24",
  // Prompt A — SECONDARY brand colour "Championship Yellow" #FFD400
  // (structure / support / depth: eyebrows, metadata, technical marks,
  // focus). Bright on dark surfaces; fills carry dark text
  // (--brand-secondary-foreground); light surfaces use the derived ink
  // variant (--brand-secondary-ink) — never this value raw.
  secondaryColor: "#FFD400",
};
