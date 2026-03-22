import React from "react";
import { cn } from "@/lib/utils";
import FadeIn from "./animations/FadeIn";

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
  return (
    <section
      className={cn(
        "relative min-h-screen flex items-start overflow-hidden justify-center",
        className
      )}
    >
      <div className="absolute inset-0 -z-10">
        <picture>
          {/* Mobile: 800px WebP — Desktop: full 3130px WebP */}
          <source media="(max-width: 768px)" srcSet="/images/band/webp/mobile/band-moody-2.webp" type="image/webp" />
          <source srcSet="/images/band/webp/band-moody-2-hq.webp" type="image/webp" />
          <img
            src="/images/band/band-moody-2.jpg"
            alt="Courtyard"
            className="w-full h-full object-cover object-top"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </picture>
        {/* gradient to make text readable against the lighter ceiling */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent" />
      </div>
      <FadeIn className="w-full flex flex-col items-center pt-16 px-4">
        <div
          className="text-[12vw] leading-none font-semibold text-white"
          style={{ fontFamily: "'Ano', 'Jost', sans-serif", letterSpacing: "-0.03em" }}
        >
          COURTYARD
        </div>
      </FadeIn>
    </section>
  );
};

export default Hero;
