import BenefitsSection from "@/sections/sections-about/benefits-section/BenefitsSection";
import ConflictSection from "@/sections/sections-about/conflict-section/ConflictSection";
import Landing from "@/sections/sections-about/landing-section/Landing";
import MissionSection from "@/sections/sections-about/mission-section/MissionSection";
import Story from "@/sections/sections-about/story-section/StorySection";
import styles from "./page.module.css"
import { JSX } from 'react';
import QuoteSection from "@/sections/sections-about/quote-section/QuoteSection";
import { Metadata } from "next";
import WhySection from "@/sections/sections-about/why-section/WhySection";

export const metadata: Metadata = {
  title: "À Propos"
}

export default function About(): JSX.Element {
  return (
    <main className={`base-layout ${styles.page}`}>
      <Landing/>
      <Story/>
      <QuoteSection/>
      <ConflictSection/>
      <MissionSection/>
      <BenefitsSection/>
      <WhySection/>
    </main>
  );
}
