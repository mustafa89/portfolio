import Navbar from "../components/navbar";
import { capabilities, contactChannels, education, experience, profile, skillGroups } from "../data/portfolio";

export const metadata = {
  title: "About",
  description: "Experience, skills, and background for Mustafa Mujahid, Senior Site Reliability Engineer.",
};

export default function AboutPage() {
  return (
    <div className="site-shell min-h-screen overflow-x-hidden">
      <Navbar />
      <main id="main-content" className="mx-auto max-w-7xl px-5 pb-24 pt-14 lg:px-8">
        <section className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start" aria-labelledby="about-title">
          <div className="content-card lg:sticky lg:top-28">
            <p className="kicker">About</p>
            <h1 id="about-title" className="mt-4 text-5xl font-black tracking-[-0.07em] text-emerald-50 sm:text-6xl">
              Builder of boring foundations for ambitious systems.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">{profile.positioning}</p>
            <div className="mt-8 space-y-3 text-sm text-slate-300">
              {contactChannels.map((channel) => (
                <a key={channel.label} href={channel.href} className="group flex min-w-0 items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 no-underline transition-colors hover:border-emerald-300/40 hover:bg-emerald-300/[0.06] focus-ring">
                  <span className="min-w-0">
                    <span className="block font-bold text-emerald-50">{channel.label}</span>
                    <span className="block truncate text-slate-400">{channel.value}</span>
                  </span>
                  <span aria-hidden="true" className="text-emerald-300 transition-transform group-hover:translate-x-1">→</span>
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <section className="content-card" aria-labelledby="capability-title">
              <p className="kicker">Capabilities</p>
              <h2 id="capability-title" className="mt-3 text-3xl font-black tracking-[-0.05em] text-emerald-50">Where I spend most of my engineering calories.</h2>
              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {capabilities.map((capability) => (
                  <article key={capability.title} className="rounded-2xl border border-white/10 bg-black/15 p-5">
                    <p className="text-xs uppercase tracking-[0.22em] text-emerald-300/75">{capability.eyebrow}</p>
                    <h3 className="mt-3 font-bold text-emerald-50">{capability.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-300">{capability.description}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="content-card" aria-labelledby="skills-title">
              <p className="kicker">Toolbelt</p>
              <h2 id="skills-title" className="mt-3 text-3xl font-black tracking-[-0.05em] text-emerald-50">Technologies I reach for without ceremony.</h2>
              <div className="mt-8 grid gap-5 md:grid-cols-2">
                {skillGroups.map((group) => (
                  <article key={group.title} className="rounded-2xl border border-white/10 bg-black/15 p-5">
                    <h3 className="font-bold text-emerald-50">{group.title}</h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span key={item} className="chip">{item}</span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="content-card" aria-labelledby="experience-title">
              <p className="kicker">Experience</p>
              <h2 id="experience-title" className="mt-3 text-3xl font-black tracking-[-0.05em] text-emerald-50">Production scars, progressively refined.</h2>
              <div className="mt-8 space-y-10">
                {experience.map((item) => (
                  <article key={`${item.company}-${item.role}`} className="timeline-item">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                      <h3 className="text-xl font-bold text-emerald-50">{item.role}</h3>
                      <p className="font-mono text-sm text-emerald-200/75">{item.period}</p>
                    </div>
                    <p className="mt-1 font-semibold text-slate-300">{item.company}</p>
                    <ul className="mt-4 space-y-2 text-slate-300">
                      {item.focus.map((point) => (
                        <li key={point} className="leading-7">{point}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>

            <section className="content-card" aria-labelledby="education-title">
              <p className="kicker">Education</p>
              <h2 id="education-title" className="mt-3 text-3xl font-black tracking-[-0.05em] text-emerald-50">{education.degree}</h2>
              <p className="mt-3 text-slate-300">{education.institution}</p>
              <p className="mt-1 font-mono text-sm text-emerald-200/75">{education.period}</p>
            </section>
          </div>
        </section>
      </main>
    </div>
  );
}
