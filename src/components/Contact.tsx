import Image from "next/image";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="mx-auto flex min-h-screen w-full max-w-md flex-col px-6 py-10">
      <div className="flex flex-1 flex-col justify-center">
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
              className="relative object-contain drop-shadow-[0_0_22px_rgba(139,92,246,0.35)]"
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

        <div className="mt-8 space-y-3">
          <a
            href="mailto:kotliar.dev@gmail.com"
            className="
              group
              flex items-center gap-4
              rounded-xl
              border border-purple-500/40
              bg-purple-950/30
              px-5 py-4
              transition
              hover:border-purple-400
              hover:bg-purple-950/50
              hover:shadow-[0_0_24px_rgba(139,92,246,0.14)]
            "
          >
            <FaEnvelope className="text-xl text-purple-300 transition group-hover:text-purple-200" />

            <div className="min-w-0 text-left">
              <p className="font-semibold text-slate-100">Email Me</p>
              <p className="truncate text-sm text-slate-400">
                kotliar.dev@gmail.com
              </p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/ana-00f-kotliar/"
            target="_blank"
            rel="noreferrer"
            className="
              group
              flex items-center gap-4
              rounded-xl
              border border-slate-700
              bg-slate-950/40
              px-5 py-4
              transition
              hover:border-blue-500
              hover:bg-slate-900
              hover:shadow-[0_0_24px_rgba(59,130,246,0.12)]
            "
          >
            <FaLinkedin className="text-xl text-blue-400 transition group-hover:text-blue-300" />

            <div className="min-w-0 text-left">
              <p className="font-semibold text-slate-100">LinkedIn</p>
              <p className="truncate text-sm text-slate-400">
                linkedin.com/in/ana-00f-kotliar
              </p>
            </div>
          </a>

          <a
            href="https://github.com/Nastia310104"
            target="_blank"
            rel="noreferrer"
            className="
              group
              flex items-center gap-4
              rounded-xl
              border border-slate-700
              bg-slate-950/40
              px-5 py-4
              transition
              hover:border-blue-500
              hover:bg-slate-900
              hover:shadow-[0_0_24px_rgba(59,130,246,0.12)]
            "
          >
            <FaGithub className="text-xl text-slate-200 transition group-hover:text-blue-300" />

            <div className="min-w-0 text-left">
              <p className="font-semibold text-slate-100">GitHub</p>
              <p className="truncate text-sm text-slate-400">
                github.com/Nastia310104
              </p>
            </div>
          </a>
        </div>

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
                className="object-contain drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]"
            />
            </div>
        </div>
      </div>
    </section>
  );
}