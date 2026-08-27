"use client";

import Image from "next/image";
import type { IconType } from "react-icons";
import {
  FaBrain,
  FaBriefcase,
  FaBullseye,
  FaGraduationCap,
  FaLightbulb,
  FaPuzzlePiece,
  FaRocket,
  FaSeedling,
} from "react-icons/fa";

import PageSection from "@/components/PageSection";
import ScrollButton from "@/components/ScrollButton";
import { useExploreNextPage } from "@/hooks/useExploreNextPage";

type MindsetItem = {
  title: string;
  description: string;
  icon: IconType;
  tone: "purple" | "blue" | "rose" | "cyan";
};

type ExperienceItem = {
  role: string;
  organization: string;
  dates: string;
  description: string;
};

const mindsetItems: MindsetItem[] = [
  {
    title: "Curious by nature",
    description:
      "I ask questions, follow interesting threads, and want to understand how things actually work.",
    icon: FaBrain,
    tone: "purple",
  },
  {
    title: "Always learning",
    description:
      "New technology, unfamiliar concepts, and ambitious projects genuinely excite me.",
    icon: FaRocket,
    tone: "blue",
  },
  {
    title: "Goal-oriented",
    description:
      "I set high standards and turn large goals into small, consistent wins.",
    icon: FaBullseye,
    tone: "rose",
  },
  {
    title: "Problem solver",
    description:
      "I see problems as puzzles: understand the pieces, test an approach, and make it work.",
    icon: FaPuzzlePiece,
    tone: "cyan",
  },
];

const experienceItems: ExperienceItem[] = [
  {
    role: "Administrative Assistant",
    organization: "SUNY Oswego",
    dates: "2023 - Present",
    description:
      "Coordinate events, communication, administrative systems, and cross-team operations with care and attention to detail.",
  },
  {
    role: "Backend Developer",
    organization: "Taptima",
    dates: "2021 - 2022",
    description:
      "Developed and maintained web applications using PHP, Symfony, MySQL, Docker, Git, and JavaScript.",
  },
];

export default function About() {
  const { isTouchDevice } = useExploreNextPage({
    nextPage: "/projects",
  });

  return (
    <PageSection id="top" className="about-page" labelledBy="about-title">
      <div className="page-container">
        <header className="about-intro">
          <div className="about-intro-copy">
            <p className="eyebrow">More than code</p>

            <h1 id="about-title" className="page-title">
              Curious mind.
              <br />
              <span className="accent-gradient">Practical builder.</span>
            </h1>

            <p className="lead about-lead">
              I&apos;m a Computer Science student who loves turning ideas into
              real things—clean, useful, and occasionally playful software that
              solves problems people actually have.
            </p>

            <p className="body-copy about-intro-body">
              Outside of code, I&apos;m probably in my garden, organizing a
              community project, or learning something new that I definitely
              don&apos;t need... yet. 🌱
            </p>

            <dl className="about-highlights">
              <div>
                <dt>4.0</dt>
                <dd>GPA</dd>
              </div>
              <div>
                <dt>Backend</dt>
                <dd>Experience</dd>
              </div>
              <div>
                <dt>Always</dt>
                <dd>Learning</dd>
              </div>
            </dl>
          </div>

          <div className="about-art" aria-label="A little cat encouragement">
            <div className="about-art-glow" aria-hidden="true" />
            <Image
              src="/images/about-cat.png"
              alt="Neon cat waving with a heart speech bubble"
              fill
              sizes="(max-width: 1023px) min(80vw, 28rem), 34vw"
              className="about-cat"
              priority
            />
          </div>
        </header>

        <section className="about-section" aria-labelledby="mindset-title">
          <div className="about-section-heading">
            <div>
              <p className="eyebrow">How I work</p>
              <h2 id="mindset-title" className="section-title">
                Learning mindset
              </h2>
            </div>
            <FaLightbulb className="about-heading-icon" aria-hidden="true" />
          </div>

          <div className="mindset-grid">
            {mindsetItems.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="card mindset-card"
                  data-tone={item.tone}
                >
                  <div className="mindset-icon">
                    <Icon aria-hidden="true" />
                  </div>

                  <div>
                    <h3 className="card-title">{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <div className="about-columns">
          <section className="about-section" aria-labelledby="experience-title">
            <div className="about-section-heading">
              <div>
                <p className="eyebrow">Where I&apos;ve contributed</p>
                <h2 id="experience-title" className="section-title">
                  Experience
                </h2>
              </div>
              <FaBriefcase className="about-heading-icon" aria-hidden="true" />
            </div>

            <div className="experience-timeline">
              {experienceItems.map((item) => (
                <article key={item.role} className="experience-item">
                  <div className="experience-marker" aria-hidden="true" />
                  <p className="experience-dates">{item.dates}</p>
                  <h3 className="card-title">{item.role}</h3>
                  <p className="experience-organization">{item.organization}</p>
                  <p className="body-copy">{item.description}</p>
                </article>
              ))}
            </div>
          </section>

          <div className="about-side-column">
            <section className="panel education-panel" aria-labelledby="education-title">
              <FaGraduationCap className="about-panel-icon" aria-hidden="true" />
              <p className="eyebrow">Education</p>
              <h2 id="education-title" className="section-title">
                Finger Lakes Community College
              </h2>
              <p className="education-degree">A.S. in Computer Science</p>
              <p className="education-date">Expected 2027</p>
              <ul className="education-list">
                <li>4.0 GPA</li>
                <li>Software development coursework</li>
                <li>Honors student</li>
              </ul>
            </section>

            <section className="callout community-panel" aria-labelledby="community-title">
              <FaSeedling className="about-panel-icon" aria-hidden="true" />
              <p className="eyebrow">Beyond the screen</p>
              <h2 id="community-title" className="section-title">
                Community involvement
              </h2>
              <p className="body-copy">
                I enjoy bringing people together and contributing to projects
                that make everyday life a little better.
              </p>
              <div className="tag-list">
                <span className="tag">Gardening Club Organizer</span>
                <span className="tag">Master Gardener Volunteer</span>
              </div>
            </section>
          </div>
        </div>

        <div className="about-page-end">
          <ScrollButton targetId="top" variant="ghost">
            Back to top ↑
          </ScrollButton>

          <div className="explore-prompt">
            <p className="explore-prompt-label">
              {isTouchDevice
                ? "Swipe to see my projects"
                : "Scroll to see my projects"}
            </p>
            <span className="explore-prompt-arrow about-explore-arrow" aria-hidden="true">
              ↓
            </span>
          </div>
        </div>
      </div>
    </PageSection>
  );
}
