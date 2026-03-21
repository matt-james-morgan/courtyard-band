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
        "relative min-h-screen flex items-center justify-center bg-muted py-20",
        className
      )}
    >
      <div className="w-full max-w-6xl px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-serif mb-12 text-center">
          Gallery
        </h2>
        <Carousel className="w-full">
          <CarouselContent>
            {galleryPhotos.map((item, index) => (
              <CarouselItem key={index}>
                <div className="flex flex-col items-center">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="max-w-full max-h-[70vh] w-auto h-auto object-contain rounded-2xl shadow-lg mb-6"
                  />
                  {item.description && (
                    <p className="text-center text-muted-foreground max-w-2xl px-4 text-lg">
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
