import type { Metadata } from "next";
import { Playfair_Display, Nunito } from "next/font/google";
import "./globals.css";
import "./variables.css";
import Footer from "@/components/footer/Footer";
import HeaderServer from "@/components/header/HeaderServer";
import Link from "next/link";

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-primary'
}); 

const nunito = Nunito({ 
  subsets: ["latin"],
  variable: '--font-secondary'
});

export const metadata: Metadata = {
  title: {
    default: "A.N.J. RENOV - Artisan Peintre & Rénovation - Yvelines | Val d'Oise",
    template: "%s - A.N.J. RENOV - Artisan Peintre & Rénovation" 
  },
  description: "Services professionnels de peinture et rénovation pour particuliers et entreprises dans les Yvelines et le Val d'Oise.",
  keywords: [
    "peinture",
    "artisan peintre",
    "rénovation",
    "travaux",
    "Yvelines",
    "Val d'Oise",
    "ANJ Renov",
    "peintre Yvelines",
    "peintre Val d'Oise",
    "artisan Yvelines",
    "artisan Val d'Oise",
    "enduits décoratifs", 
    "peintures à effet",
    "revêtements muraux",
    "revêtements de sol",
    "rénovation de boiseries",
    "boiseries",
    "papier peint",
    "peinture intérieure",
    "peinture extérieure"
  ],
  metadataBase: new URL("https://www.anj-renov.fr/"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "A.N.J. RENOV - Artisan Peintre & Rénovation - Yvelines | Val d'Oise",
    description:
      "Services professionnels de peinture et rénovation pour particuliers et entreprises dans les Yvelines et le Val d'Oise.",
    url: "/",
    siteName: "ANJ RENOV",
    images: [
      {
        url: "/assets/images/preview.jpeg",
        width: 1200,
        height: 630,
        alt: "ANJ Renov peinture et rénovation",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "A.N.J. RENOV - Artisan Peintre & Rénovation - Yvelines | Val d'Oise",
    description:
      "Services professionnels de peinture et rénovation pour particuliers et entreprises dans les Yvelines et le Val d'Oise.",
    images: ["/assets/images/preview.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${nunito.variable} ${playfair.variable}`} style={{backgroundColor: 'var(--background)'}}>
        <Link href={'#main'} className="visually-hidden">Aller au contenu principal</Link>
        <HeaderServer />
          {children}
        <Footer/>
      </body>
    </html>
  );
}
