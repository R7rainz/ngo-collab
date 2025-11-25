import type React from "react";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "NGO Connect India - Data for Impact",
  description:
    "Empowering NGOs with real-time poverty and education data across Indian states and districts",
  generator: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-sans ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
      >
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  );
}
