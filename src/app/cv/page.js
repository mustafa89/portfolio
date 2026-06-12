'use client';

import Link from "next/link";
import { contactChannels, education, experience, profile, skillGroups } from "../data/portfolio";

export default function CVPage() {
  return (
    <div className="cv-page min-h-screen px-4 py-6 sm:px-6 lg:px-8">
      <div className="no-print mx-auto mb-6 flex max-w-4xl flex-wrap gap-3">
        <Link href="/about" className="button-secondary focus-ring !border-slate-300 !bg-white !text-slate-900 hover:!bg-slate-100">
          ← Back to Site
        </Link>
        <button type="button" onClick={() => window.print()} className="button-primary focus-ring">
          Print or Save PDF
        </button>
      </div>

      <main id="main-content" className="cv-sheet mx-auto max-w-4xl rounded-[2rem] p-8 sm:p-10" aria-labelledby="cv-title">
        <header className="border-b border-slate-200 pb-6">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-emerald-700">{profile.title}</p>
          <h1 id="cv-title" className="mt-2 text-4xl font-black tracking-[-0.06em] text-slate-950 sm:text-5xl">
            {profile.name}
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-700">{profile.positioning}</p>
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-700">
            <span>{profile.location}</span>
            {contactChannels.map((channel) => (
              <a key={channel.label} href={channel.href} className="font-semibold text-emerald-800">
                {channel.value}
              </a>
            ))}
          </div>
        </header>

        <section className="mt-8" aria-labelledby="cv-skills">
          <h2 id="cv-skills" className="text-xl font-black tracking-[-0.04em] text-slate-950">Skills</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group.title} className="rounded-2xl border border-slate-200 p-4">
                <h3 className="font-bold text-slate-950">{group.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">{group.items.join(" · ")}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8" aria-labelledby="cv-experience">
          <h2 id="cv-experience" className="text-xl font-black tracking-[-0.04em] text-slate-950">Experience</h2>
          <div className="mt-4 space-y-6">
            {experience.map((item) => (
              <article key={`${item.company}-${item.role}`} className="break-inside-avoid border-b border-slate-200 pb-5 last:border-0 last:pb-0">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-lg font-black text-slate-950">{item.role}</h3>
                  <p className="font-mono text-sm text-slate-600">{item.period}</p>
                </div>
                <p className="mt-1 font-semibold text-emerald-800">{item.company}</p>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-700">
                  {item.focus.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-8" aria-labelledby="cv-education">
          <h2 id="cv-education" className="text-xl font-black tracking-[-0.04em] text-slate-950">Education</h2>
          <div className="mt-4 rounded-2xl border border-slate-200 p-4">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="font-black text-slate-950">{education.degree}</h3>
              <p className="font-mono text-sm text-slate-600">{education.period}</p>
            </div>
            <p className="mt-1 text-slate-700">{education.institution}</p>
          </div>
        </section>
      </main>
    </div>
  );
}
