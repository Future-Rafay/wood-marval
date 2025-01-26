import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abdul Rafay | Web Developer",
  description: "Generated by create next app",
};

// Use next/font to import Montserrat font
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body
        className={`${montserrat.className} max-w-[1440px] mx-auto font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
