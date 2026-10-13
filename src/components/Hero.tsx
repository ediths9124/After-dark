"use client";
import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { site } from "@/data/site";
import { EASE } from "./Reveal";
import Icon from "./Icons";
import { usePlayer } from "./Player";

export default function Hero({ play }: { play: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const r = useReducedMotion();
  const { toggle } = usePlayer();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", r ? "0%" : "20%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const a = (d: number) => ({ initial: { opacity: r ? 1 : 0, y: r ? 0 : 40 }, animate: play ? { opacity: 1, y: 0 } : {}, transition: { duration: 1, delay: d, ease: EASE } });
  return (
    <section id="top" ref={ref} className="relative flex min-h-[100svh] items-end overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-[-8%]">
        <Image src={site.hero.image} alt={`${site.name} in the studio`} fill priority sizes="100vw" className="object-cover" style={{ objectPosition: "50% 35%" }} />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-void via-void/55 to-void/20" />
      <motion.div style={{ opacity: fade }} className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-12 pt-32 md:px-12 md:pb-20">
        <motion.p {...a(0.1)} className="label">{site.hero.label}</motion.p>
        <motion.h1 {...a(0.25)} className="mt-5 font-display text-[clamp(2.6rem,11.5vw,10rem)] leading-[.95]">{site.name}</motion.h1>
        <motion.p {...a(0.4)} className="mt-5 text-lg text-mute md:text-2xl">{site.hero.line}</motion.p>
        <motion.div {...a(0.55)} className="mt-9 flex flex-col gap-3 md:flex-row">
          <a href="#music" onClick={() => toggle(0)} className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-gold px-10 text-xs font-semibold uppercase tracking-[.3em] text-void">
            <Icon name="play" className="h-4 w-4" />Listen Now
          </a>
          <a href="#music" className="inline-flex min-h-14 items-center justify-center rounded-full border px-10 text-xs uppercase tracking-[.3em]">Explore Music</a>
        </motion.div>
        <svg viewBox="0 0 24 24" className="mx-auto mt-10 h-6 w-6 text-mute" style={{ animation: "nudge 2.4s ease-in-out infinite" }} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden><path d="M6 9l6 6 6-6" /></svg>
      </motion.div>
    </section>
  );
}
