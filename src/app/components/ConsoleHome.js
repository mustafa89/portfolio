import Link from "next/link";
import {
  capabilities,
  contactChannels,
  experience,
  metrics,
  principles,
  profile,
  projects,
  skillGroups,
  toolsData,
} from "../data/portfolio";

const NAV_LINKS = [
  { href: "#work", label: "work" },
  { href: "#experience", label: "experience" },
  { href: "#contact", label: "contact" },
  { href: "/cv", label: "cv" },
  { href: "/desktop", label: "desktop" },
];

function SectionHead({ index, title, hint }) {
  return (
    <div className="cr-section-head">
      <span className="cr-section-index" aria-hidden="true">{index}</span>
      <h2>{title}</h2>
      {hint ? <span className="cr-section-hint">{hint}</span> : null}
      <span className="cr-section-rule" aria-hidden="true" />
    </div>
  );
}

export default function ConsoleHome() {
  return (
    <main id="main-content" className="cr-root">
      <div className="cr-atmosphere" aria-hidden="true" />

      <header className="cr-topbar">
        <Link href="/" className="cr-brand focus-ring">
          <span className="cr-status-dot" aria-hidden="true" />
          <span className="cr-brand-name">mustafa@prod</span>
          <span className="cr-brand-state">all systems operational</span>
        </Link>
        <nav className="cr-topnav" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="focus-ring">
              ./{link.label}
            </Link>
          ))}
        </nav>
      </header>

      <section className="cr-hero">
        <p className="cr-logline cr-rise" style={{ "--d": "0ms" }}>
          <span>$</span> uptime — 9+ years operating production
        </p>
        <h1 className="cr-rise" style={{ "--d": "90ms" }}>
          Calm infrastructure,
          <br />
          <em>boring</em> deploys,
          <br />
          quiet pagers.
        </h1>
        <p className="cr-hero-copy cr-rise" style={{ "--d": "180ms" }}>
          {profile.summary}
        </p>
        <div className="cr-hero-actions cr-rise" style={{ "--d": "270ms" }}>
          <a href="#work" className="cr-btn cr-btn-solid focus-ring">
            view selected work ↓
          </a>
          <Link href="/cv" className="cr-btn focus-ring">
            open cv →
          </Link>
        </div>

        <dl className="cr-metrics cr-rise" style={{ "--d": "360ms" }}>
          {metrics.map((metric) => (
            <div key={metric.label} className="cr-metric">
              <dd>{metric.value}</dd>
              <dt>{metric.label}</dt>
            </div>
          ))}
        </dl>
      </section>

      <div className="cr-ticker" aria-hidden="true">
        <div className="cr-ticker-track">
          {[0, 1].map((copy) => (
            <span key={copy} className="cr-ticker-group">
              {toolsData.map((tool) => (
                <span key={`${copy}-${tool.name}`} className="cr-ticker-item">
                  {tool.name} <i>·</i>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      <section className="cr-section" id="capabilities">
        <SectionHead index="01" title="What I operate" hint="capabilities" />
        <div className="cr-capability-grid">
          {capabilities.map((cap) => (
            <article key={cap.title} className="cr-card">
              <p className="cr-eyebrow">{cap.eyebrow}</p>
              <h3>{cap.title}</h3>
              <p className="cr-card-copy">{cap.description}</p>
              <ul className="cr-chiplist">
                {cap.proof.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="cr-section" id="work">
        <SectionHead index="02" title="Selected systems" hint="projects" />
        <div className="cr-project-grid">
          {projects.map((project, i) => (
            <article key={project.title} className="cr-card cr-project">
              <div className="cr-project-meta">
                <span className="cr-project-num">{String(i + 1).padStart(2, "0")}</span>
                <span className="cr-project-type">{project.type}</span>
              </div>
              <h3>{project.title}</h3>
              <p className="cr-card-copy">{project.impact}</p>
              <ul className="cr-chiplist">
                {project.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="cr-section" id="experience">
        <SectionHead index="03" title="Operating history" hint="experience" />
        <ol className="cr-log">
          {experience.map((job) => (
            <li key={job.company} className="cr-log-entry">
              <div className="cr-log-when">
                <span className="cr-log-node" aria-hidden="true" />
                {job.period}
              </div>
              <div className="cr-log-what">
                <h3>
                  {job.role} <span>— {job.company}</span>
                </h3>
                <ul>
                  {job.focus.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="cr-section" id="skills">
        <SectionHead index="04" title="Toolchain" hint="skills" />
        <div className="cr-skill-grid">
          {skillGroups.map((group) => (
            <div key={group.title} className="cr-skill-group">
              <h3>{group.title}</h3>
              <ul className="cr-chiplist">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="cr-section" id="principles">
        <SectionHead index="05" title="Operating principles" hint="how I work" />
        <ol className="cr-principles">
          {principles.map((principle, i) => (
            <li key={principle}>
              <span aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
              <p>{principle}</p>
            </li>
          ))}
        </ol>
      </section>

      <footer className="cr-footer" id="contact">
        <p className="cr-logline">
          <span>$</span> open_channel --human
        </p>
        <h2>
          Let&apos;s keep production <em>boring</em>, together.
        </h2>
        <div className="cr-contact-grid">
          {contactChannels.map((channel) => (
            <a key={channel.label} href={channel.href} className="cr-contact-card focus-ring">
              <span className="cr-eyebrow">{channel.label}</span>
              <strong>{channel.value}</strong>
              <p>{channel.note}</p>
            </a>
          ))}
        </div>
        <div className="cr-footer-line">
          <span>{profile.name} · {profile.location}</span>
          <span>exit code 0 — no incidents during the making of this site</span>
        </div>
      </footer>
    </main>
  );
}
