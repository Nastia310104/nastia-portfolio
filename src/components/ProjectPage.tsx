import Link from "next/link";
import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import { projects } from "@/app/data/projects";
import ProjectGallery from "@/components/ProjectGallery";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <main className="empty-state">
        <div>
          <p className="eyebrow">Well, this is awkward</p>
          <h1 className="section-title">Project not found.</h1>
          <p className="body-copy project-not-found-copy">
            This project may have moved, changed names, or wandered off after a
            cat.
          </p>
          <Link href="/projects" className="button button-primary">
            <ArrowLeft size={18} aria-hidden="true" />
            Back to projects
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="project-detail">
      <div className="project-detail-container page-container-reading">
        <Link href="/projects" className="project-back-link">
          <ArrowLeft size={17} aria-hidden="true" />
          All projects
        </Link>

        <header className="project-detail-header">
          <p className="eyebrow">
            {project.type || "Featured project"}
          </p>

          <h1 className="project-detail-title">
            {project.title}
          </h1>

          {project.subtitle && (
            <p className="project-detail-subtitle">
              {project.subtitle}
            </p>
          )}

          <div className="project-detail-actions">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="button button-primary"
              >
                <FaGithub size={18} aria-hidden="true" />
                View on GitHub
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            )}

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="button button-secondary"
              >
                <ExternalLink size={18} aria-hidden="true" />
                Try it
              </a>
            )}
          </div>
        </header>

        {project.screenshots && project.screenshots.length > 0 && (
          <ProjectGallery
            screenshots={project.screenshots}
            title={project.title}
          />
        )}

        <section className="project-story" aria-labelledby="project-story-title">
          <p className="eyebrow">The story</p>
          <h2 id="project-story-title" className="section-title">
            {project.storyHeader}
          </h2>
          <p className="project-story-copy">
            {project.story}
          </p>
        </section>

        {project.noteReason && project.noteHeader && project.note && (
          <aside className="project-note" aria-labelledby="project-note-title">
            <p className="eyebrow">{project.noteReason}</p>
            <h2 id="project-note-title" className="section-title">
              {project.noteHeader}
            </h2>
            <div className="project-note-body">
              {project.note}
            </div>
          </aside>
        )}

        <div className="project-detail-meta">
          {project.features && project.features.length > 0 && (
            <section className="project-meta-panel" aria-labelledby="features-title">
              <p className="eyebrow">Highlights</p>
              <h2 id="features-title" className="project-meta-title">
                Features
              </h2>
              <ul className="project-feature-list">
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </section>
          )}

          <section className="project-meta-panel" aria-labelledby="technology-title">
            <p className="eyebrow">Under the hood</p>
            <h2 id="technology-title" className="project-meta-title">
              Built with
            </h2>
            <div className="tag-list">
              {project.technologies.map((technology) => (
                <span key={technology} className="tag">
                  {technology}
                </span>
              ))}
            </div>
          </section>
        </div>

        <div className="project-detail-footer">
          <Link href="/projects" className="text-link">
            <ArrowLeft size={16} aria-hidden="true" />
            Explore more projects
          </Link>
        </div>
      </div>
    </main>
  );
}
