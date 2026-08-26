import { Mail } from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-[#020817] text-white">
      <div className="mx-auto w-full max-w-md px-6 py-10 text-center">

        <p className="text-sm text-slate-300">
          Built with love, cats, and lots of coffee.
          <span className="ml-2">♥ 🐈 ☕</span>
        </p>

        <div className="mt-7 flex justify-center gap-6">
          <a
            href="https://github.com/kotliar-dev"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-slate-300 transition hover:text-blue-400"
          >
            <FaGithub size={24} />
          </a>

          <a
            href="https://www.linkedin.com/in/kotliar-dev/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-slate-300 transition hover:text-blue-400"
          >
            <FaLinkedin size={24} />
          </a>

          <a
            href="mailto:kotliar.dev@gmail.com"
            aria-label="Email"
            className="text-slate-300 transition hover:text-blue-400"
          >
            <Mail size={24} />
          </a>
        </div>

        <div className="mt-7 border-t border-slate-800 pt-7 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Nastia Kotliar
          </p>

          <p className="mt-1">
            All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}