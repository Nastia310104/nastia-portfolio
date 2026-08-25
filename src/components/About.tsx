export default function About() {
  return (
    <section className="mx-auto w-full max-w-md px-6 py-12">
      <div className="mb-12">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
          About
        </p>

        <h1 className="mt-2 text-4xl font-bold tracking-tight">
          A little more about me.
        </h1>

        <p className="mt-6 leading-7 text-slate-300">
          I&apos;m a Computer Science student and aspiring software developer
          with a background in administrative work and backend development.
          I like building practical things, figuring out how systems work, and
          learning by turning ideas into real projects.
        </p>

        <p className="mt-4 leading-7 text-slate-400">
          Outside of code, I organize community gardening projects, volunteer
          with horticulture education, and somehow manage to involve cats in
          an unreasonable number of my software projects.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold">Experience</h2>

        <div className="mt-6 border-l border-slate-700 pl-5">
          <p className="text-sm text-blue-400">2023 - Present</p>

          <h3 className="mt-1 text-lg font-semibold">
            Administrative Assistant
          </h3>

          <p className="text-slate-400">
            SUNY Oswego - Triandiflou Institute
          </p>

          <p className="mt-3 leading-7 text-slate-300">
            Support day-to-day operations, coordinate events and communication,
            manage administrative workflows, and help keep a very busy office
            organized.
          </p>
        </div>

        <div className="mt-8 border-l border-slate-700 pl-5">
          <p className="text-sm text-blue-400">2021 - 2022</p>

          <h3 className="mt-1 text-lg font-semibold">
            Backend Developer
          </h3>

          <p className="text-slate-400">
            Taptima
          </p>

          <p className="mt-3 leading-7 text-slate-300">
            Worked with PHP, Symfony, JavaScript, Git, Docker, and MySQL while
            contributing to backend application development.
          </p>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold">Education</h2>

        <div className="mt-6 border-l border-slate-700 pl-5">
          <p className="text-sm text-blue-400">2026 - 2027</p>

          <h3 className="mt-1 text-lg font-semibold">
            A.S. Computer Science
          </h3>

          <p className="text-slate-400">
            Finger Lakes Community College
          </p>

          <p className="mt-3 leading-7 text-slate-300">
            Coursework includes Java, C#, web development, data structures,
            calculus, and software development projects.
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold">
          Community & Volunteering
        </h2>

        <div className="mt-6 border-l border-slate-700 pl-5">
          <h3 className="text-lg font-semibold">
            Gardening Club Organizer
          </h3>

          <p className="mt-3 leading-7 text-slate-300">
            Organize gardening activities and educational opportunities for the
            SUNY Oswego community.
          </p>
        </div>

        <div className="mt-8 border-l border-slate-700 pl-5">
          <h3 className="text-lg font-semibold">
            Master Gardener Volunteer
          </h3>

          <p className="mt-3 leading-7 text-slate-300">
            Participate in horticulture education and community gardening work
            through Cornell Cooperative Extension.
          </p>
        </div>
      </div>
    </section>
  );
}