import type { GalleryItem } from "./types";

/**
 * Master gallery data. This array is authoritative for display order —
 * filename order is not a data dependency. Every item requires alt text
 * describing the actual image.
 *
 * URBAZ FITNESS CENTRE — operator-supplied photographs in
 * public/assets/gallery/urbaz-fitness-vijaya-nagar-gallery-<subject>.jpg.
 * Alt text describes only what is visible in each frame.
 *
 * ORDER is editorial: equipment and training floor first, then the
 * conditioning corner, then photographs that include people.
 *
 * OWNER VERIFICATION: the last five frames show identifiable people —
 * confirm the owner has permission to publish them. The steam-bath-signage
 * frame shows a "Steam Bath Rules" sign; steam bath is NOT in the researched
 * facility list (docs/gym-research.md), so confirm it exists before keeping
 * that frame (remove its entry to drop it).
 *
 * No claim, count, award or superlative is encoded here.
 */
const GALLERY = "/assets/gallery/urbaz-fitness-vijaya-nagar-gallery";

export const galleryItems: GalleryItem[] = [
  {
    src: `${GALLERY}-cable-crossover-station.jpg`,
    alt: "Cable crossover station in front of the UFC logo at Urbaz Fitness Centre",
  },
  {
    src: `${GALLERY}-training-floor-pull-up-rig.jpg`,
    alt: "Training floor with a red pull-up rig, benches and a turf strip at Urbaz Fitness Centre",
  },
  {
    src: `${GALLERY}-plate-loaded-machines.jpg`,
    alt: "Plate-loaded strength machines and mirrors on the Urbaz Fitness Centre floor",
  },
  {
    src: `${GALLERY}-dumbbells-benches-plates.jpg`,
    alt: "Dumbbell racks, adjustable benches and weight plates at Urbaz Fitness Centre",
  },
  {
    src: `${GALLERY}-dumbbell-rack.jpg`,
    alt: "Rack of rubber-coated dumbbells at Urbaz Fitness Centre",
  },
  {
    src: `${GALLERY}-battle-ropes-conditioning-corner.jpg`,
    alt: "Battle ropes, medicine balls and stability balls in the conditioning corner at Urbaz Fitness Centre",
  },
  {
    src: `${GALLERY}-cable-station-training.jpg`,
    alt: "Member training on the cable crossover at Urbaz Fitness Centre",
  },
  {
    src: `${GALLERY}-members-tricolour-ceiling.jpg`,
    alt: "Two members posing on the training floor under a tricolour ceiling drape at Urbaz Fitness Centre",
  },
  {
    src: `${GALLERY}-members-tricolour-window.jpg`,
    alt: "Two members posing by a tricolour window display at Urbaz Fitness Centre",
  },
  {
    src: `${GALLERY}-group-photo-trophy-cake.jpg`,
    alt: "Group photo of members and staff with a trophy and cake at Urbaz Fitness Centre",
  },
  {
    src: `${GALLERY}-steam-bath-signage.jpg`,
    alt: "Steam bath rules sign beside the logo wall at Urbaz Fitness Centre",
  },
];
