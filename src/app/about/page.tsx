import BenefitsSection from "@/sections/sections-about/benefits-section/BenefitsSection";
import ConflictSection from "@/sections/sections-about/conflict-section/ConflictSection";
import Landing from "@/sections/sections-about/landing-section/Landing";
import MissionSection from "@/sections/sections-about/mission-section/MissionSection";
import Story from "@/sections/sections-about/story-section/StorySection";
import styles from "./page.module.css"
import { JSX } from 'react';
import QuoteSection from "@/sections/sections-about/quote-section/QuoteSection";
import Link from "next/link";

export default function About(): JSX.Element {
  return (
    <main className={`base-layout ${styles.page}`}>
      <Landing/>
      <Story/>
      <QuoteSection/>
      <ConflictSection/>
      <MissionSection/>
      <BenefitsSection/>
      <section className="section">
        <h2>L{`'`}engagement derrière le nom.</h2>
        <p>ANJ RENOV, c{`'`}est le choix d{`'`}<span className='highlight'>un artisan investi</span>, proche de ses clients, et fier de chaque réalisation.</p>
        <Link href={'/'} className="highlight">Vous avez un projet ? Parlons-en.</Link>
      </section>
    </main>
  );
}
