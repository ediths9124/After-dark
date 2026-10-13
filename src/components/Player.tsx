"use client";
import { useEffect, useRef, useState } from "react";
import { site } from "@/data/site";

const BARS = 56;
const H = Array.from({ length: BARS }, (_, i) => +(0.25 + 0.75 * Math.abs(Math.sin(i * 1.3) * Math.cos(i * 0.37))).toFixed(2));
const fmt = (s: number) => (!isFinite(s) || s < 0 ? "0:00" : `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`);

export default function Player() {
  const ref = useRef<HTMLAudioElement>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "missing">("loading");
  const [playing, setPlaying] = useState(false);
  const [cur, setCur] = useState(0);
  const [dur, setDur] = useState(0);
  const [vol, setVol] = useState(1);

  useEffect(() => {
    const a = ref.current;
    if (!a) return;
    if (a.error) setStatus("missing");
    else if (a.readyState >= 1) { setDur(a.duration); setStatus("ready"); }
  }, []);
  useEffect(() => { if (ref.current) ref.current.volume = vol; }, [vol]);

  const toggle = () => {
    const a = ref.current;
    if (!a || status !== "ready") return;
    if (playing) a.pause(); else a.play().catch(() => setStatus("missing"));
  };
  const pct = dur ? cur / dur : 0;
  const ok = status === "ready";

  return (
    <div className="glow rounded-3xl border bg-white/[0.03] p-5 backdrop-blur md:p-8">
      <audio ref={ref} src={site.track.src} preload="metadata"
        onLoadedMetadata={(e) => { setDur(e.currentTarget.duration); setStatus("ready"); }}
        onError={() => setStatus("missing")} onTimeUpdate={(e) => setCur(e.currentTarget.currentTime)}
        onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onEnded={() => setPlaying(false)} />
      <div className="flex items-center gap-4">
        <button onClick={toggle} disabled={!ok} aria-label={playing ? "Pause" : "Play"}
          className="glow flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-neon text-void transition hover:bg-soft disabled:opacity-40">
          {playing
            ? <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor"><rect x="6" y="5" width="4" height="14" /><rect x="14" y="5" width="4" height="14" /></svg>
            : <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>}
        </button>
        <div className="min-w-0">
          <p className="truncate font-display text-xl font-bold">{site.track.title}</p>
          <p className="truncate text-sm text-mute">{site.name}</p>
        </div>
      </div>
      <div className="relative mt-6 flex h-20 items-end gap-[3px]" aria-hidden={!ok}>
        {H.map((h, i) => (
          <span key={i} className={`flex-1 rounded-full ${i / BARS < pct ? "bg-neon" : "bg-neon/25"}`}
            style={{ height: `${h * 100}%`, transformOrigin: "bottom", animation: playing ? `bar ${0.9 + (i % 5) * 0.15}s ease-in-out ${i * 0.03}s infinite` : undefined }} />
        ))}
        <input type="range" min={0} max={dur || 1} step={0.1} value={cur} disabled={!ok} aria-label="Seek"
          onChange={(e) => { if (ref.current) ref.current.currentTime = +e.target.value; }}
          className="absolute inset-0 h-full w-full cursor-pointer opacity-0" />
      </div>
      <div className="mt-3 flex items-center justify-between text-xs text-mute">
        <span>{fmt(cur)}</span>
        {status === "missing" && <span className="px-3 text-center text-soft">No track loaded yet. Add public/audio/featured-track.mp3</span>}
        {status === "loading" && <span>Loading…</span>}
        <span>{fmt(dur)}</span>
      </div>
      <label className="mt-4 hidden items-center gap-3 text-xs text-mute sm:flex">Volume
        <input type="range" min={0} max={1} step={0.05} value={vol} onChange={(e) => setVol(+e.target.value)} className="vol w-28" aria-label="Volume" />
      </label>
    </div>
  );
}
