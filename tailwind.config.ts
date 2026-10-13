import type { Config } from "tailwindcss";
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { void: "#070706", ink: "#f4efe6", gold: "#f0b95a", mute: "#9a968d" },
    fontFamily: { display: ["var(--font-display)"], sans: ["var(--font-body)"] },
    borderColor: { DEFAULT: "rgba(255,255,255,0.12)" },
  } },
  plugins: [],
} satisfies Config;
