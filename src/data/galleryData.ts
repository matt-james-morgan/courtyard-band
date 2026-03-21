export interface GalleryItem {
  src: string;
  alt: string;
  description: string;
}

// Gallery photos — /public/images/gallery/ and /public/images/band/
export const galleryPhotos: GalleryItem[] = [
  {
    src: "/images/gallery/live-guitar.jpg",
    alt: "Courtyard live",
    description: "Live on stage",
  },
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
    src: "/images/band/band-moody-2.jpg",
    alt: "Courtyard band",
    description: "Courtyard",
  },
  {
    src: "/images/band/band-couch-1.jpg",
    alt: "Courtyard band",
    description: "Courtyard",
  },
  {
    src: "/images/band/studio.jpeg",
    alt: "Courtyard behind the scenes",
    description: "Behind the scenes",
  },
];

// Band photos — /public/images/band/
export const headshotsPhotos: GalleryItem[] = [
  {
    src: "/images/band/band-circle-smiling.jpg",
    alt: "Courtyard band",
    description: "Courtyard — Guelph, Ontario",
  },
  {
    src: "/images/band/band-couch-3.jpg",
    alt: "Courtyard band",
    description: "Courtyard",
  },
  {
    src: "/images/band/band-moody-1.jpg",
    alt: "Courtyard band",
    description: "Courtyard",
  },
  {
    src: "/images/band/band-couch-2.jpg",
    alt: "Courtyard band",
    description: "Courtyard",
  },
];
