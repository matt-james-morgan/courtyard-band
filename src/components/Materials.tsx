import React from "react";
import { cn } from "@/lib/utils";
import FadeIn from "./animations/FadeIn";

interface MaterialsProps {
  className?: string;
}

const Materials: React.FC<MaterialsProps> = ({ className }) => {
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
            Technical documents for venues and promoters.
          </p>
        </FadeIn>
        <FadeIn delay={200}>
          <a
            href="/stage-plot.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-xs uppercase tracking-widest font-light border border-foreground/30 text-foreground/60 hover:text-foreground hover:border-foreground/60 px-6 py-3 transition-all duration-200"
          >
            Stage Plot
          </a>
        </FadeIn>
      </div>
    </section>
  );
};

export default Materials;
