import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import {
  capabilities,
  experience,
  principles,
  profile,
  projects,
  skillGroups,
} from "../data/portfolio";

export default function EditorialHome() {
  return (
    <main id="main-content" className="ed-root">
      <div className="ed-page">
        <header className="ed-masthead">
          <p className="ed-mono-line">
            <span>{profile.location}</span>
            <span aria-hidden="true">·</span>
            <span>est. 2016 in production</span>
          </p>
          <h1>Mustafa Mujahid</h1>
          <p className="ed-role">{profile.title}</p>
          <nav className="ed-links" aria-label="Contact links">
            <a href={`mailto:${profile.email}`}>email</a>
            <a href={profile.github} rel="me noopener" target="_blank">github</a>
            <a href={profile.linkedin} rel="me noopener" target="_blank">linkedin</a>
            <Link href="/cv">cv</Link>
            <Link href="/" target="_top" title="The fun version">desktop&nbsp;os</Link>
            <ThemeToggle />
          </nav>
        </header>

        <section className="ed-intro">
          <p className="ed-lede">{profile.summary}</p>
          <p>{profile.positioning}</p>
        </section>

        <section className="ed-section" aria-labelledby="ed-doing">
          <h2 id="ed-doing">What I do</h2>
          <ul className="ed-doing-list">
            {capabilities.map((cap) => (
              <li key={cap.title}>
                <h3>{cap.title}</h3>
                <p>{cap.description}</p>
                <p className="ed-mono-small">{cap.proof.join(" · ")}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="ed-section" aria-labelledby="ed-work">
          <h2 id="ed-work">Selected work</h2>
          <ol className="ed-work-list">
            {projects.map((project) => (
              <li key={project.title}>
                <div className="ed-work-head">
                  <h3>{project.title}</h3>
                  <span className="ed-mono-small">{project.type}</span>
                </div>
                <p>{project.impact}</p>
                <p className="ed-mono-small">{project.stack.join(" · ")}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="ed-section" aria-labelledby="ed-experience">
          <h2 id="ed-experience">Experience</h2>
          <ol className="ed-exp-list">
            {experience.map((job) => (
              <li key={job.company}>
                <div className="ed-exp-head">
                  <h3>
                    {job.role}, <span>{job.company}</span>
                  </h3>
                  <span className="ed-mono-small">{job.period}</span>
                </div>
                <ul>
                  {job.focus.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </section>

        <section className="ed-section" aria-labelledby="ed-toolbox">
          <h2 id="ed-toolbox">Toolbox</h2>
          <dl className="ed-toolbox">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <dt>{group.title}</dt>
                <dd>{group.items.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="ed-section" aria-labelledby="ed-principles">
          <h2 id="ed-principles">Principles</h2>
          <ul className="ed-principles">
            {principles.map((principle) => (
              <li key={principle}>{principle}</li>
            ))}
          </ul>
        </section>

        <footer className="ed-footer">
          <h2>Say hello</h2>
          <p>
            The fastest way to reach me is{" "}
            <a href={`mailto:${profile.email}`}>{profile.email}</a>. I read
            everything, even recruiter mail with the wrong name in it.
          </p>
          <p className="ed-colophon ed-mono-small">
            Set in Fraunces, Newsreader &amp; IBM Plex Mono · built with Next.js ·{" "}
            <Link href="/" target="_top">there is also a desktop version</Link>
          </p>
        </footer>
      </div>
    </main>
  );
}
