import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex min-h-screen w-full max-w-md flex-col px-6 py-8">
        <header className="flex items-center justify-between">
          <p className="text-sm font-semibold tracking-wide">
            NASTIA KOTLIAR
          </p>

          <button
            type="button"
            className="rounded-lg border border-slate-700 px-3 py-2 text-sm text-slate-300"
          >
            Menu
          </button>
        </header>

        <div className="flex flex-1 flex-col justify-center py-12">
          <div className="mb-8">

            <h1 className="text-5xl font-bold leading-tight tracking-tight">
              Hi, I&apos;m{" "}
              <span className="text-blue-400">
                Nastia.
              </span>
            </h1>

            <p className="mt-5 text-xl leading-8 text-slate-200">
              Computer Science student & aspiring software developer.
            </p>

            <p className="mt-6 leading-7 text-slate-400">
              I build things, solve problems, learn obsessively, and
              occasionally put cats in my software. 🐈‍⬛
            </p>
          </div>

          <div className="relative mb-10 h-96 overflow-hidden rounded-3xl">
            <Image
              src="/images/nastia-portrait.png"
              alt="Portrait of Nastia Kotliar"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="flex flex-col gap-3">
            <a
              href="/projects"
              className="rounded-xl bg-blue-600 px-6 py-4 text-center font-semibold transition hover:bg-blue-500"
            >
              View Projects
            </a>

            <a
              href="/contact"
              className="rounded-xl border border-slate-700 px-6 py-4 text-center font-semibold text-slate-200 transition hover:bg-slate-900"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3">
            <a
              href="#"
              className="rounded-xl border border-slate-800 px-3 py-4 text-center text-sm text-slate-300"
            >
              GitHub
            </a>

            <a
              href="#"
              className="rounded-xl border border-slate-800 px-3 py-4 text-center text-sm text-slate-300"
            >
              LinkedIn
            </a>

            <a
              href="#"
              className="rounded-xl border border-slate-800 px-3 py-4 text-center text-sm text-slate-300"
            >
              Résumé
            </a>
          </div>
        </div>

        <div className="pb-4 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-600">
            Scroll to explore
          </p>
        </div>
      </section>
    </main>
  );
}