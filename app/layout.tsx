import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ZenFlow — Yoga & Wellness Štúdio Bratislava",
  description:
    "Objavte harmóniu tela a mysle v ZenFlow štúdiu. Hatha, Vinyasa, Yin Yoga, Meditácia. Certifikovaní inštruktori, malé skupiny, prírodné materiály.",
  keywords: "yoga, wellness, štúdio, Bratislava, hatha, vinyasa, meditácia",
  openGraph: {
    title: "ZenFlow — Yoga & Wellness Štúdio",
    description: "Objavte harmóniu tela a mysle v ZenFlow štúdiu.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk" className={`${cormorant.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
