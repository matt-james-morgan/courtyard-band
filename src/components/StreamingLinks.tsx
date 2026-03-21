import React from "react";
import { cn } from "@/lib/utils";
import FadeIn from "./animations/FadeIn";

interface StreamingLinksProps {
  className?: string;
}

const platforms = [
  {
    name: "Spotify",
    href: "https://open.spotify.com/artist/6mbL9LM7UnlZZmrv2UXFad",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
      </svg>
    ),
  },
  {
    name: "Apple Music",
    href: "https://music.apple.com/ca/artist/courtyard/1668003797",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M23.994 6.124a9.23 9.23 0 00-.24-2.19c-.317-1.31-1.048-2.31-2.18-3.043a6.303 6.303 0 00-1.862-.81c-.67-.17-1.35-.24-2.03-.243-.11-.005-.42-.016-.62-.017H6.944c-.2.001-.51.012-.62.017-.68.003-1.36.073-2.03.243a6.303 6.303 0 00-1.862.81C1.3 1.624.57 2.624.253 3.934a9.23 9.23 0 00-.24 2.19C.006 6.324 0 6.534 0 12s.006 5.676.013 5.876c.027.73.1 1.46.24 2.19.317 1.31 1.048 2.31 2.18 3.043a6.303 6.303 0 001.862.81c.67.17 1.35.24 2.03.243.11.005.42.016.62.017h10.11c.2-.001.51-.012.62-.017.68-.003 1.36-.073 2.03-.243a6.303 6.303 0 001.862-.81c1.132-.733 1.863-1.733 2.18-3.043.14-.73.213-1.46.24-2.19.007-.2.013-.41.013-5.876s-.006-5.676-.013-5.876zM15.9 12.399l-4.636 2.68a.4.4 0 01-.6-.346V9.267a.4.4 0 01.6-.346l4.636 2.68a.4.4 0 010 .798z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/channel/UCWUzQc6XI24kAp96Xq7xCrQ",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: "Tidal",
    href: "https://tidal.com/artist/16263558",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        {/* 3 diamonds top row, 1 centered below */}
        <path d="M6,5 9,9 6,13 3,9 Z M12,5 15,9 12,13 9,9 Z M18,5 21,9 18,13 15,9 Z M12,13 15,17 12,21 9,17 Z" />
      </svg>
    ),
  },
  {
    name: "Bandcamp",
    href: "https://bandcamp.com/search?q=courtyard+guelph", // update when Bandcamp page is confirmed
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M0 18.75l7.437-13.5H24l-7.438 13.5z" />
      </svg>
    ),
  },
];

const StreamingLinks: React.FC<StreamingLinksProps> = ({ className }) => {
  return (
    <section className={cn("py-24 bg-muted", className)}>
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.3em] text-foreground/40 mb-12 text-center font-light">
            Listen
          </p>
        </FadeIn>
        <FadeIn delay={100}>
          <div className="flex justify-center items-center gap-12 flex-wrap">
            {platforms.map((p) => (
              <a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={p.name}
                className="text-foreground/40 hover:text-foreground transition-all duration-200 hover:-translate-y-1 transform"
                title={p.name}
              >
                {p.icon}
              </a>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default StreamingLinks;
