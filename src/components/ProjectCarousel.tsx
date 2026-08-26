"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type ProjectCarouselProps = {
  images: string[];
  title: string;
};

export default function ProjectCarousel({
  images,
  title,
}: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousImage = () => {
    setCurrentIndex((currentIndex) =>
      currentIndex === 0
        ? images.length - 1
        : currentIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((currentIndex) =>
      currentIndex === images.length - 1
        ? 0
        : currentIndex + 1
    );
  };

  if (images.length === 0) {
    return null;
  }

  return (
    <div className="mt-6">
      <div
        className="
          relative
          aspect-video
          overflow-hidden
          rounded-2xl
          border
          border-[var(--border-soft)]
          bg-slate-950
        "
      >
        <Image
          src={images[currentIndex]}
          alt={`${title} screenshot ${currentIndex + 1}`}
          fill
          sizes="(max-width: 768px) 100vw, 896px"
          className="object-contain"
          priority={currentIndex === 0}
        />

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={previousImage}
              aria-label="Previous screenshot"
              className="
                absolute
                left-3
                top-1/2
                flex
                h-11
                w-11
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-slate-950/70
                text-white
                backdrop-blur
                transition
                hover:bg-slate-900
              "
            >
              <ChevronLeft size={22} />
            </button>

            <button
              type="button"
              onClick={nextImage}
              aria-label="Next screenshot"
              className="
                absolute
                right-3
                top-1/2
                flex
                h-11
                w-11
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-slate-950/70
                text-white
                backdrop-blur
                transition
                hover:bg-slate-900
              "
            >
              <ChevronRight size={22} />
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <>
          <div className="mt-4 flex justify-center gap-2">
            {images.map((image, index) => (
              <button
                key={image}
                type="button"
                onClick={() => setCurrentIndex(index)}
                aria-label={`Show screenshot ${index + 1}`}
                aria-current={
                  index === currentIndex ? "true" : undefined
                }
                className={`
                  h-2.5
                  rounded-full
                  transition-all
                  ${
                    index === currentIndex
                      ? "w-8 bg-blue-400"
                      : "w-2.5 bg-slate-600 hover:bg-slate-500"
                  }
                `}
              />
            ))}
          </div>

          <div className="mt-5 grid grid-cols-3 gap-3">
            {images.map((image, index) => (
              <button
                key={image}
                type="button"
                onClick={() => setCurrentIndex(index)}
                aria-label={`Open screenshot ${index + 1}`}
                className={`
                  relative
                  aspect-video
                  overflow-hidden
                  rounded-xl
                  border
                  transition
                  ${
                    index === currentIndex
                      ? "border-blue-400"
                      : "border-[var(--border-soft)] opacity-60 hover:opacity-100"
                  }
                `}
              >
                <Image
                  src={image}
                  alt=""
                  fill
                  sizes="200px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}