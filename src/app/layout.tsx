import type { Metadata, Viewport } from "next";
import { Syne, Manrope } from "next/font/google";
import "./globals.css";

const display = Syne({ subsets: ["latin"], weight: ["700", "800"], variable: "--font-display" });
const body = Manrope({ subsets: ["latin"], variable: "--font-body" });

const base = process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(base),
  title: "$ebAfterDark | REBORN",
  description: "Official website of $ebAfterDark, artist and producer from Jersey.",
  openGraph: { title: "$ebAfterDark | REBORN", description: "Official website of $ebAfterDark, artist and producer from Jersey.", images: ["/images/studio.jpg"] },
  twitter: { card: "summary_large_image" },
};
export const viewport: Viewport = { themeColor: "#0a0a0f", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
