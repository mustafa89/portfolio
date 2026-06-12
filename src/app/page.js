import Navbar from "./components/navbar";
import Link from "next/link";
import { capabilities, metrics, profile, projects } from "./data/portfolio";

export default function Home() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="site-shell min-h-screen overflow-x-hidden">
      <Navbar />
      <main id="main-content" className="mx-auto max-w-7xl px-5 pb-24 pt-16 sm:pt-24 lg:px-8">
        <section className="grid gap-10 lg:grid-cols-[1.06fr_0.94fr] lg:items-end" aria-labelledby="hero-title">
          <div className="animate-rise">
            <p className="kicker">Production Systems · Cloud Platforms · Calm Incidents</p>
            <h1 id="hero-title" className="hero-title mt-5 max-w-5xl text-balance text-5xl font-black tracking-[-0.07em] text-emerald-50 sm:text-7xl lg:text-8xl">
              SRE work with a bias for boring, resilient magic.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              {profile.summary}
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link href="/projects" className="button-primary focus-ring">
                Explore Selected Work
              </Link>
              <Link href="/cv" className="button-secondary focus-ring">
                Open Printable CV
              </Link>
            </div>
          </div>

          <aside className="terminal-card animate-rise delay-150" aria-label="Reliability snapshot">
            <div className="terminal-bar">
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span className="ml-2 text-xs text-slate-400">status.mustafa.dev</span>
            </div>
            <div className="mt-6 space-y-5 font-mono text-sm text-emerald-100/85">
              <p><span className="text-emerald-300">$</span> whoami</p>
              <p className="pl-4 text-slate-300">{profile.title} · {profile.location}</p>
              <p><span className="text-emerald-300">$</span> current_focus</p>
              <ul className="space-y-2 pl-4 text-slate-300">
                <li>→ reliable deployment paths</li>
                <li>→ observable infrastructure</li>
                <li>→ automation that deletes toil</li>
              </ul>
              <p><span className="text-emerald-300">$</span> incident_mode</p>
              <p className="pl-4 text-slate-300">calm, curious, evidence-first</p>
            </div>
          </aside>
        </section>

        <section className="mt-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-4" aria-label="Career highlights">
          {metrics.map((metric) => (
            <div key={metric.label} className="metric-card">
              <div className="text-4xl font-black tracking-[-0.06em] text-emerald-200">{metric.value}</div>
              <div className="mt-2 text-sm uppercase tracking-[0.18em] text-slate-400">{metric.label}</div>
            </div>
          ))}
        </section>

        <section className="mt-24" aria-labelledby="capabilities-title">
          <div className="section-heading">
            <p className="kicker">What I Bring</p>
            <h2 id="capabilities-title" className="section-title">The work behind the uptime graph.</h2>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {capabilities.map((capability) => (
              <article key={capability.title} className="feature-card">
                <p className="text-xs uppercase tracking-[0.28em] text-emerald-300/75">{capability.eyebrow}</p>
                <h3 className="mt-4 text-2xl font-bold tracking-[-0.04em] text-emerald-50">{capability.title}</h3>
                <p className="mt-4 leading-7 text-slate-300">{capability.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {capability.proof.map((item) => (
                    <span key={item} className="chip">{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-24" aria-labelledby="work-title">
          <div className="section-heading sm:flex sm:items-end sm:justify-between">
            <div>
              <p className="kicker">Selected Work</p>
              <h2 id="work-title" className="section-title">Systems, not screenshots.</h2>
            </div>
            <Link href="/projects" className="text-link focus-ring mt-5 inline-flex sm:mt-0">
              View All Projects →
            </Link>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <article key={project.title} className="project-card">
                <p className="text-sm text-emerald-300">{project.type}</p>
                <h3 className="mt-3 text-2xl font-bold tracking-[-0.04em] text-emerald-50">{project.title}</h3>
                <p className="mt-4 leading-7 text-slate-300">{project.impact}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
