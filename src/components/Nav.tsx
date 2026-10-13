"use client";
import { useEffect, useState } from "react";
import { site } from "@/data/site";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  useEffect(() => {
    const f = () => setSolid(window.scrollY > 40);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-500 ${solid || open ? "bg-void/85 backdrop-blur-md" : "bg-gradient-to-b from-void/70 to-transparent"}`}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-12">
        <a href="#top" onClick={() => setOpen(false)} className="font-display text-lg tracking-[.25em]">{site.name}</a>
        <nav className="hidden gap-8 md:flex" aria-label="Primary">
          {site.nav.map((l) => <a key={l.href} href={l.href} className="faint transition-colors hover:text-ink">{l.label}</a>)}
        </nav>
        <button className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border md:hidden" aria-expanded={open} aria-label="Menu" onClick={() => setOpen(!open)}>
          <span className={`h-px w-5 bg-ink transition ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
          <span className={`h-px w-5 bg-ink transition ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
        </button>
      </div>
      {open && (
        <nav className="flex h-[calc(100svh-4rem)] flex-col bg-void px-5 pt-6 md:hidden" aria-label="Mobile">
          {site.nav.map((l) => <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="border-b py-5 font-display text-4xl">{l.label}</a>)}
        </nav>
      )}
    </header>
  );
}
