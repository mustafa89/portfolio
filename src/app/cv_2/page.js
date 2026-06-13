'use client';

import Link from "next/link";
import {
  cvProjects,
  education,
  experience,
  experienceImpact,
  languages,
  profile,
  skillGroups,
} from "../data/portfolio";

export default function CV2Page() {
  return (
    <div className="cv2-page">
      <div className="cv2-toolbar no-print">
        <Link href="/">← back to desktop</Link>
        <Link href="/cv">classic edition</Link>
        <button type="button" onClick={() => window.print()}>print / save pdf</button>
      </div>

      <main id="main-content" className="cv2-sheet" aria-labelledby="cv2-title">
        <header className="cv2-header">
          <h1 id="cv2-title">{profile.name}</h1>
          <p className="cv2-role">{profile.title}</p>
          <p className="cv2-contact">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <span aria-hidden="true"> · </span>
            <a href={profile.github}>{profile.githubLabel}</a>
            <span aria-hidden="true"> · </span>
            <a href={profile.linkedin}>{profile.linkedinLabel}</a>
            <span aria-hidden="true"> · </span>
            {profile.location}
          </p>
          <p className="cv2-summary">{profile.positioning}</p>
        </header>

        <section className="cv2-section" aria-labelledby="cv2-exp">
          <h2 id="cv2-exp">Experience</h2>
          {experience.map((job) => (
            <article key={job.company} className="cv2-entry">
              <div className="cv2-entry-head">
                <h3>
                  {job.role} <span>— {job.company}</span>
                </h3>
                <p>{job.period}</p>
              </div>
              <ul>
                {(experienceImpact[job.company] ?? job.focus).map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className="cv2-section" aria-labelledby="cv2-projects">
          <h2 id="cv2-projects">Selected Projects</h2>
          {cvProjects.map((project) => (
            <article key={project.title} className="cv2-entry">
              <div className="cv2-entry-head">
                <h3>
                  {project.title} <span>— {project.type}</span>
                </h3>
              </div>
              <p className="cv2-entry-copy">{project.impact}</p>
              <p className="cv2-stack">{project.stack.join(" · ")}</p>
            </article>
          ))}
        </section>

        <section className="cv2-section" aria-labelledby="cv2-skills">
          <h2 id="cv2-skills">Skills</h2>
          <dl className="cv2-skills">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <dt>{group.title}</dt>
                <dd>{group.items.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </section>

        <div className="cv2-columns">
          <section className="cv2-section" aria-labelledby="cv2-edu">
            <h2 id="cv2-edu">Education</h2>
            <div className="cv2-entry-head">
              <h3>{education.degree}</h3>
              <p>{education.period}</p>
            </div>
            <p className="cv2-entry-copy">{education.institution}</p>
          </section>

          <section className="cv2-section" aria-labelledby="cv2-lang">
            <h2 id="cv2-lang">Languages</h2>
            <ul className="cv2-languages">
              {languages.map((lang) => (
                <li key={lang.name}>
                  <strong>{lang.name}</strong> — {lang.level}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}
