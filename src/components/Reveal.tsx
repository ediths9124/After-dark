"use client";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

export const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export function Reveal({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  const r = useReducedMotion();
  return (
    <motion.div className={className} initial={r ? false : { opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.8, delay, ease: EASE }}>
      {children}
    </motion.div>
  );
}

export function Frame({ src, alt, ratio, pos = "50% 50%" }: { src: string; alt: string; ratio: string; pos?: string }) {
  const r = useReducedMotion();
  return (
    <motion.div className={`group relative w-full overflow-hidden rounded-2xl border glow ${ratio}`}
      initial={r ? false : { clipPath: "inset(0 0 100% 0)" }} whileInView={{ clipPath: "inset(0 0 0% 0)" }}
      viewport={{ once: true, margin: "-80px" }} transition={{ duration: 1.1, ease: EASE }}>
      <Image src={src} alt={alt} fill sizes="(min-width:768px) 50vw, 100vw" style={{ objectPosition: pos }}
        className="object-cover transition-transform duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-void/70 via-transparent to-deep/30" />
    </motion.div>
  );
}
