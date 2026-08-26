"use client";

import Image from "next/image";

import PageSection from "@/components/PageSection";
import { useExploreNextPage } from "@/hooks/useExploreNextPage";

type Project = {
  title: string;
  type: string;
  image?: string;
  alt?: string;
  description: string;
  technologies: string[];
};

const projects: Project[] = [
  {
    title: "Catnect Four",
    type: "JavaFX Game",
    image: "/images/projects/catnect-four.png",
    alt: "Catnect Four JavaFX game showing a completed game with animated cat pieces",
    description:
      "A cat-themed Connect Four game built with JavaFX. Players choose their cat, place animated cat tokens, and get sound effects and a winner animation when someone connects four.",
    technologies: ["Java", "JavaFX", "Git"],
  },
  {
    title: "Platformer for Andrei",
    type: "Game Development",
    description:
      "A platformer game I built as an earlier programming project. It was one of the projects that pushed me to experiment with game mechanics, visual design, and building something personal instead of only completing an assignment.",
    technologies: ["Programming", "Game Development"],
  },
  {
    title: "Plant Guardian",
    type: "Hardware + Software",
    description:
      "A plant-monitoring project combining programming with physical hardware. The system reads soil moisture using a capacitive sensor connected to a microcontroller, with plans to expand it into a smarter plant-care system.",
    technologies: ["MicroPython", "ESP32", "Sensors", "IoT"],
  },
];

export default function Projects() {
  const { isTouchDevice } = useExploreNextPage({
    nextPage: "/contact",
  });

  return (
    <PageSection>
      <div className="page-container max-w-md">
        {/* INTRO */}
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
          Projects
        </p>

        <h1 className="mt-2 text-4xl font-bold tracking-tight">
          Things I&apos;ve built.
        </h1>

        <p className="mt-6 leading-7 text-slate-400">
          A collection of software, games, and experimental projects I&apos;ve
          built while learning, solving problems, and occasionally involving
          far too many cats.
        </p>

        {/* PROJECTS */}
        <div className="mt-10 space-y-10">
          {projects.map((project) => (
            <article
              key={project.title}
              className="card overflow-hidden"
            >
              {project.image && (
                <div className="relative aspect-video overflow-hidden bg-slate-800">
                  <Image
                    src={project.image}
                    alt={project.alt ?? ""}
                    fill
                    sizes="(max-width: 768px) 100vw, 448px"
                    className="object-cover"
                  />
                </div>
              )}

              <div className="p-6">
                <p className="text-sm font-medium text-blue-400">
                  {project.type}
                </p>

                <h2 className="mt-2 text-2xl font-bold">
                  {project.title}
                </h2>

                <p className="mt-4 leading-7 text-slate-300">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="
                        rounded-full
                        border
                        border-[var(--border-soft)]
                        bg-white/5
                        px-3
                        py-1
                        text-sm
                        text-slate-300
                      "
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* EXPLORE */}
        <div className="mt-14 text-center">
          <div className="flex flex-col items-center gap-2 text-slate-400">
            <p className="text-base font-medium uppercase tracking-[0.22em]">
              {isTouchDevice
                ? "Swipe to connect"
                : "Scroll to connect"}
            </p>

            <span
              aria-hidden="true"
              className="animate-bounce text-2xl text-blue-400"
            >
              ↓
            </span>
          </div>
        </div>
      </div>
    </PageSection>
  );
}