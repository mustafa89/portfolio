import { Fraunces, IBM_Plex_Mono, Newsreader } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500"],
  style: ["normal", "italic"],
});

export const metadata = {
  metadataBase: new URL("https://mustafa89.github.io"),
  title: {
    default: "Mustafa Mujahid — Site Reliability Engineer",
    template: "%s — Mustafa Mujahid",
  },
  description:
    "Portfolio of Mustafa Mujahid, a Senior Site Reliability Engineer focused on cloud infrastructure, observability, automation, and reliable delivery systems.",
  openGraph: {
    title: "Mustafa Mujahid — Site Reliability Engineer",
    description:
      "Cloud infrastructure, SRE, observability, automation, and platform engineering portfolio.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: "#08110f",
  colorScheme: "dark",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`dark ${fraunces.variable} ${plexMono.variable} ${newsreader.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen antialiased selection:bg-emerald-300 selection:text-slate-950">
        {children}
      </body>
    </html>
  );
}
