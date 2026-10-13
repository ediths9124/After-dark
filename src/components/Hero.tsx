"use client";
import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { site } from "@/data/site";
import { EASE } from "./Reveal";

export default function Hero({ play }: { play: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const r = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", r ? "0%" : "22%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const a = (d: number) => ({ initial: { opacity: r ? 1 : 0, y: r ? 0 : 40 }, animate: play ? { opacity: 1, y: 0 } : {}, transition: { duration: 0.9, delay: d, ease: EASE } });
  return (
    <section id="top" ref={ref} className="relative flex min-h-[100svh] items-end overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-[-10%]">
        <Image src={site.images.studio} alt="Purple-lit recording studio with FL Studio open on a laptop" fill priority sizes="100vw" className="object-cover" style={{ objectPosition: "75% 50%" }} />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-void via-void/60 to-void/30" />
      <div className="sweep absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(139,92,246,.35),transparent_55%)]" />
      <motion.div style={{ opacity: fade }} className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-32 md:px-12 md:pb-24">
        <motion.span {...a(0.1)} className="inline-block rounded-full border border-neon px-4 py-1.5 text-[11px] font-bold tracking-[.5em] text-soft">{site.badge}</motion.span>
        <motion.h1 {...a(0.25)} className="neon-text mt-6 font-display text-[clamp(2.5rem,11.5vw,9rem)] font-extrabold leading-[.95] tracking-tight">{site.name}</motion.h1>
        <motion.p {...a(0.4)} className="mt-5 text-lg text-ink md:text-2xl">{site.tagline}</motion.p>
        <motion.p {...a(0.5)} className="mt-2 text-sm text-mute md:text-base">{site.line}</motion.p>
        <motion.div {...a(0.65)} className="mt-9 flex flex-wrap gap-3">
          <a href="#music" className="glow inline-flex min-h-12 items-center rounded-full bg-neon px-8 text-xs font-bold uppercase tracking-[.25em] text-void transition hover:bg-soft">Listen Now</a>
          <a href="#experience" className="inline-flex min-h-12 items-center rounded-full border border-neon/50 px-8 text-xs font-bold uppercase tracking-[.25em] transition hover:bg-neon/10">Explore the Sound</a>
        </motion.div>
      </motion.div>
    </section>
  );
}
