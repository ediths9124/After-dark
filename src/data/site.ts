// All copy, images, audio paths and links live here. Edit this file to change the site.
const YT = "https://www.youtube.com/@SebAfterDark";
export const site = {
  name: "$ebAfterDark",
  hero: { label: "New album — Midnight Cathedral", line: "Nocturnal soul from the edge of the city.", image: "/images/hero.jpg" },
  nav: [
    { label: "Music", href: "#music" }, { label: "Experience", href: "#experience" }, { label: "About", href: "#about" },
    { label: "Videos", href: "#videos" }, { label: "Tour", href: "#tour" }, { label: "Booking", href: "#contact" },
  ],
  socials: [
    { id: "instagram", label: "Instagram", handle: "@sebafterdark", href: "https://www.instagram.com/sebafterdark/" },
    { id: "tiktok", label: "TikTok", handle: "@sebafterdark", href: "https://www.tiktok.com/@sebafterdark" },
    { id: "x", label: "X", handle: "@wspafterdark", href: "https://x.com/wspafterdark" },
    { id: "youtube", label: "YouTube", handle: "@SebAfterDark", href: YT },
  ],
  streaming: [{ label: "Spotify", href: "#" }, { label: "Apple Music", href: "#" }, { label: "YouTube", href: YT }],
  previewSeconds: 5, // set to 0 to play full tracks
  songs: [
    { title: "Gold Hour", album: "Midnight Cathedral", meta: "Single — March 2026", cover: "/images/cover-1.jpg", audio: "/audio/gold-hour.mp3", desc: "Recorded at 4am in an empty chapel. Brass, tape hiss and a voice that refuses to leave the room." },
    { title: "Smoke Signals", album: "Midnight Cathedral", meta: "Album track — March 2026", cover: "/images/cover-2.jpg", audio: "/audio/smoke-signals.mp3", desc: "A slow-burning confession wrapped in analog haze — the record’s darkest, most intimate corner." },
    { title: "Cold Marble", album: "Fractures", meta: "Single — November 2025", cover: "/images/cover-3.jpg", audio: "/audio/cold-marble.mp3", desc: "Sub-bass and cathedral strings. Written after the last night of the European tour." },
    { title: "Dust & Neon", album: "Fractures", meta: "Single — August 2025", cover: "/images/cover-4.jpg", audio: "/audio/dust-and-neon.mp3", desc: "Highway drums, desert guitars, and the sound of leaving somewhere for good." },
  ],
  about: [
    "Raised between a church choir loft and a basement studio, $ebAfterDark spent a decade writing for other people before stepping to the front of the record. The result is a body of work that treats silence as an instrument.",
    "Across two albums and a run of singles, the sound has moved from stripped acoustic confessionals to widescreen productions built on live brass, analog tape and cathedral-sized reverb — always anchored by the same unhurried voice.",
    "The new record, Midnight Cathedral, was cut live over eleven nights with a fourteen-piece ensemble and mixed to tape.",
  ],
  artistImage: "/images/artist.jpg",
  stats: [
    { to: 2.4, dec: 1, suffix: "B", label: "Streams worldwide" },
    { to: 3, dec: 0, label: "Grammy nominations" },
    { to: 68, dec: 0, label: "Cities on the last tour" },
    { to: 1, dec: 0, prefix: "#", label: "UK & US album debut" },
  ],
  videos: [
    { title: "Gold Hour", sub: "Official Video", time: "3:48", img: "/images/video-1.jpg" },
    { title: "Smoke Signals", sub: "Live at Union Chapel", time: "5:12", img: "/images/video-2.jpg" },
    { title: "Dust & Neon", sub: "Official Video", time: "4:03", img: "/images/video-3.jpg" },
  ],
  tour: [
    { m: "MAR", d: "14", y: "2026", venue: "The Fillmore", city: "San Francisco, CA", status: "On Sale" },
    { m: "MAR", d: "19", y: "2026", venue: "Hollywood Palladium", city: "Los Angeles, CA", status: "Low Tickets" },
    { m: "APR", d: "02", y: "2026", venue: "Brooklyn Steel", city: "New York, NY", status: "On Sale" },
    { m: "APR", d: "11", y: "2026", venue: "O2 Academy Brixton", city: "London, UK", status: "Sold Out" },
    { m: "APR", d: "24", y: "2026", venue: "Le Trabendo", city: "Paris, FR", status: "On Sale" },
  ],
  contact: { booking: "booking@yourdomain.com", management: "+1 (000) 000-0000", press: "press@yourdomain.com" },
};
