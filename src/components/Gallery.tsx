import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { galleryPhotos } from "@/data/galleryData";

interface GalleryProps {
  className?: string;
}

const Gallery: React.FC<GalleryProps> = ({ className }) => {
  const [buttonVisible, setButtonVisible] = useState(true);
  function handleResize() {
    if (window.innerWidth < 1200) {
      setButtonVisible(false);
      return;
    }
    setButtonVisible(true);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <section
      id="gallery"
      className={cn(
        "relative min-h-screen flex items-center justify-center bg-background py-20",
        className
      )}
    >
      <div className="w-full max-w-6xl px-4 md:px-6">
        <p className="text-xs uppercase tracking-[0.3em] text-foreground/40 mb-12 text-center font-light">
          Photos
        </p>
        <Carousel className="w-full">
          <CarouselContent>
            {galleryPhotos.map((item, index) => (
              <CarouselItem key={index}>
                <div className="flex flex-col items-center">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="max-w-full max-h-[80vh] w-auto h-auto object-contain mb-6"
                  />
                  {item.description && (
                    <p className="text-center text-foreground/40 max-w-2xl px-4 text-sm uppercase tracking-widest font-light">
                      {item.description}
                    </p>
                  )}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {buttonVisible ? (
            <>
              <CarouselPrevious />
              <CarouselNext />
            </>
          ) : null}
        </Carousel>
      </div>
    </section>
  );
};

export default Gallery;
