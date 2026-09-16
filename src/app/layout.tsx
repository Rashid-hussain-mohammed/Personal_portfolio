import type { Metadata } from "next";

// Self-hosted fonts (bundled in node_modules, no Google Fonts network
// call at build or run time — see README for why).
import "@fontsource/bricolage-grotesque/500.css";
import "@fontsource/bricolage-grotesque/600.css";
import "@fontsource/bricolage-grotesque/700.css";
import "@fontsource/source-sans-3/400.css";
import "@fontsource/source-sans-3/500.css";
import "@fontsource/source-sans-3/600.css";
import "@fontsource/space-mono/400.css";
import "@fontsource/space-mono/700.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rashid Hussain Mohammed — Software Engineer",
  description:
    "Portfolio of Rashid Hussain Mohammed, a software engineer with full-stack and applied AI experience, seeking roles in software engineering or applied AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
