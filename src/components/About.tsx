"use client";

import Image from "next/image";

import type { IconType } from "react-icons";

import {
  FaBriefcase,
  FaGraduationCap,
  FaSeedling,
  FaBrain,
  FaRocket,
  FaBullseye,
  FaPuzzlePiece,
  FaLightbulb
} from "react-icons/fa";

import PageSection from "@/components/PageSection";
import ScrollButton from "@/components/ScrollButton";

import { useExploreNextPage } from "@/hooks/useExploreNextPage";


type MindsetItem = {
  title: string;
  description: string;
  icon: IconType;
  iconClass: string;
};

const mindsetItems: MindsetItem[] = [
  {
    title: "Curious by nature",
    description:
      "I love diving deep, asking questions, and understanding how things really work.",
    icon: FaBrain,
    iconClass: "text-pink-400",
  },
  {
    title: "Always learning",
    description:
      "New tech, new concepts, new challenges - I get excited about them all.",
    icon: FaRocket,
    iconClass: "text-blue-400",
  },
  {
    title: "Goal-oriented",
    description:
      "I set high standards for myself and enjoy turning big goals into small daily wins.",
    icon: FaBullseye,
    iconClass: "text-red-400",
  },
  {
    title: "Problem solver",
    description:
      "I see problems as puzzles. The fun is finding the right approach and making it work.",
    icon: FaPuzzlePiece,
    iconClass: "text-cyan-400",
  },
];

export default function About() {

  const { isTouchDevice } = useExploreNextPage({
    nextPage: "/projects",
  });
  
  return (
    <PageSection id="top">
      <div className="page-container max-w-md">
        {/* INTRO */}
        <div className="mb-14">
          <h1 className="text-4xl font-bold tracking-tight">
            About Me
          </h1>

          <div className="relative mx-auto mt-6 h-56 w-full max-w-xs">
            <div className="absolute inset-8 rounded-full bg-purple-600/20 blur-3xl" />

            <Image
              src="/images/about-cat.png"
              alt="Neon cat waving with a heart speech bubble"
              fill
              sizes="(max-width: 768px) 100vw, 320px"
              className="glow object-contain"
              priority
            />
          </div>

          <p className="mt-6 leading-7 text-slate-300">
            I&apos;m a Computer Science student who loves turning ideas into
            real things. I enjoy building clean, useful, and sometimes playful
            software that solves problems people actually have.
          </p>

          <p className="mt-5 leading-7 text-slate-400">
            Outside of code, I&apos;m probably in my garden, planning my next
            project, or learning something new that I definitely don&apos;t
            need... yet. 🌱
          </p>
        </div>

        {/* MINDSET */}
        <div className="mb-16">
          <SectionHeading
            icon={FaLightbulb}
            title="Learning Mindset"
          />

          <div className="mt-7 space-y-3">
            {mindsetItems.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="card flex gap-4 p-5"
                >
                  <Icon
                    className={`mt-1 shrink-0 text-2xl ${item.iconClass}`}
                  />

                  <div>
                    <h3 className="font-semibold text-slate-100">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* EXPERIENCE */}
        <div className="mb-14">
          <SectionHeading
            icon={FaBriefcase}
            title="Experience"
          />

          <div className="mt-6 space-y-4">
            <div className="card p-5">
              <h3 className="font-semibold text-slate-100">
                Administrative Assistant
              </h3>

              <p className="mt-1 text-sm text-blue-400">
                SUNY Oswego
              </p>

              <p className="mt-1 text-sm text-slate-500">
                2023 - Present
              </p>

              <p className="mt-4 leading-7 text-slate-300">
                Event coordination, communication, administrative systems, and
                supporting cross-team operations.
              </p>
            </div>

            <div className="card p-5">
              <h3 className="font-semibold text-slate-100">
                Backend Developer
              </h3>

              <p className="mt-1 text-sm text-blue-400">
                Taptima
              </p>

              <p className="mt-1 text-sm text-slate-500">
                2021 - 2022
              </p>

              <p className="mt-4 leading-7 text-slate-300">
                Developed and maintained web applications using PHP (Symfony),
                MySQL, Docker, Git, and JavaScript.
              </p>
            </div>
          </div>
        </div>

        {/* EDUCATION */}
        <div className="mb-14">
          <SectionHeading
            icon={FaGraduationCap}
            title="Education"
          />

          <div className="card mt-6 p-5">
            <h3 className="font-semibold text-slate-100">
              Finger Lakes Community College
            </h3>

            <p className="mt-2 text-blue-400">
              A.S. in Computer Science
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Expected 2027
            </p>

            <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-300">
              <li>• Relevant coursework in software development</li>
              <li>• Honors student</li>
              <li>• Phi Theta Kappa</li>
            </ul>
          </div>
        </div>

        {/* VOLUNTEERING */}
        <div className="mb-12">
          <SectionHeading
            icon={FaSeedling}
            title="Volunteering"
            iconClass="text-purple-300"
          />

          <div className="card mt-6 p-5">
            <h3 className="font-semibold text-slate-100">
              Community Involvement
            </h3>

            <p className="mt-4 leading-7 text-slate-300">
              I enjoy giving back, helping with events, and being part of
              initiatives that make a positive impact.
            </p>

            <p className="mt-4 text-sm leading-6 text-slate-400">
              Gardening Club Organizer · Master Gardener Volunteer
            </p>
          </div>
        </div>

        {/* BACK TO TOP */}
        <div className="text-center">
          <ScrollButton targetId="top">
            Back to Top ↑
          </ScrollButton>
        </div>

                {/* EXPLORE */}
        <div className="mt-14 text-center">
          <div className="flex flex-col items-center gap-2 text-slate-400">
            <p className="text-base font-medium uppercase tracking-[0.22em]">
              {isTouchDevice
                ? "Swipe to see my projects"
                : "Scroll to see my projects"}
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

type SectionHeadingProps = {
  icon: IconType;
  title: string;
  iconClass?: string;
};

function SectionHeading({
  icon: Icon,
  title,
  iconClass = "text-slate-300",
}: SectionHeadingProps) {
  return (
    <div className="flex items-center gap-3">
      <Icon className={`text-xl ${iconClass}`} />
      <h2 className="text-2xl font-bold">
        {title}
      </h2>
    </div>
  );
}