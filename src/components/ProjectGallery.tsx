"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

type ProjectGalleryProps = {
  screenshots: string[];
  title: string;
};

export default function ProjectGallery({
  screenshots,
  title,
}: ProjectGalleryProps) {
  const galleryRef = useRef<HTMLDivElement>(null);

  const scrollGallery = (direction: "left" | "right") => {
    const gallery = galleryRef.current;

    if (!gallery) return;

    const amount = gallery.clientWidth * 0.9;

    gallery.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section style={styles.gallerySection}>
      <div style={styles.galleryHeader}>
        <p style={styles.swipeHint}>
          Swipe or scroll to explore
        </p>

        <div style={styles.galleryButtons}>
          <button
            type="button"
            aria-label="Previous screenshot"
            onClick={() => scrollGallery("left")}
            style={styles.galleryButton}
          >
            <ChevronLeft size={18} />
          </button>

          <button
            type="button"
            aria-label="Next screenshot"
            onClick={() => scrollGallery("right")}
            style={styles.galleryButton}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div
        ref={galleryRef}
        style={styles.gallery}
      >
        {screenshots.map((screenshot, index) => (
          <div
            key={screenshot}
            style={styles.slide}
          >
            <Image
              src={screenshot}
              alt={`${title} screenshot ${index + 1}`}
              width={700}
              height={850}
              style={styles.screenshot}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  gallerySection: {
    marginBottom: "56px",
  },

  galleryHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "16px",
    marginBottom: "12px",
  },

  swipeHint: {
    margin: 0,
    color: "#64748b",
    fontSize: "0.78rem",
  },

  galleryButtons: {
    display: "flex",
    gap: "8px",
  },

  galleryButton: {
    width: "38px",
    height: "38px",
    display: "grid",
    placeItems: "center",
    padding: 0,
    border: "1px solid rgba(148,163,184,.25)",
    borderRadius: "999px",
    background: "rgba(15,23,42,.65)",
    color: "#e2e8f0",
    cursor: "pointer",
  },

  gallery: {
    display: "flex",
    gap: "14px",
    overflowX: "auto" as const,
    scrollSnapType: "x mandatory" as const,
    scrollBehavior: "smooth" as const,
    WebkitOverflowScrolling: "touch" as const,
    paddingBottom: "10px",
    marginRight: "-20px",
    paddingRight: "20px",
    scrollbarWidth: "none" as const,
  },

  slide: {
    flex: "0 0 88%",
    scrollSnapAlign: "start" as const,
  },

  screenshot: {
    display: "block",
    width: "100%",
    height: "auto",
    maxHeight: "620px",
    objectFit: "contain" as const,
    borderRadius: "20px",
    border: "1px solid rgba(148,163,184,.15)",
    background: "rgba(15,23,42,.6)",
  },
};