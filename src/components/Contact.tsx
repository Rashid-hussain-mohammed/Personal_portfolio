const LINKS = [
  {
    label: "Email",
    value: "Rashid.Hussain.Mohammed23@gmail.com",
    href: "mailto:Rashid.Hussain.Mohammed23@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/Rashid-hussain-mohammed",
    href: "https://github.com/Rashid-hussain-mohammed",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/rashid-hussain-mohammed",
    href: "https://linkedin.com/in/rashid-hussain-mohammed",
  },
];

export default function Contact() {
  return (
    <footer id="contact" className="border-t-4 border-signal bg-paper text-ink">
      <div className="mx-auto max-w-5xl px-6 py-20 md:px-10">
        <h2 className="max-w-xl font-display text-3xl font-semibold md:text-4xl">
          Open to software engineering and applied AI roles.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-8 border-t-2 border-line pt-10 md:grid-cols-2">
          <ul className="space-y-3">
            {LINKS.map((link) => (
              <li key={link.label}>
                <span className="inline-block w-16 font-data text-xs text-muted">
                  {link.label}
                </span>
                <a
                  href={link.href}
                  className="font-body text-sm font-medium text-ink transition-colors hover:text-signal"
                >
                  {link.value}
                </a>
              </li>
            ))}
          </ul>
          <ul className="space-y-3 font-body text-sm text-ink/70">
            <li>Fulda, Germany</li>
            <li>English (C1, fluent) · German (A2, working toward B1)</li>
          </ul>
        </div>

        <p className="mt-16 font-data text-xs text-muted">
          Built with Next.js · deployed on Vercel · Docker-ready
        </p>
      </div>
    </footer>
  );
}
