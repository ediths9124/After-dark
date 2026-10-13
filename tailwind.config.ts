import type { Config } from "tailwindcss";
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { void: "#0a0a0f", neon: "#8b5cf6", deep: "#4c1d95", soft: "#a78bfa", ink: "#f5f3ff", mute: "#a1a1aa" },
    fontFamily: { display: ["var(--font-display)"], sans: ["var(--font-body)"] },
    borderColor: { DEFAULT: "rgba(139,92,246,0.20)" },
  } },
  plugins: [],
} satisfies Config;
