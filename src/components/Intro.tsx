"use client";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { site } from "@/data/site";
import Icon from "./Icons";

export default function Intro({ open, onEnter }: { open: boolean; onEnter: () => void }) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);
  return (
    <AnimatePresence>
      {open && (
        <motion.div key="intro" className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-void px-6 text-center"
          exit={{ opacity: 0 }} transition={{ duration: 0.9 }}>
          <Image src={site.hero.image} alt="" fill priority sizes="100vw" className="object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-void/60 via-void/40 to-void" />
          <p className="absolute left-5 top-6 font-display text-lg tracking-[.25em]">{site.name}</p>
          <h2 className="relative font-display text-5xl leading-tight md:text-7xl">Enter the <em className="text-gold">Experience</em></h2>
          <p className="relative mt-5 max-w-sm text-mute">Sound on. Tap anywhere to begin — previews follow you as you scroll.</p>
          <button autoFocus onClick={onEnter} className="relative mt-10 inline-flex min-h-12 items-center gap-3 rounded-full bg-gold px-10 text-xs font-semibold uppercase tracking-[.3em] text-void">
            <Icon name="play" className="h-4 w-4" />Tap to Enter
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
