import "./globals.css";

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
    <html lang="en" className="dark">
      <body className="min-h-screen antialiased selection:bg-emerald-300 selection:text-slate-950">
        {children}
      </body>
    </html>
  );
}
