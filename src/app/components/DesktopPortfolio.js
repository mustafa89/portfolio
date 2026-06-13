'use client';

import Link from "next/link";
import { useMemo, useState } from "react";
import { contactChannels, experience, profile, projects, toolsData, visualSkillGroups } from "../data/portfolio";

const DESKTOP_APPS = [
  { id: "home", label: "home.mdx", icon: "📄", side: "left" },
  { id: "profile", label: "profile.sys", icon: "🧑‍💻", side: "left" },
  { id: "projects", label: "projects", icon: "🗃️", side: "left" },
  { id: "cv", label: "cv.pdf", icon: "📋", side: "left" },
  { id: "terminal", label: "terminal", icon: "▣", side: "left" },
  { id: "skills", label: "skills.exe", icon: "🛠️", side: "right" },
  { id: "contact", label: "talk.exe", icon: "✉️", side: "right" },
  { id: "trash", label: "trash", icon: "🗑️", side: "right" },
];

const INITIAL_WINDOWS = ["home", "terminal"];

const WINDOW_META = {
  home: { title: "home.mdx", className: "window-home" },
  profile: { title: "profile.sys", className: "window-profile" },
  projects: { title: "projects.folder", className: "window-projects" },
  cv: { title: "cv.pdf", className: "window-cv" },
  terminal: { title: "sre-shell", className: "window-terminal" },
  skills: { title: "skills.exe", className: "window-skills" },
  contact: { title: "talk.exe", className: "window-contact" },
  trash: { title: "trash", className: "window-trash" },
};

function getClock() {
  return new Intl.DateTimeFormat("en", {
    hour: "2-digit",
    minute: "2-digit",
    weekday: "short",
  }).format(new Date());
}

