import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import "./variables.css";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

const playfair = Playfair_Display({ subsets: ["latin"],
  variable: '--font-primary'
}); 

const inter = Inter({ 
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
      <body className={`${inter.variable} ${playfair.variable}`}>
      <Header/>
        {children}
      <Footer/>
      </body>
    </html>
  );
}
