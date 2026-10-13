import Image from "next/image";
import { site } from "@/data/site";
import { Frame, Reveal } from "./Reveal";
import Icon from "./Icons";

const wrap = "mx-auto w-full max-w-7xl px-5 md:px-12";
const Head = ({ n, label, title }: { n: string; label: string; title: string }) => (
  <Reveal className="mb-12 md:mb-16">
    <p className="label">{n} — {label}</p>
    <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight md:text-6xl">{title}</h2>
  </Reveal>
);

export function Experience() {
  return (
    <section id="experience" className={`${wrap} py-24 md:py-36`}>
      <Head n="02" label="Experience" title="Inside the studio" />
      <div className="space-y-24 md:space-y-36">
        {site.rows.map((r, i) => (
          <div key={r.n} className={`flex flex-col items-center gap-8 md:gap-16 ${i % 2 ? "md:flex-row-reverse" : "md:flex-row"}`}>
            <div className="w-full md:w-1/2"><Frame src={r.img} alt={r.label} ratio={r.ratio} pos={r.pos} /></div>
            <Reveal className="w-full md:w-1/2">
              <p className="label">{r.n} — {r.label}</p>
              <h3 className="mt-3 font-display text-3xl font-extrabold md:text-5xl">{r.title}</h3>
              <p className="mt-5 max-w-md text-mute">{r.text}</p>
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className={`${wrap} py-24 md:py-36`}>
      <div className="grid items-center gap-10 md:grid-cols-2 md:gap-20">
        <div className="mx-auto w-full max-w-md md:max-w-none"><Frame src={site.images.artist} alt="$ebAfterDark producing in the studio" ratio="aspect-[3/4]" pos="30% 40%" /></div>
        <Reveal>
          <p className="label">03 — The Artist</p>
          <h2 className="mt-3 font-display text-4xl font-extrabold md:text-6xl">A voice built after dark</h2>
          {site.about.map((t) => <p key={t} className="mt-5 text-mute">{t}</p>)}
          <div className="mt-8 flex flex-wrap gap-3 text-[11px] uppercase tracking-[.25em] text-soft">
            {["Artist", "Producer", "Jersey"].map((t) => <span key={t} className="rounded-full border px-4 py-2">{t}</span>)}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Visuals() {
  const yt = site.socials.find((s) => s.id === "youtube")!;
  return (
    <section id="visuals" className={`${wrap} py-24 md:py-36`}>
      <Head n="04" label="Visuals" title="Watch after dark" />
      <Reveal>
        <a href={yt.href} target="_blank" rel="noopener noreferrer" className="glow group relative flex min-h-[260px] items-end overflow-hidden rounded-3xl border bg-gradient-to-br from-deep/60 via-void to-void p-8 md:min-h-[360px] md:p-12">
          <Image src={site.images.sound} alt="" fill sizes="100vw" className="object-cover opacity-25 transition-transform duration-700 group-hover:scale-105" />
          <div className="relative">
            <Icon name="youtube" className="mb-4 h-10 w-10 text-soft" />
            <p className="font-display text-2xl font-bold md:text-4xl">Videos live on YouTube</p>
            <p className="mt-2 text-mute">{yt.handle} →</p>
          </div>
        </a>
      </Reveal>
    </section>
  );
}

export function Socials() {
  return (
    <section id="socials" className={`${wrap} py-24 md:py-36`}>
      <Head n="05" label="Find Me" title="Follow after dark" />
      <ul className="border-t">
        {site.socials.map((s, i) => (
          <li key={s.id} className="border-b">
            <Reveal delay={i * 0.06}>
              <a href={s.href} target="_blank" rel="noopener noreferrer" className="group flex min-h-20 items-center gap-4 py-5 transition hover:bg-neon/5 md:gap-8 md:px-4">
                <Icon name={s.id} className="h-6 w-6 text-soft" />
                <span className="flex-1 font-display text-2xl font-bold md:text-4xl">{s.label}</span>
                <span className="hidden text-mute sm:block">{s.handle}</span>
                <span className="rounded-full border px-5 py-2 text-[11px] uppercase tracking-[.25em] transition group-hover:glow group-hover:border-neon">Visit</span>
              </a>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Footer() {
  return (
    <footer className={`${wrap} border-t py-14 text-center`}>
      <p className="neon-text font-display text-4xl font-extrabold md:text-6xl">{site.name}</p>
      <p className="mt-3 text-[11px] tracking-[.5em] text-soft">{site.badge}</p>
      <div className="mt-8 flex justify-center gap-3">
        {site.socials.map((s) => (
          <a key={s.id} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="flex h-12 w-12 items-center justify-center rounded-full border text-soft transition hover:glow hover:border-neon hover:text-ink">
            <Icon name={s.id} />
          </a>
        ))}
      </div>
      <p className="mt-8 text-xs text-mute">© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
    </footer>
  );
}
