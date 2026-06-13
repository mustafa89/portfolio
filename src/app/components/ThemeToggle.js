'use client';

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    let saved = null;
    try {
      saved = localStorage.getItem("theme");
    } catch {}
    const system = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const initial = saved === "dark" || saved === "light" ? saved : system;
    document.documentElement.dataset.theme = initial;
    setTheme(initial);
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
    setTheme(next);
  }

  return (
    <button type="button" className="ed-theme-toggle" onClick={toggle} aria-label="Toggle color theme">
      {theme === "dark" ? "☀ light" : "☾ dark"}
    </button>
  );
}
