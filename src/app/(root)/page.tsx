import HeroSection from "@/sections-home/hero-section/HeroSection";
import TrustSection from "@/sections-home/trust-section/TrustSection";
import { JSX } from 'react';

import BackgroundImage from "@/components/background-image/BackgroundImage";
import heroImage from '../../../public/assets/images/hero.webp';
import dynamic from 'next/dynamic'

const HowItWorksSection = dynamic(() => import('@/sections-home/how-it-works-section/HowItWorksSection'));
const ProjectsSection = dynamic(() => import ("@/sections-home/projects-section/ProjectsSection")) ;
const BenefitsSection = dynamic(() => import ("@/sections-home/benefits-section/BenefitsSection")) ;
const QuestionsSection = dynamic(() => import ("@/sections-home/FAQ-section/FAQSection")) ;
const ServicesSection = dynamic(() => import ("@/sections-home/services-section/ServicesSection")) ;
const BeforeAfterSection = dynamic(() => import ("@/sections-home/before-after-section/BeforeAfterSection")) ;

export default function Home(): JSX.Element {
  return (
  <main className="base-layout">
    <BackgroundImage image={heroImage}/>
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
