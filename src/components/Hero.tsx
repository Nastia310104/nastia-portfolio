"use client";

import Image from "next/image";
import Link from "next/link";

import type { IconType } from "react-icons";

import {
  FaGithub,
  FaLinkedin
} from "react-icons/fa";

import { useExploreNextPage } from "@/hooks/useExploreNextPage";
import { siteConfig } from "@/config/site";

type ExternalLink = {
  label: string;
  href: string;
  icon: IconType;
};

const socialLinks: ExternalLink[] = [
  {
    label: "GitHub",
    href: siteConfig.github,
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: siteConfig.linkedin,
    icon: FaLinkedin,
  },
];

export default function Hero() {
  const { isTouchDevice } = useExploreNextPage({
    nextPage: "/about",
  });

  return (
    <section
      id="hero"
      className="page-container flex min-h-screen max-w-md flex-col py-8"
    >
      <div className="flex flex-1 flex-col justify-center py-12">

        {/* INTRO */}
        <div className="mb-8">
          <h1 className="text-5xl font-bold leading-tight tracking-tight">
            Hi, I&apos;m{" "}
            <span className="text-blue-400 text-glow">
              Nastia.
            </span>
          </h1>

          <p className="mt-5 text-xl leading-8 text-slate-200">
            Computer Science student & aspiring software developer.
          </p>

          <p className="mt-6 leading-7 text-slate-400">
            I build things, solve problems, learn obsessively, and
            occasionally put cats in my software. 🐈‍⬛
          </p>
        </div>

        {/* PORTRAIT */}
        <div className="relative mb-10">
          <div className="absolute inset-6 rounded-full bg-blue-600/25 blur-3xl" />

          <div className="relative h-96 rounded-3xl">
            <Image
              src="/images/nastia-portrait.png"
              alt="Portrait of Nastia Kotliar"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="
                glow
                object-cover
                [mask-image:radial-gradient(ellipse_at_center,black_55%,transparent_90%)]
                [-webkit-mask-image:radial-gradient(ellipse_at_center,black_55%,transparent_90%)]
              "
              priority
            />
          </div>
        </div>

        {/* PRIMARY ACTIONS */}
        <div className="flex flex-col gap-3">
          <Link
            href="/projects"
            className="button button-primary py-4"
          >
            View Projects
          </Link>

          <Link
            href="/contact"
            className="button button-secondary py-4"
          >
            Contact Me
          </Link>
        </div>

        {/* SOCIAL + RESUME */}
        <div className="mt-8 grid grid-cols-2 gap-3">
          {socialLinks.map((link) => {
            const Icon = link.icon;

            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="
                  button
                  button-secondary
                  gap-2
                  rounded-xl
                  px-4
                  py-3
                "
              >
                <Icon size={20} />
                <span>{link.label}</span>
              </a>
            );
          })}

          <a
            href={siteConfig.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="
              button
              button-secondary
              rounded-xl
              px-4
              py-3
            "
          >
            View Resume
          </a>

          <a
            href={siteConfig.resume}
            download
            className="
              button
              button-secondary
              rounded-xl
              px-4
              py-3
            "
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* EXPLORE */}
      <div className="pb-6 text-center">
        <div className="flex flex-col items-center gap-2 text-slate-400">
          <p className="text-base font-medium uppercase tracking-[0.22em]">
            {isTouchDevice
              ? "Swipe to explore"
              : "Scroll to explore"}
          </p>

          <span
            aria-hidden="true"
            className="animate-bounce text-2xl text-blue-400"
          >
            ↓
          </span>
        </div>
      </div>
    </section>
  );
}