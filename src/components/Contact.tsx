import Image from "next/image";

import type { IconType } from "react-icons";

import {
  FaEnvelope,
  FaGithub,
  FaLinkedin
} from "react-icons/fa";

import PageSection from "@/components/PageSection";
import { siteConfig } from "@/config/site";

type ContactItem = {
  label: string;
  value: string;
  href: string;
  icon: IconType;
  iconClass: string;
  external?: boolean;
};

const contactItems: ContactItem[] = [
  {
    label: "Email Me",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: FaEnvelope,
    iconClass: "text-purple-300",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/kotliar-dev",
    href: siteConfig.linkedin,
    icon: FaLinkedin,
    iconClass: "text-blue-400",
    external: true,
  },
  {
    label: "GitHub",
    value: "github.com/kotliar-dev",
    href: siteConfig.github,
    icon: FaGithub,
    iconClass: "text-slate-200",
    external: true,
  },
];

export default function Contact() {
  return (
    <PageSection>
      <div className="page-container flex min-h-[calc(100vh-8rem)] max-w-md flex-col justify-center">
        {/* INTRO */}
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight">
            Let&apos;s Connect!
          </h1>

          <div className="relative mx-auto mt-7 h-52 w-full max-w-sm">
            <div className="absolute inset-8 rounded-full bg-purple-600/20 blur-3xl" />

            <Image
              src="/images/contact-cat.png"
              alt="Neon cat coding on a laptop"
              fill
              sizes="(max-width: 768px) 100vw, 384px"
              className="glow relative object-contain"
              priority
            />
          </div>

          <p className="mx-auto mt-4 max-w-xs leading-7 text-slate-300">
            Have a question, opportunity,
            <br />
            or just want to say hi?
            <br />
            I&apos;d love to hear from you.
          </p>
        </div>

        {/* CONTACT LINKS */}
        <div className="mt-8 space-y-3">
          {contactItems.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
                className="card group flex items-center gap-4 px-5 py-4"
              >
                <Icon
                  className={`
                    text-xl
                    transition
                    group-hover:text-blue-300
                    ${item.iconClass}
                  `}
                />

                <div className="min-w-0 text-left">
                  <p className="font-semibold text-slate-100">
                    {item.label}
                  </p>

                  <p className="truncate text-sm text-slate-400">
                    {item.value}
                  </p>
                </div>
              </a>
            );
          })}
        </div>

        {/* RESPONSE NOTE */}
        <div className="mt-9 text-center">
          <p className="text-sm text-slate-400">
            I usually reply within a day!
          </p>

          <div className="relative mx-auto mt-4 h-10 w-10">
            <Image
              src="/images/paw.png"
              alt=""
              fill
              sizes="40px"
              className="glow object-contain"
            />
          </div>
        </div>
      </div>
    </PageSection>
  );
}