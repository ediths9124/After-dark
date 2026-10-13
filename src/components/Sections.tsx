"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import { site } from "@/data/site";
import { Reveal } from "./Reveal";
import { Eq, usePlayer } from "./Player";
import Icon from "./Icons";

const wrap = "mx-auto w-full max-w-7xl px-5 md:px-12";
const Head = ({ n, label, title, sub }: { n: string; label: string; title: string; sub?: string }) => (
  <Reveal className="mb-12 md:mb-16">
    <p className="label">{n} — {label}</p>
    <h2 className="h2">{title}</h2>
    {sub && <p className="mt-4 max-w-xl text-lg text-mute">{sub}</p>}
  </Reveal>
);
const Links = () => (
  <div className="flex flex-wrap gap-2">
    {site.streaming.map((s) => <a key={s.label} href={s.href} target={s.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="pill">{s.label}</a>)}
  </div>
);

export function Releases() {
  const { idx, playing, toggle } = usePlayer();
  return (
    <section id="music" className={`${wrap} py-24 md:py-36`}>
      <Head n="01" label="Featured" title="Latest Releases" sub="Tap any cover for a five-second preview. One track plays at a time." />
      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
        {site.songs.map((s, i) => {
          const on = idx === i && playing;
          return (
            <Reveal key={s.title} delay={(i % 4) * 0.08}>
              <button onClick={() => toggle(i)} aria-label={`${on ? "Pause" : "Play"} ${s.title}`} className="group relative block aspect-square w-full overflow-hidden">
                <Image src={s.cover} alt={`${s.title} cover art`} fill sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <span className={`absolute bottom-3 left-3 flex h-14 w-14 items-center justify-center rounded-full bg-gold text-void transition ${on ? "" : "opacity-80 group-hover:opacity-100"}`}>
                  <Icon name={on ? "pause" : "play"} className="h-6 w-6" />
                </span>
                {on && <Eq className="absolute bottom-5 right-5" />}
              </button>
              <h3 className="mt-5 font-display text-3xl">{s.title}</h3>
              <p className="faint mt-2">{site.name}</p>
              <p className="mt-2 text-mute">{s.meta}</p>
              <div className="mt-5"><Links /></div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

export function Experience() {
  const { idx, playing, toggle } = usePlayer();
  return (
    <section id="experience">
      {site.songs.map((s, i) => (
        <div key={s.title} className="relative flex min-h-[78svh] items-center overflow-hidden border-t">
          <Image src={s.cover} alt="" fill sizes="100vw" className="object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-void via-void/50 to-void" />
          <button onClick={() => toggle(i)} aria-label={`Preview ${s.title}`} className="absolute inset-0" />
          <Reveal className={`${wrap} pointer-events-none relative py-20`}>
            <div className="flex items-center gap-4">
              <span className="font-display text-gold">0{i + 1}</span>
              <span className="h-px w-16 bg-gold/60" />
              <span className="faint">{s.album}</span>
              {idx === i && playing && <Eq className="ml-auto" />}
            </div>
            <h2 className="mt-6 font-display text-6xl leading-none md:text-8xl">{s.title}</h2>
            <p className="mt-6 max-w-xl text-lg text-mute">{s.desc}</p>
            <div className="pointer-events-auto mt-8"><Links /></div>
            <p className="faint mt-8 !text-[10px]">{site.previewSeconds}-second preview</p>
          </Reveal>
        </div>
      ))}
    </section>
  );
}

function Stat({ to, dec, prefix = "", suffix = "", label }: { to: number; dec: number; prefix?: string; suffix?: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const seen = useInView(ref, { once: true });
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!seen) return;
    const c = animate(0, to, { duration: 1.6, ease: "easeOut", onUpdate: (n) => setV(n) });
    return () => c.stop();
  }, [seen, to]);
  return (
    <div ref={ref}>
      <p className="font-display text-5xl text-gold md:text-6xl">{prefix}{v.toFixed(dec)}{suffix}</p>
      <p className="faint mt-2">{label}</p>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className={`${wrap} py-24 md:py-36`}>
      <div className="grid items-start gap-12 md:grid-cols-2 md:gap-20">
        <Reveal>
          <div className="relative aspect-[4/5] w-full overflow-hidden border">
            <Image src={site.artistImage} alt={`Portrait of ${site.name} in the studio`} fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover" />
          </div>
        </Reveal>
        <Reveal>
          <p className="label">03 — The Artist</p>
          <h2 className="h2">A voice built for the dark</h2>
          {site.about.map((t) => <p key={t} className="mt-6 text-lg text-mute">{t}</p>)}
          <div className="mt-12 grid grid-cols-2 gap-8">
            {site.stats.map((s) => <Stat key={s.label} {...s} />)}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Videos() {
  const yt = site.socials.find((s) => s.id === "youtube")!.href;
  return (
    <section id="videos" className={`${wrap} py-24 md:py-36`}>
      <Head n="04" label="Visuals" title="Music Videos" />
      <div className="grid gap-12 md:grid-cols-3">
        {site.videos.map((v, i) => (
          <Reveal key={v.title} delay={i * 0.08}>
            <a href={yt} target="_blank" rel="noopener noreferrer" className="group block">
              <div className="relative aspect-video overflow-hidden">
                <Image src={v.img} alt={`${v.title} video thumbnail`} fill sizes="(min-width:768px) 33vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/40 backdrop-blur">
                  <Icon name="play" className="h-6 w-6" />
                </span>
                <span className="absolute bottom-3 right-3 text-xs">{v.time}</span>
              </div>
              <h3 className="mt-5 font-display text-3xl">{v.title}</h3>
              <p className="faint mt-2">{v.sub}</p>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Tour() {
  return (
    <section id="tour" className={`${wrap} py-24 md:py-36`}>
      <Head n="05" label="On the Road" title="Tour Dates" />
      <ul className="border-t">
        {site.tour.map((t, i) => (
          <li key={t.venue} className="border-b">
            <Reveal delay={i * 0.05} className="flex flex-wrap items-center gap-x-8 gap-y-3 py-6">
              <div className="w-20 shrink-0">
                <p className="label">{t.m}</p>
                <p className="font-display text-4xl leading-none">{t.d}</p>
                <p className="faint mt-1 !text-[10px]">{t.y}</p>
              </div>
              <div className="min-w-[10rem] flex-1">
                <p className="font-display text-2xl md:text-3xl">{t.venue}</p>
                <p className="text-mute">{t.city}</p>
              </div>
              <span className="faint">{t.status}</span>
              <a href="#contact" className={`pill ${t.status === "Sold Out" ? "pointer-events-none opacity-50" : ""}`}>{t.status === "Sold Out" ? "Sold Out" : "Get Tickets"}</a>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Booking() {
  const c = site.contact;
  const [f, setF] = useState({ name: "", email: "", msg: "" });
  const send = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:${c.booking}?subject=${encodeURIComponent("Booking enquiry from " + f.name)}&body=${encodeURIComponent(f.msg + "\n\n" + f.name + " — " + f.email)}`;
  };
  const input = "w-full border-b bg-transparent py-4 text-lg outline-none transition placeholder:text-mute focus:border-gold";
  return (
    <section id="contact" className={`${wrap} py-24 md:py-36`}>
      <Head n="06" label="Booking" title="Enquiries" sub="Festivals, private performances, press and sync licensing. Management responds to every serious enquiry." />
      <div className="grid gap-12 md:grid-cols-2 md:gap-20">
        <dl className="space-y-8">
          {[["Booking", c.booking], ["Management", c.management], ["Press", c.press]].map(([k, v]) => (
            <div key={k}><dt className="label">{k}</dt><dd className="mt-2 font-display text-2xl md:text-3xl">{v}</dd></div>
          ))}
        </dl>
        <form onSubmit={send} className="space-y-4">
          <input required className={input} placeholder="Name" aria-label="Name" value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} />
          <input required type="email" className={input} placeholder="Email" aria-label="Email" value={f.email} onChange={(e) => setF({ ...f, email: e.target.value })} />
          <textarea required rows={4} className={input} placeholder="Message" aria-label="Message" value={f.msg} onChange={(e) => setF({ ...f, msg: e.target.value })} />
          <button type="submit" className="mt-4 inline-flex min-h-14 w-full items-center justify-center rounded-full bg-gold px-10 text-xs font-semibold uppercase tracking-[.3em] text-void md:w-auto">Send Enquiry</button>
        </form>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className={`${wrap} border-t py-14 pb-28 text-center`}>
      <p className="font-display text-4xl tracking-[.15em] md:text-5xl">{site.name}</p>
      <div className="mt-8 flex justify-center gap-3">
        {site.socials.map((s) => (
          <a key={s.id} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="flex h-12 w-12 items-center justify-center rounded-full border text-mute transition hover:border-gold/60 hover:text-gold">
            <Icon name={s.id} />
          </a>
        ))}
      </div>
      <p className="mt-8 text-xs text-mute">© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
    </footer>
  );
}
