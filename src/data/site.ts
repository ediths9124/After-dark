// Everything editable lives here: brand text, images, audio, socials, section copy.
export const site = {
  name: "$ebAfterDark",
  badge: "REBORN",
  tagline: "Artist - Producer from Jersey 💜",
  line: "Built after dark. Reborn through sound.",
  images: {
    studio: "/images/studio.jpg",
    artist: "/images/artist.jpg",
    reborn: "/images/reborn.jpg",
    sound: "/images/sound.jpg",
  },
  track: { title: "Featured Track", src: "/audio/featured-track.mp3" }, // drop your mp3 at public/audio/featured-track.mp3
  nav: [
    { label: "Music", href: "#music" }, { label: "Experience", href: "#experience" },
    { label: "About", href: "#about" }, { label: "Visuals", href: "#visuals" }, { label: "Socials", href: "#socials" },
  ],
  socials: [
    { id: "instagram", label: "Instagram", handle: "@sebafterdark", href: "https://www.instagram.com/sebafterdark/" },
    { id: "tiktok", label: "TikTok", handle: "@sebafterdark", href: "https://www.tiktok.com/@sebafterdark" },
    { id: "x", label: "X", handle: "@wspafterdark", href: "https://x.com/wspafterdark" },
    { id: "youtube", label: "YouTube", handle: "@SebAfterDark", href: "https://www.youtube.com/@SebAfterDark" },
  ],
  rows: [
    { n: "01", label: "Reborn", title: "Rebuilt in the dark", text: "Placeholder copy: describe the REBORN chapter here, what changed and what it sounds like.", img: "/images/reborn.jpg", pos: "50% 50%", ratio: "aspect-[4/5]" },
    { n: "02", label: "The Sound", title: "Jersey R&B meets trap production", text: "Placeholder copy: describe your sound, your process and the records behind it.", img: "/images/sound.jpg", pos: "50% 50%", ratio: "aspect-[4/3]" },
  ],
  about: ["Artist and producer from Jersey. Placeholder: replace this with your own story in your own words.", "Placeholder: add a second paragraph about how you work, late nights in the studio and what is next."],
};
