export interface GalleryItem {
  src: string;
  alt: string;
  description: string;
}

// Gallery photos - replace with your own images in /public/gallery/
export const galleryPhotos: GalleryItem[] = [
  {
    src: "https://placehold.co/800x600/cccccc/999999?text=Courtyard+Live",
    alt: "Courtyard live performance",
    description: "Courtyard live at The Drake Underground, Toronto, March 2024",
  },
  {
    src: "https://placehold.co/800x600/bbbbbb/888888?text=Courtyard+Live+2",
    alt: "Courtyard live performance",
    description: "Courtyard live at Silence, Guelph, March 2023",
  },
  {
    src: "https://placehold.co/800x600/aaaaaa/777777?text=Courtyard+Band",
    alt: "Courtyard band photo",
    description: "Courtyard — Guelph, Ontario",
  },
  {
    src: "https://placehold.co/800x600/cccccc/999999?text=Courtyard+Studio",
    alt: "Courtyard in the studio",
    description: "Recording sessions, 2024",
  },
  {
    src: "https://placehold.co/800x600/bbbbbb/888888?text=Courtyard+Show",
    alt: "Courtyard show",
    description: "Courtyard performing in Guelph",
  },
  {
    src: "https://placehold.co/800x600/aaaaaa/777777?text=Courtyard+Photo",
    alt: "Courtyard band photo",
    description: "Courtyard, 2025",
  },
];

// Band photos - replace with your own images in /public/photos/
export const headshotsPhotos: GalleryItem[] = [
  {
    src: "https://placehold.co/600x800/dddddd/aaaaaa?text=Hanna+Bennett",
    alt: "Hanna Bennett",
    description: "Hanna Bennett — Lead Vocals",
  },
  {
    src: "https://placehold.co/600x800/cccccc/999999?text=Matt+Morgan",
    alt: "Matt Morgan",
    description: "Matt Morgan — Guitar",
  },
  {
    src: "https://placehold.co/600x800/bbbbbb/888888?text=Simon+Pequegnat",
    alt: "Simon Pequegnat",
    description: "Simon Pequegnat — Guitar",
  },
  {
    src: "https://placehold.co/600x800/dddddd/aaaaaa?text=Jeremy+Maldonado",
    alt: "Jeremy Maldonado",
    description: "Jeremy Maldonado — Bass",
  },
];
