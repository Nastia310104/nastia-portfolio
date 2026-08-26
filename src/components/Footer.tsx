import { siteConfig } from "@/config/site";
import { Mail } from "lucide-react";

import type { IconType } from "react-icons";

import {
  FaGithub,
  FaLinkedin
} from "react-icons/fa";

type SocialLink = {
  label: string;
  href: string;
  icon: IconType | typeof Mail;
  external?: boolean;
};

const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: siteConfig.github,
    icon: FaGithub,
    external: true,
  },
  {
    label: "LinkedIn",
    href: siteConfig.linkedin,
    icon: FaLinkedin,
    external: true,
  },
  {
    label: "Email",
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-soft)] bg-[var(--background)] text-white">
      <div className="page-container max-w-md py-10 text-center">

        <p className="text-sm text-slate-300">
          Built with Chatster, cats, and lots of coffee.
          <span className="ml-2">♥ 🐈 ☕</span>
        </p>

        <div className="mt-7 flex justify-center gap-6">
          {socialLinks.map((link) => {
            const Icon = link.icon;

            return (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
                aria-label={link.label}
                className="
                  text-slate-300
                  transition
                  hover:text-blue-400
                  hover:drop-shadow-[0_0_8px_rgba(79,140,255,0.4)]
                "
              >
                <Icon size={24} />
              </a>
            );
          })}
        </div>

        <div className="mt-7 border-t border-[var(--border-soft)] pt-7 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}
          </p>

          <p className="mt-1">
            All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}