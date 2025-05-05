import HeroSection from "@/sections-home/hero-section/HeroSection";
import BenefitsSection from "@/sections-home/benefits-section/BenefitsSection";
import QuestionsSection from "@/sections-home/FAQ-section/FAQSection";
import ServicesSection from "@/sections-home/services-section/ServicesSection";
import TrustSection from "@/sections-home/trust-section/TrustSection";
import ProjectsSection from "@/sections-home/projects-section/ProjectsSection";
import { JSX } from 'react';
import BeforeAfterSection from "@/sections-home/before-after-section/BeforeAfterSection";
import HowItWorksSection from "@/sections-home/how-it-works-section/HowItWorksSection";

export default function Home(): JSX.Element {
  return (
  <main className="base-layout">
    <HeroSection/>
    <TrustSection/>
    <ServicesSection/>
    <HowItWorksSection/>
    <ProjectsSection/>
    <BenefitsSection/>
    <BeforeAfterSection/>
    <QuestionsSection/>
  </main>
  );
}
