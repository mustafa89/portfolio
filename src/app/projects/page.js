import Navbar from "../components/navbar";
import { projects } from "../data/portfolio";

export const metadata = {
  title: "Projects",
  description: "Selected infrastructure, automation, observability, security, and platform engineering work by Mustafa Mujahid.",
};

export default function ProjectsPage() {
  return (
    <div className="site-shell min-h-screen overflow-x-hidden">
      <Navbar />
      <main id="main-content" className="mx-auto max-w-7xl px-5 pb-24 pt-14 lg:px-8">
        <section className="max-w-4xl" aria-labelledby="projects-title">
          <p className="kicker">Selected Work</p>
          <h1 id="projects-title" className="mt-5 text-5xl font-black tracking-[-0.07em] text-emerald-50 sm:text-7xl">
            A portfolio of systems thinking.
          </h1>
          <p className="mt-7 text-lg leading-8 text-slate-300 sm:text-xl">
            These are the kinds of problems I enjoy: infrastructure maps, deployment safety, spend visibility, supply-chain hardening, alerting clarity, and developer workflows that make reliability easier to practice.
          </p>
        </section>

        <section className="mt-12 grid gap-5 lg:grid-cols-2" aria-label="Project list">
          {projects.map((project) => (
            <article key={project.title} className="project-card min-h-0">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-300/75">{project.type}</p>
                  <h2 className="mt-3 text-3xl font-black tracking-[-0.05em] text-emerald-50">{project.title}</h2>
                </div>
              </div>
              <p className="mt-5 text-lg leading-8 text-slate-300">{project.impact}</p>
              <p className="mt-4 leading-7 text-slate-400">{project.description}</p>
              <div className="mt-7 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="chip">{item}</span>
                ))}
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
