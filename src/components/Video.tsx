import React from "react";
import { cn } from "@/lib/utils";

interface VideoProps {
  className?: string;
}

// Add confirmed Courtyard (Guelph) YouTube video IDs here
// e.g. { id: "abc123", title: "The Lighthouse (Official Video)" }
const videos: { id: string; title: string }[] = [];

const Video: React.FC<VideoProps> = ({ className }) => {
  return (
    <section id="media" className={cn("py-20 bg-muted", className)}>
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-serif mb-12 text-center">
          Media
        </h2>

        {videos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {videos.map((video, index) => (
              <div
                key={index}
                className="bg-background rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div
                  className="relative w-full"
                  style={{ paddingBottom: "56.25%" }}
                >
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center max-w-xl mx-auto">
            <p className="text-muted-foreground mb-6">
              Check out Courtyard on YouTube for the latest videos.
            </p>
            <a
              href="https://www.youtube.com/@Courtyardtheband"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 border border-border rounded-md text-sm font-medium hover:bg-secondary transition-colors"
            >
              Visit YouTube Channel →
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default Video;
