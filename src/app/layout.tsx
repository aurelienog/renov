import type { Metadata } from "next";
import { Playfair_Display, Nunito } from "next/font/google";
import "./globals.css";
import "./variables.css";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import BackgroundImage from "@/components/background-image/BackgroundImage";

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-primary'
}); 

const nunito = Nunito({ 
  subsets: ["latin"],
  variable: '--font-secondary'
});

export const metadata: Metadata = {
  title: "Renov",
  description: "Site peintre",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${nunito.variable} ${playfair.variable}`}>
        {children}
      <Footer/>
      </body>
    </html>
  );
}
