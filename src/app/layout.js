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
  title: 'Mustafa Mujahid | Portfolio',
  description: 'Personal portfolio showcasing skills, experience, and projects of Mustafa Mujahid',
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
