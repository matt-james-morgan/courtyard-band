import React, { useEffect, useRef, useState } from "react";
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

  // Track which item is most in-frame on mobile (intersection observer)
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const isMobile = window.matchMedia("(hover: none)").matches;
    if (!isMobile) return;

    const observers: IntersectionObserver[] = [];

    itemRefs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            setActiveIndex(i);
          }
        },
        { threshold: 0.5 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className={cn("overflow-hidden w-full", className)}>
      <div
        className="flex w-max"
        style={{
          animation: `marquee-${direction} ${speedMap[speed]} linear infinite`,
        }}
      >
        {items.map((photo, i) => (
          <div
            key={i}
            ref={(el) => { itemRefs.current[i] = el; }}
            className="relative flex-shrink-0 h-[50vh] md:h-[70vh] group"
          >
            <picture>
              {photo.webpMobile && (
                <source media="(max-width: 768px)" srcSet={photo.webpMobile} type="image/webp" />
              )}
              {photo.webp && <source srcSet={photo.webp} type="image/webp" />}
              <img
                src={photo.src}
                alt={photo.alt}
                className="h-full w-auto object-cover block"
                decoding="async"
                draggable={false}
              />
            </picture>
            {/* Dark overlay — lifted on hover (desktop) or when in-frame (mobile) */}
            <div
              className={cn(
                "absolute inset-0 bg-black/50 transition-opacity duration-500",
                "group-hover:opacity-0",
                activeIndex === i && "opacity-0"
              )}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoMarquee;
