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
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${solid || open ? "border-b bg-void/80 backdrop-blur-md" : ""}`}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-12">
        <a href="#top" className="font-display text-lg font-extrabold tracking-tight">{site.name}</a>
        <nav className="hidden gap-8 md:flex" aria-label="Primary">
          {site.nav.map((l) => <a key={l.href} href={l.href} className="label transition-colors hover:text-ink">{l.label}</a>)}
        </nav>
        <button className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 md:hidden" aria-expanded={open} aria-label="Menu" onClick={() => setOpen(!open)}>
          <span className={`h-px w-6 bg-ink transition ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
          <span className={`h-px w-6 bg-ink transition ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
        </button>
      </div>
      {open && (
        <nav className="flex flex-col px-5 pb-6 md:hidden" aria-label="Mobile">
          {site.nav.map((l) => <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="border-t py-4 font-display text-2xl font-bold">{l.label}</a>)}
        </nav>
      )}
    </header>
  );
}
