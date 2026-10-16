import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://vlush-lingerie.com"),
  title: "V-Lush | Pure where it matters, sensual everywhere else",
  description:
    "Lencería de alta gama sensorial, inclusiva y dermatológicamente segura. Puente interior de 100% algodón orgánico crudo sin blanquear y encajes europeos éticos.",
  keywords: [
    "V-Lush",
    "lencería saludable",
    "gyno-safe",
    "algodón orgánico",
    "lencería sensual sin irritación",
    "sensual underwear",
    "unisex lingerie",
  ],
  authors: [{ name: "Marie & Partner" }],
  openGraph: {
    title: "V-Lush | Lencería Sensual y Saludable",
    description: "Pure where it matters, sensual everywhere else.",
    url: "https://vlush-lingerie.com",
    siteName: "V-Lush",
    images: [
      {
        url: (process.env.NEXT_PUBLIC_BASE_PATH || "") + "/images/brand/vlush-hero-grid.jpg",
        width: 1200,
        height: 800,
        alt: "V-Lush High-End Sensual Lingerie",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${cormorant.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-[#F5F2EB] text-[#1A1A1A]">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
