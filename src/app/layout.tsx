import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Templo Salud",
  description: "Tu bienestar es nuestra prioridad",
  icons: {
    icon: '/images/templo-salud-favicon.webp',
    shortcut: '/images/templo-salud-favicon.webp',
    apple: '/images/templo-salud-favicon.webp',
    other: {
      rel: 'icon',
      url: '/images/templo-salud-favicon.webp',
    },
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
