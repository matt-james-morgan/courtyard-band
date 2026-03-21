import React from "react";
import { cn } from "@/lib/utils";

interface VideoProps {
  className?: string;
}

const videos: { id: string; title: string }[] = [
  { id: "VGwZSPz-faA", title: "11:30 (Official Music Video)" },
  { id: "Fl4bSXrfbgY", title: "Tiny Desk Contest 2025 — Feel" },
  { id: "XIOMyXt-Vkc", title: '11:30 (Live in Rochester)' },
  { id: "Do5Ch8N_HYE", title: "I Forgot My Receipt At Tim Horton's (Live from the Band Crib Basement)" },
  { id: "E2MVeoqIPK4", title: "19 (acoustic)" },
  { id: "AD4Wjz-KpCI", title: "windows (acoustic)" },
  { id: "iPLu-fApaps", title: "Because of Her" },
  { id: "iWXIuqRyHPc", title: "tug of war (acoustic sesh)" },
  { id: "27dMft-Dzwg", title: "Spinning (live at Lovin Cup)" },
  { id: "NH9AYZJ_DL0", title: '"Colors" Cover' },
  { id: "Ewgvbu8ytyw", title: "just the two of us" },
  { id: "dRUqIocpn90", title: "Last Christmas" },
];

const Video: React.FC<VideoProps> = ({ className }) => {
  return (
    <section id="media" className={cn("py-20 bg-gray-50", className)}>
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-serif mb-12 text-center">
          Media
        </h2>

        {videos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {videos.map((video, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
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
              className="inline-block px-6 py-3 border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors"
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
