import Link from "next/link";

export default function Navbar() {
  const navItems = [
    { href: "/about", label: "About" },
    { href: "/profile", label: "Operating Manual" },
    { href: "/projects", label: "Projects" },
    { href: "/cv", label: "CV" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(8,17,15,0.78)] backdrop-blur-xl">
      <a className="skip-link focus-ring" href="#main-content">
        Skip to Content
      </a>
      <nav className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-4 sm:flex-row sm:items-center sm:justify-between lg:px-8" aria-label="Main navigation">
        <Link href="/" className="brand-lockup focus-ring" aria-label="Mustafa Mujahid home">
          <span className="brand-mark" aria-hidden="true">MM</span>
          <span>
            <span className="block text-sm font-semibold text-emerald-50">Mustafa Mujahid</span>
            <span className="block text-xs uppercase tracking-[0.28em] text-emerald-200/55">SRE · Cloud · Automation</span>
          </span>
        </Link>

        <div className="flex flex-wrap items-center gap-2 text-sm text-slate-300">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="nav-pill focus-ring">
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="nav-pill nav-pill-primary focus-ring">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
