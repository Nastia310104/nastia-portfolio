"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileText, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import type { IconType } from "react-icons";

import { siteConfig } from "@/config/site";
import { useExploreNextPage } from "@/hooks/useExploreNextPage";

type SocialLink = {
  label: string;
  href: string;
  icon: IconType;
};

const socialLinks: SocialLink[] = [
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
    <section id="hero" className="hero">
      <div className="hero-inner page-container">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow">
            Computer Science · Software Development
          </p>

          <h1 className="hero-title">
            Hi, I&apos;m{" "}
            <span className="accent-gradient text-glow">
              Nastia.
            </span>
          </h1>

          <p className="hero-role">
            I&apos;m a Computer Science student and aspiring software
            developer who turns curiosity into useful, thoughtful software.
          </p>

          <p className="hero-description">
            I build things, solve problems, learn obsessively, and
            occasionally put cats in my software. 🐈‍⬛
          </p>

          <div className="hero-actions">
            <Link href="/projects" className="button button-primary hero-button">
              View Projects
              <ArrowRight size={18} aria-hidden="true" />
            </Link>

            <Link href="/contact" className="button button-secondary hero-button">
              <Mail size={18} aria-hidden="true" />
              Contact Me
            </Link>
          </div>

          <div className="hero-supporting-links">
            {socialLinks.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="hero-supporting-link"
                >
                  <Icon size={18} aria-hidden="true" />
                  <span>{link.label}</span>
                </a>
              );
            })}

            <a
              href={siteConfig.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-supporting-link"
            >
              <FileText size={18} aria-hidden="true" />
              <span>View Resume</span>
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-glow" aria-hidden="true" />
          <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
          <div className="hero-orbit hero-orbit-two" aria-hidden="true" />

          <div className="hero-portrait-frame">
            <Image
              src="/images/nastia-portrait.png"
              alt="Portrait of Nastia Kotliar"
              fill
              sizes="(max-width: 1023px) calc(100vw - 2rem), 42vw"
              className="hero-portrait"
              priority
            />
          </div>

          <div className="hero-skill hero-skill-code">
            <span aria-hidden="true">{"</>"}</span>
            Software
          </div>

          <div className="hero-skill hero-skill-cat">
            <span aria-hidden="true">🐈</span>
            Cat-powered
          </div>
        </div>
      </div>

      <div className="hero-explore explore-prompt">
        <p className="explore-prompt-label">
          {isTouchDevice ? "Swipe to explore" : "Scroll to explore"}
        </p>

        <span
          className="explore-prompt-arrow hero-explore-arrow"
          aria-hidden="true"
        >
          ↓
        </span>
      </div>
    </section>
  );
}
