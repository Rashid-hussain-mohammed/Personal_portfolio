"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

function PanelContents({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <div className="flex h-full w-72 flex-col justify-between p-8">
      <div>
        <a
          href="#top"
          onClick={onNavigate}
          className="font-display text-lg font-semibold text-ink"
        >
          Rashid Hussain Mohammed
        </a>
        <div className="mt-10 flex flex-col gap-1">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={onNavigate}
              className="py-2.5 font-body text-base font-medium text-ink transition-colors hover:text-signal"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <p className="font-data text-xs text-muted">Fulda, Germany</p>
    </div>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      {/* Desktop: thin neon rail that expands on hover or keyboard focus */}
      <nav
        aria-label="Site navigation"
        className="group fixed inset-y-0 left-0 z-50 hidden w-3 overflow-hidden bg-signal transition-[width,background-color] duration-300 ease-out hover:w-72 hover:bg-paper focus-within:w-72 focus-within:bg-paper md:block"
      >
        <span
          aria-hidden
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-data text-[10px] font-bold tracking-[0.3em] text-paper transition-opacity duration-150 group-hover:opacity-0 group-focus-within:opacity-0"
          style={{ writingMode: "vertical-rl" }}
        >
          MENU
        </span>
        <div className="h-full border-r-4 border-ink opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100">
          <PanelContents />
        </div>
      </nav>

      {/* Mobile: a real tappable button that opens a slide-in panel */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? "Close menu" : "Open menu"}
        className="fixed top-4 left-4 z-[60] flex h-11 items-center gap-2 border-2 border-ink bg-signal px-4 font-data text-xs font-bold tracking-widest text-paper md:hidden"
        style={{ top: "calc(env(safe-area-inset-top, 0px) + 1rem)" }}
      >
        {open ? "CLOSE" : "MENU"}
      </button>

      <div
        onClick={() => setOpen(false)}
        aria-hidden
        className={`fixed inset-0 z-40 bg-black/60 transition-opacity duration-300 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <nav
        id="mobile-nav"
        aria-label="Site navigation"
        className={`fixed inset-y-0 left-0 z-50 border-r-4 border-signal bg-paper pt-16 transition-transform duration-300 ease-out md:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        inert={!open}
      >
        <PanelContents onNavigate={() => setOpen(false)} />
      </nav>
    </>
  );
}
