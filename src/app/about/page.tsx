import BenefitsSection from "@/sections-about/benefits-section/BenefitsSection";
import ConflictSection from "@/sections-about/conflict-section/ConflictSection";
import Landing from "@/sections-about/landing-section/Landing";
import MissionSection from "@/sections-about/mission-section/MissionSection";
import Story from "@/sections-about/story-section/StorySection";
import styles from "./page.module.css"

import { JSX } from 'react';
import Quote from "@/components/quote/Quote";

export default function About(): JSX.Element {
  return (

    <main className={`base-layout ${styles.page}`}>
      <Landing/>
      <Story/>
      <Quote/>
      <ConflictSection/>
      <MissionSection/>
      <BenefitsSection/>
      <section className="section">
        <h2>ANJ Renov, c’est plus qu’un nom.</h2>
        <p> C’est l’histoire d’un artisan qui a grandi avec ce métier, et qui continue à le faire vivre avec cœur.</p>
      </section>
  </main>

  );
}
