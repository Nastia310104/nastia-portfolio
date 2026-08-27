"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Code2 } from "lucide-react";

import { projects } from "@/app/data/projects";
import PageSection from "@/components/PageSection";
import { useExploreNextPage } from "@/hooks/useExploreNextPage";

export default function Projects() {
  const { isTouchDevice } = useExploreNextPage({
    nextPage: "/contact",
  });
  const projectLabel =
    projects.length === 1 ? "Project" : "Projects";

  return (
    <PageSection className="projects-page" labelledBy="projects-title">
      <div className="page-container">
        <header className="projects-intro">
          <div className="projects-intro-copy">
            <p className="eyebrow">Selected work</p>

            <h1 id="projects-title" className="page-title">
              Things I&apos;ve
              <br />
              <span className="accent-gradient">brought to life.</span>
            </h1>

            <p className="lead projects-lead">
              Software, games, and experiments built while learning, solving
              real problems, and occasionally involving far too many cats.
            </p>
          </div>

          <div
            className="projects-count"
            aria-label={`${projects.length} ${projectLabel.toLowerCase()}`}
          >
            <Code2 aria-hidden="true" />
            <strong>{projects.length}</strong>
            <span>{projectLabel}</span>
          </div>
        </header>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="project-card-link"
              data-featured={index === 0 || undefined}
              aria-label={`View ${project.title} project`}
            >
              <article className="project-card">
                <div className="project-card-media">
                  {project.coverImage ? (
                    <Image
                      src={project.coverImage}
                      alt=""
                      fill
                      sizes={
                        index === 0
                          ? "(max-width: 1023px) calc(100vw - 2rem), 52vw"
                          : "(max-width: 767px) calc(100vw - 2rem), 40vw"
                      }
                      className="project-card-image"
                    />
                  ) : (
                    <div className="project-card-placeholder" aria-hidden="true">
                      <Code2 />
                    </div>
                  )}

                  <div className="project-card-number" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>

                <div className="project-card-content">
                  <div className="project-card-heading">
                    <div>
                      {project.type && (
                        <p className="eyebrow project-card-type">
                          {project.type}
                        </p>
                      )}

                      <h2 className="project-card-title">
                        {project.title}
                      </h2>
                    </div>

                    <span className="project-card-arrow" aria-hidden="true">
                      <ArrowUpRight />
                    </span>
                  </div>

                  {project.subtitle && (
                    <p className="project-card-subtitle">
                      {project.subtitle}
                    </p>
                  )}

                  <p className="project-card-description">
                    {project.description}
                  </p>

                  <div className="tag-list project-card-tags">
                    {project.technologies.map((technology) => (
                      <span key={technology} className="tag tag-muted">
                        {technology}
                      </span>
                    ))}
                  </div>

                  <span className="project-card-cta">
                    Explore project
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="projects-page-end">
          <p>
            More experiments are always brewing.
            <span aria-hidden="true"> ☕</span>
          </p>

          <div className="explore-prompt">
            <p className="explore-prompt-label">
              {isTouchDevice ? "Swipe to connect" : "Scroll to connect"}
            </p>
            <span
              className="explore-prompt-arrow projects-explore-arrow"
              aria-hidden="true"
            >
              ↓
            </span>
          </div>
        </div>
      </div>
    </PageSection>
  );
}
