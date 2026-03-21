export interface GalleryItem {
  src: string;          // JPEG fallback
  webp?: string;        // WebP desktop
  webpMobile?: string;  // WebP mobile (800px)
  alt: string;
  description: string;
}

// All photos — /public/images/band/
export const galleryPhotos: GalleryItem[] = [
  { src: "/images/band/band-moody-2.jpg",       webp: "/images/band/webp/band-moody-2.webp",       webpMobile: "/images/band/webp/mobile/band-moody-2.webp",       alt: "Courtyard band", description: "Courtyard" },
  { src: "/images/band/band-couch-1.jpg",       webp: "/images/band/webp/band-couch-1.webp",       webpMobile: "/images/band/webp/mobile/band-couch-1.webp",       alt: "Courtyard band", description: "Courtyard" },
  { src: "/images/band/backstage.jpg",           webp: "/images/band/webp/backstage.webp",           webpMobile: "/images/band/webp/mobile/backstage.webp",           alt: "Courtyard backstage", description: "Backstage" },
  { src: "/images/band/band-blue-room.jpg",     webp: "/images/band/webp/band-blue-room.webp",     webpMobile: "/images/band/webp/mobile/band-blue-room.webp",     alt: "Courtyard band", description: "Courtyard" },
  { src: "/images/band/band-home.jpg",           webp: "/images/band/webp/band-home.webp",           webpMobile: "/images/band/webp/mobile/band-home.webp",           alt: "Courtyard band", description: "Courtyard" },
  { src: "/images/band/band-cello.jpg",          webp: "/images/band/webp/band-cello.webp",          webpMobile: "/images/band/webp/mobile/band-cello.webp",          alt: "Courtyard band", description: "Courtyard" },
  { src: "/images/band/band-circle-smiling.jpg", webp: "/images/band/webp/band-circle-smiling.webp", webpMobile: "/images/band/webp/mobile/band-circle-smiling.webp", alt: "Courtyard band", description: "Courtyard — Guelph, Ontario" },
  { src: "/images/band/band-couch-3.jpg",       webp: "/images/band/webp/band-couch-3.webp",       webpMobile: "/images/band/webp/mobile/band-couch-3.webp",       alt: "Courtyard band", description: "Courtyard" },
  { src: "/images/band/band-moody-1.jpg",       webp: "/images/band/webp/band-moody-1.webp",       webpMobile: "/images/band/webp/mobile/band-moody-1.webp",       alt: "Courtyard band", description: "Courtyard" },
  { src: "/images/band/band-couch-2.jpg",       webp: "/images/band/webp/band-couch-2.webp",       webpMobile: "/images/band/webp/mobile/band-couch-2.webp",       alt: "Courtyard band", description: "Courtyard" },
];

// export const headshotsPhotos: GalleryItem[] = [];
