
import BenefitsSection from "@/sections/sections-home/benefits-section/BenefitsSection";
import QuestionsSection from "@/sections/sections-home/FAQ-section/FAQSection";
import ServicesSection from "@/sections/sections-home/services-section/ServicesSection";
import TrustSection from "@/sections/sections-home/trust-section/TrustSection";
import ProjectsSection from "@/sections/sections-home/projects-section/ProjectsSection";
import { JSX } from 'react';
import BeforeAfterSection from "@/sections/sections-home/before-after-section/BeforeAfterSection";
import HowItWorksSection from "@/sections/sections-home/how-it-works-section/HowItWorksSection";
import ContactSection from "@/sections/sections-home/contact-section/ContactSection";
import HeroSection from "@/sections/sections-home/hero-section/HeroSection";

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
    <ContactSection/>
  </main>
  );
}
