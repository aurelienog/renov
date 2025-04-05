import HeroSection from "@/components/HeroSection";
import styles from "./page.module.css";
import BenefitsSection from "@/components/BenefitsSection";
import QuestionsSection from "@/components/QuestionsSection";
import SocialProofSection from "@/components/SocialProofSection";

export default function Home() {
  return (
  <main>
    <HeroSection/>
    <SocialProofSection/>
    <BenefitsSection/>
    <QuestionsSection/>
  </main>
  );
}
