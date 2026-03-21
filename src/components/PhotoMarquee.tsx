import React from "react";
import { cn } from "@/lib/utils";
import { GalleryItem } from "@/data/galleryData";

interface PhotoMarqueeProps {
  photos: GalleryItem[];
  className?: string;
  direction?: "left" | "right";
  speed?: "slow" | "normal" | "fast";
}

const speedMap = {
  slow: "90s",
  normal: "65s",
  fast: "40s",
};

const PhotoMarquee: React.FC<PhotoMarqueeProps> = ({
  photos,
  className,
  direction = "left",
  speed = "normal",
}) => {
  // Duplicate for seamless loop
  const items = [...photos, ...photos];

  return (
    <div className={cn("overflow-hidden w-full", className)}>
      <div
        className="flex w-max"
        style={{
          animation: `marquee-${direction} ${speedMap[speed]} linear infinite`,
        }}
      >
        {items.map((photo, i) => (
          <div key={i} className="relative flex-shrink-0 h-[70vh] group">
            <img
              src={photo.src}
              alt={photo.alt}
              className="h-full w-auto object-cover block"
              decoding="async"
              draggable={false}
            />
            {/* Dark overlay — fades out on hover */}
            <div className="absolute inset-0 bg-black/50 transition-opacity duration-500 group-hover:opacity-0" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoMarquee;
