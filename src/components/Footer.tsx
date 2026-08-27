import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import type { IconType } from "react-icons";

import { siteConfig } from "@/config/site";

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
    <footer className="site-footer">
      <div className="site-footer-inner page-container">
        <div>
          <p className="site-footer-message">
            Built with Chatster, cats, and lots of coffee.
            <span aria-hidden="true"> ♥ 🐈 ☕</span>
          </p>

          <p className="site-footer-copyright">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>

        <div className="footer-social-links" aria-label="Social links">
          {socialLinks.map((link) => {
            const Icon = link.icon;

            return (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
                className="icon-button"
                aria-label={link.label}
              >
                <Icon size={20} aria-hidden="true" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
