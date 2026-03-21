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
        "relative min-h-screen flex items-end overflow-hidden justify-center",
        className
      )}
    >
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/artwork/the-lighthouse.jpeg"
          alt="The Lighthouse — Courtyard"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      </div>
      <FadeIn className="w-full h-full flex flex-col items-center justify-end pb-12 px-4">
        <div className="text-[11vw] leading-none font-medium tracking-tight transition-opacity text-white font-serif">
          Courtyard
        </div>
        <div className="w-full max-w-4xl h-0.5 bg-accent my-6"></div>
        <div className="text-[4vw] leading-none text-white font-serif">
          Indie Band · Guelph, Ontario
        </div>
      </FadeIn>
    </section>
  );
};

export default Hero;
