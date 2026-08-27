import Image from "next/image";
import { ArrowUpRight, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import type { IconType } from "react-icons";

import PageSection from "@/components/PageSection";
import { siteConfig } from "@/config/site";

type SocialContact = {
  label: string;
  value: string;
  href: string;
  icon: IconType;
};

const socialContacts: SocialContact[] = [
  {
    label: "LinkedIn",
    value: "linkedin.com/in/kotliar-dev",
    href: siteConfig.linkedin,
    icon: FaLinkedin,
  },
  {
    label: "GitHub",
    value: "github.com/kotliar-dev",
    href: siteConfig.github,
    icon: FaGithub,
  },
];

export default function Contact() {
  return (
    <PageSection className="contact-page" labelledBy="contact-title">
      <div className="contact-layout page-container">
        <section className="contact-intro">
          <div className="contact-intro-copy">
            <p className="eyebrow">Let&apos;s connect</p>

            <h1 id="contact-title" className="page-title">
              Have an idea?
              <br />
              <span className="accent-gradient">I&apos;m listening.</span>
            </h1>

            <p className="lead contact-lead">
              Whether it&apos;s an opportunity, a project, a question, or just
              a friendly hello—I&apos;d love to hear from you.
            </p>
          </div>

          <div className="contact-art">
            <div className="contact-art-glow" aria-hidden="true" />
            <Image
              src="/images/contact-cat.png"
              alt="Neon cat coding on a laptop"
              fill
              sizes="(max-width: 1023px) min(90vw, 34rem), 44vw"
              className="contact-cat"
              priority
            />
          </div>
        </section>

        <aside className="panel contact-panel" aria-label="Contact options">
          <div className="contact-panel-heading">
            <div>
              <p className="eyebrow">Start a conversation</p>
              <h2 className="section-title">Say hello.</h2>
            </div>

            <div className="contact-paw" aria-hidden="true">
              <Image
                src="/images/paw.png"
                alt=""
                fill
                sizes="48px"
                className="glow"
              />
            </div>
          </div>

          <a
            href={`mailto:${siteConfig.email}`}
            className="contact-email"
          >
            <span className="contact-email-icon" aria-hidden="true">
              <Send size={20} />
            </span>

            <span className="contact-email-copy">
              <span>Email me</span>
              <strong>{siteConfig.email}</strong>
            </span>

            <ArrowUpRight
              className="contact-link-arrow"
              size={20}
              aria-hidden="true"
            />
          </a>

          <div className="contact-divider">
            <span>or find me online</span>
          </div>

          <div className="contact-social-list">
            {socialContacts.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-social-link"
                >
                  <span className="contact-social-icon" aria-hidden="true">
                    <Icon size={20} />
                  </span>

                  <span className="contact-social-copy">
                    <strong>{item.label}</strong>
                    <span>{item.value}</span>
                  </span>

                  <ArrowUpRight
                    className="contact-link-arrow"
                    size={19}
                    aria-hidden="true"
                  />
                </a>
              );
            })}
          </div>

          <div className="contact-response-note">
            <span className="contact-status-dot" aria-hidden="true" />
            <p>I usually reply within a day.</p>
          </div>
        </aside>
      </div>
    </PageSection>
  );
}
