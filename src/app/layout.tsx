import type { Metadata } from "next";
import { Quicksand } from 'next/font/google'

import "./globals.css";

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], 
  variable: '--font-quicksand',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "KI MARKETPLACE",
  description: "Marketplace pour la vente d'article de tous genres.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={quicksand.variable}
      >
        {children}
      </body>
    </html>
  );
}
