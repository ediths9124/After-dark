import type { Metadata, Viewport } from "next";
import { Bodoni_Moda, Manrope } from "next/font/google";
import "./globals.css";

const display = Bodoni_Moda({ subsets: ["latin"], style: ["normal", "italic"], variable: "--font-display" });
const body = Manrope({ subsets: ["latin"], variable: "--font-body" });
const base = process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000";
const desc = "Official website of $ebAfterDark, artist and producer from Jersey.";

export const metadata: Metadata = {
  metadataBase: new URL(base),
  title: "$ebAfterDark | REBORN",
  description: desc,
  openGraph: { title: "$ebAfterDark | REBORN", description: desc, images: ["/images/hero.jpg"] },
  twitter: { card: "summary_large_image" },
};
export const viewport: Viewport = { themeColor: "#070706", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
