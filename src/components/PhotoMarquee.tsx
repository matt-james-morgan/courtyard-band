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

const MarqueePhoto: React.FC<{ photo: GalleryItem; isActive: boolean; refCallback: (el: HTMLDivElement | null) => void }> = ({
  photo,
  isActive,
  refCallback,
}) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      ref={refCallback}
      className="relative flex-shrink-0 h-[50vh] md:h-[70vh] group"
    >
      {/* Spinner shown until image loads */}
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-foreground/5">
          <div className="w-6 h-6 border-2 border-foreground/20 border-t-foreground/60 rounded-full animate-spin" />
        </div>
      )}
      <picture>
        {photo.webp && <source srcSet={photo.webp} type="image/webp" />}
        <img
          src={photo.src}
          alt={photo.alt}
          className={cn("h-full w-auto object-cover block transition-opacity duration-300", loaded ? "opacity-100" : "opacity-0")}
          decoding="async"
          draggable={false}
          onLoad={() => setLoaded(true)}
        />
      </picture>
      {/* Dark overlay — lifted on hover (desktop) or when in-frame (mobile) */}
      <div
        className={cn(
          "absolute inset-0 bg-black/50 transition-opacity duration-500",
          "group-hover:opacity-0",
          isActive && "opacity-0"
        )}
      />
    </div>
  );
};

const PhotoMarquee: React.FC<PhotoMarqueeProps> = ({
  photos,
  className,
  direction = "left",
  speed = "normal",
}) => {
  const items = [...photos, ...photos];
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
        style={{ animation: `marquee-${direction} ${speedMap[speed]} linear infinite` }}
      >
        {items.map((photo, i) => (
          <MarqueePhoto
            key={i}
            photo={photo}
            isActive={activeIndex === i}
            refCallback={(el) => { itemRefs.current[i] = el; }}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoMarquee;
