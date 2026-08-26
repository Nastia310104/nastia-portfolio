"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import {
  X,
  Menu,
  Home,
  User,
  Folder,
  Mail,
  Download
} from "lucide-react";

import type { IconType } from "react-icons";
import type { LucideIcon } from "lucide-react";

import {
  FaGithub,
  FaLinkedin
} from "react-icons/fa";
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
  {
    label: "Home",
    href: "/",
    icon: Home,
  },
  {
    label: "About",
    href: "/about",
    icon: User,
  },
  {
    label: "Projects",
    href: "/projects",
    icon: Folder,
  },
  {
    label: "Contact",
    href: "/contact",
    icon: Mail,
  },
];

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

export default function Navigation() {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [menuOpen]);

  return (
    <>
      {/* TOP NAVIGATION */}
      <nav className="w-full border-b border-[var(--border-soft)] bg-[var(--background)] text-white">
        <div className="page-container flex max-w-md items-center justify-between py-5">
          <Link
            href="/"
            className="
              text-sm
              font-bold
              tracking-wide
              transition
              hover:text-blue-400
            "
          >
            {siteConfig.name.toUpperCase()}
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
            className="
              text-slate-300
              transition
              hover:text-blue-400
            "
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* MENU OVERLAY */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          onClick={closeMenu}
        >
          <aside
            aria-label="Main navigation"
            className="
              ml-auto
              flex
              min-h-screen
              w-72
              flex-col
              border-l
              border-[var(--border-soft)]
              bg-[var(--background)]
              px-6
              py-6
              text-white
              shadow-2xl
            "
            onClick={(event) => event.stopPropagation()}
          >
            {/* CLOSE */}
            <div className="flex justify-end">
              <button
                type="button"
                onClick={closeMenu}
                aria-label="Close navigation menu"
                className="
                  text-slate-300
                  transition
                  hover:text-blue-400
                "
              >
                <X size={24} />
              </button>
            </div>

            {/* PAGE LINKS */}
            <div className="mt-12 flex flex-col gap-2">
              {navigationItems.map((item) => {
                const Icon = item.icon;

                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    aria-current={isActive ? "page" : undefined}
                    className={`
                      flex
                      items-center
                      gap-4
                      rounded-xl
                      px-3
                      py-3
                      transition
                      ${
                        isActive
                          ? "bg-blue-500/10 text-blue-400"
                          : "text-slate-200 hover:bg-white/5 hover:text-blue-300"
                      }
                    `}
                  >
                    <Icon size={22} />

                    <span>
                      {item.label}
                    </span>
                  </Link>
                );
              })}
            </div>

            <div className="my-7 border-t border-[var(--border-soft)]" />

            {/* RESUME */}
            <a
              href={siteConfig.resume}
              download
              className="button button-primary gap-2 rounded-xl"
            >
              <Download size={20} />
              Resume
            </a>

            <div className="my-7 border-t border-[var(--border-soft)]" />

            {/* SOCIAL LINKS */}
            <div className="flex flex-col gap-2">
              {socialLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex
                      items-center
                      gap-4
                      rounded-xl
                      px-3
                      py-3
                      text-slate-200
                      transition
                      hover:bg-white/5
                      hover:text-blue-300
                    "
                  >
                    <Icon size={22} />

                    <span>
                      {link.label}
                    </span>
                  </a>
                );
              })}
            </div>

            {/* BRAND MARK */}
            <div className="mt-auto border-t border-[var(--border-soft)] pt-6 text-center">
              <p className="text-xs text-slate-500">
                {siteConfig.domain}
              </p>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}