import type { FaqItem } from "./types";

/**
 * Master FAQ data. Generated only from real, known business information.
 * If the answer to a potential question isn't actually known, don't create
 * that FAQ entry.
 *
 * URBAZ FITNESS CENTRE — from docs/gym-research.md (FAQ.*). Only the entries
 * the research answers are used. Deliberately NOT created: opening hours
 * (documented 5:00 AM–11:00 PM vs 6:00 AM–10:30 PM source conflict — hours
 * are shown in the Location section instead), parking and exact class
 * timings (answers are `null`/NOT_FOUND). No cancellation / freeze / trial /
 * joining-fee / guest / refund FAQ is added because the research supports
 * none of them.
 *
 * Statuses: all PUBLICLY_REPORTED, so answers are worded as "listed /
 * reported" and owner verification is required before final-client
 * production.
 */
export const faq: FaqItem[] = [
  {
    id: "01",
    question: "Where is Urbaz Fitness Centre located?",
    answer:
      "Viency Centre, 1st Floor, above Axis Bank, Vijaya Nagar Colony, Hyderabad, Telangana 500057.",
  },
  {
    id: "02",
    question: "Does the gym offer personal training?",
    answer:
      "Personal training is listed in public directory information. Ask the gym about trainer availability and current packages.",
  },
  {
    id: "03",
    question: "What training formats are listed?",
    answer:
      "Public listings include personal training, HIIT, CrossFit-style training, aerobics, strength and weight training, cardio training and weight-loss programs. Ask the gym for current class schedules.",
  },
  {
    id: "04",
    question: "Does the gym have Wi-Fi and restrooms?",
    answer:
      "Free Wi-Fi and restroom facilities are reported. Confirm current availability with the gym.",
  },
  {
    id: "05",
    question: "What are the current membership prices?",
    answer:
      "Urbaz Fitness Centre has not published official membership prices online. Confirm current plans and rates with the team on WhatsApp or by phone.",
  },
];
