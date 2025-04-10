import HeroSection from "@/sections/hero-section/HeroSection";
import BenefitsSection from "@/sections/benefits-section/BenefitsSection";
import QuestionsSection from "@/sections/FAQ-section/FAQSection";
import SocialProofSection from "@/sections/social-proof-section/SocialProofSection";
import ServicesSection from "@/sections/services-section/ServicesSection";
import TrustSection from "@/sections/trust-section/TrustSection";


export default function Home() {
  return (
  <main className="base-layout">
    <HeroSection/>
    <TrustSection/>
    <ServicesSection/>
    <SocialProofSection/>
    <BenefitsSection/>
    <QuestionsSection/>
  </main>
  );
}
