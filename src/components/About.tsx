import React from "react";
import { cn } from "@/lib/utils";
import FadeIn from "./animations/FadeIn";

interface AboutProps {
  className?: string;
}

const About: React.FC<AboutProps> = ({ className }) => {
  return (
    <section id="about" className={cn("py-20 bg-white", className)}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-serif mb-10 text-center">
              About
            </h2>
          </FadeIn>

          <FadeIn delay={100}>
            <p className="text-xl md:text-2xl leading-relaxed mb-12 font-serif text-center">
              Courtyard is a band of high school friends from Guelph, Ontario,
              who reconnected and brought years of original music to life. Born
              out of a long period of isolation, their sound is the result of
              six distinct musical voices finally finding a home together.
            </p>
          </FadeIn>

          <FadeIn delay={200}>
            <p className="text-lg leading-relaxed text-muted-foreground text-center mb-8">
              The members — Hanna Bennett, Matt Morgan, Simon Pequegnat, Jeremy
              Maldonado, Isaac Grant, and Oli Guselle — each bring eclectic
              backgrounds spanning jazz, choral music, country, big brass bands,
              progressive metal, and beat production. Courtyard describes their
              sound as simply "genreless," letting the songs lead wherever they
              need to go.
            </p>
          </FadeIn>

          <FadeIn delay={300}>
            <p className="text-lg leading-relaxed text-muted-foreground text-center">
              Since 2023, Courtyard has been steadily building their catalog —
              releasing singles like "Paper Cuts," "Because of Her," and
              "Falling (Again)," followed by their self-titled EP in 2024.
              Their 2025 singles "The Lighthouse" and "West Coast" mark their
              biggest releases yet. They have performed across Guelph and
              Toronto, including a supporting set at The Drake Underground.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default About;
