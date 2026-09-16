const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <nav
      aria-label="Site navigation"
      className="group fixed inset-y-0 left-0 z-50 w-3 overflow-hidden bg-signal transition-[width,background-color] duration-300 ease-out hover:w-72 hover:bg-paper focus-within:w-72 focus-within:bg-paper"
    >
      <span
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-data text-[10px] font-bold tracking-[0.3em] text-paper transition-opacity duration-150 group-hover:opacity-0 group-focus-within:opacity-0"
        style={{ writingMode: "vertical-rl" }}
      >
        MENU
      </span>

      <div className="flex h-full w-72 flex-col justify-between border-r-4 border-ink p-8 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100">
        <div>
          <a
            href="#top"
            className="font-display text-lg font-semibold text-ink"
          >
            Rashid Hussain Mohammed
          </a>
          <div className="mt-10 flex flex-col gap-5">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-sm font-medium text-ink transition-colors hover:text-signal"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <p className="font-data text-xs text-muted">Fulda, Germany</p>
      </div>
    </nav>
  );
}
