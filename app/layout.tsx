import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "../styles/globals.css";
import MuiThemeProvider from "./MuiThemeProvider";
import Header from "../components/header/Header";
import Footer from "@/components/footer/Footer";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Niche Perfumery",
  description: "A niche perfume e-commerce website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="h-full">
      <body className={`${playfairDisplay.variable} ${inter.variable}`}>
        <MuiThemeProvider>
          <Header />
          {children}
          <Footer />
        </MuiThemeProvider>
      </body>
    </html>
  );
}
