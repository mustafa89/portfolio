import Navbar from "../components/navbar";
import { contactChannels, profile } from "../data/portfolio";

export const metadata = {
  title: "Contact",
  description: "Contact Mustafa Mujahid for infrastructure, SRE, platform engineering, and automation conversations.",
};

export default function ContactPage() {
  return (
    <div className="site-shell min-h-screen overflow-x-hidden">
      <Navbar />
      <main id="main-content" className="mx-auto max-w-5xl px-5 pb-24 pt-14 lg:px-8">
        <section className="content-card" aria-labelledby="contact-title">
          <p className="kicker">Contact</p>
          <h1 id="contact-title" className="mt-5 text-5xl font-black tracking-[-0.07em] text-emerald-50 sm:text-7xl">
            Send the signal. I’ll bring the runbook.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            Reach out for SRE, cloud infrastructure, observability, automation, or platform engineering conversations. Based in {profile.location}; comfortable with async collaboration.
          </p>

          <div className="mt-10 grid gap-4">
            {contactChannels.map((channel) => (
              <a key={channel.label} href={channel.href} className="group rounded-3xl border border-white/10 bg-black/15 p-6 no-underline transition-colors hover:border-emerald-300/40 hover:bg-emerald-300/[0.06] focus-ring">
                <span className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-300/75">{channel.label}</span>
                <span className="mt-3 block break-words text-2xl font-black tracking-[-0.04em] text-emerald-50">{channel.value}</span>
                <span className="mt-3 block leading-7 text-slate-300">{channel.note}</span>
                <span aria-hidden="true" className="mt-5 inline-flex text-emerald-300 transition-transform group-hover:translate-x-1">Open →</span>
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
