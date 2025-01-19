import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { MAIN_METADATA } from "@/lib/meta";
import Script from "next/script";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: MAIN_METADATA.TITLE,
  description: MAIN_METADATA.DESCRIPTION,
  openGraph: {
    type: "website",
    siteName: MAIN_METADATA.SITE_NAME,
    url: MAIN_METADATA.URL,
    title: MAIN_METADATA.TITLE,
    description: MAIN_METADATA.DESCRIPTION,
    images: MAIN_METADATA.IMAGE,
  },
  twitter: {
    card: "summary",
    title: MAIN_METADATA.TITLE,
    description: MAIN_METADATA.DESCRIPTION,
    images: MAIN_METADATA.IMAGE,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Script src="https://buttons.github.io/buttons.js" async defer />
      </body>
    </html>
  );
}
