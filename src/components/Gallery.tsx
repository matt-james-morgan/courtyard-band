import React from "react";
import { cn } from "@/lib/utils";
import { galleryPhotos } from "@/data/galleryData";
import PhotoMarquee from "./PhotoMarquee";

interface GalleryProps {
  className?: string;
}

const Gallery: React.FC<GalleryProps> = ({ className }) => {
  return (
    <section
      id="gallery"
      className={cn("py-20 bg-background overflow-hidden", className)}
    >
      <p className="text-xs uppercase tracking-[0.3em] text-foreground/40 mb-12 text-center font-light">
        Photos
      </p>
      <PhotoMarquee photos={galleryPhotos} speed="normal" />
    </section>
  );
};

export default Gallery;
