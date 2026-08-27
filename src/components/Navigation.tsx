"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import {
  Download,
  Folder,
  Home,
  Mail,
  Menu,
  User,
  X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import type { IconType } from "react-icons";

import { siteConfig } from "@/config/site";

type NavigationItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

type SocialLink = {
  label: string;
  href: string;
  icon: IconType;
};

const navigationItems: NavigationItem[] = [
  { label: "Home", href: "/", icon: Home },
  { label: "About", href: "/about", icon: User },
  { label: "Projects", href: "/projects", icon: Folder },
  { label: "Contact", href: "/contact", icon: Mail },
];

const socialLinks: SocialLink[] = [
  { label: "GitHub", href: siteConfig.github, icon: FaGithub },
  { label: "LinkedIn", href: siteConfig.linkedin, icon: FaLinkedin },
];

function isActiveRoute(pathname: string, href: string) {
  return href === "/"
    ? pathname === "/"
    : pathname.startsWith(href);
}

export default function Navigation() {
  const pathname = usePathname();
  const menuId = useId();
  const openButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (!menuOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [menuOpen]);

  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Primary navigation">
        <div className="site-nav-inner page-container">
          <Link href="/" className="site-brand">
            <span className="site-brand-mark" aria-hidden="true">
              N
            </span>
            <span>{siteConfig.name}</span>
          </Link>

          <div className="desktop-navigation">
            <div className="desktop-nav-links">
              {navigationItems.map((item) => {
                const active = isActiveRoute(pathname, item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="nav-link"
                    data-active={active || undefined}
                    aria-current={active ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            <a
              href={siteConfig.resume}
              download
              className="button button-secondary nav-resume"
            >
              <Download size={17} aria-hidden="true" />
              Resume
            </a>
          </div>

          <button
            ref={openButtonRef}
            type="button"
            className="icon-button mobile-menu-button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
            aria-controls={menuId}
          >
            <Menu size={22} aria-hidden="true" />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="nav-overlay" onMouseDown={closeMenu}>
          <aside
            id={menuId}
            className="nav-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="nav-drawer-header">
              <span className="eyebrow">Navigate</span>
              <button
                ref={closeButtonRef}
                type="button"
                className="icon-button"
                onClick={() => {
                  closeMenu();
                  openButtonRef.current?.focus();
                }}
                aria-label="Close navigation menu"
              >
                <X size={22} aria-hidden="true" />
              </button>
            </div>

            <div className="mobile-nav-links">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const active = isActiveRoute(pathname, item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="mobile-nav-link"
                    data-active={active || undefined}
                    aria-current={active ? "page" : undefined}
                    onClick={closeMenu}
                  >
                    <Icon size={21} aria-hidden="true" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>

            <div className="nav-drawer-divider" />

            <a
              href={siteConfig.resume}
              download
              className="button button-primary"
            >
              <Download size={19} aria-hidden="true" />
              Download Resume
            </a>

            <div className="nav-drawer-footer">
              <div className="nav-social-links">
                {socialLinks.map((link) => {
                  const Icon = link.icon;

                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="icon-button"
                      aria-label={link.label}
                    >
                      <Icon size={20} aria-hidden="true" />
                    </a>
                  );
                })}
              </div>

              <p>{siteConfig.domain}</p>
            </div>
          </aside>
        </div>
      )}
    </header>
  );
}
