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
  slow: "60s",
  normal: "40s",
  fast: "25s",
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
        className="flex gap-4 w-max"
        style={{
          animation: `marquee-${direction} ${speedMap[speed]} linear infinite`,
        }}
      >
        {items.map((photo, i) => (
          <div key={i} className="flex-shrink-0 h-[70vh] group">
            <img
              src={photo.src}
              alt={photo.alt}
              className="h-full w-auto object-cover grayscale-0 transition-all duration-500"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoMarquee;
