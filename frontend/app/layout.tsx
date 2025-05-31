import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../src/styles/globals.css";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import ThemeRegistry from "../src/styles/theme/ThemeRegistry";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // TODO: modifier les metadata
  title: "Parfumerie de niche",
  description: "Découvrez des parfums rares, élégants et inoubliables.",
  metadataBase: new URL("https://www.monsite-parfum.fr"),
  openGraph: {
    title: "Parfumerie de niche",
    description:
      "Une collection rare et raffinée pour les amateurs de parfums d’exception.",
    url: "https://www.monsite-parfum.fr",
    siteName: "Parfumerie de niche",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Image de présentation de parfums rares",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Parfumerie de niche",
    description: "Découvrez des parfums rares, élégants et inoubliables.",
    images: ["/og-image.jpg"],
    creator: "@toncompte",
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
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
        <ThemeRegistry>
          <Header />
          {children}
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
