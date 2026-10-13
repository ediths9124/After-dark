export default function Icon({ name, className = "h-5 w-5" }: { name: string; className?: string }) {
  const p = { viewBox: "0 0 24 24", className, "aria-hidden": true as const };
  if (name === "instagram") return <svg {...p} fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></svg>;
  if (name === "youtube") return <svg {...p} fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="2" y="5" width="20" height="14" rx="4" /><path d="M10 9l5 3-5 3z" fill="currentColor" /></svg>;
  if (name === "tiktok") return <svg {...p} fill="currentColor"><path d="M16 3c.3 2.4 1.8 4 4 4.2v3.1c-1.5 0-2.9-.5-4-1.3V15a6 6 0 1 1-6-6c.3 0 .6 0 .9.1v3.2a2.9 2.9 0 1 0 2 2.8V3h3.1z" /></svg>;
  if (name === "play") return <svg {...p} fill="currentColor"><path d="M8 5v14l11-7z" /></svg>;
  if (name === "pause") return <svg {...p} fill="currentColor"><rect x="6" y="5" width="4" height="14" rx="1" /><rect x="14" y="5" width="4" height="14" rx="1" /></svg>;
  if (name === "volume") return <svg {...p} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M4 9v6h4l5 4V5L8 9H4z" /><path d="M16 9a4 4 0 0 1 0 6M18.5 6.5a8 8 0 0 1 0 11" /></svg>;
  if (name === "mute") return <svg {...p} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M4 9v6h4l5 4V5L8 9H4z" /><path d="M17 9l5 6M22 9l-5 6" /></svg>;
  return <svg {...p} fill="currentColor"><path d="M18.9 2H22l-7.2 8.2L23 22h-6.6l-5.2-6.8L5.2 22H2l7.7-8.8L1.5 2h6.8l4.7 6.2L18.9 2z" /></svg>;
}
