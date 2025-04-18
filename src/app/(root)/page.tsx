import HeroSection from "@/sections/hero-section/HeroSection";
import BenefitsSection from "@/sections/benefits-section/BenefitsSection";
import QuestionsSection from "@/sections/FAQ-section/FAQSection";
import ServicesSection from "@/sections/services-section/ServicesSection";
import TrustSection from "@/sections/trust-section/TrustSection";
import ProjectsSection from "@/sections/projects-section/ProjectsSection";
import { JSX } from 'react';
import BeforeAfterSection from "@/sections/before-after-section/BeforeAfterSection";
import HowItWorksSection from "@/sections/how-it-works-section/HowItWorksSection";

export default function Home(): JSX.Element {
  return (
  <main className="base-layout">
    <HeroSection/>
    <TrustSection/>
    <ServicesSection/>
    <HowItWorksSection/>
    <ProjectsSection/>
    <BeforeAfterSection/>
    <BenefitsSection/>
    <QuestionsSection/>
  </main>
  );
}
