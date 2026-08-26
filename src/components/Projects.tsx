"use client";

import Image from "next/image";
import Link from "next/link";

import PageSection from "@/components/PageSection";
import { useExploreNextPage } from "@/hooks/useExploreNextPage";
import { projects } from "@/app/data/projects";

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
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group block"
            >
              <article
                className="
                  card
                  overflow-hidden
                  transition
                  duration-300
                  group-hover:-translate-y-1
                  group-hover:border-blue-400/40
                "
              >
                {project.coverImage && (
                  <div className="relative aspect-video overflow-hidden bg-slate-800">
                    <Image
                      src={project.coverImage}
                      alt={`${project.title} project preview`}
                      fill
                      sizes="(max-width: 768px) 100vw, 448px"
                      className="
                        object-cover
                        transition
                        duration-500
                        group-hover:scale-[1.02]
                      "
                    />
                  </div>
                )}

                <div className="p-6">
                  {project.type && (
                    <p className="text-sm font-medium text-blue-400">
                      {project.type}
                    </p>
                  )}

                  <h2 className="mt-2 text-2xl font-bold">
                    {project.title}
                  </h2>

                  {project.subtitle && (
                    <p className="mt-2 text-sm font-medium text-slate-400">
                      {project.subtitle}
                    </p>
                  )}

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

                  <div
                    className="
                      mt-6
                      text-sm
                      font-semibold
                      text-blue-400
                      transition
                      duration-300
                      group-hover:translate-x-1
                    "
                  >
                    View project →
                  </div>
                </div>
              </article>
            </Link>
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