'use client';

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { contactChannels, experience, profile, projects, toolsData, visualSkillGroups } from "../data/portfolio";

const DESKTOP_APPS = [
  { id: "browser", label: "netscape.www", icon: "🌐", side: "left" },
  { id: "home", label: "home.mdx", icon: "📄", side: "left" },
  { id: "profile", label: "profile.sys", icon: "🧑‍💻", side: "left" },
  { id: "projects", label: "projects", icon: "🗃️", side: "left" },
  { id: "cv", label: "cv.pdf", icon: "📋", side: "left" },
  { id: "terminal", label: "terminal", icon: "▣", side: "left" },
  { id: "skills", label: "skills.exe", icon: "🛠️", side: "right" },
  { id: "contact", label: "talk.exe", icon: "✉️", side: "right" },
  { id: "trash", label: "trash", icon: "🗑️", side: "right" },
];

const INITIAL_WINDOWS = ["browser", "terminal"];

const WINDOW_META = {
  browser: { title: "mustafa89.github.io — browser", className: "window-browser" },
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
  if (id === "browser") {
    return (
      <div className="desktop-browser">
        <div className="desktop-browser-chrome">
          <span className="desktop-browser-nav" aria-hidden="true">⟨</span>
          <span className="desktop-browser-nav" aria-hidden="true">⟩</span>
          <span className="desktop-browser-nav" aria-hidden="true">⟳</span>
          <span className="desktop-browser-url" aria-hidden="true">https://mustafa89.github.io/site</span>
          {/* relative href so it resolves under the GitHub Pages basePath too */}
          <a href="site/" className="desktop-browser-pop" aria-label="Open website full screen">⤢</a>
        </div>
        <iframe src="site/" title="Portfolio website" className="desktop-browser-frame" />
      </div>
    );
  }

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
        <div>
          <p className="desktop-kicker">projects.folder</p>
          <h2 className="desktop-window-heading">Selected systems</h2>
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
        <p className="desktop-body-copy">Two editions: the original with skill bars and icons, and a lean hiring-manager cut.</p>
        <div className="desktop-actions">
          <Link href="/cv" className="desktop-button desktop-button-dark">Open CV page</Link>
          <Link href="/cv_2" className="desktop-button">Open CV 2.0</Link>
        </div>
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
        <h2 className="desktop-window-heading">Toolchain</h2>
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

const MIN_W = 280;
const MIN_H = 200;

export default function DesktopPortfolio() {
  const [openWindows, setOpenWindows] = useState(INITIAL_WINDOWS);
  const [activeWindow, setActiveWindow] = useState("browser");
  const [minimizedWindows, setMinimizedWindows] = useState([]);
  const [clock, setClock] = useState("");
  const [geometry, setGeometry] = useState({});
  const stageRef = useRef(null);
  const dragRef = useRef(null);

  useEffect(() => {
    setClock(getClock());
    const timer = setInterval(() => setClock(getClock()), 30_000);
    return () => clearInterval(timer);
  }, []);

  function beginDrag(event, id, kind) {
    if (event.button !== undefined && event.button !== 0) return;
    if (typeof window !== "undefined" && window.matchMedia("(max-width: 900px)").matches) return;
    if (event.target.closest("button, a")) return;

    const stage = stageRef.current;
    const winEl = event.currentTarget.closest(".desktop-window");
    if (!stage || !winEl) return;

    const stageRect = stage.getBoundingClientRect();
    const winRect = winEl.getBoundingClientRect();
    const startGeom = geometry[id] ?? {
      x: winRect.left - stageRect.left,
      y: winRect.top - stageRect.top,
      w: winRect.width,
      h: winRect.height,
    };

    dragRef.current = {
      id,
      kind,
      startX: event.clientX,
      startY: event.clientY,
      startGeom,
      stageW: stageRect.width,
      stageH: stageRect.height,
      pointerId: event.pointerId,
      el: event.currentTarget,
    };

    setActiveWindow(id);
    event.currentTarget.setPointerCapture?.(event.pointerId);
    event.preventDefault();
  }

  function onDragMove(event) {
    const d = dragRef.current;
    if (!d) return;
    const dx = event.clientX - d.startX;
    const dy = event.clientY - d.startY;

    if (d.kind === "move") {
      const x = Math.max(0, Math.min(d.stageW - d.startGeom.w, d.startGeom.x + dx));
      const y = Math.max(0, Math.min(d.stageH - d.startGeom.h, d.startGeom.y + dy));
      setGeometry((g) => ({ ...g, [d.id]: { ...d.startGeom, x, y } }));
    } else {
      const w = Math.max(MIN_W, Math.min(d.stageW - d.startGeom.x, d.startGeom.w + dx));
      const h = Math.max(MIN_H, Math.min(d.stageH - d.startGeom.y, d.startGeom.h + dy));
      setGeometry((g) => ({ ...g, [d.id]: { ...d.startGeom, w, h } }));
    }
  }

  function endDrag(event) {
    const d = dragRef.current;
    if (!d) return;
    try {
      d.el.releasePointerCapture?.(event.pointerId ?? d.pointerId);
    } catch {}
    dragRef.current = null;
  }

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
    setActiveWindow("browser");
    setGeometry({});
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

      <div className="desktop-window-stage" aria-live="polite" ref={stageRef}>
        {openWindows.map((id, index) => {
          const meta = WINDOW_META[id];
          const isActive = activeWindow === id;
          const isMinimized = minimizedWindows.includes(id);

          if (isMinimized) return null;

          const geom = geometry[id];
          const style = { zIndex: isActive ? 20 : 8 + index };
          if (geom) {
            style.left = geom.x;
            style.top = geom.y;
            style.right = "auto";
            style.bottom = "auto";
            style.width = geom.w;
            style.height = geom.h;
          }

          return (
            <section
              key={id}
              className={`desktop-window ${meta.className} ${isActive ? "is-active" : ""} ${geom ? "has-geometry" : ""}`}
              style={style}
              aria-labelledby={`${id}-window-title`}
              onMouseDown={() => setActiveWindow(id)}
            >
              <div
                className="desktop-title-bar"
                onPointerDown={(e) => beginDrag(e, id, "move")}
                onPointerMove={onDragMove}
                onPointerUp={endDrag}
                onPointerCancel={endDrag}
              >
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
              <span
                className="desktop-window-resize"
                role="presentation"
                onPointerDown={(e) => beginDrag(e, id, "resize")}
                onPointerMove={onDragMove}
                onPointerUp={endDrag}
                onPointerCancel={endDrag}
              />
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
