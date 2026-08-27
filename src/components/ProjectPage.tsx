import Link from "next/link";
import Image from "next/image";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import { projects } from "@/app/data/projects";
import ProjectGallery from "@/components/ProjectGallery";
import { VscWhitespace } from "react-icons/vsc";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find(
    (project) => project.slug === slug
  );

  if (!project) {
    return (
      <main style={styles.notFound}>
        <h1>Project not found</h1>

        <Link href="/projects">
          Back to projects
        </Link>
      </main>
    );
  }

  return (
    <main style={styles.page}>
      <div style={styles.container}>

        {/* Back */}

        <Link
          href="/projects"
          style={styles.backLink}
        >
          <ArrowLeft size={16} />
          Projects
        </Link>

        {/* Header */}

        <section style={styles.header}>
          <p style={styles.eyebrow}>
            Featured Project
          </p>

          <h1 style={styles.title}>
            {project.title}
          </h1>

          <p style={styles.subtitle}>
            {project.subtitle}
          </p>

          <div style={styles.actions}>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                style={styles.primaryButton}
              >
                <FaGithub size={18} />
                GitHub
              </a>
            )}

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                style={styles.secondaryButton}
              >
                <ExternalLink size={18} />
                Try it
              </a>
            )}
          </div>
        </section>

        {/* Screenshots */}

        {project.screenshots &&
          project.screenshots.length > 0 && (
            <ProjectGallery
              screenshots={project.screenshots}
              title={project.title}
            />
          )
        }

        {/* Story */}

        <section style={styles.section}>
          <p style={styles.sectionLabel}>
            The story
          </p>

          <h2 style={styles.sectionTitle}>
            {project.storyHeader}
          </h2>

          <p style={styles.body}>
            {project.story}
          </p>
        </section>

        {/* Note */}
        {project.noteReason && project.noteHeader && project.note && (
            <section
              className="
                mt-14
                rounded-3xl
                border
                border-blue-400/20
                bg-blue-400/[0.06]
                p-7
                sm:p-9
              "
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                {project.noteReason}
              </p>

              <h2 className="mt-3 text-3xl font-bold">
                {project.noteHeader}
              </h2>

              <div className="mt-6 space-y-5 leading-8 text-slate-300">
                {project.note}
              </div>
            </section>
        )}
        

              

        {/* Features */}

        {project.features &&
          project.features.length > 0 && (
            <section style={styles.section}>
              <p style={styles.sectionLabel}>
                Features
              </p>

              <div style={styles.featureCloud}>
                {project.features.map(
                  (feature) => (
                    <span
                      key={feature}
                      style={styles.feature}
                    >
                      {feature}
                    </span>
                  )
                )}
              </div>
            </section>
          )}

        {/* Tech */}

        <section style={styles.section}>
          <p style={styles.sectionLabel}>
            Built with
          </p>

          <div style={styles.techCloud}>
            {project.technologies.map(
              (technology) => (
                <span
                  key={technology}
                  style={styles.tech}
                >
                  {technology}
                </span>
              )
            )}
          </div>
        </section>

      </div>
    </main>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    padding: "96px 0 72px",
  },

  container: {
    width: "100%",
    maxWidth: "760px",
    margin: "0 auto",
    padding: "0 20px",
  },

  backLink: {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    marginBottom: "36px",
    color: "#94a3b8",
    fontSize: "0.9rem",
    textDecoration: "none",
  },

  header: {
    marginBottom: "36px",
  },

  eyebrow: {
    marginBottom: "10px",
    color: "#60a5fa",
    fontSize: "0.75rem",
    fontWeight: 700,
    letterSpacing: "0.16em",
    textTransform: "uppercase" as const,
  },

  title: {
    margin: 0,
    fontSize: "clamp(2.5rem, 10vw, 4.5rem)",
    lineHeight: 1,
    letterSpacing: "-0.04em",
  },

  subtitle: {
    maxWidth: "600px",
    marginTop: "18px",
    color: "#94a3b8",
    fontSize: "1.05rem",
    lineHeight: 1.7,
  },

  actions: {
    display: "flex",
    flexWrap: "wrap" as const,
    gap: "12px",
    marginTop: "24px",
  },

  primaryButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    padding: "11px 18px",
    borderRadius: "999px",
    background: "#e2e8f0",
    color: "#020617",
    fontWeight: 700,
    textDecoration: "none",
  },

  secondaryButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    padding: "11px 18px",
    border: "1px solid rgba(148,163,184,.25)",
    borderRadius: "999px",
    color: "#e2e8f0",
    fontWeight: 600,
    textDecoration: "none",
  },

  gallerySection: {
    marginBottom: "56px",
  },

  gallery: {
    display: "flex",
    gap: "14px",
    overflowX: "auto" as const,
    scrollSnapType: "x mandatory" as const,
    WebkitOverflowScrolling: "touch" as const,
    paddingBottom: "10px",

    /*
      This intentionally lets the next image
      peek into view on mobile.
    */
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

  swipeHint: {
    marginTop: "8px",
    color: "#64748b",
    fontSize: "0.78rem",
    textAlign: "right" as const,
  },

  section: {
    marginTop: "52px",
  },

  sectionLabel: {
    marginBottom: "10px",
    color: "#60a5fa",
    fontSize: "0.72rem",
    fontWeight: 700,
    letterSpacing: "0.14em",
    textTransform: "uppercase" as const,
  },

  sectionTitle: {
    margin: 0,
    fontSize: "1.7rem",
  },

  body: {
    whiteSpace: "pre-line" as const,
    marginTop: "16px",
    color: "#cbd5e1",
    fontSize: "1rem",
    lineHeight: 1.8,
  },

  featureCloud: {
    display: "flex",
    flexWrap: "wrap" as const,
    gap: "8px",
  },

  feature: {
    padding: "7px 11px",
    border: "1px solid rgba(96,165,250,.18)",
    borderRadius: "999px",
    background: "rgba(30,64,175,.09)",
    color: "#cbd5e1",
    fontSize: "0.82rem",
  },

  techCloud: {
    display: "flex",
    flexWrap: "wrap" as const,
    gap: "8px",
  },

  tech: {
    padding: "6px 10px",
    borderRadius: "999px",
    background: "rgba(148,163,184,.08)",
    color: "#94a3b8",
    fontSize: "0.78rem",
  },

  notFound: {
    minHeight: "100vh",
    display: "grid",
    placeItems: "center",
  },
};