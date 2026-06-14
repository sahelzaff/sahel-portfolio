import type { Metadata, Viewport } from "next";
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
    "Portfolio of Sahel Zaffarulla — IT Lead running multi-country infrastructure, cloud, networking, and endpoint operations for an international shipping group. Automation-first. Azure-certified.",
};

export const viewport: Viewport = {
  themeColor: "#04080F",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${display.variable} ${body.variable} ${mono.variable} bg-ink font-body text-paper antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
