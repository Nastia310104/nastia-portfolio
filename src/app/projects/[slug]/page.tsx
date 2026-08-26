import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaGithub } from "react-icons/fa";


import PageSection from "@/components/PageSection";
import { projects } from "@/app/data/projects";
import ProjectCarousel from "@/components/ProjectCarousel";

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
    notFound();
  }

  return (
    <PageSection>
      <div className="page-container max-w-4xl">
        {/* BACK */}
        <Link
          href="/projects"
          className="
            inline-flex
            items-center
            gap-2
            text-sm
            font-medium
            text-slate-400
            transition
            hover:text-blue-400
          "
        >
          ← Back to projects
        </Link>

        {/* HERO */}
        <section className="mt-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            {project.type}
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            {project.title}
          </h1>

          <p className="mt-4 text-xl text-slate-300">
            {project.subtitle}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
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

          {project.github && (
            <div className="mt-8">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-blue-400/30
                  bg-blue-400/10
                  px-5
                  py-3
                  font-semibold
                  text-blue-300
                  transition
                  hover:-translate-y-0.5
                  hover:bg-blue-400/15
                "
              >
                <FaGithub size={18} />
                View on GitHub
              </a>
            </div>
          )}
        </section>

        {/* SCREENSHOTS */}
        {project.screenshots && project.screenshots.length > 0 && (
        <section className="mt-14">
            <h2 className="text-2xl font-bold">
            Screenshots
            </h2>

            <p className="mt-3 text-slate-400">
            A few moments from the finished game.
            </p>

            <ProjectCarousel
            images={project.screenshots}
            title={project.title}
            />
        </section>
        )}
        
        {/* STORY */}
        {project.slug === "catnect-four" && (
          <>
            <section className="mt-16">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                The story
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                A class project that got a little out of hand.
              </h2>

              <div className="mt-6 space-y-5 leading-8 text-slate-300">
                <p>
                  Catnect Four started as a JavaFX
                  programming assignment: build a working
                  Connect Four game.
                </p>

                <p>
                  Somewhere along the way, plain colored
                  tokens became animated cats. Then the cats
                  needed character selection. Then sound
                  effects. Then a winner animation. Then
                  smoother dropping animations. At that
                  point, the reasonable thing to do was
                  obviously keep going.
                </p>

                <p>
                  The finished version includes selectable
                  cat characters, animated game pieces,
                  custom sound effects, winner animations,
                  and a UI built entirely around the very
                  serious competitive sport of placing cats
                  in a grid.
                </p>
              </div>
            </section>

            {/* VIBECODING */}
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
                AI-assisted development
              </p>

              <h2 className="mt-3 text-3xl font-bold">
                Yes, this one was vibecoded.
              </h2>

              <div className="mt-6 space-y-5 leading-8 text-slate-300">
                <p>
                  Catnect Four was built as an experiment in
                  AI-assisted software development.
                </p>

                <p>
                  I designed the concept, chose the visual
                  direction, tested each iteration, made
                  feature and product decisions, identified
                  problems, and directed the development
                  process.
                </p>

                <p>
                  The code itself was written almost entirely
                  by ChatGPT.
                </p>

                <p>
                  I include the project here deliberately
                  rather than presenting it as code I wrote
                  line-by-line. For me, the project represents
                  another useful development skill: directing
                  AI effectively, evaluating generated code,
                  debugging problems, refining architecture,
                  and turning an idea into a finished,
                  polished application.
                </p>
              </div>

              <p className="mt-7 text-sm font-medium text-blue-300">
                Vibecoding partner: ChatGPT 🐈‍⬛
              </p>
            </section>

            {/* FEATURES */}
            <section className="mt-16">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                What&apos;s inside
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                Features
              </h2>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {[
                  "Two-player Connect Four gameplay",
                  "Selectable cat characters",
                  "Animated cat tokens",
                  "Smooth token drop animation",
                  "Winner animation",
                  "Randomized cat sound effects",
                  "End-of-game audio",
                  "Refactored JavaFX architecture",
                ].map((feature) => (
                  <div
                    key={feature}
                    className="
                      rounded-2xl
                      border
                      border-[var(--border-soft)]
                      bg-white/[0.03]
                      p-5
                      text-slate-300
                    "
                  >
                    {feature}
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        {/* BOTTOM NAV */}
        <div className="mt-16 border-t border-[var(--border-soft)] pt-8">
          <Link
            href="/projects"
            className="
              font-semibold
              text-blue-400
              transition
              hover:text-blue-300
            "
          >
            ← See all projects
          </Link>
        </div>
      </div>
    </PageSection>
  );
}