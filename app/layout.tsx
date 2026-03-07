import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import localFont from "next/font/local";

import "./globals.css";

const display = localFont({
  src: [
    { path: "../public/fonts/cabinet-grotesk-400.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/cabinet-grotesk-500.woff2", weight: "500", style: "normal" },
    { path: "../public/fonts/cabinet-grotesk-700.woff2", weight: "700", style: "normal" },
    { path: "../public/fonts/cabinet-grotesk-800.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-display",
  display: "swap",
});

const body = localFont({
  src: [
    { path: "../public/fonts/general-sans-400.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/general-sans-500.woff2", weight: "500", style: "normal" },
    { path: "../public/fonts/general-sans-600.woff2", weight: "600", style: "normal" },
    { path: "../public/fonts/general-sans-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-body",
  display: "swap",
});

const mono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sahel | Systems That Work",
  description:
    "A blueprint-accurate portfolio for Sahel, an IT Support Engineer with Desktop Engineer depth and an automation-first mindset.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${display.variable} ${body.variable} ${mono.variable} bg-ink font-body text-paper antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