function WindowContent({ id }) {
  if (id === "home") {
    return (
      <div className="space-y-5">
        <p className="desktop-kicker">Portfolio OS · SRE edition</p>
        <h1 className="desktop-hero-title">Mustafa Mujahid builds calm production systems.</h1>
        <p className="desktop-body-copy">{profile.summary}</p>
        <div className="desktop-actions">
          <button type="button" className="desktop-button" data-open-app="projects">
            Double-click projects
          </button>
          <Link href="/cv" className="desktop-button desktop-button-dark">
            Open printable CV
          </Link>
        </div>
      </div>
    );
  }

  if (id === "profile") {
    return (
      <div className="space-y-4">
        <p className="desktop-kicker">profile.sys</p>
        <h2 className="desktop-window-heading">Operating manual</h2>
        <p className="desktop-body-copy">{profile.positioning}</p>
        <ul className="desktop-list">
          <li>Question the constraint before automating around it.</li>
          <li>Reuse boring infrastructure unless isolation clearly demands new parts.</li>
          <li>Make the safe path the easiest path.</li>
        </ul>
      </div>
    );
  }

  if (id === "projects") {
    return (
      <div className="space-y-4">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="desktop-kicker">projects.folder</p>
            <h2 className="desktop-window-heading">Selected systems</h2>
          </div>
          <Link href="/projects" className="desktop-mini-link">full page →</Link>
        </div>
        <div className="desktop-project-grid">
          {projects.slice(0, 4).map((project) => (
            <article key={project.title} className="desktop-project-card">
              <span>{project.type}</span>
              <h3>{project.title}</h3>
              <p>{project.impact}</p>
            </article>
          ))}
        </div>
      </div>
    );
  }

  if (id === "cv") {
    return (
      <div className="space-y-4">
        <p className="desktop-kicker">cv.pdf</p>
        <h2 className="desktop-window-heading">CV preview</h2>
        <div className="desktop-cv-card">
          <strong>{profile.name}</strong>
          <span>{profile.title}</span>
          <small>{profile.location}</small>
        </div>
        <p className="desktop-body-copy">The detailed CV keeps the visual skill bars and icon wall intact.</p>
        <Link href="/cv" className="desktop-button desktop-button-dark">Open CV page</Link>
      </div>
    );
  }

  if (id === "terminal") {
    return (
      <div className="desktop-terminal-text" aria-label="Terminal output">
        <p><span>$</span> whoami</p>
        <p>{profile.title} · {profile.location}</p>
        <p><span>$</span> current_focus</p>
        <p>reliable deploys · observability · deleting toil</p>
        <p><span>$</span> incident_mode</p>
        <p>calm, curious, evidence-first</p>
      </div>
    );
  }

  if (id === "skills") {
    return (
      <div className="space-y-5">
        <p className="desktop-kicker">skills.exe</p>
        <h2 className="desktop-window-heading">Skill bars restored</h2>
        {visualSkillGroups.map((group) => (
          <div key={group.title} className="desktop-skill-group">
            <h3>{group.title}</h3>
            {group.skills.slice(0, 4).map((skill) => (
              <div key={skill.name} className="desktop-skill-row">
                <span>{skill.name}</span>
                <div className="desktop-skill-track"><i style={{ width: `${skill.proficiency}%` }} /></div>
              </div>
            ))}
          </div>
        ))}
        <div className="desktop-tool-strip">
          {toolsData.slice(0, 10).map((tool) => <span key={tool.name}>{tool.name}</span>)}
        </div>
      </div>
    );
  }

  if (id === "contact") {
    return (
      <div className="space-y-4">
        <p className="desktop-kicker">talk.exe</p>
        <h2 className="desktop-window-heading">Talk to a human</h2>
        {contactChannels.map((channel) => (
          <a key={channel.label} href={channel.href} className="desktop-contact-row">
            <strong>{channel.label}</strong>
            <span>{channel.value}</span>
          </a>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <p className="desktop-kicker">trash</p>
      <h2 className="desktop-window-heading">Empty, thankfully.</h2>
      <p className="desktop-body-copy">No production incidents are stored here. Yet.</p>
    </div>
  );
}

export default function DesktopPortfolio() {
  const [openWindows, setOpenWindows] = useState(INITIAL_WINDOWS);
  const [activeWindow, setActiveWindow] = useState("home");
  const [minimizedWindows, setMinimizedWindows] = useState([]);
  const clock = useMemo(getClock, []);

  function openApp(id) {
    setOpenWindows((current) => (current.includes(id) ? current : [...current, id]));
    setMinimizedWindows((current) => current.filter((item) => item !== id));
    setActiveWindow(id);
  }

  function closeApp(id) {
    setOpenWindows((current) => current.filter((item) => item !== id));
    setMinimizedWindows((current) => current.filter((item) => item !== id));
    setActiveWindow((current) => (current === id ? "home" : current));
  }

  function minimizeApp(id) {
    setMinimizedWindows((current) => (current.includes(id) ? current : [...current, id]));
  }

  function resetDesktop() {
    setOpenWindows(INITIAL_WINDOWS);
    setMinimizedWindows([]);
    setActiveWindow("home");
  }

  return (
    <main id="main-content" className="desktop-os" onClick={(event) => {
      const id = event.target?.dataset?.openApp;
      if (id) openApp(id);
    }}>
      <div className="desktop-menu-bar" role="navigation" aria-label="Portfolio OS navigation">
        <Link href="/" className="desktop-logo" aria-label="Portfolio OS home">▰▱</Link>
        <button type="button" onClick={() => openApp("home")}>Product OS</button>
        <button type="button" onClick={() => openApp("projects")}>Projects</button>
        <button type="button" onClick={() => openApp("skills")}>Skills</button>
        <button type="button" onClick={() => openApp("contact")}>Contact</button>
        <button type="button" onClick={resetDesktop}>Reset desktop</button>
        <span className="desktop-menu-spacer" />
        <Link href="/cv" className="desktop-get-started">Open CV</Link>
        <span className="desktop-clock">{clock}</span>
      </div>

      <section className="desktop-icon-column desktop-icon-left" aria-label="Desktop shortcuts">
        {DESKTOP_APPS.filter((app) => app.side === "left").map((app) => (
          <button key={app.id} type="button" className="desktop-icon" onClick={() => openApp(app.id)}>
            <span aria-hidden="true">{app.icon}</span>
            <small>{app.label}</small>
          </button>
        ))}
      </section>

      <section className="desktop-icon-column desktop-icon-right" aria-label="More shortcuts">
        {DESKTOP_APPS.filter((app) => app.side === "right").map((app) => (
          <button key={app.id} type="button" className="desktop-icon" onClick={() => openApp(app.id)}>
            <span aria-hidden="true">{app.icon}</span>
            <small>{app.label}</small>
          </button>
        ))}
      </section>

      <div className="desktop-window-stage" aria-live="polite">
        {openWindows.map((id, index) => {
          const meta = WINDOW_META[id];
          const isActive = activeWindow === id;
          const isMinimized = minimizedWindows.includes(id);

          if (isMinimized) return null;

          return (
            <section
              key={id}
              className={`desktop-window ${meta.className} ${isActive ? "is-active" : ""}`}
              style={{ zIndex: isActive ? 20 : 8 + index }}
              aria-labelledby={`${id}-window-title`}
              onMouseDown={() => setActiveWindow(id)}
            >
              <div className="desktop-title-bar">
                <span id={`${id}-window-title`}>{meta.title}</span>
                <div className="desktop-window-controls">
                  <button type="button" aria-label={`Minimize ${meta.title}`} onClick={() => minimizeApp(id)}>_</button>
                  <button type="button" aria-label={`Focus ${meta.title}`} onClick={() => setActiveWindow(id)}>□</button>
                  <button type="button" aria-label={`Close ${meta.title}`} onClick={() => closeApp(id)}>×</button>
                </div>
              </div>
              <div className="desktop-window-body">
                <WindowContent id={id} />
              </div>
            </section>
          );
        })}
      </div>

      <div className="desktop-illustration" aria-hidden="true">
        <div className="server-tile tile-a">AWS</div>
        <div className="server-tile tile-b">K8s</div>
        <div className="server-tile tile-c">SRE</div>
        <div className="server-tile tile-d">IaC</div>
        <div className="hedgehog hog-a">🦔</div>
        <div className="hedgehog hog-b">🦔</div>
      </div>

      <div className="desktop-taskbar" aria-label="Open windows">
        {openWindows.map((id) => (
          <button key={id} type="button" className={activeWindow === id && !minimizedWindows.includes(id) ? "is-active" : ""} onClick={() => openApp(id)}>
            {WINDOW_META[id].title}
          </button>
        ))}
      </div>
    </main>
  );
}
