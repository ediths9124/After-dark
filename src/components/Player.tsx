"use client";
import { createContext, useCallback, useContext, useRef, useState } from "react";
import Image from "next/image";
import { site } from "@/data/site";
import Icon from "./Icons";

type Ctx = { idx: number | null; playing: boolean; error: boolean; toggle: (i: number) => void };
const PlayerCtx = createContext<Ctx>({ idx: null, playing: false, error: false, toggle: () => {} });
export const usePlayer = () => useContext(PlayerCtx);

export function Eq({ className = "" }: { className?: string }) {
  return (
    <span className={`flex h-4 items-end gap-[3px] ${className}`} aria-hidden>
      {[0, 1, 2, 3].map((i) => (
        <span key={i} className="h-full w-[3px] rounded-full bg-gold" style={{ transformOrigin: "bottom", animation: `bar ${0.7 + i * 0.18}s ease-in-out ${i * 0.1}s infinite` }} />
      ))}
    </span>
  );
}

export function PlayerProvider({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLAudioElement>(null);
  const [idx, setIdx] = useState<number | null>(null);
  const [playing, setPlaying] = useState(false);
  const [error, setError] = useState(false);
  const [muted, setMuted] = useState(false);

  const toggle = useCallback((i: number) => {
    const a = ref.current;
    if (!a) return;
    if (idx === i && playing) { a.pause(); return; }
    if (idx !== i) { a.src = site.songs[i].audio; a.currentTime = 0; setIdx(i); setError(false); }
    a.play().catch(() => { setError(true); setPlaying(false); });
  }, [idx, playing]);

  const song = idx === null ? null : site.songs[idx];
  return (
    <PlayerCtx.Provider value={{ idx, playing, error, toggle }}>
      {children}
      <audio ref={ref} muted={muted} preload="none"
        onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onEnded={() => setPlaying(false)}
        onError={() => { if (ref.current?.getAttribute("src")) { setError(true); setPlaying(false); } }}
        onTimeUpdate={(e) => { const a = e.currentTarget; if (site.previewSeconds && a.currentTime >= site.previewSeconds) { a.pause(); a.currentTime = 0; } }} />
      {song && idx !== null && (
        <div className="fixed inset-x-3 bottom-3 z-40 mx-auto flex max-w-xl items-center gap-3 rounded-full border bg-void/80 p-2 pr-2.5 backdrop-blur-xl">
          <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full"><Image src={song.cover} alt="" fill sizes="44px" className="object-cover" /></div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm">{song.title}</p>
            <p className="faint truncate !text-[10px]">{error ? "Add audio file" : song.album}</p>
          </div>
          {playing && <Eq />}
          <button onClick={() => toggle(idx)} aria-label={playing ? "Pause" : "Play"} className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold text-void">
            <Icon name={playing ? "pause" : "play"} className="h-5 w-5" />
          </button>
          <button onClick={() => setMuted(!muted)} aria-label={muted ? "Unmute" : "Mute"} className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border text-ink">
            <Icon name={muted ? "mute" : "volume"} className="h-5 w-5" />
          </button>
        </div>
      )}
    </PlayerCtx.Provider>
  );
}
