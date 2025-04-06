import HeroSection from "@/sections/hero-section/HeroSection";
import BenefitsSection from "@/sections/benefits-section/BenefitsSection";
import QuestionsSection from "@/sections/questions-section/QuestionsSection";
import SocialProofSection from "@/sections/social-proof-section/SocialProofSection";

export default function Home() {
  return (
  <main className="base-layout">
    <HeroSection/>
    <SocialProofSection/>
    <BenefitsSection/>
    <QuestionsSection/>
  </main>
  );
}
