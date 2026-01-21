import type { Metadata } from "next";
import { Inter, Lora, Cutive_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
});

const cutiveMono = Cutive_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-cutive-mono",
});

export const metadata: Metadata = {
  title: "Mariana Shevchuk - UI/UX Product Designer",
  description: "Product designer passionate about creating meaningful digital experiences through thoughtful design and user-centered solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${lora.variable} ${cutiveMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
