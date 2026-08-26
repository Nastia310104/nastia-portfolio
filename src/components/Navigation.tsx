"use client";

import { useState } from "react";
import Link from "next/link";
// Interface icons
import {
  X,
  Home,
  User,
  Folder,
  Mail,
  Download,
  Moon,
  Sun,
} from "lucide-react";

// Brand icons
import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="w-full bg-[#020817] text-white">
        <div className="mx-auto flex max-w-md items-center justify-between px-6 py-5">
          <Link
            href="/"
            className="text-sm font-bold tracking-wide"
          >
            NASTIA KOTLIAR
          </Link>

          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation menu"
            className="text-slate-300"
          >
            ☰
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black/60">
          <aside className="ml-auto flex min-h-screen w-72 flex-col bg-[#020817] px-6 py-6 text-white shadow-2xl">
            
            <div className="flex justify-end">
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Close navigation menu"
                className="text-slate-300"
              >
                <X size={24} />
              </button>
            </div>

            <div className="mt-12 flex flex-col gap-6">
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-4 text-blue-400"
              >
                <Home size={22} />
                <span>Home</span>
              </Link>

              <Link
                href="/about"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-4 text-slate-200"
              >
                <User size={22} />
                <span>About</span>
              </Link>

              <Link
                href="/projects"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-4 text-slate-200"
              >
                <Folder size={22} />
                <span>Projects</span>
              </Link>

              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-4 text-slate-200"
              >
                <Mail size={22} />
                <span>Contact</span>
              </Link>
            </div>

            <div className="my-7 border-t border-slate-800" />

            <a
              href="/documents/nastia-kotliar-resume.pdf"
              download
              className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-4 py-3 font-semibold"
            >
              <Download size={20} />
              Resume
            </a>

            <div className="my-7 border-t border-slate-800" />

            <div className="flex flex-col gap-5">
              <a
                href="https://github.com/kotliar-dev"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 text-slate-200"
              >
                <FaGithub size={22} />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/kotliar-dev/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 text-slate-200"
              >
                <FaLinkedin size={22} />
                <span>LinkedIn</span>
              </a>
            </div>

            <div className="mt-auto border-t border-slate-800 pt-6">
              <div className="flex items-center justify-center gap-4 text-slate-300">
                <Moon size={20} />

                <div className="relative h-6 w-12 rounded-full border border-blue-500 bg-slate-900">
                  <div className="absolute left-1 top-1 h-4 w-4 rounded-full bg-blue-500" />
                </div>

                <Sun size={20} />
              </div>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}