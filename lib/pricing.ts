import type { PricingConfiguration } from "./types";

/**
 * Master pricing/membership data — the single source of truth for Section 06.
 *
 * PURE FRONTEND: there is no CMS, database, API or backend pricing source.
 * Everything the pricing register renders is authored here; the component in
 * components/sections/Membership.tsx consumes this verbatim and never hardcodes
 * a price, name, duration, label or CTA. To re-price the site for a real gym,
 * edit ONLY this file.
 *
 * Do not add discounts, savings, "best value" / "most popular" tags, urgency,
 * scarcity or guarantees — none of those exist in this contract by design.
 *
 * PRICE STATUS
 *   "exact"   -> render the numeric `price`, INR-formatted.
 *   "contact" -> render `contactLabel` ("Consult management") instead of an
 *                amount; `price` may be omitted.
 *   "hidden"  -> the entry does not render publicly at all.
 * Change a single plan's `priceStatus` to move it between these states without
 * touching the component.
 */
/**
 * URBAZ FITNESS CENTRE pricing/membership data — Section 06.
 *
 * TEMPLATE DEMO PRICING PRESERVED (prospect-demo rules, Cases C/E):
 *
 * docs/gym-research.md PRICING: Urbaz Fitness Centre does not publish pricing
 * publicly (`publishes_pricing_publicly: false`); every plan, the special
 * training price and the joining fee are NOT_FOUND. The research also warns
 * that the "mid-range" fee-band note is not a price and must never be turned
 * into an estimate.
 *
 * Therefore every amount below is the existing TEMPLATE DEMONSTRATION price
 * (Daily 300, Weekly 1,000, 1 Month 2,500, 3 Months 6,000, 6 Months 10,000,
 * 1 Year 18,000, Personal Coaching 8,000 / month). NONE of these is a verified
 * Urbaz Fitness Centre price — OWNER MUST SUPPLY REAL PRICES before
 * final-client production.
 *
 * No "Consult management" state was introduced; all plans stay
 * `priceStatus: "exact"`. The festival offer engine
 * (lib/festival-offers.ts) references the `half-year` and `annual` plan IDs
 * below — do not rename those IDs. No second pricing or offer calculation
 * exists; the engine derives every discounted amount from these prices.
 */
export const pricing: PricingConfiguration = {
  enabled: true,
  currency: "INR",
  locale: "en-IN",
  eyebrow: "Membership / Pricing",
  index: "06",
  headlineLines: ["Train on", "your terms."],
  accentLastLine: true,
  deck: "Flexible day passes and memberships for every commitment level. Reach out on WhatsApp or by phone and the team will get you started.",
  contactLabel: "Consult management",
  specialLabel: "Special training",
  plans: [
    {
      id: "daily",
      name: "Daily Pass",
      duration: "1 Day",
      term: "One day",
      price: 300,
      priceStatus: "exact",
      ctaLabel: "Enquire",
    },
    {
      id: "weekly",
      name: "Weekly Pass",
      duration: "1 Week",
      term: "One week",
      price: 1000,
      priceStatus: "exact",
      ctaLabel: "Enquire",
    },
    {
      id: "monthly",
      name: "1 Month",
      duration: "1 Month",
      term: "Per month",
      price: 2500,
      priceStatus: "exact",
      ctaLabel: "Enquire",
    },
    {
      id: "quarterly",
      name: "3 Months",
      duration: "3 Months",
      term: "Billed once",
      price: 6000,
      priceStatus: "exact",
      ctaLabel: "Enquire",
    },
    {
      id: "half-year",
      name: "6 Months",
      duration: "6 Months",
      term: "Billed once",
      price: 10000,
      priceStatus: "exact",
      ctaLabel: "Enquire",
    },
    {
      id: "annual",
      name: "1 Year",
      duration: "12 Months",
      term: "Billed once",
      price: 18000,
      priceStatus: "exact",
      ctaLabel: "Enquire",
    },
  ],
  special: {
    id: "special-training",
    name: "Personal Coaching",
    duration: "1 Month",
    term: "Per month",
    price: 8000,
    priceStatus: "exact",
    description:
      "One-on-one personal training and dedicated trainer guidance, programmed around your goals.",
    ctaLabel: "Enquire",
  },
};
