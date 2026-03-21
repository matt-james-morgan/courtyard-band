import React from "react";
import { cn } from "@/lib/utils";
import FadeIn from "./animations/FadeIn";

interface ContactProps {
  className?: string;
}

const Contact: React.FC<ContactProps> = ({ className }) => {
  return (
    <section id="contact" className={cn("relative bg-background", className)}>
      {/* Full-bleed photo background */}
      <div className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="/images/band/band-couch-1.jpg"
            alt="Courtyard"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative z-10 container mx-auto px-8 md:px-16 py-24">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-8 font-light">
              Contact
            </p>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="text-3xl md:text-4xl font-light text-white mb-12 max-w-lg">
              Booking, collabs, or just want to say hey.
            </p>
          </FadeIn>
          <FadeIn delay={200}>
            <div className="flex flex-col sm:flex-row gap-8">
              <a
                href="mailto:courtyardtheband@gmail.com"
                className="text-white/60 hover:text-white transition-colors text-sm uppercase tracking-widest font-light"
              >
                courtyardtheband@gmail.com
              </a>
              <a
                href="https://www.instagram.com/courtyard_theband/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors text-sm uppercase tracking-widest font-light"
              >
                @courtyard_theband
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61565740834045"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors text-sm uppercase tracking-widest font-light"
              >
                Facebook
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Contact;
