import Navbar from "../components/navbar";
import { principles, profile } from "../data/portfolio";

export const metadata = {
  title: "Operating Manual",
  description: "How Mustafa Mujahid approaches infrastructure, reliability, incidents, and platform engineering.",
};

export default function ProfilePage() {
  const modes = [
    {
      title: "During incidents",
      text: "Stabilize first, explain second, automate the prevention after the smoke clears. I prefer timelines, facts, and one active commander over hallway debugging.",
    },
    {
      title: "During design",
      text: "Inventory what already exists, reuse the boring pieces, and only add new infrastructure when isolation, lifecycle, or scale clearly justify it.",
    },
    {
      title: "During automation",
      text: "Encode the path people should take, not every path they could take. Good automation narrows choices and leaves sharp edges visible.",
    },
  ];

  return (
    <div className="site-shell min-h-screen overflow-x-hidden">
      <Navbar />
      <main id="main-content" className="mx-auto max-w-7xl px-5 pb-24 pt-14 lg:px-8">
        <section className="max-w-4xl" aria-labelledby="profile-title">
          <p className="kicker">Operating Manual</p>
          <h1 id="profile-title" className="mt-5 text-5xl font-black tracking-[-0.07em] text-emerald-50 sm:text-7xl">
            How to work with me when the system is loud.
          </h1>
          <p className="mt-7 text-lg leading-8 text-slate-300 sm:text-xl">{profile.positioning}</p>
        </section>

        <section className="mt-12 grid gap-5 lg:grid-cols-3" aria-label="Working modes">
          {modes.map((mode) => (
            <article key={mode.title} className="feature-card min-h-0">
              <h2 className="text-2xl font-bold tracking-[-0.04em] text-emerald-50">{mode.title}</h2>
              <p className="mt-4 leading-7 text-slate-300">{mode.text}</p>
            </article>
          ))}
        </section>

        <section className="content-card mt-12" aria-labelledby="principles-title">
          <p className="kicker">Principles</p>
          <h2 id="principles-title" className="mt-3 text-3xl font-black tracking-[-0.05em] text-emerald-50">Rules I try to make boringly consistent.</h2>
          <ol className="mt-8 grid gap-4 md:grid-cols-2">
            {principles.map((principle, index) => (
              <li key={principle} className="rounded-2xl border border-white/10 bg-black/15 p-5">
                <span className="font-mono text-sm text-emerald-300">0{index + 1}</span>
                <p className="mt-3 text-lg font-semibold text-emerald-50">{principle}</p>
              </li>
            ))}
          </ol>
        </section>
      </main>
    </div>
  );
}
