import Image from "next/image";

import {
  FaBriefcase,
  FaGraduationCap,
  FaSeedling,
  FaBrain,
  FaRocket,
  FaBullseye,
  FaPuzzlePiece,
} from "react-icons/fa";

export default function About() {
  return (
    <section
      id="top"
      className="mx-auto w-full max-w-md px-6 py-12"
    >
      {/* INTRO */}
      <div className="mb-14">
        <h1 className="text-4xl font-bold tracking-tight">
          About Me
        </h1>

        <div className="relative mx-auto mt-6 h-56 w-full max-w-xs">
          <div className="absolute inset-8 rounded-full bg-purple-600/20 blur-3xl" />

          <Image
            src="/images/about-cat.png"
            alt="Neon cat waving with a heart speech bubble"
            fill
            sizes="(max-width: 768px) 100vw, 320px"
            className="
              object-contain
              drop-shadow-[0_0_20px_rgba(139,92,246,0.35)]
            "
            priority
          />
        </div>

        <p className="mt-6 leading-7 text-slate-300">
          I&apos;m a Computer Science student who loves turning ideas into real
          things. I enjoy building clean, useful, and sometimes playful software
          that solves problems people actually have.
        </p>

        <p className="mt-5 leading-7 text-slate-400">
          Outside of code, I&apos;m probably in my garden, planning my next
          project, or learning something new that I definitely don&apos;t need...
          yet. 🌱
        </p>
      </div>

      {/* MINDSET */}
      <div className="mb-16">
        <h2 className="text-center text-2xl font-bold">
          Achievements /
          <br />
          Learning Mindset
        </h2>

        <div className="mt-7 space-y-3">
          <div className="flex gap-4 rounded-2xl border border-slate-800 bg-slate-950/50 p-5">
            <FaBrain className="mt-1 shrink-0 text-2xl text-pink-400" />
            <div>
              <h3 className="font-semibold text-slate-100">
                Curious by nature
              </h3>
              <p className="mt-1 text-sm leading-6 text-slate-400">
                I love diving deep, asking questions, and understanding how
                things really work.
              </p>
            </div>
          </div>

          <div className="flex gap-4 rounded-2xl border border-slate-800 bg-slate-950/50 p-5">
            <FaRocket className="mt-1 shrink-0 text-2xl text-blue-400" />
            <div>
              <h3 className="font-semibold text-slate-100">
                Always learning
              </h3>
              <p className="mt-1 text-sm leading-6 text-slate-400">
                New tech, new concepts, new challenges - I get excited about
                them all.
              </p>
            </div>
          </div>

          <div className="flex gap-4 rounded-2xl border border-slate-800 bg-slate-950/50 p-5">
            <FaBullseye className="mt-1 shrink-0 text-2xl text-red-400" />
            <div>
              <h3 className="font-semibold text-slate-100">
                Goal-oriented
              </h3>
              <p className="mt-1 text-sm leading-6 text-slate-400">
                I set high standards for myself and enjoy turning big goals into
                small daily wins.
              </p>
            </div>
          </div>

          <div className="flex gap-4 rounded-2xl border border-slate-800 bg-slate-950/50 p-5">
            <FaPuzzlePiece className="mt-1 shrink-0 text-2xl text-cyan-400" />
            <div>
              <h3 className="font-semibold text-slate-100">
                Problem solver
              </h3>
              <p className="mt-1 text-sm leading-6 text-slate-400">
                I see problems as puzzles. The fun is finding the right approach
                and making it work.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* EXPERIENCE */}
      <div className="mb-14">
        <div className="flex items-center gap-3">
          <FaBriefcase className="text-xl text-slate-300" />
          <h2 className="text-2xl font-bold">
            Experience
          </h2>
        </div>

        <div className="mt-6 space-y-4">
          <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-5">
            <h3 className="font-semibold text-slate-100">
              Administrative Assistant
            </h3>

            <p className="mt-1 text-sm text-blue-400">
              SUNY Oswego
            </p>

            <p className="mt-1 text-sm text-slate-500">
              2023 - Present
            </p>

            <p className="mt-4 leading-7 text-slate-300">
              Event coordination, communication, administrative systems, and
              supporting cross-team operations.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-5">
            <h3 className="font-semibold text-slate-100">
              Backend Developer
            </h3>

            <p className="mt-1 text-sm text-blue-400">
              Taptima
            </p>

            <p className="mt-1 text-sm text-slate-500">
              2021 - 2022
            </p>

            <p className="mt-4 leading-7 text-slate-300">
              Developed and maintained web applications using PHP (Symfony),
              MySQL, Docker, Git, and JavaScript.
            </p>
          </div>
        </div>
      </div>

      {/* EDUCATION */}
      <div className="mb-14">
        <div className="flex items-center gap-3">
          <FaGraduationCap className="text-xl text-slate-300" />
          <h2 className="text-2xl font-bold">
            Education
          </h2>
        </div>

        <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-950/50 p-5">
          <h3 className="font-semibold text-slate-100">
            Finger Lakes Community College
          </h3>

          <p className="mt-2 text-blue-400">
            A.S. in Computer Science
          </p>

          <p className="mt-1 text-sm text-slate-500">
            Expected 2027
          </p>

          <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-300">
            <li>• Relevant coursework in software development</li>
            <li>• Honors student</li>
            <li>• Phi Theta Kappa</li>
          </ul>
        </div>
      </div>

      {/* VOLUNTEERING */}
      <div className="mb-12">
        <div className="flex items-center gap-3">
          <FaSeedling className="text-xl text-purple-300" />
          <h2 className="text-2xl font-bold">
            Volunteering
          </h2>
        </div>

        <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-950/50 p-5">
          <h3 className="font-semibold text-slate-100">
            Community Involvement
          </h3>

          <p className="mt-4 leading-7 text-slate-300">
            I enjoy giving back, helping with events, and being part of
            initiatives that make a positive impact.
          </p>

          <p className="mt-4 text-sm leading-6 text-slate-400">
            Gardening Club Organizer · Master Gardener Volunteer
          </p>
        </div>
      </div>

      {/* BACK TO TOP */}
      <div className="text-center">
        <a
          href="#top"
          className="
            inline-flex items-center gap-2
            rounded-full
            border border-purple-500/50
            px-5 py-2.5
            text-sm font-medium
            text-purple-300
            transition
            hover:border-purple-400
            hover:bg-purple-950/40
            hover:text-purple-200
          "
        >
          Back to Top ↑
        </a>
      </div>
    </section>
  );
}
