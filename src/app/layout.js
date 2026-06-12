import "./globals.css";

export const metadata = {
  title: 'Mustafa Mujahid | Portfolio',
  description: 'Personal portfolio showcasing skills, experience, and projects of Mustafa Mujahid',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#0a0a0a] text-[#ededed] antialiased selection:bg-[#5E6AD2] selection:text-white">
        {children}
      </body>
    </html>
  );
}
