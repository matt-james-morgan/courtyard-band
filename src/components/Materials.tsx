import React, { useState } from "react";
import { cn } from "@/lib/utils";
import FadeIn from "./animations/FadeIn";

interface MaterialsProps {
  className?: string;
}

const photos = [
  { src: "/images/band/band-moody-2.jpg", label: "Full Band — Dark", filename: "courtyard-band-1.jpg" },
  { src: "/images/band/band-moody-1.jpg", label: "Full Band — Moody", filename: "courtyard-band-2.jpg" },
  { src: "/images/band/band-blue-room.jpg", label: "Full Band — Blue Room", filename: "courtyard-band-3.jpg" },
  { src: "/images/band/band-circle-smiling.jpg", label: "Full Band — Candid", filename: "courtyard-band-4.jpg" },
  { src: "/images/band/portrait-bw-1.jpg", label: "Portrait B&W — 1", filename: "courtyard-portrait-1.jpg" },
  { src: "/images/band/portrait-bw-2.jpg", label: "Portrait B&W — 2", filename: "courtyard-portrait-2.jpg" },
  { src: "/images/band/portrait-bw-3.jpg", label: "Portrait B&W — 3", filename: "courtyard-portrait-3.jpg" },
];

const Materials: React.FC<MaterialsProps> = ({ className }) => {
  const [hoveredPhoto, setHoveredPhoto] = useState<number | null>(null);

  return (
    <section id="materials" className={cn("relative bg-background py-24", className)}>
      <div className="container mx-auto px-8 md:px-16">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.3em] text-foreground/40 mb-8 font-light">
            Materials
          </p>
        </FadeIn>
        <FadeIn delay={100}>
          <p className="text-3xl md:text-4xl font-light text-foreground mb-12 max-w-lg">
            Everything you need to book or promote a show.
          </p>
        </FadeIn>

        {/* Documents */}
        <FadeIn delay={150}>
          <div className="flex flex-wrap gap-4 mb-20">
            <a
              href="/press-kit.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-xs uppercase tracking-widest font-light border border-foreground/30 text-foreground/60 hover:text-foreground hover:border-foreground/60 px-6 py-3 transition-all duration-200"
            >
              Press Kit
            </a>
            <a
              href="/stage-plot.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-xs uppercase tracking-widest font-light border border-foreground/30 text-foreground/60 hover:text-foreground hover:border-foreground/60 px-6 py-3 transition-all duration-200"
            >
              Stage Plot
            </a>
          </div>
        </FadeIn>

        {/* Photos */}
        <FadeIn delay={200}>
          <p className="text-xs uppercase tracking-[0.3em] text-foreground/40 mb-6 font-light">
            Press Photos
          </p>
          <p className="text-sm font-light text-foreground/50 mb-8">
            Free to use for promotional purposes with credit.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {photos.map((photo, i) => (
              <div key={i} className="group">
                <a
                  href={photo.src}
                  download={photo.filename}
                  className="block relative overflow-hidden aspect-[3/2] bg-foreground/5"
                  onMouseEnter={() => setHoveredPhoto(i)}
                  onMouseLeave={() => setHoveredPhoto(null)}
                >
                  <img
                    src={photo.src}
                    alt={photo.label}
                    className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-50"
                    loading="lazy"
                  />
                  <span
                    className={cn(
                      "absolute inset-0 flex items-center justify-center text-xs uppercase tracking-widest font-light text-foreground transition-opacity duration-300",
                      hoveredPhoto === i ? "opacity-100" : "opacity-0"
                    )}
                  >
                    ↓ Download
                  </span>
                </a>
                <p className="mt-2 text-[10px] uppercase tracking-[0.15em] font-light text-foreground/40">
                  {photo.label}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Materials;
