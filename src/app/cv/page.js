'use client'

import Link from "next/link";
import SafeIcon from "../components/SafeIcon";
import {
  contactChannels,
  education,
  experience,
  locationChannel,
  profile,
  toolsData,
  visualSkillGroups,
} from "../data/portfolio";

export default function CVPage() {
  // Auto-trigger print dialog when Print CV button is clicked
  const handlePrint = () => {
    window.print();
  };

  // Generate PDF download from the current page
  const handleDownloadPDF = () => {
    window.print();
  };

  return (
    <div className="cv-page min-h-screen px-4 py-6 sm:px-6 lg:px-8">
      <div className="no-print mx-auto mb-6 flex max-w-5xl flex-wrap gap-3">
        <Link href="/" className="button-secondary focus-ring !border-slate-300 !bg-white !text-slate-900 hover:!bg-slate-100">
          ← Back to Desktop
        </Link>
        <button type="button" onClick={() => window.print()} className="button-primary focus-ring">
          Print or Save PDF
        </button>
      </div>

      <main id="main-content" className="cv-sheet mx-auto max-w-5xl rounded-[2rem] p-8 sm:p-10" aria-labelledby="cv-title">
        <header className="cv-header grid gap-6 border-b border-white/10 pb-7 lg:grid-cols-[1fr_0.72fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-indigo-300">{profile.title}</p>
            <h1 id="cv-title" className="mt-2 text-4xl font-black tracking-[-0.06em] text-neutral-100 sm:text-5xl">
              {profile.name}
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-neutral-300">{profile.positioning}</p>
          </div>

          <div className="cv-contact-list grid gap-2 text-sm text-neutral-300">
            {[...contactChannels, locationChannel].map((channel) => (
              <a key={channel.label} href={channel.href} className="cv-contact-link flex min-w-0 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-neutral-300 no-underline">
                <SafeIcon src={channel.logo} label={channel.label} />
                <span className="truncate">
                  <span className="font-bold text-neutral-100">{channel.label}: </span>
                  {channel.value}
                </span>
              </a>
            ))}
          </div>
        </header>

        <section className="cv-section mt-8" aria-labelledby="cv-skills">
          <h2 id="cv-skills" className="text-xl font-black tracking-[-0.04em] text-neutral-100">Professional Skills</h2>
          <div className="cv-skills-grid mt-4 grid gap-6 md:grid-cols-2">
            {visualSkillGroups.map((group) => (
              <article key={group.title} className="cv-skill-card rounded-2xl border border-white/10 bg-[#121212] p-5">
                <h3 className="font-black text-neutral-100">{group.title}</h3>
                <div className="mt-4 space-y-4">
                  {group.skills.map((skill) => (
                    <div key={skill.name} className="skill-item">
                      <div className="mb-2 flex items-center justify-between gap-4">
                        <span className="flex min-w-0 items-center gap-2">
                          <SafeIcon src={skill.logo} label={skill.name} />
                          <span className="truncate text-sm font-semibold text-neutral-400">{skill.name}</span>
                        </span>
                        <span className="cv-skill-score font-mono text-xs font-bold text-indigo-300/80">{skill.proficiency}%</span>
                      </div>
                      <div className="skill-bar skill-bar-light" aria-label={`${skill.name} proficiency ${skill.proficiency}%`}>
                        <div className="skill-progress" style={{ width: `${skill.proficiency}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="cv-section mt-8" aria-labelledby="cv-tools">
          <h2 id="cv-tools" className="text-xl font-black tracking-[-0.04em] text-neutral-100">Tools & Technologies</h2>
          <div className="cv-tools-grid mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {toolsData.map((tool) => (
              <div key={tool.name} className="tool-tile tool-tile-light">
                <SafeIcon src={tool.logo} label={tool.name} />
                <span className="truncate text-sm font-semibold text-neutral-400">{tool.name}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="cv-section mt-8" aria-labelledby="cv-experience">
          <h2 id="cv-experience" className="text-xl font-black tracking-[-0.04em] text-neutral-100">Professional Experience</h2>
          <div className="cv-experience-list mt-4 space-y-6">
            {experience.map((item) => (
              <article key={`${item.company}-${item.role}`} className="cv-experience-item break-inside-avoid border-b border-white/10 pb-5 last:border-0 last:pb-0">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-lg font-black text-neutral-100">{item.role}</h3>
                  <p className="font-mono text-sm text-neutral-500">{item.period}</p>
                </div>
                <p className="cv-company mt-1 font-semibold text-indigo-300">{item.company}</p>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-6 text-neutral-400">
                  {item.focus.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="cv-section mt-8" aria-labelledby="cv-education">
          <h2 id="cv-education" className="text-xl font-black tracking-[-0.04em] text-neutral-100">Education</h2>
          <div className="cv-education-card mt-4 rounded-2xl border border-white/10 bg-[#121212] p-4">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="font-black text-neutral-100">{education.degree}</h3>
              <p className="font-mono text-sm text-neutral-500">{education.period}</p>
            </div>
            <p className="mt-1 text-neutral-400">{education.institution}</p>
          </div>
        </div>
      </div>
    </>
  );
} 