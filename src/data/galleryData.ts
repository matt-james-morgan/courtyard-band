export interface GalleryItem {
  src: string;
  alt: string;
  description: string;
}

// Gallery photos — /public/images/gallery/ and /public/images/band/
export const galleryPhotos: GalleryItem[] = [
  {
    src: "/images/gallery/live-stage.jpeg",
    alt: "Courtyard live performance",
    description: "Courtyard performing live",
  },
  {
    src: "/images/gallery/live-drums.jpeg",
    alt: "Courtyard drummer live",
    description: "Live on stage",
  },
  {
    src: "/images/band/studio.jpeg",
    alt: "Courtyard in the studio",
    description: "Behind the scenes",
  },
  {
    src: "/images/artwork/courtyard-ep.jpeg",
    alt: "Courtyard EP artwork",
    description: "Courtyard — Self-Titled EP (2024)",
  },
];

// Band photos — /public/images/band/
export const headshotsPhotos: GalleryItem[] = [
  {
    src: "/images/band/courtyard-band.jpeg",
    alt: "Courtyard band",
    description: "Courtyard — Guelph, Ontario",
  },
];
