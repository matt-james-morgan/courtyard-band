import React from "react";
import { cn } from "@/lib/utils";
import { headshotsPhotos } from "@/data/galleryData";
import PhotoMarquee from "./PhotoMarquee";

interface HeadshotsGalleryProps {
  className?: string;
}

const HeadshotsGallery: React.FC<HeadshotsGalleryProps> = ({ className }) => {
  return (
    <section
      id="headshots"
      className={cn("py-20 bg-muted overflow-hidden", className)}
    >
      <p className="text-xs uppercase tracking-[0.3em] text-foreground/40 mb-12 text-center font-light">
        The Band
      </p>
      <PhotoMarquee photos={headshotsPhotos} direction="right" speed="slow" />
    </section>
  );
};

export default HeadshotsGallery;
