import React from "react";
import { cn } from "@/lib/utils";
import FadeIn from "./animations/FadeIn";

interface AboutProps {
  className?: string;
}

const About: React.FC<AboutProps> = ({ className }) => {
  return (
    <section id="about" className={cn("relative bg-background", className)}>
      {/* Full-bleed photo with dark overlay */}
      <div className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img
            src="/images/band/band-couch-3.jpg"
            alt="Courtyard"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/65" />
        </div>

        <div className="relative z-10 container mx-auto px-8 md:px-16 py-32">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-8 font-light">
              About
            </p>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="text-3xl md:text-5xl font-light leading-tight text-white max-w-3xl mb-12">
              A band of friends from Guelph, Ontario — bringing years of original
              music to life.
            </p>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-base md:text-lg font-light leading-relaxed text-white/70 max-w-2xl mb-6">
              Hanna Bennett, Matt Morgan, Simon Pequegnat, Jeremy Maldonado, and
              Isaac Grant each bring something different — jazz, choral, country,
              progressive metal, beat production — and Courtyard is where it all
              lands.
            </p>
          </FadeIn>
          <FadeIn delay={300}>
            <p className="text-base md:text-lg font-light leading-relaxed text-white/70 max-w-2xl">
              Since 2023 they've been steadily releasing music — a self-titled EP,
              singles "The Lighthouse" and "West Coast," and shows across Guelph
              and Toronto. Genreless by choice.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default About;
