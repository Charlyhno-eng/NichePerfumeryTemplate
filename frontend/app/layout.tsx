import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../src/styles/globals.css";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";

const WEBSITE_NAME: string = "https://tonsite.com";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Parfumerie de niche",
  description: "Découvrez des parfums rares, élégants et inoubliables.",
  openGraph: {
    title: "Parfumerie de niche",
    description: "Explorez notre sélection exclusive de parfums d'exception.",
    url: `${WEBSITE_NAME}`,
    siteName: "Parfumerie de niche",
    images: [
      {
        url: `${WEBSITE_NAME}/images/preview.jpg`,
        width: 1200,
        height: 630,
        alt: "Parfum d’exception présenté sur fond élégant",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Parfumerie de niche",
    description: "Explorez notre sélection exclusive de parfums d'exception.",
    images: [`${WEBSITE_NAME}/images/preview.jpg`],
    site: "@tonTwitter",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" type="image/png" href="/logo.png" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
