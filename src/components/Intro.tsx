"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { site } from "@/data/site";

export default function Intro({ open, onEnter }: { open: boolean; onEnter: () => void }) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);
  return (
    <AnimatePresence>
      {open && (
        <motion.div key="intro" className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-void px-6 text-center"
          exit={{ opacity: 0, filter: "blur(12px)" }} transition={{ duration: 0.8 }}>
          <div className="sweep pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(139,92,246,.28),transparent_60%)]" />
          <p className="label relative">{site.name}</p>
          <h2 className="relative mt-4 font-display text-4xl font-extrabold leading-tight md:text-6xl">Enter the <span className="neon-text text-soft">After Dark</span></h2>
          <p className="relative mt-4 max-w-sm text-sm text-mute">Headphones on. Nothing plays until you press play.</p>
          <button autoFocus onClick={onEnter} className="glow relative mt-10 min-h-12 rounded-full bg-neon px-10 text-xs font-bold uppercase tracking-[.3em] text-void transition hover:bg-soft">Tap to Enter</button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
