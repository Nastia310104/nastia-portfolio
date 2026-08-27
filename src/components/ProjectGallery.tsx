"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";

type ProjectGalleryProps = {
  screenshots: string[];
  title: string;
};

export default function ProjectGallery({
  screenshots,
  title,
}: ProjectGalleryProps) {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToIndex = (requestedIndex: number) => {
    const gallery = galleryRef.current;
    const targetIndex = Math.max(
      0,
      Math.min(requestedIndex, screenshots.length - 1)
    );

    if (!gallery) return;

    const slides = Array.from(gallery.children) as HTMLElement[];
    const firstSlide = slides[0];
    const targetSlide = slides[targetIndex];

    if (!firstSlide || !targetSlide) return;

    gallery.scrollTo({
      left: targetSlide.offsetLeft - firstSlide.offsetLeft,
      behavior: "smooth",
    });
  };

  const updateCurrentIndex = () => {
    const gallery = galleryRef.current;

    if (!gallery) return;

    const slides = Array.from(gallery.children) as HTMLElement[];
    const firstSlide = slides[0];

    if (!firstSlide) return;

    const index = slides.reduce(
      (closestIndex, slide, slideIndex) => {
        const currentDistance = Math.abs(
          slide.offsetLeft - firstSlide.offsetLeft - gallery.scrollLeft
        );
        const closestSlide = slides[closestIndex];
        const closestDistance = Math.abs(
          closestSlide.offsetLeft -
            firstSlide.offsetLeft -
            gallery.scrollLeft
        );

        return currentDistance < closestDistance
          ? slideIndex
          : closestIndex;
      },
      0
    );

    setCurrentIndex(index);
  };

  return (
    <section
      className="project-gallery-section"
      aria-label={`${title} screenshots`}
    >
      <div className="project-gallery-header">
        <div>
          <p className="eyebrow">Inside the project</p>
          <p className="project-gallery-hint">
            Swipe, scroll, or use the buttons
          </p>
        </div>

        <div className="project-gallery-controls">
          <span className="project-gallery-counter" aria-live="polite">
            {currentIndex + 1} / {screenshots.length}
          </span>

          {screenshots.length > 1 && (
            <>
              <button
                type="button"
                className="icon-button"
                aria-label="Previous screenshot"
                disabled={currentIndex === 0}
                onClick={() => scrollToIndex(currentIndex - 1)}
              >
                <ChevronLeft size={18} aria-hidden="true" />
              </button>

              <button
                type="button"
                className="icon-button"
                aria-label="Next screenshot"
                disabled={currentIndex === screenshots.length - 1}
                onClick={() => scrollToIndex(currentIndex + 1)}
              >
                <ChevronRight size={18} aria-hidden="true" />
              </button>
            </>
          )}
        </div>
      </div>

      <div
        ref={galleryRef}
        className="project-gallery"
        role="region"
        aria-roledescription="carousel"
        aria-label={`${title} image gallery`}
        onScroll={updateCurrentIndex}
      >
        {screenshots.map((screenshot, index) => (
          <figure
            key={screenshot}
            className="project-gallery-slide"
            role="group"
            aria-roledescription="slide"
            aria-label={`Screenshot ${index + 1} of ${screenshots.length}`}
          >
            <Image
              src={screenshot}
              alt={`${title} screenshot ${index + 1}`}
              width={700}
              height={850}
              sizes="(max-width: 799px) 86vw, 700px"
              className="project-gallery-image"
            />
          </figure>
        ))}
      </div>

      {screenshots.length > 1 && (
        <div className="project-gallery-dots" aria-label="Choose screenshot">
          {screenshots.map((screenshot, index) => (
            <button
              key={screenshot}
              type="button"
              className="project-gallery-dot"
              data-active={currentIndex === index || undefined}
              aria-label={`Go to screenshot ${index + 1}`}
              aria-current={currentIndex === index ? "true" : undefined}
              onClick={() => scrollToIndex(index)}
            />
          ))}
        </div>
      )}
    </section>
  );
}
