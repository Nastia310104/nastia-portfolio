export default function Contact() {
  return (
    <section className="mx-auto w-full max-w-md px-6 py-12">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
        Contact
      </p>

      <h1 className="mt-2 text-4xl font-bold tracking-tight">
        Let&apos;s connect.
      </h1>

      <p className="mt-6 leading-7 text-slate-300">
        I&apos;m always happy to talk about software development, interesting
        projects, internships, or opportunities to build something useful.
      </p>

      <div className="mt-10 space-y-4">
        <a
          href="mailto:kotliar.dev@gmail.com"
          className="block rounded-2xl border border-slate-800 bg-slate-900 p-5"
        >
          <p className="text-sm text-slate-400">Email</p>
          <p className="mt-1 font-semibold">kotliar.dev@gmail.com</p>
        </a>

        <a
          href="https://www.linkedin.com/in/ana-00f-kotliar/"
          target="_blank"
          rel="noreferrer"
          className="block rounded-2xl border border-slate-800 bg-slate-900 p-5"
        >
          <p className="text-sm text-slate-400">LinkedIn</p>
          <p className="mt-1 font-semibold">Connect on LinkedIn</p>
        </a>

        <a
          href="https://github.com/Nastia310104"
          target="_blank"
          rel="noreferrer"
          className="block rounded-2xl border border-slate-800 bg-slate-900 p-5"
        >
          <p className="text-sm text-slate-400">GitHub</p>
          <p className="mt-1 font-semibold">View my code</p>
        </a>
      </div>
    </section>
  );
}